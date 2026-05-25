import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import { AUTH_FORCE_AUTHENTICATED } from "@/lib/auth/config";
import {
  applyAuthCookies,
  getAuthTokenFromCookies,
  verifyTokenWithPharmVision,
} from "@/lib/auth/server";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const unauthorized = () => new NextResponse(null, { status: 401 });
const ok = (payload: unknown) => NextResponse.json(payload, { status: 200 });

export async function GET() {
  if (AUTH_FORCE_AUTHENTICATED) {
    return ok({ ok: true, user: null });
  }

  const cookieStore = await cookies();
  const token = getAuthTokenFromCookies(cookieStore);

  if (!token) {
    return unauthorized();
  }

  const verifyResult = await verifyTokenWithPharmVision(token);
  if (!verifyResult.ok || !verifyResult.token) {
    return unauthorized();
  }

  const response = ok({
    ok: true,
    user: verifyResult.user ?? null,
  });
  applyAuthCookies(response, verifyResult.token);
  return response;
}
