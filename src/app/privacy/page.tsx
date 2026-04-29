import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/constants";
import { generateBreadcrumbJsonLd } from "@/lib/metadata";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/ui/JsonLd";

const TITLE = "Privacy Policy | The Star Auto Service";
const DESCRIPTION =
  "How The Star Auto Service collects, uses, and protects information submitted through this website.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: `${SITE.url}/privacy` },
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "April 2026";

export default function PrivacyPage() {
  const breadcrumbs = generateBreadcrumbJsonLd([
    { name: "Home", url: SITE.url },
    { name: "Privacy Policy", url: `${SITE.url}/privacy` },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <section className="bg-cream pt-20 md:pt-28 lg:pt-32 pb-12 md:pb-16 lg:pb-20 border-b border-line">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <Eyebrow>Privacy</Eyebrow>
            <h1 className="mt-5 font-sans font-black text-display-2 text-ink tracking-[-0.022em] leading-[1]">
              Privacy policy.
            </h1>
            <p className="mt-6 text-base text-graphite font-medium">
              Last updated {LAST_UPDATED}.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <Prose>
              <h2>What we collect</h2>
              <p>
                When you fill out a contact or booking form on this website, we collect the information you provide: your name, phone number, optional email address, optional vehicle year/make/model, the service you&apos;re interested in, and any message you write.
              </p>
              <p>
                We do <strong>not</strong> collect payment information through this website. Payments happen at the shop, in person.
              </p>

              <h2>Why we collect it</h2>
              <p>
                We use the information you submit to respond to your inquiry, schedule your service, and follow up about the work being done on your vehicle. That&apos;s it.
              </p>

              <h2>Who we share it with</h2>
              <p>
                We do not sell or rent your information. Form submissions are delivered to the shop&apos;s inbox via{" "}
                <a href="https://resend.com" target="_blank" rel="noopener noreferrer" className="text-royal hover:text-royal-deep underline-offset-4 hover:underline">
                  Resend
                </a>
                , our transactional email provider. Beyond Resend handling the email in transit, no third party receives the information you submit.
              </p>

              <h2>Cookies and analytics</h2>
              <p>
                This website uses{" "}
                <a href="https://vercel.com/docs/analytics" target="_blank" rel="noopener noreferrer" className="text-royal hover:text-royal-deep underline-offset-4 hover:underline">
                  Vercel Analytics
                </a>
                {" "}for aggregate, privacy-friendly traffic statistics. Vercel Analytics does not use cookies and does not collect personally identifiable information.
              </p>
              <p>
                We store one small flag in your browser&apos;s localStorage to remember if you&apos;ve dismissed the mobile call bar. That flag is local to your device and never leaves it.
              </p>

              <h2>How long we keep it</h2>
              <p>
                Form submissions are kept in our shop email inbox for our records and to maintain service history. If you&apos;d like us to delete a record we have for you, contact us using the details below.
              </p>

              <h2>Your choices</h2>
              <p>
                You can request that we delete the information you submitted, request a copy of what we have, or correct anything that&apos;s wrong. Email or call the shop and we&apos;ll handle it directly.
              </p>

              <h2>Security</h2>
              <p>
                We take reasonable steps to protect the information you submit. Forms are rate-limited and protected against automated abuse. The website is served over HTTPS.
              </p>

              <h2>Changes</h2>
              <p>
                If this policy changes materially, we&apos;ll update the date at the top of this page.
              </p>

              <h2>Contact</h2>
              <p>
                Questions about this policy? Call the shop at{" "}
                <a href={`tel:${SITE.phoneRaw}`} className="text-royal hover:text-royal-deep font-semibold tabular-nums">
                  {SITE.phone}
                </a>
                {" "}or send a note via the{" "}
                <Link href="/contact" className="text-royal hover:text-royal-deep underline-offset-4 hover:underline">
                  contact page
                </Link>
                . The shop is located at {SITE.address.full}.
              </p>
            </Prose>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="prose-shop space-y-8 text-base md:text-lg text-graphite leading-relaxed font-medium [&_h2]:font-sans [&_h2]:font-black [&_h2]:text-2xl [&_h2]:md:text-3xl [&_h2]:text-ink [&_h2]:tracking-tight [&_h2]:leading-tight [&_h2]:mt-12 [&_h2]:mb-4 [&_strong]:text-ink [&_strong]:font-bold">
      {children}
    </div>
  );
}
