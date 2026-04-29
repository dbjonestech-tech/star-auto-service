import { createHash } from "crypto";

/**
 * Tiny stateless auth for the admin area.
 *
 * Set ADMIN_PASSWORD in Vercel project settings. Optionally set ADMIN_SECRET
 * to any random string to salt the cookie value (defaults to a fixed string
 * if missing — change ADMIN_PASSWORD anytime to invalidate all sessions).
 *
 * The login endpoint verifies the password, sets an HttpOnly cookie whose
 * value is the salted hash of the password. Middleware checks the cookie on
 * every /admin/* request by recomputing the same hash; if it matches, allow.
 */

export const AUTH_COOKIE = "sas_admin";

export function isAdminConfigured(): boolean {
  return Boolean(process.env.ADMIN_PASSWORD);
}

function tokenForPassword(password: string): string {
  const secret = process.env.ADMIN_SECRET || "the-star-auto-service-admin";
  return createHash("sha256")
    .update(`${password}::${secret}`)
    .digest("hex");
}

/** Returns the cookie value if the password matches, otherwise null. */
export function authenticateAdmin(submittedPassword: string): string | null {
  const real = process.env.ADMIN_PASSWORD;
  if (!real || !submittedPassword) return null;
  if (submittedPassword !== real) return null;
  return tokenForPassword(real);
}

/** Returns true if a presented cookie matches the configured admin password. */
export function verifyAdminCookie(cookieValue: string | undefined): boolean {
  if (!cookieValue) return false;
  const real = process.env.ADMIN_PASSWORD;
  if (!real) return false;
  return cookieValue === tokenForPassword(real);
}
