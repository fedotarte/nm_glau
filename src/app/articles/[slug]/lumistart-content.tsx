import Image from "next/image";
import Link from "next/link";

import {
  ArticleReferences,
  ArticleSectionHeading,
  ArticleTitleBlock,
  ArticleWideLayout,
} from "@/components";

import styles from "./page.module.css";

const REFERENCES = [
  "ЛВ/ОХЛП препарата Люмистарт опубликованы на сайте https://lk.regmed.ru/Register/EAEU_SmPC. (Дата доступа: 19.02.2026).",
  "Pillunat L. et al. Clin Ophthalmol. 2016; 10: 1759-1765.",
  "Day D. et al. Br Ophthalmol. 2013; 97(8): 989-993.",
  "Stalmans et al. Eur Ophthalmol. 2013; 23(4): 518-525.",
  "Thygesen J. Clin Ophthalmol. 2018; 12: 707-717.",
  "Jaenen N. et al. Euro J Ophthalmol. 2007; 17(3): 341-349.",
  "Клинические рекомендации МЗ РФ «Глаукома первичная открытоугольная», 2024. https://cr.minzdrav.gov.ru/ (дата доступа: 18.03.2026).",
];

const LumistartSidebar = () => {
  return (
    <aside className={styles.clinicalSidebar}>
      <p className={styles.sidebarCaption}>Следующий материал:</p>
      <Link href="/articles/quality-of-life" className={styles.sidebarNextCard}>
        <span>Что может повысить качество жизни у пациентов с глаукомой?</span>
        <Image
          src="/icons/base_arrow_right.svg"
          alt=""
          aria-hidden="true"
          width={10}
          height={19}
          className={styles.sidebarArrow}
        />
      </Link>

      <h3 className={styles.sidebarTitle}>
        Другие материалы
        <br />
        по теме:
      </h3>

      <div className={styles.sidebarSmallCard}>
        <p>
          Заболевания поверхности глаз
          <br />
          и приверженность
          <br />к лечению
        </p>
        <Link
          href="/articles/surface-diseases"
          className={styles.sidebarReadButton}
        >
          Читать
        </Link>
      </div>

      <div className={styles.sidebarSmallCard}>
        <p>АПГ: В чем разница между молекулами</p>
        <Link
          href="/articles/apg-difference"
          className={styles.sidebarReadButton}
        >
          Читать
        </Link>
      </div>
    </aside>
  );
};

