import Image from "next/image";

import {
  ArticleCallout,
  ArticleReferences,
  ArticleSectionHeading,
  ArticleSidebar,
  ArticleTitleBlock,
  ArticleWideLayout,
} from "@/components";

import styles from "./page.module.css";

const REFERENCES = [
  "Woodward DF, Phelps RL, Krauss AH, et al. Bimatoprost: a novel antiglaucoma agent. Cardiovasc Drug Rev. 2004;22(2):103-120",
  "Hellberg MR, Ke TL, Haggard K, Klimko PG, Dean TR, Graff G. The hydrolysis of the prostaglandin analog prodrug bimatoprost to 17-phenyl-trinor PGF2alpha by human and rabbit ocular tissue. J Ocul Pharmacol Ther. 2003;19(2):97-103.",
  "Noecker RS, Dirks MS, Choplin NT, et al. A six-month randomized clinical trial comparing the intraocular pressure-lowering efficacy of bimatoprost and latanoprost in patients with ocular hypertension or glaucoma. Am J Ophthalmol. 2003;135(1):55-63",
  "Cantor LB, et al.; Bimatoprost-Travoprost Study Group. Intraocular pressure-lowering efficacy of bimatoprost 0.03% and travoprost 0.004% in patients with glaucoma or ocular hypertension. Br J Ophthalmol. 2006;90(11):1370-1373",
  "Peng J, Huang W, Duan J. Efficacy and safety of prostaglandin drugs for elevated intraocular pressure: a Bayesian network meta-analysis. Front Med (Lausanne). 2025;12:1642986. Published 2025 Aug 11",
  "ЛВ/ОХЛП препарата Люмистарт опубликованы на сайте https://lk.regmed.ru/Register/EAEU_SmPC. дата доступа 12.01.2026.",
  "Краткое описание соединения биматопрост. Национальная медицинская библиотека. Доступно по адресу: https://pubchem.ncbi.nlm.nih.gov/compound/Bimatoprost. дата доступа март 2026 г.",
  "Американская академия офтальмологии. Отток воды и механизмы действия лекарств от глаукомы. Доступно по адресу: https://www.aao.org/basic-skills/animation-of-aqueous-flow. Дата доступа март 2026 г.",
];

export const ApgDifferenceContent = () => {
  const sidebar = (
    <ArticleSidebar
      asideClassName={styles.apgSidebar}
      nextMaterial={{
        label: "Люмистарт — новый старт в терапии ПОУГ",
        href: "/articles/lumistart",
      }}
      smallCard={{
        title: "Как повысить качество жизни у пациентов с глаукомой?",
        action: { label: "Читать", href: "/articles/quality-of-life" },
      }}
    />
  );

  return (
    <ArticleWideLayout pageClassName={styles.therapyPage} sidebar={sidebar}>
      <ArticleTitleBlock
        containerClassName={styles.therapyTitleBlock}
        titleClassName={`${styles.therapyTitle} ${styles.apgPageTitle}`}
        dividerClassName={styles.clinicalTitleDivider}
        title="АПГ: В чем разница между молекулами"
      />

      <section className={styles.therapySection}>
        <ArticleSectionHeading
          className={styles.apgSectionHeading}
          title={
            <>
              Различия химической структуры
              <br />
              биматопроста и других аналогов простагландинов
            </>
          }
          supText="*1, 2"
          supClassName={styles.therapySectionHeadingRef}
        />
        <ArticleCallout className={styles.apgCallout}>
          Люмистарт (биматопрост 0,03&nbsp;%)&nbsp;— простамид с уникальной
          молекулярной структурой, который в ряде исследований продемонстрировал
          более выраженное снижение ВГД, чем другие АПГ
          <sup className={styles.therapySectionHeadingRef}>*1–5</sup>
        </ArticleCallout>
        <Image
          src="/pictures/articles/apg-difference/structures-comparison.png"
          alt="Сравнение химических структур биматопроста и пролекарств: латанопрост, травопрост, тафлупрост"
          width={1024}
          height={479}
          className={styles.therapyImage}
        />
        <ul className={styles.apgBulletList}>
          <li>
            Биматопрост <strong>НЕ</strong> является пролекарством, поэтому для
            проявления его фармакологической активности ему не нужно
            преобразовываться в свободный кислотный метаболит в глазу, и он
            может оставаться практически неизменным
            <sup className={styles.therapyGlossarySup}>3, 4</sup>.
          </li>
          <li>
            Его выраженное гипотензивное действие обусловлено его простамидной
            структурой
            <sup className={styles.therapyGlossarySup}>3</sup>.
          </li>
        </ul>
        <ArticleCallout
          className={`${styles.apgCallout} ${styles.apgCalloutSecondary}`}
        >
          Люмистарт (биматопрост) — это синтетический простамид, который снижает
          ВГД за счёт увеличения оттока водянистой влаги через трабекулярную
          сеть и увеличения увеосклерального оттока и не действует через
          известные рецепторы простагландина
          <sup className={styles.therapyGlossarySup}>6, 7</sup>
        </ArticleCallout>
        <Image
          src="/pictures/articles/apg-difference/dual-mechanism.png"
          alt="Двойной механизм действия: отток через трабекулярную сеть и увеосклеральный отток"
          width={969}
          height={480}
          className={styles.therapyImage}
        />
        <Image
          src="/pictures/articles/apg-difference/lumistart-banner.png"
          alt="Люмистарт: биматопрост 0,3 мг/мл, по одной капле раз в сутки вечером, без консерванта"
          width={969}
          height={170}
          className={styles.therapyBanner}
        />
      </section>

      <div className={styles.therapyMetaBlock}>
        <div className={styles.therapyGlossary}>
          <p>
            Исследования проводились на препарате Люмиган 0,03 %, в РФ
            зарегистрирован как Люмистарт 0,03 %.
          </p>
          <p>
            ПОУГ – первичная открытоугольная глаукома; ВГД – внутриглазное
            давление; ДЗН – диск зрительного нерва; СНВС – слой нервных волокон
            сетчатки; ПЗ – поле зрения.
          </p>
          <p>
            *Материал адаптирован по материалам рисунка 2. Aihara M. Jpn J
            Ophthalmol. 2021 Sep;65(5):581-590. и схемы 1B Impagnatiello F, et
            al. Br J Pharmacol. 2019 Apr;176(8):1079-1089.
          </p>
        </div>
      </div>

      <ArticleReferences items={REFERENCES} numbered />
    </ArticleWideLayout>
  );
};
