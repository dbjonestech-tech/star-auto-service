import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  phone: z.string().min(7, "Valid phone number required").max(20),
  email: z.string().email("Invalid email").max(100).or(z.literal("")),
  service: z.string().max(50).optional(),
  message: z.string().max(2000).optional(),
  honeypot: z.string().max(0, "Bot detected"),
});

const rateLimit = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + 3600000 });
    return false;
  }

  if (entry.count >= 3) {
    return true;
  }

  entry.count++;
  return false;
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }

  const result = contactSchema.safeParse(body);
  if (!result.success) {
    const firstError = result.error.issues[0]?.message || "Validation failed";
    return NextResponse.json({ error: firstError }, { status: 400 });
  }

  // TODO: Add email sending integration (SendGrid, Resend, etc.)
  return NextResponse.json({ success: true, message: "Message received" });
}
