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
  "Leung E. W. et al. J Glaucoma. 2008; 17: 350-355.",
  "Tsai J. H. et al. Cornea. 2006; 25: 530-532.",
  "Fechtner R. D. et al. Cornea. 2010; 29: 618-621.",
  "Stalmans I. et al. Clinical Ophthalmology. 2020; 14: 3675-3680.",
  "Wolfram C. et al. Ocul Pharmacol Ther. 2019; 35(4): 223-228.",
  "Pillunat L. et al. Clin Ophthalmol. 2016; 10: 1759-1765.",
  "Chopli N. et al. Surv Ophthalmol. 2004; 49 Suppl 1: S19-S25.",
  <>
    Клинические рекомендации МЗ РФ «Глаукома первичная открытоугольная», 2024.{" "}
    <a href="https://cr.minzdrav.gov.ru/" target="_blank" rel="noreferrer">
      https://cr.minzdrav.gov.ru/
    </a>{" "}
    (дата доступа: 18.12.2025).
  </>,
  <>
    ЛВ/ОХЛП препарата Альфаган® Р опубликованы на сайте{" "}
    <a
      href="https://lk.regmed.ru/Register/EAEU_SmPC"
      target="_blank"
      rel="noreferrer"
    >
      https://lk.regmed.ru/Register/EAEU_SmPC
    </a>
    . (Дата доступа: 18.03.2026).
  </>,
  <>
    ЛВ/ОХЛП препарата Люмистарт опубликованы на сайте{" "}
    <a
      href="https://lk.regmed.ru/Register/EAEU_SmPC"
      target="_blank"
      rel="noreferrer"
    >
      https://lk.regmed.ru/Register/EAEU_SmPC
    </a>
    . (Дата доступа: 18.03.2026).
  </>,
  <>
    ЛВ/ОХЛП препарата Ганфорт® опубликованы на сайте{" "}
    <a
      href="https://lk.regmed.ru/Register/EAEU_SmPC"
      target="_blank"
      rel="noreferrer"
    >
      https://lk.regmed.ru/Register/EAEU_SmPC
    </a>
    . (Дата доступа: 18.03.2026).
  </>,
];

