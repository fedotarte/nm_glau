import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import {
  AUTH_COOKIE_NAME,
  getAuthCheckUrl,
  isAuthDevEnabled,
} from "@/lib/auth/config";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const unauthorized = () => new NextResponse(null, { status: 401 });
const ok = () => new NextResponse(null, { status: 204 });

export async function GET() {
  const cookieStore = await cookies();
  const token = cookieStore.get(AUTH_COOKIE_NAME)?.value;

  if (!token) {
    return unauthorized();
  }

  const upstreamUrl = getAuthCheckUrl();

  // В dev-режиме без настроенного апстрима доверяем самому факту наличия
  // куки — удобно для локальной отладки UI авторизации.
  if (!upstreamUrl) {
    return isAuthDevEnabled() ? ok() : unauthorized();
  }

  try {
    const upstreamResponse = await fetch(upstreamUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
      cache: "no-store",
    });

    if (upstreamResponse.status === 204 || upstreamResponse.ok) {
      return ok();
    }

    return unauthorized();
  } catch (error) {
    console.error("[auth/check] upstream error", error);
    return unauthorized();
  }
}
