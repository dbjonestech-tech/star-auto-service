import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Calendar, Phone, Clock, MapPin, Check } from "lucide-react";
import { SITE } from "@/lib/constants";
import { AREAS, AREA_SLUGS } from "@/lib/areas";
import { generateBreadcrumbJsonLd } from "@/lib/metadata";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/ui/JsonLd";
import { MapEmbed } from "@/components/ui/MapEmbed";

export function generateStaticParams() {
  return AREA_SLUGS.map((slug) => ({ slug }));
}

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const area = AREAS.find((a) => a.slug === slug);

  if (!area) return { title: "Area Not Found" };

  const title = `Auto Repair in ${area.name}, ${area.state} | The Star Auto Service`;
  const description = `Trusted auto repair shop serving ${area.name}, ${area.state} drivers, ${area.driveTime} from our shop on E Belt Line Rd in Richardson. ASE-Certified, NAPA Auto Care. Call (972) 231-2886.`;

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: `${SITE.url}/areas/${slug}` },
    openGraph: {
      title,
      description,
      url: `${SITE.url}/areas/${slug}`,
      siteName: SITE.name,
      locale: "en_US",
      type: "article",
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function AreaDetailPage({ params }: { params: Params }) {
  const { slug } = await params;
  const area = AREAS.find((a) => a.slug === slug);

  if (!area) notFound();

  const mapSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.5!2d-96.7127265!3d32.9478494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c1f06c4520ba7%3A0xbb1004d56727b314!2sThe%20Star%20Auto%20Service!5e0!3m2!1sen!2sus";

  const breadcrumbs = generateBreadcrumbJsonLd([
    { name: "Home", url: SITE.url },
    { name: "Areas Served", url: `${SITE.url}/areas/${slug}` },
    { name: area.name, url: `${SITE.url}/areas/${slug}` },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />

      {/* Hero */}
      <section className="relative bg-ink overflow-hidden">
        <Image
          src={area.heroImage}
          alt={area.heroAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/70 to-ink/40" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink/85 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
          <div className="max-w-4xl">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] font-bold text-cream/70">
                <li>
                  <Link href="/" className="hover:text-gold transition-colors">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true" className="text-cream/40">/</li>
                <li className="text-gold">Areas served</li>
                <li aria-hidden="true" className="text-cream/40">/</li>
                <li className="text-gold">{area.name}, {area.state}</li>
              </ol>
            </nav>

            <Eyebrow light>Auto repair in</Eyebrow>
            <h1 className="mt-5 font-sans font-black text-cream text-display-1 tracking-[-0.025em] leading-[0.98]">
              {area.name},
              <br />
              <span className="text-gold">{area.state}.</span>
            </h1>

            <p className="mt-7 text-lg md:text-xl text-cream/90 leading-relaxed max-w-2xl font-medium">
              {area.positioning}
            </p>

            <div className="mt-7 inline-flex items-center gap-6 text-[11px] uppercase tracking-[0.18em] font-bold text-cream/85">
              <span className="inline-flex items-center gap-2">
                <Clock size={13} strokeWidth={2.5} className="text-gold" aria-hidden="true" />
                {area.driveTime}
              </span>
              <span aria-hidden="true" className="text-cream/30">·</span>
              <span className="inline-flex items-center gap-2">
                <MapPin size={13} strokeWidth={2.5} className="text-gold" aria-hidden="true" />
                {area.distance}
              </span>
            </div>

            <div className="mt-10 flex flex-col-reverse sm:flex-row gap-4">
              <Link
                href="/book"
                className="group inline-flex items-center justify-center gap-2.5 bg-gold text-ink hover:bg-gold-soft px-8 py-4 text-sm font-extrabold uppercase tracking-[0.14em] transition-all shadow-gold hover:shadow-card-lg hover:-translate-y-0.5"
              >
                <Calendar size={17} strokeWidth={2.5} aria-hidden="true" />
                Book a service
              </Link>
              <a
                href={`tel:${SITE.phoneRaw}`}
                className="group inline-flex items-center justify-center gap-2.5 bg-cream/10 backdrop-blur-sm text-cream border-2 border-cream hover:bg-cream hover:text-ink px-8 py-4 text-sm font-extrabold uppercase tracking-[0.14em] transition-all"
              >
                <Phone size={17} strokeWidth={2.5} aria-hidden="true" />
                Call {SITE.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Intro + drivers */}
      <section className="bg-cream py-24 md:py-32 border-b border-line-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow>How we serve {area.name}</Eyebrow>
                <h2 className="mt-5 font-sans font-black text-display-2 text-ink tracking-[-0.022em] leading-[1]">
                  {area.name} drivers come to us for the straight answer.
                </h2>
                <div className="mt-8 space-y-5 text-base md:text-lg text-graphite leading-relaxed font-medium">
                  {area.intro.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal delay={0.1}>
                <div className="relative bg-surface border border-line p-7 md:p-9 shadow-card">
                  <div className="absolute top-0 left-7 right-7 h-0.5 bg-gold" aria-hidden="true" />
                  <Eyebrow>Who we see from {area.name}</Eyebrow>
                  <p className="mt-5 text-base md:text-lg text-ink leading-relaxed font-medium">
                    {area.drivers}
                  </p>

                  <div className="mt-8 pt-7 border-t border-line">
                    <Eyebrow>How to find us</Eyebrow>
                    <p className="mt-3 text-sm text-graphite leading-relaxed font-medium">
                      {area.localDetail}
                    </p>
                    <a
                      href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(SITE.address.full)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${SITE.address.full} in Google Maps`}
                      className="group mt-4 block hover:text-royal transition-colors"
                    >
                      <p className="font-sans font-bold text-base text-ink leading-snug group-hover:text-royal transition-colors">
                        {SITE.address.street}
                        <br />
                        {SITE.address.city}, {SITE.address.state} {SITE.address.zip}
                      </p>
                      <span className="mt-2 inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.16em] font-extrabold text-royal group-hover:text-royal-deep">
                        Open in Maps →
                      </span>
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Top services for this area */}
      <section className="bg-paper py-24 md:py-32 border-b border-line-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14 md:mb-16">
            <Reveal>
              <Eyebrow>What {area.name} drivers book most</Eyebrow>
              <h2 className="mt-5 font-sans font-black text-display-2 text-ink tracking-[-0.022em] leading-[1]">
                Top services for {area.name}.
              </h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {area.topServices.map((s, i) => (
              <Reveal key={s} delay={i * 0.04}>
                <article className="relative bg-surface border border-line p-6 md:p-7 shadow-card flex items-start gap-4">
                  <span className="font-sans font-black text-lg text-gold tabular-nums leading-none shrink-0 w-8 mt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 text-base text-ink leading-relaxed font-medium">
                    {s}
                  </span>
                  <Check size={18} strokeWidth={2.5} className="text-emerald shrink-0 mt-1" aria-hidden="true" />
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2.5 bg-ink text-cream hover:bg-royal px-8 py-4 text-xs font-extrabold uppercase tracking-[0.16em] transition-colors"
            >
              See all 12 services
              <ArrowRight size={14} strokeWidth={2.5} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Map + visit info */}
      <section className="bg-cream py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14 md:mb-16">
            <Reveal>
              <Eyebrow>Find us</Eyebrow>
              <h2 className="mt-5 font-sans font-black text-display-2 text-ink tracking-[-0.022em] leading-[1]">
                {area.driveTime}.
              </h2>
            </Reveal>
          </div>

          <Reveal>
            <MapEmbed
              src={mapSrc}
              title={`Map showing ${SITE.name} location relative to ${area.name}, ${area.state}`}
              address={`${SITE.address.street} · ${SITE.address.city}, ${SITE.address.state} ${SITE.address.zip}`}
              className="aspect-[16/8] overflow-hidden shadow-card-lg"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
