import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import { AUTH_COOKIE_NAME, isAuthDevEnabled } from "@/lib/auth/config";

export const dynamic = "force-dynamic";

/**
 * Dev-only endpoint для удаления http-only куки авторизации:
 *
 *   await fetch("/api/auth/dev-logout", { method: "POST" });
 */
export async function POST() {
  if (!isAuthDevEnabled()) {
    return new NextResponse(null, { status: 404 });
  }

  const cookieStore = await cookies();
  cookieStore.delete(AUTH_COOKIE_NAME);

  return NextResponse.json({ ok: true });
}
