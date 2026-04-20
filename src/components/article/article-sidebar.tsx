import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import styles from "@/app/articles/[slug]/page.module.css";

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
      <Link href={href} className={styles.sidebarNextCard}>
        <span>{label}</span>
        <Image
          src="/icons/base_arrow_right.svg"
          alt=""
          aria-hidden="true"
          width={10}
          height={19}
          className={styles.sidebarArrow}
        />
      </Link>
    );
  }

  return (
    <button type="button" className={styles.sidebarNextCard}>
      <span>{label}</span>
      <Image
        src="/icons/base_arrow_right.svg"
        alt=""
        aria-hidden="true"
        width={10}
        height={19}
        className={styles.sidebarArrow}
      />
    </button>
  );
};

/**
 * Standard right sidebar for wide article pages.
 */
export const ArticleSidebar = ({
  asideClassName,
  primaryNavCaption = "Следующий материал:",
  nextMaterial,
  smallCard,
  imageCard,
}: ArticleSidebarProps) => {
  const asideClass = asideClassName
    ? `${styles.clinicalSidebar} ${asideClassName}`
    : styles.clinicalSidebar;

  return (
    <aside className={asideClass}>
      <p className={styles.sidebarCaption}>{primaryNavCaption}</p>
      <SidebarActionCard {...nextMaterial} />

      <h3 className={styles.sidebarTitle}>
        Другие материалы
        <br />
        по теме:
      </h3>

      {smallCard ? (
        smallCard.variant === "memo" ? (
          <div className={styles.sidebarMemoCard}>
            <p className={styles.sidebarMemoTitle}>{smallCard.title}</p>
            <p className={styles.sidebarMemoStatus}>{smallCard.subtitle}</p>
          </div>
        ) : (
          <div className={styles.sidebarSmallCard}>
            <p>{smallCard.title}</p>
            {smallCard.action.href ? (
              <Link
                href={smallCard.action.href}
                className={styles.sidebarReadButton}
              >
                Читать
              </Link>
            ) : (
              <button type="button" className={styles.sidebarReadButton}>
                Читать
              </button>
            )}
          </div>
        )
      ) : null}

      {imageCard ? (
        imageCard.href ? (
          <Link href={imageCard.href} className={styles.sidebarImageCard}>
            <Image
              src={imageCard.imageSrc}
              alt={imageCard.imageAlt}
              width={292}
              height={196}
              className={styles.sidebarEyeImage}
            />
            <span className={styles.sidebarImageTitle}>{imageCard.title}</span>
            <Image
              src="/icons/base_arrow_right.svg"
              alt=""
              aria-hidden="true"
              width={10}
              height={19}
              className={styles.sidebarImageArrow}
            />
          </Link>
        ) : (
          <button type="button" className={styles.sidebarImageCard}>
            <Image
              src={imageCard.imageSrc}
              alt={imageCard.imageAlt}
              width={292}
              height={196}
              className={styles.sidebarEyeImage}
            />
            <span className={styles.sidebarImageTitle}>{imageCard.title}</span>
            <Image
              src="/icons/base_arrow_right.svg"
              alt=""
              aria-hidden="true"
              width={10}
              height={19}
              className={styles.sidebarImageArrow}
            />
          </button>
        )
      ) : null}
    </aside>
  );
};
