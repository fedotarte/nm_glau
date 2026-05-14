"use client";

import Image from "next/image";
import { useCallback, useMemo, useRef, useState } from "react";

import styles from "./page.module.css";
import { getTelemostRecordingEmbedSrc } from "./telemost-recording-url";

type TelemostRecordingPlayerProps = {
  posterSrc: string;
  posterAlt: string;
  iframeTitle: string;
  videoId: string;
  priority?: boolean;
  /** Brightcove iframe src; если не задан — общая запись (напр. Селезнёв). */
  brightcoveEmbedSrc?: string;
};

/**
 * Постер поверх iframe; по клику Play src задаётся синхронно на том же жесте —
 * так браузер чаще разрешает autoplay во встроенном Brightcove без второго нажатия.
 */
export function TelemostRecordingPlayer({
  posterSrc,
  posterAlt,
  iframeTitle,
  priority,
  brightcoveEmbedSrc,
  videoId,
}: TelemostRecordingPlayerProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const activatedRef = useRef(false);
  const [overlayHidden, setOverlayHidden] = useState(false);

  const resolvedEmbedSrc = useMemo(
    () => brightcoveEmbedSrc ?? getTelemostRecordingEmbedSrc(videoId),
    [brightcoveEmbedSrc],
  );

  const activatePlayer = useCallback(() => {
    if (activatedRef.current) return;
    activatedRef.current = true;
    const node = iframeRef.current;
    if (node) {
      node.src = resolvedEmbedSrc;
    }
    setOverlayHidden(true);
  }, [resolvedEmbedSrc]);

  return (
    <div className={styles.karlovaTelemostPlayer}>
      <div className={styles.karlovaTelemostEmbed}>
        <iframe
          ref={iframeRef}
          title={iframeTitle}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowFullScreen
          className={styles.karlovaTelemostIframe}
        />
        {!overlayHidden ? (
          <div className={styles.karlovaTelemostPosterLayer}>
            <div className={styles.karlovaTelemostPosterImageWrap}>
              <Image
                src={posterSrc}
                alt={posterAlt}
                fill
                sizes="(max-width: 1279px) calc(100vw - 28px), min(1009px, calc(100vw - 120px))"
                className={styles.karlovaTelemostPosterImage}
                priority={priority}
              />
            </div>
            <button
              type="button"
              className={styles.karlovaTelemostOverlay}
              onClick={activatePlayer}
              aria-label="Воспроизвести запись телемоста"
            >
              {/* eslint-disable-next-line @next/next/no-img-element -- локальный SVG */}
              <img
                src="/icons/play-cricle.svg"
                alt=""
                width={176}
                height={176}
                className={styles.karlovaTelemostPlayIcon}
                draggable={false}
              />
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
