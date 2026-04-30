import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import { SPANISH_ENABLED } from "@/lib/i18n";
import { UI } from "@/lib/translations/ui";
import { BookPageBody } from "@/components/page-bodies/BookPageBody";

const copy = UI.en.bookPage;

export const metadata: Metadata = {
  title: { absolute: copy.metaTitle },
  description: copy.metaDescription,
  alternates: {
    canonical: `${SITE.url}/book`,
    languages: SPANISH_ENABLED
      ? {
          "en-US": `${SITE.url}/book`,
          "es-US": `${SITE.url}/es/book`,
          "x-default": `${SITE.url}/book`,
        }
      : undefined,
  },
  openGraph: {
    title: copy.metaTitle,
    description: copy.metaDescription,
    url: `${SITE.url}/book`,
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

export default function BookPage() {
  return <BookPageBody locale="en" />;
}
