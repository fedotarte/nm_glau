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
      <button type="button" className={styles.burgerButton}>
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M35 12.9167H5C4.31667 12.9167 3.75 12.3501 3.75 11.6667C3.75 10.9834 4.31667 10.4167 5 10.4167H35C35.6833 10.4167 36.25 10.9834 36.25 11.6667C36.25 12.3501 35.6833 12.9167 35 12.9167Z"
            fill="white"
          />
          <path
            d="M35 21.25H5C4.31667 21.25 3.75 20.6833 3.75 20C3.75 19.3167 4.31667 18.75 5 18.75H35C35.6833 18.75 36.25 19.3167 36.25 20C36.25 20.6833 35.6833 21.25 35 21.25Z"
            fill="white"
          />
          <path
            d="M35 29.5833H5C4.31667 29.5833 3.75 29.0166 3.75 28.3333C3.75 27.6499 4.31667 27.0833 5 27.0833H35C35.6833 27.0833 36.25 27.6499 36.25 28.3333C36.25 29.0166 35.6833 29.5833 35 29.5833Z"
            fill="white"
          />
        </svg>
      </button>
    </nav>
    <div className={styles.separator} />
  </header>
);
