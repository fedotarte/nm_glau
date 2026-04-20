import type { ReactNode } from "react";

type ArticleCalloutProps = {
  className: string;
  children: ReactNode;
};

/**
 * Shared callout paragraph wrapper.
 */
export const ArticleCallout = ({
  className,
  children,
}: ArticleCalloutProps) => {
  return <p className={className}>{children}</p>;
};
