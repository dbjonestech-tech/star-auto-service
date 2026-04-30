"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { localeFromPath, LOCALE_BCP47 } from "@/lib/i18n";

/**
 * Keeps `<html lang>` in sync with the current pathname on the client.
 * Initial SSR still emits the static lang from the root layout (en); this
 * corrects to es-US on /es/* routes after hydration and on subsequent
 * client-side navigation between locales.
 *
 * Phase 6 (SEO plumbing) will replace this with a middleware-driven approach
 * that sets lang correctly in the SSR HTML.
 */
export function HtmlLangSync() {
  const pathname = usePathname();
  useEffect(() => {
    const locale = localeFromPath(pathname);
    document.documentElement.lang = LOCALE_BCP47[locale];
  }, [pathname]);
  return null;
}
