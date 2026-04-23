import { Children, cloneElement, isValidElement, type ReactNode } from "react";
import styles from "./article-section-heading.module.css";

type ArticleSectionHeadingProps = {
  className?: string;
  title: ReactNode;
  contentClassName?: string;
  supText?: ReactNode;
  supClassName?: string;
  level?: "h2" | "h3";
  unstyled?: boolean;
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
  unstyled = false,
}: ArticleSectionHeadingProps) => {
  const normalizeCase = (node: ReactNode): ReactNode => {
    if (typeof node === "string") {
      return node.toLocaleLowerCase("ru-RU");
    }

    if (Array.isArray(node)) {
      return node.map((child) => normalizeCase(child));
    }

    if (isValidElement<{ children?: ReactNode }>(node) && node.props.children) {
      return cloneElement(node, {
        children: normalizeCase(node.props.children),
      });
    }

    return node;
  };

  const HeadingTag = level;
  const headingClassName = unstyled
    ? [className].filter(Boolean).join(" ")
    : [styles.heading, className].filter(Boolean).join(" ");
  const contentClass = unstyled
    ? [contentClassName].filter(Boolean).join(" ")
    : [styles.content, contentClassName].filter(Boolean).join(" ");
  const supClass = [styles.sup, supClassName].filter(Boolean).join(" ");
  const normalizedTitle = Children.map(title, normalizeCase);

  return (
    <HeadingTag className={headingClassName}>
      {contentClass ? (
        <span className={contentClass}>{normalizedTitle}</span>
      ) : (
        normalizedTitle
      )}
      {supText ? <sup className={supClass}>{supText}</sup> : null}
    </HeadingTag>
  );
};
