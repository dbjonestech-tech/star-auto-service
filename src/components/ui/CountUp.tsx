"use client";

import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  to: number;
  duration?: number;
  className?: string;
  /** Optional suffix appended after the number (e.g. "+", "★", "K"). */
  suffix?: string;
  /** Optional decimal display (1 = "4.8"). */
  decimals?: number;
};

/** Animates from 0 → to when the element scrolls into view. CLS-safe via min-width based on final length.
 *  SSR renders the final value so users never see a flash of "0". If the element is already in the
 *  viewport at hydration (common on small viewports where the bar sits near the fold), we keep the
 *  final value. Only re-arm the count-up animation when the element starts out of view. */
export function CountUp({
  to,
  duration = 1.4,
  className = "",
  suffix = "",
  decimals = 0,
}: CountUpProps) {
  const [value, setValue] = useState(to);
  const ref = useRef<HTMLSpanElement>(null);
  const targetLen = to.toFixed(decimals).length + suffix.length;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const rect = el.getBoundingClientRect();
    const viewportH = window.innerHeight || document.documentElement.clientHeight;
    if (rect.bottom > 0 && rect.top < viewportH) return;

    setValue(0);

    let triggered = false;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && !triggered) {
            triggered = true;
            const start = performance.now();
            const tick = (now: number) => {
              const t = Math.min(1, (now - start) / (duration * 1000));
              const eased = 1 - Math.pow(1 - t, 3);
              setValue(eased * to);
              if (t < 1) requestAnimationFrame(tick);
              else setValue(to);
            };
            requestAnimationFrame(tick);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [to, duration]);

  const display = decimals > 0 ? value.toFixed(decimals) : Math.round(value).toString();

  return (
    <span
      ref={ref}
      className={`tabular-nums inline-block ${className}`}
      style={{ minWidth: `${targetLen}ch` }}
      suppressHydrationWarning
    >
      {display}
      {suffix}
    </span>
  );
}
