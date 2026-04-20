import { notFound } from "next/navigation";

import { Footer, Header } from "@/components";
import { ARTICLES } from "@/content";

import { ApgDifferenceContent } from "./apg-difference-content";
import { ClinicalRecommendationsContent } from "./clinical-recommendations-content";
import { LumistartContent } from "./lumistart-content";
import { NeuroprotectionContent } from "./neuroprotection-content";
import { QualityOfLifeContent } from "./quality-of-life-content";
import { SurfaceDiseasesContent } from "./surface-diseases-content";
import { TherapyStartContent } from "./therapy-start-content";
import styles from "./page.module.css";

export const generateStaticParams = () => {
  return ARTICLES.map((article) => ({ slug: article.slug }));
};

export default async function ArticlePage(
  props: PageProps<"/articles/[slug]">,
) {
  const { slug } = await props.params;

  const found = ARTICLES.find((article) => article.slug === slug);

  if (!found) {
    notFound();
  }

  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <article
          className={`${styles.articleLayout} ${
            slug === "clinical-recommendations" ||
            slug === "therapy-start" ||
            slug === "apg-difference" ||
            slug === "lumistart" ||
            slug === "quality-of-life" ||
            slug === "surface-diseases"
              ? styles.articleLayoutWide
              : ""
          }`}
        >
          {slug === "neuroprotection" ? (
            <NeuroprotectionContent />
          ) : slug === "clinical-recommendations" ? (
            <ClinicalRecommendationsContent />
          ) : slug === "therapy-start" ? (
            <TherapyStartContent />
          ) : slug === "apg-difference" ? (
            <ApgDifferenceContent />
          ) : slug === "lumistart" ? (
            <LumistartContent />
          ) : slug === "quality-of-life" ? (
            <QualityOfLifeContent />
          ) : slug === "surface-diseases" ? (
            <SurfaceDiseasesContent />
          ) : (
            <div className={styles.fallback}>
              <h1 className={styles.fallbackTitle}>{found.title}</h1>
              {found.description ? (
                <p className={styles.fallbackDescription}>
                  {found.description}
                </p>
              ) : null}
            </div>
          )}
        </article>
      </main>
      <Footer />
    </div>
  );
}
