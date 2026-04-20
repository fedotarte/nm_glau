import Image from "next/image";

import {
  ArticleReferences,
  ArticleSectionHeading,
  ArticleSidebar,
  ArticleTitleBlock,
  ArticleWideLayout,
} from "@/components";

import styles from "./page.module.css";

export const TherapyStartContent = () => {
  const sidebar = (
    <ArticleSidebar
      nextMaterial={{
        label: "АПГ: в чем разница между молекулами?",
        href: "/articles/apg-difference",
      }}
      imageCard={{
        href: "/articles/lumistart",
        imageSrc:
          "/pictures/articles/clinical-recommendations/sidebar-eye-v2.png",
        imageAlt: "Люмистарт — новый старт в терапии ПОУГ",
        title: (
          <>
            Люмистарт — новый старт
            <br />в терапии ПОУГ
          </>
        ),
      }}
    />
  );

  return (
    <ArticleWideLayout pageClassName={styles.therapyPage} sidebar={sidebar}>
      <ArticleTitleBlock
        containerClassName={styles.therapyTitleBlock}
        titleClassName={styles.therapyTitle}
        dividerClassName={styles.clinicalTitleDivider}
        title="СТАРТ ТЕРАПИИ: КАКОЙ ПРЕПАРАТ ВЫБРАТЬ?"
      />

      <section className={styles.therapySection}>
        <ArticleSectionHeading
          className={styles.therapySectionHeading}
          contentClassName={styles.therapySectionHeadingInner}
          title={
            <>
              РОССИЙСКИЕ, ЕВРОПЕЙСКИЕ И АМЕРИКАНСКИЕ РЕКОМЕНДАЦИИ ПРИЗНАЮТ
              ПОТЕНЦИАЛЬНУЮ РОЛЬ БИМАТОПРОСТА В КАЧЕСТВЕ МОНОТЕРАПИИ ПЕРВОЙ
              ЛИНИИ У ПАЦИЕНТОВ С ГЛАУКОМОЙ{" "}
            </>
          }
          supText="1, 2, 3"
          supClassName={styles.therapySectionHeadingRef}
        />
        <div className={styles.therapyCards}>
          <article className={styles.therapyCard}>
            <div className={styles.therapyCardLogoWrap}>
              <Image
                src="/icons/image%2028.svg"
                alt="Министерство здравоохранения РФ"
                width={285}
                height={79}
                className={styles.therapyCardLogo}
                unoptimized
              />
            </div>
            <div className={styles.therapyCardMeta}>
              <p>
                Клинические рекомендации
                <br />
                Глаукома первичная открытоугольная
                <br />
                Год утверждения: 2024.
              </p>
            </div>
            <p className={styles.therapyCardLead}>
              У всех пациентов с ПОУГ необходимо стремиться к максимальному
              снижению уровня ВГД, исходя из стадии заболевания
              <sup className={styles.therapyCardRef}>1</sup>.
            </p>
            <p className={styles.therapyCardBody}>
              В качестве препаратов первого выбора используются аналоги
              простагландинов, бета-адреноблокаторы, ингибиторы карбоангидразы
              (местного действия), симпатомиметики для лечения глаукомы.
              Максимальной гипотензивной активностью обладают аналоги
              простагландинов
              <sup className={styles.therapyCardRef}>1</sup>.
            </p>
          </article>
          <article className={styles.therapyCard}>
            <div className={styles.therapyCardLogoWrap}>
              <Image
                src="/icons/Frame%20146.svg"
                alt="European Glaucoma Society"
                width={280}
                height={80}
                className={styles.therapyCardLogo}
                unoptimized
              />
            </div>
            <p className={styles.therapyCardLead}>
              Наиболее высокое снижение ВГД отмечается при применении аналогов
              простагландинов, включая биматопрост
              <sup className={styles.therapyCardRef}>2</sup>.
            </p>
            <p className={styles.therapyCardBody}>
              Следует назначать наименьшую дозировку лекарственного средства,
              необходимую для достижения желаемого терапевтического ответа.
              Рекомендуется начинать лечение с монотерапии, за исключением
              случаев очень высокого ВГД и тяжелого течения заболевания
              <sup className={styles.therapyCardRef}>2</sup>.
            </p>
          </article>
          <article className={styles.therapyCard}>
            <div className={styles.therapyCardLogoWrap}>
              <Image
                src="/icons/image%2027.svg"
                alt="American Academy of Ophthalmology"
                width={274}
                height={79}
                className={styles.therapyCardLogo}
                unoptimized
              />
            </div>
            <p className={styles.therapyCardLead}>
              Медикаментозное лечение пациентов с глаукомой рассматривается
              преимущественно как монотерапия первой линии
              <sup className={styles.therapyCardRef}>3</sup>.
            </p>
            <p className={styles.therapyCardBody}>
              Аналоги простагландинов являются наиболее часто назначаемыми
              препаратами в форме глазных капель для снижения ВГД у пациентов с
              глаукомой, поскольку они наиболее эффективны, обладают хорошей
              переносимостью, и режим дозирования составляет всего одну каплю
              один раз в сутки
              <sup className={styles.therapyCardRef}>3</sup>.
            </p>
          </article>
        </div>
      </section>

      <section className={styles.therapySection}>
        <ArticleSectionHeading
          className={styles.therapySectionHeading}
          contentClassName={styles.therapySectionHeadingInner}
          title={
            <>
              КАК МОЖНО СНИЗИТЬ РИСК ПОТЕРИ ПОЛЯ ЗРЕНИЯ НА РАННЕЙ СТАДИИ
              ГЛАУКОМЫ?
            </>
          }
          supText="4, 5"
          supClassName={styles.therapySectionHeadingRef}
        />
        <Image
          src="/pictures/articles/therapy-start/frame-91.png"
          alt="Связь снижения ВГД и потери поля зрения"
          width={560}
          height={431}
          className={styles.therapyChartImage}
        />
        <p className={styles.therapyChartCaption}>
          Снижение ВГД на один визит в течение первых 3 месяцев лечения связано
          со снижением риска прогрессирования примерно на 10% в течение 6 лет на
          каждый 1 мм рт. ст. снижения ВГД
          <sup className={styles.therapyGlossarySup}>*, 7, 8</sup>.
        </p>
      </section>

      <section className={styles.therapySection}>
        <ArticleSectionHeading
          className={styles.therapySectionHeading}
          contentClassName={styles.therapySectionHeadingInner}
          title={
            <>
              КАКОЙ АНАЛОГ ПРОСТАГЛАНДИНОВ (АПГ) ВЫБРАТЬ В КАЧЕСТВЕ ПРЕПАРАТА
              ПЕРВОЙ ЛИНИИ?
            </>
          }
        />
        <Image
          src="/pictures/articles/therapy-start/frame-39.png"
          alt="Распределение показателей снижения ВГД на первом визите"
          width={969}
          height={798}
          className={styles.therapyImage}
        />
      </section>

      <section className={styles.therapySection}>
        <div className={styles.therapyDesignBlock}>
          <h2 className={styles.therapyDesignBlockTitle}>
            Дизайн исследования
            <sup className={styles.therapySectionHeadingRef}>9</sup>
          </h2>
          <div className={styles.therapyDesignTable}>
            <div className={styles.therapyDesignRow}>
              <span className={styles.therapyDesignLabel}>Цель</span>
              <p className={styles.therapyDesignTextStrong}>
                Провести исследование у пациентов, у которых не наблюдалось
                снижения внутриглазного давления (ВГД) после лечения аналогом
                простагландинов (пациентов, не ответивших на лечение).
              </p>
            </div>
            <div className={styles.therapyDesignRow}>
              <span
                className={`${styles.therapyDesignLabel} ${styles.therapyDesignLabelCompact}`}
              >
                Пациенты
              </span>
              <p className={styles.therapyDesignTextStrong}>
                Пациенты с нормотензивной глаукомой (НТГ).
              </p>
            </div>
            <div className={styles.therapyDesignRow}>
              <span
                className={`${styles.therapyDesignLabel} ${styles.therapyDesignLabelMethods}`}
              >
                Методы
              </span>
              <p className={styles.therapyDesignTextBody}>
                {`Исследование представляло собой открытое ретроспективное исследование серии случаев в одном медицинском учреждении. Авторы ретроспективно исследовали средние показатели снижения ВГД и долю не ответивших на лечение пациентов с НТГ (209 случаев, 209 глаз), получавших лечение одним из четырех аналогов простагландинов: латанопростом (40 пациентов), травопростом (64 пациента), тафлупростом (52 пациента) или биматопростом (53 пациента). В каждой группе была рассчитана доля пациентов, не ответивших на лечение, определяемых как пациенты с показателем снижения ВГД < 10 % при оценке во время обоих визитов.`}
              </p>
            </div>
          </div>
          <div className={styles.therapyDesignVisits}>
            <div className={styles.therapyDesignVisit}>
              <span className={styles.therapyDesignVisitPill}>
                Первый визит
              </span>
              <p className={styles.therapyDesignVisitText}>
                1 месяц после начала введения препарата
              </p>
            </div>
            <div className={styles.therapyDesignVisit}>
              <span className={styles.therapyDesignVisitPill}>
                Второй визит
              </span>
              <p className={styles.therapyDesignVisitText}>
                2 или 3 месяца после начала введения препарата
              </p>
            </div>
          </div>
        </div>
      </section>

      <Image
        src="/pictures/articles/therapy-start/frame-100.jpg"
        alt="Промо-блок Люмистарт"
        width={970}
        height={170}
        className={styles.therapyBanner}
      />

      <div className={styles.therapyMetaBlock}>
        <div className={styles.therapyGlossary}>
          <p>
            Исследования проводились на препарате Люмиган 0,03 %, в РФ
            зарегистрирован как Люмистарт 0,03 %.
          </p>
          <p>
            AAO (англ. American Academy of Ophthalmology) — Американская
            академия офтальмологии; EGS — Европейское глаукомное общество; ВГД —
            внутриглазное давление; АПГ — аналоги простагландинов; ПОУГ —
            первичная открытоугольная глаукома; MD (англ. mean deviation) —
            среднее отклонение; SAP — стандартная автоматическая периметрия.
          </p>
          <p>
            *255 пациентов с открытоугольной глаукомой были рандомизированы в
            группы аргон-лазерной трабекулопластики в сочетании с местным
            лечением бетаксололом или без немедленного лечения (129 пролеченных
            пациентов; 126 здоровых добровольцев контрольной группы) с
            последующим наблюдением каждые 3 месяца в течение 6 лет. ОР (95%
            ДИ): снижение на 0,90 на 1 мм рт. ст. (0,86–0,94)
            <sup className={styles.therapyGlossarySup}>4</sup>.
          </p>
        </div>
      </div>

      <ArticleReferences
        numbered
        items={[
          <>
            American Academy of Ophthalmology (AAO). Primary Open-Angle Glaucoma
            Preferred Practice Pattern. AAO. 2020.
          </>,
          <>
            European Glaucoma Society (EGS). Terminology and Guidelines for
            Glaucoma. Fifth edition. EGS. 2020.
          </>,
          <>
            Клинические рекомендации МЗ РФ Первичная открытоугольная глаукома,
            2024. https://cr.minzdrav.gov.ru/preview-cr/96_2
          </>,
          <>MacIver S et al. Can J Optometry. 2017; 79(1): 5–71.</>,
          <>Heijl A and Brandel M. Acta Ophthalmol. 2020; 99(4): 357–361.</>,
          <>Kim KE, et al. Am J Ophthalmol. 2015; 159(1): 160-8.e1-2.</>,
          <>Leske C et al. Arch Ophthalmol 2003; 12(11): 48–56.</>,
          <>Pfennigsdorf S et al. Clin Ophthalmol. 2012; 6: 739–752.</>,
          <>
            Inoue K, et al. Nonresponders to Prostaglandin Analogs Among
            Normal-Tension Glaucoma Patients. J Ocul Pharmacol Ther 2015; 32(2):
            1–7.
          </>,
        ]}
      />
    </ArticleWideLayout>
  );
};
