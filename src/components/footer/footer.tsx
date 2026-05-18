import Image from "next/image";
import styles from "./footer.module.css";
import Link from "next/link";

type FooterProps = {
  certificationId?: string;
};

export const Footer = ({ certificationId = "RU-LUM-260006" }: FooterProps) => (
  <footer className={styles.footer}>
    <div className={styles.container}>
      <div className={styles.logoColumn}>
        <a
          href="https://www.abbvie.ru/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/icons/abbvy_footer_logo_2.svg"
            alt="AbbVie"
            width={120}
            height={40}
            className={styles.logo}
          />
        </a>
      </div>

      <div className={styles.infoColumns}>
        <div className={styles.column}>
          <p className={styles.text}>
            Информацию о нежелательных явлениях, связанных с применением
            препаратов компании «ЭббВи», необходимо направить{" "}
            <a
              href="mailto:Pv.russia.cis@abbvie.com"
              className={`${styles.link} ${styles.emailInline}`}
            >
              по&nbsp;E-mail:&nbsp;Pv.russia.cis@abbvie.com
            </a>
          </p>
        </div>

        <div className={styles.column}>
          <p className={styles.text}>
            Материал подготовлен AbbVie. ООО «ЭббВи», 125171, Россия, г. Москва,
            Ленинградское ш., д.16а, стр. 1, 5 этаж;{" "}
            <Link href="tel:+74952584277" className={styles.link}>
              Тел. +7 (495) 258-42-77
            </Link>
          </p>
        </div>

        <div className={styles.column}>
          <p className={styles.text}>
            Информация предназначена исключительно для специалистов
            здравоохранения Российской Федерации.
            <br />
            {certificationId}: дата одобрения, апрель 2026.
          </p>
        </div>
      </div>
    </div>
  </footer>
);
