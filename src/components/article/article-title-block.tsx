import type { ReactNode } from "react";
import styles from "./article-title-block.module.css";

type ArticleTitleBlockProps = {
  containerClassName?: string;
  titleClassName?: string;
  dividerClassName?: string;
  title: ReactNode;
};

/**
 * Shared article title block with heading and divider.
 */
export const ArticleTitleBlock = ({
  containerClassName,
  titleClassName,
  dividerClassName,
  title,
}: ArticleTitleBlockProps) => {
  const containerClass = [styles.container, containerClassName]
    .filter(Boolean)
    .join(" ");
  const titleClass = [styles.title, titleClassName].filter(Boolean).join(" ");
  const dividerClass = [styles.divider, dividerClassName]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={containerClass}>
      <h1 className={titleClass}>{title}</h1>
      <div className={dividerClass} />
    </header>
  );
};
