import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import styles from "@/app/articles/[slug]/page.module.css";

type SidebarLinkAction = {
  label: ReactNode;
  href?: string;
};

type ArticleSidebarProps = {
  asideClassName?: string;
  nextMaterial: SidebarLinkAction;
  smallCard: {
    title: ReactNode;
    action: SidebarLinkAction;
  };
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
  nextMaterial,
  smallCard,
  imageCard,
}: ArticleSidebarProps) => {
  const asideClass = asideClassName
    ? `${styles.clinicalSidebar} ${asideClassName}`
    : styles.clinicalSidebar;

  return (
    <aside className={asideClass}>
      <p className={styles.sidebarCaption}>Следующий материал:</p>
      <SidebarActionCard {...nextMaterial} />

      <h3 className={styles.sidebarTitle}>
        Другие материалы
        <br />
        по теме:
      </h3>

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
