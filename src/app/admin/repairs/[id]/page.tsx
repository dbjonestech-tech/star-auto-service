import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import {
  getRepair,
  isTrackerConfigured,
  REPAIR_STATUSES,
  STATUS_LABEL,
} from "@/lib/repairs";
import { UpdateRepairForm } from "./UpdateRepairForm";

type Params = Promise<{ id: string }>;

export default async function AdminRepairDetailPage({
  params,
}: {
  params: Params;
}) {
  const { id } = await params;
  if (!isTrackerConfigured()) {
    return (
      <section className="bg-cream py-10 md:py-14 min-h-[80vh]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-sans font-bold text-ink">
            Tracker storage not connected.
          </p>
        </div>
      </section>
    );
  }

  const repair = await getRepair(id);
  if (!repair) notFound();

  return (
    <section className="bg-cream py-10 md:py-14 min-h-[80vh]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/admin/repairs"
          className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] font-bold text-graphite hover:text-royal transition-colors"
        >
          <ArrowLeft size={14} strokeWidth={2.5} aria-hidden="true" />
          Back to all repairs
        </Link>

        <div className="mt-6">
          <Eyebrow>Update repair</Eyebrow>
          <h1 className="mt-2 font-sans font-black text-3xl md:text-4xl text-ink tracking-tight">
            {repair.customerFirstName} · {repair.vehicle}
          </h1>
          <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-graphite">
            <span>
              ID: <span className="font-mono text-ink">{repair.id}</span>
            </span>
            <span aria-hidden="true">·</span>
            <Link
              href={`/track/${repair.id}`}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-1.5 hover:text-royal transition-colors"
            >
              View public link
              <ExternalLink size={12} strokeWidth={2.5} aria-hidden="true" />
            </Link>
          </div>
        </div>

        <UpdateRepairForm
          repair={repair}
          statuses={REPAIR_STATUSES.map((s) => ({
            value: s,
            label: STATUS_LABEL[s],
          }))}
        />

        <div className="mt-10">
          <h2 className="font-sans font-black text-xl text-ink">
            Timeline so far
          </h2>
          <ol className="mt-4 space-y-3">
            {[...repair.timeline].reverse().map((entry, i) => (
              <li
                key={`${entry.at}-${i}`}
                className="bg-surface border border-line p-4 shadow-card"
              >
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <p className="font-sans font-bold text-ink">
                    {STATUS_LABEL[entry.status]}
                  </p>
                  <p className="text-[11px] uppercase tracking-[0.16em] font-bold text-graphite">
                    {new Date(entry.at).toLocaleString("en-US", {
                      timeZone: "America/Chicago",
                    })}
                  </p>
                </div>
                {entry.note ? (
                  <p className="mt-2 text-sm text-graphite leading-relaxed">
                    {entry.note}
                  </p>
                ) : null}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
