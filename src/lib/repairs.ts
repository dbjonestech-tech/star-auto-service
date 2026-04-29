import { Redis } from "@upstash/redis";
import { nanoid } from "nanoid";

/**
 * Repair status tracker library. Reads/writes against Upstash Redis when
 * UPSTASH_REDIS_REST_URL + UPSTASH_REDIS_REST_TOKEN are configured.
 *
 * If those env vars are missing, every helper returns null / safe defaults so
 * the site never crashes. The /track/[id] route shows a "tracker is being set
 * up" placeholder, and the admin route shows a setup-instructions screen.
 *
 * Provision in production via Vercel Marketplace:
 *   1. https://vercel.com/marketplace → "Upstash Redis"
 *   2. Connect to the star-auto-service project
 *   3. Vercel injects UPSTASH_REDIS_REST_URL + UPSTASH_REDIS_REST_TOKEN as env vars
 *   4. Also set ADMIN_PASSWORD in Project Settings → Environment Variables
 */

export const REPAIR_STATUSES = [
  "received",
  "diagnosing",
  "quote_sent",
  "in_progress",
  "awaiting_parts",
  "ready_for_pickup",
  "complete",
] as const;

export type RepairStatus = (typeof REPAIR_STATUSES)[number];

export const STATUS_LABEL: Record<RepairStatus, string> = {
  received: "Vehicle received",
  diagnosing: "In diagnosis",
  quote_sent: "Quote sent for approval",
  in_progress: "Repair in progress",
  awaiting_parts: "Awaiting parts",
  ready_for_pickup: "Ready for pickup",
  complete: "Complete",
};

export const STATUS_DESCRIPTION: Record<RepairStatus, string> = {
  received:
    "Your car is checked in, your concern is documented, and a tech is assigned.",
  diagnosing:
    "Real diagnostic work in progress: codes, freeze-frame data, road test if the symptom is intermittent.",
  quote_sent:
    "We have called you with the findings, the proposed repair, and a firm price. Awaiting your authorization.",
  in_progress:
    "Approved work is underway. ASE-Certified technicians using OEM-quality parts.",
  awaiting_parts:
    "We are waiting on a part to arrive. Most parts are in by the next business day via NAPA daily delivery.",
  ready_for_pickup:
    "Repair complete, post-work road tested. Come pick it up during business hours.",
  complete: "Repair completed and vehicle picked up. Thanks for trusting the shop.",
};

export type TimelineEntry = {
  /** ISO timestamp string. */
  at: string;
  status: RepairStatus;
  /** Optional free-text note from the tech or front desk. */
  note?: string;
};

export type RepairRecord = {
  /** Unguessable 10-char nanoid. */
  id: string;
  /** "2018 Toyota Camry, Silver" — short and human. */
  vehicle: string;
  /** Customer first name only — minimal PII. */
  customerFirstName: string;
  /** Last 4 of phone for soft verification on the public page. */
  customerPhoneLast4: string;
  /** Optional service summary: "Brakes, AC service" */
  serviceSummary?: string;
  /** Current status. */
  status: RepairStatus;
  /** Free-text ETA: "Tomorrow afternoon" or "Friday". Optional. */
  etaText?: string;
  /** Append-only timeline of status changes. */
  timeline: TimelineEntry[];
  /** ISO timestamps. */
  createdAt: string;
  updatedAt: string;
};

/**
 * Returns true if the Upstash Redis connection is configured. Pages and admin
 * routes use this to decide between "live tracker" and "setup mode" UI.
 */
export function isTrackerConfigured(): boolean {
  return Boolean(
    process.env.UPSTASH_REDIS_REST_URL &&
      process.env.UPSTASH_REDIS_REST_TOKEN,
  );
}

/** Lazy Redis client. Throws if env vars are missing. */
function client(): Redis {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) {
    throw new Error("Upstash Redis env vars not set.");
  }
  return new Redis({ url, token });
}

