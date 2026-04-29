import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { isTrackerConfigured, REPAIR_STATUSES, STATUS_LABEL } from "@/lib/repairs";
import { NewRepairForm } from "./NewRepairForm";

export default function NewRepairPage() {
  const tracker = isTrackerConfigured();

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
          <Eyebrow>New repair</Eyebrow>
          <h1 className="mt-2 font-sans font-black text-3xl md:text-4xl text-ink tracking-tight">
            Create a tracking record
          </h1>
          <p className="mt-4 text-sm md:text-base text-graphite leading-relaxed font-medium max-w-xl">
            Once saved, you will get a unique tracking link to share with the
            customer. The link does not require login.
          </p>
        </div>

        {!tracker ? (
          <div className="mt-8 bg-gold-tint border border-gold/40 p-6">
            <p className="font-sans font-bold text-ink">
              Tracker storage not connected.
            </p>
            <p className="mt-2 text-sm text-ink font-medium">
              Provision Upstash Redis on Vercel Marketplace before you can
              create repair records.
            </p>
          </div>
        ) : (
          <NewRepairForm
            statuses={REPAIR_STATUSES.map((s) => ({ value: s, label: STATUS_LABEL[s] }))}
          />
        )}
      </div>
    </section>
  );
}
