import Image from "next/image";
import type { ReactNode } from "react";

import styles from "./article-references.module.css";

type ArticleReferencesProps = {
  items: ReactNode[];
  defaultOpen?: boolean;
  listType?: "ordered" | "unordered";
};

/**
 * Standard references accordion for wide article pages.
 */
export const ArticleReferences = ({
  items,
  defaultOpen = true,
  listType = "unordered",
}: ArticleReferencesProps) => {
  const ListTag = listType === "ordered" ? "ol" : "ul";

  return (
    <>
      <details className={styles.accordion} open={defaultOpen}>
        <summary className={styles.summary}>
          <span>Список литературы</span>
          <Image
            src="/icons/base_arrow_right_dark.svg"
            alt=""
            aria-hidden="true"
            width={18}
            height={18}
            className={styles.arrow}
          />
        </summary>
        <ListTag className={styles.list}>
          {items.map((item, index) => (
            <li key={index} className={styles.item}>
              {item}
            </li>
          ))}
        </ListTag>
      </details>
      <p className={styles.approvalCode}>
        RU-LUM-260006: дата одобрения, апрель 2026
      </p>
    </>
  );
};
