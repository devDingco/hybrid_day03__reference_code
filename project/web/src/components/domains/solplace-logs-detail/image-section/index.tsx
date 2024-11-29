"use client";

import styles from "./styles.module.css";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import SolplaceLogsDetailImages from "./detail-images";
import { useBoardDetail } from "@/commons/hooks/use-board-detail";

export default function SolplaceLogsDetailImageSection() {
  const { data } = useBoardDetail();

  const images = data?.fetchSolplaceLog?.images;
  return (
    <section className={styles.section}>
      <Swiper spaceBetween={30} slidesPerView={1} allowSlideNext allowSlidePrev>
        {images?.map((image: string, index: number) => (
          <SwiperSlide key={index}>
            <SolplaceLogsDetailImages image={image} imageIndex={index + 1} totalImage={images.length} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
