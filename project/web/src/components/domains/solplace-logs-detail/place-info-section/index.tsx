"use client";

import { Title } from "@/components/commons/title";
import SolplaceLogsDetailAddress from "./address";
import styles from "./styles.module.css";
import Image from "next/image";
import { ICONS } from "@/commons/constants/images";
import Link from "next/link";
import { useBoardDetail } from "@/commons/hooks/use-board-detail";
import { useParams } from "next/navigation";

export default function SolplaceLogsDetailPlaceInfoSection() {
  const params = useParams();
  const id = params.solplaceLogId.toString();
  const { data } = useBoardDetail();
  const boardDetailData = data?.fetchSolplaceLog;

  return (
    <section className={styles.section}>
      <div className={styles.title_wrapper}>
        <Title title={boardDetailData?.title} />
        <Link href={`/solplace-logs/${id}/edit`}>
          <Image className={styles.edit_icon} src={ICONS.edit.src} alt={ICONS.edit.alt} width={0} height={0} />
        </Link>
      </div>
      <SolplaceLogsDetailAddress
        initialAddress={boardDetailData?.address}
        initialCenter={{ lat: boardDetailData?.lat, lng: boardDetailData?.lng }}
      />
    </section>
  );
}
