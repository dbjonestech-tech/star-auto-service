"use client";

import { useEffect, useState } from "react";

type Status = {
  open: boolean;
  closesAt?: string;
  opensAt?: string;
};

/** Compute current open/closed state in the shop's local timezone (America/Chicago). */
function getStatus(now: Date): Status {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Chicago",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(now);

  const day = parts.find((p) => p.type === "weekday")?.value ?? "";
  const hour = parseInt(parts.find((p) => p.type === "hour")?.value ?? "0", 10);
  const min = parseInt(parts.find((p) => p.type === "minute")?.value ?? "0", 10);
  const minutesNow = hour * 60 + min;

  if (day === "Sun") return { open: false, opensAt: "Monday 8:00 AM" };

  const opens = 8 * 60;
  const closes = day === "Sat" ? 16 * 60 : 18 * 60 + 30;

  if (minutesNow < opens) return { open: false, opensAt: "8:00 AM" };
  if (minutesNow >= closes) {
    return { open: false, opensAt: day === "Sat" ? "Monday 8:00 AM" : "tomorrow 8:00 AM" };
  }
  return { open: true, closesAt: day === "Sat" ? "4:00 PM" : "6:30 PM" };
}

/** Live "Open now / Closed" indicator for the header. Computes against shop-local time. */
export function OpenNowChip() {
  const [status, setStatus] = useState<Status | null>(null);

  useEffect(() => {
    setStatus(getStatus(new Date()));
    const id = setInterval(() => setStatus(getStatus(new Date())), 60_000);
    return () => clearInterval(id);
  }, []);

  if (!status) return null;

  return (
    <span
      className={`inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.16em] font-bold ${
        status.open ? "text-emerald" : "text-stone"
      }`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full ${status.open ? "bg-emerald" : "bg-stone"}`}
        aria-hidden="true"
      />
      {status.open ? `Open · until ${status.closesAt}` : `Closed · opens ${status.opensAt}`}
    </span>
  );
}