const REPAIR_KEY = (id: string) => `repair:${id}`;
const REPAIR_INDEX = "repair:index";

/** Generate a tracking ID. 10 characters, lowercase + digits — unguessable, easy to read aloud. */
export function generateTrackingId(): string {
  return nanoid(10).toLowerCase().replace(/[_-]/g, "x");
}

/** Read a single repair by ID. Returns null if not found or tracker not configured. */
export async function getRepair(id: string): Promise<RepairRecord | null> {
  if (!isTrackerConfigured()) return null;
  try {
    const data = await client().get<RepairRecord>(REPAIR_KEY(id));
    return data ?? null;
  } catch (err) {
    console.error("getRepair error:", err);
    return null;
  }
}

/** List all repairs, newest-first. Used by the admin index. */
export async function listRepairs(): Promise<RepairRecord[]> {
  if (!isTrackerConfigured()) return [];
  try {
    const ids = await client().smembers<string[]>(REPAIR_INDEX);
    if (!ids || ids.length === 0) return [];
    const records = await Promise.all(ids.map((id) => getRepair(id)));
    return records
      .filter((r): r is RepairRecord => r !== null)
      .sort(
        (a, b) =>
          new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime(),
      );
  } catch (err) {
    console.error("listRepairs error:", err);
    return [];
  }
}

export type CreateRepairInput = {
  vehicle: string;
  customerFirstName: string;
  customerPhoneLast4: string;
  serviceSummary?: string;
  status: RepairStatus;
  etaText?: string;
  initialNote?: string;
};

/** Create a new repair record. Returns the saved record (with generated ID). */
export async function createRepair(
  input: CreateRepairInput,
): Promise<RepairRecord> {
  if (!isTrackerConfigured()) {
    throw new Error(
      "Tracker is not configured. Set UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN.",
    );
  }
  const now = new Date().toISOString();
  const id = generateTrackingId();
  const record: RepairRecord = {
    id,
    vehicle: input.vehicle.trim(),
    customerFirstName: input.customerFirstName.trim(),
    customerPhoneLast4: input.customerPhoneLast4.trim().slice(-4),
    serviceSummary: input.serviceSummary?.trim() || undefined,
    status: input.status,
    etaText: input.etaText?.trim() || undefined,
    timeline: [
      { at: now, status: input.status, note: input.initialNote?.trim() || undefined },
    ],
    createdAt: now,
    updatedAt: now,
  };
  const c = client();
  await c.set(REPAIR_KEY(id), record);
  await c.sadd(REPAIR_INDEX, id);
  return record;
}

export type UpdateRepairInput = {
  status?: RepairStatus;
  etaText?: string;
  note?: string;
  serviceSummary?: string;
};

/** Append a status change or note to an existing repair. */
export async function updateRepair(
  id: string,
  input: UpdateRepairInput,
): Promise<RepairRecord | null> {
  if (!isTrackerConfigured()) {
    throw new Error("Tracker is not configured.");
  }
  const existing = await getRepair(id);
  if (!existing) return null;

  const now = new Date().toISOString();
  const newStatus = input.status ?? existing.status;
  const updated: RepairRecord = {
    ...existing,
    status: newStatus,
    etaText: input.etaText !== undefined ? input.etaText.trim() || undefined : existing.etaText,
    serviceSummary:
      input.serviceSummary !== undefined
        ? input.serviceSummary.trim() || undefined
        : existing.serviceSummary,
    timeline: [
      ...existing.timeline,
      {
        at: now,
        status: newStatus,
        note: input.note?.trim() || undefined,
      },
    ],
    updatedAt: now,
  };
  await client().set(REPAIR_KEY(id), updated);
  return updated;
}

/** Delete a repair record (hard delete). */
export async function deleteRepair(id: string): Promise<boolean> {
  if (!isTrackerConfigured()) return false;
  const c = client();
  const removed = await c.del(REPAIR_KEY(id));
  await c.srem(REPAIR_INDEX, id);
  return removed > 0;
}
