export const SITE = {
  name: "The Star Auto Service",
  tagline: "Expert Auto Repair with Integrity",
  description:
    "Family-owned and ASE-certified auto repair shop serving Richardson, TX since 1998. Honest assessments, quality repairs, bilingual service.",
  address: {
    street: "900 E Belt Line Rd",
    city: "Richardson",
    state: "TX",
    zip: "75081",
    full: "900 E Belt Line Rd, Richardson, TX 75081",
  },
  phone: "(972) 231-2886",
  phoneRaw: "9722312886",
  email: "info@thestarautoservice.com",
  url: "https://thestarautoservice.com",
  established: 1998,
  coordinates: { lat: 32.9537, lng: -96.7297 },
  hours: {
    weekday: "8:00 AM – 6:30 PM",
    saturday: "8:00 AM – 4:00 PM",
    sunday: "Closed",
  },
  social: {
    instagram: "https://www.instagram.com/thestarautoservice/",
  },
} as const;

export type Service = {
  id: string;
  title: string;
  icon: string;
  description: string;
  features: string[];
};

export const SERVICES: Service[] = [
  {
    id: "brakes",
    title: "Brakes",
    icon: "Disc",
    description:
      "Complete brake system inspection, repair, and replacement. Pads, rotors, calipers, and brake fluid service.",
    features: [
      "Brake pad replacement",
      "Rotor resurfacing & replacement",
      "Brake fluid flush",
      "Caliper service",
      "ABS diagnostics",
    ],
  },
  {
    id: "oil-change",
    title: "Oil Change & Lube",
    icon: "Droplets",
    description:
      "Keep your engine running smooth with regular oil changes using quality filters and the right oil for your vehicle.",
    features: [
      "Conventional oil change",
      "Synthetic blend oil change",
      "Full synthetic oil change",
      "Filter replacement",
      "Fluid top-off",
    ],
  },
  {
    id: "engine-diagnostics",
    title: "Engine Diagnostics",
    icon: "ScanLine",
    description:
      "Advanced computer diagnostics to pinpoint check engine lights, performance issues, and electrical problems.",
    features: [
      "Check engine light diagnosis",
      "Computer code scanning",
      "Performance troubleshooting",
      "Sensor testing",
      "Emissions diagnostics",
    ],
  },
  {
    id: "engine-repair",
    title: "Engine Repair & Replacement",
    icon: "Cog",
    description:
      "From minor repairs to complete engine replacement, our ASE-certified technicians handle it all.",
    features: [
      "Engine rebuild",
      "Engine replacement",
      "Timing belt/chain",
      "Head gasket repair",
      "Engine mount replacement",
    ],
  },
  {
    id: "transmission",
    title: "Transmission Service",
    icon: "Settings",
    description:
      "Complete transmission care including fluid changes, repairs, and rebuilds for automatic and manual transmissions.",
    features: [
      "Transmission fluid change",
      "Transmission repair",
      "Clutch replacement",
      "Torque converter service",
      "Transmission rebuild",
    ],
  },
  {
    id: "electrical",
    title: "Electrical Systems",
    icon: "Zap",
    description:
      "Diagnosis and repair of all vehicle electrical systems including starters, alternators, and wiring.",
    features: [
      "Battery testing & replacement",
      "Alternator repair",
      "Starter replacement",
      "Wiring repair",
      "Electrical diagnostics",
    ],
  },
  {
    id: "hvac",
    title: "HVAC / AC Repair",
    icon: "Thermometer",
    description:
      "Stay comfortable year-round with complete heating and air conditioning system service.",
    features: [
      "AC recharge",
      "Compressor replacement",
      "Heater core repair",
      "Refrigerant leak detection",
      "Climate control diagnostics",
    ],
  },
  {
    id: "tires",
    title: "Tire Service",
    icon: "Circle",
    description:
      "Tire rotation, balancing, repair, and replacement to keep you safe on the road.",
    features: [
      "Tire rotation",
      "Wheel balancing",
      "Flat tire repair",
      "Tire replacement",
      "TPMS service",
    ],
  },
  {
    id: "state-inspections",
    title: "State Inspections",
    icon: "ClipboardCheck",
    description:
      "Quick and convenient Texas state inspections and emissions testing.",
    features: [
      "Annual safety inspection",
      "Emissions testing",
      "Failed inspection diagnosis",
      "Compliance repairs",
    ],
  },
  {
    id: "cooling-system",
    title: "Cooling System",
    icon: "Fan",
    description:
      "Radiator service, coolant flush, thermostat replacement, and cooling system repair.",
    features: [
      "Coolant flush",
      "Radiator repair",
      "Thermostat replacement",
      "Water pump service",
      "Hose replacement",
    ],
  },
  {
    id: "fuel-injection",
    title: "Fuel Injection",
    icon: "Fuel",
    description:
      "Fuel injector cleaning and service to restore performance and fuel efficiency.",
    features: [
      "Fuel injector cleaning",
      "Fuel filter replacement",
      "Fuel pump service",
      "Throttle body cleaning",
    ],
  },
  {
    id: "battery",
    title: "Battery Service",
    icon: "BatteryFull",
    description:
      "Complete battery testing, charging system diagnostics, and battery replacement.",
    features: [
      "Battery load testing",
      "Battery replacement",
      "Charging system check",
      "Terminal cleaning",
      "Cable replacement",
    ],
  },
];

