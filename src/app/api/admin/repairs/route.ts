import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { z } from "zod";
import { AUTH_COOKIE, verifyAdminCookie } from "@/lib/admin-auth";
import {
  REPAIR_STATUSES,
  createRepair,
  isTrackerConfigured,
  listRepairs,
} from "@/lib/repairs";

const createSchema = z.object({
  customerFirstName: z.string().min(1).max(40),
  customerPhoneLast4: z.string().regex(/^\d{4}$/, "Last 4 digits required"),
  vehicle: z.string().min(1).max(80),
  serviceSummary: z.string().max(120).optional(),
  status: z.enum(REPAIR_STATUSES),
  etaText: z.string().max(60).optional(),
  initialNote: z.string().max(500).optional(),
});

async function requireAdmin(): Promise<NextResponse | null> {
  const cookieStore = await cookies();
  const cookie = cookieStore.get(AUTH_COOKIE)?.value;
  if (!(await verifyAdminCookie(cookie))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  return null;
}

export async function GET() {
  const unauth = await requireAdmin();
  if (unauth) return unauth;

  if (!isTrackerConfigured()) {
    return NextResponse.json({ error: "Tracker not configured" }, { status: 503 });
  }

  const repairs = await listRepairs();
  return NextResponse.json({ repairs });
}

export async function POST(request: Request) {
  const unauth = await requireAdmin();
  if (unauth) return unauth;

  if (!isTrackerConfigured()) {
    return NextResponse.json({ error: "Tracker not configured" }, { status: 503 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = createSchema.safeParse(body);
  if (!parsed.success) {
    const msg = parsed.error.issues[0]?.message || "Validation failed";
    return NextResponse.json({ error: msg }, { status: 400 });
  }

  try {
    const repair = await createRepair(parsed.data);
    return NextResponse.json({ repair }, { status: 201 });
  } catch (err) {
    console.error("createRepair error:", err);
    return NextResponse.json(
      { error: "Failed to create repair record" },
      { status: 500 },
    );
  }
}
