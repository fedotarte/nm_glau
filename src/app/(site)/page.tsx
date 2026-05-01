import dynamic from "next/dynamic";

import { BackgroundVideo } from "@/components/background-video";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import styles from "./page.module.css";
import { getAllArticles } from "@/content";

const ArticleSlider = dynamic(() =>
  import("@/components/article-slider/article-slider").then(
    (mod) => mod.ArticleSlider,
  ),
);

const MobileArticleList = dynamic(() =>
  import("@/components/article-slider/mobile-article-list").then(
    (mod) => mod.MobileArticleList,
  ),
);

export default function Home() {
  const articles = getAllArticles();

  return (
    <div className={styles.page}>
      <BackgroundVideo
        className={styles.backgroundVideo}
        poster="/pictures/eye_hero.png"
      />
      <div className={styles.globalMobileFide}></div>
      <div className={styles.globalMobileFideBottom}></div>
      <Header />

      <main className={styles.main}>
        <Hero
          title="«ТОЧКА ЗРЕНИЯ»"
          subtitle="НА ТЕРАПИЮ ПОУГ*"
          description="Проект для врачей-офтальмологов, посвященный рациональному выбору терапии ПОУГ на основе клинических данных и профессиональной экспертизы"
          subLink="*Первичная открытоугольная глаукома"
        >
          <ArticleSlider articles={articles} />
        </Hero>
        <MobileArticleList articles={articles} />
      </main>

      <Footer />
    </div>
  );
}
