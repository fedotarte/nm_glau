"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import styles from "./page.module.css";

export const NeuroprotectionContent = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    if (!isLightboxOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsLightboxOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isLightboxOpen]);

  return (
    <section className={styles.neuroArticle}>
      <div className={styles.titleBlock}>
        <h1 className={styles.articleTitle}>Нейропротекция при глаукоме</h1>
      </div>

      <h2 className={styles.sectionTitle}>Введение</h2>
      <p className={styles.bodyText}>
        Глаукома — нейродегенеративное заболевание, поражающее преимущественно
        ганглиозные клетки сетчатки (ГКС). Повышенное внутриглазное давление
        (ВГД) является одним из основных факторов риска развития глаукомы.
        Основная цель современной терапии глаукомы ограничивается снижением ВГД;
        однако контроль ВГД у некоторых пациентов может оказаться бесполезным
        для замедления прогрессирования заболевания. Понимание потенциальных
        биомолекулярных процессов, происходящих при глаукоматозной дегенерации,
        позволяет разработать методы лечения глаукомы, замедляющие гибель ГКС.
        Нейропротекция — это защита ГКС и нейронов, способствующая их выживанию
        и функционированию.
      </p>

      <blockquote className={styles.callout}>
        Глаукома — одна из основных причин необратимой слепоты во всем мире; это
        оптиконейропатия, характеризующаяся прогрессирующей потерей поля зрения
        из-за апоптоза ганглиозных клеток сетчатки (ГКС). Это многофакторное
        заболевание со сложным патогенезом, которое еще не полностью изучено.
      </blockquote>

      <figure className={styles.diagramFigure}>
        <button
          type="button"
          className={styles.expandButton}
          aria-label="Открыть изображение во весь экран"
          onClick={() => setIsLightboxOpen(true)}
        >
          <Image
            src="/icons/maximize-circle.svg"
            alt="лого"
            width={52}
            height={52}
          />
        </button>
        <Image
          src="/pictures/articles/neuroprotection/diagram-desktop.png"
          alt="Схема факторов развития глаукомной оптиконейропатии"
          width={1280}
          height={969}
          className={styles.diagramDesktop}
        />
        <Image
          src="/pictures/articles/neuroprotection/diagram-mobile.png"
          alt="Схема факторов развития глаукомной оптиконейропатии"
          width={348}
          height={493}
          className={styles.diagramMobile}
        />
      </figure>

      <div className={styles.postImageContent}>
        <p className={styles.postImageText}>
          Внутриглазное давление (ВГД) является одним из наиболее важных
          факторов риска развития и прогрессирования глаукомы, и терапия,
          снижающая ВГД, по общему мнению, является наиболее изученной
          стратегией лечения, позволяющей замедлить или остановить ухудшение
          глаукоматозной оптиконейропатии.
        </p>
        <p className={styles.postImageText}>
          Хотя существует множество гипотензивных препаратов и хирургических
          методов, которые могут эффективно и результативно снизить ВГД,
          снижения ВГД, как правило, бывает недостаточно для предотвращения
          прогрессирования глаукомы.
        </p>
        <p className={styles.postImageText}>
          В исследовании по лечению офтальмогипертензии у 4,4% участников,
          получавших лекарства, через 5 лет после наблюдения глаукома
          прогрессировала, несмотря на снижение ВГД на 22,5% со среднего
          значения 24,9 мм рт. ст. до 19,3 мм рт. ст.
        </p>
        <p className={styles.postImageText}>
          Прогрессирование заболевания также произошло у 45% пациентов,
          получавших лечение, у которых уровень ВГД снизился на 25% по сравнению
          с исходным уровнем ВГД 20,6 мм рт. ст. в исследовании ранней
          манифестирующей глаукомы.
        </p>
        <p className={styles.postImageText}>
          Более того, еще более низкое значение ВГД (глаукома низкого и
          нормального давления) не исключает возможность прогрессирования
          глаукомы, поскольку исследование глаукомы нормального давления
          показало, что у 12% пациентов, получавших лечение, наблюдалось
          прогрессирование заболевания, несмотря на снижение среднего значения
          ВГД до 10,6 мм рт. ст. в течение 5,6 лет наблюдения.
        </p>
        <p className={styles.postImageText}>
          Кроме того, предыдущие данные указывают на то, что глаукома — это
          прежде всего оптиконейропатия, при этом головка зрительного нерва
          является основной мишенью заболевания.
        </p>
        <p className={styles.postImageText}>
          В результате все больше и больше офтальмологических исследований
          уделяют внимание изучению биомолекулярных механизмов выживания
          нейронов и разработке дальнейших нейропротекторных методов лечения в
          качестве дополнения к лечению, снижающему ВГД.
        </p>
      </div>

      <details className={styles.referencesAccordion} open>
        <summary className={styles.referencesSummary}>
          Список литературы:
        </summary>
        <ul className={styles.referencesList}>
          <li className={styles.referencesItem}>
            Inoue K, et al. Nonresponders to Prostaglandin Analogs Among
            Normal-Tension Glaucoma Patients. J Ocul Pharmacol Ther 2015; 32(2):
            1-7.
          </li>
        </ul>
      </details>

      {isLightboxOpen ? (
        <div
          className={styles.lightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Полноэкранное изображение схемы"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div
            className={styles.lightboxPanel}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className={styles.lightboxClose}
              onClick={() => setIsLightboxOpen(false)}
              aria-label="Закрыть полноэкранное изображение"
            >
              ×
            </button>
            <Image
              src="/pictures/articles/neuroprotection/diagram-desktop.png"
              alt="Схема факторов развития глаукомной оптиконейропатии"
              width={1280}
              height={969}
              className={styles.lightboxImage}
              priority
            />
          </div>
        </div>
      ) : null}
    </section>
  );
};
