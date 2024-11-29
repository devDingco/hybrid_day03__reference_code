"use client";

import { ICONS } from "@/commons/constants/images";
import Image from "next/image";
import { useState } from "react";
import styles from "./styles.module.css";
import { useRouter } from "next/navigation";

export default function Navigation() {
  const router = useRouter();
  const [isPlace, setIsPlace] = useState(true);

  const handleChangeNav = () => {
    setIsPlace((prev) => !prev);

    if (isPlace === true) {
      router.push("/mypage");
    } else {
      router.push("/solplace-logs");
    }
  };
  return (
    <div className={styles.nav}>
      <button className={styles.nav_button} disabled={isPlace} onClick={handleChangeNav}>
        {isPlace ? (
          <Image
            className={styles.nav_icon}
            src={ICONS.locationActive.src}
            alt={ICONS.locationActive.alt}
            width={0}
            height={0}
          />
        ) : (
          <Image
            className={styles.nav_icon}
            src={ICONS.locationInactive.src}
            alt={ICONS.locationInactive.alt}
            width={0}
            height={0}
          />
        )}
        <span>플레이스</span>
      </button>
      <button className={styles.nav_button} disabled={isPlace && false} onClick={handleChangeNav}>
        {isPlace ? (
          <Image
            className={styles.nav_icon}
            src={ICONS.mypageInactive.src}
            alt={ICONS.mypageInactive.alt}
            width={0}
            height={0}
          />
        ) : (
          <Image
            className={styles.nav_icon}
            src={ICONS.mypageActive.src}
            alt={ICONS.mypageActive.alt}
            width={0}
            height={0}
          />
        )}
        <span>내 설정</span>
      </button>
    </div>
  );
}
