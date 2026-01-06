import Image from "next/image";
import styles from "./footer.module.css";

export const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.container}>
      <div className={styles.logoColumn}>
        <Image
          src="/abbvy_footer_logo_2.svg"
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
            <a href="mailto:ruabhvie@abbvie.com" className={styles.link}>
              ruabhvie@abbvie.com
            </a>
          </p>
        </div>
        
        <div className={styles.column}>
          <p className={styles.text}>
            Материал подготовлен при поддержке ООО «ЭббВи»,
            <br />
            125196, Москва, ул. Лесная, д. 7
            <br />
            Тел. +7 (495) 258-42-77
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
