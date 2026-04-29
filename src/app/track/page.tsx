import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  Calendar,
  Clock,
  Wrench,
  Package,
  CircleCheck,
  CircleDot,
} from "lucide-react";
import { SITE } from "@/lib/constants";
import { generateBreadcrumbJsonLd } from "@/lib/metadata";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/ui/JsonLd";
import { SectionWatermark } from "@/components/ui/SectionWatermark";
import { CTASection } from "@/components/sections/CTASection";
import { StatusRequestForm } from "./StatusRequestForm";

const TITLE =
  "Repair Status | Track Your Car at the Shop | The Star Auto Service";
const DESCRIPTION =
  "Get an update on your repair without making a phone call. Request a status check, or use your tracking link from a recent visit. Family-owned auto repair in Richardson, TX.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: `${SITE.url}/track` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE.url}/track`,
    siteName: SITE.name,
    locale: "en_US",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const STAGES = [
  {
    icon: CircleDot,
    title: "Vehicle received",
    body: "Your car is checked in, your concern is documented, and a tech is assigned.",
  },
  {
    icon: Clock,
    title: "In diagnosis",
    body: "Real diagnostic work, codes, freeze-frame data, road test if the symptom is intermittent.",
  },
  {
    icon: Phone,
    title: "Quote sent for approval",
    body: "We call you with the findings, the proposed repair, and a firm price. Nothing happens without your authorization.",
  },
  {
    icon: Wrench,
    title: "Repair in progress",
    body: "Approved work is underway. ASE-Certified technicians using OEM-quality parts.",
  },
  {
    icon: Package,
    title: "Awaiting parts",
    body: "If something has to be ordered, you will see this stage with an ETA. We use NAPA's daily delivery and most parts are in by the next business day.",
  },
  {
    icon: CircleCheck,
    title: "Ready for pickup",
    body: "Repair complete, post-work road tested, invoice and warranty paperwork ready. We will call when it is time to come get it.",
  },
];

const PROMISES = [
  {
    title: "We text and call",
    body: "Most updates go out by phone or text the moment a stage changes. The website tracker is a backup, not a replacement for talking with you.",
  },
  {
    title: "Approval before any work",
    body: "Nothing past the diagnostic happens without your authorization. If we find something while we are in there, we stop and call.",
  },
  {
    title: "Honest ETAs",
    body: "We tell you what we know. If a part is back-ordered or a job is more involved than the original estimate, we update you the same day.",
  },
];

