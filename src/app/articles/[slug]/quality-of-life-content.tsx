import Image from "next/image";
import type { ReactNode } from "react";

import {
  ArticleReferences,
  ArticleSectionHeading,
  ArticleSidebar,
  ArticleTitleBlock,
  ArticleWideLayout,
} from "@/components/article";

import styles from "./page.module.css";

const REFERENCES: ReactNode[] = [
  "Remo S. et al. Transl Vis Sci Technol. 2015; 4(2): 1.",
  "Kim C. Y. et al. Br J Ophthalmol. 2017; 101(6): 801–807.",
  "Tsai J. C. et al. Journal of Glaucoma. 2003; 12: 393–398.",
  "Brown et al. Journal of Ocular Pharmacology and Therapeutics. 2019; 35: 3, 145–160.",
  "ЛВ/ОХЛП препарата Люмистарт опубликованы на сайте https://lk.regmed.ru/Register/EAEU_SmPC. (Дата доступа: 18.03.2026).",
  "ЛВ/ОХЛП препарата Ганфорт® опубликованы на сайте https://lk.regmed.ru/Register/EAEU_SmPC. (Дата доступа: 18.03.2026).",
  'Клинические рекомендации МЗ РФ "Глаукома первичная открытоугольная", 2024. https://cr.minzdrav.gov.ru/preview-cr/96_2',
];

