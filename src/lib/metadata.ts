import { SITE, SERVICES, TESTIMONIALS } from "./constants";

const BUSINESS_ID = `${SITE.url}/#business`;
const ORG_ID = `${SITE.url}/#organization`;

const FAQS = [
  {
    q: "Do you do Texas state inspections?",
    a: "Yes. We're a state-authorized inspection station. Walk-ins are welcome Mon–Fri 8:00 AM – 6:30 PM and Saturday 8:00 AM – 4:00 PM.",
  },
  {
    q: "Do you offer same-day brake service?",
    a: "Most brake jobs the same day, provided the parts are in stock. Give us a call with your year, make, and model and we'll confirm before you come in.",
  },
  {
    q: "Is your warranty honored at other NAPA shops?",
    a: "Yes. As a NAPA Auto Care Center, our work is backed by a nationwide 24-month / 24,000-mile peace-of-mind warranty honored at over 17,000 NAPA Auto Care Centers across the country.",
  },
  {
    q: "Do you serve Garland, Plano, Allen, and Dallas drivers?",
    a: "Yes. We're on E Belt Line Road in Richardson and regularly serve drivers from Garland, Plano, Allen, Murphy, and across north Dallas.",
  },
  {
    q: "Do you work on hybrid vehicles?",
    a: "Yes. Our ASE-Certified technicians service hybrid vehicles alongside conventional gas, both domestic and import.",
  },
  {
    q: "Do you give free estimates?",
    a: "Honest assessments and upfront quotes are how we work. Call us, describe what's going on, and we'll talk through what it likely costs before any wrench turns.",
  },
  {
    q: "Do you speak Spanish?",
    a: "Yes. Bilingual service in English and Spanish. Hablamos español.",
  },
  {
    q: "Are walk-ins welcome?",
    a: "Always. Mon–Fri 8:00 AM – 6:30 PM, Saturday 8:00 AM – 4:00 PM.",
  },
];

function autoRepairEntity() {
  return {
    "@type": ["AutoRepair", "LocalBusiness"],
    "@id": BUSINESS_ID,
    name: SITE.name,
    image: [
      `${SITE.url}/assets/shop-day-1.jpg`,
      `${SITE.url}/assets/shop-day-2.jpg`,
      `${SITE.url}/assets/shop-front.jpg`,
    ],
    logo: `${SITE.url}/icon-512.png`,
    url: SITE.url,
    telephone: "+19722312886",
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.state,
      postalCode: SITE.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.coordinates.lat,
      longitude: SITE.coordinates.lng,
    },
    hasMap: `https://www.google.com/maps/place/?q=place_id:${SITE.googlePlaceId}`,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "16:00",
      },
    ],
    priceRange: "$$",
    currenciesAccepted: "USD",
    paymentAccepted: "Cash, Credit Card, Debit Card",
    areaServed: [
      {
        "@type": "City",
        name: "Richardson",
        sameAs: "https://en.wikipedia.org/wiki/Richardson,_Texas",
      },
      { "@type": "City", name: "Garland" },
      { "@type": "City", name: "Plano" },
      { "@type": "City", name: "Dallas" },
      { "@type": "City", name: "Allen" },
      { "@type": "City", name: "Murphy" },
    ],
    founder: { "@type": "Person", name: "Miguel Ibarra" },
    foundingDate: "1998",
    parentOrganization: { "@id": ORG_ID },
    description:
      "Family-owned auto repair shop in Richardson, TX serving the community since 1998. ASE-Certified technicians, NAPA Auto Care Center with nationwide warranty, bilingual service in English and Spanish, every common make and model.",
    knowsLanguage: ["en", "es"],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "136",
      reviewCount: "136",
    },
    review: TESTIMONIALS.map((t) => ({
      "@type": "Review",
      itemReviewed: { "@id": BUSINESS_ID },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: { "@type": "Person", name: t.author },
      reviewBody: t.quote,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Auto Repair Services",
      itemListElement: SERVICES.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.title,
          description: s.description,
          provider: { "@id": BUSINESS_ID },
        },
      })),
    },
    sameAs: [
      "https://www.yelp.com/biz/the-star-auto-service-richardson",
      "https://www.instagram.com/thestarautoservice/",
      "https://nextdoor.com/pages/the-star-auto-service-richardson-tx/",
      "https://www.bbb.org/us/tx/richardson/profile/auto-repair/the-star-auto-service-0875-90928535",
      "https://www.carfax.com/Reviews-The-Star-Auto-Service-Richardson-TX_G2E4P73001",
    ],
  };
}

function organizationEntity() {
  return {
    "@type": "Organization",
    "@id": ORG_ID,
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/icon-512.png`,
    foundingDate: "1998",
    founder: { "@type": "Person", name: "Miguel Ibarra" },
    sameAs: [
      "https://www.instagram.com/thestarautoservice/",
    ],
  };
}

function faqEntity() {
  return {
    "@type": "FAQPage",
    "@id": `${SITE.url}/#faq`,
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
}

/** Sitewide JSON-LD graph: AutoRepair + Organization + FAQPage. Rendered once in the root layout. */
export function generateJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [autoRepairEntity(), organizationEntity(), faqEntity()],
  };
}

export type BreadcrumbItem = { name: string; url: string };

/** Per-page BreadcrumbList JSON-LD. Caller renders this inside the page component. */
export function generateBreadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/** Public so /faq-style pages or callers can render the FAQ data themselves if needed. */
export const FAQ_ITEMS = FAQS;
