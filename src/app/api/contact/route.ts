import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";
import { SITE } from "@/lib/constants";

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

  const { name, phone, email, service, message } = result.data;
  const timestamp = new Date().toLocaleString("en-US", {
    timeZone: "America/Chicago",
  });

  if (!process.env.RESEND_API_KEY) {
    console.warn("RESEND_API_KEY not configured — email not sent");
    console.log("Contact form submission:", JSON.stringify({ name, phone, email, service, message, timestamp, ip }));
    return NextResponse.json({ success: true, message: "Message received" });
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: "Star Auto Website <onboarding@resend.dev>",
      to: SITE.email,
      replyTo: email || undefined,
      subject: `New Contact Form Submission — ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px;">
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Name</td><td style="padding:8px;border-bottom:1px solid #eee;">${escapeHtml(name)}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Phone</td><td style="padding:8px;border-bottom:1px solid #eee;">${escapeHtml(phone)}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Email</td><td style="padding:8px;border-bottom:1px solid #eee;">${escapeHtml(email || "Not provided")}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Service</td><td style="padding:8px;border-bottom:1px solid #eee;">${escapeHtml(service || "Not specified")}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Message</td><td style="padding:8px;border-bottom:1px solid #eee;">${escapeHtml(message || "No message")}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Submitted</td><td style="padding:8px;">${timestamp}</td></tr>
        </table>
      `,
    });
  } catch (err) {
    console.error("Resend email failed:", err);
    console.log("Contact form submission (email failed):", JSON.stringify({ name, phone, email, service, message, timestamp, ip }));
  }

  return NextResponse.json({ success: true, message: "Message received" });
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
