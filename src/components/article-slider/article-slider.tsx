"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import type { ArticleConfig } from "@/content";

import styles from "./article-slider.module.css";

import "swiper/css";

const ArrowIcon = ({
  className,
  fill,
}: {
  className?: string;
  fill?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill={fill ? fill : "none"}
    className={className}
  >
    <path
      d="M8.90961 20.67C8.71961 20.67 8.52961 20.6 8.37961 20.45C8.08961 20.16 8.08961 19.68 8.37961 19.39L14.8996 12.87C15.3796 12.39 15.3796 11.61 14.8996 11.13L8.37961 4.61002C8.08961 4.32002 8.08961 3.84002 8.37961 3.55002C8.66961 3.26002 9.14961 3.26002 9.43961 3.55002L15.9596 10.07C16.4696 10.58 16.7596 11.27 16.7596 12C16.7596 12.73 16.4796 13.42 15.9596 13.93L9.43961 20.45C9.28961 20.59 9.09961 20.67 8.90961 20.67Z"
      fill="#fff"
      stroke="#fff"
    />
  </svg>
);

interface ArticleSliderProps {
  articles: ArticleConfig[];
}

export const ArticleSlider = ({ articles }: ArticleSliderProps) => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const updateNavState = (swiperInstance: SwiperType) => {
    setIsBeginning(swiperInstance.isBeginning);
    setIsEnd(swiperInstance.isEnd);
  };

  return (
    <section className={styles.slider}>
      <div className={styles.desktopSlider}>
        <div className={styles.swiperContainer}>
          <div
            className={`${styles.fadeLeft} ${isBeginning ? styles.fadeHidden : ""}`}
            onClick={() => swiper?.slidePrev()}
          />
          <div
            className={`${styles.fadeRight} ${isEnd ? styles.fadeHidden : ""}`}
            onClick={() => swiper?.slideNext()}
          />

          <Swiper
            modules={[Navigation]}
            slidesPerView="auto"
            spaceBetween={12}
            onSwiper={(s) => {
              setSwiper(s);
              updateNavState(s);
            }}
            onSlideChange={updateNavState}
            onReachBeginning={() => setIsBeginning(true)}
            onReachEnd={() => setIsEnd(true)}
            onFromEdge={() => {
              setIsBeginning(false);
              setIsEnd(false);
            }}
            className={styles.swiper}
          >
            {articles.map((article) => (
              <SwiperSlide key={article.id} className={styles.slide}>
                <ArticleCard article={article} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation buttons */}
          {!isBeginning && (
            <button
              className={`${styles.navButton} ${styles.navButtonPrev}`}
              onClick={() => swiper?.slidePrev()}
              aria-label="Предыдущий слайд"
            >
              <ArrowIcon />
            </button>
          )}
          {!isEnd && (
            <button
              className={`${styles.navButton} ${styles.navButtonNext}`}
              onClick={() => swiper?.slideNext()}
              aria-label="Следующий слайд"
            >
              <ArrowIcon />
            </button>
          )}
        </div>
      </div>

      <div className={styles.mobileList}>
        {articles.map((article) => (
          <MobileArticleCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
};

const ArticleCard = ({ article }: { article: ArticleConfig }) => {
  const isInDev = article.status === "in_dev";

  if (isInDev) {
    return (
      <div className={styles.cardDisabled}>
        <span className={styles.devBadge}>Материал в разработке</span>
        <h3 className={styles.cardTitle}>{article.title}</h3>
        <ArrowIcon className={styles.cardArrowIconDisabled} />
      </div>
    );
  }

  return (
    <Link href={`/articles/${article.slug}`} className={styles.card}>
      <h3 className={styles.cardTitle}>{article.title}</h3>
      <ArrowIcon className={styles.cardArrowIcon} />
    </Link>
  );
};

const MobileArticleCard = ({ article }: { article: ArticleConfig }) => {
  const isInDev = article.status === "in_dev";

  const content = (
    <>
      {article.icon && (
        <div className={styles.mobileIcon}>
          <Image src={article.icon} alt="" width={32} height={32} />
        </div>
      )}
      <h3 className={styles.mobileTitle}>{article.title}</h3>
      <ArrowIcon className={styles.mobileArrow} />
    </>
  );

  if (isInDev) {
    return <div className={styles.mobileCardDisabled}>{content}</div>;
  }

  return (
    <Link href={`/articles/${article.slug}`} className={styles.mobileCard}>
      {content}
    </Link>
  );
};
