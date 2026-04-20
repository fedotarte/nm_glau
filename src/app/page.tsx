import styles from "./page.module.css";
import {
  Header,
  Footer,
  Hero,
  ArticleSlider,
  ScrollShadowList,
  BackgroundVideo,
} from "@/components";
import { getAllArticles } from "@/content";
import { ArticleCard } from "@/components/article-slider/article-slider";

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
        <ScrollShadowList>
          {articles.map((article, index) => {
            return (
              <ArticleCard
                article={article}
                key={article.id}
                isAuthenticated={index === 0}
              />
            );
          })}
        </ScrollShadowList>
      </main>

      <Footer />
    </div>
  );
}
