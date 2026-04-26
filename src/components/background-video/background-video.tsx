"use client";

import { useEffect, useRef, useState } from "react";

interface BackgroundVideoProps {
  className?: string;
  poster?: string;
}

const MOBILE_SRC = "/video/bg_video_mob.mp4";
const DESKTOP_SRC = "/video/bg_video_desk.mp4";
const DESKTOP_BREAKPOINT = 1280;

export const BackgroundVideo = ({ className, poster }: BackgroundVideoProps) => {
  const [videoSrc, setVideoSrc] = useState(MOBILE_SRC);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const updateVideoSrc = () => {
      const nextSrc =
        window.innerWidth >= DESKTOP_BREAKPOINT ? DESKTOP_SRC : MOBILE_SRC;
      setVideoSrc((prev) => (prev === nextSrc ? prev : nextSrc));
    };

    updateVideoSrc();

    window.addEventListener("resize", updateVideoSrc);
    return () => window.removeEventListener("resize", updateVideoSrc);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let cancelled = false;

    const tryPlay = () => {
      if (cancelled) return;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((error: unknown) => {
          // AbortError fires when load()/pause() interrupts a pending play().
          // It's expected during src swaps or React Strict Mode double effects.
          if (
            error instanceof DOMException &&
            (error.name === "AbortError" || error.name === "NotAllowedError")
          ) {
            return;
          }
          console.warn("Background video play failed:", error);
        });
      }
    };

    video.addEventListener("loadeddata", tryPlay, { once: true });
    video.load();

    return () => {
      cancelled = true;
      video.removeEventListener("loadeddata", tryPlay);
      video.pause();
    };
  }, [videoSrc]);

  return (
    <video
      ref={videoRef}
      className={className}
      autoPlay
      loop
      muted
      playsInline
      poster={poster}
    >
      <source src={videoSrc} type="video/mp4" />
    </video>
  );
};
