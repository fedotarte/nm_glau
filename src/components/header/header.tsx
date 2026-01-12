import Link from "next/link";
import styles from "./header.module.css";

export const Header = () => (
  <header className={styles.header}>
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li>
          <Link href="/materials" className={styles.navLink}>
            Практические материалы
          </Link>
        </li>
        <li>
          <Link href="/therapy" className={styles.navLink}>
            Для терапии
          </Link>
        </li>
      </ul>
      <button type="button" className={styles.loginButton}>
        Войти
      </button>
    </nav>
    <div className={styles.separator} />
  </header>
);
