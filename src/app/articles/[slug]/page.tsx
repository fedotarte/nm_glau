import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";

import { Footer, Header } from "@/components";
import { ArticleSlug, getArticleBySlug, getDoneArticles } from "@/content";

import styles from "./page.module.css";

const ARTICLE_COMPONENTS = {
  [ArticleSlug.Neuroprotection]: dynamic(() =>
    import("./neuroprotection-content").then((m) => m.NeuroprotectionContent),
  ),
  [ArticleSlug.ClinicalRecommendations]: dynamic(() =>
    import("./clinical-recommendations-content").then(
      (m) => m.ClinicalRecommendationsContent,
    ),
  ),
  [ArticleSlug.TherapyStart]: dynamic(() =>
    import("./therapy-start-content").then((m) => m.TherapyStartContent),
  ),
  [ArticleSlug.ApgDifference]: dynamic(() =>
    import("./apg-difference-content").then((m) => m.ApgDifferenceContent),
  ),
  [ArticleSlug.Lumistart]: dynamic(() =>
    import("./lumistart-content").then((m) => m.LumistartContent),
  ),
  [ArticleSlug.QualityOfLife]: dynamic(() =>
    import("./quality-of-life-content").then((m) => m.QualityOfLifeContent),
  ),
  [ArticleSlug.SurfaceDiseases]: dynamic(() =>
    import("./surface-diseases-content").then((m) => m.SurfaceDiseasesContent),
  ),
} as const;

type KnownSlug = keyof typeof ARTICLE_COMPONENTS;

const isKnownSlug = (slug: string): slug is KnownSlug =>
  Object.prototype.hasOwnProperty.call(ARTICLE_COMPONENTS, slug);

export const generateStaticParams = () => {
  return getDoneArticles()
    .filter((article) => isKnownSlug(article.slug))
    .map((article) => ({ slug: article.slug }));
};

export async function generateMetadata(
  props: PageProps<"/articles/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {};
  }

  const canonical = `/articles/${article.slug}`;
  const indexable = article.status === "done" && isKnownSlug(article.slug);

  return {
    title: article.title,
    description: article.description,
    alternates: { canonical },
    openGraph: {
      type: "article",
      url: canonical,
      title: article.title,
      description: article.description,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
    },
    robots: {
      index: indexable,
      follow: indexable,
    },
  };
}

export default async function ArticlePage(
  props: PageProps<"/articles/[slug]">,
) {
  const { slug } = await props.params;
  const article = getArticleBySlug(slug);

  if (!article || article.status !== "done" || !isKnownSlug(article.slug)) {
    notFound();
  }

  const Content = ARTICLE_COMPONENTS[article.slug];
  const layoutClassName =
    article.layout === "wide"
      ? `${styles.articleLayout} ${styles.articleLayoutWide}`
      : styles.articleLayout;

  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <article className={layoutClassName}>
          <Content />
        </article>
      </main>
      <Footer />
    </div>
  );
}
