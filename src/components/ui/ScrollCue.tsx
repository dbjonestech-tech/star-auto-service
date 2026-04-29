"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

/** Small animated chevron rendered at the bottom of the hero. Hides after the user scrolls. */
export function ScrollCue() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY < 80);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 z-10 transition-opacity duration-500 ${
        visible ? "opacity-80" : "opacity-0"
      }`}
      aria-hidden="true"
    >
      <span className="flex flex-col items-center gap-2">
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-cream/80">
          Scroll
        </span>
        <ChevronDown
          size={20}
          strokeWidth={2.5}
          className="text-cream/80 motion-safe:animate-bounce"
        />
      </span>
    </div>
  );
}
