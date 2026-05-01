"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import styles from "./page.module.css";

const DIAGRAM_SRC = "/pictures/articles/neuroprotection/diagram-desktop.png";
const DIAGRAM_ALT = "Схема факторов развития глаукомной оптиконейропатии";

export const NeuroprotectionLightbox = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        className={styles.expandButton}
        aria-label="Открыть изображение во весь экран"
        onClick={() => setIsOpen(true)}
      >
        <Image src="/icons/maximize-circle.svg" alt="" width={52} height={52} />
      </button>

      {isOpen ? (
        <div
          className={styles.lightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Полноэкранное изображение схемы"
          onClick={() => setIsOpen(false)}
        >
          <div
            className={styles.lightboxPanel}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className={styles.lightboxClose}
              onClick={() => setIsOpen(false)}
              aria-label="Закрыть полноэкранное изображение"
            >
              ×
            </button>
            <Image
              src={DIAGRAM_SRC}
              alt={DIAGRAM_ALT}
              width={1280}
              height={969}
              className={styles.lightboxImage}
              priority
            />
          </div>
        </div>
      ) : null}
    </>
  );
};
