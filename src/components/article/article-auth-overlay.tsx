"use client";

import { usePathname } from "next/navigation";

import { useAuth } from "@/components/auth";

import styles from "./article-wide-layout.module.css";

export const ArticleAuthOverlay = () => {
  const { status } = useAuth();
  const pathname = usePathname();

  if (status !== "unauthenticated") {
    return null;
  }

  const loginHref = `/api/auth/login?returnTo=${encodeURIComponent(pathname || "/")}`;

  return (
    <div className={styles.authOverlay} role="dialog" aria-modal="true">
      <div className={styles.authOverlayCard}>
        <h2 className={styles.authOverlayTitle}>Необходима авторизация</h2>
        <p className={styles.authOverlayText}>
          Информация на сайте предназначена для сотрудников здравоохранения.
          <br />
          Пожалуйста, авторизуйтесь для просмотра материалов.
        </p>
        <a className={styles.authOverlayButton} href={loginHref}>
          Войти
        </a>
      </div>
    </div>
  );
};
