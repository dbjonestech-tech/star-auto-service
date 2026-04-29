import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

const contactSchema = z.object({
  formType: z.enum(["contact", "booking"]).optional().default("contact"),
  name: z.string().min(1, "Name is required").max(100),
  phone: z.string().min(7, "Valid phone number required").max(20),
  email: z.string().email("Invalid email").max(100).or(z.literal("")),
  service: z.string().max(50).optional(),
  message: z.string().max(2000).optional(),
  // Booking-only optional fields:
  vehicleYear: z.string().max(4).optional(),
  vehicleMake: z.string().max(40).optional(),
  vehicleModel: z.string().max(40).optional(),
  preferredWindow: z.string().max(60).optional(),
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
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const result = contactSchema.safeParse(body);
  if (!result.success) {
    const firstError = result.error.issues[0]?.message || "Validation failed";
    return NextResponse.json({ error: firstError }, { status: 400 });
  }

  const {
    formType,
    name,
    phone,
    email,
    service,
    message,
    vehicleYear,
    vehicleMake,
    vehicleModel,
    preferredWindow,
  } = result.data;

  const timestamp = new Date().toLocaleString("en-US", {
    timeZone: "America/Chicago",
  });

  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY not configured. Email not sent.");
    return NextResponse.json(
      { error: "Email service is not configured. Please call us directly." },
      { status: 500 },
    );
  }

  const isBooking = formType === "booking";
  const subject = isBooking
    ? `New BOOKING REQUEST from ${name}`
    : `New Contact Form Submission from ${name}`;

  const vehicleLine = [vehicleYear, vehicleMake, vehicleModel]
    .filter(Boolean)
    .join(" ");

  const rows: Array<[string, string]> = [
    ["Name", name],
    ["Phone", phone],
    ["Email", email || "Not provided"],
  ];
  if (isBooking) {
    rows.push(["Vehicle", vehicleLine || "Not provided"]);
    rows.push(["Preferred window", preferredWindow || "Not provided"]);
  }
  rows.push(["Service", service || "Not specified"]);
  rows.push(["Message", message || "No message"]);
  rows.push(["Submitted", timestamp]);

  const html = `
    <h2>${escapeHtml(subject)}</h2>
    <table style="border-collapse:collapse;width:100%;max-width:600px;">
      ${rows
        .map(
          ([k, v]) =>
            `<tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">${escapeHtml(k)}</td><td style="padding:8px;border-bottom:1px solid #eee;">${escapeHtml(v)}</td></tr>`,
        )
        .join("")}
    </table>
  `;

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error: sendError } = await resend.emails.send({
      from: "Star Auto Service <noreply@thestarautoservice.com>",
      to: "nibarra525@gmail.com",
      replyTo: email || undefined,
      subject,
      html,
    });

    if (sendError) {
      console.error("Resend returned error:", sendError);
      return NextResponse.json(
        { error: "Failed to send message. Please try again or call us directly." },
        { status: 500 },
      );
    }
  } catch (err) {
    console.error("Resend email failed:", err);
    return NextResponse.json(
      { error: "Failed to send message. Please try again or call us directly." },
      { status: 500 },
    );
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
