import type { Locale } from "@/lib/i18n";

/**
 * UI strings for header / footer / forms / common buttons.
 * Long-form page content lives in parallel data files (areas.ts → areas.es.ts, etc.).
 * Spanish is Mexican-Spanish register, plainspoken to match the English brand voice.
 */

type UIStrings = {
  header: {
    services: string;
    areasServed: string;
    theShop: string;
    more: string;
    contact: string;
    bookService: string;
    reviews: string; // expects "{count}"
    hablamosEspanol: string;
    callShop: string;
    home: string;
    primaryNav: string;
    mobileNav: string;
    openMenu: string;
    closeMenu: string;
    allServicesOverview: string;
  };
  footer: {
    blurb: string;
    visit: string;
    hours: string;
    site: string;
    services: string;
    areasServed: string;
    privacy: string;
    terms: string;
    rightsReserved: string;
    siteBy: string;
    napaAlt: string;
    monFri: string;
    saturday: string;
    sunday: string;
    closed: string;
    aseCertified: string;
    bilingualService: string;
    familyOwned: string;
    theShopLink: string;
    reviewsLink: string;
    resourcesLink: string;
    faqLink: string;
    warrantyLink: string;
    contactLink: string;
    bookServiceLink: string;
    allServicesOverviewLink: string;
  };
  navMenus: {
    services: string;
    areasServed: string;
    moreLabel: string;
    homeBaseLabel: string;
    reviews: string;
    faq: string;
    resourcesGuides: string;
    warranty: string;
  };
  forms: {
    name: string;
    namePlaceholder: string;
    phone: string;
    phonePlaceholder: string;
    email: string;
    emailOptional: string;
    emailPlaceholder: string;
    service: string;
    chooseService: string;
    message: string;
    messagePlaceholder: string;
    submitContact: string;
    submitBooking: string;
    sending: string;
    successContact: string;
    successBooking: string;
    errorGeneric: string;
    vehicleYear: string;
    vehicleMake: string;
    vehicleModel: string;
    preferredWindow: string;
    preferredWindowPlaceholder: string;
    requiredAsterisk: string;
    requiredField: string;
    invalidPhone: string;
    invalidEmail: string;
  };
  cta: {
    bookService: string;
    callNow: string;
    callShop: string;
    getDirections: string;
    seeAllServices: string;
    seeAllAreas: string;
    seeAllResources: string;
    learnMore: string;
    readMore: string;
    secondOpinion: string;
  };
  common: {
    loading: string;
    open: string;
    closedNow: string;
    skipToMain: string;
    backToHome: string;
    breadcrumbHome: string;
  };
  toggle: {
    switchToSpanish: string;
    switchToEnglish: string;
    bannerCopy: string;
    bannerSwitch: string;
    bannerDismiss: string;
    bannerAriaLabel: string;
  };
  hero: {
    eyebrow: string;
    headlineLine1: string;
    headlineLine2: string;
    subhead: string;
    bookCTA: string;
    callPrefix: string;
    altShop: string;
    trustAse: string;
    trustNapa: string;
    trustBilingual: string;
    trustFamily: string;
    trustYearsLabel: string;
  };
  credentialsBar: {
    yearsInRichardson: string;
    sincePrefix: string;
    averageRating: string;
    googleReviews: string;
    aseBig: string;
    certifiedTechnicians: string;
    industryStandard: string;
    napaOfficial: string;
    napaWarrantyTagline: string;
  };
  brandMarquee: {
    eyebrow: string;
  };
  pillars: {
    eyebrow: string;
    headline: string;
    items: { title: string; body: string }[];
  };
  servicesOverview: {
    eyebrow: string;
    headline: string;
    intro: string;
    seeAll: string;
  };
  shopStory: {
    eyebrow: string;
    headline: string;
    paragraphs: string[];
    cta: string;
  };
  shopGallery: {
    eyebrow: string;
    headline: string;
    intro: string;
  };
  testimonials: {
    eyebrow: string;
    headline: string;
    intro: string;
    seeAll: string;
  };
  areasServedSection: {
    eyebrow: string;
    headline: string;
    intro: string;
    seeAll: string;
  };
  homeFaq: {
    eyebrow: string;
    headline: string;
    intro: string;
    seeAll: string;
  };
  mapSection: {
    eyebrow: string;
    headline: string;
    intro: string;
    addressLabel: string;
    hoursLabel: string;
    phoneLabel: string;
    directions: string;
    bookCTA: string;
    callCTA: string;
  };
  ctaSection: {
    eyebrow: string;
    headline: string;
    sub: string;
    bookCTA: string;
    callCTA: string;
  };
};

