import type { Metadata } from "next";
import { MapPin, Phone, Clock, ArrowRight } from "lucide-react";
import { SITE } from "@/lib/constants";
import { generateBreadcrumbJsonLd } from "@/lib/metadata";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { MapEmbed } from "@/components/ui/MapEmbed";
import { JsonLd } from "@/components/ui/JsonLd";
import { SectionWatermark } from "@/components/ui/SectionWatermark";
import { ContactForm } from "./ContactForm";

const CONTACT_TITLE = "Contact The Star Auto Service | Richardson TX Mechanic";
const CONTACT_DESCRIPTION =
  "Contact The Star Auto Service in Richardson, TX. Call (972) 231-2886 or visit us at 900 E Belt Line Rd. Mon-Fri 8-6:30, Sat 8-4.";

export const metadata: Metadata = {
  title: { absolute: CONTACT_TITLE },
  description: CONTACT_DESCRIPTION,
  alternates: { canonical: `${SITE.url}/contact` },
  openGraph: {
    title: CONTACT_TITLE,
    description: CONTACT_DESCRIPTION,
    url: `${SITE.url}/contact`,
    siteName: SITE.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: CONTACT_TITLE,
    description: CONTACT_DESCRIPTION,
  },
};

export default function ContactPage() {
  const mapSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.5!2d-96.7127265!3d32.9478494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c1f06c4520ba7%3A0xbb1004d56727b314!2sThe%20Star%20Auto%20Service!5e0!3m2!1sen!2sus";
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(SITE.address.full)}`;

  const breadcrumbs = generateBreadcrumbJsonLd([
    { name: "Home", url: SITE.url },
    { name: "Contact", url: `${SITE.url}/contact` },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />
      {/* Intro band */}
      <section className="relative bg-cream pt-24 md:pt-32 pb-16 md:pb-20 border-b border-line overflow-hidden">
        <SectionWatermark src="https://images.unsplash.com/photo-1502877338535-766e1452684a?w=1800&q=60&auto=format&fit=crop" opacity={0.05} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow>Talk to the shop</Eyebrow>
                <h1 className="mt-5 font-sans font-black text-display-1 text-ink tracking-[-0.025em] leading-[0.98]">
                  Send a message
                  <br />
                  <span className="text-royal">or pick up the phone.</span>
                </h1>
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal delay={0.08}>
                <p className="text-lg md:text-xl text-graphite leading-relaxed font-medium">
                  Calling is fastest — we&apos;ll pick up, hear what your car is doing, and get you slotted in. The form below works just as well.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            <div className="lg:col-span-7">
              <Reveal>
                <ContactForm />
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={0.08}>
                <div className="space-y-7">
                  <a
                    href={directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${SITE.address.full} in Google Maps`}
                    className="group flex items-start gap-5 -m-3 p-3 hover:bg-paper transition-colors"
                  >
                    <div className="w-12 h-12 bg-royal-tint flex items-center justify-center shrink-0">
                      <MapPin className="text-royal" size={22} strokeWidth={2} aria-hidden="true" />
                    </div>
                    <div className="flex-1">
                      <p className="text-[11px] uppercase tracking-[0.18em] font-bold text-graphite mb-1.5">
                        Address — open in Maps
                      </p>
                      <p className="font-sans font-bold text-lg text-ink leading-snug group-hover:text-royal transition-colors">
                        {SITE.address.street}
                      </p>
                      <p className="font-sans font-bold text-lg text-ink leading-snug group-hover:text-royal transition-colors">
                        {SITE.address.city}, {SITE.address.state} {SITE.address.zip}
                      </p>
                      <span className="mt-3 inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] font-extrabold text-royal group-hover:text-royal-deep">
                        Get directions
                        <ArrowRight size={13} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                      </span>
                    </div>
                  </a>

                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 bg-gold-tint flex items-center justify-center shrink-0">
                      <Phone className="text-royal" size={22} strokeWidth={2} aria-hidden="true" />
                    </div>
                    <div className="flex-1">
                      <p className="text-[11px] uppercase tracking-[0.18em] font-bold text-graphite mb-1.5">
                        Call the shop
                      </p>
                      <a
                        href={`tel:${SITE.phoneRaw}`}
                        className="font-sans font-black text-3xl text-ink hover:text-royal transition-colors tracking-tight leading-none tabular-nums"
                      >
                        {SITE.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 bg-royal-tint flex items-center justify-center shrink-0">
                      <Clock className="text-royal" size={22} strokeWidth={2} aria-hidden="true" />
                    </div>
                    <div className="flex-1">
                      <p className="text-[11px] uppercase tracking-[0.18em] font-bold text-graphite mb-2.5">
                        Hours
                      </p>
                      <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-1.5 text-base">
                        <dt className="text-graphite font-medium">Mon&ndash;Fri</dt>
                        <dd className="text-ink font-semibold tabular-nums">{SITE.hours.weekday}</dd>
                        <dt className="text-graphite font-medium">Saturday</dt>
                        <dd className="text-ink font-semibold tabular-nums">{SITE.hours.saturday}</dd>
                        <dt className="text-graphite font-medium">Sunday</dt>
                        <dd className="text-ink font-semibold">Closed</dd>
                      </dl>
                    </div>
                  </div>

                  <MapEmbed
                    src={mapSrc}
                    title={`Map showing ${SITE.name} location`}
                    address={`${SITE.address.street} · ${SITE.address.city}, ${SITE.address.state} ${SITE.address.zip}`}
                    className="aspect-[4/3] overflow-hidden shadow-card"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
