"use client";

import { useEffect, useState } from "react";
import { Phone, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { track } from "@vercel/analytics";
import { SITE } from "@/lib/constants";

const STORAGE_KEY = "star-auto-call-bar-dismissed";
const HIDDEN_ROUTES = ["/contact", "/book"];
const SHOW_AFTER_PX = 600;

/** Mobile-only sticky bottom call bar. Slides up after the hero scrolls out, dismissable, transform-only animation. */
export function ScrollCallBar() {
  const pathname = usePathname();
  const [shown, setShown] = useState(false);
  const [dismissed, setDismissed] = useState(true);

  useEffect(() => {
    try {
      setDismissed(localStorage.getItem(STORAGE_KEY) === "1");
    } catch {
      setDismissed(false);
    }
  }, []);

  useEffect(() => {
    if (HIDDEN_ROUTES.includes(pathname)) {
      setShown(false);
      return;
    }

    function onScroll() {
      setShown(window.scrollY > SHOW_AFTER_PX);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  if (HIDDEN_ROUTES.includes(pathname) || dismissed) return null;

  function handleDismiss() {
    setDismissed(true);
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {}
  }

  return (
    <div
      aria-hidden={!shown}
      className={`md:hidden fixed inset-x-0 bottom-0 z-30 bg-ink text-cream border-t-2 border-gold shadow-card-lg transition-transform duration-300 ease-out ${
        shown ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex items-stretch">
        <a
          href={`tel:${SITE.phoneRaw}`}
          onClick={() => track("call_click", { source: "scroll_bar" })}
          className="flex items-center gap-3 flex-1 px-4 py-3.5 text-sm font-extrabold uppercase tracking-[0.14em]"
        >
          <Phone size={18} strokeWidth={2.5} className="text-gold" aria-hidden="true" />
          Call {SITE.phone}
        </a>
        <button
          type="button"
          onClick={handleDismiss}
          aria-label="Dismiss call bar"
          className="px-4 text-cream/55 hover:text-cream focus:outline-none focus-visible:ring-2 focus-visible:ring-cream focus-visible:ring-inset"
        >
          <X size={18} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
