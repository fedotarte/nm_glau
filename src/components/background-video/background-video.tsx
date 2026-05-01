interface BackgroundVideoProps {
  className?: string;
  poster?: string;
}

const MOBILE_SRC = "/video/bg_video_mob.mp4";
const DESKTOP_SRC = "/video/bg_video_desk.mp4";
const DESKTOP_BREAKPOINT = 1280;

export const BackgroundVideo = ({ className, poster }: BackgroundVideoProps) => {
  return (
    <video
      className={className}
      autoPlay
      loop
      muted
      playsInline
      poster={poster}
    >
      <source
        src={DESKTOP_SRC}
        type="video/mp4"
        media={`(min-width: ${DESKTOP_BREAKPOINT}px)`}
      />
      <source src={MOBILE_SRC} type="video/mp4" />
    </video>
  );
};
