# Repair Status Tracker — setup guide

The tracker is built and deployed but does not light up until two pieces of
infrastructure are connected. Until then:

- The public `/track` landing page works (request-update form goes to email).
- `/track/[id]` shows a graceful "tracker setup in progress" placeholder.
- `/admin/login` shows the password screen with setup hints.

## What you need

1. **Upstash Redis** for storage (free tier is fine).
2. **An admin password** for the `/admin` area.

Both are configured through the Vercel project — no code changes required.

---

## Step 1 — Provision Upstash Redis on Vercel Marketplace

1. Open your project on Vercel: `https://vercel.com/dbjonestech-9249s-projects/star-auto-service`
2. Click **Storage** in the left sidebar.
3. Click **Create Database** → **Marketplace** → **Upstash for Redis**.
4. Pick the **Free** plan, region **us-east-1** (closest to DFW visitors).
5. Click **Create**.
6. On the integration screen, **Connect to Project** → choose `star-auto-service` → **All Environments** (Production, Preview, Development).
7. Vercel automatically injects two env vars into the project:
   - `UPSTASH_REDIS_REST_URL`
   - `UPSTASH_REDIS_REST_TOKEN`

You do **not** need to copy/paste them anywhere — Vercel handles it.

## Step 2 — Set the admin password

1. Vercel project → **Settings** → **Environment Variables**.
2. Add:
   - Name: `ADMIN_PASSWORD`
   - Value: choose a strong password you will remember
   - Environments: **Production** + **Preview** (optional but recommended)
3. (Optional but smart) Also add:
   - Name: `ADMIN_SECRET`
   - Value: any random string (e.g., output of `openssl rand -hex 32`)
   - Environments: same as above
   - This salts the auth cookie. Changing `ADMIN_PASSWORD` later will invalidate all admin sessions automatically; setting `ADMIN_SECRET` is just an extra layer.

## Step 3 — Redeploy

After adding env vars, Vercel does **not** auto-redeploy. Trigger a fresh deploy:

- Vercel Dashboard → Deployments → click the latest deployment → **Redeploy** → **Use existing Build Cache** (faster). 
- Or push any small commit.

Once redeployed:

- Visit `/admin/login` → enter the password you set → you land on `/admin/repairs`.
- Click **New repair** to create your first tracking record. You'll get a unique URL like `/track/p4q9x2k7m1` to share with the customer.
- Click any active repair to update its status, add a note, or extend the ETA.

---

## How it works under the hood

- **Storage**: Upstash Redis. Each repair is stored as JSON at key `repair:{id}`. A set at `repair:index` tracks active IDs for the admin list.
- **Privacy**: Tracking IDs are 10-character nanoid (lowercase alphanumeric). Unguessable. No login required for customers — privacy is by URL secrecy, like a UPS tracking number. Each public page is `noindex` so search engines never crawl them.
- **Admin auth**: stateless. The login endpoint computes `SHA256(ADMIN_PASSWORD + ADMIN_SECRET)` and stores it as an HttpOnly cookie. Middleware on `/admin/*` re-computes the same hash on every request and grants access if it matches. Changing the password invalidates all sessions automatically.
- **Rate limiting**: Admin password attempts go through the standard Vercel platform rate limits. The customer-facing `/api/contact` form (used by `/track` for status-update requests) has built-in 3-per-hour-per-IP throttling.

## Stages your repair can be in

The system supports 7 statuses, in this order:

1. `received` — Vehicle received
2. `diagnosing` — In diagnosis
3. `quote_sent` — Quote sent for approval
4. `in_progress` — Repair in progress
5. `awaiting_parts` — Awaiting parts
6. `ready_for_pickup` — Ready for pickup
7. `complete` — Complete

Customer pages show all 7 as a progress bar with the current one highlighted.

## What customers see

When you share the tracking link, they see:

- The current status (big icon + label + description)
- Their first name + vehicle + service summary
- Estimated completion (your free-text ETA — "Tomorrow afternoon", "Friday")
- A 7-stage progress bar showing how far along their repair is
- Reverse-chronological timeline of every update with your free-text note
- A direct call button to the shop

No login, no account, no friction. They just open the link.

## When you're done with a repair

Mark it `complete` after pickup. You can leave it in the system for record-keeping, or delete it from the admin detail page. Either is fine — Upstash Free has plenty of headroom for hundreds of records.

## Roll-back plan

If anything goes sideways with the tracker (Upstash outage, env vars wiped, etc.), the site does **not** break:

- `/track` keeps working as a status-request landing page
- `/track/[id]` shows the graceful "setup in progress" message with a phone CTA
- `/admin/login` shows setup hints
- All other 50 indexable URLs are unaffected

So the tracker is purely additive. You can turn it on, off, or pause it at any time without risk.
