"use client";

/* CanopyBeacon — drop-in client beacon for any Next.js site.
 *
 * Mount once in the client site's root layout, wrapped in Suspense:
 *   <Suspense fallback={null}>
 *     <CanopyBeacon endpoint={process.env.NEXT_PUBLIC_CANOPY_URL!} />
 *   </Suspense>
 *
 * Captures:
 *   - page-view on mount + path change
 *   - Core Web Vitals via PerformanceObserver (no external SDK)
 *   - max scroll depth + dwell time, flushed on visibilitychange/pagehide
 *
 * Designed for cross-origin posting. Canopy's /api/track/* CORS
 * allow-list must include the host where this component runs. */
import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";

interface Props {
  endpoint: string;
  excludePaths?: string[];
}

const DEFAULT_EXCLUDES = ["/admin", "/api", "/signin"];

export function CanopyBeacon({ endpoint, excludePaths = [] }: Props) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const pageViewIdRef = useRef<number | null>(null);
  const startRef = useRef<number>(Date.now());
  const maxScrollRef = useRef<number>(0);
  const cwvRef = useRef<{
    lcpMs?: number;
    inpMs?: number;
    cls?: number;
    ttfbMs?: number;
    fcpMs?: number;
  }>({});

  const excludes = [...DEFAULT_EXCLUDES, ...excludePaths];
  const shouldSkip = excludes.some((p) => pathname.startsWith(p));

  useEffect(() => {
    if (shouldSkip || typeof window === "undefined") return;

    pageViewIdRef.current = null;
    startRef.current = Date.now();
    maxScrollRef.current = 0;
    cwvRef.current = {};

    const query = searchParams.toString();
    const payload = {
      path: pathname,
      query: query || null,
      referrer: document.referrer || null,
      title: document.title || null,
      utmSource: searchParams.get("utm_source"),
      utmMedium: searchParams.get("utm_medium"),
      utmCampaign: searchParams.get("utm_campaign"),
    };

    fetch(`${endpoint}/api/track/view`, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then((r) => (r.ok ? r.json() : null))
      .then((res) => {
        if (res && typeof res.id === "number") pageViewIdRef.current = res.id;
      })
      .catch(() => {});

    const onScroll = () => {
      const scrolled = window.scrollY + window.innerHeight;
      const total = document.documentElement.scrollHeight;
      const pct = total > 0 ? Math.round((scrolled / total) * 100) : 0;
      if (pct > maxScrollRef.current) maxScrollRef.current = Math.min(100, pct);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const observers: PerformanceObserver[] = [];
    try {
      const lcp = new PerformanceObserver((list) => {
        const last = list.getEntries().at(-1);
        if (last) cwvRef.current.lcpMs = Math.round(last.startTime);
      });
      lcp.observe({ type: "largest-contentful-paint", buffered: true });
      observers.push(lcp);
    } catch {}
    try {
      const cls = new PerformanceObserver((list) => {
        let total = cwvRef.current.cls ?? 0;
        for (const e of list.getEntries() as (PerformanceEntry & { value: number; hadRecentInput?: boolean })[]) {
          if (!e.hadRecentInput) total += e.value;
        }
        cwvRef.current.cls = total;
      });
      cls.observe({ type: "layout-shift", buffered: true });
      observers.push(cls);
    } catch {}
    try {
      const inp = new PerformanceObserver((list) => {
        for (const e of list.getEntries() as (PerformanceEntry & { duration: number })[]) {
          const d = Math.round(e.duration);
          if (!cwvRef.current.inpMs || d > cwvRef.current.inpMs) cwvRef.current.inpMs = d;
        }
      });
      inp.observe({ type: "event", buffered: true, durationThreshold: 16 } as PerformanceObserverInit);
      observers.push(inp);
    } catch {}

    const nav = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming | undefined;
    if (nav) {
      cwvRef.current.ttfbMs = Math.round(nav.responseStart);
    }
    const paint = performance.getEntriesByType("paint").find((p) => p.name === "first-contentful-paint");
    if (paint) cwvRef.current.fcpMs = Math.round(paint.startTime);

    const flush = () => {
      const id = pageViewIdRef.current;
      if (id == null) return;
      const dwellMs = Date.now() - startRef.current;
      const body = JSON.stringify({
        pageViewId: id,
        dwellMs,
        scrollDepthPct: maxScrollRef.current,
        ...cwvRef.current,
      });
      const url = `${endpoint}/api/track/engage`;
      const blob = new Blob([body], { type: "application/json" });
      if (navigator.sendBeacon && navigator.sendBeacon(url, blob)) return;
      fetch(url, { method: "POST", body, headers: { "Content-Type": "application/json" }, keepalive: true }).catch(() => {});
    };

    const onVisibility = () => {
      if (document.visibilityState === "hidden") flush();
    };
    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("pagehide", flush);

    return () => {
      flush();
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("pagehide", flush);
      observers.forEach((o) => o.disconnect());
    };
  }, [pathname, searchParams, endpoint, shouldSkip]);

  return null;
}
