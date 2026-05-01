"use client";

import { useState, type ReactNode } from "react";

import styles from "@/app/articles/[slug]/page.module.css";
import { useAuth } from "@/components";
import { usePathname } from "next/navigation";

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
  const { isAuthenticated } = useAuth();
  const pathname = usePathname();
  const loginHref = `/api/auth/login?returnTo=${encodeURIComponent(pathname || "/")}`;

  return (
    <section className={pageClassName}>
      <div className={styles.clinicalGrid}>
        <div className={styles.clinicalMain}>{children}</div>
        {sidebar}
      </div>
      {isAuthenticated ? (
        <div className={styles.authOverlay} role="dialog" aria-modal="true">
          <div className={styles.authOverlayCard}>
            <h2 className={styles.authOverlayTitle}>Необходима авторизация</h2>
            <p className={styles.authOverlayText}>
              Информация на сайте предназначена для сотрудников здравоохранения.
              <br />
              Пожалуйста, авторизуйтесь для просмотра материалов.
            </p>
            <a
              type="button"
              className={styles.authOverlayButton}
              href={loginHref}
            >
              Войти
            </a>
          </div>
        </div>
      ) : null}
    </section>
  );
};
