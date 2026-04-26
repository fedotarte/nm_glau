import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import {
  AUTH_COOKIE_MAX_AGE,
  AUTH_COOKIE_NAME,
  isAuthDevEnabled,
} from "@/lib/auth/config";

export const dynamic = "force-dynamic";

const FALLBACK_TOKEN = "dev-token";

/**
 * Dev-only endpoint для выставления http-only куки авторизации из консоли:
 *
 *   await fetch("/api/auth/dev-login", { method: "POST" });
 *   await fetch("/api/auth/dev-login", {
 *     method: "POST",
 *     headers: { "Content-Type": "application/json" },
 *     body: JSON.stringify({ token: "any-string" }),
 *   });
 */
export async function POST(request: Request) {
  if (!isAuthDevEnabled()) {
    return new NextResponse(null, { status: 404 });
  }

  let token = FALLBACK_TOKEN;

  try {
    const body = (await request.json().catch(() => null)) as
      | { token?: unknown }
      | null;

    if (body && typeof body.token === "string" && body.token.length > 0) {
      token = body.token;
    }
  } catch {
    // тело необязательно — используем fallback
  }

  const cookieStore = await cookies();
  cookieStore.set({
    name: AUTH_COOKIE_NAME,
    value: token,
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: AUTH_COOKIE_MAX_AGE,
  });

  return NextResponse.json({ ok: true });
}
