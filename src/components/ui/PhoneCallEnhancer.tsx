"use client";

import { useEffect, useRef, useState } from "react";
import { Phone, Copy, Check, X } from "lucide-react";
import { track } from "@vercel/analytics";
import { SITE } from "@/lib/constants";

/** Sitewide click interceptor for `a[href^="tel:"]` links on desktop.
 *
 * - Mobile / coarse-pointer devices: tel: deep-link runs as normal (system dialer).
 * - Desktop: pops a polished modal with Copy + Call-now actions, since most
 *   desktop browsers have no tel: handler and clicks otherwise feel broken.
 */
export function PhoneCallEnhancer() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const sourceRef = useRef<string>("phone");
  const closeRef = useRef<HTMLButtonElement>(null);

  // Global click capture on tel: anchors (desktop only)
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const target = e.target as Element | null;
      if (!target) return;
      const link = target.closest('a[href^="tel:"]') as HTMLAnchorElement | null;
      if (!link) return;

      // Inside-the-modal "Call now" should pass through directly
      if (link.dataset.directDial === "true") return;

      // Allow normal behavior on touch / mobile devices
      const isCoarse =
        typeof window !== "undefined" &&
        window.matchMedia("(pointer: coarse)").matches;
      if (isCoarse) return;

      // Desktop: intercept and show modal
      e.preventDefault();
      sourceRef.current = link.dataset.analytics || "phone";
      track("phone_modal_open", { source: sourceRef.current });
      setOpen(true);
      setCopied(false);
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  // Esc + focus management
  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    closeRef.current?.focus();
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  // Body scroll lock while open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  async function copyNumber() {
    try {
      await navigator.clipboard.writeText(SITE.phone);
      setCopied(true);
      track("phone_number_copied", { source: sourceRef.current });
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // fallback: select the on-screen number for manual copy
      const sel = window.getSelection();
      const range = document.createRange();
      const numEl = document.getElementById("phone-modal-number");
      if (sel && numEl) {
        range.selectNodeContents(numEl);
        sel.removeAllRanges();
        sel.addRange(range);
      }
    }
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/70 backdrop-blur-sm p-4 animate-[phoneFade_180ms_ease-out]"
      onClick={() => setOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-labelledby="phone-modal-title"
    >
      <div
        className="relative bg-cream border border-line shadow-card-lg max-w-md w-full p-8 md:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute top-0 left-8 right-8 h-0.5 bg-gold" aria-hidden="true" />
        <button
          ref={closeRef}
          type="button"
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 p-1.5 text-graphite hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-royal"
          aria-label="Close"
        >
          <X size={18} aria-hidden="true" />
        </button>

        <div className="flex flex-col items-center text-center">
          <div className="w-14 h-14 bg-gold-tint flex items-center justify-center mb-6">
            <Phone className="text-royal" size={26} strokeWidth={2} aria-hidden="true" />
          </div>
          <p className="text-[11px] uppercase tracking-[0.18em] font-bold text-graphite">
            Call the shop
          </p>
          <h2
            id="phone-modal-title"
            className="mt-3 font-sans font-black text-3xl md:text-4xl text-ink tracking-tight tabular-nums leading-none"
          >
            <span id="phone-modal-number">{SITE.phone}</span>
          </h2>
          <p className="mt-4 text-sm text-graphite font-medium leading-relaxed">
            <span className="block">
              Mon&ndash;Fri <span className="tabular-nums">{SITE.hours.weekday}</span>
            </span>
            <span className="block">
              Saturday <span className="tabular-nums">{SITE.hours.saturday}</span>
            </span>
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 w-full">
            <a
              href={`tel:${SITE.phoneRaw}`}
              data-direct-dial="true"
              onClick={() => {
                track("call_click", { source: `${sourceRef.current}_modal` });
                // Belt-and-suspenders: also fire the dial via window.location
                // for environments where the click bubbles oddly.
                setTimeout(() => {
                  try {
                    window.location.href = `tel:${SITE.phoneRaw}`;
                  } catch {}
                  setOpen(false);
                }, 50);
              }}
              className="flex-1 inline-flex items-center justify-center gap-2 bg-gold text-ink hover:bg-gold-soft px-6 py-3.5 text-xs font-extrabold uppercase tracking-[0.16em] transition-colors shadow-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-royal focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
            >
              <Phone size={14} strokeWidth={2.5} aria-hidden="true" />
              Call now
            </a>
            <button
              type="button"
              onClick={copyNumber}
              className={`flex-1 inline-flex items-center justify-center gap-2 border-2 px-6 py-3.5 text-xs font-extrabold uppercase tracking-[0.16em] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-royal focus-visible:ring-offset-2 focus-visible:ring-offset-cream ${
                copied
                  ? "bg-emerald/15 border-emerald text-emerald"
                  : "border-ink text-ink hover:bg-ink hover:text-cream"
              }`}
            >
              {copied ? (
                <>
                  <Check size={14} strokeWidth={2.5} aria-hidden="true" />
                  Copied
                </>
              ) : (
                <>
                  <Copy size={14} strokeWidth={2.5} aria-hidden="true" />
                  Copy number
                </>
              )}
            </button>
          </div>

          <p className="mt-5 text-[11px] uppercase tracking-[0.18em] text-graphite/70 font-bold">
            Or save the number for later
          </p>
        </div>
      </div>
    </div>
  );
}
