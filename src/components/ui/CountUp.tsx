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

/** Animates from 0 → to when the element scrolls into view. CLS-safe via min-width based on final length. */
export function CountUp({
  to,
  duration = 1.4,
  className = "",
  suffix = "",
  decimals = 0,
}: CountUpProps) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const targetLen = to.toFixed(decimals).length + suffix.length;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(to);
      return;
    }

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
