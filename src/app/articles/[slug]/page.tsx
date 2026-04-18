import { notFound } from "next/navigation";

import { Footer, Header } from "@/components";
import { ARTICLES } from "@/content";

import { NeuroprotectionContent } from "./neuroprotection-content";
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
        <article className={styles.articleLayout}>
          {slug === "neuroprotection" ? (
            <NeuroprotectionContent />
          ) : (
            <div className={styles.fallback}>
              <h1 className={styles.fallbackTitle}>{found.title}</h1>
              {found.description ? (
                <p className={styles.fallbackDescription}>{found.description}</p>
              ) : null}
            </div>
          )}
        </article>
      </main>
      <Footer />
    </div>
  );
}
