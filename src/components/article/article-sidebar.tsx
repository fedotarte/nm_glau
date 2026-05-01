import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import styles from "./article-sidebar.module.css";

type SidebarLinkAction = {
  label: ReactNode;
  href?: string;
};

type SidebarSmallCardRead = {
  variant?: "read";
  title: ReactNode;
  action: SidebarLinkAction;
};

type SidebarSmallCardMemo = {
  variant: "memo";
  title: ReactNode;
  subtitle: ReactNode;
};

type ArticleSidebarProps = {
  asideClassName?: string;
  variant?: "default" | "compact";
  /** Подпись над первой карточкой (по умолчанию «Следующий материал:»). */
  primaryNavCaption?: string;
  nextMaterial: SidebarLinkAction;
  smallCard?: SidebarSmallCardRead | SidebarSmallCardMemo;
  imageCard?: {
    imageSrc: string;
    imageAlt: string;
    title: ReactNode;
    href?: string;
  };
};

const SidebarActionCard = ({ label, href }: SidebarLinkAction) => {
  if (href) {
    return (
      <Link href={href} className={styles.nextCard}>
        <span>{label}</span>
        <Image
          src="/icons/base_arrow_right.svg"
          alt=""
          aria-hidden="true"
          width={10}
          height={19}
          className={styles.arrow}
        />
      </Link>
    );
  }

  return (
    <button type="button" className={styles.nextCard}>
      <span>{label}</span>
      <Image
        src="/icons/base_arrow_right.svg"
        alt=""
        aria-hidden="true"
        width={10}
        height={19}
        className={styles.arrow}
      />
    </button>
  );
};

/**
 * Standard right sidebar for wide article pages.
 */
export const ArticleSidebar = ({
  asideClassName,
  variant = "default",
  primaryNavCaption = "Следующий материал:",
  nextMaterial,
  smallCard,
  imageCard,
}: ArticleSidebarProps) => {
  const asideClass = [
    styles.sidebar,
    variant === "compact" && styles.sidebarCompact,
    asideClassName,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <aside className={asideClass}>
      <p className={styles.caption}>{primaryNavCaption}</p>
      <SidebarActionCard {...nextMaterial} />

      <h3 className={styles.title}>
        Другие материалы
        <br />
        по теме:
      </h3>

      {smallCard ? (
        smallCard.variant === "memo" ? (
          <div className={styles.memoCard}>
            <p className={styles.memoTitle}>{smallCard.title}</p>
            <p className={styles.memoStatus}>{smallCard.subtitle}</p>
          </div>
        ) : (
          <div className={styles.smallCard}>
            <p>{smallCard.title}</p>
            {smallCard.action.href ? (
              <Link
                href={smallCard.action.href}
                className={styles.readButton}
              >
                Читать
              </Link>
            ) : (
              <button type="button" className={styles.readButton}>
                Читать
              </button>
            )}
          </div>
        )
      ) : null}

      {imageCard ? (
        imageCard.href ? (
          <Link href={imageCard.href} className={styles.imageCard}>
            <Image
              src={imageCard.imageSrc}
              alt={imageCard.imageAlt}
              width={292}
              height={196}
              className={styles.eyeImage}
            />
            <span className={styles.imageTitle}>{imageCard.title}</span>
            <Image
              src="/icons/base_arrow_right.svg"
              alt=""
              aria-hidden="true"
              width={10}
              height={19}
              className={styles.imageArrow}
            />
          </Link>
        ) : (
          <button type="button" className={styles.imageCard}>
            <Image
              src={imageCard.imageSrc}
              alt={imageCard.imageAlt}
              width={292}
              height={196}
              className={styles.eyeImage}
            />
            <span className={styles.imageTitle}>{imageCard.title}</span>
            <Image
              src="/icons/base_arrow_right.svg"
              alt=""
              aria-hidden="true"
              width={10}
              height={19}
              className={styles.imageArrow}
            />
          </button>
        )
      ) : null}
    </aside>
  );
};