export default function TrackPage() {
  const breadcrumbs = generateBreadcrumbJsonLd([
    { name: "Home", url: SITE.url },
    { name: "Repair Status", url: `${SITE.url}/track` },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />

      {/* Intro band */}
      <section className="relative bg-cream pt-20 md:pt-28 lg:pt-32 pb-14 md:pb-20 lg:pb-24 border-b border-line overflow-hidden">
        <SectionWatermark
          src="https://images.unsplash.com/photo-1523983254932-c7e6571c9d60?w=1800&q=60&auto=format&fit=crop"
          opacity={0.05}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow>Repair status</Eyebrow>
                <h1 className="mt-5 font-sans font-black text-display-1 text-ink tracking-[-0.025em] leading-[0.98]">
                  Where is
                  <br />
                  <span className="text-royal">your car?</span>
                </h1>
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal delay={0.08}>
                <p className="text-base sm:text-lg md:text-xl text-graphite leading-relaxed font-medium">
                  Skip the phone call. Request an update through the form, or
                  follow your tracking link from a recent visit. We will reply
                  fast.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Form + how it works */}
      <section className="bg-cream py-16 md:py-24 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            <div className="lg:col-span-7">
              <Reveal>
                <StatusRequestForm />
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal delay={0.1}>
                <div className="space-y-6">
                  <div className="relative bg-surface border border-line p-6 md:p-7 shadow-card">
                    <div
                      className="absolute top-0 left-6 right-6 h-0.5 bg-royal"
                      aria-hidden="true"
                    />
                    <Eyebrow>Have a tracking link?</Eyebrow>
                    <p className="mt-3 text-sm md:text-base text-graphite leading-relaxed font-medium">
                      If you got a tracking link from us at drop-off, you can
                      open it any time to see the latest status, the most
                      recent technician note, and an estimated completion. The
                      link is unique to your repair and does not need a login.
                    </p>
                  </div>

                  <div className="relative bg-surface border border-line p-6 md:p-7 shadow-card">
                    <div
                      className="absolute top-0 left-6 right-6 h-0.5 bg-gold"
                      aria-hidden="true"
                    />
                    <Eyebrow>Prefer to talk?</Eyebrow>
                    <p className="mt-3 text-sm md:text-base text-graphite leading-relaxed font-medium">
                      Calling is fastest. We pick up the phone.
                    </p>
                    <a
                      href={`tel:${SITE.phoneRaw}`}
                      className="mt-4 inline-flex items-center gap-2 font-sans font-black text-2xl md:text-3xl text-ink hover:text-royal transition-colors tracking-tight leading-none tabular-nums"
                    >
                      {SITE.phone}
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* The 6 stages */}
      <section className="bg-paper py-16 md:py-24 lg:py-32 border-y border-line-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10 md:mb-14 lg:mb-16">
            <Reveal>
              <Eyebrow>How a repair moves through the shop</Eyebrow>
              <h2 className="mt-5 font-sans font-black text-display-2 text-ink tracking-[-0.022em] leading-[1.04]">
                Six stages, every time.
              </h2>
              <p className="mt-6 text-base md:text-lg text-graphite leading-relaxed font-medium">
                Every car that comes through the bay moves through the same
                six stages. The tracker shows you exactly where yours is.
              </p>
            </Reveal>
          </div>

          <ol className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {STAGES.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.title} delay={i * 0.04}>
                  <li className="relative bg-surface border border-line p-6 md:p-7 shadow-card flex items-start gap-5 h-full">
                    <span className="font-sans font-black text-xl text-gold tabular-nums leading-none shrink-0 w-8 mt-0.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="w-9 h-9 bg-royal-tint flex items-center justify-center shrink-0">
                          <Icon
                            size={18}
                            strokeWidth={2}
                            className="text-royal"
                            aria-hidden="true"
                          />
                        </span>
                        <h3 className="font-sans font-black text-lg md:text-xl text-ink tracking-tight leading-snug">
                          {s.title}
                        </h3>
                      </div>
                      <p className="text-sm md:text-base text-graphite leading-relaxed font-medium">
                        {s.body}
                      </p>
                    </div>
                  </li>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </section>

      {/* Promises */}
      <section className="bg-cream py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10 md:mb-14">
            <Reveal>
              <Eyebrow>How we communicate</Eyebrow>
              <h2 className="mt-5 font-sans font-black text-display-2 text-ink tracking-[-0.022em] leading-[1.04]">
                Three promises about your update.
              </h2>
            </Reveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {PROMISES.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.05}>
                <article className="relative bg-surface border border-line p-6 md:p-7 shadow-card h-full">
                  <div
                    className="absolute top-0 left-6 right-6 h-0.5 bg-gold"
                    aria-hidden="true"
                  />
                  <h3 className="font-sans font-black text-lg md:text-xl text-ink tracking-tight leading-snug">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm md:text-base text-graphite leading-relaxed font-medium">
                    {p.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-ink text-cream py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <Eyebrow light>Need to bring a car in?</Eyebrow>
            <h2 className="mt-5 font-sans font-black text-display-3 text-cream tracking-tight leading-tight">
              Book the next slot.
            </h2>
            <p className="mt-6 text-base md:text-lg text-cream/85 leading-relaxed font-medium">
              Walk-ins always welcome. Call ahead if you want to be sure of the
              timing.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Link
                href="/book"
                className="inline-flex items-center justify-center gap-2.5 bg-gold text-ink hover:bg-gold-soft px-7 sm:px-8 py-4 text-sm font-extrabold uppercase tracking-[0.14em] transition-all shadow-gold"
              >
                <Calendar size={17} strokeWidth={2.5} aria-hidden="true" />
                Book a service
              </Link>
              <a
                href={`tel:${SITE.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2.5 border-2 border-cream text-cream hover:bg-cream hover:text-ink px-7 sm:px-8 py-4 text-sm font-extrabold uppercase tracking-[0.14em] transition-all"
              >
                <Phone size={17} strokeWidth={2.5} aria-hidden="true" />
                Call {SITE.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
