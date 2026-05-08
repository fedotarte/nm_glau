import type { Metadata } from "next";
import { cookies } from "next/headers";
import dynamicImport from "next/dynamic";
import { notFound, redirect } from "next/navigation";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ArticleSlug, getArticleBySlug, getDoneArticles } from "@/content";
import { AUTH_FORCE_AUTHENTICATED } from "@/lib/auth/config";
import {
  getAuthTokenFromCookies,
  verifyTokenWithPharmVision,
} from "@/lib/auth/server";

import styles from "./page.module.css";

const ARTICLE_COMPONENTS = {
  [ArticleSlug.Neuroprotection]: dynamicImport(() =>
    import("./neuroprotection-content").then((m) => m.NeuroprotectionContent),
  ),
  [ArticleSlug.ClinicalRecommendations]: dynamicImport(() =>
    import("./clinical-recommendations-content").then(
      (m) => m.ClinicalRecommendationsContent,
    ),
  ),
  [ArticleSlug.TherapyStart]: dynamicImport(() =>
    import("./therapy-start-content").then((m) => m.TherapyStartContent),
  ),
  [ArticleSlug.ApgDifference]: dynamicImport(() =>
    import("./apg-difference-content").then((m) => m.ApgDifferenceContent),
  ),
  [ArticleSlug.Lumistart]: dynamicImport(() =>
    import("./lumistart-content").then((m) => m.LumistartContent),
  ),
  [ArticleSlug.QualityOfLife]: dynamicImport(() =>
    import("./quality-of-life-content").then((m) => m.QualityOfLifeContent),
  ),
  [ArticleSlug.SurfaceDiseases]: dynamicImport(() =>
    import("./surface-diseases-content").then((m) => m.SurfaceDiseasesContent),
  ),
} as const;

type KnownSlug = keyof typeof ARTICLE_COMPONENTS;

const isKnownSlug = (slug: string): slug is KnownSlug =>
  Object.hasOwn(ARTICLE_COMPONENTS, slug);

export const dynamic = "force-dynamic";
export const revalidate = 0;

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

  const returnTo = `/articles/${article.slug}`;
  const loginUrl = `/api/auth/login?returnTo=${encodeURIComponent(returnTo)}`;
  if (!AUTH_FORCE_AUTHENTICATED) {
    const cookieStore = await cookies();
    const token = getAuthTokenFromCookies(cookieStore);

    if (!token) {
      redirect(loginUrl);
    }

    const verifyResult = await verifyTokenWithPharmVision(token);
    if (!verifyResult.ok) {
      redirect(loginUrl);
    }
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
