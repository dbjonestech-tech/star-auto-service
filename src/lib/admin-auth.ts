/**
 * Tiny stateless auth for the admin area. Edge-runtime safe.
 *
 * Set ADMIN_PASSWORD in Vercel project settings. Optionally set ADMIN_SECRET
 * to any random string to salt the cookie value (defaults to a fixed string
 * if missing — change ADMIN_PASSWORD anytime to invalidate all sessions).
 *
 * The login endpoint verifies the password, sets an HttpOnly cookie whose
 * value is the salted SHA-256 hash of the password. Middleware checks the
 * cookie on every /admin/* request by recomputing the same hash; if it
 * matches, allow.
 *
 * Hashing uses WebCrypto's `subtle.digest` so this module is safe to import
 * from Edge runtime contexts (middleware) AND Node runtime contexts (API
 * routes / server components). All exported verifiers are async.
 */

export const AUTH_COOKIE = "sas_admin";

export function isAdminConfigured(): boolean {
  return Boolean(process.env.ADMIN_PASSWORD);
}

const HEX_LOOKUP = "0123456789abcdef";

function bufferToHex(buffer: ArrayBuffer): string {
  const view = new Uint8Array(buffer);
  let out = "";
  for (let i = 0; i < view.length; i++) {
    const b = view[i];
    out += HEX_LOOKUP[b >> 4] + HEX_LOOKUP[b & 0x0f];
  }
  return out;
}

async function tokenForPassword(password: string): Promise<string> {
  const secret = process.env.ADMIN_SECRET || "the-star-auto-service-admin";
  const data = new TextEncoder().encode(`${password}::${secret}`);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return bufferToHex(digest);
}

/** Constant-time string compare to avoid timing leaks on cookie verification. */
function safeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let mismatch = 0;
  for (let i = 0; i < a.length; i++) {
    mismatch |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return mismatch === 0;
}

/** Returns the cookie value if the password matches, otherwise null. */
export async function authenticateAdmin(
  submittedPassword: string,
): Promise<string | null> {
  const real = process.env.ADMIN_PASSWORD;
  if (!real || !submittedPassword) return null;
  if (!safeEqual(submittedPassword, real)) return null;
  return tokenForPassword(real);
}

/** Returns true if a presented cookie matches the configured admin password. */
export async function verifyAdminCookie(
  cookieValue: string | undefined,
): Promise<boolean> {
  if (!cookieValue) return false;
  const real = process.env.ADMIN_PASSWORD;
  if (!real) return false;
  const expected = await tokenForPassword(real);
  return safeEqual(cookieValue, expected);
}
