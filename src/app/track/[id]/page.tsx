import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Phone,
  ArrowLeft,
  Clock,
  Wrench,
  Package,
  CircleCheck,
  CircleDot,
  CheckCheck,
} from "lucide-react";
import { SITE } from "@/lib/constants";
import { Eyebrow } from "@/components/ui/Eyebrow";
import {
  REPAIR_STATUSES,
  STATUS_LABEL,
  STATUS_DESCRIPTION,
  type RepairStatus,
  getRepair,
  isTrackerConfigured,
} from "@/lib/repairs";

type Params = Promise<{ id: string }>;

/**
 * Public per-repair status page. Read-only, noindex, accessed via
 * unguessable nanoid in the URL. No auth — privacy is by URL secrecy
 * (the link is unique per repair).
 */
export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { id } = await params;
  return {
    title: { absolute: `Repair status ${id} | The Star Auto Service` },
    description: "Live status of your repair at The Star Auto Service.",
    alternates: { canonical: `${SITE.url}/track/${id}` },
    robots: { index: false, follow: false },
  };
}

const STATUS_ICON: Record<
  RepairStatus,
  React.ComponentType<{
    size?: number;
    strokeWidth?: number;
    className?: string;
    "aria-hidden"?: boolean | "true" | "false";
  }>
> = {
  received: CircleDot,
  diagnosing: Clock,
  quote_sent: Phone,
  in_progress: Wrench,
  awaiting_parts: Package,
  ready_for_pickup: CircleCheck,
  complete: CheckCheck,
};