export const LumistartContent = () => {
  return (
    <ArticleWideLayout
      pageClassName={styles.therapyPage}
      sidebar={<LumistartSidebar />}
    >
      <ArticleTitleBlock
        containerClassName={styles.therapyTitleBlock}
        titleClassName={`${styles.therapyTitle} ${styles.lumistartPageTitle}`}
        dividerClassName={styles.clinicalTitleDivider}
        title={
          <>
            ЛЮМИСТАРТ —&nbsp; НОВЫЙ СТАРТ* В ТЕРАПИИ ПОУГ
            <sup className={styles.therapySectionHeadingRef}>1, 7</sup>
          </>
        }
      />

      <Image
        src="/pictures/articles/lumistart/top-banner.png"
        alt="На старте заболевания Люмистарт: биматопрост 0,3 мг/мл по одной капле раз в сутки, без консерванта"
        width={969}
        height={170}
        className={styles.therapyBanner}
      />

      <section className={styles.therapySection}>
        <ArticleSectionHeading
          className={`${styles.therapySectionHeading} ${styles.lumistartSectionHeading}`}
          contentClassName={styles.therapySectionHeadingInner}
          title={
            <>
              ФОКУС НА ЭФФЕКТИВНОСТЬ: БИМАТОПРОСТ СОГЛАСНО РЕЗУЛЬТАТАМ
              ИССЛЕДОВАНИЯ ОБЕСПЕЧИВАЕТ ДОПОЛНИТЕЛЬНОЕ СНИЖЕНИЕ ВГД ПРИ ПЕРЕВОДЕ
              С ПРЕДШЕСТВУЮЩЕЙ ТЕРАПИИ
            </>
          }
          supText="2"
          supClassName={styles.therapySectionHeadingRef}
        />
        <p className={`${styles.clinicalBody} ${styles.clinicalBodySemibold}`}>
          На 12-й неделе применения препарата ЛЮМИСТАРТ (биматопрост 0,03 %) без
          консервантов наблюдалось среднее снижение ВГД на 23&nbsp;% по
          сравнению с уровнем ВГД на этапе включения (N&nbsp;=&nbsp;1543;
          p&nbsp;&lt;&nbsp;0,0001)
          <sup className={styles.therapyGlossarySup}>2</sup>.
        </p>
        <ul className={styles.clinicalBodyBulletList}>
          <li>
            При переходе с других АПГ препаратов на ЛЮМИСТАРТ наблюдалось
            значительное снижение ВГД у пациентов, у которых предшествующее
            лечение не обеспечивало надлежащего контроля ВГД
            <sup className={styles.therapyGlossarySup}>2</sup>.
          </li>
        </ul>

        <Image
          src="/pictures/articles/lumistart/overall-efficacy.png"
          alt="Общее среднее значение ± SD ВГД у пациентов, перешедших на терапию Люмистарт"
          width={888}
          height={509}
          className={styles.lumistartChartImage}
        />
        <p className={styles.lumistartCallout}>
          Переход на препарат ЛЮМИСТАРТ может обеспечить дополнительное снижение
          ВГД у пациентов, у которых наблюдается недостаточный контроль ВГД при
          лечении, направленном на снижение ВГД
          <sup className={styles.therapyGlossarySup}>2</sup>.
        </p>
      </section>

      <section className={styles.therapySection}>
        <ArticleSectionHeading
          className={`${styles.therapySectionHeading} ${styles.lumistartSectionHeading}`}
          contentClassName={styles.therapySectionHeadingInner}
          title={
            <>
              ОРИЕНТАЦИЯ НА ПЕРЕНОСИМОСТЬ: ЛЮМИСТАРТ ПРЕДСТАВЛЯЕТ СОБОЙ АПГ ДЛЯ
              МОНОТЕРАПИИ С БЛАГОПРИЯТНЫМ ПРОФИЛЕМ ПЕРЕНОСИМОСТИ*, †,{" "}
              <sup className={styles.therapySectionHeadingRef}>2</sup>
            </>
          }
        />
        <Image
          src="/pictures/articles/lumistart/tolerability-rings.png"
          alt="Переносимость биматопроста и приверженность к терапии Люмистарт"
          width={969}
          height={444}
          className={styles.lumistartWideImage}
        />
        <p className={styles.lumistartCallout}>
          Наиболее частой причиной перехода с предыдущей терапии по снижению ВГД
          на биматопрост БК 0,03&nbsp;% был неадекватный контроль ВГД, о чем
          сообщили 73,9&nbsp;% пациентов. Недостаточная переносимость, признаки
          прогрессирования глаукомы и несоблюдение предшествующей терапии были
          отмечены у 37,4&nbsp;%, 18,8&nbsp;% и 12,3&nbsp;% пациентов
          соответственно.
        </p>
      </section>

      <section className={styles.therapySection}>
        <ArticleSectionHeading
          className={`${styles.therapySectionHeading} ${styles.lumistartSectionHeading}`}
          contentClassName={styles.therapySectionHeadingInner}
          title={
            <>
              ОРИЕНТАЦИЯ НА СНИЖЕНИЕ ПОРАЖЕНИЙ ПЕРЕДНЕЙ ПОВЕРХНОСТИ ГЛАЗА:
              ЛЮМИСТАРТ БЕЗ КОНСЕРВАНТОВ МОЖЕТ НЕСТИ ДОПОЛНИТЕЛЬНУЮ ПОЛЬЗУ
              ПАЦИЕНТАМ, НУЖДАЮЩИМСЯ В ДОЛГОСРОЧНОМ ЛЕЧЕНИИ ГЛАУКОМЫ
              <sup className={styles.therapySectionHeadingRef}>1–5</sup>
            </>
          }
        />
        <p className={styles.clinicalBody}>
          У пациентов с непереносимостью консервантов ЛЮМИСТАРТ обеспечивает
          снижение ВГД, снижая вероятность потенциальных проблем с долгосрочной
          переносимостью, из-за наличия консерванта в составе препарата
          <sup className={styles.therapyGlossarySup}>*,1–5</sup>.
        </p>
        <Image
          src="/pictures/articles/lumistart/ophthalmic-symptoms.png"
          alt="Офтальмологические симптомы при применении капель с консервантами и без консервантов"
          width={969}
          height={684}
          className={styles.lumistartWideImage}
        />
        <p className={styles.lumistartCallout}>
          У пациентов, которым требуется длительное местное лечение, препарат
          ЛЮМИСТАРТ без консерванта может способствовать уменьшению проблем,
          связанных с долгосрочной переносимостью
          <sup className={styles.therapyGlossarySup}>1–5</sup>.
        </p>
      </section>

      <p className={styles.clinicalBody}>
        * Данное исследование было открытым исследованием по оценке
        эффективности и переносимости препарата ЛЮМИСТАРТ, а также
        приверженности лечению у 1830 пациентов с ПОУГ и ОГ, которые были
        переведены на терапию препаратом ЛЮМИСТАРТ с ранее назначенного
        препарата местного применения для снижения ВГД по медицинским
        показаниям. Доступны полные данные для 1543 пациентов
        <sup className={styles.therapyGlossarySup}>2</sup>. † Сбор
        доказательств, полученных в условиях реальной клинической практики,
        осуществляется вне контролируемых клинических исследований и имеет
        неотъемлемые ограничения, в том числе меньшую способность контроля
        факторов, искажающих результаты. ‡ Основания для перевода пациентов на
        лечение препаратом ЛЮМИСТАРТ с предшествующего метода лечения: у
        73,9&nbsp;% — недостаточный контроль; у 37,4&nbsp;% — непереносимость
        препарата; у 18,8&nbsp;% — прогрессирование заболевания; у 12,3&nbsp;% —
        несоблюдение режима лечения.
      </p>

      <div className={styles.therapyMetaBlock}>
        <div className={styles.therapyGlossary}>
          <p>
            Исследования проводились на препарате Люмиган 0,03%, в РФ
            зарегестрирован как Люмистарт 0,03%.
          </p>
          <p>
            ВГД&nbsp;— внутриглазное давление; ОГ&nbsp;— офтальмогипертензия;
            АПГ&nbsp;— аналоги простагландинов; ПОУГ&nbsp;— первичная
            открытоугольная глаукома.
          </p>
          <p>
            * Для взрослых с 18 лет для снижения повышенного внутриглазного
            давления.
          </p>
          <p>
            В качестве препаратов первого выбора используются аналоги
            простагландинов, бета-адреноблокаторы, ингибиторы карбоангидразы
            (местного действия), симпатомиметики для лечения глаукомы.
            Максимальной гипотензивной активностью обладают аналоги
            простагландинов.
          </p>
        </div>
      </div>

      <ArticleReferences items={REFERENCES} numbered />
    </ArticleWideLayout>
  );
};