export const QualityOfLifeContent = () => {
  const sidebar = (
    <ArticleSidebar
      nextMaterial={{
        label: "Заболевания поверхности глаз и приверженность к лечению",
        href: "/articles/surface-diseases",
      }}
      smallCard={{
        variant: "memo",
        title:
          "Карлова Е.В.\n О роли врачебной инертности в выборе стартовой терапии ПОУГ",
        subtitle: "Материал в разработке",
      }}
      imageCard={{
        href: "/articles/lumistart",
        imageSrc: "/pictures/articles/@x3.png",
        imageAlt: "Люмистарт — новый старт в терапии ПОУГ",
        title: (
          <>
            Люмистарт — новый старт
            <br />в терапии поуг
          </>
        ),
      }}
    />
  );

  return (
    <ArticleWideLayout pageClassName={styles.therapyPage} sidebar={sidebar}>
      <ArticleTitleBlock title="Что может повысить качество жизни у пациентов с глаукомой?" />

      <section className={styles.therapySection}>
        <ArticleSectionHeading
          title={
            <>
              сложности, препятствующие приверженности
              <br />
              лечению многогранны и различаются у разных людей
            </>
          }
          supText="1–3"
        />
        <Image
          src="/pictures/articles/quality-of-life/frame-100-barriers.png"
          alt="Было выявлено 71 препятствие приверженности лечению, разделённое на 4 категории"
          width={969}
          height={438}
          className={styles.lumistartWideImage}
        />
        <ArticleSectionHeading
          title={
            <>
              почти треть пациентов (32&nbsp;%) указала режим лечения в качестве
              причины его несоблюдения
            </>
          }
          supText="3"
        />
        <Image
          src="/pictures/articles/quality-of-life/frame-103-regime.png"
          alt="Основные причины несоблюдения лечения в категории «режим лечения»"
          width={969}
          height={401}
          className={styles.lumistartWideImage}
        />
        <ArticleSectionHeading
          title="причины несоблюдения режима лечения, на которые можно повлиять"
          supText="1, 2"
        />
        <Image
          src="/pictures/articles/quality-of-life/frame-124-stats.png"
          alt="Факторы риска несоблюдения режима лечения и клинические рекомендации"
          width={969}
          height={316}
          className={styles.lumistartWideImage}
        />
        <ArticleSectionHeading
          title={
            <>
              применение препаратов биматопроста показало увеличение
              <br />
              количества лет с более высоким качеством жизни за счёт возможного
              более
              <br />
              длительного сохранения зрения
            </>
          }
          supText="4"
        />
        <Image
          src="/pictures/articles/quality-of-life/frame-105-qaly.png"
          alt="Увеличение количества лет с более высоким качеством жизни по сравнению с другими АПГ"
          width={969}
          height={512}
          className={styles.lumistartWideImage}
        />
        <p className={styles.lumistartCallout}>
          Биматопрост обеспечил средний прирост QALY в 2,56 (повышение качества
          жизни пациентов на 22,9&nbsp;%) для среднестатистического пациента с
          ПОУГ, в то время как латанопрост обеспечил прирост QALY в 2,00
          (повышение качества жизни на 17,8&nbsp;%), тафлупрост&nbsp;— 1,99 QALY
          (17,9&nbsp;% улучшение качества жизни), травопрост&nbsp;— 1,92 QALY
          (17,2&nbsp;% улучшение качества жизни)
          <sup className={styles.therapyGlossarySup}>4</sup>.
        </p>
        <p className={styles.lumistartCallout}>
          Биматопрост позволял сэкономить больше социальных затрат благодаря
          более сильному эффекту понижения ВГД, который может обеспечить больше
          лет хорошего зрения
          <sup className={styles.therapyGlossarySup}>4</sup>.
        </p>
        <p className={styles.clinicalBody}>
          <span className={styles.studyDesignLabel}>Дизайн исследования:</span>
          Сравнительный анализ эффективности и соотношения затрат, выгод
          (рентабельности) и клинической пользы, основанный на предпочтениях
          пациентов, оценивающих местное применение препаратов биматопроста,
          латанопроста, травопроста, тафлупроста при лечении первичной
          открытоугольной глаукомы, показал, что увеличение количества лет при
          более высоком уровне качества жизни было более выраженным при
          применении препарата биматопроста
          <sup className={styles.therapyGlossarySup}>4</sup>.
        </p>
        <Image
          src="/pictures/articles/quality-of-life/frame-97-lumistart.png"
          alt="Люмистарт: монотерапия АПГ, одна капля в сутки вечером"
          width={969}
          height={414}
          className={styles.lumistartWideImage}
        />
        <Image
          src="/pictures/articles/quality-of-life/frame-107-ganfort.png"
          alt="Ганфорт: комбинированный препарат с фиксированной дозой, одна капля в сутки"
          width={969}
          height={414}
          className={styles.lumistartWideImage}
        />

        <div className={styles.therapyMetaBlock}>
          <div className={styles.therapyGlossaryPlain}>
            <p>
              * Проведена проспективная серия структурированных интервью с 48
              пациентами с глаукомой. Ответы участников записывали дословно в
              формы интервью, а также на аудиокассеты. Были выявлены ситуации,
              препятствующие приверженности лечению препаратами. Ситуационные
              описания были стратифицированы, сгруппированы и проанализированы
              по распределению частот с использованием иерархического
              кластерного анализа
              <sup className={styles.therapyGlossarySup}>3</sup>.
            </p>
            <p>
              ** Результаты поперечного наблюдательного исследования 1050
              пациентов с глаукомой в Южной Корее, получавших лечение глазными
              каплями в течение периодов ≥ 1 месяца и ≤ 2 лет. Приверженность
              лечению была рассчитана для 1046 пациентов, соответствующих
              критериям включения в исследование.
            </p>
          </div>
        </div>
      </section>

      <div className={styles.therapyMetaBlock}>
        <div className={styles.therapyGlossary}>
          <p>
            Исследования проводились на препарате Люмиган 0,03&nbsp;%, в РФ
            зарегестрирован как Люмистарт 0,03&nbsp;%.
          </p>
          <p>ДИ&nbsp;— доверительный интервал; ОШ&nbsp;— отношение шансов.</p>
        </div>
      </div>

      <ArticleReferences items={REFERENCES} listType="ordered" />
    </ArticleWideLayout>
  );
};
