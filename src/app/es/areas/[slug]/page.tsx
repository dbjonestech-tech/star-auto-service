import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE } from "@/lib/constants";
import { getArea, AREA_SLUGS } from "@/lib/areas";
import { SPANISH_ENABLED } from "@/lib/i18n";
import { UI, interpolate } from "@/lib/translations/ui";
import { AreaDetailBody } from "@/components/page-bodies/AreaDetailBody";

export function generateStaticParams() {
  return AREA_SLUGS.map((slug) => ({ slug }));
}

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const area = getArea(slug, "es");
  const copy = UI.es.areaDetail;

  if (!area) return { title: copy.notFoundTitle };

  const title = interpolate(copy.metaTitleTemplate, {
    name: area.name,
    state: area.state,
  });
  const description = interpolate(copy.metaDescriptionTemplate, {
    name: area.name,
    state: area.state,
    driveTime: area.driveTime,
  });

  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: `${SITE.url}/es/areas/${slug}`,
      languages: {
        "en-US": `${SITE.url}/areas/${slug}`,
        "es-US": `${SITE.url}/es/areas/${slug}`,
        "x-default": `${SITE.url}/areas/${slug}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${SITE.url}/es/areas/${slug}`,
      siteName: SITE.name,
      locale: "es_US",
      alternateLocale: ["en_US"],
      type: "article",
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function AreaDetailPageEs({ params }: { params: Params }) {
  if (!SPANISH_ENABLED) notFound();
  const { slug } = await params;
  return <AreaDetailBody slug={slug} locale="es" />;
}
