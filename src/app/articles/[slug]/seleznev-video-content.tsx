import Image from "next/image";
import Link from "next/link";

import {
  ArticleSidebar,
  ArticleTitleBlock,
  ArticleWideLayout,
} from "@/components/article";

import styles from "./page.module.css";
import { TelemostRecordingPlayer } from "./telemost-recording-player";

export const SeleznevVideoContent = () => {
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
            Клинические рекомендации
            <br />
            по терапии ПОУГ 2024
          </>
        ),
        action: { label: "Читать", href: "/articles/clinical-recommendations" },
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
            селезнев а.в. о проблеме «рестарта» терапии поуг после оперативного
            лечения
          </>
        }
      />

      <section
        className={`${styles.therapySection} ${styles.karlovaTherapySection}`}
      >
        <p className={styles.karlovaLead}>
          14&nbsp;марта 2026&nbsp;года в городе Москва состоялся 6-й Телемост
          экспертов-глаукоматологов «Врачебная инертность: проблемы и решения».
        </p>

        <div className={styles.karlovaAuthor}>
          <div className={styles.karlovaAuthorAvatar}>
            <Image
              src="/pictures/articles/seleznev-video/seleznev-portrait.png"
              alt="Селезнев Алексей Владимирович"
              width={140}
              height={140}
              sizes="70px"
              className={styles.karlovaAuthorPhoto}
            />
          </div>
          <div className={styles.karlovaAuthorText}>
            <p className={styles.karlovaAuthorName}>
              селезнев алексей владимирович
            </p>
            <p className={styles.karlovaAuthorMeta}>
              К.м.н., врач высшей категории
            </p>
          </div>
        </div>

        <p className={styles.karlovaTopic}>
          Тема доклада: Проблемы в вопросе «рестарта» терапии после оперативного
          лечения глаукомы и варианты их преодоления.
        </p>

        <TelemostRecordingPlayer
          posterSrc="/pictures/articles/karlova-video/telemost-banner.png"
          posterAlt="6-й телемост экспертов-глаукоматологов: Москва, 14 марта 2026, Врачебная инертность — проблемы и решения; трансляция на eyenews.ru"
          iframeTitle="Видеозапись доклада Карловой Е.В., 6-й телемост экспертов-глаукоматологов"
          priority
          videoId="6395497008112"
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
