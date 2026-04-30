import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { AUTH_COOKIE, verifyAdminCookie } from "@/lib/admin-auth";
import { SPANISH_ENABLED } from "@/lib/i18n";

/**
 * Composite middleware:
 *
 * 1) Admin auth (/admin/* except /admin/login). Missing or invalid sas_admin
 *    cookie redirects to /admin/login.
 *
 * 2) Spanish locale auto-detect. When SPANISH_ENABLED is true and the request
 *    is for a public English route (not /admin, /api, /track, /es, or a static
 *    asset), and the visitor has no `sas_locale` cookie set, and Accept-Language
 *    strongly prefers Spanish (es weight >= the highest non-es weight), redirect
 *    to /es/<same-path> and set sas_locale=es. Auto-detect runs once; the
 *    cookie persists for one year and the explicit toggle (set in Header.tsx)
 *    always wins.
 *
 * 3) Sets `x-pathname` header on the forwarded request so server components
 *    (including the root layout) can read the URL via `headers()` and emit
 *    the correct `<html lang>` for /es routes during SSR.
 */

const LOCALE_COOKIE = "sas_locale";
const ONE_YEAR = 60 * 60 * 24 * 365;

/** Routes that are never auto-redirected. Admin / API / track stay locale-agnostic. */
const SKIP_LOCALE_PREFIXES = ["/admin", "/api", "/track", "/es"];

function isPublicHtmlRoute(pathname: string): boolean {
  if (SKIP_LOCALE_PREFIXES.some((p) => pathname === p || pathname.startsWith(`${p}/`))) {
    return false;
  }
  // Static asset / Next-internal paths.
  if (pathname.startsWith("/_next") || pathname.startsWith("/assets")) return false;
  if (/\.[a-z0-9]+$/i.test(pathname)) return false;
  return true;
}

/**
 * Returns true when the visitor's Accept-Language header lists Spanish at the
 * top of their preferences. Conservative: requires that "es" (or es-* like
 * es-US, es-MX) appear with weight equal to or higher than the highest
 * non-Spanish weight. Falls back to false on a missing or empty header.
 */
function prefersSpanish(acceptLanguage: string | null): boolean {
  if (!acceptLanguage) return false;

  let bestEs = 0;
  let bestOther = 0;

  for (const part of acceptLanguage.split(",")) {
    const [tagRaw, ...params] = part.trim().split(";");
    const tag = tagRaw.toLowerCase();
    if (!tag) continue;
    let q = 1;
    for (const p of params) {
      const m = /^q=([\d.]+)$/i.exec(p.trim());
      if (m) q = parseFloat(m[1]);
    }
    if (tag === "es" || tag.startsWith("es-")) {
      if (q > bestEs) bestEs = q;
    } else {
      if (q > bestOther) bestOther = q;
    }
  }

  return bestEs > 0 && bestEs >= bestOther;
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Admin auth gate.
  if (
    pathname.startsWith("/admin") &&
    pathname !== "/admin/login" &&
    !pathname.startsWith("/admin/login/")
  ) {
    const cookie = request.cookies.get(AUTH_COOKIE)?.value;
    if (!(await verifyAdminCookie(cookie))) {
      const url = request.nextUrl.clone();
      url.pathname = "/admin/login";
      url.searchParams.set("next", pathname);
      return NextResponse.redirect(url);
    }
  }

  // 2. Spanish locale auto-detect (only when feature flag is on).
  if (SPANISH_ENABLED && isPublicHtmlRoute(pathname)) {
    const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value;
    const hasExplicitChoice = cookieLocale === "en" || cookieLocale === "es";

    if (!hasExplicitChoice && prefersSpanish(request.headers.get("accept-language"))) {
      const url = request.nextUrl.clone();
      url.pathname = pathname === "/" ? "/es" : `/es${pathname}`;
      const response = NextResponse.redirect(url);
      response.cookies.set(LOCALE_COOKIE, "es", {
        maxAge: ONE_YEAR,
        path: "/",
        sameSite: "lax",
      });
      return response;
    }
  }

  // 3. Forward x-pathname so server components can read the URL during SSR.
  const response = NextResponse.next({ request });
  response.headers.set("x-pathname", pathname);
  return response;
}

export const config = {
  // Match everything except Next internals and the most common static-file
  // extensions. The locale block above further filters down to public HTML
  // routes; this matcher is intentionally broad so x-pathname is set on
  // every request that ends up rendering a layout.
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|opengraph-image|icon|apple-icon|manifest.webmanifest|assets/).*)",
  ],
};
