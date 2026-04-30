import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Calendar, Phone, Clock } from "lucide-react";
import { SITE } from "@/lib/constants";
import { getResource, getResources, type ResourceSection } from "@/lib/resources";
import type { Locale } from "@/lib/i18n";
import { localizedPath, LOCALE_BCP47 } from "@/lib/i18n";
import { UI, interpolate } from "@/lib/translations/ui";
import { generateBreadcrumbJsonLd } from "@/lib/metadata";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/ui/JsonLd";

type Props = { slug: string; locale: Locale };

function renderSection(s: ResourceSection, i: number) {
  switch (s.type) {
    case "h2":
      return (
        <h2
          key={i}
          className="mt-12 mb-5 font-sans font-black text-2xl md:text-3xl text-ink tracking-tight leading-tight"
        >
          {s.text}
        </h2>
      );
    case "p":
      return (
        <p key={i} className="text-base md:text-lg text-graphite leading-relaxed font-medium">
          {s.text}
        </p>
      );
    case "ul":
      return (
        <ul key={i} className="space-y-3 my-6">
          {s.items.map((item, j) => (
            <li
              key={j}
              className="flex items-start gap-3 text-base md:text-lg text-graphite leading-relaxed font-medium"
            >
              <span aria-hidden="true" className="w-1.5 h-1.5 bg-gold rounded-full shrink-0 mt-3" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol key={i} className="space-y-3 my-6">
          {s.items.map((item, j) => (
            <li
              key={j}
              className="flex items-start gap-4 text-base md:text-lg text-graphite leading-relaxed font-medium"
            >
              <span className="font-sans font-black text-base text-gold-deep tabular-nums leading-none mt-1 shrink-0 w-6">
                {String(j + 1).padStart(2, "0")}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ol>
      );
    case "callout":
      return (
        <aside
          key={i}
          className="my-10 relative bg-surface border border-line p-7 md:p-8 shadow-card"
        >
          <div className="absolute top-0 left-7 right-7 h-0.5 bg-gold" aria-hidden="true" />
          <p className="text-[11px] uppercase tracking-[0.18em] font-bold text-gold-deep mb-3">
            {s.title}
          </p>
          <p className="text-base md:text-lg text-ink leading-relaxed font-medium">{s.body}</p>
        </aside>
      );
  }
}

/** Per-article body. Locale-aware. */
export function ResourceDetailBody({ slug, locale }: Props) {
  const r = getResource(slug, locale);
  if (!r) notFound();

  const copy = UI[locale].resourceDetail;
  const commonCopy = UI[locale].common;
  const all = getResources(locale);
  const related = r.related
    .map((s) => all.find((x) => x.slug === s))
    .filter((x): x is NonNullable<typeof x> => Boolean(x));

  const homePath = locale === "es" ? `${SITE.url}/es` : SITE.url;
  const articlePath = `${SITE.url}${localizedPath(`/resources/${slug}`, locale)}`;
  const breadcrumbs = generateBreadcrumbJsonLd([
    { name: commonCopy.breadcrumbHome, url: homePath },
    {
      name: copy.breadcrumbResources,
      url: `${SITE.url}${localizedPath("/resources", locale)}`,
    },
    { name: r.title, url: articlePath },
  ]);

  const articleBody = [
    r.lede,
    ...r.sections.flatMap((s) => {
      if (s.type === "p") return [s.text];
      if (s.type === "h2") return [s.text];
      if (s.type === "ul" || s.type === "ol") return s.items;
      if (s.type === "callout") return [`${s.title}. ${s.body}`];
      return [];
    }),
  ].join(" ");

  const wordCount = articleBody.trim().split(/\s+/).length;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${SITE.url}/resources/${slug}#article`,
    headline: r.title,
    description: r.description,
    image: r.heroImage.startsWith("/") ? `${SITE.url}${r.heroImage}` : r.heroImage,
    datePublished: r.publishedDate,
    dateModified: r.publishedDate,
    articleSection: r.category,
    keywords: Array.from(
      new Set([
        r.category,
        r.eyebrow,
        locale === "es"
          ? "reparación automotriz Richardson TX"
          : "auto repair Richardson TX",
        "The Star Auto Service",
      ]),
    ).join(", "),
    wordCount,
    inLanguage: LOCALE_BCP47[locale],
    isAccessibleForFree: true,
    publisher: { "@id": `${SITE.url}/#business` },
    author: {
      "@type": "Person",
      name: "Miguel Ibarra",
      jobTitle: copy.jsonLdAuthorJobTitle,
      worksFor: { "@id": `${SITE.url}/#business` },
      url: `${SITE.url}${localizedPath("/about", locale)}`,
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": articlePath },
    about: { "@id": `${SITE.url}/#business` },
  };

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <JsonLd data={articleJsonLd} />

      <section className="relative bg-ink overflow-hidden">
        <Image
          src={r.heroImage}
          alt={r.heroAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/70 to-ink/40" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink/85 to-transparent" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] font-bold text-cream/70">
              <li>
                <Link
                  href={localizedPath("/", locale)}
                  className="hover:text-gold transition-colors"
                >
                  {commonCopy.breadcrumbHome}
                </Link>
              </li>
              <li aria-hidden="true" className="text-cream/40">/</li>
              <li>
                <Link
                  href={localizedPath("/resources", locale)}
                  className="hover:text-gold transition-colors"
                >
                  {copy.breadcrumbResources}
                </Link>
              </li>
              <li aria-hidden="true" className="text-cream/40">/</li>
              <li className="text-gold">{r.category}</li>
            </ol>
          </nav>

          <Eyebrow light>{r.eyebrow}</Eyebrow>
          <h1 className="mt-5 font-sans font-black text-cream text-display-2 tracking-[-0.022em] leading-[1.05]">
            {r.title}
          </h1>

          <div className="mt-8 flex items-center gap-5 text-[11px] uppercase tracking-[0.18em] font-bold text-cream/85">
            <span className="inline-flex items-center gap-2">
              <Clock size={13} strokeWidth={2.5} className="text-gold" aria-hidden="true" />
              {interpolate(copy.minReadTemplate, { minutes: r.readMinutes })}
            </span>
            <span aria-hidden="true" className="text-cream/30">·</span>
            <time dateTime={r.publishedDate}>
              {new Date(r.publishedDate).toLocaleDateString(copy.dateLocale, {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-lg md:text-xl text-ink leading-relaxed font-medium">
              {r.lede}
            </p>
            <article className="mt-2">
              {r.sections.map((s, i) => renderSection(s, i))}
            </article>
          </Reveal>

          <div className="mt-16 pt-12 border-t border-line flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:justify-between">
            <p className="text-[11px] uppercase tracking-[0.18em] font-bold text-graphite">
              {copy.needDiagnosis}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href={localizedPath("/book", locale)}
                className="inline-flex items-center gap-2 bg-gold text-ink hover:bg-gold-soft px-6 py-3 text-xs font-extrabold uppercase tracking-[0.16em] transition-colors shadow-gold"
              >
                <Calendar size={13} strokeWidth={2.5} aria-hidden="true" />
                {copy.bookCTA}
              </Link>
              <a
                href={`tel:${SITE.phoneRaw}`}
                className="inline-flex items-center gap-2 border-2 border-ink text-ink hover:bg-ink hover:text-cream px-6 py-3 text-xs font-extrabold uppercase tracking-[0.16em] transition-colors"
              >
                <Phone size={13} strokeWidth={2.5} aria-hidden="true" />
                {interpolate(copy.callCTA, { phone: SITE.phone })}
              </a>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-paper py-20 md:py-28 border-t border-line-subtle">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <Eyebrow>{copy.keepReadingEyebrow}</Eyebrow>
              <h2 className="mt-5 font-sans font-black text-display-3 text-ink tracking-tight leading-tight">
                {copy.keepReadingHeadline}
              </h2>
            </Reveal>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-7">
              {related.map((rr, i) => (
                <Reveal key={rr.slug} delay={i * 0.05}>
                  <Link
                    href={localizedPath(`/resources/${rr.slug}`, locale)}
                    className="group block relative bg-surface border border-line shadow-card hover:shadow-card-lg hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="grid grid-cols-[140px_1fr] sm:grid-cols-[180px_1fr]">
                      <div className="relative aspect-square sm:aspect-[4/5] overflow-hidden bg-ink">
                        <Image
                          src={rr.heroImage}
                          alt={rr.heroAlt}
                          fill
                          sizes="180px"
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                        />
                      </div>
                      <div className="p-5 md:p-7 flex flex-col justify-between">
                        <div>
                          <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-gold-deep">
                            {rr.category}
                          </p>
                          <h3 className="mt-2 font-sans font-black text-base md:text-xl text-ink tracking-tight leading-tight">
                            {rr.title}
                          </h3>
                        </div>
                        <p className="mt-3 inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.18em] font-bold text-royal group-hover:text-royal-deep">
                          {copy.readArticle}
                          <ArrowRight size={12} strokeWidth={2.5} aria-hidden="true" />
                        </p>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
