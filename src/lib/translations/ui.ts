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