export const UI: Record<Locale, UIStrings> = {
  en: {
    header: {
      services: "Services",
      areasServed: "Areas served",
      theShop: "The Shop",
      more: "More",
      contact: "Contact",
      bookService: "Book Service",
      reviews: "{count} Reviews",
      hablamosEspanol: "Hablamos Español",
      callShop: "Call the shop",
      home: "Home",
      primaryNav: "Primary",
      mobileNav: "Mobile",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      allServicesOverview: "All services overview",
    },
    footer: {
      blurb:
        "Family-owned auto repair in Richardson, Texas. Honest assessments, quality repairs, and a commitment to your safety. Since 1998.",
      visit: "Visit",
      hours: "Hours",
      site: "Site",
      services: "Services",
      areasServed: "Areas served",
      privacy: "Privacy",
      terms: "Terms",
      rightsReserved: "All rights reserved.",
      siteBy: "Site by",
      napaAlt: "NAPA Auto Care Center",
      monFri: "Mon–Fri",
      saturday: "Saturday",
      sunday: "Sunday",
      closed: "Closed",
      aseCertified: "ASE-Certified",
      bilingualService: "Bilingual Service",
      familyOwned: "Family-Owned",
      theShopLink: "The Shop",
      reviewsLink: "Reviews",
      resourcesLink: "Resources",
      faqLink: "FAQ",
      warrantyLink: "Warranty",
      contactLink: "Contact",
      bookServiceLink: "Book a service",
      allServicesOverviewLink: "All services overview →",
    },
    navMenus: {
      services: "Services",
      areasServed: "Areas served",
      moreLabel: "More",
      homeBaseLabel: "Home base",
      reviews: "Reviews",
      faq: "FAQ",
      resourcesGuides: "Resources & guides",
      warranty: "Warranty",
    },
    forms: {
      name: "Name",
      namePlaceholder: "Your full name",
      phone: "Phone",
      phonePlaceholder: "(972) 555-1234",
      email: "Email",
      emailOptional: "Email (optional)",
      emailPlaceholder: "you@example.com",
      service: "Service",
      chooseService: "Choose a service",
      message: "Message",
      messagePlaceholder: "Tell us what's going on with your vehicle…",
      submitContact: "Send message",
      submitBooking: "Request appointment",
      sending: "Sending…",
      successContact: "Message received. We'll get back to you within one business day.",
      successBooking:
        "Booking request received. We'll confirm your appointment by phone within one business day.",
      errorGeneric: "Something went wrong. Please try again or call us at (972) 231-2886.",
      vehicleYear: "Year",
      vehicleMake: "Make",
      vehicleModel: "Model",
      preferredWindow: "Preferred drop-off window",
      preferredWindowPlaceholder: "e.g. Tuesday morning",
      requiredAsterisk: "*",
      requiredField: "This field is required.",
      invalidPhone: "Please enter a valid phone number.",
      invalidEmail: "Please enter a valid email address.",
    },
    cta: {
      bookService: "Book a service",
      callNow: "Call now",
      callShop: "Call the shop",
      getDirections: "Get directions",
      seeAllServices: "See all services",
      seeAllAreas: "See all areas",
      seeAllResources: "See all guides",
      learnMore: "Learn more",
      readMore: "Read more",
      secondOpinion: "Get a second opinion",
    },
    common: {
      loading: "Loading…",
      open: "Open",
      closedNow: "Closed",
      skipToMain: "Skip to main content",
      backToHome: "Back to home",
      breadcrumbHome: "Home",
    },
    toggle: {
      switchToSpanish: "Switch to Spanish",
      switchToEnglish: "Switch to English",
      bannerCopy: "¿Ver esta página en español?",
      bannerSwitch: "Sí, en español",
      bannerDismiss: "Stay in English",
      bannerAriaLabel: "Spanish language suggestion",
    },
    hero: {
      eyebrow: "Richardson, Texas · Family-Owned Since {year}",
      headlineLine1: "Auto repair in Richardson,",
      headlineLine2: "done right.",
      subhead:
        "ASE-Certified mechanics in Richardson, TX. NAPA Auto Care Center, bilingual service in English and Spanish. {years} years of straight answers, fair pricing, and quality work on every common make and model.",
      bookCTA: "Book a Service",
      callPrefix: "Call",
      altShop:
        "The Star Auto Service shop on East Belt Line Road in Richardson, Texas, family-owned auto repair since 1998",
      trustAse: "ASE-Certified",
      trustNapa: "NAPA Auto Care",
      trustBilingual: "Bilingual Service",
      trustFamily: "Family-Owned",
      trustYearsLabel: "{years} Years in Richardson",
    },
    credentialsBar: {
      yearsInRichardson: "Years in Richardson",
      sincePrefix: "Since {year}",
      averageRating: "Average rating",
      googleReviews: "{count} Google reviews",
      aseBig: "ASE",
      certifiedTechnicians: "Certified technicians",
      industryStandard: "The industry standard",
      napaOfficial: "Official NAPA Auto Care Center",
      napaWarrantyTagline:
        "24-month / 24,000-mile warranty · 17,000+ shops nationwide",
    },
    brandMarquee: {
      eyebrow: "Brands we service",
    },
    pillars: {
      eyebrow: "Why drivers choose us",
      headline: "Three things you can count on, every visit.",
      items: [
        {
          title: "Honest assessments",
          body: "We tell you what your car actually needs, what can wait, and what isn't worth fixing. The diagnostic fee is credited toward repair, so when we find it, you only pay once.",
        },
        {
          title: "Quality work",
          body: "ASE-Certified technicians, NAPA-grade or OEM parts, and a 24-month / 24,000-mile nationwide warranty on qualifying repairs. Done once, done right.",
        },
        {
          title: "Bilingual, family-owned",
          body: "English or Spanish, whichever you're more comfortable with. Same family on the corner of Belt Line since 1998 — your repair, explained in your language.",
        },
      ],
    },
    servicesOverview: {
      eyebrow: "Services",
      headline: "Twelve service categories. One trusted shop.",
      intro:
        "From a Tuesday-afternoon oil change to a head-gasket rebuild, we handle the routine and the complex with the same diagnostic rigor.",
      seeAll: "See all 12 services →",
    },
    shopStory: {
      eyebrow: "Our story",
      headline: "Twenty-eight years on the same corner.",
      paragraphs: [
        "Miguel Ibarra opened the doors at 900 E Belt Line Road in 1998. Same address, same family, same standard.",
        "What started as one bay and a borrowed lift has grown into the auto repair shop North Texas drivers refer their neighbors to — Richardson families, Plano professionals, Garland fleets, and a steady stream of word-of-mouth from customers who've been with us for decades.",
        "The work is the same as it was on day one: diagnose what's actually wrong, fix it the right way, and explain it in plain English (or Spanish) before you authorize a dollar of repair.",
      ],
      cta: "More about the shop →",
    },
    shopGallery: {
      eyebrow: "The shop",
      headline: "Where the work happens.",
      intro:
        "Six bays, two-post and four-post lifts, manufacturer-spec scan tools, and a parking lot full of cars from people who keep coming back.",
    },
    testimonials: {
      eyebrow: "Reviews",
      headline: "What customers say.",
      intro:
        "4.8 stars across 136 verified Google reviews. Here's a small sampling.",
      seeAll: "Read all reviews →",
    },
    areasServedSection: {
      eyebrow: "Areas served",
      headline: "Belt Line, then anywhere within a short drive.",
      intro:
        "Richardson is home base. Garland, Plano, Dallas, Allen, Murphy, Wylie, Sachse, and Lake Highlands drivers make the trip because the math works — honest pricing, real diagnostics, and a NAPA warranty that travels.",
      seeAll: "See all areas →",
    },
    homeFaq: {
      eyebrow: "Common questions",
      headline: "What people ask before booking.",
      intro:
        "Quick answers to the questions we hear most. The full FAQ has more.",
      seeAll: "Full FAQ →",
    },
    mapSection: {
      eyebrow: "Find us",
      headline: "900 E Belt Line Rd, Richardson, TX 75081.",
      intro:
        "Across from Coin Laundry, between Plano Road and Jupiter. Easy in, easy out, walk-ins welcome.",
      addressLabel: "Address",
      hoursLabel: "Hours",
      phoneLabel: "Phone",
      directions: "Get directions",
      bookCTA: "Book a service",
      callCTA: "Call the shop",
    },
    ctaSection: {
      eyebrow: "Ready when you are",
      headline: "Book online or call. We'll take it from there.",
      sub: "Walk-ins welcome Mon–Fri 8 AM – 6:30 PM and Saturdays until 4. Most diagnostics same-day.",
      bookCTA: "Book a service",
      callCTA: "Call (972) 231-2886",
    },
  },
  es: {
    header: {
      services: "Servicios",
      areasServed: "Zonas atendidas",
      theShop: "El Taller",
      more: "Más",
      contact: "Contacto",
      bookService: "Agendar servicio",
      reviews: "{count} reseñas",
      hablamosEspanol: "Hablamos Español",
      callShop: "Llama al taller",
      home: "Inicio",
      primaryNav: "Principal",
      mobileNav: "Móvil",
      openMenu: "Abrir menú",
      closeMenu: "Cerrar menú",
      allServicesOverview: "Ver todos los servicios",
    },
    footer: {
      blurb:
        "Taller familiar de reparación automotriz en Richardson, Texas. Evaluaciones honestas, reparaciones de calidad y compromiso con tu seguridad. Desde 1998.",
      visit: "Visítanos",
      hours: "Horario",
      site: "Sitio",
      services: "Servicios",
      areasServed: "Zonas atendidas",
      privacy: "Privacidad",
      terms: "Términos",
      rightsReserved: "Todos los derechos reservados.",
      siteBy: "Sitio creado por",
      napaAlt: "Centro NAPA Auto Care",
      monFri: "Lun–Vie",
      saturday: "Sábado",
      sunday: "Domingo",
      closed: "Cerrado",
      aseCertified: "Certificación ASE",
      bilingualService: "Servicio bilingüe",
      familyOwned: "Negocio familiar",
      theShopLink: "El Taller",
      reviewsLink: "Reseñas",
      resourcesLink: "Recursos",
      faqLink: "Preguntas frecuentes",
      warrantyLink: "Garantía",
      contactLink: "Contacto",
      bookServiceLink: "Agendar servicio",
      allServicesOverviewLink: "Ver todos los servicios →",
    },
    navMenus: {
      services: "Servicios",
      areasServed: "Zonas atendidas",
      moreLabel: "Más",
      homeBaseLabel: "Sede",
      reviews: "Reseñas",
      faq: "Preguntas frecuentes",
      resourcesGuides: "Recursos y guías",
      warranty: "Garantía",
    },
    forms: {
      name: "Nombre",
      namePlaceholder: "Tu nombre completo",
      phone: "Teléfono",
      phonePlaceholder: "(972) 555-1234",
      email: "Correo",
      emailOptional: "Correo (opcional)",
      emailPlaceholder: "tu@ejemplo.com",
      service: "Servicio",
      chooseService: "Elige un servicio",
      message: "Mensaje",
      messagePlaceholder: "Cuéntanos qué le pasa a tu vehículo…",
      submitContact: "Enviar mensaje",
      submitBooking: "Solicitar cita",
      sending: "Enviando…",
      successContact:
        "Mensaje recibido. Te contactamos en un día hábil.",
      successBooking:
        "Solicitud recibida. Te confirmamos la cita por teléfono dentro de un día hábil.",
      errorGeneric:
        "Algo salió mal. Inténtalo de nuevo o llámanos al (972) 231-2886.",
      vehicleYear: "Año",
      vehicleMake: "Marca",
      vehicleModel: "Modelo",
      preferredWindow: "Horario preferido para dejar el vehículo",
      preferredWindowPlaceholder: "ej. martes por la mañana",
      requiredAsterisk: "*",
      requiredField: "Este campo es obligatorio.",
      invalidPhone: "Ingresa un número de teléfono válido.",
      invalidEmail: "Ingresa un correo electrónico válido.",
    },
    cta: {
      bookService: "Agendar servicio",
      callNow: "Llamar ahora",
      callShop: "Llama al taller",
      getDirections: "Cómo llegar",
      seeAllServices: "Ver todos los servicios",
      seeAllAreas: "Ver todas las zonas",
      seeAllResources: "Ver todas las guías",
      learnMore: "Más información",
      readMore: "Leer más",
      secondOpinion: "Pide una segunda opinión",
    },
    common: {
      loading: "Cargando…",
      open: "Abierto",
      closedNow: "Cerrado",
      skipToMain: "Saltar al contenido principal",
      backToHome: "Volver al inicio",
      breadcrumbHome: "Inicio",
    },
    toggle: {
      switchToSpanish: "Cambiar a español",
      switchToEnglish: "Switch to English",
      bannerCopy: "View this page in English?",
      bannerSwitch: "Yes, in English",
      bannerDismiss: "Quédate en español",
      bannerAriaLabel: "Sugerencia de idioma inglés",
    },
    hero: {
      eyebrow: "Richardson, Texas · Negocio familiar desde {year}",
      headlineLine1: "Reparación automotriz en Richardson,",
      headlineLine2: "bien hecha.",
      subhead:
        "Mecánicos certificados ASE en Richardson, TX. Centro NAPA Auto Care, servicio bilingüe en inglés y español. {years} años de respuestas claras, precios justos y trabajo de calidad en cada marca y modelo.",
      bookCTA: "Agendar servicio",
      callPrefix: "Llama al",
      altShop:
        "El taller The Star Auto Service en East Belt Line Road, Richardson, Texas. Negocio familiar de reparación automotriz desde 1998",
      trustAse: "Certificación ASE",
      trustNapa: "NAPA Auto Care",
      trustBilingual: "Servicio bilingüe",
      trustFamily: "Negocio familiar",
      trustYearsLabel: "{years} años en Richardson",
    },
    credentialsBar: {
      yearsInRichardson: "Años en Richardson",
      sincePrefix: "Desde {year}",
      averageRating: "Calificación promedio",
      googleReviews: "{count} reseñas en Google",
      aseBig: "ASE",
      certifiedTechnicians: "Técnicos certificados",
      industryStandard: "El estándar de la industria",
      napaOfficial: "Centro oficial NAPA Auto Care",
      napaWarrantyTagline:
        "Garantía 24 meses / 24,000 millas · más de 17,000 talleres a nivel nacional",
    },
    brandMarquee: {
      eyebrow: "Marcas que reparamos",
    },
    pillars: {
      eyebrow: "Por qué los conductores nos eligen",
      headline: "Tres cosas que siempre te garantizamos.",
      items: [
        {
          title: "Diagnóstico honesto",
          body: "Te decimos qué necesita realmente tu auto, qué puede esperar y qué no vale la pena reparar. La cuota de diagnóstico se descuenta de la reparación, así que cuando lo encontramos, pagas una sola vez.",
        },
        {
          title: "Trabajo de calidad",
          body: "Técnicos certificados ASE, refacciones nivel NAPA u OEM y garantía nacional de 24 meses / 24,000 millas en reparaciones que califican. Una sola vez, bien hecho.",
        },
        {
          title: "Bilingüe y familiar",
          body: "Inglés o español, como tú prefieras. La misma familia en la esquina de Belt Line desde 1998 — tu reparación, explicada en tu idioma.",
        },
      ],
    },
    servicesOverview: {
      eyebrow: "Servicios",
      headline: "Doce categorías de servicio. Un taller de confianza.",
      intro:
        "Desde un cambio de aceite el martes por la tarde hasta el rectificado de una junta de cabeza, manejamos lo rutinario y lo complejo con el mismo rigor diagnóstico.",
      seeAll: "Ver los 12 servicios →",
    },
    shopStory: {
      eyebrow: "Nuestra historia",
      headline: "Veintiocho años en la misma esquina.",
      paragraphs: [
        "Miguel Ibarra abrió las puertas del 900 E Belt Line Road en 1998. Misma dirección, misma familia, mismo estándar.",
        "Lo que empezó con una bahía y un elevador prestado creció hasta convertirse en el taller que los conductores del Norte de Texas le recomiendan a sus vecinos — familias de Richardson, profesionales de Plano, flotas de Garland y un flujo constante de clientes que llevan décadas con nosotros, traídos por recomendaciones.",
        "El trabajo es el mismo desde el primer día: diagnosticar lo que realmente está mal, repararlo bien y explicártelo en español o inglés claro antes de que autorices un solo dólar de reparación.",
      ],
      cta: "Más sobre el taller →",
    },
    shopGallery: {
      eyebrow: "El taller",
      headline: "Donde se hace el trabajo.",
      intro:
        "Seis bahías, elevadores de dos y cuatro postes, herramientas de escaneo con especificaciones de fábrica y un estacionamiento lleno de autos de gente que sigue regresando.",
    },
    testimonials: {
      eyebrow: "Reseñas",
      headline: "Lo que dicen nuestros clientes.",
      intro:
        "4.8 estrellas en 136 reseñas verificadas de Google. Aquí tienes una muestra.",
      seeAll: "Leer todas las reseñas →",
    },
    areasServedSection: {
      eyebrow: "Zonas atendidas",
      headline: "Belt Line, y todo lo que está cerca.",
      intro:
        "Richardson es nuestra sede. Conductores de Garland, Plano, Dallas, Allen, Murphy, Wylie, Sachse y Lake Highlands hacen el viaje porque las cuentas salen — precios honestos, diagnóstico real y una garantía NAPA que viaja contigo.",
      seeAll: "Ver todas las zonas →",
    },
    homeFaq: {
      eyebrow: "Preguntas frecuentes",
      headline: "Lo que la gente pregunta antes de agendar.",
      intro:
        "Respuestas rápidas a las preguntas que más escuchamos. La sección completa tiene más.",
      seeAll: "Preguntas frecuentes completas →",
    },
    mapSection: {
      eyebrow: "Encuéntranos",
      headline: "900 E Belt Line Rd, Richardson, TX 75081.",
      intro:
        "Frente a Coin Laundry, entre Plano Road y Jupiter. Fácil entrada, fácil salida. Aceptamos clientes sin cita.",
      addressLabel: "Dirección",
      hoursLabel: "Horario",
      phoneLabel: "Teléfono",
      directions: "Cómo llegar",
      bookCTA: "Agendar servicio",
      callCTA: "Llama al taller",
    },
    ctaSection: {
      eyebrow: "Cuando estés listo",
      headline: "Agenda en línea o llámanos. Nosotros nos encargamos.",
      sub: "Atendemos sin cita lunes a viernes 8:00 AM – 6:30 PM y sábados hasta las 4:00 PM. La mayoría de los diagnósticos se hacen el mismo día.",
      bookCTA: "Agendar servicio",
      callCTA: "Llama al (972) 231-2886",
    },
  },
};

/**
 * Read a translation by locale + dot-path key, with optional `{token}` interpolation.
 * Example: t("en", "header.reviews", { count: "136" }) -> "136 Reviews"
 */
export function t(
  locale: Locale,
  path: string,
  vars?: Record<string, string | number>,
): string {
  const segments = path.split(".");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let cursor: any = UI[locale];
  for (const seg of segments) {
    if (cursor == null) break;
    cursor = cursor[seg];
  }
  let str = typeof cursor === "string" ? cursor : path;
  if (vars) {
    for (const [k, v] of Object.entries(vars)) {
      str = str.replace(new RegExp(`\\{${k}\\}`, "g"), String(v));
    }
  }
  return str;
}
