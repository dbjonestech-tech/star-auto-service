"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export type NavDropdownItem = {
  label: string;
  href: string;
  sub?: string;
};

type Props = {
  label: string;
  items: NavDropdownItem[];
  footer?: { label: string; href: string };
};

/** Accessible nav dropdown with hover + click + Esc + outside-click close. Inline-rendered, GPU-only animation. */
export function NavDropdown({ label, items, footer }: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClickOutside);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, [open]);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="true"
        className="inline-flex items-center gap-1 text-xs uppercase tracking-[0.16em] font-bold text-ink/80 hover:text-royal transition-colors whitespace-nowrap focus:outline-none focus-visible:text-royal"
      >
        {label}
        <ChevronDown
          size={12}
          strokeWidth={2.5}
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>

      {/* invisible bridge so cursor can travel from button to menu without losing hover */}
      <div
        className={`absolute left-0 top-full h-2 w-full ${open ? "" : "pointer-events-none"}`}
        aria-hidden="true"
      />

      <div
        className={`absolute top-full left-0 mt-2 min-w-[260px] bg-cream border border-line shadow-card-lg z-50 origin-top-left transition-all duration-200 ${
          open ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gold" aria-hidden="true" />
        <ul className="py-3" role="menu">
          {items.map((item) => (
            <li key={item.href} role="none">
              <Link
                href={item.href}
                role="menuitem"
                tabIndex={open ? 0 : -1}
                onClick={() => setOpen(false)}
                className="group block px-5 py-2.5 text-sm font-semibold text-ink hover:text-royal hover:bg-paper transition-colors"
              >
                {item.label}
                {item.sub && (
                  <span className="block text-[10px] uppercase tracking-[0.16em] text-graphite font-bold mt-0.5">
                    {item.sub}
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>
        {footer && (
          <div className="border-t border-line">
            <Link
              href={footer.href}
              tabIndex={open ? 0 : -1}
              onClick={() => setOpen(false)}
              className="block px-5 py-3 text-[11px] uppercase tracking-[0.16em] font-extrabold text-royal hover:text-royal-deep hover:bg-paper transition-colors"
            >
              {footer.label}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
