import Image from "next/image";
import Link from "next/link";

import {
  ArticleSidebar,
  ArticleTitleBlock,
  ArticleWideLayout,
} from "@/components/article";

import styles from "./page.module.css";
import { TelemostRecordingPlayer } from "./telemost-recording-player";

export const KarlovaVideoContent = () => {
  const sidebar = (
    <ArticleSidebar
      nextMaterial={{
        label: "Старт терапии: какой препарат выбрать?",
        href: "/articles/therapy-start",
      }}
      smallCard={{
        variant: "read",
        title: (
          <>
            Селезнев А.В.
            <br />О проблеме «рестарта» терапии ПОУГ после оперативного лечения
          </>
        ),
        action: { label: "Читать", href: "/articles/seleznev-video" },
      }}
      imageCard={{
        href: "/articles/lumistart",
        imageSrc: "/pictures/articles/articles-eye.png",
        imageAlt: "Люмистарт — новый старт в терапии ПОУГ",
        title: (
          <>
            Люмистарт — новый старт
            <br />в терапии поуг
          </>
        ),
      }}
    />
  );

  return (
    <ArticleWideLayout pageClassName={styles.therapyPage} sidebar={sidebar}>
      <ArticleTitleBlock
        title={
          <>
            карлова е.в. о роли врачебной инертности в выборе стартовой терапии
            поуг
          </>
        }
      />

      <section
        className={`${styles.therapySection} ${styles.karlovaTherapySection}`}
      >
        <p className={styles.karlovaLead}>
          14&nbsp;марта 2026&nbsp;года в городе Москва состоялся 6-й Телемост
          экспертов-глаукоматологов{" "}
          <span className={styles.karlovaLeadEmphasis}>
            «Врачебная инертность: проблемы и решения»
          </span>
          .
        </p>

        <div className={styles.karlovaAuthor}>
          <div className={styles.karlovaAuthorAvatar}>
            <Image
              src="/pictures/articles/karlova-video/karlova-portrait.png"
              alt="Карлова Елена Владимировна"
              width={140}
              height={140}
              sizes="70px"
              className={styles.karlovaAuthorPhoto}
            />
          </div>
          <div className={styles.karlovaAuthorText}>
            <p className={styles.karlovaAuthorName}>
              карлова елена владимировна
            </p>
            <p className={styles.karlovaAuthorMeta}>
              Д.м.н. заместитель главного врача ГБУЗ «СОКОБ им. Т .И.
              Ерошевского», г. Самара
            </p>
          </div>
        </div>

        <p className={styles.karlovaTopic}>
          Тема доклада: Роль врачебной инертности в выборе стартовой терапии
          глаукомы: упущенные возможности или отличный задел на будущее.
        </p>

        <TelemostRecordingPlayer
          posterSrc="/pictures/articles/karlova-video/telemost-banner.png"
          posterAlt="6-й телемост экспертов-глаукоматологов: Москва, 14 марта 2026, Врачебная инертность — проблемы и решения; трансляция на eyenews.ru"
          iframeTitle="Видеозапись доклада Карловой Е.В., 6-й телемост экспертов-глаукоматологов"
          priority
          videoId="6395498589112"
        />

        <Link href="https://lk.regmed.ru/Register/EAEU_SmPC">
          <Image
            src="/pictures/articles/karlova-video/lumistart-banner.png"
            alt="Люмистарт: биматопрост 0,3 мг/мл, по одной капле раз в сутки вечером, без консерванта"
            width={1024}
            height={179}
            className={styles.therapyBanner}
          />
        </Link>
        <p className={styles.karlovaBannerCaption}>
          RU-LUM-260013: дата одобрения, май 2026
        </p>
      </section>
    </ArticleWideLayout>
  );
};
