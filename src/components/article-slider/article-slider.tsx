import Image from "next/image";
import Link from "next/link";
import styles from "./article-slider.module.css";

export interface ArticleCard {
  slug: string;
  title: string;
  highlighted?: boolean;
}

interface ArticleSliderProps {
  articles: ArticleCard[];
}

export const ArticleSlider = ({ articles }: ArticleSliderProps) => (
  <section className={styles.slider}>
    <div className={styles.track}>
      {articles.map((article) =>
        article.highlighted ? (
          <Link
            key={article.slug}
            href={`/articles/${article.slug}`}
            className={styles.cardHighlighted}
          >
            <h3
              className={styles.titleLight}
              dangerouslySetInnerHTML={{ __html: article.title }}
            />
            <span className={styles.navButton} aria-label="Перейти к статье">
              <Image src="/arrow_right.svg" alt="" width={24} height={24} />
            </span>
          </Link>
        ) : (
          <Link
            key={article.slug}
            href={`/articles/${article.slug}`}
            className={styles.card}
          >
            <h3
              className={styles.title}
              dangerouslySetInnerHTML={{ __html: article.title }}
            />
            <Image
              src="/arrow_right.svg"
              alt=""
              width={24}
              height={24}
              className={styles.arrow}
            />
          </Link>
        )
      )}
    </div>
  </section>
);

