"use client";

import { Phone } from "lucide-react";
import { usePathname } from "next/navigation";
import { track } from "@vercel/analytics";
import { SITE } from "@/lib/constants";

const HIDDEN_ROUTES = ["/contact", "/book"];

/** Persistent mobile-only floating action button. Gold disc, bottom-right, hides on routes that already lead with a call CTA. */
export function CallFAB() {
  const pathname = usePathname();
  if (HIDDEN_ROUTES.includes(pathname)) return null;

  return (
    <a
      href={`tel:${SITE.phoneRaw}`}
      onClick={() => track("call_click", { source: "fab" })}
      aria-label={`Call ${SITE.name} at ${SITE.phone}`}
      className="md:hidden fixed bottom-5 right-5 z-40 w-14 h-14 bg-gold text-ink shadow-gold flex items-center justify-center hover:bg-gold-soft active:scale-95 transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-royal focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
    >
      <Phone size={22} strokeWidth={2.5} aria-hidden="true" />
    </a>
  );
}
