"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Star, Phone } from "lucide-react";
import { track } from "@vercel/analytics";
import { SITE, NAV_LINKS } from "@/lib/constants";
import { OpenNowChip } from "@/components/ui/OpenNowChip";

/** Sticky brand header. Yellow star + bold wordmark + nav + phone + gold Book CTA. */
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link
            href="/"
            className="flex items-center gap-2.5 group"
            aria-label={`${SITE.name} home`}
          >
            <Star
              className="text-gold transition-transform group-hover:scale-110 group-hover:rotate-12 duration-300"
              size={26}
              fill="currentColor"
              strokeWidth={1.5}
              aria-hidden="true"
            />
            <span className="font-sans text-base md:text-lg font-extrabold tracking-tight text-ink uppercase">
              The Star Auto Service
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-9" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs uppercase tracking-[0.16em] font-bold text-ink/80 hover:text-royal transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden lg:flex items-center gap-3">
              <OpenNowChip />
              <span className="w-px h-4 bg-line" aria-hidden="true" />
              <a
                href={`tel:${SITE.phoneRaw}`}
                onClick={() => track("call_click", { source: "header" })}
                className="inline-flex items-center gap-2 text-sm font-bold text-ink hover:text-royal transition-colors"
                aria-label={`Call ${SITE.phone}`}
              >
                <Phone size={15} strokeWidth={2.5} aria-hidden="true" />
                {SITE.phone}
              </a>
            </div>

            <Link
              href="/book"
              className="hidden md:inline-flex items-center justify-center bg-gold text-ink hover:bg-gold-deep px-5 py-2.5 text-xs font-extrabold uppercase tracking-[0.14em] transition-colors shadow-gold"
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
          className="md:hidden border-t border-line bg-cream"
        >
          <nav className="px-4 py-6 flex flex-col" aria-label="Mobile">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3 text-sm uppercase tracking-[0.16em] font-bold text-ink hover:text-royal transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/book"
              onClick={() => setOpen(false)}
              className="mt-5 inline-flex items-center justify-center bg-gold text-ink hover:bg-gold-deep px-6 py-3.5 text-xs font-extrabold uppercase tracking-[0.14em] transition-colors"
            >
              Book Service
            </Link>
            <a
              href={`tel:${SITE.phoneRaw}`}
              onClick={() => {
                track("call_click", { source: "mobile_menu" });
                setOpen(false);
              }}
              className="mt-3 inline-flex items-center justify-center gap-2 border-2 border-ink text-ink hover:bg-ink hover:text-cream px-6 py-3.5 text-xs font-extrabold uppercase tracking-[0.14em] transition-colors"
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
