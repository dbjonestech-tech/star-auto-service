import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE } from "@/lib/constants";
import { SPANISH_ENABLED } from "@/lib/i18n";
import { UI } from "@/lib/translations/ui";
import { TrackPageBody } from "@/components/page-bodies/TrackPageBody";

const copy = UI.es.trackPage;

export const metadata: Metadata = {
  title: { absolute: copy.metaTitle },
  description: copy.metaDescription,
  alternates: {
    canonical: `${SITE.url}/es/track`,
    languages: {
      "en-US": `${SITE.url}/track`,
      "es-US": `${SITE.url}/es/track`,
      "x-default": `${SITE.url}/track`,
    },
  },
  openGraph: {
    title: copy.metaTitle,
    description: copy.metaDescription,
    url: `${SITE.url}/es/track`,
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

export default function TrackPageEs() {
  if (!SPANISH_ENABLED) notFound();
  return <TrackPageBody locale="es" />;
}
