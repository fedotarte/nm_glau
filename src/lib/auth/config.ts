/**
 * Серверная конфигурация авторизации.
 * НЕ импортировать из клиентских компонентов: часть значений секретная.
 */

export const AUTH_COOKIE_NAME = process.env.AUTH_COOKIE_NAME ?? "auth_token";
export const PHARM_TOKEN_COOKIE_NAME = "pharm_token";
export const AUTH_STATE_COOKIE_NAME = "auth_state";

// 30 дней по умолчанию.
export const AUTH_COOKIE_MAX_AGE = 60 * 60 * 24 * 30;
export const AUTH_STATE_COOKIE_MAX_AGE = 60 * 10; // 10 минут на возврат после логина

export const PHARM_VISION_LOGIN_URL =
  process.env.PHARM_VISION_LOGIN_URL ?? "https://pharm-vision.ru/";
export const PHARM_VISION_VERIFY_URL =
  process.env.PHARM_VISION_VERIFY_URL ??
  "https://pharm-vision.ru/api/auth/verify";

const DEFAULT_SITE_HOST = "glau.nmmedia.ru";

const getConfiguredSiteHost = (): string => {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!siteUrl) {
    return DEFAULT_SITE_HOST;
  }

  try {
    return new URL(siteUrl).host;
  } catch {
    return siteUrl;
  }
};

export const PHARM_VISION_FROM =
  process.env.PHARM_VISION_FROM?.trim() || getConfiguredSiteHost();
export const PHARM_VISION_SECRET =
  process.env.PHARM_VISION_SECRET ?? "8s6wFXdjQRzbGp3BCyZblklJUDchvYjD";

const parseBooleanEnv = (
  value: string | undefined,
  fallback: boolean,
): boolean => {
  if (value === undefined) {
    return fallback;
  }

  const normalized = value.trim().toLowerCase();
  if (normalized === "true" || normalized === "1" || normalized === "yes") {
    return true;
  }

  if (normalized === "false" || normalized === "0" || normalized === "no") {
    return false;
  }

  return fallback;
};

// Для локального обхода авторизации можно выставить AUTH_FORCE_AUTHENTICATED=true.
export const AUTH_FORCE_AUTHENTICATED = parseBooleanEnv(
  process.env.AUTH_FORCE_AUTHENTICATED,
  false,
);

export const isAuthConfigured = (): boolean =>
  PHARM_VISION_SECRET.trim().length > 0 &&
  PHARM_VISION_VERIFY_URL.trim().length > 0 &&
  PHARM_VISION_LOGIN_URL.trim().length > 0;
