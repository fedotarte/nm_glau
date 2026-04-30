import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import {
  applyAuthCookies,
  readAuthStateFromCookie,
  sanitizeReturnTo,
} from "@/lib/auth/server";
import { AUTH_STATE_COOKIE_NAME } from "@/lib/auth/config";

export function middleware(request: NextRequest) {
  const tokenFromUrl = request.nextUrl.searchParams.get("token");
  if (!tokenFromUrl) {
    return NextResponse.next();
  }

  const token = tokenFromUrl.trim();
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

  if (
    stateFromUrl &&
    authState &&
    authState.state === stateFromUrl &&
    authState.returnTo
  ) {
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
