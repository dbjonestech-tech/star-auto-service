import type { Metadata } from "next";
import { Phone, MapPin, Clock } from "lucide-react";
import { SITE } from "@/lib/constants";
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

/** Contact page with form and business information. */
export default function ContactPage() {
  const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.5!2d-96.7127265!3d32.9478494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c1f06c4520ba7%3A0xbb1004d56727b314!2sThe%20Star%20Auto%20Service!5e0!3m2!1sen!2sus";
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(SITE.address.full)}`;

  return (
    <>
      <section className="bg-gradient-to-br from-primary to-primary-light py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white">
            Contact Us
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Ready to schedule your service? Give us a call or fill out the form
            below. Walk-ins are always welcome.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />

            <div className="space-y-8">
              <div className="bg-surface rounded-xl p-6 md:p-8 shadow-sm border border-border-light">
                <h2 className="text-xl font-bold text-primary mb-6">
                  Business Information
                </h2>

                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent-light flex items-center justify-center shrink-0">
                      <MapPin className="text-accent" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-primary">Address</p>
                      <a
                        href={directionsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-secondary hover:text-accent transition-colors text-sm underline-offset-2 hover:underline"
                        aria-label={`Get directions to ${SITE.name} on Google Maps`}
                      >
                        {SITE.address.full}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent-light flex items-center justify-center shrink-0">
                      <Phone className="text-accent" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-primary">Phone</p>
                      <a
                        href={`tel:${SITE.phoneRaw}`}
                        className="text-accent hover:text-accent-hover transition-colors text-sm"
                      >
                        {SITE.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent-light flex items-center justify-center shrink-0">
                      <Clock className="text-accent" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-primary mb-2">Hours</p>
                      <table className="text-sm text-text-secondary">
                        <tbody>
                          <tr>
                            <td className="pr-4 py-0.5 font-medium">
                              Mon – Fri
                            </td>
                            <td>{SITE.hours.weekday}</td>
                          </tr>
                          <tr>
                            <td className="pr-4 py-0.5 font-medium">
                              Saturday
                            </td>
                            <td>{SITE.hours.saturday}</td>
                          </tr>
                          <tr>
                            <td className="pr-4 py-0.5 font-medium">Sunday</td>
                            <td>{SITE.hours.sunday}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden shadow-sm border border-border-light h-64">
                <iframe
                  src={mapSrc}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Map showing ${SITE.name} location`}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
