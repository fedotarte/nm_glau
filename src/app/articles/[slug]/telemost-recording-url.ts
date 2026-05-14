/** Запись телемоста (Brightcove). */
const TELEMOST_PLAYER_PAGE =
  "https://players.brightcove.net/1029485116001/default_default/index.html";

/**
 * URL для iframe: после монтирования плеер сам стартует воспроизведение (один клик по постеру).
 * autoplay=any — при блокировке браузера пробует со звуком, затем приглушённо (Brightcove).
 */
export function getTelemostRecordingEmbedSrc(id: string): string {
  const url = new URL(TELEMOST_PLAYER_PAGE);
  url.searchParams.set("videoId", id);
  url.searchParams.set("autoplay", "any");
  url.searchParams.set("playsinline", "true");
  return url.toString();
}
