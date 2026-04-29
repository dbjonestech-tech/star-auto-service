import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import * as LucideIcons from "lucide-react";
import { ArrowRight, Calendar, Phone, Check, AlertCircle, Star, ShieldCheck } from "lucide-react";
import { SITE, SERVICES, TESTIMONIALS } from "@/lib/constants";
import { SERVICE_CONTENT, SERVICE_PAGE_SLUGS } from "@/lib/serviceContent";
import { generateBreadcrumbJsonLd } from "@/lib/metadata";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/ui/JsonLd";
import { CTASection } from "@/components/sections/CTASection";

export function generateStaticParams() {
  return SERVICE_PAGE_SLUGS.map((slug) => ({ slug }));
}

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.id === slug);
  const content = SERVICE_CONTENT[slug];

  if (!service || !content) {
    return { title: "Service Not Found" };
  }

  const title = `${service.title} in Richardson, TX | The Star Auto Service`;
  const description = `${content.subhead} Call (972) 231-2886 or book online — ASE-Certified, NAPA Auto Care nationwide warranty.`;

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: `${SITE.url}/services/${slug}` },
    openGraph: {
      title,
      description,
      url: `${SITE.url}/services/${slug}`,
      siteName: SITE.name,
      locale: "en_US",
      type: "article",
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function ServiceDetailPage({ params }: { params: Params }) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.id === slug);
  const content = SERVICE_CONTENT[slug];

  if (!service || !content) notFound();

  const Icon =
    (LucideIcons[service.icon as keyof typeof LucideIcons] as React.ComponentType<{
      className?: string;
      size?: number;
      strokeWidth?: number;
      "aria-hidden"?: string | boolean;
    }>) || LucideIcons.Wrench;

  const testimonial = TESTIMONIALS[content.featuredTestimonialIndex] ?? TESTIMONIALS[0];

  const breadcrumbs = generateBreadcrumbJsonLd([
    { name: "Home", url: SITE.url },
    { name: "Services", url: `${SITE.url}/services` },
    { name: service.title, url: `${SITE.url}/services/${slug}` },
  ]);

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE.url}/services/${slug}#service`,
    name: service.title,
    description: service.description,
    serviceType: service.title,
    provider: { "@id": `${SITE.url}/#business` },
    areaServed: [
      { "@type": "City", name: "Richardson" },
      { "@type": "City", name: "Garland" },
      { "@type": "City", name: "Plano" },
      { "@type": "City", name: "Dallas" },
      { "@type": "City", name: "Allen" },
      { "@type": "City", name: "Murphy" },
    ],
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "USD",
      areaServed: { "@type": "City", name: "Richardson" },
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.title} included services`,
      itemListElement: service.features.map((f) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: f },
      })),
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE.url}/services/${slug}#faq`,
    mainEntity: content.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={faqJsonLd} />

      {/* Hero */}
      <section className="relative bg-ink overflow-hidden">
        <Image
          src={content.heroImage}
          alt={content.heroAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/70 to-ink/40" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink/85 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
          <div className="max-w-4xl">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] font-bold text-cream/70">
                <li>
                  <Link href="/" className="hover:text-gold transition-colors">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true" className="text-cream/40">
                  /
                </li>
                <li>
                  <Link href="/services" className="hover:text-gold transition-colors">
                    Services
                  </Link>
                </li>
                <li aria-hidden="true" className="text-cream/40">
                  /
                </li>
                <li className="text-gold">{service.title}</li>
              </ol>
            </nav>

            <div className="inline-flex items-center gap-2.5 mb-6">
              <span className="w-10 h-10 bg-gold-tint flex items-center justify-center">
                <Icon className="text-royal" size={22} strokeWidth={2} aria-hidden="true" />
              </span>
              <span className="text-[11px] uppercase tracking-[0.22em] font-bold text-cream">
                {content.eyebrow}
              </span>
            </div>

            <h1 className="font-sans font-black text-cream text-display-1 tracking-[-0.025em] leading-[0.98]">
              {content.headline}
            </h1>

            <p className="mt-7 text-lg md:text-xl text-cream/90 leading-relaxed max-w-2xl font-medium">
              {content.subhead}
            </p>

            <p className="mt-5 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] font-bold text-gold">
              <span className="w-1.5 h-1.5 bg-gold rounded-full" aria-hidden="true" />
              {content.priceCue}
            </p>

            <div className="mt-10 flex flex-col-reverse sm:flex-row gap-4">
              <Link
                href="/book"
                className="group inline-flex items-center justify-center gap-2.5 bg-gold text-ink hover:bg-gold-soft px-8 py-4 text-sm font-extrabold uppercase tracking-[0.14em] transition-all shadow-gold hover:shadow-card-lg hover:-translate-y-0.5"
              >
                <Calendar size={17} strokeWidth={2.5} aria-hidden="true" />
                Book this service
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

      {/* What's included */}
      <section className="bg-cream py-24 md:py-32 border-b border-line-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                <Eyebrow>What&apos;s included</Eyebrow>
                <h2 className="mt-5 font-sans font-black text-display-2 text-ink tracking-[-0.022em] leading-[1]">
                  Everything we cover.
                </h2>
                <p className="mt-6 text-base md:text-lg text-graphite leading-relaxed font-medium">
                  {service.description}
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={0.08}>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                  {service.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-3 text-base text-ink font-medium"
                    >
                      <span className="w-7 h-7 bg-gold-tint flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={15} strokeWidth={3} className="text-royal" aria-hidden="true" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* When to book */}
      <section className="bg-paper py-24 md:py-32 border-b border-line-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                <Eyebrow>When to book</Eyebrow>
                <h2 className="mt-5 font-sans font-black text-display-2 text-ink tracking-[-0.022em] leading-[1]">
                  Signs to come in.
                </h2>
                <p className="mt-6 text-base md:text-lg text-graphite leading-relaxed font-medium">
                  Any of these sound familiar? Give us a call — we&apos;ll talk through what&apos;s likely going on before you make the trip.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={0.08}>
                <ul className="space-y-4">
                  {content.symptoms.map((s, i) => (
                    <li
                      key={s}
                      className="relative bg-surface border border-line p-5 md:p-6 shadow-card flex items-start gap-4"
                    >
                      <span className="font-sans font-black text-xl text-gold tabular-nums leading-none shrink-0 w-8">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="flex-1 text-base text-ink leading-relaxed font-medium">
                        {s}
                      </span>
                      <AlertCircle
                        size={18}
                        strokeWidth={2}
                        className="text-graphite/60 shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="bg-cream py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14 md:mb-16">
            <Reveal>
              <Eyebrow>Why bring it here</Eyebrow>
              <h2 className="mt-5 font-sans font-black text-display-2 text-ink tracking-[-0.022em] leading-[1]">
                Not the cheapest. The straightest.
              </h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-7">
            {content.whyUs.map((reason, i) => (
              <Reveal key={reason} delay={i * 0.05}>
                <article className="relative bg-surface border border-line p-7 md:p-8 h-full shadow-card flex items-start gap-5">
                  <div className="absolute top-0 left-7 right-7 h-0.5 bg-royal" aria-hidden="true" />
                  <span className="w-10 h-10 bg-royal-tint flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck className="text-royal" size={20} strokeWidth={2} aria-hidden="true" />
                  </span>
                  <p className="flex-1 text-base text-ink leading-relaxed font-medium">
                    {reason}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured testimonial */}
      <section className="bg-paper py-24 md:py-28 border-y border-line-subtle">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center">
              <div className="inline-flex gap-1 mb-7">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="text-gold"
                    fill="currentColor"
                    strokeWidth={1}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <blockquote className="font-sans font-black text-2xl md:text-3xl text-ink tracking-tight leading-tight">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-8 text-[11px] uppercase tracking-[0.18em] font-bold text-graphite">
                {testimonial.author} &middot; {testimonial.vehicle}
              </figcaption>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <Eyebrow>Common questions</Eyebrow>
            <h2 className="mt-5 font-sans font-black text-display-2 text-ink tracking-[-0.022em] leading-[1]">
              {service.title} FAQ.
            </h2>
          </Reveal>
          <div className="mt-12 space-y-4">
            {content.faqs.map((faq, i) => (
              <Reveal key={faq.q} delay={i * 0.04}>
                <details className="group relative bg-surface border border-line p-6 md:p-7 shadow-card open:shadow-card-lg transition-shadow">
                  <summary className="flex items-start justify-between gap-6 cursor-pointer list-none">
                    <h3 className="font-sans font-black text-lg md:text-xl text-ink tracking-tight leading-snug">
                      {faq.q}
                    </h3>
                    <span
                      aria-hidden="true"
                      className="shrink-0 w-7 h-7 bg-royal-tint flex items-center justify-center transition-transform group-open:rotate-45"
                    >
                      <span className="block w-3 h-0.5 bg-royal absolute" />
                      <span className="block w-0.5 h-3 bg-royal absolute" />
                    </span>
                  </summary>
                  <p className="mt-5 text-base text-graphite leading-relaxed font-medium">
                    {faq.a}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2.5 text-xs uppercase tracking-[0.16em] font-extrabold text-ink hover:text-royal transition-colors border-b-2 border-ink hover:border-royal pb-1"
            >
              See all questions
              <ArrowRight size={13} strokeWidth={2.5} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
