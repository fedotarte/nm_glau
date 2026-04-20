import type { ReactNode } from "react";

import styles from "@/app/articles/[slug]/page.module.css";

type ArticleWideLayoutProps = {
  pageClassName: string;
  sidebar: ReactNode;
  children: ReactNode;
};

/**
 * Shared two-column layout for wide article pages.
 */
export const ArticleWideLayout = ({
  pageClassName,
  sidebar,
  children,
}: ArticleWideLayoutProps) => {
  return (
    <section className={pageClassName}>
      <div className={styles.clinicalGrid}>
        <div className={styles.clinicalMain}>{children}</div>
        {sidebar}
      </div>
    </section>
  );
};
