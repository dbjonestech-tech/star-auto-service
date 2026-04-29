import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SITE } from "@/lib/constants";
import { generateBreadcrumbJsonLd, FAQ_ITEMS } from "@/lib/metadata";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/ui/JsonLd";
import { CTASection } from "@/components/sections/CTASection";

const TITLE = "Frequently Asked Questions | The Star Auto Service";
const DESCRIPTION =
  "Answers to common questions about brake repair, oil changes, Texas state inspections, NAPA warranty, bilingual service, and more at The Star Auto Service in Richardson, TX.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: `${SITE.url}/faq` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE.url}/faq`,
    siteName: SITE.name,
    locale: "en_US",
    type: "website",
  },
};

const EXTRA_FAQS = [
  {
    q: "Are you a NAPA Auto Care Center?",
    a: "Yes. The Star Auto Service is an official NAPA Auto Care Center, which means qualifying repairs are backed by a nationwide 24-month / 24,000-mile warranty honored at over 17,000 NAPA Auto Care Centers across the country.",
  },
  {
    q: "What makes and models do you work on?",
    a: "Every common make and model, domestic and import, gas and hybrid. Toyota, Honda, Ford, Chevrolet, GMC, Ram, Nissan, Hyundai, Kia, Mazda, Subaru, BMW, Mercedes-Benz, Audi, Volkswagen, Lexus, Acura, Infiniti, and many more.",
  },
  {
    q: "Do I need an appointment, or can I walk in?",
    a: "Walk-ins are always welcome, Mon-Fri 8:00 AM – 6:30 PM and Saturday 8:00 AM – 4:00 PM. For larger jobs we appreciate a heads-up so we can have parts on hand and get you in faster.",
  },
  {
    q: "Where are you located?",
    a: `We're at ${SITE.address.full}, on E Belt Line Road in Richardson, easy access from US-75 and the Dallas North Tollway.`,
  },
  {
    q: "Do you offer financing?",
    a: "We don't run our own financing program in-house, but we'll work with you on quotes, prioritize repairs by safety, and help you sequence work that doesn't all need to happen at once.",
  },
  {
    q: "How long have you been in business?",
    a: "Since 1998. Miguel Ibarra opened the shop with one rule, never recommend a repair the car doesn't need, and twenty-eight years later the rule and the family ownership both stand.",
  },
  {
    q: "Do you offer free quotes?",
    a: "Honest assessments and upfront quotes are how we work. Call us, describe what's going on, and we'll talk through what it likely costs before any wrench turns.",
  },
  {
    q: "What payment methods do you accept?",
    a: "Cash, credit card, and debit card. We don't push extended-warranty contracts.",
  },
  {
    q: "Do you offer courtesy rides or loaners?",
    a: "We offer courtesy rides within Richardson when our schedule allows, call ahead and we'll let you know.",
  },
  {
    q: "Can I drop my car off after hours?",
    a: "Yes. we have an after-hours drop box. Park in the lot, fill out the envelope, drop your keys, and we'll call you in the morning before any work starts.",
  },
];

export default function FAQPage() {
  const all = [...FAQ_ITEMS, ...EXTRA_FAQS];

  const breadcrumbs = generateBreadcrumbJsonLd([
    { name: "Home", url: SITE.url },
    { name: "FAQ", url: `${SITE.url}/faq` },
  ]);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE.url}/faq#faq`,
    mainEntity: all.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <JsonLd data={faqJsonLd} />

      {/* Photo hero */}
      <section className="relative bg-ink overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=1800&q=70&auto=format&fit=crop"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/75 to-ink/40" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink/90 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36">
          <Eyebrow light>Frequently asked questions</Eyebrow>
          <h1 className="mt-5 font-sans font-black text-display-1 text-cream tracking-[-0.025em] leading-[0.98]">
            The straight answers,
            <br />
            <span className="text-gold">in writing.</span>
          </h1>
          <p className="mt-7 text-lg md:text-xl text-cream/90 leading-relaxed font-medium max-w-2xl">
            {all.length} of the questions we hear most. Still don&apos;t see yours? Call the shop or send a note, we&apos;ll write back.
          </p>
        </div>
      </section>

      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {all.map((faq, i) => (
              <Reveal key={faq.q} delay={i * 0.03}>
                <details className="group relative bg-surface border border-line p-6 md:p-7 shadow-card open:shadow-card-lg transition-shadow">
                  <summary className="flex items-start justify-between gap-6 cursor-pointer list-none">
                    <h2 className="font-sans font-black text-lg md:text-xl text-ink tracking-tight leading-snug">
                      {faq.q}
                    </h2>
                    <span
                      aria-hidden="true"
                      className="shrink-0 w-7 h-7 bg-royal-tint flex items-center justify-center transition-transform group-open:rotate-45 relative"
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
              href="/contact"
              className="inline-flex items-center gap-2.5 bg-ink text-cream hover:bg-royal px-8 py-4 text-xs font-extrabold uppercase tracking-[0.16em] transition-colors"
            >
              Ask us a question
              <ArrowRight size={14} strokeWidth={2.5} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
