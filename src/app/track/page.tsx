import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import { SPANISH_ENABLED } from "@/lib/i18n";
import { UI } from "@/lib/translations/ui";
import { TrackPageBody } from "@/components/page-bodies/TrackPageBody";

const copy = UI.en.trackPage;

export const metadata: Metadata = {
  title: { absolute: copy.metaTitle },
  description: copy.metaDescription,
  alternates: {
    canonical: `${SITE.url}/track`,
    languages: SPANISH_ENABLED
      ? {
          "en-US": `${SITE.url}/track`,
          "es-US": `${SITE.url}/es/track`,
          "x-default": `${SITE.url}/track`,
        }
      : undefined,
  },
  openGraph: {
    title: copy.metaTitle,
    description: copy.metaDescription,
    url: `${SITE.url}/track`,
    siteName: SITE.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: copy.metaTitle,
    description: copy.metaDescription,
  },
};

export default function TrackPage() {
  return <TrackPageBody locale="en" />;
}
