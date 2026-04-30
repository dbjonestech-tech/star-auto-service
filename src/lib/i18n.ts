/**
 * Locale primitives for the bilingual (en / es) site.
 *
 * Architecture: parallel-tree. English routes live at the root (`/services/brakes`).
 * Spanish routes live under `/es/...` (`/es/services/brakes`). Components read the
 * `locale` prop their layout passed down. There's no `[locale]` URL segment; the
 * `/es` prefix is a literal folder, which keeps regression risk on the existing
 * English tree at zero.
 */

export const LOCALES = ["en", "es"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";

/**
 * Feature flag. The Spanish parallel tree is fully wired and translated as
 * of Phase 7. The language toggle, middleware auto-detect, hreflang
 * alternates, and locale-paired sitemap all activate when this is true.
 */
export const SPANISH_ENABLED = true;

export const LOCALE_LABELS: Record<Locale, string> = {
  en: "English",
  es: "Español",
};

/** Short label rendered in the header toggle pill (EN | ES). */
export const LOCALE_SHORT: Record<Locale, string> = {
  en: "EN",
  es: "ES",
};

/** BCP-47 tag used in <html lang>, hreflang, and Open Graph locale fields. */
export const LOCALE_BCP47: Record<Locale, string> = {
  en: "en-US",
  es: "es-US",
};

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

/**
 * Strip the `/es` prefix from a pathname so we can recompute it for either locale.
 * Examples:
 *   "/es/services/brakes" -> "/services/brakes"
 *   "/es"                 -> "/"
 *   "/services/brakes"    -> "/services/brakes"
 */
export function stripLocale(pathname: string): string {
  if (pathname === "/es") return "/";
  if (pathname.startsWith("/es/")) return pathname.slice(3);
  return pathname;
}

/**
 * Return the URL for the same logical page in the requested locale.
 * Used by the language toggle and by hreflang alternate generation.
 */
export function localizedPath(pathname: string, locale: Locale): string {
  const base = stripLocale(pathname);
  if (locale === "en") return base;
  return base === "/" ? "/es" : `/es${base}`;
}

/**
 * Detect the locale from a pathname. Falls back to default.
 */
export function localeFromPath(pathname: string): Locale {
  if (pathname === "/es" || pathname.startsWith("/es/")) return "es";
  return "en";
}
