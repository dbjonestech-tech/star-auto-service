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
    headline: "Brake repair in Richardson, done right.",
    subhead:
      "Pads, rotors, calipers, fluid, ABS, full brake system service for every common make and model.",
    heroImage: "/assets/service-brakes.avif",
    heroAlt: "Brake rotor and caliper service close up",
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
      "Honest assessments, we tell you what your brakes need and what they don't",
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
        a: "Depends on rotor condition. If they're within spec and not warped, we resurface or keep them. We won't push rotors you don't need, that's been the rule since 1998.",
      },
      {
        q: "How much does brake service cost?",
        a: "Pad replacement on a typical sedan runs $150–$300 per axle including labor. Rotors add to that. We quote upfront after inspection, no surprises.",
      },
      {
        q: "Are my brakes covered by the NAPA warranty?",
        a: "Yes. Qualifying brake parts and labor are covered nationwide for 24 months / 24,000 miles at any of 17,000+ NAPA Auto Care Centers.",
      },
    ],
    featuredTestimonialIndex: 0,
  },

  "oil-change": {
    eyebrow: "Oil change & lube",
    headline: "Oil change in Richardson, under an hour.",
    subhead:
      "Conventional, blend, or full synthetic, we use the right oil and quality filter for your specific vehicle.",
    heroImage: "/assets/service-oil-change.avif",
    heroAlt: "Fresh motor oil being poured into the engine",
    priceCue: "Walk-ins welcome, most done in under an hour",
    symptoms: [
      "Sticker on the windshield says you're due (or overdue)",
      "Oil life monitor reads 15% or below",
      "Engine sounds louder or rougher than usual",
      "It's been 5,000–10,000 miles since the last change",
      "You can't remember the last time it was done",
    ],
    whyUs: [
      "We use the right oil grade and filter spec for your vehicle, not whatever's on sale",
      "Top-off all critical fluids (coolant, washer, brake) at no extra charge",
      "Visual inspection of belts, hoses, tires, and brakes while you're up on the lift",
      "Honest reminder for anything that genuinely needs attention, never an upsell",
    ],
    faqs: [
      {
        q: "How often should I change my oil?",
        a: "Depends on the oil and the vehicle. Modern synthetics typically run 7,500–10,000 miles; conventional blends are closer to 3,000–5,000. We'll check your manufacturer's recommendation and the oil-life monitor.",
      },
      {
        q: "Do you do European cars?",
        a: "Yes. We stock the appropriate weights and filters for BMW, Mercedes-Benz, Audi, Volkswagen, Volvo, and most European makes.",
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
    headline: "Engine diagnostics in Richardson, read right.",
    subhead:
      "Advanced OBD-II computer diagnostics, manufacturer-specific scan tools, and 28 years of pattern recognition.",
    heroImage: "/assets/service-engine-diagnostics.avif",
    heroAlt:
      "Technician connecting an OBD-II diagnostic scan tool under the dashboard during engine code analysis",
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
      "We don't guess, we test. Sensor data, fuel trims, freeze-frame analysis",
      "Diagnostic fee credited toward repair if you have us fix it",
    ],
    faqs: [
      {
        q: "Will free code-reading at a parts store tell me what's wrong?",
        a: "It tells you a code, not a diagnosis. A P0420 code, for example, can be a catalytic converter, an O2 sensor, an exhaust leak, or a fuel-mixture problem. Real diagnostics rule out the cheap fixes before recommending the expensive ones.",
      },
      {
        q: "Why does diagnostics cost money?",
        a: "Real diagnosis takes time, manufacturer-specific tools, and decades of experience. We credit the diagnostic fee toward the repair if you authorize the work, so when we find it, you only pay once.",
      },
      {
        q: "My check engine light is flashing, should I keep driving?",
        a: "No. A flashing CEL means an active misfire that can damage the catalytic converter. Pull over, get it towed, and call us at (972) 231-2886.",
      },
      {
        q: "Can you help if I failed Texas state inspection?",
        a: "Yes. Emissions diagnostics is one of our specialties. Bring the failure paperwork, we'll diagnose, repair, and re-test.",
      },
    ],
    featuredTestimonialIndex: 0,
  },

  "engine-repair": {
    eyebrow: "Engine repair & replacement",
    headline: "Engine repair in Richardson, timing belts to full rebuilds.",
    subhead:
      "ASE-Certified engine work, head gaskets, timing chains, mounts, replacements. Every common make and model, domestic and import.",
    heroImage: "/assets/service-engine-repair.avif",
    heroAlt: "Late-model performance car under shop lighting",
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
      "Original-quality and OEM parts on engine internals, never bargain-bin",
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
        a: "Yes, including water pump, tensioners, and idlers as part of the same job when it's the right call. Timing belt failure is catastrophic; we're not the shop that lets you skip the maintenance.",
      },
      {
        q: "How long does an engine replacement take?",
        a: "Typical job runs 3–7 business days depending on parts availability and what else needs to come apart. We give you a firm window after we inspect.",
      },
      {
        q: "Is engine work covered by the NAPA warranty?",
        a: "Qualifying engine repairs and parts are covered for 24 months / 24,000 miles nationwide. Major engine assemblies sometimes carry extended manufacturer warranties, we'll walk you through what applies.",
      },
    ],
    featuredTestimonialIndex: 2,
  },

  transmission: {
    eyebrow: "Transmission service",
    headline: "Transmission repair in Richardson, done right.",
    subhead:
      "Automatic and manual. From a drain-and-fill to full rebuild. We diagnose what's actually wrong before quoting work.",
    heroImage: "/assets/service-transmission.avif",
    heroAlt: "Manual transmission gear stack and clutch components",
    priceCue: "Honest diagnosis, no replace-first mentality",
    symptoms: [
      "Slipping or harsh shifts, especially under load",
      "Grinding or whining noise that changes with vehicle speed",
      "Fluid leaks (red, brown, or burnt-smelling)",
      "Check engine light with transmission codes (P07XX series)",
      "It's been 60,000+ miles since the last transmission service",
    ],
    whyUs: [
      "We diagnose before we replace, most transmission issues aren't full failures",
      "Right fluid for your specific transmission (Dexron VI, ATF+4, CVT, DSG, etc.)",
      "Rebuilds when rebuilds make sense; replacements when they don't",
      "NAPA Auto Care warranty backs qualifying transmission work",
    ],
    faqs: [
      {
        q: "How often should I change my transmission fluid?",
        a: "Manufacturer recommendations vary widely, anywhere from 30,000 to 100,000 miles. We'll check your specific spec and the fluid condition, then recommend honestly.",
      },
      {
        q: "Should I rebuild or replace?",
        a: "Depends on the cause of failure, the mileage on the rest of the car, and the cost difference. We quote both when both make sense and tell you which we'd do if it were our car.",
      },
      {
        q: "Do you work on CVT transmissions?",
        a: "Yes. We service CVTs from Nissan, Honda, Subaru, Toyota, and others. They require specific fluid and procedures we follow exactly.",
      },
      {
        q: "Is a transmission flush risky on a high-mileage car?",
        a: "Sometimes. On a vehicle that's never had service and has 150K+ miles, an aggressive flush can dislodge debris and cause issues. We do a careful drain-and-fill in those cases, the conservative play.",
      },
    ],
    featuredTestimonialIndex: 1,
  },

  electrical: {
    eyebrow: "Electrical systems",
    headline: "Auto electrical repair in Richardson, TX.",
    subhead:
      "Modern vehicles are computers on wheels. We diagnose and repair every electrical system, sensors, modules, wiring, and the basics.",
    heroImage: "/assets/service-electrical.avif",
    heroAlt: "Vehicle electrical control module and wiring harness",
    priceCue: "Diagnostic fee credited toward repair",
    symptoms: [
      "Vehicle won't start, cranks slow, or clicks repeatedly",
      "Battery dies overnight or after a short period unused",
      "Charging system warning light or flickering interior lights",
      "Power windows, locks, or accessories acting up",
      "Burning electrical smell or visible wiring damage",
    ],
    whyUs: [
      "Tested charging system before we sell you a battery, most batteries die because of charging issues",
      "Modern scan tools that read every module on the bus, not just the engine",
      "Real diagnostic time on intermittent issues, not parts-cannon guessing",
      "Wiring repairs done properly: solder + heat shrink, not crimps",
    ],
    faqs: [
      {
        q: "My battery is dead, do I need a new one?",
        a: "Maybe. We'll load-test the battery AND test the alternator and starter draw. About a third of \"dead battery\" calls are actually charging-system or parasitic-draw problems. New battery without diagnosing the real cause = same problem in two months.",
      },
      {
        q: "How long does a battery last?",
        a: "Texas heat is brutal on batteries. Typical life here is 3–5 years vs. 5–7 in cooler climates. Group-size and CCA matter. We install what your vehicle actually requires.",
      },
      {
        q: "Why do you charge for electrical diagnostics?",
        a: "Electrical problems hide. Tracing a parasitic draw or an intermittent fault takes hours of careful testing. We credit the diagnostic fee toward the repair if you authorize the work.",
      },
      {
        q: "Can you handle aftermarket electrical work?",
        a: "Stereo systems, lighting upgrades, dash cams, etc., yes, when they're installed properly. We won't touch obvious hack jobs from other shops, but we'll quote a clean re-wire.",
      },
    ],
    featuredTestimonialIndex: 5,
  },

  "state-inspections": {
    eyebrow: "Texas state inspections",
    headline: "Texas state inspections in Richardson, walk-in.",
    subhead:
      "Authorized Texas state inspection station. Annual safety and emissions inspections, failed-inspection diagnosis, and compliance repairs, all under one roof.",
    heroImage: "/assets/service-state-inspections.avif",
    heroAlt: "Texas state inspection station sign at the shop",
    priceCue: "$7 safety / $25.50 emissions, walk-in welcome",
    symptoms: [
      "Your inspection is due (registration sticker shows the month)",
      "You just bought a vehicle and need to register it in Texas",
      "You failed inspection elsewhere and need it diagnosed and fixed",
      "Out-of-state move-in vehicle needs Texas inspection",
    ],
    whyUs: [
      "Authorized Texas inspection station, the official sticker is real",
      "Failed inspection? We diagnose AND repair, then re-inspect, no shuttle between shops",
      "Walk-ins welcome any weekday or Saturday morning",
      "Bilingual staff, paperwork explained in English or Spanish",
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
        a: "Yes. VIN verification + safety + emissions all done in one visit. Bring your title and proof of insurance.",
      },
    ],
    featuredTestimonialIndex: 3,
  },

  hvac: {
    eyebrow: "HVAC / AC repair",
    headline: "AC repair in Richardson, cold air year-round.",
    subhead:
      "Full HVAC service, recharge, compressor, condenser, heater core, refrigerant leak detection. R-134a and R-1234yf systems, every make and model.",
    heroImage: "/assets/service-hvac.avif",
    heroAlt: "Vehicle HVAC and air conditioning system close up",
    priceCue: "Book in March, beat the August rush",
    symptoms: [
      "AC blows warm or only mildly cool",
      "Weak airflow even on max",
      "Musty, moldy, or chemical smell from vents",
      "Heater not warming up in winter",
      "Squeal or rattle when AC engages",
      "Dashboard climate controls intermittent",
    ],
    whyUs: [
      "We diagnose before recharging, sealing the leak first, not just topping off the refrigerant",
      "Modern systems including R-1234yf with proper EPA-compliant equipment",
      "Heater-core replacement, blend-door actuators, full HVAC repairs in-house",
      "We schedule AC work proactively so you're cold by April, not still waiting in July",
    ],
    faqs: [
      {
        q: "Why does AC repair cost more than I expected?",
        a: "Modern systems run R-1234yf refrigerant which costs 4–6× more than the older R-134a. Plus, an honest shop seals the leak first instead of just dumping in more refrigerant. You pay more once, and it lasts.",
      },
      {
        q: "When should I service the AC?",
        a: "Best window is March–early May. By June, every shop in DFW has a 1–2 week wait for AC work, and you're already sweating through your steering wheel.",
      },
      {
        q: "Does the heater go through the same system?",
        a: "Heater uses engine coolant via the heater core, not the AC compressor. They share controls and ducting but have separate failure modes. We diagnose either side independently.",
      },
      {
        q: "How long does an AC compressor replacement take?",
        a: "Typically 4–6 hours of labor depending on access. We'll quote a firm window after inspection, parts in stock for most domestic and import makes.",
      },
    ],
    featuredTestimonialIndex: 4,
  },

  tires: {
    eyebrow: "Tire service",
    headline: "Tire repair in Richardson, TX.",
    subhead:
      "Tire rotation, wheel balancing, flat repair, tire replacement, TPMS service. We mount and balance every common size on cars, trucks, and SUVs.",
    heroImage: "/assets/service-tires.avif",
    heroAlt: "Tire tread close up on a wheel",
    priceCue: "Walk-in flat repair · Most rotations under 30 minutes",
    symptoms: [
      "Vibration through the steering wheel at highway speed",
      "Visible tread wear, uneven wear patterns, or low tread depth",
      "TPMS warning light on (low pressure or sensor fault)",
      "Slow leak, losing pressure over a few days",
      "Pulling to one side on a flat road",
      "Last rotation was more than 7,500 miles ago",
    ],
    whyUs: [
      "Honest tread inspection, we'll measure and show you, not just sell",
      "Rotation pattern matched to your vehicle (FWD, AWD, directional tires all handled correctly)",
      "Flat repair done properly: plug-and-patch from the inside, not just an outside plug",
      "TPMS sensor service and replacement, programming for every make",
    ],
    faqs: [
      {
        q: "How often should I rotate my tires?",
        a: "Every 5,000–7,500 miles, or with every other oil change. Front and rear wear at different rates, rotation evens it out and extends tire life.",
      },
      {
        q: "When should I replace tires?",
        a: "Tread depth below 4/32\" for wet-weather safety, 2/32\" is the legal minimum but already past prudent. Texas heat and stop-and-go are hard on tires; expect 35,000–50,000 miles on a typical all-season.",
      },
      {
        q: "Can you fix a flat or do I need a new tire?",
        a: "Punctures in the tread can usually be repaired with a proper inside plug-and-patch. Sidewall damage can't be safely repaired, we'll show you the damage and let you decide.",
      },
      {
        q: "Do you sell tires?",
        a: "We mount and balance customer-supplied tires AND can source most major brands directly. Bring us your size and we'll quote both options so you can pick.",
      },
    ],
    featuredTestimonialIndex: 5,
  },

  "cooling-system": {
    eyebrow: "Cooling system",
    headline: "Cooling system repair in Richardson, TX.",
    subhead:
      "Cooling-system service for the brutal Texas summer, coolant flush, radiator repair, thermostat, water pump, hoses. All major makes, all coolant types.",
    heroImage: "/assets/service-cooling.avif",
    heroAlt: "Engine cooling system radiator and hoses",
    priceCue: "Don't wait for August, service it in spring",
    symptoms: [
      "Engine temperature gauge running hotter than normal",
      "Coolant smell, sweet syrupy odor, or visible green/orange/pink leak",
      "Steam or white smoke from under the hood",
      "Heater blowing cold (often a coolant flow problem)",
      "Coolant level dropping repeatedly",
      "It's been more than 60,000 miles since a coolant flush",
    ],
    whyUs: [
      "We use the correct coolant spec for your vehicle, Dexcool, HOAT, OAT, etc. Mixing the wrong types causes gel buildup that ruins systems",
      "Pressure testing to find leaks before they strand you",
      "Water pump and timing belt done together when it's the smart call (saves a second labor charge)",
      "Texas heat is the #1 killer of cooling systems, we know what to look for",
    ],
    faqs: [
      {
        q: "How often should I flush the coolant?",
        a: "Most modern long-life coolants run 60,000–100,000 miles. We'll check your fluid condition and your manufacturer's spec, then recommend honestly.",
      },
      {
        q: "My car is overheating, what should I do right now?",
        a: "Pull over safely, turn off the engine, don't open a hot radiator cap. Call us at (972) 231-2886 or have it towed. Driving an overheating engine costs head gaskets in minutes.",
      },
      {
        q: "What does a water pump replacement cost?",
        a: "Depends on access. Some are 1–2 hour jobs ($300–$500); some require timing-belt removal which adds significant labor. We quote firmly after inspection.",
      },
      {
        q: "Is a coolant flush necessary, or just a marketing upsell?",
        a: "Genuinely necessary on schedule, old coolant becomes acidic and eats radiator fins and water-pump seals. We're not a flush-everything shop, but we'll tell you straight if yours is overdue.",
      },
    ],
    featuredTestimonialIndex: 1,
  },

  "fuel-injection": {
    eyebrow: "Fuel injection",
    headline: "Fuel injection service in Richardson, TX.",
    subhead:
      "Fuel injector cleaning, fuel filter replacement, fuel pump service, throttle-body cleaning. Restore performance and fuel economy on every common make and model.",
    heroImage: "/assets/service-fuel-injection.avif",
    heroAlt: "Fuel injector rail mounted on engine",
    priceCue: "Diagnostics first, we don't clean what doesn't need cleaning",
    symptoms: [
      "Rough idle, hesitation, or stumble on acceleration",
      "Drop in fuel economy without a clear reason",
      "Hard starts, especially after sitting overnight",
      "Check engine light with fuel-system codes (P017X, P019X series)",
      "Sulfur or rotten-egg smell from exhaust",
      "Failed Texas state inspection on emissions",
    ],
    whyUs: [
      "We diagnose with fuel-pressure tests and live-data scans, not parts-cannon guessing",
      "Professional injector cleaning service, not the over-the-counter additives that don't really work",
      "Fuel pump replacement done with OEM-quality parts that last",
      "Throttle-body cleaning included with most fuel-system service",
    ],
    faqs: [
      {
        q: "Should I use fuel injector cleaner from the gas station?",
        a: "Bottle additives can help on minor deposits but won't fix moderate or severe injector issues. If you've already tried two bottles and the symptom persists, it's time for a real shop service.",
      },
      {
        q: "Why is my mileage worse than it used to be?",
        a: "Could be injectors, mass-airflow sensor, oxygen sensors, fuel filter, or even tires. We test the cheap-to-fix causes first before recommending the expensive ones.",
      },
      {
        q: "What's a fuel pump replacement cost?",
        a: "Most modern in-tank pumps run $500–$900 parts and labor. Older external pumps can be less. We quote upfront after diagnostic.",
      },
      {
        q: "Do you handle direct-injection (GDI) cleaning?",
        a: "Yes. GDI engines (most modern Toyota, Hyundai, Kia, VW, GM) build carbon on intake valves that bottle additives can't reach. We do walnut-blast cleaning when needed.",
      },
    ],
    featuredTestimonialIndex: 3,
  },

  battery: {
    eyebrow: "Battery service",
    headline: "Battery service in Richardson, TX.",
    subhead:
      "Battery testing, replacement, charging-system diagnostics, terminal cleaning. Texas heat eats batteries. We install the right battery for your vehicle and verify the charging system is healthy first.",
    heroImage: "/assets/service-battery.avif",
    heroAlt: "Vehicle battery installed under the hood",
    priceCue: "Free battery test · Most replacements under an hour",
    symptoms: [
      "Slow crank when starting the engine",
      "Battery light on the dashboard",
      "Repeated dead battery after the car sat overnight",
      "Headlights dim at idle, brighten when revving",
      "Clicking sound when you turn the key, no crank",
      "Battery is more than 3 years old in Texas",
    ],
    whyUs: [
      "We test the charging system FIRST, most \"dead battery\" cases are actually alternator or parasitic-draw issues, and a new battery alone won't fix them",
      "Right group-size and CCA rating for your specific vehicle (not whatever's on sale)",
      "Texas heat kills batteries faster than cold, we know real-world life expectancy here",
      "Free battery test anytime, walk-in, no purchase required",
    ],
    faqs: [
      {
        q: "How long does a battery last in Texas?",
        a: "3–5 years, vs. 5–7 in cooler climates. Sustained 100°F+ summers are the #1 killer. If yours is 3+ years old and you're going on a road trip, replace it preventively before it strands you.",
      },
      {
        q: "Should I replace the battery myself?",
        a: "DIY is fine on older simple cars. Modern vehicles often need battery registration with a scan tool so the alternator charges correctly. We do the registration as part of every install.",
      },
      {
        q: "My battery is 2 years old and dead. Is it under warranty?",
        a: "Most batteries carry a 24–36 month free-replacement warranty plus a longer pro-rated period. Bring us the old battery and the receipt; we'll handle the warranty claim with the manufacturer.",
      },
      {
        q: "How much does a battery cost?",
        a: "Group-size dependent: typical sedan $130–$200, full-size truck or SUV $200–$300, AGM (start-stop / luxury) $250–$400. Installed and registered.",
      },
    ],
    featuredTestimonialIndex: 5,
  },
};

/** Slugs that have a dedicated landing page. Drives generateStaticParams. */
export const SERVICE_PAGE_SLUGS = Object.keys(SERVICE_CONTENT);
