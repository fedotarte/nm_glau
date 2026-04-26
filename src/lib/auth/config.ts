/**
 * Серверная конфигурация авторизации.
 * НЕ импортировать из клиентских компонентов: значения берутся из process.env
 * и часть переменных не должна попадать в клиентский бандл.
 */

export const AUTH_COOKIE_NAME = process.env.AUTH_COOKIE_NAME ?? "auth_token";

// 30 дней по умолчанию.
export const AUTH_COOKIE_MAX_AGE = 60 * 60 * 24 * 30;

/**
 * URL стороннего сервиса проверки авторизации.
 * Если не задан — в dev-режиме считаем валидным сам факт наличия куки,
 * в production всегда возвращаем 401 (фейл-сейф).
 */
export const getAuthCheckUrl = (): string => process.env.AUTH_CHECK_URL ?? "";

export const isAuthDevEnabled = (): boolean =>
  process.env.NODE_ENV !== "production";
