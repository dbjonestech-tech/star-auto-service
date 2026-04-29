"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Star, Phone, Globe, ChevronDown } from "lucide-react";
import { track } from "@vercel/analytics";
import { SITE } from "@/lib/constants";
import { OpenNowChip } from "@/components/ui/OpenNowChip";
import { NavDropdown, type NavDropdownItem } from "@/components/layout/NavDropdown";

const SERVICES_DROPDOWN: NavDropdownItem[] = [
  { label: "Brakes", href: "/services/brakes" },
  { label: "Oil Change & Lube", href: "/services/oil-change" },
  { label: "Engine Diagnostics", href: "/services/engine-diagnostics" },
  { label: "Engine Repair & Replacement", href: "/services/engine-repair" },
  { label: "Transmission Service", href: "/services/transmission" },
  { label: "Electrical Systems", href: "/services/electrical" },
  { label: "Texas State Inspections", href: "/services/state-inspections" },
];

const AREAS_DROPDOWN: NavDropdownItem[] = [
  { label: "Richardson, TX", href: "/areas/richardson-tx", sub: "Home base" },
  { label: "Garland, TX", href: "/areas/garland-tx", sub: "5 miles" },
  { label: "Plano, TX", href: "/areas/plano-tx", sub: "6 miles" },
  { label: "Dallas, TX", href: "/areas/dallas-tx", sub: "10–14 miles" },
  { label: "Allen, TX", href: "/areas/allen-tx", sub: "12 miles" },
  { label: "Murphy, TX", href: "/areas/murphy-tx", sub: "7 miles" },
];

const RESOURCES_DROPDOWN: NavDropdownItem[] = [
  { label: "Reviews", href: "/reviews" },
  { label: "FAQ", href: "/faq" },
  { label: "Resources & guides", href: "/resources" },
  { label: "Warranty", href: "/warranty" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
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
            aria-label={`Call ${SITE.phone}`}
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
            href="/"
            className="brand-star-link flex items-center gap-2.5 group shrink-0"
            aria-label={`${SITE.name} home`}
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

          <nav className="hidden md:flex items-center gap-5 lg:gap-8" aria-label="Primary">
            <NavDropdown
              label="Services"
              items={SERVICES_DROPDOWN}
              footer={{ label: "See all 12 services →", href: "/services" }}
            />
            <NavDropdown label="Areas served" items={AREAS_DROPDOWN} />
            <Link
              href="/about"
              className="text-xs uppercase tracking-[0.16em] font-bold text-ink/80 hover:text-royal transition-colors whitespace-nowrap"
            >
              The Shop
            </Link>
            <NavDropdown label="More" items={RESOURCES_DROPDOWN} />
            <Link
              href="/contact"
              className="text-xs uppercase tracking-[0.16em] font-bold text-ink/80 hover:text-royal transition-colors whitespace-nowrap"
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/book"
              className="hidden md:inline-flex items-center justify-center bg-gold text-ink hover:bg-gold-deep px-4 lg:px-5 py-2.5 text-xs font-extrabold uppercase tracking-[0.14em] transition-colors shadow-gold whitespace-nowrap"
            >
              Book Service
            </Link>

            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 text-ink"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className="md:hidden border-t border-line bg-cream max-h-[calc(100svh-4rem)] overflow-y-auto"
        >
          <nav className="px-4 py-5" aria-label="Mobile">
            <MobileSection title="Services" items={SERVICES_DROPDOWN} onClose={() => setOpen(false)} footerLabel="See all 12 services" footerHref="/services" />
            <MobileSection title="Areas served" items={AREAS_DROPDOWN} onClose={() => setOpen(false)} />
            <MobileSection title="More" items={RESOURCES_DROPDOWN} onClose={() => setOpen(false)} />
            <Link
              href="/about"
              onClick={() => setOpen(false)}
              className="block py-3 mt-2 text-sm uppercase tracking-[0.16em] font-bold text-ink hover:text-royal transition-colors border-t border-line"
            >
              The Shop
            </Link>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="block py-3 text-sm uppercase tracking-[0.16em] font-bold text-ink hover:text-royal transition-colors"
            >
              Contact
            </Link>

            <Link
              href="/book"
              onClick={() => setOpen(false)}
              className="mt-5 inline-flex items-center justify-center bg-gold text-ink hover:bg-gold-deep px-6 py-3.5 text-xs font-extrabold uppercase tracking-[0.14em] transition-colors w-full"
            >
              Book Service
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
          </nav>
        </div>
      )}
    </header>
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
