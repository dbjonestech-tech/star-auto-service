import type { Locale } from "@/lib/i18n";

/**
 * UI strings for header / footer / forms / common buttons and home-page sections.
 * Long-form page content lives in parallel data files (areas.ts → areas.es.ts, etc.).
 * Spanish is Mexican-Spanish register, plainspoken to match the English brand voice.
 *
 * Tokens like {year}, {years}, {count}, {name}, {address}, {phone} are interpolated
 * by the t() helper at the bottom of this file (or read directly via UI[locale]).
 */

type UIStrings = {
  header: {
    services: string;
    areasServed: string;
    theShop: string;
    more: string;
    contact: string;
    bookService: string;
    reviews: string;
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
    items: string[];
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
    learnMore: string;
    seeAll: string;
  };
  shopStory: {
    eyebrow: string;
    headline: string;
    paragraphs: string[];
    cta: string;
    estLabel: string;
    altShopBays: string;
    altCheckEngineNeon: string;
  };
  shopGallery: {
    eyebrow: string;
    headlineLine1: string;
    headlineLine2: string;
    intro: string;
    storefrontLabel: string;
    storefrontCaption: string;
    estLabel: string;
    mapLabel: string;
    neighborhoodLabel: string;
    neighborhoodCaption: string;
    fixtureLabel: string;
    fixtureHeadline: string;
    fixtureSub: string;
    altStorefront: string;
    altNeighborhoodHome: string;
    altAerial: string;
    mapTitle: string;
  };
  testimonials: {
    eyebrow: string;
    headline: string;
    ratingLabel: string;
    ratingSub: string;
    seeAll: string;
  };
  areasServedSection: {
    eyebrow: string;
    headline: string;
    intro: string;
    citiesLabel: string;
    neighborhoodsLabel: string;
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
    addressLabel: string;
    callLabel: string;
    hoursLabel: string;
    directionsAria: string;
    directionsCTA: string;
    mapTitle: string;
  };
  ctaSection: {
    starLabel: string;
    headlineLine1: string;
    headlineLine2: string;
    sub: string;
    bookCTA: string;
    callCTA: string;
    altShopFront: string;
  };
  servicesIndex: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    headlineLine1: string;
    headlineLine2: string;
    intro: string;
    learnMoreAbout: string;
  };
  serviceDetail: {
    metaTitleTemplate: string;
    metaDescriptionTemplate: string;
    notFoundTitle: string;
    breadcrumbServices: string;
    bookCTA: string;
    callCTA: string;
    whatsIncludedEyebrow: string;
    whatsIncludedHeadline: string;
    whenToBookEyebrow: string;
    whenToBookHeadline: string;
    whenToBookIntro: string;
    whyUsEyebrow: string;
    whyUsHeadline: string;
    faqHeadlineTemplate: string;
    seeAllQuestions: string;
  };
  areaDetail: {
    metaTitleTemplate: string;
    metaDescriptionTemplate: string;
    notFoundTitle: string;
    breadcrumbAreas: string;
    heroEyebrow: string;
    bookCTA: string;
    callCTA: string;
    howWeServeEyebrowTemplate: string;
    howWeServeHeadlineTemplate: string;
    whoWeSeeEyebrowTemplate: string;
    howToFindUsEyebrow: string;
    openInMaps: string;
    topServicesEyebrowTemplate: string;
    topServicesHeadlineTemplate: string;
    seeAllServices: string;
    findUsEyebrow: string;
    mapTitleTemplate: string;
    jsonLdServiceNameTemplate: string;
    jsonLdServiceDescTemplate: string;
    jsonLdAudienceTemplate: string;
    jsonLdCatalogTemplate: string;
  };
  resourcesIndex: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    headlineLine1: string;
    headlineLine2: string;
    intro: string;
    minReadTemplate: string;
  };
  resourceDetail: {
    metaTitleTemplate: string;
    notFoundTitle: string;
    breadcrumbResources: string;
    minReadTemplate: string;
    needDiagnosis: string;
    bookCTA: string;
    callCTA: string;
    keepReadingEyebrow: string;
    keepReadingHeadline: string;
    readArticle: string;
    jsonLdAuthorJobTitle: string;
    dateLocale: string;
  };
  contactForm: {
    headline: string;
    intro: string;
    requiredNote: string;
    leaveEmpty: string;
    fullName: string;
    phoneNumber: string;
    email: string;
    serviceNeeded: string;
    selectService: string;
    somethingElse: string;
    message: string;
    sendMessage: string;
    sending: string;
    errorGeneric: string;
    successHeading: string;
    successBody: string;
  };
  bookForm: {
    headline: string;
    intro: string;
    requiredNote: string;
    leaveEmpty: string;
    fullName: string;
    phone: string;
    email: string;
    vehicleLegend: string;
    yearPlaceholder: string;
    makePlaceholder: string;
    modelPlaceholder: string;
    yearAria: string;
    makeAria: string;
    modelAria: string;
    serviceNeeded: string;
    selectService: string;
    somethingElseBooking: string;
    preferredWindow: string;
    whenWorks: string;
    windowOptions: string[];
    whatsGoingOn: string;
    messagePlaceholder: string;
    requestBooking: string;
    sending: string;
    errorGeneric: string;
  };
  contactPage: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    headlineLine1: string;
    headlineLine2: string;
    intro: string;
    addressLabel: string;
    getDirections: string;
    callLabel: string;
    hoursLabel: string;
    mapTitleTemplate: string;
  };
  bookPage: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    headlineLine1: string;
    headlineLine2: string;
    intro: string;
    orCallNow: string;
    callIntro: string;
    shopHours: string;
    walkIns: string;
    walkInsBody: string;
    visit: string;
    openInMapsAria: string;
  };
  bookConfirmation: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    headlineLine1: string;
    headlineLine2: string;
    intro: string;
    nextSteps: string;
    nextStep1: string;
    nextStep2: string;
    nextStep3: string;
    backToHome: string;
    callShopCTA: string;
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
      eyebrow: "At a glance",
      items: [
        "12 services",
        "{years} years on Belt Line",
        "{rating}★ across {count} reviews",
        "NAPA Auto Care Center",
        "ASE-Certified technicians",
        "Bilingual service",
        "Family-owned since {year}",
        "Texas state inspection station",
      ],
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
      eyebrow: "What we work on",
      headline: "From oil to overhaul.",
      intro:
        "Twelve service categories, every common make and model, domestic and import. If it's on your dashboard or under your hood, we've seen it before, and we know what to do about it.",
      learnMore: "Learn more",
      seeAll: "See all {count} services",
    },
    shopStory: {
      eyebrow: "The shop",
      headline: "A shop that has stayed honest for {years} years.",
      paragraphs: [
        "Miguel Ibarra opened The Star Auto Service in 1998 with one rule: never recommend a repair the car doesn't need. That rule has outlasted every shortcut, every chain shop down the road, and every easy excuse to cut corners.",
        "What started as a small family-owned bay on Belt Line Road has grown into one of Richardson's most trusted auto repair facilities. ASE-Certified technicians. NAPA Auto Care nationwide warranty. Service in English or Spanish, whichever you're more comfortable with.",
        "And the answer to “do I really need this?” is always given straight.",
      ],
      cta: "Read our story",
      estLabel: "Est.",
      altShopBays: "Inside the bays at {name} in Richardson, Texas",
      altCheckEngineNeon: "Check engine neon sign at the shop",
    },
    shopGallery: {
      eyebrow: "On Belt Line, in Richardson",
      headlineLine1: "A fixture on the corner",
      headlineLine2: "since 1998.",
      intro:
        "E Belt Line Road runs east-to-west across Richardson, and we've been on the same corner since '98. Across from the Coin Laundry, between Plano Road and Jupiter. Easy in, easy out.",
      storefrontLabel: "Storefront · 900 E Belt Line Rd",
      storefrontCaption: "Same corner. Same family. Twenty-eight years.",
      estLabel: "Est.",
      mapLabel: "Where we are · The map",
      neighborhoodLabel: "The neighborhood",
      neighborhoodCaption: "Richardson families since '98",
      fixtureLabel: "A fixture on Belt Line",
      fixtureHeadline:
        "Richardson commuters. Plano second-opinions. Garland fleet trucks. Allen carpools.",
      fixtureSub:
        "Twenty-eight years on the corner means a lot of cars and a lot of drivers, and most of them came back.",
      altStorefront: "{name} storefront on E Belt Line Road",
      altNeighborhoodHome: "Richardson neighborhood home with palms",
      altAerial: "Aerial view of Richardson, Texas at golden hour",
      mapTitle: "Map of {name} on E Belt Line Road, Richardson",
    },
    testimonials: {
      eyebrow: "From the people who keep coming back",
      headline: "What customers say.",
      ratingLabel: "Average rating",
      ratingSub: "Across hundreds of reviews from Richardson drivers",
      seeAll: "Read more reviews on Google",
    },
    areasServedSection: {
      eyebrow: "Where we serve",
      headline: "Belt Line, and beyond.",
      intro:
        "Trusted by drivers across north Dallas, plus every Richardson neighborhood from Canyon Creek to Sherrill Park.",
      citiesLabel: "Cities served",
      neighborhoodsLabel: "Richardson neighborhoods",
    },
    homeFaq: {
      eyebrow: "Common questions",
      headline: "Answers, straight up.",
      intro:
        "The questions Richardson drivers ask us most, with the same straight answers we give over the phone.",
      seeAll: "See all questions",
    },
    mapSection: {
      eyebrow: "Visit the shop",
      headline: "Belt Line Road, Richardson.",
      addressLabel: "Address",
      callLabel: "Call the shop",
      hoursLabel: "Hours",
      directionsAria: "Open {address} in Google Maps",
      directionsCTA: "Get directions",
      mapTitle: "Map showing {name} location",
    },
    ctaSection: {
      starLabel: "Schedule a service",
      headlineLine1: "Let's take a look",
      headlineLine2: "at it.",
      sub: "Book online, give us a call, or stop by the shop. Walk-ins are always welcome, and the coffee is on. We'll get you in, get you a straight answer, and get you back on the road.",
      bookCTA: "Book a Service",
      callCTA: "Call {phone}",
      altShopFront: "Front view of The Star Auto Service shop in Richardson, TX",
    },
    servicesIndex: {
      metaTitle: "Auto Repair Services | The Star Auto Service Richardson TX",
      metaDescription:
        "Auto repair services in Richardson, TX. Brakes, oil changes, engine diagnostics, transmission, AC, tires, state inspections. Call (972) 231-2886.",
      eyebrow: "What we work on",
      headlineLine1: "Twelve service",
      headlineLine2: "categories.",
      intro:
        "Domestic and import, gas and hybrid, every common make and model. ASE-Certified technicians. NAPA Auto Care nationwide warranty. Texas state inspections walk-in.",
      learnMoreAbout: "Learn more about {title}",
    },
    serviceDetail: {
      metaTitleTemplate: "{title} in Richardson, TX | The Star Auto Service",
      metaDescriptionTemplate:
        "{subhead} Call (972) 231-2886 or book online, ASE-Certified, NAPA Auto Care nationwide warranty.",
      notFoundTitle: "Service Not Found",
      breadcrumbServices: "Services",
      bookCTA: "Book this service",
      callCTA: "Call {phone}",
      whatsIncludedEyebrow: "What's included",
      whatsIncludedHeadline: "Everything we cover.",
      whenToBookEyebrow: "When to book",
      whenToBookHeadline: "Signs to come in.",
      whenToBookIntro:
        "Any of these sound familiar? Give us a call, we'll talk through what's likely going on before you make the trip.",
      whyUsEyebrow: "Why bring it here",
      whyUsHeadline: "Not the cheapest. The straightest.",
      faqHeadlineTemplate: "{title} FAQ.",
      seeAllQuestions: "See all questions",
    },
    areaDetail: {
      metaTitleTemplate: "Auto Repair in {name}, {state} | The Star Auto Service",
      metaDescriptionTemplate:
        "Trusted auto repair shop serving {name}, {state} drivers, {driveTime} from our shop on E Belt Line Rd in Richardson. ASE-Certified, NAPA Auto Care. Call (972) 231-2886.",
      notFoundTitle: "Area Not Found",
      breadcrumbAreas: "Areas served",
      heroEyebrow: "Auto repair in",
      bookCTA: "Book a service",
      callCTA: "Call {phone}",
      howWeServeEyebrowTemplate: "How we serve {name}",
      howWeServeHeadlineTemplate:
        "{name} drivers come to us for the straight answer.",
      whoWeSeeEyebrowTemplate: "Who we see from {name}",
      howToFindUsEyebrow: "How to find us",
      openInMaps: "Open in Maps →",
      topServicesEyebrowTemplate: "What {name} drivers book most",
      topServicesHeadlineTemplate: "Top services for {name}.",
      seeAllServices: "See all 12 services",
      findUsEyebrow: "Find us",
      mapTitleTemplate:
        "Map showing {shopName} location relative to {name}, {state}",
      jsonLdServiceNameTemplate: "Auto Repair in {name}, {state}",
      jsonLdServiceDescTemplate:
        "ASE-Certified family-owned auto repair serving {name}, {state} drivers from our Belt Line shop in Richardson. {driveTime} away. NAPA Auto Care nationwide warranty, bilingual service.",
      jsonLdAudienceTemplate: "{name}, {state} drivers and families",
      jsonLdCatalogTemplate: "Top auto repair services for {name} drivers",
    },
    resourcesIndex: {
      metaTitle: "Auto Repair Resources & Guides | The Star Auto Service",
      metaDescription:
        "Plain-English guides on check engine lights, brake replacement, oil change frequency, Texas state inspections, and seasonal car care for Richardson, TX drivers.",
      eyebrow: "Resources",
      headlineLine1: "The straight version,",
      headlineLine2: "in writing.",
      intro:
        "Plain-English guides on the questions we hear the most. Written by us, for Richardson drivers.",
      minReadTemplate: "{minutes} min read",
    },
    resourceDetail: {
      metaTitleTemplate: "{title} | The Star Auto Service",
      notFoundTitle: "Article Not Found",
      breadcrumbResources: "Resources",
      minReadTemplate: "{minutes} min read",
      needDiagnosis: "Need a real diagnosis?",
      bookCTA: "Book a service",
      callCTA: "Call {phone}",
      keepReadingEyebrow: "Keep reading",
      keepReadingHeadline: "More from the shop.",
      readArticle: "Read article",
      jsonLdAuthorJobTitle: "Founder, ASE-Certified Master Technician",
      dateLocale: "en-US",
    },
    contactForm: {
      headline: "Send us a message.",
      intro: "We'll write back within one business day. Required fields marked with",
      requiredNote: "*",
      leaveEmpty: "Leave this field empty",
      fullName: "Full name",
      phoneNumber: "Phone number",
      email: "Email",
      serviceNeeded: "Service needed",
      selectService: "Select a service…",
      somethingElse: "Something else",
      message: "Message",
      sendMessage: "Send message",
      sending: "Sending…",
      errorGeneric: "Something went wrong",
      successHeading: "Message sent.",
      successBody:
        "Thanks for reaching out, we'll write back as soon as we can. For anything urgent, please call the shop.",
    },
    bookForm: {
      headline: "Book a service.",
      intro:
        "Tell us about the car and what you need. We'll call back within one business day. Required fields marked with",
      requiredNote: "*",
      leaveEmpty: "Leave this field empty",
      fullName: "Full name",
      phone: "Phone",
      email: "Email",
      vehicleLegend: "Vehicle",
      yearPlaceholder: "Year",
      makePlaceholder: "Make",
      modelPlaceholder: "Model",
      yearAria: "Vehicle year",
      makeAria: "Vehicle make",
      modelAria: "Vehicle model",
      serviceNeeded: "Service needed",
      selectService: "Select a service…",
      somethingElseBooking: "Something else / not sure",
      preferredWindow: "Preferred window",
      whenWorks: "When works best?",
      windowOptions: [
        "As soon as possible",
        "Today / tomorrow",
        "This week",
        "Next week",
        "I'll call to schedule",
      ],
      whatsGoingOn: "What's going on with the car?",
      messagePlaceholder:
        "Symptoms, sounds, warning lights, anything you've already had looked at…",
      requestBooking: "Request a booking",
      sending: "Sending…",
      errorGeneric: "Something went wrong",
    },
    contactPage: {
      metaTitle: "Contact The Star Auto Service | Richardson TX Mechanic",
      metaDescription:
        "Contact The Star Auto Service in Richardson, TX. Call (972) 231-2886 or visit us at 900 E Belt Line Rd. Mon-Fri 8-6:30, Sat 8-4.",
      eyebrow: "Talk to the shop",
      headlineLine1: "Send a message",
      headlineLine2: "or pick up the phone.",
      intro:
        "Calling is fastest. We'll pick up, hear what your car is doing, and get you slotted in. The form below works just as well.",
      addressLabel: "Address",
      getDirections: "Get directions",
      callLabel: "Call the shop",
      hoursLabel: "Hours",
      mapTitleTemplate: "Map showing {name} location",
    },
    bookPage: {
      metaTitle: "Book a Service | The Star Auto Service",
      metaDescription:
        "Schedule auto repair at The Star Auto Service in Richardson, TX. Fill out the booking form or call (972) 231-2886. ASE-Certified, NAPA Auto Care, bilingual service.",
      eyebrow: "Book a service",
      headlineLine1: "Tell us about",
      headlineLine2: "the car.",
      intro:
        "Fill out the form and we'll call you back within one business day. Or call the shop now, fastest way to get on the schedule.",
      orCallNow: "Or call now",
      callIntro:
        "We'll pick up, hear what's going on, and get you slotted in.",
      shopHours: "Shop hours",
      walkIns: "Walk-ins",
      walkInsBody:
        "Always welcome. The bays are open and we'll do our best to get you looked at the same day.",
      visit: "Visit, open in Maps",
      openInMapsAria: "Open {address} in Google Maps",
    },
    bookConfirmation: {
      metaTitle: "Booking Received | The Star Auto Service",
      metaDescription:
        "Your booking request has been received. We'll call you back within one business day to confirm.",
      eyebrow: "Booking received",
      headlineLine1: "Got it.",
      headlineLine2: "We'll call you back.",
      intro:
        "Thanks for the booking request. We'll call you back within one business day at the number you provided to confirm the time and walk through what to expect.",
      nextSteps: "What happens next",
      nextStep1:
        "We review your request and check parts availability for your vehicle.",
      nextStep2:
        "We call you back within one business day to confirm your appointment time and answer any questions.",
      nextStep3:
        "Bring your vehicle in at the confirmed time. The coffee's on.",
      backToHome: "Back to home",
      callShopCTA: "Call (972) 231-2886",
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
      eyebrow: "De un vistazo",
      items: [
        "12 servicios",
        "{years} años en Belt Line",
        "{rating}★ en {count} reseñas",
        "Centro NAPA Auto Care",
        "Técnicos certificados ASE",
        "Servicio bilingüe",
        "Negocio familiar desde {year}",
        "Estación de inspección estatal de Texas",
      ],
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
          body: "Inglés o español, como tú prefieras. La misma familia en la esquina de Belt Line desde 1998. Tu reparación, explicada en tu idioma.",
        },
      ],
    },
    servicesOverview: {
      eyebrow: "En lo que trabajamos",
      headline: "Del cambio de aceite a la reconstrucción.",
      intro:
        "Doce categorías de servicio, todas las marcas y modelos comunes, nacionales e importados. Si está en tu tablero o debajo del cofre, ya lo hemos visto y sabemos qué hacer.",
      learnMore: "Más información",
      seeAll: "Ver los {count} servicios",
    },
    shopStory: {
      eyebrow: "El taller",
      headline: "Un taller que se ha mantenido honesto durante {years} años.",
      paragraphs: [
        "Miguel Ibarra abrió The Star Auto Service en 1998 con una sola regla: nunca recomendar una reparación que el auto no necesite. Esa regla ha sobrevivido a cada atajo, a cada cadena que abrió calle abajo y a cada pretexto fácil para cortar camino.",
        "Lo que empezó como una bahía familiar pequeña sobre Belt Line Road creció hasta convertirse en uno de los talleres más confiables de Richardson. Técnicos certificados ASE. Garantía nacional NAPA Auto Care. Servicio en inglés o español, como tú prefieras.",
        "Y la respuesta a “¿de verdad necesito esto?” siempre se da directo.",
      ],
      cta: "Lee nuestra historia",
      estLabel: "Est.",
      altShopBays: "Dentro de las bahías de {name} en Richardson, Texas",
      altCheckEngineNeon: "Letrero de neón Check Engine en el taller",
    },
    shopGallery: {
      eyebrow: "En Belt Line, en Richardson",
      headlineLine1: "Un punto fijo en la esquina",
      headlineLine2: "desde 1998.",
      intro:
        "E Belt Line Road cruza Richardson de oriente a poniente, y nosotros llevamos en la misma esquina desde el 98. Frente a Coin Laundry, entre Plano Road y Jupiter. Fácil entrar, fácil salir.",
      storefrontLabel: "Fachada · 900 E Belt Line Rd",
      storefrontCaption: "Misma esquina. Misma familia. Veintiocho años.",
      estLabel: "Est.",
      mapLabel: "Dónde estamos · El mapa",
      neighborhoodLabel: "El vecindario",
      neighborhoodCaption: "Familias de Richardson desde el 98",
      fixtureLabel: "Un punto fijo en Belt Line",
      fixtureHeadline:
        "Conductores de Richardson. Segundas opiniones de Plano. Camiones de flota de Garland. Carpools de Allen.",
      fixtureSub:
        "Veintiocho años en la esquina significan muchos autos y muchos conductores, y la mayoría regresaron.",
      altStorefront: "Fachada de {name} sobre E Belt Line Road",
      altNeighborhoodHome: "Casa de vecindario en Richardson con palmeras",
      altAerial: "Vista aérea de Richardson, Texas, al atardecer dorado",
      mapTitle: "Mapa de {name} en E Belt Line Road, Richardson",
    },
    testimonials: {
      eyebrow: "De la gente que sigue regresando",
      headline: "Lo que dicen nuestros clientes.",
      ratingLabel: "Calificación promedio",
      ratingSub: "En cientos de reseñas de conductores de Richardson",
      seeAll: "Lee más reseñas en Google",
    },
    areasServedSection: {
      eyebrow: "Donde atendemos",
      headline: "Belt Line, y más allá.",
      intro:
        "Conductores de todo el norte de Dallas confían en nosotros, además de cada vecindario de Richardson, desde Canyon Creek hasta Sherrill Park.",
      citiesLabel: "Ciudades atendidas",
      neighborhoodsLabel: "Vecindarios de Richardson",
    },
    homeFaq: {
      eyebrow: "Preguntas frecuentes",
      headline: "Respuestas, sin rodeos.",
      intro:
        "Las preguntas que más nos hacen los conductores de Richardson, con las mismas respuestas directas que damos por teléfono.",
      seeAll: "Ver todas las preguntas",
    },
    mapSection: {
      eyebrow: "Visita el taller",
      headline: "Belt Line Road, Richardson.",
      addressLabel: "Dirección",
      callLabel: "Llama al taller",
      hoursLabel: "Horario",
      directionsAria: "Abre {address} en Google Maps",
      directionsCTA: "Cómo llegar",
      mapTitle: "Mapa que muestra la ubicación de {name}",
    },
    ctaSection: {
      starLabel: "Agenda un servicio",
      headlineLine1: "Le damos",
      headlineLine2: "una revisada.",
      sub: "Agenda en línea, llámanos o pasa por el taller. Aceptamos clientes sin cita y el café está listo. Te recibimos, te damos una respuesta directa y te ponemos de nuevo en la carretera.",
      bookCTA: "Agendar servicio",
      callCTA: "Llama al {phone}",
      altShopFront: "Vista frontal del taller The Star Auto Service en Richardson, TX",
    },
    servicesIndex: {
      metaTitle:
        "Servicios de reparación automotriz | The Star Auto Service Richardson TX",
      metaDescription:
        "Servicios de reparación automotriz en Richardson, TX. Frenos, cambios de aceite, diagnóstico de motor, transmisión, A/C, llantas, verificación estatal. Llama al (972) 231-2886.",
      eyebrow: "En lo que trabajamos",
      headlineLine1: "Doce categorías",
      headlineLine2: "de servicio.",
      intro:
        "Nacionales e importados, gasolina e híbridos, cada marca y modelo común. Técnicos certificados ASE. Garantía nacional NAPA Auto Care. Verificación estatal de Texas, sin cita.",
      learnMoreAbout: "Más información sobre {title}",
    },
    serviceDetail: {
      metaTitleTemplate: "{title} en Richardson, TX | The Star Auto Service",
      metaDescriptionTemplate:
        "{subhead} Llama al (972) 231-2886 o agenda en línea. Certificación ASE, garantía nacional NAPA Auto Care.",
      notFoundTitle: "Servicio no encontrado",
      breadcrumbServices: "Servicios",
      bookCTA: "Agendar este servicio",
      callCTA: "Llama al {phone}",
      whatsIncludedEyebrow: "Qué se incluye",
      whatsIncludedHeadline: "Todo lo que cubrimos.",
      whenToBookEyebrow: "Cuándo agendar",
      whenToBookHeadline: "Señales para venir.",
      whenToBookIntro:
        "¿Algo de esto te suena? Llámanos, platicamos qué probablemente está pasando antes de que hagas el viaje.",
      whyUsEyebrow: "Por qué traerlo aquí",
      whyUsHeadline: "No el más barato. El más directo.",
      faqHeadlineTemplate: "Preguntas frecuentes de {title}.",
      seeAllQuestions: "Ver todas las preguntas",
    },
    areaDetail: {
      metaTitleTemplate:
        "Reparación automotriz en {name}, {state} | The Star Auto Service",
      metaDescriptionTemplate:
        "Taller de confianza atendiendo a conductores de {name}, {state}, a {driveTime} de nuestro taller en E Belt Line Rd en Richardson. Certificación ASE, NAPA Auto Care. Llama al (972) 231-2886.",
      notFoundTitle: "Zona no encontrada",
      breadcrumbAreas: "Zonas atendidas",
      heroEyebrow: "Reparación automotriz en",
      bookCTA: "Agendar servicio",
      callCTA: "Llama al {phone}",
      howWeServeEyebrowTemplate: "Cómo atendemos a {name}",
      howWeServeHeadlineTemplate:
        "Los conductores de {name} vienen con nosotros por la respuesta directa.",
      whoWeSeeEyebrowTemplate: "A quién atendemos de {name}",
      howToFindUsEyebrow: "Cómo encontrarnos",
      openInMaps: "Abrir en Maps →",
      topServicesEyebrowTemplate: "Lo que más agendan los conductores de {name}",
      topServicesHeadlineTemplate: "Servicios principales para {name}.",
      seeAllServices: "Ver los 12 servicios",
      findUsEyebrow: "Encuéntranos",
      mapTitleTemplate:
        "Mapa que muestra la ubicación de {shopName} en relación con {name}, {state}",
      jsonLdServiceNameTemplate: "Reparación automotriz en {name}, {state}",
      jsonLdServiceDescTemplate:
        "Taller familiar con certificación ASE atendiendo a conductores de {name}, {state} desde nuestro taller en Belt Line en Richardson. A {driveTime} de distancia. Garantía nacional NAPA Auto Care, servicio bilingüe.",
      jsonLdAudienceTemplate: "Conductores y familias de {name}, {state}",
      jsonLdCatalogTemplate:
        "Servicios principales de reparación automotriz para conductores de {name}",
    },
    resourcesIndex: {
      metaTitle:
        "Recursos y guías de reparación automotriz | The Star Auto Service",
      metaDescription:
        "Guías claras sobre la luz de check engine, cambio de frenos, frecuencia de cambio de aceite, verificación estatal de Texas y cuidado del auto por temporada para conductores en Richardson, TX.",
      eyebrow: "Recursos",
      headlineLine1: "La versión directa,",
      headlineLine2: "por escrito.",
      intro:
        "Guías claras sobre las preguntas que más nos hacen. Escritas por nosotros, para conductores de Richardson.",
      minReadTemplate: "{minutes} min de lectura",
    },
    resourceDetail: {
      metaTitleTemplate: "{title} | The Star Auto Service",
      notFoundTitle: "Artículo no encontrado",
      breadcrumbResources: "Recursos",
      minReadTemplate: "{minutes} min de lectura",
      needDiagnosis: "¿Necesitas un diagnóstico real?",
      bookCTA: "Agendar servicio",
      callCTA: "Llama al {phone}",
      keepReadingEyebrow: "Sigue leyendo",
      keepReadingHeadline: "Más del taller.",
      readArticle: "Leer artículo",
      jsonLdAuthorJobTitle: "Fundador, técnico maestro certificado ASE",
      dateLocale: "es-MX",
    },
    contactForm: {
      headline: "Mándanos un mensaje.",
      intro: "Te contestamos en un día hábil. Los campos obligatorios están marcados con",
      requiredNote: "*",
      leaveEmpty: "Deja este campo vacío",
      fullName: "Nombre completo",
      phoneNumber: "Número de teléfono",
      email: "Correo",
      serviceNeeded: "Servicio que necesitas",
      selectService: "Elige un servicio…",
      somethingElse: "Otra cosa",
      message: "Mensaje",
      sendMessage: "Enviar mensaje",
      sending: "Enviando…",
      errorGeneric: "Algo salió mal",
      successHeading: "Mensaje enviado.",
      successBody:
        "Gracias por escribirnos, te contestamos en cuanto podamos. Para algo urgente, por favor llama al taller.",
    },
    bookForm: {
      headline: "Agendar servicio.",
      intro:
        "Cuéntanos del auto y lo que necesitas. Te llamamos en un día hábil. Los campos obligatorios están marcados con",
      requiredNote: "*",
      leaveEmpty: "Deja este campo vacío",
      fullName: "Nombre completo",
      phone: "Teléfono",
      email: "Correo",
      vehicleLegend: "Vehículo",
      yearPlaceholder: "Año",
      makePlaceholder: "Marca",
      modelPlaceholder: "Modelo",
      yearAria: "Año del vehículo",
      makeAria: "Marca del vehículo",
      modelAria: "Modelo del vehículo",
      serviceNeeded: "Servicio que necesitas",
      selectService: "Elige un servicio…",
      somethingElseBooking: "Otra cosa / no estoy seguro",
      preferredWindow: "Horario preferido",
      whenWorks: "¿Cuándo te queda mejor?",
      windowOptions: [
        "Lo antes posible",
        "Hoy o mañana",
        "Esta semana",
        "La próxima semana",
        "Yo llamo para agendar",
      ],
      whatsGoingOn: "¿Qué le pasa al auto?",
      messagePlaceholder:
        "Síntomas, ruidos, focos de advertencia, lo que ya hayas mandado revisar…",
      requestBooking: "Solicitar cita",
      sending: "Enviando…",
      errorGeneric: "Algo salió mal",
    },
    contactPage: {
      metaTitle:
        "Contacta a The Star Auto Service | Mecánico en Richardson TX",
      metaDescription:
        "Contacta a The Star Auto Service en Richardson, TX. Llama al (972) 231-2886 o visítanos en 900 E Belt Line Rd. Lun-Vie 8-6:30, Sáb 8-4.",
      eyebrow: "Habla con el taller",
      headlineLine1: "Mándanos un mensaje",
      headlineLine2: "o levanta el teléfono.",
      intro:
        "Llamar es lo más rápido. Contestamos, escuchamos qué le pasa a tu auto y te metemos en la agenda. El formulario también funciona igual de bien.",
      addressLabel: "Dirección",
      getDirections: "Cómo llegar",
      callLabel: "Llama al taller",
      hoursLabel: "Horario",
      mapTitleTemplate: "Mapa que muestra la ubicación de {name}",
    },
    bookPage: {
      metaTitle: "Agendar servicio | The Star Auto Service",
      metaDescription:
        "Agenda reparación automotriz en The Star Auto Service en Richardson, TX. Llena el formulario o llama al (972) 231-2886. Certificación ASE, NAPA Auto Care, servicio bilingüe.",
      eyebrow: "Agendar servicio",
      headlineLine1: "Cuéntanos",
      headlineLine2: "del auto.",
      intro:
        "Llena el formulario y te devolvemos la llamada en un día hábil. O llama al taller ahora mismo, es la forma más rápida de entrar en agenda.",
      orCallNow: "O llama ahora",
      callIntro:
        "Contestamos, escuchamos qué pasa y te metemos en la agenda.",
      shopHours: "Horario del taller",
      walkIns: "Sin cita",
      walkInsBody:
        "Siempre bienvenidos. Las bahías están abiertas y hacemos lo posible por revisarte el mismo día.",
      visit: "Visítanos, abrir en Maps",
      openInMapsAria: "Abrir {address} en Google Maps",
    },
    bookConfirmation: {
      metaTitle: "Solicitud recibida | The Star Auto Service",
      metaDescription:
        "Recibimos tu solicitud de cita. Te devolvemos la llamada en un día hábil para confirmar.",
      eyebrow: "Solicitud recibida",
      headlineLine1: "Listo.",
      headlineLine2: "Te llamamos pronto.",
      intro:
        "Gracias por la solicitud de cita. Te devolvemos la llamada en un día hábil al número que nos dejaste para confirmar la hora y platicar qué esperar.",
      nextSteps: "Qué sigue",
      nextStep1:
        "Revisamos tu solicitud y verificamos disponibilidad de refacciones para tu vehículo.",
      nextStep2:
        "Te devolvemos la llamada en un día hábil para confirmar la hora y resolver cualquier duda.",
      nextStep3:
        "Trae tu vehículo a la hora confirmada. El café está listo.",
      backToHome: "Volver al inicio",
      callShopCTA: "Llama al (972) 231-2886",
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

/** Helper for tokens that appear in many places (years, year, count, rating, name, phone). */
export function interpolate(template: string, vars: Record<string, string | number>): string {
  let str = template;
  for (const [k, v] of Object.entries(vars)) {
    str = str.replace(new RegExp(`\\{${k}\\}`, "g"), String(v));
  }
  return str;
}
