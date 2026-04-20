import Image from "next/image";
import type { ReactNode } from "react";

import styles from "@/app/articles/[slug]/page.module.css";

type ArticleReferencesProps = {
  items: ReactNode[];
  defaultOpen?: boolean;
  numbered?: boolean;
};

/**
 * Standard references accordion for wide article pages.
 */
export const ArticleReferences = ({
  items,
  defaultOpen = true,
  numbered = false,
}: ArticleReferencesProps) => {
  const ListTag = numbered ? "ol" : "ul";

  return (
    <details className={styles.referencesAccordion} open={defaultOpen}>
      <summary
        className={`${styles.referencesSummary} ${styles.clinicalReferencesSummary}`}
      >
        <span>Список литературы</span>
        <Image
          src="/icons/base_arrow_right_dark.svg"
          alt=""
          aria-hidden="true"
          width={18}
          height={18}
          className={styles.referencesArrow}
        />
      </summary>
      <ListTag className={styles.referencesList}>
        {items.map((item, index) => (
          <li key={index} className={styles.referencesItem}>
            {item}
          </li>
        ))}
      </ListTag>
    </details>
  );
};
