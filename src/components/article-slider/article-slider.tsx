"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import type { ArticleConfig } from "@/content";

import { ArrowIcon, DesktopArticleCard } from "./article-card";
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

  const containerClassName = `${styles.swiperContainer} ${
    isBeginning ? styles.maskRight : ""
  } ${isEnd ? styles.maskLeft : ""} ${
    !isBeginning && !isEnd ? styles.maskBoth : ""
  }`;

  return (
    <section className={styles.slider}>
      <div className={styles.desktopSlider}>
        <div className={containerClassName}>
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
                <DesktopArticleCard article={article} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

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

    </section>
  );
};
