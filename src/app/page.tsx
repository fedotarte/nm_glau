import styles from "./page.module.css";
import { Header, Footer, Hero, ArticleSlider } from "@/components";
import { getAllArticles } from "@/content";

export default function Home() {
  const articles = getAllArticles();

  return (
    <div className={styles.page}>
      <Header />

      <main className={styles.main}>
        <Hero
          title="«ТОЧКА ЗРЕНИЯ»"
          subtitle="НА ТЕРАПИЮ ГЛАУКОМЫ"
          description="Проект для врачей офтальмологов, которые хотят не гадать над терапией, а подбирать её с помощью доказательной медицины и накопленного опыта профессионалов"
        >
          <ArticleSlider articles={articles} />
        </Hero>
      </main>

      <Footer />
    </div>
  );
}
