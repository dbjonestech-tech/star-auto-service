"use client";

/* CanopyErrorBeacon
 *
 * Captures uncaught client errors and unhandled promise rejections,
 * posting them to Canopy's /api/track/error endpoint. Mounted once
 * in the root layout. Keep listeners installed for the lifetime of
 * the page; pagehide handles flush. */
import { useEffect } from "react";

interface Props {
  endpoint: string;
}

interface Payload {
  message: string;
  stack?: string | null;
  source: "client";
  severity: "error";
  url: string;
}

function send(endpoint: string, payload: Payload) {
  const url = `${endpoint}/api/track/error`;
  const body = JSON.stringify(payload);
  try {
    if (navigator.sendBeacon) {
      const blob = new Blob([body], { type: "application/json" });
      navigator.sendBeacon(url, blob);
      return;
    }
  } catch {
    // fall through to fetch
  }
  fetch(url, {
    method: "POST",
    credentials: "include",
    keepalive: true,
    headers: { "Content-Type": "application/json" },
    body,
  }).catch(() => {});
}

export function CanopyErrorBeacon({ endpoint }: Props) {
  useEffect(() => {
    const onError = (event: ErrorEvent) => {
      send(endpoint, {
        message: event.message || "(no message)",
        stack: event.error?.stack ?? null,
        source: "client",
        severity: "error",
        url: window.location.href,
      });
    };
    const onRejection = (event: PromiseRejectionEvent) => {
      const reason = event.reason as unknown;
      const message =
        reason instanceof Error ? reason.message : typeof reason === "string" ? reason : "Unhandled rejection";
      const stack = reason instanceof Error ? reason.stack : null;
      send(endpoint, { message, stack: stack ?? null, source: "client", severity: "error", url: window.location.href });
    };
    window.addEventListener("error", onError);
    window.addEventListener("unhandledrejection", onRejection);
    return () => {
      window.removeEventListener("error", onError);
      window.removeEventListener("unhandledrejection", onRejection);
    };
  }, [endpoint]);
  return null;
}
