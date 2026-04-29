import Link from "next/link";
import {
  ArrowRight,
  Plus,
  ExternalLink,
  AlertTriangle,
} from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import {
  isTrackerConfigured,
  listRepairs,
  STATUS_LABEL,
} from "@/lib/repairs";
import { LogoutButton } from "../LogoutButton";

export default async function AdminRepairsListPage() {
  const tracker = isTrackerConfigured();
  const repairs = tracker ? await listRepairs() : [];

  return (
    <section className="bg-cream py-10 md:py-14 min-h-[80vh]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-start justify-between gap-4 mb-8">
          <div>
            <Eyebrow>Admin</Eyebrow>
            <h1 className="mt-2 font-sans font-black text-3xl md:text-4xl text-ink tracking-tight">
              Active repairs
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/admin/repairs/new"
              className="inline-flex items-center gap-2 bg-gold text-ink hover:bg-gold-soft px-4 py-2.5 text-xs font-extrabold uppercase tracking-[0.14em] transition-colors shadow-gold"
            >
              <Plus size={14} strokeWidth={2.5} aria-hidden="true" />
              New repair
            </Link>
            <LogoutButton />
          </div>
        </div>

        {!tracker ? (
          <div className="bg-gold-tint border border-gold/40 p-6 md:p-7">
            <div className="flex items-start gap-4">
              <AlertTriangle
                size={22}
                strokeWidth={2}
                className="text-gold-deep mt-0.5"
                aria-hidden="true"
              />
              <div>
                <h2 className="font-sans font-black text-lg text-ink">
                  Tracker storage not connected.
                </h2>
                <p className="mt-3 text-sm md:text-base text-ink leading-relaxed font-medium">
                  Provision Upstash Redis on the Vercel Marketplace and connect
                  it to this project. Vercel will inject{" "}
                  <code className="font-mono text-xs">UPSTASH_REDIS_REST_URL</code> and{" "}
                  <code className="font-mono text-xs">UPSTASH_REDIS_REST_TOKEN</code>.
                  Once those env vars are present, this page will list repairs
                  and the public /track/[id] pages will go live.
                </p>
                <p className="mt-3 text-sm text-ink font-medium">
                  No customer-facing page is broken in the meantime — /track
                  shows the request-update form and /track/[id] shows a
                  graceful fallback.
                </p>
              </div>
            </div>
          </div>
        ) : repairs.length === 0 ? (
          <div className="bg-surface border border-line p-10 md:p-14 shadow-card text-center">
            <p className="font-sans font-bold text-lg text-ink">
              No active repairs yet.
            </p>
            <p className="mt-3 text-sm text-graphite font-medium">
              Click <span className="font-bold">New repair</span> to create the
              first tracking record.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-3 md:gap-4">
            {repairs.map((r) => (
              <article
                key={r.id}
                className="relative bg-surface border border-line p-5 md:p-6 shadow-card hover:shadow-card-lg transition-shadow"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-center">
                  <div className="md:col-span-5">
                    <p className="text-[10px] uppercase tracking-[0.18em] font-bold text-graphite">
                      Tracking ID
                    </p>
                    <p className="mt-1 font-mono text-sm text-ink">{r.id}</p>
                    <p className="mt-3 font-sans font-black text-lg text-ink leading-tight">
                      {r.customerFirstName} · {r.vehicle}
                    </p>
                    {r.serviceSummary ? (
                      <p className="mt-1 text-sm text-graphite">
                        {r.serviceSummary}
                      </p>
                    ) : null}
                  </div>
                  <div className="md:col-span-3">
                    <p className="text-[10px] uppercase tracking-[0.18em] font-bold text-graphite">
                      Status
                    </p>
                    <p className="mt-1 inline-flex items-center px-3 py-1.5 bg-royal-tint text-royal border border-royal/30 text-xs font-extrabold uppercase tracking-[0.12em]">
                      {STATUS_LABEL[r.status]}
                    </p>
                    {r.etaText ? (
                      <p className="mt-2 text-sm text-graphite">
                        ETA: <span className="text-ink font-bold">{r.etaText}</span>
                      </p>
                    ) : null}
                  </div>
                  <div className="md:col-span-4 flex flex-wrap items-center gap-3 md:justify-end">
                    <Link
                      href={`/track/${r.id}`}
                      target="_blank"
                      rel="noopener"
                      className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.16em] font-extrabold text-graphite hover:text-royal transition-colors"
                    >
                      View public link
                      <ExternalLink size={12} strokeWidth={2.5} aria-hidden="true" />
                    </Link>
                    <Link
                      href={`/admin/repairs/${r.id}`}
                      className="inline-flex items-center gap-1.5 bg-ink text-cream hover:bg-royal px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.14em] transition-colors"
                    >
                      Update
                      <ArrowRight size={12} strokeWidth={2.5} aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        <p className="mt-10 text-xs text-graphite text-center">
          Signed in as shop admin ·{" "}
          <Link href="/" className="hover:text-royal transition-colors">
            Back to public site
          </Link>
        </p>
      </div>
    </section>
  );
}