function formatTimestamp(iso: string): string {
  return new Date(iso).toLocaleString("en-US", {
    timeZone: "America/Chicago",
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

export default async function TrackByIdPage({ params }: { params: Params }) {
  const { id } = await params;

  // If tracker is not provisioned yet, show a graceful placeholder instead of crashing.
  if (!isTrackerConfigured()) {
    return (
      <section className="bg-cream py-20 md:py-28 lg:py-32 min-h-[60vh] flex items-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Eyebrow>Tracker setup in progress</Eyebrow>
          <h1 className="mt-5 font-sans font-black text-display-2 text-ink tracking-[-0.022em] leading-[1]">
            We are getting the live tracker ready.
          </h1>
          <p className="mt-7 text-base md:text-lg text-graphite leading-relaxed font-medium">
            For an update on your repair right now, give the shop a call. We
            will tell you exactly where your car is.
          </p>
          <div className="mt-9">
            <a
              href={`tel:${SITE.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2.5 bg-ink text-cream hover:bg-royal px-7 sm:px-8 py-4 text-sm font-extrabold uppercase tracking-[0.14em] transition-colors"
            >
              <Phone size={17} strokeWidth={2.5} aria-hidden="true" />
              Call {SITE.phone}
            </a>
          </div>
        </div>
      </section>
    );
  }

  const repair = await getRepair(id);
  if (!repair) notFound();

  const statusIndex = REPAIR_STATUSES.indexOf(repair.status);
  const CurrentIcon = STATUS_ICON[repair.status];

  return (
    <>
      <section className="bg-cream pt-12 md:pt-20 pb-6 md:pb-8 border-b border-line">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/track"
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] font-bold text-graphite hover:text-royal transition-colors"
          >
            <ArrowLeft size={14} strokeWidth={2.5} aria-hidden="true" />
            Back to status home
          </Link>
        </div>
      </section>

      {/* Header card */}
      <section className="bg-cream py-10 md:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-surface border border-line shadow-card-lg p-8 md:p-12">
            <div className="absolute top-0 left-8 right-8 h-1 bg-gold" aria-hidden="true" />
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-center">
              <div className="md:col-span-7">
                <Eyebrow>Repair status</Eyebrow>
                <h1 className="mt-3 font-sans font-black text-3xl md:text-4xl lg:text-5xl text-ink tracking-tight leading-[1.04]">
                  {STATUS_LABEL[repair.status]}.
                </h1>
                <p className="mt-5 text-base md:text-lg text-graphite leading-relaxed font-medium">
                  {STATUS_DESCRIPTION[repair.status]}
                </p>
                <dl className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-sm">
                  <div>
                    <dt className="text-[10px] uppercase tracking-[0.18em] font-bold text-graphite">
                      Customer
                    </dt>
                    <dd className="mt-1 text-ink font-bold">
                      {repair.customerFirstName}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[10px] uppercase tracking-[0.18em] font-bold text-graphite">
                      Vehicle
                    </dt>
                    <dd className="mt-1 text-ink font-bold">{repair.vehicle}</dd>
                  </div>
                  {repair.serviceSummary ? (
                    <div className="sm:col-span-2">
                      <dt className="text-[10px] uppercase tracking-[0.18em] font-bold text-graphite">
                        Service
                      </dt>
                      <dd className="mt-1 text-ink font-medium">
                        {repair.serviceSummary}
                      </dd>
                    </div>
                  ) : null}
                  {repair.etaText ? (
                    <div className="sm:col-span-2">
                      <dt className="text-[10px] uppercase tracking-[0.18em] font-bold text-graphite">
                        Estimated completion
                      </dt>
                      <dd className="mt-1 font-sans font-black text-xl text-royal tracking-tight">
                        {repair.etaText}
                      </dd>
                    </div>
                  ) : null}
                </dl>
              </div>
              <div className="md:col-span-5 flex md:justify-end">
                <div className="w-32 h-32 md:w-40 md:h-40 bg-gold-tint flex items-center justify-center">
                  <CurrentIcon
                    size={64}
                    strokeWidth={1.5}
                    className="text-royal"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stage progress strip */}
      <section className="bg-paper py-10 md:py-14 border-y border-line-subtle">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Eyebrow>Stage progress</Eyebrow>
          <ol className="mt-6 space-y-3">
            {REPAIR_STATUSES.map((s, i) => {
              const Icon = STATUS_ICON[s];
              const reached = i <= statusIndex;
              const current = i === statusIndex;
              return (
                <li
                  key={s}
                  className={`flex items-center gap-4 p-4 border ${
                    current
                      ? "bg-surface border-royal shadow-card"
                      : reached
                        ? "bg-surface border-line"
                        : "bg-paper border-line-subtle"
                  }`}
                >
                  <span
                    className={`w-10 h-10 flex items-center justify-center shrink-0 ${
                      current
                        ? "bg-royal text-cream"
                        : reached
                          ? "bg-gold-tint text-royal"
                          : "bg-line text-stone"
                    }`}
                  >
                    <Icon size={18} strokeWidth={2} aria-hidden="true" />
                  </span>
                  <div className="flex-1 min-w-0">
                    <p
                      className={`font-sans font-bold tracking-tight ${
                        reached ? "text-ink" : "text-stone"
                      }`}
                    >
                      {STATUS_LABEL[s]}
                    </p>
                  </div>
                  {current ? (
                    <span className="text-[10px] uppercase tracking-[0.18em] font-extrabold text-royal">
                      Current
                    </span>
                  ) : reached ? (
                    <span className="text-[10px] uppercase tracking-[0.18em] font-bold text-graphite">
                      Done
                    </span>
                  ) : null}
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* Timeline of updates */}
      <section className="bg-cream py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Eyebrow>Updates from the shop</Eyebrow>
          <h2 className="mt-3 font-sans font-black text-2xl md:text-3xl text-ink tracking-tight">
            Latest first.
          </h2>
          <ol className="mt-7 space-y-4">
            {[...repair.timeline].reverse().map((entry, i) => {
              const Icon = STATUS_ICON[entry.status];
              return (
                <li
                  key={`${entry.at}-${i}`}
                  className="relative bg-surface border border-line p-5 md:p-6 shadow-card flex items-start gap-4"
                >
                  <span className="w-10 h-10 bg-royal-tint flex items-center justify-center shrink-0">
                    <Icon
                      size={18}
                      strokeWidth={2}
                      className="text-royal"
                      aria-hidden="true"
                    />
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                      <p className="font-sans font-bold text-ink">
                        {STATUS_LABEL[entry.status]}
                      </p>
                      <p className="text-[11px] uppercase tracking-[0.16em] font-bold text-graphite">
                        {formatTimestamp(entry.at)}
                      </p>
                    </div>
                    {entry.note ? (
                      <p className="mt-2 text-sm md:text-base text-graphite leading-relaxed font-medium">
                        {entry.note}
                      </p>
                    ) : null}
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-ink text-cream py-14 md:py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Eyebrow light>Questions about your repair?</Eyebrow>
          <h2 className="mt-4 font-sans font-black text-2xl md:text-3xl text-cream tracking-tight">
            Call us anytime.
          </h2>
          <div className="mt-7">
            <a
              href={`tel:${SITE.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2.5 bg-gold text-ink hover:bg-gold-soft px-7 sm:px-8 py-4 text-sm font-extrabold uppercase tracking-[0.14em] transition-all shadow-gold"
            >
              <Phone size={17} strokeWidth={2.5} aria-hidden="true" />
              Call {SITE.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
