"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, Star, Phone, Globe, ChevronDown } from "lucide-react";
import { track } from "@vercel/analytics";
import { SITE } from "@/lib/constants";
import { getServices } from "@/lib/constants.es";
import { getAreas } from "@/lib/areas";
import { OpenNowChip } from "@/components/ui/OpenNowChip";
import { NavDropdown, type NavDropdownItem } from "@/components/layout/NavDropdown";
import {
  type Locale,
  LOCALE_SHORT,
  localizedPath,
  localeFromPath,
  pathHasLocaleTwin,
  SPANISH_ENABLED,
} from "@/lib/i18n";
import { t } from "@/lib/translations/ui";

type Props = { locale?: Locale };

/** Prepend `/es` to an internal path when rendering the Spanish header. */
function L(path: string, locale: Locale): string {
  if (locale === "en") return path;
  return path === "/" ? "/es" : `/es${path}`;
}

export function Header({ locale: propLocale }: Props = {}) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname() ?? "/";
  const router = useRouter();
  // Locale is the prop if provided, otherwise inferred from URL prefix.
  // This lets the same Header component serve both /services/* (en) and
  // /es/services/* (es) without the root layout needing to know which tree.
  const locale: Locale = propLocale ?? localeFromPath(pathname);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  const SERVICES_DROPDOWN: NavDropdownItem[] = getServices(locale).map((s) => ({
    label: s.title,
    href: L(`/services/${s.id}`, locale),
  }));

  const AREAS_DROPDOWN: NavDropdownItem[] = getAreas(locale).map((a) => ({
    label: `${a.name}, ${a.state}`,
    href: L(`/areas/${a.slug}`, locale),
    sub:
      a.distance === "Home base" || a.distance === "Sede"
        ? t(locale, "navMenus.homeBaseLabel")
        : a.distance,
  }));

  const RESOURCES_DROPDOWN: NavDropdownItem[] = [
    { label: t(locale, "navMenus.reviews"), href: L("/reviews", locale) },
    { label: t(locale, "navMenus.faq"), href: L("/faq", locale) },
    { label: t(locale, "navMenus.resourcesGuides"), href: L("/resources", locale) },
    { label: t(locale, "navMenus.warranty"), href: L("/warranty", locale) },
  ];

  const otherLocale: Locale = locale === "en" ? "es" : "en";
  const togglePath = localizedPath(pathname, otherLocale);
  const toggleAriaLabel =
    locale === "en"
      ? t("en", "toggle.switchToSpanish")
      : t("es", "toggle.switchToEnglish");

  function handleLocaleToggle(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    // Persist the user's explicit choice for one year. Auto-detect respects this.
    document.cookie = `sas_locale=${otherLocale}; path=/; max-age=31536000; samesite=lax`;
    track("locale_toggle", { from: locale, to: otherLocale });
    router.push(togglePath);
  }

  return (
    <>
    <header
      className={`sticky top-0 z-50 bg-cream/95 backdrop-blur-md transition-shadow duration-200 ${
        scrolled ? "shadow-[0_1px_0_var(--color-line),0_8px_24px_rgba(15,15,18,0.04)]" : ""
      }`}
    >
      {/* Utility bar, xl+ only, slim */}
      <div className="hidden xl:block border-b border-line/60 bg-paper/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-end gap-5 text-[10px] uppercase tracking-[0.18em] font-bold text-graphite">
          <OpenNowChip />
          <span className="w-px h-3 bg-line" aria-hidden="true" />
          <span
            lang="es"
            title="Hablamos Español"
            className="inline-flex items-center gap-1.5"
          >
            <Globe size={11} strokeWidth={2.5} aria-hidden="true" />
            Hablamos Español
          </span>
          <span className="w-px h-3 bg-line" aria-hidden="true" />
          <a
            href={`tel:${SITE.phoneRaw}`}
            onClick={() => track("call_click", { source: "header" })}
            className="inline-flex items-center gap-1.5 text-ink hover:text-royal transition-colors tabular-nums"
            aria-label={`${t(locale, "header.callShop")} ${SITE.phone}`}
          >
            <Phone size={11} strokeWidth={2.5} aria-hidden="true" />
            {SITE.phone}
          </a>
        </div>
      </div>

      {/* Main bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-x-4 lg:gap-x-6 h-16 md:h-18 lg:h-20">
          <Link
            href={L("/", locale)}
            className="brand-star-link flex items-center gap-2.5 group shrink-0"
            aria-label={`${SITE.name} ${t(locale, "header.home").toLowerCase()}`}
          >
            <Star
              className="brand-star text-gold transition-transform group-hover:scale-110 duration-300 shrink-0"
              size={24}
              fill="currentColor"
              strokeWidth={1.5}
              aria-hidden="true"
            />
            <span className="font-sans text-sm md:text-base lg:text-lg font-extrabold tracking-tight text-ink uppercase whitespace-nowrap">
              The Star Auto Service
            </span>
          </Link>

          <nav
            className="hidden md:flex items-center gap-5 lg:gap-8"
            aria-label={t(locale, "header.primaryNav")}
          >
            <NavDropdown
              label={t(locale, "header.services")}
              items={SERVICES_DROPDOWN}
              footer={{
                label: `${t(locale, "header.allServicesOverview")} →`,
                href: L("/services", locale),
              }}
            />
            <NavDropdown
              label={t(locale, "header.areasServed")}
              items={AREAS_DROPDOWN}
            />
            <Link
              href={L("/about", locale)}
              className="text-xs uppercase tracking-[0.16em] font-bold text-ink/80 hover:text-royal transition-colors whitespace-nowrap"
            >
              {t(locale, "header.theShop")}
            </Link>
            <NavDropdown
              label={t(locale, "header.more")}
              items={RESOURCES_DROPDOWN}
            />
            <Link
              href={L("/contact", locale)}
              className="text-xs uppercase tracking-[0.16em] font-bold text-ink/80 hover:text-royal transition-colors whitespace-nowrap"
            >
              {t(locale, "header.contact")}
            </Link>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <Link
              href={L("/reviews", locale)}
              aria-label={`${SITE.rating.value} ${t(locale, "header.reviews", { count: SITE.rating.count })}`}
              className="brand-star-link group inline-flex items-center gap-1.5 bg-gold-tint hover:bg-gold-soft border border-gold/40 px-2 sm:px-2.5 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.12em] text-ink transition-colors whitespace-nowrap"
            >
              <Star
                className="brand-star text-gold shrink-0"
                size={13}
                fill="currentColor"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <span className="tabular-nums">{SITE.rating.value}</span>
              <span className="hidden md:inline text-graphite/70">·</span>
              <span className="hidden md:inline tabular-nums">
                {t(locale, "header.reviews", { count: SITE.rating.count })}
              </span>
            </Link>

            {/* Language toggle. Gated by SPANISH_ENABLED, and hidden on
                routes that intentionally have no locale twin (admin, api,
                dynamic /track/[id]) so we never link to a 404. */}
            {SPANISH_ENABLED && pathHasLocaleTwin(pathname) && (
              <a
                href={togglePath}
                onClick={handleLocaleToggle}
                aria-label={toggleAriaLabel}
                hrefLang={otherLocale}
                className="inline-flex items-center gap-1 border border-line hover:border-royal hover:text-royal text-ink px-2 sm:px-2.5 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.12em] transition-colors whitespace-nowrap"
              >
                <Globe size={13} strokeWidth={2.5} aria-hidden="true" />
                <span className="tabular-nums">{LOCALE_SHORT[otherLocale]}</span>
              </a>
            )}

            <Link
              href={L("/book", locale)}
              className="hidden md:inline-flex items-center justify-center bg-gold text-ink hover:bg-gold-deep px-4 lg:px-5 py-2.5 text-xs font-extrabold uppercase tracking-[0.14em] transition-colors shadow-gold whitespace-nowrap"
            >
              {t(locale, "header.bookService")}
            </Link>

            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 text-ink"
              aria-label={
                open
                  ? t(locale, "header.closeMenu")
                  : t(locale, "header.openMenu")
              }
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

    </header>
    {open && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label={t(locale, "header.mobileNav")}
          className="md:hidden fixed inset-x-0 top-16 bottom-0 z-40 border-t border-line bg-cream overflow-y-auto overscroll-contain"
        >
          <nav className="px-4 py-5" aria-label={t(locale, "header.mobileNav")}>
            <MobileSection
              title={t(locale, "header.services")}
              items={SERVICES_DROPDOWN}
              onClose={() => setOpen(false)}
              footerLabel={t(locale, "header.allServicesOverview")}
              footerHref={L("/services", locale)}
            />
            <MobileSection
              title={t(locale, "header.areasServed")}
              items={AREAS_DROPDOWN}
              onClose={() => setOpen(false)}
            />
            <MobileSection
              title={t(locale, "header.more")}
              items={RESOURCES_DROPDOWN}
              onClose={() => setOpen(false)}
            />
            <Link
              href={L("/about", locale)}
              onClick={() => setOpen(false)}
              className="block py-3 mt-2 text-sm uppercase tracking-[0.16em] font-bold text-ink hover:text-royal transition-colors border-t border-line"
            >
              {t(locale, "header.theShop")}
            </Link>
            <Link
              href={L("/contact", locale)}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm uppercase tracking-[0.16em] font-bold text-ink hover:text-royal transition-colors"
            >
              {t(locale, "header.contact")}
            </Link>

            <Link
              href={L("/book", locale)}
              onClick={() => setOpen(false)}
              className="mt-5 inline-flex items-center justify-center bg-gold text-ink hover:bg-gold-deep px-6 py-3.5 text-xs font-extrabold uppercase tracking-[0.14em] transition-colors w-full"
            >
              {t(locale, "header.bookService")}
            </Link>
            <a
              href={`tel:${SITE.phoneRaw}`}
              onClick={() => {
                track("call_click", { source: "mobile_menu" });
                setOpen(false);
              }}
              className="mt-3 inline-flex items-center justify-center gap-2 border-2 border-ink text-ink hover:bg-ink hover:text-cream px-6 py-3.5 text-xs font-extrabold uppercase tracking-[0.14em] transition-colors w-full"
            >
              <Phone size={14} strokeWidth={2.5} aria-hidden="true" />
              {SITE.phone}
            </a>

            {/* Mobile language toggle, full-width row at the bottom of the menu.
                Same SPANISH_ENABLED gate as the desktop toggle. */}
            {SPANISH_ENABLED && (
              <a
                href={togglePath}
                onClick={(e) => {
                  handleLocaleToggle(e);
                  setOpen(false);
                }}
                aria-label={toggleAriaLabel}
                hrefLang={otherLocale}
                className="mt-3 inline-flex items-center justify-center gap-2 border border-line text-ink hover:border-royal hover:text-royal px-6 py-3.5 text-xs font-extrabold uppercase tracking-[0.14em] transition-colors w-full"
              >
                <Globe size={14} strokeWidth={2.5} aria-hidden="true" />
                {locale === "en" ? "Cambiar a Español" : "Switch to English"}
              </a>
            )}
          </nav>
        </div>
      )}
    </>
  );
}

function MobileSection({
  title,
  items,
  onClose,
  footerLabel,
  footerHref,
}: {
  title: string;
  items: NavDropdownItem[];
  onClose: () => void;
  footerLabel?: string;
  footerHref?: string;
}) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="border-t border-line first:border-t-0">
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
        className="w-full flex items-center justify-between py-3 text-sm uppercase tracking-[0.16em] font-bold text-ink"
      >
        {title}
        <ChevronDown
          size={14}
          strokeWidth={2.5}
          className={`transition-transform ${expanded ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>
      {expanded && (
        <ul className="pl-4 pb-3 space-y-1">
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={onClose}
                className="block py-2 text-sm font-medium text-ink/85 hover:text-royal transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
          {footerLabel && footerHref && (
            <li className="pt-1">
              <Link
                href={footerHref}
                onClick={onClose}
                className="block py-2 text-[11px] uppercase tracking-[0.16em] font-extrabold text-royal"
              >
                {footerLabel} →
              </Link>
            </li>
          )}
        </ul>
      )}
    </div>
  );
}
