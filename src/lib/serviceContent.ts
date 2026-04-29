/**
 * Per-service rich content for /services/[slug] landing pages.
 * Keys must match SERVICES[].id.
 */

export type ServiceContent = {
  /** Eyebrow above the page H1. */
  eyebrow: string;
  /** Display headline for the service page; rendered as H1. */
  headline: string;
  /** Sub-headline / lede. */
  subhead: string;
  /** Hero photo (local or Unsplash). */
  heroImage: string;
  heroAlt: string;
  /** Short price-range hint shown in the hero (e.g. "$120–$450 typical"). */
  priceCue: string;
  /** Common symptoms / triggers that bring customers in. */
  symptoms: string[];
  /** "Why us" credentials specific to this service. */
  whyUs: string[];
  /** Service-specific FAQ. */
  faqs: Array<{ q: string; a: string }>;
  /** Index in TESTIMONIALS to feature on this page. */
  featuredTestimonialIndex: number;
};

export const SERVICE_CONTENT: Record<string, ServiceContent> = {
  brakes: {
    eyebrow: "Brakes",
    headline: "Brake repair, done right.",
    subhead:
      "Pads, rotors, calipers, fluid, ABS — full brake system service for every common make and model.",
    heroImage:
      "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=1600&q=75&auto=format&fit=crop",
    heroAlt: "Close-up of brake rotor and caliper service",
    priceCue: "Most brake jobs same-day, parts in stock",
    symptoms: [
      "Squealing, grinding, or scraping when you brake",
      "Pulsation or vibration through the pedal at speed",
      "Brake pedal feels soft or sinks to the floor",
      "Vehicle pulls to one side under braking",
      "Dashboard brake or ABS warning light",
      "It's been more than 25–50,000 miles since the last brake service",
    ],
    whyUs: [
      "ASE-Certified technicians inspect the entire system, not just the squeak",
      "Honest assessments — we tell you what your brakes need and what they don't",
      "NAPA Auto Care nationwide warranty: 24 months / 24,000 miles, honored at 17,000+ shops",
      "Most repairs same-day, original-quality parts in stock",
    ],
    faqs: [
      {
        q: "How long does a brake job take?",
        a: "Most pad and rotor jobs run 1–2 hours once the car is on the lift. We'll quote you a window over the phone before you come in.",
      },
      {
        q: "Do I need rotors every time, or can I just replace pads?",
        a: "Depends on rotor condition. If they're within spec and not warped, we resurface or keep them. We won't push rotors you don't need — that's been the rule since 1998.",
      },
      {
        q: "How much does brake service cost?",
        a: "Pad replacement on a typical sedan runs $150–$300 per axle including labor. Rotors add to that. We quote upfront after inspection — no surprises.",
      },
      {
        q: "Are my brakes covered by the NAPA warranty?",
        a: "Yes — qualifying brake parts and labor are covered nationwide for 24 months / 24,000 miles at any of 17,000+ NAPA Auto Care Centers.",
      },
    ],
    featuredTestimonialIndex: 0,
  },

  "oil-change": {
    eyebrow: "Oil change & lube",
    headline: "Oil change, done in under an hour.",
    subhead:
      "Conventional, blend, or full synthetic — we use the right oil and quality filter for your specific vehicle.",
    heroImage:
      "https://images.unsplash.com/photo-1486754735734-325b5831c3ad?w=1600&q=75&auto=format&fit=crop",
    heroAlt: "Engine bay during oil change service",
    priceCue: "Walk-ins welcome, most done in under an hour",
    symptoms: [
      "Sticker on the windshield says you're due (or overdue)",
      "Oil life monitor reads 15% or below",
      "Engine sounds louder or rougher than usual",
      "It's been 5,000–10,000 miles since the last change",
      "You can't remember the last time it was done",
    ],
    whyUs: [
      "We use the right oil grade and filter spec for your vehicle — not whatever's on sale",
      "Top-off all critical fluids (coolant, washer, brake) at no extra charge",
      "Visual inspection of belts, hoses, tires, and brakes while you're up on the lift",
      "Honest reminder for anything that genuinely needs attention — never an upsell",
    ],
    faqs: [
      {
        q: "How often should I change my oil?",
        a: "Depends on the oil and the vehicle. Modern synthetics typically run 7,500–10,000 miles; conventional blends are closer to 3,000–5,000. We'll check your manufacturer's recommendation and the oil-life monitor.",
      },
      {
        q: "Do you do European cars?",
        a: "Yes — we stock the appropriate weights and filters for BMW, Mercedes-Benz, Audi, Volkswagen, Volvo, and most European makes.",
      },
      {
        q: "Synthetic or conventional?",
        a: "Newer engines (2010+) almost always specify synthetic. Older or higher-mileage engines may run fine on a synthetic blend. We'll match what's right for your specific car.",
      },
      {
        q: "Can I wait or do I need to drop off?",
        a: "Most oil changes you can wait for. Coffee's on. If we spot something else that needs attention we'll show you and quote it before any extra work.",
      },
    ],
    featuredTestimonialIndex: 4,
  },

  "engine-diagnostics": {
    eyebrow: "Engine diagnostics",
    headline: "Check engine light? We read it right.",
    subhead:
      "Advanced OBD-II computer diagnostics, manufacturer-specific scan tools, and 28 years of pattern recognition.",
    heroImage:
      "https://images.unsplash.com/photo-1486006920555-c77dcf18193c?w=1600&q=75&auto=format&fit=crop",
    heroAlt: "Mechanic running OBD-II diagnostic scanner",
    priceCue: "Diagnostics typically $100–$150",
    symptoms: [
      "Check engine light is on (solid or flashing)",
      "Engine misfire, hesitation, or rough idle",
      "Loss of power, poor fuel economy, hard starts",
      "Failed Texas state inspection on emissions",
      "Repeated codes that other shops couldn't pin down",
    ],
    whyUs: [
      "We read codes AND interpret what they mean for your specific vehicle",
      "Manufacturer-specific scan tools, not just generic OBD-II readers",
      "We don't guess — we test. Sensor data, fuel trims, freeze-frame analysis",
      "Diagnostic fee credited toward repair if you have us fix it",
    ],
    faqs: [
      {
        q: "Will free code-reading at a parts store tell me what's wrong?",
        a: "It tells you a code, not a diagnosis. A P0420 code, for example, can be a catalytic converter, an O2 sensor, an exhaust leak, or a fuel-mixture problem. Real diagnostics rule out the cheap fixes before recommending the expensive ones.",
      },
      {
        q: "Why does diagnostics cost money?",
        a: "Real diagnosis takes time, manufacturer-specific tools, and decades of experience. We credit the diagnostic fee toward the repair if you authorize the work — so when we find it, you only pay once.",
      },
      {
        q: "My check engine light is flashing — should I keep driving?",
        a: "No. A flashing CEL means an active misfire that can damage the catalytic converter. Pull over, get it towed, and call us at (972) 231-2886.",
      },
      {
        q: "Can you help if I failed Texas state inspection?",
        a: "Yes — emissions diagnostics is one of our specialties. Bring the failure paperwork, we'll diagnose, repair, and re-test.",
      },
    ],
    featuredTestimonialIndex: 0,
  },

  "engine-repair": {
    eyebrow: "Engine repair & replacement",
    headline: "From timing belts to full rebuilds.",
    subhead:
      "ASE-Certified engine work — head gaskets, timing chains, mounts, replacements. Every common make and model, domestic and import.",
    heroImage:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1600&q=75&auto=format&fit=crop",
    heroAlt: "Engine bay during major repair",
    priceCue: "Quotes within 24 hours of inspection",
    symptoms: [
      "Engine knock, tick, or unusual mechanical noise",
      "Coolant or oil leaks, blue/white exhaust smoke",
      "Engine overheating despite a healthy cooling system",
      "Timing belt or chain at recommended replacement interval",
      "Major repair quoted at the dealer that you want a second opinion on",
    ],
    whyUs: [
      "Honest call on rebuild vs. replacement based on the long-term math",
      "Original-quality and OEM parts on engine internals — never bargain-bin",
      "Full ASE certification and decades of combined engine experience",
      "We handle the warranty paperwork on NAPA-covered engine work",
    ],
    faqs: [
      {
        q: "How do I know if I need an engine replacement vs. a repair?",
        a: "Depends on the failure, the mileage, and the cost of the repair vs. the value of the car. We'll quote both options when both are realistic and tell you straight which one makes sense.",
      },
      {
        q: "Do you replace timing belts and chains?",
        a: "Yes — including water pump, tensioners, and idlers as part of the same job when it's the right call. Timing belt failure is catastrophic; we're not the shop that lets you skip the maintenance.",
      },
      {
        q: "How long does an engine replacement take?",
        a: "Typical job runs 3–7 business days depending on parts availability and what else needs to come apart. We give you a firm window after we inspect.",
      },
      {
        q: "Is engine work covered by the NAPA warranty?",
        a: "Qualifying engine repairs and parts are covered for 24 months / 24,000 miles nationwide. Major engine assemblies sometimes carry extended manufacturer warranties — we'll walk you through what applies.",
      },
    ],
    featuredTestimonialIndex: 2,
  },

  transmission: {
    eyebrow: "Transmission service",
    headline: "Fluid, repair, rebuild — done right.",
    subhead:
      "Automatic and manual. From a drain-and-fill to full rebuild. We diagnose what's actually wrong before quoting work.",
    heroImage:
      "https://images.unsplash.com/photo-1523983254932-c7e6571c9d60?w=1600&q=75&auto=format&fit=crop",
    heroAlt: "Underside of a vehicle on a lift, transmission visible",
    priceCue: "Honest diagnosis, no replace-first mentality",
    symptoms: [
      "Slipping or harsh shifts, especially under load",
      "Grinding or whining noise that changes with vehicle speed",
      "Fluid leaks (red, brown, or burnt-smelling)",
      "Check engine light with transmission codes (P07XX series)",
      "It's been 60,000+ miles since the last transmission service",
    ],
    whyUs: [
      "We diagnose before we replace — most transmission issues aren't full failures",
      "Right fluid for your specific transmission (Dexron VI, ATF+4, CVT, DSG, etc.)",
      "Rebuilds when rebuilds make sense; replacements when they don't",
      "NAPA Auto Care warranty backs qualifying transmission work",
    ],
    faqs: [
      {
        q: "How often should I change my transmission fluid?",
        a: "Manufacturer recommendations vary widely — anywhere from 30,000 to 100,000 miles. We'll check your specific spec and the fluid condition, then recommend honestly.",
      },
      {
        q: "Should I rebuild or replace?",
        a: "Depends on the cause of failure, the mileage on the rest of the car, and the cost difference. We quote both when both make sense and tell you which we'd do if it were our car.",
      },
      {
        q: "Do you work on CVT transmissions?",
        a: "Yes — we service CVTs from Nissan, Honda, Subaru, Toyota, and others. They require specific fluid and procedures we follow exactly.",
      },
      {
        q: "Is a transmission flush risky on a high-mileage car?",
        a: "Sometimes. On a vehicle that's never had service and has 150K+ miles, an aggressive flush can dislodge debris and cause issues. We do a careful drain-and-fill in those cases — the conservative play.",
      },
    ],
    featuredTestimonialIndex: 1,
  },

  electrical: {
    eyebrow: "Electrical systems",
    headline: "Starters, alternators, batteries, wiring.",
    subhead:
      "Modern vehicles are computers on wheels. We diagnose and repair every electrical system — sensors, modules, wiring, and the basics.",
    heroImage:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&q=75&auto=format&fit=crop",
    heroAlt: "Engine compartment with electrical components visible",
    priceCue: "Diagnostic fee credited toward repair",
    symptoms: [
      "Vehicle won't start, cranks slow, or clicks repeatedly",
      "Battery dies overnight or after a short period unused",
      "Charging system warning light or flickering interior lights",
      "Power windows, locks, or accessories acting up",
      "Burning electrical smell or visible wiring damage",
    ],
    whyUs: [
      "Tested charging system before we sell you a battery — most batteries die because of charging issues",
      "Modern scan tools that read every module on the bus, not just the engine",
      "Real diagnostic time on intermittent issues — not parts-cannon guessing",
      "Wiring repairs done properly: solder + heat shrink, not crimps",
    ],
    faqs: [
      {
        q: "My battery is dead — do I need a new one?",
        a: "Maybe. We'll load-test the battery AND test the alternator and starter draw. About a third of \"dead battery\" calls are actually charging-system or parasitic-draw problems. New battery without diagnosing the real cause = same problem in two months.",
      },
      {
        q: "How long does a battery last?",
        a: "Texas heat is brutal on batteries. Typical life here is 3–5 years vs. 5–7 in cooler climates. Group-size and CCA matter — we install what your vehicle actually requires.",
      },
      {
        q: "Why do you charge for electrical diagnostics?",
        a: "Electrical problems hide. Tracing a parasitic draw or an intermittent fault takes hours of careful testing. We credit the diagnostic fee toward the repair if you authorize the work.",
      },
      {
        q: "Can you handle aftermarket electrical work?",
        a: "Stereo systems, lighting upgrades, dash cams, etc. — yes, when they're installed properly. We won't touch obvious hack jobs from other shops, but we'll quote a clean re-wire.",
      },
    ],
    featuredTestimonialIndex: 5,
  },

  "state-inspections": {
    eyebrow: "Texas state inspections",
    headline: "State inspections, walk-in.",
    subhead:
      "Authorized Texas state inspection station. Annual safety and emissions inspections, failed-inspection diagnosis, and compliance repairs — all under one roof.",
    heroImage:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1600&q=75&auto=format&fit=crop",
    heroAlt: "Inspection paperwork on clipboard at auto shop",
    priceCue: "$7 safety / $25.50 emissions, walk-in welcome",
    symptoms: [
      "Your inspection is due (registration sticker shows the month)",
      "You just bought a vehicle and need to register it in Texas",
      "You failed inspection elsewhere and need it diagnosed and fixed",
      "Out-of-state move-in vehicle needs Texas inspection",
    ],
    whyUs: [
      "Authorized Texas inspection station — the official sticker is real",
      "Failed inspection? We diagnose AND repair, then re-inspect — no shuttle between shops",
      "Walk-ins welcome any weekday or Saturday morning",
      "Bilingual staff — paperwork explained in English or Spanish",
    ],
    faqs: [
      {
        q: "Do I need an inspection or just registration?",
        a: "Texas requires an annual safety inspection for most vehicles. Emissions inspection applies in DFW, Houston, El Paso, and Austin metro counties. We do both.",
      },
      {
        q: "What does a Texas inspection check?",
        a: "Safety: brakes, lights, horn, tires, wipers, mirrors, glass, seat belts, exhaust. Emissions: OBD-II readiness and gas-cap pressure test. We walk you through any items that don't pass.",
      },
      {
        q: "What happens if I fail?",
        a: "We tell you exactly what failed and quote the repair. After the fix, you get a free re-inspection within 15 days at the same shop. No shuffling between locations.",
      },
      {
        q: "How long does an inspection take?",
        a: "20–40 minutes for most vehicles, walk-in. The coffee's on.",
      },
      {
        q: "Do you do out-of-state vehicle inspections for Texas registration?",
        a: "Yes — VIN verification + safety + emissions all done in one visit. Bring your title and proof of insurance.",
      },
    ],
    featuredTestimonialIndex: 3,
  },
};

/** Slugs that have a dedicated landing page. Drives generateStaticParams. */
export const SERVICE_PAGE_SLUGS = Object.keys(SERVICE_CONTENT);
