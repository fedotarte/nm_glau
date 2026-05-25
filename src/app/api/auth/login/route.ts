import { NextResponse } from "next/server";

import { PHARM_VISION_FROM, PHARM_VISION_LOGIN_URL } from "@/lib/auth/config";
import {
  createAuthState,
  sanitizeReturnTo,
  saveAuthStateCookie,
} from "@/lib/auth/server";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const returnTo = sanitizeReturnTo(requestUrl.searchParams.get("returnTo"));
  const statePayload = createAuthState(returnTo);

  const redirectTo = new URL(PHARM_VISION_LOGIN_URL);
  redirectTo.searchParams.set("state", statePayload.state);
  redirectTo.searchParams.set("from", PHARM_VISION_FROM);
  redirectTo.hash = "popup-enter";

  const response = NextResponse.redirect(redirectTo);
  saveAuthStateCookie(response, statePayload);
  return response;
}
