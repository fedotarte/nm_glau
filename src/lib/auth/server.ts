import { NextResponse } from "next/server";

import {
  AUTH_COOKIE_MAX_AGE,
  AUTH_COOKIE_NAME,
  AUTH_STATE_COOKIE_NAME,
  AUTH_STATE_COOKIE_MAX_AGE,
  PHARM_TOKEN_COOKIE_NAME,
  PHARM_VISION_SECRET,
  PHARM_VISION_VERIFY_URL,
  isAuthConfigured,
} from "@/lib/auth/config";

type CookieGetter = {
  get: (name: string) => { value: string } | undefined;
};

interface VerifyResponseUser {
  id: number | string;
  email?: string;
  username?: string;
}

interface VerifyResponseBody {
  ok?: boolean;
  token?: unknown;
  user?: unknown;
}

interface VerifyAuthResult {
  ok: boolean;
  token?: string;
  user?: VerifyResponseUser;
}

interface AuthStatePayload {
  state: string;
  returnTo: string;
}

const isProduction = process.env.NODE_ENV === "production";

export const normalizeToken = (value: string | null | undefined): string | null => {
  const trimmed = value?.trim();
  if (!trimmed) {
    return null;
  }

  let normalized = trimmed;
  try {
    normalized = decodeURIComponent(trimmed);
  } catch {
    normalized = trimmed;
  }

  return normalized ? normalized : null;
};

export const getAuthTokenFromCookies = (cookieStore: CookieGetter): string | null => {
  const tokenFromPrimary = cookieStore.get(AUTH_COOKIE_NAME)?.value;
  const tokenFromPharmCookie = cookieStore.get(PHARM_TOKEN_COOKIE_NAME)?.value;
  return normalizeToken(tokenFromPrimary ?? tokenFromPharmCookie ?? null);
};

const parseVerifyUser = (value: unknown): VerifyResponseUser | undefined => {
  if (!value || typeof value !== "object") {
    return undefined;
  }

  const userCandidate = value as Record<string, unknown>;
  const id = userCandidate.id;
  if (typeof id !== "number" && typeof id !== "string") {
    return undefined;
  }

  return {
    id,
    email: typeof userCandidate.email === "string" ? userCandidate.email : undefined,
    username:
      typeof userCandidate.username === "string" ? userCandidate.username : undefined,
  };
};

export const verifyTokenWithPharmVision = async (
  token: string,
): Promise<VerifyAuthResult> => {
  const normalizedToken = normalizeToken(token);
  if (!normalizedToken || !isAuthConfigured()) {
    return { ok: false };
  }

  try {
    const response = await fetch(PHARM_VISION_VERIFY_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        token: normalizedToken,
        secret: PHARM_VISION_SECRET,
      }),
      cache: "no-store",
    });

    if (!response.ok) {
      return { ok: false };
    }

    const payload = (await response.json()) as VerifyResponseBody;
    if (payload.ok !== true) {
      return { ok: false };
    }

    const verifiedToken =
      typeof payload.token === "string" ? normalizeToken(payload.token) : normalizedToken;
    const user = parseVerifyUser(payload.user);

    return {
      ok: true,
      token: verifiedToken ?? normalizedToken,
      user,
    };
  } catch (error) {
    console.error("[auth/verify] pharm-vision verify failed", error);
    return { ok: false };
  }
};

export const applyAuthCookies = (response: NextResponse, token: string) => {
  response.cookies.set({
    name: AUTH_COOKIE_NAME,
    value: token,
    httpOnly: true,
    secure: isProduction,
    sameSite: "lax",
    path: "/",
    maxAge: AUTH_COOKIE_MAX_AGE,
  });

  // Нужна совместимость с текущим фарм-скриптом: дублируем token в pharm_token.
  response.cookies.set({
    name: PHARM_TOKEN_COOKIE_NAME,
    value: token,
    httpOnly: false,
    secure: isProduction,
    sameSite: "lax",
    path: "/",
    maxAge: AUTH_COOKIE_MAX_AGE,
  });
};

export const clearAuthCookies = (response: NextResponse) => {
  response.cookies.delete(AUTH_COOKIE_NAME);
  response.cookies.delete(PHARM_TOKEN_COOKIE_NAME);
  response.cookies.delete(AUTH_STATE_COOKIE_NAME);
};

export const createAuthState = (returnTo: string): AuthStatePayload => ({
  state: crypto.randomUUID().replaceAll("-", ""),
  returnTo,
});

export const saveAuthStateCookie = (
  response: NextResponse,
  payload: AuthStatePayload,
) => {
  response.cookies.set({
    name: AUTH_STATE_COOKIE_NAME,
    value: JSON.stringify(payload),
    httpOnly: true,
    secure: isProduction,
    sameSite: "lax",
    path: "/",
    maxAge: AUTH_STATE_COOKIE_MAX_AGE,
  });
};

export const readAuthStateFromCookie = (
  rawCookieValue: string | undefined,
): AuthStatePayload | null => {
  if (!rawCookieValue) {
    return null;
  }

  try {
    const payload = JSON.parse(rawCookieValue) as Partial<AuthStatePayload>;
    if (
      typeof payload.state === "string" &&
      payload.state.length > 0 &&
      typeof payload.returnTo === "string" &&
      payload.returnTo.startsWith("/") &&
      !payload.returnTo.startsWith("//")
    ) {
      return {
        state: payload.state,
        returnTo: payload.returnTo,
      };
    }

    return null;
  } catch {
    return null;
  }
};

export const sanitizeReturnTo = (value: string | null): string => {
  if (!value || !value.startsWith("/") || value.startsWith("//")) {
    return "/";
  }

  return value;
};
