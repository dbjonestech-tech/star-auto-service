"use client";

import { useEffect } from "react";

/* Temporary diagnostic beacon for the mobile menu bug. POSTs viewport /
 * scroll / menu-state / computed-style data to /api/diag on:
 *   - mount (initial state)
 *   - any tap on the hamburger button
 *   - 250ms after hamburger tap (post-state-update snapshot)
 *   - any tap on the close (X) button
 * Remove this component once the bug is resolved. */
export function DiagBeacon() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    function snapshot(label: string) {
      const el = document.getElementById("mobile-menu");
      let menuInfo: Record<string, unknown> | null = null;
      if (el) {
        const cs = window.getComputedStyle(el);
        const r = el.getBoundingClientRect();
        menuInfo = {
          rect: {
            x: Math.round(r.x),
            y: Math.round(r.y),
            w: Math.round(r.width),
            h: Math.round(r.height),
          },
          display: cs.display,
          position: cs.position,
          top: cs.top,
          left: cs.left,
          right: cs.right,
          bottom: cs.bottom,
          width: cs.width,
          height: cs.height,
          zIndex: cs.zIndex,
          backgroundColor: cs.backgroundColor,
          visibility: cs.visibility,
          opacity: cs.opacity,
          transform: cs.transform,
        };
      }

      const vv = window.visualViewport;
      const meta = document
        .querySelector('meta[name="viewport"]')
        ?.getAttribute("content");

      const payload = {
        label,
        url: location.pathname + location.search,
        win: { w: window.innerWidth, h: window.innerHeight, dpr: window.devicePixelRatio },
        doc: {
          html: {
            sw: document.documentElement.scrollWidth,
            sh: document.documentElement.scrollHeight,
            cw: document.documentElement.clientWidth,
            ch: document.documentElement.clientHeight,
          },
          body: {
            sw: document.body.scrollWidth,
            sh: document.body.scrollHeight,
          },
          scroll: { x: window.scrollX, y: window.scrollY },
        },
        vv: vv
          ? {
              w: Math.round(vv.width),
              h: Math.round(vv.height),
              ox: Math.round(vv.offsetLeft),
              oy: Math.round(vv.offsetTop),
              scale: Number(vv.scale.toFixed(3)),
            }
          : null,
        meta,
        menu: menuInfo,
        bodyOverflow: document.body.style.overflow,
        // Detect any ancestor of #mobile-menu with a containing-block trap.
        trap: el ? findTrap(el) : null,
      };

      const blob = new Blob([JSON.stringify(payload)], { type: "application/json" });
      // sendBeacon is fire-and-forget, survives navigation; falls back to fetch.
      const sent = navigator.sendBeacon?.("/api/diag", blob);
      if (!sent) {
        fetch("/api/diag", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(payload),
          keepalive: true,
        }).catch(() => {});
      }
    }

    function findTrap(el: Element): unknown {
      let cur: Element | null = el.parentElement;
      while (cur && cur !== document.body) {
        const cs = window.getComputedStyle(cur);
        if (
          cs.transform !== "none" ||
          cs.filter !== "none" ||
          cs.backdropFilter !== "none" ||
          cs.perspective !== "none" ||
          cs.willChange.includes("transform")
        ) {
          return {
            tag: cur.tagName,
            cls: (cur.className || "").toString().slice(0, 80),
            transform: cs.transform,
            filter: cs.filter,
            backdropFilter: cs.backdropFilter,
            perspective: cs.perspective,
            willChange: cs.willChange,
          };
        }
        cur = cur.parentElement;
      }
      return null;
    }

    snapshot("mount");

    // Delegate clicks so we capture the hamburger / close button no matter where
    // they live in the React tree.
    function onClick(ev: Event) {
      const t = ev.target as Element | null;
      const btn = t?.closest?.('[aria-controls="mobile-menu"]');
      if (btn) {
        snapshot("hamburger-click");
        // After React state flush + paint, snapshot again.
        setTimeout(() => snapshot("hamburger-click+250"), 250);
        setTimeout(() => snapshot("hamburger-click+800"), 800);
      }
    }
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
