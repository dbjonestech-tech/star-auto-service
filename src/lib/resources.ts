/**
 * Resources / knowledge articles for /resources/[slug] pages.
 * Long-form, scannable, schema-friendly.
 */

export type ResourceSection =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "callout"; title: string; body: string };

export type Resource = {
  slug: string;
  category: string;
  title: string;
  description: string;
  /** Short readable date, also used in Article schema. */
  publishedDate: string; // ISO yyyy-mm-dd
  readMinutes: number;
  heroImage: string;
  heroAlt: string;
  /** Eyebrow shown above the H1. */
  eyebrow: string;
  /** Lede paragraph after the H1. */
  lede: string;
  /** Body sections in order. */
  sections: ResourceSection[];
  /** Slugs of related resources. */
  related: string[];
};

export const RESOURCES: Resource[] = [
  {
    slug: "check-engine-light-guide",
    category: "Diagnostics",
    title: "Check engine light: what it means and what to do next",
    description:
      "A plain-English guide to what triggers your check engine light, how serious it is, and what to do before you panic, from a Richardson, TX shop that diagnoses these every day.",
    publishedDate: "2026-04-15",
    readMinutes: 6,
    heroImage:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1600&q=75&auto=format&fit=crop",
    heroAlt: "Mechanic working on an engine bay diagnostic",
    eyebrow: "Diagnostics",
    lede: "Your check engine light just came on. Before you panic, or ignore it for the next six months, here is what it actually means, what to do in the next hour, and how a real shop diagnoses it.",
    sections: [
      { type: "h2", text: "Solid vs. flashing: there's a big difference" },
      {
        type: "p",
        text: "A solid (steady) check engine light means the car's computer detected something out of spec, but it's not actively damaging the engine right now. It's a 'come see a shop in the next week or two' situation.",
      },
      {
        type: "p",
        text: "A flashing check engine light is different. Flashing means the engine is actively misfiring badly enough to potentially destroy your catalytic converter. Catalytic converters are expensive, sometimes $1,500 to $3,000, and a sustained misfire can cook one in minutes.",
      },
      {
        type: "callout",
        title: "If your check engine light is flashing",
        body: "Pull over safely. Don't keep driving. Call us at (972) 231-2886 or have the car towed. The longer it runs flashing, the more damage you risk.",
      },

      { type: "h2", text: "What can trigger it" },
      {
        type: "p",
        text: "There are over 1,400 possible OBD-II codes. The most common triggers we see at the shop, in roughly order of frequency:",
      },
      {
        type: "ul",
        items: [
          "Loose, cracked, or missing gas cap (yes, really)",
          "Failing oxygen sensors",
          "Mass airflow sensor problems",
          "Failing catalytic converter",
          "Spark plug or ignition coil issues",
          "EVAP system leaks (often a small vacuum leak)",
          "Thermostat or engine temperature sensor",
        ],
      },
      {
        type: "p",
        text: "Some of these are $20 fixes. Some are $2,000 fixes. The code itself only narrows the possibilities. Real diagnosis distinguishes between them.",
      },

      { type: "h2", text: "Why a free code-read at a parts store is not a diagnosis" },
      {
        type: "p",
        text: "A parts-store reader gives you a code. It does not tell you what is actually wrong, and it definitely does not tell you which of several possible causes is yours.",
      },
      {
        type: "p",
        text: "Take a P0420 code, for example. P0420 means 'catalytic converter efficiency below threshold.' That code can be caused by:",
      },
      {
        type: "ul",
        items: [
          "An actual failing catalytic converter ($1,500+ repair)",
          "A failing upstream or downstream O2 sensor ($150–$400 repair)",
          "An exhaust leak before the cat ($100–$300 repair)",
          "A fuel-mixture problem causing the cat to read inefficient ($50–$500 to address upstream cause)",
        ],
      },
      {
        type: "p",
        text: "The cheap fixes can look exactly like the expensive ones from a code reader's perspective. A real shop with manufacturer-specific scan tools, freeze-frame data, and decades of pattern recognition rules out the cheap causes before recommending the expensive one.",
      },

      { type: "h2", text: "What to do in the next 24 hours" },
      {
        type: "ol",
        items: [
          "If the light is flashing: stop driving and call a shop or tow.",
          "If the light is solid and the car drives normally: tighten your gas cap (it's been the cause for hundreds of customers over the years). Wait for two or three drive cycles to see if the light clears on its own.",
          "If the light stays on after a few days: schedule a real diagnostic appointment. Don't wait six months hoping it goes away. Codes can compound.",
        ],
      },

      { type: "h2", text: "What we do at The Star Auto Service" },
      {
        type: "p",
        text: "Diagnostics here is a real process, not a code-and-guess. We pull the codes, capture freeze-frame data showing engine state at the moment the code triggered, log live sensor data on a road test, and rule out cheap causes before recommending expensive ones. The diagnostic fee is credited toward the repair if you authorize the work, so when we find it, you only pay once.",
      },
    ],
    related: ["when-to-replace-brakes", "texas-state-inspection-guide"],
  },

  {
    slug: "when-to-replace-brakes",
    category: "Brakes",
    title: "When to replace your brakes: 5 signs (and what they cost)",
    description:
      "Brake pads, rotors, fluid, calipers, when each is due, what failure looks like, and what realistic costs run at an honest, family-owned shop in Richardson, TX.",
    publishedDate: "2026-03-22",
    readMinutes: 5,
    heroImage:
      "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=1600&q=75&auto=format&fit=crop",
    heroAlt: "Brake disc and caliper close up",
    eyebrow: "Brakes",
    lede: "Brakes are the part of the car most likely to silently degrade until they fail at exactly the wrong moment. Here are the five signs to watch for, plus realistic cost expectations.",
    sections: [
      { type: "h2", text: "1. Squealing, grinding, or scraping" },
      {
        type: "p",
        text: "The little metal tab built into most brake pads is designed to make a high-pitched squeal when the pad gets thin. That's a 'come in within the next month' warning, not 'it's fine for another six months.'",
      },
      {
        type: "p",
        text: "Grinding or metal-on-metal scraping means the pad is worn through and you're now scoring the rotor. This is a 'come in this week' situation. Keep driving and you'll need rotors instead of just pads, doubling the repair cost.",
      },

      { type: "h2", text: "2. Pulsation through the pedal" },
      {
        type: "p",
        text: "If the brake pedal pulses or vibrates when you brake at highway speed, your rotors are likely warped (technically: thickness variation). Causes include uneven cooling after hard stops or pads sticking to one spot. Sometimes resurfacing fixes it; often the rotor is past spec.",
      },

      { type: "h2", text: "3. Soft pedal, sinking pedal, or pedal that goes to the floor" },
      {
        type: "p",
        text: "This is a brake fluid problem, air in the line, a leak in the system, or a failing master cylinder. Don't drive it. Call us, get it towed if you have to. Brake fluid is the difference between you stopping and you not stopping.",
      },

      { type: "h2", text: "4. Pulling to one side under braking" },
      {
        type: "p",
        text: "If the car drifts left or right when you brake, one side is doing more work than the other. Common causes: a stuck caliper, a collapsed brake hose, or unevenly worn pads. All of those need attention before they get worse.",
      },

      { type: "h2", text: "5. The clock, or rather, the mileage" },
      {
        type: "p",
        text: "Brake pads on most modern cars last 30,000 to 70,000 miles depending on driving conditions. Stop-and-go driving (looking at you, Dallas commuters) is harder on brakes than steady highway. If you can't remember the last time you had brakes done and you're past 40,000 miles, get them inspected.",
      },

      { type: "h2", text: "What it costs" },
      {
        type: "ul",
        items: [
          "Front pad replacement, typical sedan: $150–$300 per axle, parts and labor",
          "Pad and rotor replacement (front): $300–$550 per axle for most makes",
          "Brake fluid flush: $80–$150",
          "Caliper replacement (one): $250–$500",
          "Master cylinder: $400–$800",
        ],
      },
      {
        type: "p",
        text: "European luxury brakes (BMW, Mercedes, Porsche, Audi) run roughly 50–80% higher because the parts cost more. We use OEM-quality parts, never bargain-bin, but we don't make you pay dealer prices for them.",
      },

      {
        type: "callout",
        title: "Free brake check anytime",
        body: "We're happy to put your car up on the lift and tell you honestly where you're at, pad thickness, rotor condition, fluid color. No appointment needed, walk-ins welcome.",
      },
    ],
    related: ["check-engine-light-guide", "seasonal-car-care-texas"],
  },

  {
    slug: "oil-change-frequency",
    category: "Maintenance",
    title: "How often should you change your oil? (The honest answer)",
    description:
      "3,000 miles is dead. So is 5,000. Modern oil-change intervals depend on the oil type, the engine, and your real driving conditions, here's the straight answer for Texas drivers.",
    publishedDate: "2026-02-14",
    readMinutes: 4,
    heroImage:
      "https://images.unsplash.com/photo-1486754735734-325b5831c3ad?w=1600&q=75&auto=format&fit=crop",
    heroAlt: "Engine bay during routine oil service",
    eyebrow: "Maintenance",
    lede: "The 3,000-mile oil change is a marketing artifact from the 1970s. Modern oils, modern engines, and modern oil-life monitors all push the real interval much further, but not as far as some people want to believe.",
    sections: [
      { type: "h2", text: "The short answer" },
      {
        type: "ul",
        items: [
          "Conventional oil: 3,000 to 5,000 miles",
          "Synthetic blend: 5,000 to 7,500 miles",
          "Full synthetic: 7,500 to 10,000 miles, sometimes 15,000 in newer European cars",
          "Trust your manufacturer's recommendation in the owner's manual",
          "Trust your oil-life monitor if your car has one, they're surprisingly accurate",
        ],
      },

      { type: "h2", text: "Why intervals got longer" },
      {
        type: "p",
        text: "Two reasons. First, modern synthetics resist breakdown at high temperatures far better than old conventional oils. Second, modern engines are tighter, fewer contaminants get into the oil in the first place. Combined, that means a synthetic oil can do its job for two to three times longer than a conventional oil from the 1970s.",
      },

      { type: "h2", text: "When you should go shorter than the manual says" },
      {
        type: "p",
        text: "Some driving conditions are harder on oil than the manufacturer's average assumes. If most of your driving is:",
      },
      {
        type: "ul",
        items: [
          "Short trips under 10 minutes (engine never fully warms up, water and fuel build up in the oil)",
          "Stop-and-go traffic in Dallas-area heat",
          "Towing or hauling heavy loads regularly",
          "Dusty conditions or unpaved roads",
          "Track days or hard performance driving",
        ],
      },
      {
        type: "p",
        text: "...then run the conservative side of the recommended range. That doesn't mean 3,000 miles for synthetic, but if your manual says '7,500 to 10,000,' do 7,500.",
      },

      { type: "h2", text: "Texas-specific notes" },
      {
        type: "p",
        text: "Heat and dust are the two North Texas factors. Sustained 100°F+ summer driving puts more thermal stress on oil. If your car spends August idling in carpools, lean toward the shorter end of the interval. If it spends August in a covered garage and most of its driving is highway, you're fine going long.",
      },

      { type: "h2", text: "What to do if you can't remember the last change" },
      {
        type: "p",
        text: "Change it. Then start tracking. Most modern cars track oil life in the dashboard menu, learn how to read it. If yours doesn't, just write the mileage on a sticker (we'll do that for you) and check it monthly.",
      },

      {
        type: "callout",
        title: "Walk-in oil change",
        body: "Most oil changes you can wait for. Coffee's on. We'll match the right oil weight and filter spec for your specific vehicle and top off all the other fluids while you're up on the lift.",
      },
    ],
    related: ["seasonal-car-care-texas", "when-to-replace-brakes"],
  },

  {
    slug: "texas-state-inspection-guide",
    category: "Inspections",
    title: "Texas state inspection: complete guide for 2026",
    description:
      "What gets checked, what fails most often, what it costs, and what to do if you don't pass, from a state-authorized inspection station in Richardson.",
    publishedDate: "2026-01-30",
    readMinutes: 5,
    heroImage: "/assets/resource-state-inspection.webp",
    heroAlt: "Vehicle inspection report and tools at the shop",
    eyebrow: "Inspections",
    lede: "Every Texas vehicle needs an annual inspection to register. Here's what gets checked, what trips most people up, and what to do if your car fails, from a state-authorized inspection station that does this hundreds of times a year.",
    sections: [
      { type: "h2", text: "Two parts: safety and emissions" },
      {
        type: "p",
        text: "Texas requires an annual safety inspection for nearly all vehicles. If you live in the Dallas-Fort Worth metro (Dallas, Tarrant, Collin, Denton, Ellis, Johnson, Kaufman, Parker, or Rockwall County), you also need an emissions inspection. We do both, most cars in 30 to 45 minutes, walk-in.",
      },

      { type: "h2", text: "What the safety inspection checks" },
      {
        type: "ul",
        items: [
          "Brakes, including the parking brake",
          "Headlights, brake lights, turn signals, and tail lights",
          "Horn",
          "Windshield wipers (both blades, working)",
          "Mirrors",
          "Steering, suspension, and exhaust system",
          "Tires (tread depth and condition)",
          "Window tint (must meet Texas legal limits)",
          "Seat belts",
          "Glass (no cracks in the wiper-sweep area)",
          "VIN verification",
        ],
      },

      { type: "h2", text: "What the emissions inspection checks" },
      {
        type: "p",
        text: "For most modern vehicles (1996 and newer), the emissions test is an OBD-II readiness check. Your car's computer reports whether all of its emissions monitors have run successfully and whether any check engine codes are present. Older vehicles may get a tailpipe gas test.",
      },

      { type: "h2", text: "What fails most often" },
      {
        type: "ul",
        items: [
          "Check engine light is on (instant emissions failure)",
          "Tire tread below 2/32 inch",
          "Brake light or other bulb out",
          "Window tint too dark on driver's window or windshield",
          "Cracked windshield in the driver's view",
          "OBD-II monitors not ready (often after a recent battery disconnect)",
        ],
      },

      { type: "h2", text: "What it costs" },
      {
        type: "ul",
        items: [
          "Safety + emissions (most DFW cars): $25.50 at the shop, plus the state's separate registration fee at the DMV",
          "Safety only (vehicles in non-emissions counties): $7.00",
          "Failed inspection: free re-inspection within 15 days at the same shop after repair",
        ],
      },

      { type: "h2", text: "If you fail" },
      {
        type: "p",
        text: "We tell you exactly what failed, quote the repair, and after the fix you get a free re-inspection at the same shop within 15 days. No shuffling between locations. If we can't fix it the same day (which is rare), we'll give you the form to take to the DMV explaining the situation so you don't lose your registration window.",
      },

      {
        type: "callout",
        title: "Walk-in inspections, English or Spanish",
        body: "Mon-Fri 8:00 AM – 6:30 PM, Saturday 8:00 AM – 4:00 PM. Bring your insurance card. Coffee's on.",
      },
    ],
    related: ["check-engine-light-guide", "seasonal-car-care-texas"],
  },

  {
    slug: "seasonal-car-care-texas",
    category: "Maintenance",
    title: "Seasonal car care for Texas drivers",
    description:
      "Heat is the enemy. Dust is the second enemy. Rare ice is the third. Here's a season-by-season checklist for keeping your car running through North Texas weather.",
    publishedDate: "2026-01-12",
    readMinutes: 6,
    heroImage: "/assets/resource-seasonal-care.avif",
    heroAlt: "Sunset over a Texas highway, seasonal driving conditions",
    eyebrow: "Maintenance",
    lede: "Cars in North Texas don't fail the same way they do in Minnesota. Our climate stresses different systems. Here's a season-by-season checklist for the things that actually matter for your car here.",
    sections: [
      { type: "h2", text: "Spring (March – May)" },
      {
        type: "p",
        text: "This is the window before the heat hits. Use it.",
      },
      {
        type: "ul",
        items: [
          "Get your AC checked. Recharge if it's not blowing cold by April. By August, every shop in DFW has a 2-week wait for AC work.",
          "Check coolant level and condition. The thermostat that worked last summer may not survive this one.",
          "Inspect belts and hoses. Heat will kill anything that's already cracked.",
          "Battery test. Heat kills batteries faster than cold. If your battery is 4+ years old, replace it preventively before it strands you.",
        ],
      },

      { type: "h2", text: "Summer (June – September)" },
      {
        type: "p",
        text: "100°F+ days for weeks at a time. The hardest season on a car in this state.",
      },
      {
        type: "ul",
        items: [
          "Watch your temperature gauge daily. Any creep above normal is a warning.",
          "Check tire pressure monthly. Heat raises pressure; under-inflated tires fail sooner in heat.",
          "Don't ignore squealing belts, that's the AC compressor or alternator pulley telling you something.",
          "If your car has stop-start technology, the battery is working overtime in heat. Watch for slow cranks.",
        ],
      },

      { type: "h2", text: "Fall (October – November)" },
      {
        type: "p",
        text: "The mildest season here. Use it to catch up on anything you put off in summer.",
      },
      {
        type: "ul",
        items: [
          "Annual inspection if it's due, the lines are shorter than spring or summer.",
          "Brake check. Heat fade and stop-and-go summer driving wears pads faster than people realize.",
          "Wiper blade replacement before fall thunderstorms.",
          "Check headlight aim and brightness for shorter daylight.",
        ],
      },

      { type: "h2", text: "Winter (December – February)" },
      {
        type: "p",
        text: "We don't have real winters most years, but the rare hard freeze does damage that warmer states never see.",
      },
      {
        type: "ul",
        items: [
          "Check antifreeze concentration before any forecasted hard freeze.",
          "Tire condition, cold tires lose pressure and grip; ice and sleet are unforgiving.",
          "Battery test again, cold cranking is the second-hardest thing on a battery after sustained heat.",
          "Don't ignore a 'low coolant' warning. A frozen coolant line cracks blocks.",
        ],
      },

      { type: "h2", text: "What kills cars early in North Texas" },
      {
        type: "ul",
        items: [
          "Skipped oil changes during summer, hot oil breaks down faster",
          "Skipped AC service, when the compressor goes, it's $1,500+",
          "Ignored battery warnings in heat, sudden no-starts in August parking lots",
          "Letting tires go bald, heat plus bald tires plus rain equals hydroplaning",
        ],
      },

      {
        type: "callout",
        title: "Free seasonal inspection",
        body: "Bring your car in any weekday or Saturday morning. We'll do a no-obligation top-to-bottom check, write up what's coming due, and let you decide what to handle and when.",
      },
    ],
    related: ["oil-change-frequency", "when-to-replace-brakes"],
  },
];

export const RESOURCE_SLUGS = RESOURCES.map((r) => r.slug);