export const SurfaceDiseasesContent = () => {
  const sidebar = (
    <ArticleSidebar
      nextMaterial={{
        label: "Клинические рекомендации по терапии поуг 2026",
        href: "/articles/clinical-recommendations",
      }}
      imageCard={{
        href: "/articles/lumistart",
        imageSrc: "/pictures/articles/articles-eye.png",
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
      <ArticleTitleBlock title="заболевания поверхности глаз и приверженность к лечению" />

      <section
        className={`${styles.therapySection} ${styles.surfaceDiseasesSection}`}
      >
        <ArticleSectionHeading
          title="Заболевания поверхности глаз часто встречаются при глаукоме"
          supText="1–3"
        />

        <ArticleSectionHeading
          className={styles.therapySectionHeadingBare}
          contentClassName={styles.therapySectionHeadingInner}
          variant="plain"
          title="СОГЛАСНО РЕЗУЛЬТАТАМ ИССЛЕДОВАНИЯ У БОЛЕЕ ЧЕМ ПОЛОВИНЫ ПАЦИЕНТОВ С ГЛАУКОМОЙ РАЗВИВАЮТСЯ СИМПТОМЫ ЗАБОЛЕВАНИЙ ПЕРЕДНЕЙ ПОВЕРХНОСТИ ГЛАЗ (ЗППГ) ХОТЯ БЫ В ОДНОМ ГЛАЗУ"
          supText="**"
          supClassName={styles.therapySectionHeadingRef}
        />

        <Image
          src="/pictures/articles/surface-diseases/frame-100-a.png"
          alt="Пациенты с глаукомой и симптомами ЗППГ: доли по данным исследования"
          width={969}
          height={361}
          className={styles.lumistartWideImage}
        />

        <ArticleSectionHeading
          title="ЛЕЧЕНИЕ ГЛАУКОМЫ МОЖЕТ УСУГУБИТЬ ЗАБОЛЕВАНИЕ ПОВЕРХНОСТИ ГЛАЗА"
          supText="3"
        />

        <div className={styles.surfaceSplitCard}>
          <div className={styles.surfaceSplitCardFigure}>
            <Image
              src="/pictures/articles/surface-diseases/group-9-a.png"
              alt="Распределение пациентов по степени тяжести симптомов ЗППГ"
              width={535}
              height={346}
              className={styles.surfaceSplitChart}
            />
          </div>
          <div className={styles.surfaceSplitBody}>
            <p className={styles.surfaceZppgLead}>
              Показатели индекса ЗППГ были значимо хуже
              <sup className={styles.therapyGlossarySup}>3</sup>:
            </p>
            <ul className={styles.surfaceZppgList}>
              <li>
                У пациентов с предшествующим диагнозом ЗППГ в сравнении с
                пациентами без него (25,2 ± 15,4 в сравн. с 15,4 ± 15,8
                соответственно; p = 0,0036).
              </li>
              <li>
                У пациентов, которые применяли и не применяли препараты
                искусственной слезы во время исследования (23,0 ± 15,6 в сравн.
                с 15,3 ± 15,8 соответственно; p = 0,0046).
              </li>
              <li>
                У пациентов, принимающих 2 или 3 препарата для местного
                применения для снижения ВГД, по сравнению с пациентами,
                принимающими только один препарат (12,9 ± 13,1 для одного
                препарата в сравн. с 16,7 ± 17,0 для двух препаратов, p = 0,007,
                и 19,4 ± 18,1 для трех препаратов, p = 0,0001).
              </li>
            </ul>
          </div>
        </div>

        <p className={styles.lumistartCallout}>
          «Когда капли, снижающие ВГД, способствуют появлению симптомов ЗППГ,
          они могут стать препятствием для приверженности к лечению.»***
        </p>

        <ArticleSectionHeading
          title={
            <>
              Пациенты с глаукомой указывали заболевание поверхности глаза как
              основную причину неудовлетворенности лечением
            </>
          }
          supText="4"
        />

        <Image
          src="/pictures/articles/surface-diseases/frame-109-a.png"
          alt="Результаты исследования неудовлетворённости лечением глаукомы: факторы, связанные с неудовлетворённостью"
          width={969}
          height={448}
          className={styles.lumistartWideImage}
        />

        <p className={styles.surfaceCalloutUpper}>
          Для обеспечения приверженности к лечению важна удовлетворенность
          пациентов и сотрудничество с лечащим врачом
          <sup className={styles.therapyGlossarySup}>4</sup>.
        </p>

        <ArticleSectionHeading
          title={
            <>
              Лечение препаратАМИ без консервантов было связано с лучшей
              приверженностью лечению
              <sup className={styles.therapySectionHeadingRef}>*, †, 6</sup> по
              сравнению с лечением препаратАМИ с консервантами
              <sup className={styles.therapySectionHeadingRef}>5</sup>
            </>
          }
        />

        <p className={styles.surfacePreservativeCaption}>
          Результаты 201 пациента с глаукомой, которые сообщили о несоблюдении
          рекомендаций по лечению (определяется как пропуск ≥ 5&nbsp;%
          назначенных доз глазных капель для снижения ВГД)
          <sup className={styles.therapyGlossarySup}>5</sup>.
        </p>

        <Image
          src="/pictures/articles/surface-diseases/frame-116-a.png"
          alt="Распределение пациентов по типу местной терапии и несоблюдению режима лечения"
          width={969}
          height={379}
          className={styles.lumistartWideImage}
        />

        <div className={styles.surfaceCalloutStack}>
          <p className={styles.lumistartCallout}>
            Пациенты, получавшие лечение препаратом для местного применения с
            консервантом, чаще сообщали о несоблюдении режима лечения по
            сравнению с пациентами, получавшими лечение препаратами без
            консервантов или комбинированное лечение (p = 0,036)
            <sup className={styles.therapyGlossarySup}>5</sup>.
          </p>
          <p className={styles.lumistartCallout}>
            Несоблюдение режима лечения глаукомы является серьезным препятствием
            для успеха терапии примерно у 1/3 пациентов. Несоблюдение режима
            лечения можно уменьшить, если избежать побочных эффектов. Продукты
            без консервантов могут способствовать соблюдению режима лечения
            <sup className={styles.therapyGlossarySup}>5</sup>.
          </p>
        </div>

        <Image
          src="/pictures/articles/surface-diseases/frame-97-a.png"
          alt="Люмистарт 0,03 % без консервантов и приверженность пациентов с ПОУГ"
          width={969}
          height={517}
          className={styles.lumistartWideImage}
        />

        <div className={styles.bannerMarkFrame}>
          <Image
            src="/pictures/articles/surface-diseases/frame-81-a.png"
            alt="Схема терапии: Люмистарт, Ганфорт, Альфаган Р"
            width={969}
            height={481}
            className={styles.lumistartWideImage}
          />
          <span
            className={`${styles.bannerRegisteredMark} ${styles.surfaceGanfortMark}`}
            aria-hidden="true"
          >
            ®
          </span>
          <span
            className={`${styles.bannerRegisteredMark} ${styles.surfaceAlphaganMark}`}
            aria-hidden="true"
          >
            ®
          </span>
        </div>
      </section>

      <div className={styles.therapyMetaBlock}>
        <div className={styles.therapyGlossaryPlain}>
          <p>
            * Препаратов группы бета-адреноблокаторов или аналогов
            простагландина.
          </p>
          <p>
            ** Результаты поперечного исследования 101 пациента с
            открытоугольной глаукомой или офтальмогипертензией, направленного на
            изучение распространенности ЗППГ у пациентов с глаукомой. Каждый
            пациент заполнил опросник ЗППГ и прошел тест Ширмера, исследование с
            окрашиванием роговицы и конъюнктивы лиссаминовым зеленым и времени
            разрыва слезной пленки
            <sup className={styles.therapyGlossarySup}>1</sup>.
          </p>
          <p>
            *** Результаты проспективного наблюдательного исследования, в
            котором оценивали частоту ЗППГ у пациентов с глаукомой, принимавших
            местные препараты для снижения ВГД. В исследовании приняли участие
            пациенты с первичной открытоугольной глаукомой или
            офтальмогипертензией, использовавшие препараты для местного
            применения для снижения ВГД. Включенные в исследование пациенты
            заполняли анкету индекса ЗППГ, и для каждого пациента рассчитывали
            баллы по индексу ЗППГ (от 0 до 100, где 0 соответствует отсутствию
            симптомов). Также собирали анамнез, демографические данные и
            информацию о сопутствующих лекарственных препаратах.
          </p>
          <p>
            # В качестве препаратов первого выбора используются аналоги
            простагландинов, бета-адреноблокаторы, ингибиторы карбоангидразы
            (местного действия), симпатомиметики для лечения глаукомы.
          </p>
          <p>
            <strong>‡</strong> Результаты наблюдательного многоцентрового
            международного поперечного исследования с участием 793 пациентов с
            глаукомой, которые получали лечение и у которых наблюдалась
            стабилизация заболевания (из Нидерландов, Бельгии и Великобритании),
            позволили оценить удовлетворенность пациентов и местную
            переносимость лечения. 93,7% были удовлетворены лечением, а 6,3% —
            не удовлетворены.
          </p>
          <p>
            † Результаты исследования, проведенного в немецкой университетской
            офтальмологической клинике с участием пациентов, самостоятельно
            оценивавших несоблюдение рекомендаций по лечению глаукомы.
            Участниками исследования стали пациенты с глаукомой, которые в
            течение как минимум 1 года применяли препараты, снижающие
            внутриглазное давление. Пациенты заполняли анкету из 16 пунктов,
            предназначенную для изучения показателя несоблюдения режима лечения
            и оценки опыта терапии. Несоблюдение режима лечения определяли как
            пропуск ≥ 5&nbsp;% назначенных доз глазных капель для снижения
            внутриглазного давления. В исследование были включены 201 пациент с
            глаукомой в возрасте от 24 до 88 лет
            <sup className={styles.therapyGlossarySup}>6</sup>.
          </p>
        </div>
      </div>

      <div className={styles.therapyMetaBlock}>
        <div className={styles.therapyGlossary}>
          <p>
            Исследования проводились на препарате Люмиган 0,03&nbsp;%, в РФ
            зарегестрирован как Люмистарт 0,03&nbsp;%.
          </p>
          <p>
            ВГД&nbsp;— внутриглазное давление; ЗППГ&nbsp;— заболевание передней
            поверхности глаза; индекс ЗППГ&nbsp;— индекс поражения поверхности
            глаза; ОГ&nbsp;— офтальмогипертензия; ПОУГ&nbsp;— первичная
            открытоугольная глаукома; БК&nbsp;— без консервантов.
          </p>
        </div>
      </div>

      <ArticleReferences items={REFERENCES} listType="ordered" />
    </ArticleWideLayout>
  );
};
