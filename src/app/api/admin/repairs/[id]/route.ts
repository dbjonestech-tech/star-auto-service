import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { z } from "zod";
import { AUTH_COOKIE, verifyAdminCookie } from "@/lib/admin-auth";
import {
  REPAIR_STATUSES,
  deleteRepair,
  getRepair,
  isTrackerConfigured,
  updateRepair,
} from "@/lib/repairs";

const updateSchema = z.object({
  status: z.enum(REPAIR_STATUSES).optional(),
  etaText: z.string().max(60).optional(),
  serviceSummary: z.string().max(120).optional(),
  note: z.string().max(500).optional(),
});

async function requireAdmin(): Promise<NextResponse | null> {
  const cookieStore = await cookies();
  const cookie = cookieStore.get(AUTH_COOKIE)?.value;
  if (!(await verifyAdminCookie(cookie))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  return null;
}

type RouteParams = { params: Promise<{ id: string }> };

export async function GET(_req: Request, { params }: RouteParams) {
  const unauth = await requireAdmin();
  if (unauth) return unauth;

  if (!isTrackerConfigured()) {
    return NextResponse.json({ error: "Tracker not configured" }, { status: 503 });
  }

  const { id } = await params;
  const repair = await getRepair(id);
  if (!repair) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  return NextResponse.json({ repair });
}

export async function PATCH(request: Request, { params }: RouteParams) {
  const unauth = await requireAdmin();
  if (unauth) return unauth;

  if (!isTrackerConfigured()) {
    return NextResponse.json({ error: "Tracker not configured" }, { status: 503 });
  }

  const { id } = await params;
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = updateSchema.safeParse(body);
  if (!parsed.success) {
    const msg = parsed.error.issues[0]?.message || "Validation failed";
    return NextResponse.json({ error: msg }, { status: 400 });
  }

  try {
    const updated = await updateRepair(id, parsed.data);
    if (!updated) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }
    return NextResponse.json({ repair: updated });
  } catch (err) {
    console.error("updateRepair error:", err);
    return NextResponse.json({ error: "Failed to update" }, { status: 500 });
  }
}

export async function DELETE(_req: Request, { params }: RouteParams) {
  const unauth = await requireAdmin();
  if (unauth) return unauth;

  if (!isTrackerConfigured()) {
    return NextResponse.json({ error: "Tracker not configured" }, { status: 503 });
  }

  const { id } = await params;
  const ok = await deleteRepair(id);
  if (!ok) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  return NextResponse.json({ success: true });
}
