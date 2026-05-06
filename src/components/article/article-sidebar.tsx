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

type ImageCardImageProps = {
  imageSrc: string;
  imageAlt: string;
  /** Вариант для DPR ≈3 (`imageSrc` при этом — базовый файл уровня 2×). */
  imageSrc3x?: string;
};

const ImageCardEye = ({
  imageSrc,
  imageAlt,
  imageSrc3x,
}: ImageCardImageProps) => {
  if (imageSrc3x) {
    return (
      // Пара PNG 2x/3x в /public — next/image не задаёт такой srcSet.
      // eslint-disable-next-line @next/next/no-img-element -- фиксированные ассеты под DPR
      <img
        src={imageSrc}
        srcSet={`${imageSrc} 2x, ${imageSrc3x} 3x`}
        alt={imageAlt}
        width={920}
        height={470}
        className={styles.eyeImage}
        decoding="async"
      />
    );
  }

  return (
    <Image
      src={imageSrc}
      alt={imageAlt}
      width={920}
      height={470}
      sizes="(max-width: 1279px) calc(100vw - 28px), 221px"
      className={styles.eyeImage}
    />
  );
};

type ArticleSidebarProps = {
  asideClassName?: string;
  variant?: "default" | "compact";
  /** Подпись над первой карточкой (по умолчанию «Следующий материал:»). */
  primaryNavCaption?: string;
  nextMaterial: SidebarLinkAction;
  smallCard?: SidebarSmallCardRead | SidebarSmallCardMemo;
  imageCard?: ImageCardImageProps & {
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
            <ImageCardEye
              imageSrc={imageCard.imageSrc}
              imageAlt={imageCard.imageAlt}
              imageSrc3x={imageCard.imageSrc3x}
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
            <ImageCardEye
              imageSrc={imageCard.imageSrc}
              imageAlt={imageCard.imageAlt}
              imageSrc3x={imageCard.imageSrc3x}
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
