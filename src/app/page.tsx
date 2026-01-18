import styles from "./page.module.css";
import { Header, Footer, Hero, ArticleSlider } from "@/components";
import { getAllArticles } from "@/content";
import { ArticleCard } from "@/components/article-slider/article-slider";

export default function Home() {
  const articles = getAllArticles();

  return (
    <div className={styles.page}>
      <div className={styles.globalMobileFide}></div>
      <div className={styles.globalMobileFideBottom}></div>
      <Header />

      <main className={styles.main}>
        <Hero
          title="«ТОЧКА ЗРЕНИЯ»"
          subtitle="НА ТЕРАПИЮ ГЛАУКОМЫ"
          description="Проект для врачей офтальмологов, которые хотят не гадать над терапией, а подбирать её с помощью доказательной медицины и накопленного опыта профессионалов"
        >
          <ArticleSlider articles={articles} />
        </Hero>
        <div className={styles.articlesContainer}>
          {articles.map((article) => {
            return <ArticleCard article={article} key={article.id} />;
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
}
