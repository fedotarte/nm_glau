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
              <Image
                src="/base_arrow_right.svg"
                alt=""
                width={20}
                height={20}
              />
            </button>
          )}
          {!isEnd && (
            <button
              className={`${styles.navButton} ${styles.navButtonNext}`}
              onClick={() => swiper?.slideNext()}
              aria-label="Следующий слайд"
            >
              <Image
                src="/base_arrow_right.svg"
                alt=""
                width={20}
                height={20}
              />
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
        <Image
          src="/base_arrow_right.svg"
          alt=""
          width={24}
          height={24}
          className={styles.cardArrow}
        />
      </div>
    );
  }

  return (
    <Link href={`/articles/${article.slug}`} className={styles.card}>
      <h3 className={styles.cardTitle}>{article.title}</h3>
      <Image
        src="/base_arrow_right.svg"
        alt=""
        width={24}
        height={24}
        className={styles.cardArrow}
      />
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
      <Image
        src="/base_arrow_right.svg"
        alt=""
        width={24}
        height={24}
        className={styles.mobileArrow}
      />
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
