import type { ReactNode } from "react";

type ArticleTitleBlockProps = {
  containerClassName: string;
  titleClassName: string;
  dividerClassName: string;
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
  return (
    <header className={containerClassName}>
      <h1 className={titleClassName}>{title}</h1>
      <div className={dividerClassName} />
    </header>
  );
};
