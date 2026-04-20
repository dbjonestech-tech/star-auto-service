import { SITE } from "./constants";

export function generateJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "@id": `${SITE.url}/#business`,
    name: SITE.name,
    image: `${SITE.url}/opengraph-image`,
    url: SITE.url,
    telephone: "+19722312886",
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
    founder: {
      "@type": "Person",
      name: "Miguel Ibarra",
    },
    foundingDate: "1998",
    description:
      "Family-owned auto repair shop in Richardson, TX serving the community since 1998. ASE-certified technicians specializing in brake repair, engine diagnostics, oil changes, transmission service, AC repair, and state inspections for all domestic and import vehicles. Bilingual service in English and Spanish.",
    knowsLanguage: ["en", "es"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Auto Repair Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Oil Change",
            description: "Full-service oil changes using premium oils and filters",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Brake Repair",
            description: "Complete brake system diagnosis, repair, and replacement",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Engine Diagnostics",
            description: "Advanced diagnostic equipment to identify engine issues",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Transmission Service",
            description: "Transmission repair, rebuild, and maintenance",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AC Repair",
            description:
              "Complete HVAC system service including AC repair and refrigerant recharge",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "State Inspection",
            description: "Texas state vehicle inspection and emissions testing",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Battery Service",
            description: "Battery testing, replacement, and maintenance",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Tire Rotation",
            description: "Tire rotation, pressure check, and visual inspection",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Electrical Diagnostics",
            description: "Advanced diagnostic equipment for electrical system issues",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Engine Replacement",
            description: "Complete engine replacement with warranty-backed parts",
          },
        },
      ],
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
