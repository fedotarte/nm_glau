import styles from "./page.module.css";
import { Header, Footer, Hero, ArticleSlider, ArticleCard } from "@/components";

const articles: ArticleCard[] = [
  {
    slug: "clinical-recommendations",
    title: "Клинические рекомендации<br/>по терапии ПОУГ",
  },
  {
    slug: "neuroprotection",
    title: "Нейропротекция<br/>при глаукоме",
  },
  {
    slug: "apg-difference",
    title: "АПГ: В чем разница<br/>между молекулами?",
  },
  {
    slug: "lumistart",
    title: "ЛЮМИСТАРТ — <span>новый</span><br/>старт в терапии ПОУГ",
    highlighted: true,
  },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />

      <main className={styles.main}>
        <Hero
          title="«ТОЧКА ЗРЕНИЯ»"
          subtitle="НА ТЕРАПИЮ ГЛАУКОМЫ"
          description="Проект для врачей офтальмологов, которые хотят не гадать над терапией, а подбирать её с помощью доказательной медицины и накопленного опыта профессионалов"
          backgroundImage="/eye_hero.png"
          backgroundAlt="Глаз с пейзажем — точка зрения на терапию глаукомы"
        >
          <ArticleSlider articles={articles} />
        </Hero>
      </main>

      <Footer />
    </div>
  );
}
