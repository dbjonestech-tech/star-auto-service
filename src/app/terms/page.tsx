import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/constants";
import { generateBreadcrumbJsonLd } from "@/lib/metadata";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/ui/JsonLd";

const TITLE = "Terms of Service | The Star Auto Service";
const DESCRIPTION =
  "Terms of use for thestarautoservice.com and the relationship between visitors, customers, and the shop.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: `${SITE.url}/terms` },
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "April 2026";

export default function TermsPage() {
  const breadcrumbs = generateBreadcrumbJsonLd([
    { name: "Home", url: SITE.url },
    { name: "Terms of Service", url: `${SITE.url}/terms` },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <section className="bg-cream pt-24 md:pt-32 pb-16 md:pb-20 border-b border-line">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <Eyebrow>Terms</Eyebrow>
            <h1 className="mt-5 font-sans font-black text-display-2 text-ink tracking-[-0.022em] leading-[1]">
              Terms of service.
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
              <h2>Site use</h2>
              <p>
                This website is provided to share information about The Star Auto Service in Richardson, Texas, and to make it easy for you to get in touch or request a service appointment. By using the site, you agree to use it for those purposes and not to misuse it.
              </p>

              <h2>Quotes and estimates</h2>
              <p>
                Any pricing, time-to-complete, or repair recommendation discussed on the site, by phone, or in form correspondence is an <strong>estimate</strong>. The binding agreement for repair work is the signed work order created at the shop after we&apos;ve had a chance to inspect your vehicle in person.
              </p>

              <h2>Warranty</h2>
              <p>
                As a NAPA Auto Care Center, qualifying repairs are backed by NAPA&apos;s nationwide 24-month / 24,000-mile peace-of-mind warranty, honored at participating NAPA Auto Care Centers across the country. The specific terms, eligible parts, and exclusions are governed by NAPA. Ask us for details before authorizing work and we&apos;ll walk you through what applies to your repair.
              </p>

              <h2>Accuracy</h2>
              <p>
                We try to keep the information on this site current and correct. If something looks off, hours, services offered, or anything else, please let us know.
              </p>

              <h2>Trademarks</h2>
              <p>
                &ldquo;NAPA&rdquo; and &ldquo;NAPA Auto Care Center&rdquo; are trademarks of their respective owners and are used here in accordance with the program. &ldquo;ASE&rdquo; is a trademark of the National Institute for Automotive Service Excellence. &ldquo;The Star Auto Service&rdquo; is the trade name used by the shop in Richardson, Texas.
              </p>

              <h2>Third-party services</h2>
              <p>
                The site embeds Google Maps for location and directions and uses Vercel Analytics for aggregate traffic statistics. These services are governed by their own terms.
              </p>

              <h2>Limitation of liability</h2>
              <p>
                The information on this site is provided &ldquo;as is.&rdquo; To the extent permitted by law, the shop is not liable for indirect or consequential damages arising from use of the site itself. Our service warranty for actual repair work is described under &ldquo;Warranty&rdquo; above and on your work order.
              </p>

              <h2>Governing law</h2>
              <p>
                These terms are governed by the laws of the State of Texas, and any disputes will be handled in the courts of Dallas County, Texas.
              </p>

              <h2>Changes</h2>
              <p>
                If these terms change materially, we&apos;ll update the date at the top of this page.
              </p>

              <h2>Contact</h2>
              <p>
                Questions about these terms? Call the shop at{" "}
                <a href={`tel:${SITE.phoneRaw}`} className="text-royal hover:text-royal-deep font-semibold tabular-nums">
                  {SITE.phone}
                </a>
                {" "}or send a note via the{" "}
                <Link href="/contact" className="text-royal hover:text-royal-deep underline-offset-4 hover:underline">
                  contact page
                </Link>
                . The shop is at {SITE.address.full}.
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
