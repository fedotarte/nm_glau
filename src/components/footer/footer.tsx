import Image from "next/image";
import styles from "./footer.module.css";
import Link from "next/link";

export const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.container}>
      <div className={styles.logoColumn}>
        <Image
          src="/icons/abbvy_footer_logo_2.svg"
          alt="AbbVie"
          width={120}
          height={40}
          className={styles.logo}
        />
      </div>

      <div className={styles.infoColumns}>
        <div className={styles.column}>
          <p className={styles.text}>
            Информацию о нежелательных явлениях, связанных с применением
            препаратов компании «ЭббВи», необходимо направить по адресу:{" "}
            <Link href="mailto:ruabhvie@abbvie.com" className={styles.link}>
              ruabhvie@abbvie.com
            </Link>
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
            Номер одобрения: RU-XXX-TEST-250011 Июнь 2025.
          </p>
        </div>
      </div>
    </div>
  </footer>
);
