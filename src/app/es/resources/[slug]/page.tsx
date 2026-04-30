import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE } from "@/lib/constants";
import { getResource, RESOURCE_SLUGS } from "@/lib/resources";
import { SPANISH_ENABLED } from "@/lib/i18n";
import { UI, interpolate } from "@/lib/translations/ui";
import { ResourceDetailBody } from "@/components/page-bodies/ResourceDetailBody";

export function generateStaticParams() {
  return RESOURCE_SLUGS.map((slug) => ({ slug }));
}

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const r = getResource(slug, "es");
  const copy = UI.es.resourceDetail;
  if (!r) return { title: copy.notFoundTitle };

  const title = interpolate(copy.metaTitleTemplate, { title: r.title });

  return {
    title: { absolute: title },
    description: r.description,
    alternates: {
      canonical: `${SITE.url}/es/resources/${slug}`,
      languages: {
        "en-US": `${SITE.url}/resources/${slug}`,
        "es-US": `${SITE.url}/es/resources/${slug}`,
        "x-default": `${SITE.url}/resources/${slug}`,
      },
    },
    openGraph: {
      title: r.title,
      description: r.description,
      url: `${SITE.url}/es/resources/${slug}`,
      siteName: SITE.name,
      locale: "es_US",
      alternateLocale: ["en_US"],
      type: "article",
      publishedTime: r.publishedDate,
    },
    twitter: { card: "summary_large_image", title: r.title, description: r.description },
  };
}

export default async function ResourceArticlePageEs({ params }: { params: Params }) {
  if (!SPANISH_ENABLED) notFound();
  const { slug } = await params;
  return <ResourceDetailBody slug={slug} locale="es" />;
}
