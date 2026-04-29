import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { AUTH_COOKIE, verifyAdminCookie } from "@/lib/admin-auth";

/**
 * Admin auth middleware. Anything under /admin/* (except /admin/login) requires
 * the sas_admin cookie. Missing or invalid cookie redirects to /admin/login.
 *
 * The middleware does not interact with Redis — it only verifies the cookie
 * against the ADMIN_PASSWORD env var. This is intentionally minimal and
 * stateless.
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/admin") &&
    pathname !== "/admin/login" &&
    !pathname.startsWith("/admin/login/")
  ) {
    const cookie = request.cookies.get(AUTH_COOKIE)?.value;
    if (!verifyAdminCookie(cookie)) {
      const url = request.nextUrl.clone();
      url.pathname = "/admin/login";
      url.searchParams.set("next", pathname);
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
