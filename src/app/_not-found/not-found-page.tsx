import Link from "next/link";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

import styles from "./not-found.module.css";

export function NotFoundPage() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <div className={styles.content}>
          <p className={styles.code}>404</p>
          <h1 className={styles.title}>Страница не найдена</h1>
          <p className={styles.description}>
            Возможно, материал был перемещён или ещё в разработке.
            Вернитесь на главную, чтобы продолжить работу с материалами проекта.
          </p>
          <Link href="/" className={styles.cta}>
            На главную
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
