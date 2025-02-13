"use client";

import PlaceCard from "@/components/commons/place-card";
import styles from "./styles.module.css";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Footer from "@/commons/layout/footer";
import { FETCH_SOLPLACE_LOGS } from "@/commons/apis/graphql/queries/fetch-solplace-logs.query";
import Image from "next/image";
import Link from "next/link";
import { ICONS } from "@/commons/constants/images";

type TFetchBoards = {
  id: string;
  images: string[];
  title: string;
  contents: string;
  addressCity: string;
  addressTown: string;
};

export default function SolplaceLogsList() {
  const [hasMore, setHasMore] = useState(true);
  const { data, fetchMore } = useQuery(FETCH_SOLPLACE_LOGS);

  console.log(data);

  const onNext = () => {
    if (data === undefined) return;

    fetchMore({
      variables: {
        page: Math.ceil((data?.fetchSolplaceLogs.length ?? 10) / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        console.log("fetchMoreResult.fetchSolplaceLogs", fetchMoreResult.fetchSolplaceLogs);
        if (fetchMoreResult.fetchSolplaceLogs.length === 0) {
          setHasMore(false);
        }
        return {
          fetchSolplaceLogs: [...prev.fetchSolplaceLogs, ...fetchMoreResult.fetchSolplaceLogs],
        };
      },
    });
  };

  return (
    <>
      <section style={{ paddingBottom: "4rem" }} className={data || styles.section}>
        <InfiniteScroll
          dataLength={data?.fetchSolplaceLogs?.length ?? 0}
          next={onNext}
          hasMore={hasMore}
          loader={<></>} // 로딩 중 스피너 또는 텍스트 표시
        >
          {data ? (
            <div className={styles.cards}>
              {data.fetchSolplaceLogs?.map((el: TFetchBoards) => (
                <PlaceCard
                  key={el.id}
                  id={el.id}
                  images={el.images[0]}
                  title={el.title}
                  contents={el.contents}
                  addressCity={el.addressCity}
                  addressTown={el.addressTown}
                />
              ))}
            </div>
          ) : (
            <div className={styles.no_place_wrapper}>
              <div className={styles.no_place}>등록된 플레이스가 없습니다.</div>
            </div>
          )}
        </InfiniteScroll>
        <Link href="/solplace-logs/new">
          <Image
            className={styles.floating_button}
            src={ICONS.solplaceLogsNewFloating.src}
            alt={ICONS.solplaceLogsNewFloating.alt}
            width={0}
            height={0}
          />
        </Link>
      </section>
      <Footer buttonText="" />
    </>
  );
}
