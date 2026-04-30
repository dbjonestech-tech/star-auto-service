import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE } from "@/lib/constants";
import { SPANISH_ENABLED } from "@/lib/i18n";
import { UI } from "@/lib/translations/ui";
import { ContactPageBody } from "@/components/page-bodies/ContactPageBody";

const copy = UI.es.contactPage;

export const metadata: Metadata = {
  title: { absolute: copy.metaTitle },
  description: copy.metaDescription,
  alternates: {
    canonical: `${SITE.url}/es/contact`,
    languages: {
      "en-US": `${SITE.url}/contact`,
      "es-US": `${SITE.url}/es/contact`,
      "x-default": `${SITE.url}/contact`,
    },
  },
  openGraph: {
    title: copy.metaTitle,
    description: copy.metaDescription,
    url: `${SITE.url}/es/contact`,
    siteName: SITE.name,
    locale: "es_US",
    alternateLocale: ["en_US"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: copy.metaTitle,
    description: copy.metaDescription,
  },
};

export default function ContactPageEs() {
  if (!SPANISH_ENABLED) notFound();
  return <ContactPageBody locale="es" />;
}
