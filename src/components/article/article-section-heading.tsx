import type { ReactNode } from "react";

type ArticleSectionHeadingProps = {
  className: string;
  title: ReactNode;
  contentClassName?: string;
  supText?: ReactNode;
  supClassName?: string;
  level?: "h2" | "h3";
};

/**
 * Shared section heading with optional superscript reference.
 */
export const ArticleSectionHeading = ({
  className,
  title,
  contentClassName,
  supText,
  supClassName,
  level = "h2",
}: ArticleSectionHeadingProps) => {
  const HeadingTag = level;

  return (
    <HeadingTag className={className}>
      {contentClassName ? (
        <span className={contentClassName}>{title}</span>
      ) : (
        title
      )}
      {supText ? <sup className={supClassName}>{supText}</sup> : null}
    </HeadingTag>
  );
};