export type Testimonial = {
  quote: string;
  author: string;
  vehicle: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Quickly diagnosed and repaired my vehicle for a very reasonable price. They aired my tires up without me asking. That may not be a big deal to some, but it meant a lot to me and demonstrated their concern for details.",
    author: "Robert M.",
    vehicle: "2015 Honda Civic",
  },
  {
    quote:
      "This company has helped maintain my two different cars for 6 years. I have found the work completed at Star Auto to be of the highest quality at a reasonable cost.",
    author: "Patricia L.",
    vehicle: "2013 Chrysler Town & Country",
  },
  {
    quote:
      "The guys are the best in town. You can count on them when it comes to honesty, quality, expertise, and timely service. Better than the dealerships.",
    author: "James W.",
    vehicle: "2013 RAM 1500",
  },
  {
    quote:
      "I really enjoy doing business with The Star Auto Service. Service was done promptly and well. I appreciate them for the employees, quality work, and fair prices.",
    author: "Linda K.",
    vehicle: "2010 Nissan Altima",
  },
  {
    quote:
      "Star Auto service is fantastic. Great job — very prompt and courteous.",
    author: "Michael T.",
    vehicle: "2016 Chevrolet Traverse",
  },
  {
    quote: "Service was quick and everything was replaced as needed.",
    author: "Sarah D.",
    vehicle: "2017 Chevrolet Silverado",
  },
];

export type ValueProp = {
  title: string;
  description: string;
  icon: string;
};

export const VALUE_PROPS: ValueProp[] = [
  {
    title: "Family-Owned Since 1998",
    description:
      "Over 25 years of trusted service in Richardson. We're not a chain — we're your neighbors.",
    icon: "Heart",
  },
  {
    title: "ASE Certified Technicians",
    description:
      "Our mechanics hold ASE certifications with decades of combined experience on domestic and import vehicles.",
    icon: "Award",
  },
  {
    title: "Fair & Transparent Pricing",
    description:
      "Honest assessments and upfront quotes. No surprises, no unnecessary repairs — just straight talk.",
    icon: "DollarSign",
  },
  {
    title: "Bilingual Service",
    description:
      "Fluent English and Spanish speaking staff. Communication without barriers.",
    icon: "Languages",
  },
  {
    title: "We Treat Every Car Like Our Own",
    description:
      "From courtesy rides to going the extra mile, we genuinely care about you and your vehicle.",
    icon: "ShieldCheck",
  },
  {
    title: "Community Roots",
    description:
      "Deep roots in Richardson with a long-standing commitment to our community. Your neighborhood mechanics.",
    icon: "MapPin",
  },
];

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;
