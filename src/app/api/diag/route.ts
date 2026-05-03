import { NextResponse } from "next/server";

/* Temporary diagnostic endpoint. Captures client-side viewport / menu /
 * zoom state so we can debug the mobile menu without screenshots.
 * Remove once the bug is resolved. */
export async function POST(req: Request) {
  let body: unknown = null;
  try {
    body = await req.json();
  } catch {
    body = { _parseError: true };
  }
  const ua = req.headers.get("user-agent") ?? "";
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";
  // Single line per event so `vercel logs` is grep-able.
  console.log(
    `[diag] ${JSON.stringify({ ts: Date.now(), ip, ua, body })}`,
  );
  return NextResponse.json({ ok: true });
}

export const runtime = "nodejs";
