import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import {
  applyAuthCookies,
  normalizeToken,
  readAuthStateFromCookie,
  sanitizeReturnTo,
} from "@/lib/auth/server";
import { AUTH_STATE_COOKIE_NAME } from "@/lib/auth/config";

export function proxy(request: NextRequest) {
  const tokenFromUrl = request.nextUrl.searchParams.get("token");
  if (!tokenFromUrl) {
    return NextResponse.next();
  }

  const token = normalizeToken(tokenFromUrl);
  if (!token) {
    return NextResponse.next();
  }

  const stateFromUrl = request.nextUrl.searchParams.get("state");
  const authState = readAuthStateFromCookie(
    request.cookies.get(AUTH_STATE_COOKIE_NAME)?.value,
  );

  const redirectTarget = new URL(request.url);
  redirectTarget.searchParams.delete("token");
  redirectTarget.searchParams.delete("state");

  const shouldRestoreReturnTo =
    authState &&
    (!stateFromUrl || authState.state === stateFromUrl) &&
    authState.returnTo;

  if (shouldRestoreReturnTo) {
    const returnTo = sanitizeReturnTo(authState.returnTo);
    redirectTarget.pathname = returnTo;
    redirectTarget.search = "";
  }

  const response = NextResponse.redirect(redirectTarget);
  applyAuthCookies(response, token);
  response.cookies.delete(AUTH_STATE_COOKIE_NAME);

  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
