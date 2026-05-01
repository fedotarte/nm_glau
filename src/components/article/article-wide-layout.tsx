import type { ReactNode } from "react";

import { ArticleAuthOverlay } from "./article-auth-overlay";
import styles from "./article-wide-layout.module.css";

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
      <div className={styles.layoutGrid}>
        <div className={styles.mainColumn}>{children}</div>
        {sidebar}
      </div>
      <ArticleAuthOverlay />
    </section>
  );
};
