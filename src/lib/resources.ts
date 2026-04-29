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
    heroImage: "/assets/resource-check-engine.avif",
    heroAlt:
      "Illuminated check engine warning light glowing amber on a vehicle instrument cluster",
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
    heroImage: "/assets/service-brakes.avif",
    heroAlt: "Brake rotor and caliper close up",
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
    heroImage: "/assets/service-oil-change.avif",
    heroAlt: "Fresh motor oil being poured during service",
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

  {
    slug: "ac-compressor-replacement-cost",
    category: "AC & HVAC",
    title: "AC compressor replacement cost: what Texas drivers actually pay",
    description:
      "Real cost ranges for AC compressor replacement in North Texas, why our climate burns them out faster, and the symptoms to watch for before yours fails.",
    publishedDate: "2026-05-04",
    readMinutes: 6,
    heroImage: "/assets/service-hvac.avif",
    heroAlt: "Vehicle AC and HVAC system close up",
    eyebrow: "AC & HVAC",
    lede: "AC compressors die faster in North Texas than almost anywhere else in the country. Here is what you can expect to pay, why it costs what it does, and the symptoms that show up before the system gives up entirely.",
    sections: [
      { type: "h2", text: "Why AC compressors fail faster here" },
      {
        type: "p",
        text: "Compressors are mechanical pumps that run nonstop in summer. The combination of 100°F+ days, refrigerant pressure cycling, and bumper-to-bumper traffic on 75 means a Dallas-area AC compressor lives a much harder life than one in San Diego. Most fail somewhere between 100,000 and 150,000 miles in this climate.",
      },
      { type: "h2", text: "The realistic price range" },
      {
        type: "ul",
        items: [
          "Sedan with R-134a refrigerant: $900 to $1,400 parts and labor",
          "Truck or SUV with R-134a: $1,100 to $1,600",
          "Newer vehicle with R-1234yf refrigerant: $1,400 to $2,200",
          "European luxury (BMW, Mercedes, Audi): $1,800 to $2,800",
          "Full system replacement (compressor + condenser + dryer + lines): $2,500 to $4,500",
        ],
      },
      {
        type: "p",
        text: "The biggest swing is the refrigerant. R-1234yf is what every car built since roughly 2017 uses, and it costs four to six times more than the older R-134a. A compressor replacement on a 2020 truck involves recovering, evacuating, and recharging four to six pounds of an $80-per-pound refrigerant. That is the math.",
      },
      { type: "h2", text: "Symptoms that mean compressor, not recharge" },
      {
        type: "ul",
        items: [
          "Air blows warm even after a recharge",
          "AC clutch makes a clicking, grinding, or squealing noise when it engages",
          "Visible refrigerant or oil residue around the compressor",
          "Belt squeals only when AC is on",
          "AC works for the first few minutes, then quits",
          "Cabin smells faintly oily",
        ],
      },
      {
        type: "callout",
        title: "What we never do at this shop",
        body: "Top-and-pray. If your refrigerant is low, there is a leak. We find the leak, seal it, and then recharge. Otherwise the same thing happens again in three months and you have paid twice.",
      },
      { type: "h2", text: "Why we book AC work in March, not August" },
      {
        type: "p",
        text: "By June, every shop in DFW has a one to two week wait for AC work, and the shops that overbook are the ones who skip the leak detection step. Get yours checked in March or April, and if anything is off, we have time to do it right.",
      },
      { type: "h2", text: "What we actually do at the shop" },
      {
        type: "p",
        text: "Performance test the system, electronic leak detection with UV dye if needed, evacuate and weigh refrigerant, replace the failed component with an OEM-quality part, refill to factory spec, and verify cabin temperature drop. Every step documented on the invoice. NAPA Auto Care nationwide warranty applies on qualifying AC work.",
      },
    ],
    related: ["seasonal-car-care-texas", "why-is-my-car-overheating"],
  },

  {
    slug: "alternator-vs-battery-symptoms",
    category: "Electrical",
    title: "Is it the alternator or the battery? A 30-second decision tree",
    description:
      "How to tell whether your car's no-start, slow-crank, or dim-lights problem is the battery or the charging system, and why a free parts-store test misses it half the time.",
    publishedDate: "2026-04-21",
    readMinutes: 5,
    heroImage: "/assets/resource-alternator.avif",
    heroAlt:
      "Close-up of an automotive alternator with serpentine belt and pulley, the charging system component diagnosed alongside the battery",
    eyebrow: "Electrical",
    lede: "About a third of the cars we see for a 'dead battery' actually have a charging-system problem. Replacing the battery without diagnosing the alternator means you are back in the parking lot in two months with the same problem. Here is how to tell the difference.",
    sections: [
      { type: "h2", text: "The 30-second decision tree" },
      {
        type: "ol",
        items: [
          "Try to start the car. Does it crank slowly, click without cranking, or do nothing at all?",
          "If it cranks slowly: probably battery. Maybe alternator if the battery is recent.",
          "If it clicks but does not crank: weak battery, bad starter, or corroded terminal.",
          "If a jump start works and the car runs fine for hours: battery is the suspect.",
          "If a jump start works but the car dies again within a day: alternator (it is not recharging the battery).",
        ],
      },
      { type: "h2", text: "Five alternator-fail symptoms" },
      {
        type: "ul",
        items: [
          "Battery warning light on the dash while driving",
          "Headlights dim at idle and brighten when you rev the engine",
          "Battery dies within hours of being jumped",
          "Burning rubber smell from the engine bay (slipping serpentine belt)",
          "Stereo cuts out, gauges flicker, or windows roll up slowly",
        ],
      },
      { type: "h2", text: "Five battery-fail symptoms" },
      {
        type: "ul",
        items: [
          "Slow crank that has gotten worse over a few weeks",
          "Battery is more than 3 years old in Texas (4 to 5 elsewhere)",
          "White or blue corrosion on the battery terminals",
          "Battery case is swollen or leaking",
          "Several short trips in cold weather without a long drive in between",
        ],
      },
      { type: "h2", text: "Why the parts-store free test misses things" },
      {
        type: "p",
        text: "A standalone battery test under load tells you if the battery still holds charge. It cannot tell you whether the alternator is properly recharging the battery while you drive. About a third of the time, a battery that fails the parts-store test is failing because the alternator quit weeks ago and the customer has been running the battery flat over and over.",
      },
      {
        type: "callout",
        title: "Free charging system test, walk-in",
        body: "We test the battery AND the charging system together, no purchase required. Five minutes, no appointment. Bring your car in any weekday or Saturday morning.",
      },
      { type: "h2", text: "Texas heat is the real killer" },
      {
        type: "p",
        text: "Sustained 100°F+ summers cook batteries from the inside. Three to five years is normal lifespan here, versus five to seven in cooler climates. If your battery is over 3 years old and you have a road trip coming up, replace it preventively. The roadside cost of a midnight tow is a lot more than the cost of a battery.",
      },
    ],
    related: ["seasonal-car-care-texas", "check-engine-light-guide"],
  },

  {
    slug: "timing-belt-replacement-guide",
    category: "Engine Repair",
    title: "Timing belt replacement: when, how much, and why it cannot wait",
    description:
      "Everything you need to know about timing belt service: belt vs chain, manufacturer intervals, what happens if it snaps, realistic cost ranges, and why we replace the water pump at the same time.",
    publishedDate: "2026-04-09",
    readMinutes: 6,
    heroImage: "/assets/service-engine-repair.avif",
    heroAlt: "Late-model performance car under shop lighting",
    eyebrow: "Engine Repair",
    lede: "A timing belt is the single piece of maintenance with the highest catastrophic-failure cost relative to its replacement cost. Skip it past its interval and a $700 job becomes a $4,000 job overnight. Here is everything you actually need to know.",
    sections: [
      { type: "h2", text: "Belt or chain, how to know what you have" },
      {
        type: "p",
        text: "Some engines use a rubber timing belt that needs replacement on a schedule. Some use a metal timing chain that is supposed to last the life of the engine (although chains stretch and tensioners fail too, especially on certain VW, BMW, and Hyundai engines). Your owner's manual will tell you which one you have. If you do not have the manual, we can look it up by VIN in 30 seconds.",
      },
      { type: "h2", text: "Manufacturer intervals (typical)" },
      {
        type: "ul",
        items: [
          "Honda timing belt: 100,000 to 105,000 miles or 7 years",
          "Toyota timing belt (older models): 90,000 miles",
          "Subaru timing belt: 100,000 miles",
          "Volkswagen timing belt: 80,000 to 100,000 miles",
          "Hyundai / Kia: 60,000 to 90,000 miles depending on engine",
          "Most newer Toyota / Honda / Mazda: timing chain, no scheduled replacement",
        ],
      },
      {
        type: "p",
        text: "Always check your specific year, make, and model. Manufacturers update intervals across model years, and the interval listed on a forum from 2010 may not apply to your 2018.",
      },
      { type: "h2", text: "What happens when one snaps" },
      {
        type: "p",
        text: "On an interference engine (which most modern engines are), the valves and pistons share space. The timing belt is what keeps them out of each other's way. When it snaps, the pistons hit the valves at full speed. Bent valves, damaged piston tops, sometimes a cracked head. The repair goes from a $700 belt replacement to a $3,500 to $4,500 head rebuild or full engine replacement.",
      },
      {
        type: "callout",
        title: "If your car is at or near the interval",
        body: "Do not gamble. The cost difference between scheduled replacement and post-failure repair is the difference between a long weekend project and a major financial decision. Call us with your year, make, model, and mileage. We will tell you straight whether you should book it now or have a few thousand miles to spare.",
      },
      { type: "h2", text: "Realistic cost ranges" },
      {
        type: "ul",
        items: [
          "Timing belt only, sedan with easy access (Honda, Toyota): $400 to $700",
          "Timing belt + water pump + tensioners + idlers: $700 to $1,400",
          "Timing belt + water pump on European or harder-access engine: $1,200 to $2,000",
          "Post-failure head rebuild on an interference engine: $3,500 to $4,500",
          "Post-failure engine replacement (used): $3,500 to $6,500",
        ],
      },
      { type: "h2", text: "Why we always replace the water pump at the same time" },
      {
        type: "p",
        text: "On most engines, the water pump is driven by the timing belt, and reaching it requires removing everything we have already removed to get to the belt. Replacing it with the belt costs an extra hour of labor. Replacing it later costs the same hours of labor we already charged you for once. Doing it together is the smart financial call almost every time, and we recommend it as a matter of policy.",
      },
    ],
    related: ["check-engine-light-guide", "when-to-replace-brakes"],
  },

  {
    slug: "synthetic-vs-conventional-oil",
    category: "Maintenance",
    title: "Synthetic vs. conventional oil: which one does your car actually need?",
    description:
      "The honest answer on synthetic, blend, and conventional motor oil. Cost, intervals, and which one is worth it for your specific vehicle and Texas driving.",
    publishedDate: "2026-03-15",
    readMinutes: 5,
    heroImage: "/assets/resource-synthetic-vs-conventional.avif",
    heroAlt:
      "Two motor oil bottles side by side comparing synthetic and conventional engine oil for an oil change",
    eyebrow: "Maintenance",
    lede: "Synthetic oil costs about twice as much as conventional and lasts about two and a half times longer. So is it worth it? Depends entirely on your vehicle, your driving, and what your owner's manual specifies.",
    sections: [
      { type: "h2", text: "The chemistry, in plain English" },
      {
        type: "p",
        text: "Conventional oil is refined crude oil with additives. Synthetic oil starts with a base stock that has been chemically engineered to behave more consistently across temperatures. The result: synthetic resists thermal breakdown at high temperatures and stays flowing better at low temperatures. In a 100°F Texas August, that matters.",
      },
      { type: "h2", text: "When synthetic is required" },
      {
        type: "p",
        text: "Most vehicles built since roughly 2010 specify synthetic from the factory. European luxury cars (BMW, Mercedes, Audi, Volvo, Volkswagen) require very specific synthetic oils with manufacturer approvals printed on the bottle. Using conventional oil in a car that requires synthetic will void the powertrain warranty and can cause early engine wear.",
      },
      { type: "h2", text: "When conventional is still fine" },
      {
        type: "ul",
        items: [
          "Older vehicles, pre-2008 or so, that have always run conventional",
          "Higher-mileage cars with already-good oil pressure where switching brings risk of leaks",
          "Daily-driver fleet vehicles where short intervals and lower up-front cost make sense",
          "Any vehicle whose owner's manual specifies conventional",
        ],
      },
      { type: "h2", text: "Synthetic blend: the in-between" },
      {
        type: "p",
        text: "A blend mixes synthetic and conventional. It runs longer than pure conventional but does not last as long as full synthetic. Realistic use case: a higher-mileage vehicle where the owner wants better thermal protection without the full synthetic price tag.",
      },
      { type: "h2", text: "What it actually costs" },
      {
        type: "ul",
        items: [
          "Conventional oil change: $35 to $55",
          "Synthetic blend: $50 to $75",
          "Full synthetic: $70 to $110",
          "European synthetic with manufacturer approval (BMW, MB, VW, Volvo): $95 to $145",
        ],
      },
      { type: "h2", text: "How long each lasts in Texas conditions" },
      {
        type: "ul",
        items: [
          "Conventional: 3,000 to 5,000 miles, lean toward shorter in summer",
          "Synthetic blend: 5,000 to 7,500 miles",
          "Full synthetic: 7,500 to 10,000 miles, sometimes 15,000 in newer European cars",
          "Trust your manufacturer's recommendation and your oil-life monitor, both are calibrated for the real world",
        ],
      },
      {
        type: "callout",
        title: "We use the right oil for your car",
        body: "Not whatever's on sale, not the cheapest available. The correct viscosity grade and certification standard for your specific year, make, and model. If your manual says 0W-20 with API SP and dexos1 Gen 3, that is what goes in.",
      },
    ],
    related: ["oil-change-frequency", "seasonal-car-care-texas"],
  },

  {
    slug: "why-is-my-car-overheating",
    category: "Cooling System",
    title: "Why is my car overheating? Seven causes and what they cost to fix",
    description:
      "The seven most common causes of engine overheating, what to do roadside, what each repair costs, and why Texas summer is the season this happens to most drivers.",
    publishedDate: "2026-05-22",
    readMinutes: 6,
    heroImage: "/assets/resource-overheating.avif",
    heroAlt:
      "Steam rising from under the hood of an overheating car pulled over on the side of the road",
    eyebrow: "Cooling System",
    lede: "Engine overheating is the kind of problem where the wrong reaction makes a $400 repair into a $4,000 repair. Pull over the second the gauge climbs. Here are the seven most common causes, what to do in the moment, and what each one costs.",
    sections: [
      { type: "h2", text: "First, do this immediately" },
      {
        type: "ol",
        items: [
          "Pull over safely. Get off the highway, find a parking lot.",
          "Turn the engine OFF. Do not idle it 'just to keep the AC on.'",
          "Pop the hood from inside the car. Do not approach the engine yet.",
          "Wait at least 20 minutes before opening anything. The radiator is under high pressure when hot, and a hot radiator cap removed early can cause severe burns.",
          "Call us at (972) 231-2886 or call for a tow. Driving an overheating engine costs head gaskets in minutes.",
        ],
      },
      { type: "h2", text: "The seven most common causes, by frequency" },
      {
        type: "p",
        text: "These are the causes we see in our Richardson bays, ordered roughly by how often they show up.",
      },
      { type: "h2", text: "1. Low coolant" },
      {
        type: "p",
        text: "Coolant has leaked out, evaporated, or was never properly refilled after the last service. The system runs out of fluid to carry heat away. Cost to refill: $20 to $60 if there is no underlying leak. Cost to find and fix the leak: $100 to $400 depending on the source.",
      },
      { type: "h2", text: "2. Failed thermostat" },
      {
        type: "p",
        text: "The thermostat regulates coolant flow based on temperature. When it fails closed, coolant cannot circulate and the engine overheats fast. Replacement: $220 to $500 depending on access.",
      },
      { type: "h2", text: "3. Water pump failure" },
      {
        type: "p",
        text: "The pump drives coolant through the engine. When the impeller breaks or the bearing seizes, coolant stops flowing. Replacement: $450 to $1,200 depending on whether it is timing-belt driven.",
      },
      { type: "h2", text: "4. Cooling fan or fan relay" },
      {
        type: "p",
        text: "At low speeds, the electric fan pulls air through the radiator. If the fan motor or its relay has failed, the engine overheats in stop-and-go traffic but cools down on the highway. Cost: $250 to $700.",
      },
      { type: "h2", text: "5. Clogged or failing radiator" },
      {
        type: "p",
        text: "Internal corrosion or external damage. Replacement runs $500 to $1,200 including labor and a fresh coolant fill.",
      },
      { type: "h2", text: "6. Burst or split hose" },
      {
        type: "p",
        text: "Rubber cooling hoses get brittle in Texas heat over years. A burst hose dumps coolant in seconds. Hose replacement: $150 to $400.",
      },
      { type: "h2", text: "7. Head gasket failure" },
      {
        type: "p",
        text: "The serious one, usually the result of overheating that was driven through. Combustion gases enter the cooling system, coolant enters the cylinders. Repair: $1,800 to $3,500. This is why we say pull over.",
      },
      {
        type: "callout",
        title: "If your gauge is climbing right now",
        body: "Pull over. Engine off. Do not open the radiator cap until the engine has cooled for at least 20 minutes. Call (972) 231-2886 or arrange a tow. Driving an overheating engine to make it home is the most expensive decision you will make this year.",
      },
      { type: "h2", text: "Why summer is the season this happens" },
      {
        type: "p",
        text: "100°F+ ambient temperatures, AC running constantly, and stop-and-go traffic on 75 are the perfect storm for cooling systems. Marginal hoses fail, marginal thermostats stick, marginal water pumps quit. If your system is over 60,000 miles since the last flush, get it checked in spring before August has the final word.",
      },
    ],
    related: ["seasonal-car-care-texas", "oil-change-frequency"],
  },

  {
    slug: "dealer-vs-independent-mechanic",
    category: "Buying & Maintenance",
    title: "Dealer vs. independent mechanic: when each one makes sense",
    description:
      "When the dealer is the right call, when an independent shop wins, and what the real labor-rate and quality differences look like for Richardson and DFW drivers.",
    publishedDate: "2026-03-29",
    readMinutes: 5,
    heroImage: "/assets/resource-dealer-vs-independent.avif",
    heroAlt:
      "Independent neighborhood auto repair shop bay with a vehicle on the lift, the kind of family-owned mechanic an alternative to the dealer",
    eyebrow: "Buying & Maintenance",
    lede: "Whether to take your car to the dealer or an independent shop is one of the most common questions we get. The honest answer: about 90 percent of the time, an independent shop is the right call. Here is the other 10 percent, and the math behind both.",
    sections: [
      { type: "h2", text: "When the dealer is genuinely the right call" },
      {
        type: "ul",
        items: [
          "Active manufacturer recall, recalls are free at the dealer regardless of mileage",
          "Warranty work, anything still covered under powertrain or bumper-to-bumper",
          "Factory software updates, some are dealer-only",
          "Brand-new model years where parts are scarce in the aftermarket",
          "Specific software-only diagnostics on certain European brands (some BMW, MB, Porsche modules)",
        ],
      },
      { type: "h2", text: "When an independent shop wins" },
      {
        type: "ul",
        items: [
          "Out-of-warranty maintenance and repair (90% of cars on the road)",
          "Anything where the dealer quote feels like a number out of a hat",
          "Brake jobs, oil changes, tires, AC service, every routine repair",
          "Engine and transmission work, same quality, half the labor cost",
          "When you want the same technician working on your car every time",
        ],
      },
      { type: "h2", text: "The labor-rate math" },
      {
        type: "p",
        text: "DFW dealer labor rates run $150 to $200 per hour. Independent shops in the same area run $90 to $130 per hour. On a five-hour repair, that is a $300 to $500 difference before parts. Multiply that across a year of family-fleet maintenance and the numbers add up.",
      },
      { type: "h2", text: "The quality myth" },
      {
        type: "p",
        text: "There is a story that dealer technicians are better-trained than independent technicians. That is not generally true. Both are typically ASE-Certified. Both train on the same systems. The actual difference is that dealers tend to be Toyota specialists or Honda specialists or BMW specialists, while a good independent shop sees every brand every day. For unusual or cross-brand problems, that breadth often wins.",
      },
      { type: "h2", text: "What you give up at an independent shop" },
      {
        type: "p",
        text: "Loaner cars (sometimes), waiting-room espresso machines (definitely), and proximity to the dealership new-car showroom (which we will not pretend is a meaningful loss). Loaners are the real one, most independents do not provide them, though we can usually arrange a ride or recommend a nearby spot.",
      },
      {
        type: "callout",
        title: "Got a dealer quote you want a second opinion on?",
        body: "Bring it in. We will inspect your car, give you our honest assessment, and tell you straight whether the dealer's recommended work is necessary. The diagnostic fee is credited toward repair if you have us do the work.",
      },
      { type: "h2", text: "The NAPA Auto Care tiebreaker" },
      {
        type: "p",
        text: "Our NAPA nationwide warranty travels. If you move to Phoenix, road-trip to Maine, or break down in a small town in Oklahoma on a Tuesday, the warranty applies at any of 17,000+ NAPA Auto Care Centers. Dealer warranty work is more rigid and brand-specific.",
      },
    ],
    related: ["check-engine-light-guide", "oil-change-frequency"],
  },

  {
    slug: "catalytic-converter-replacement-cost",
    category: "Emissions & Inspections",
    title: "Catalytic converter replacement: signs, cost, and the theft problem",
    description:
      "What a catalytic converter actually does, the symptoms of failure, real cost ranges, OEM vs. aftermarket trade-offs, and the cat theft epidemic in DFW.",
    publishedDate: "2026-04-02",
    readMinutes: 6,
    heroImage: "/assets/resource-catalytic-converter.avif",
    heroAlt:
      "Underside view of a catalytic converter mounted in a vehicle exhaust system, the emissions component vulnerable to theft and failure",
    eyebrow: "Emissions & Inspections",
    lede: "Catalytic converter replacement is one of the most expensive maintenance items most drivers will face, and one of the most commonly misdiagnosed. Here is what it actually does, when it actually fails, and what you should expect to pay.",
    sections: [
      { type: "h2", text: "What a catalytic converter actually does" },
      {
        type: "p",
        text: "Your engine produces exhaust that contains carbon monoxide, hydrocarbons, and nitrogen oxides. The catalytic converter is a chamber in the exhaust system filled with precious-metal coating (platinum, palladium, rhodium) that converts those harmful gases into less harmful ones before they leave the tailpipe. Without it, your car would fail every emissions inspection and produce far more pollution.",
      },
      { type: "h2", text: "Symptoms of a failing cat" },
      {
        type: "ul",
        items: [
          "Check engine light with code P0420 or P0430 (catalyst efficiency below threshold)",
          "Sulfur or rotten-egg smell from the exhaust",
          "Sluggish acceleration, especially up hills",
          "Failed Texas state emissions inspection",
          "Rattling sound from underneath when idling (broken substrate)",
          "Dramatic drop in fuel economy",
        ],
      },
      { type: "h2", text: "Why P0420 does not always mean the cat" },
      {
        type: "p",
        text: "P0420 reports that the catalyst is reading inefficient. The cause might be the cat itself. Or it might be a failing oxygen sensor giving a bad reading, an exhaust leak before the cat, or an upstream fuel-mixture problem causing the cat to read inefficient. A real diagnostic process rules out the cheap fixes ($150 to $400) before recommending the expensive one ($1,500+).",
      },
      { type: "h2", text: "Realistic cost ranges" },
      {
        type: "ul",
        items: [
          "Aftermarket cat replacement, sedan: $800 to $1,500",
          "OEM cat replacement, sedan: $1,500 to $2,500",
          "Truck or SUV (larger system): $1,500 to $3,500",
          "European luxury or hybrid: $2,500 to $5,000+",
          "Just the upstream O2 sensor (when that's actually the cause): $150 to $400",
        ],
      },
      { type: "h2", text: "OEM vs aftermarket, the honest trade-off" },
      {
        type: "p",
        text: "OEM cats use more precious metal and last longer (often the life of the car). California-compliant aftermarket cats are quality parts and meet emissions, typically lasting 5 to 7 years. Cheap, federally-compliant aftermarket cats can fail within a year or two and are illegal to sell in California (Texas allows them but does not require them). We use California-compliant aftermarket as a default, OEM on request.",
      },
      { type: "h2", text: "Texas state inspection: the cat is required" },
      {
        type: "p",
        text: "If your check engine light is on for a catalyst code, you will fail emissions. No exceptions. We diagnose, repair, and re-inspect within 15 days at the same shop with no additional inspection fee.",
      },
      { type: "h2", text: "Catalytic converter theft in DFW" },
      {
        type: "p",
        text: "Cat theft has been a serious issue across the metroplex for several years. The precious metals inside are valuable to scrap yards, and a thief with a battery-powered saw can steal one in under two minutes. Trucks (high ground clearance, easy access) and Toyota Priuses (high precious-metal content) are the most-targeted vehicles.",
      },
      {
        type: "ul",
        items: [
          "Park in a garage when possible",
          "Etch your license plate number on the cat (most insurance recovery requires it)",
          "Add a steel cat shield ($200 to $400 installed)",
          "Park nose-in against a wall, light up the parking area",
          "If your insurance covers it, theft replacement may be more affordable than you think",
        ],
      },
      {
        type: "callout",
        title: "Suspect your cat is gone?",
        body: "Telltale sign: dramatic loud roar from the exhaust the moment you start the car. Do not drive far. Bring it to us, we will confirm and quote the replacement.",
      },
    ],
    related: ["check-engine-light-guide", "texas-state-inspection-guide"],
  },

  {
    slug: "tpms-warning-light-guide",
    category: "Tires",
    title: "TPMS light on? What it means and what to do (and not do)",
    description:
      "A practical guide to your tire pressure warning light: what triggers it, why cold mornings cause false alarms, when sensors die, and when to call the shop.",
    publishedDate: "2026-04-26",
    readMinutes: 4,
    heroImage: "/assets/resource-tpms.png",
    heroAlt:
      "Amber TPMS tire pressure warning light symbol illuminated on a vehicle dashboard gauge cluster",
    eyebrow: "Tires",
    lede: "The horseshoe-shaped TPMS warning light is one of the most ignored dashboard indicators on the road. Here is what it actually means, why it sometimes lies, and when you should treat it as urgent.",
    sections: [
      { type: "h2", text: "What TPMS is and why your car has it" },
      {
        type: "p",
        text: "TPMS stands for Tire Pressure Monitoring System. Federal law has required it on all new passenger vehicles sold in the U.S. since September 2007. Each tire has a small sensor inside that reports its pressure to the car's computer. When pressure drops 25 percent below the placard recommendation, the light turns on.",
      },
      { type: "h2", text: "Steady vs. flashing" },
      {
        type: "p",
        text: "A steady light means at least one tire is genuinely under-pressure. A flashing light (typically flashes for 60 seconds at startup, then stays solid) means the system itself has a fault, usually a dead sensor or a sensor that has not been programmed after a tire change.",
      },
      { type: "h2", text: "The cold-morning false alarm" },
      {
        type: "p",
        text: "Air pressure drops about 1 PSI for every 10°F drop in temperature. After a sudden cold front in DFW (typical in November and February), tires that were properly inflated yesterday afternoon can be 4 to 5 PSI low this morning. Solution: top off your tires once it warms up, drive a few miles, and the light usually clears on its own. If it does not, you have a slow leak.",
      },
      { type: "h2", text: "Real causes worth knowing" },
      {
        type: "ul",
        items: [
          "Slow leak from a nail or screw (most common, find it before it gets worse)",
          "Valve stem leak (rare on modern wheels but possible)",
          "TPMS sensor battery has died (sensors typically last 7 to 10 years)",
          "Sensor was damaged during a tire change at a different shop",
          "Aftermarket wheels installed without TPMS sensors transferred or replaced",
        ],
      },
      { type: "h2", text: "What to do, in order" },
      {
        type: "ol",
        items: [
          "Check all four tires with a gauge (do not trust the dashboard reading alone, it can lag).",
          "Inflate any low tires to the placard pressure (usually printed on the door jamb sticker).",
          "Drive 10 to 15 miles. The light should clear on its own once pressures stabilize.",
          "If the light comes back within a few days: you have a slow leak. Schedule us.",
          "If the light flashes at startup: you need a sensor diagnostic. Schedule us.",
        ],
      },
      {
        type: "callout",
        title: "Free TPMS diagnostic with any tire service",
        body: "Bring it in any weekday or Saturday morning. We will scan each sensor, check the relearn status, and diagnose any sensor faults. If a sensor needs replacement, we quote upfront before any work starts.",
      },
      { type: "h2", text: "Why we do not recommend turning the light off and ignoring it" },
      {
        type: "p",
        text: "There are kits and methods online that disable TPMS. We do not recommend any of them. The light exists to warn you about a real safety condition. Underinflated tires generate excess heat, wear unevenly, reduce fuel economy, and increase your risk of a blowout, especially in Texas summer heat. Find the cause, fix the cause, leave the system on.",
      },
    ],
    related: ["seasonal-car-care-texas", "when-to-replace-brakes"],
  },

  {
    slug: "pre-purchase-inspection-checklist",
    category: "Buying & Maintenance",
    title: "Pre-purchase inspection: what we check on a used car (and what to ask)",
    description:
      "The 30-point inspection we run on used cars before our customers buy them, the red flags we watch for, and why a $150 PPI saves thousands.",
    publishedDate: "2026-03-08",
    readMinutes: 6,
    heroImage: "/assets/resource-pre-purchase-inspection.avif",
    heroAlt:
      "Mechanic inspecting a used vehicle on a shop lift, performing a pre-purchase inspection before a buyer signs the title",
    eyebrow: "Buying & Maintenance",
    lede: "A pre-purchase inspection costs $150 and takes about an hour. The most expensive used car you can buy is the one you did not have inspected first. Here is what we check, why we check it, and what you should walk away from.",
    sections: [
      { type: "h2", text: "Why a $150 PPI saves thousands" },
      {
        type: "p",
        text: "Once you sign the title, every problem is yours. A pre-purchase inspection is the cheapest insurance available against buying someone else's deferred maintenance, hidden accident damage, or impending major repair. The customer who skipped the PPI on a 2015 luxury SUV last year and called us the following week with a $4,200 transmission quote is the customer who taught us to write this article.",
      },
      { type: "h2", text: "The 30-point inspection we run" },
      { type: "h2", text: "Engine and drivetrain" },
      {
        type: "ul",
        items: [
          "Cold start observation (smoke, knock, rough idle)",
          "Visual inspection of hoses, belts, gaskets",
          "Oil condition and level (sludge, water contamination)",
          "Coolant condition (oil contamination indicates head gasket issues)",
          "Transmission fluid color and smell (dark or burnt = trouble)",
          "Compression test on suspect engines",
          "Live data scan of all modules",
        ],
      },
      { type: "h2", text: "Brakes and suspension" },
      {
        type: "ul",
        items: [
          "Pad thickness, rotor wear, fluid condition",
          "Caliper, hose, line inspection",
          "Strut, shock, bushing condition",
          "Steering rack play, tie rod ends, ball joints",
          "Wheel bearing noise on a road test",
        ],
      },
      { type: "h2", text: "Body, frame, and structural" },
      {
        type: "ul",
        items: [
          "Frame and unibody inspection for collision repair signs",
          "Paint thickness gauge readings on body panels",
          "Door, hood, trunk gap consistency (mismatched panels = repaired collision)",
          "Underbody rust, especially on older trucks",
          "Flood-vehicle check (waterlines on interior, sand in unusual places)",
        ],
      },
      { type: "h2", text: "Tires, electrical, and HVAC" },
      {
        type: "ul",
        items: [
          "Tire tread depth, age (DOT date), wear pattern",
          "Battery age and charging system test",
          "Every interior and exterior light",
          "AC performance test (cold air on max, both vent positions)",
          "Heater function",
        ],
      },
      { type: "h2", text: "Documentation review" },
      {
        type: "ul",
        items: [
          "Carfax / AutoCheck history",
          "Service records, if available",
          "VIN match across plate, engine bay, dashboard",
          "Odometer plausibility (cluster discrepancy is a major red flag)",
          "Title check for prior salvage or rebuilt status",
        ],
      },
      { type: "h2", text: "Red flags that mean walk away" },
      {
        type: "ul",
        items: [
          "Cluster discrepancy (odometer reading does not match wear and service records)",
          "Frame straightening evidence (poorly aligned welds, paint mismatch under hood)",
          "Flood damage (corrosion under carpets, sand in obscure places, bad smell)",
          "Multiple major fluids contaminated (oil in coolant, coolant in oil)",
          "Major modules throwing codes the seller refuses to address",
        ],
      },
      { type: "h2", text: "DFW-specific things we look for" },
      {
        type: "ul",
        items: [
          "Hail damage repair (Texas hail seasons are severe)",
          "Flood vehicles after Houston-area storms (flood cars often migrate up I-45)",
          "Heat-cooked rubber and plastics (hoses brittle past their interval)",
          "AC system that has been topped off repeatedly (refrigerant residue on connections)",
        ],
      },
      {
        type: "callout",
        title: "Bring the car. We will write up the report.",
        body: "Schedule a PPI by phone, about an hour, $150. We give you a written report you can use to negotiate, walk away, or buy with confidence. We do not have any relationship with any seller, dealer, or auction.",
      },
    ],
    related: ["check-engine-light-guide", "texas-state-inspection-guide"],
  },

  {
    slug: "wheel-alignment-vs-balancing",
    category: "Tires",
    title: "Wheel alignment vs. tire balancing: what's the difference?",
    description:
      "The two services that get confused with each other constantly. What each one actually does, the symptoms of each, and why you usually need both after new tires.",
    publishedDate: "2026-02-28",
    readMinutes: 4,
    heroImage: "/assets/resource-wheel-alignment.avif",
    heroAlt:
      "Vehicle on an alignment rack with sensors mounted to each wheel during a four-wheel alignment service",
    eyebrow: "Tires",
    lede: "Alignment and balancing are two different services that solve two different problems. Half the customers who ask for one need the other. Here is the plain-English difference.",
    sections: [
      { type: "h2", text: "Alignment, in one sentence" },
      {
        type: "p",
        text: "Alignment adjusts the angles at which your tires meet the road. When the angles are off, the car pulls to one side, the steering wheel sits crooked when going straight, and the tires wear unevenly across their tread.",
      },
      { type: "h2", text: "Balancing, in one sentence" },
      {
        type: "p",
        text: "Balancing distributes weight evenly around each wheel and tire. When the weight is uneven, the wheel wobbles as it spins. You feel that wobble as a vibration, almost always at highway speed.",
      },
      { type: "h2", text: "Symptoms that need alignment" },
      {
        type: "ul",
        items: [
          "Car pulls to one side on a flat road with hands light on the wheel",
          "Steering wheel sits crooked when driving straight",
          "Tires wearing unevenly (more on inside or outside edge)",
          "After a hard pothole hit or curb impact",
          "After replacing a tie rod, control arm, or other suspension part",
          "After a collision repair",
        ],
      },
      { type: "h2", text: "Symptoms that need balancing" },
      {
        type: "ul",
        items: [
          "Steering wheel vibrates at highway speeds (typically 55 to 70 mph)",
          "Vibration in the seat or floor (rear tires unbalanced)",
          "Vibration disappears below 50 mph",
          "After a wheel weight has fallen off (you can sometimes see the marks)",
          "After a tire patch repair",
        ],
      },
      { type: "h2", text: "Why both after new tires" },
      {
        type: "p",
        text: "When you buy new tires, the shop balances them as part of the install. But the alignment is unaffected by tire change, if your car was misaligned with the old tires, it is still misaligned with the new ones, and the new tires will start wearing unevenly within a few thousand miles. Spending an extra $100 to $140 on an alignment after new tires often pays for itself in tire life alone.",
      },
      { type: "h2", text: "DFW pothole season" },
      {
        type: "p",
        text: "After every Texas freeze-thaw cycle and every heavy rainstorm, the metro's roads gain a new generation of potholes. Hitting one hard enough to bend a control arm or knock the alignment is a real possibility on Belt Line, on 75, on Coit, on the Bush Tollway. If your steering does not feel quite right after a hard hit, get the alignment checked.",
      },
      {
        type: "callout",
        title: "Alignment + balance combo",
        body: "Most cars need a four-wheel alignment and a balance. We quote them separately so you can decide what your car needs. After new tires, we recommend both as a package.",
      },
      { type: "h2", text: "What the numbers actually look like" },
      {
        type: "ul",
        items: [
          "Tire balance, all four wheels: $50 to $80",
          "Wheel alignment, four-wheel: $100 to $140",
          "Both together with new tires: $150 to $220",
          "Tire-life savings from a proper alignment: roughly 25 percent of tire life",
        ],
      },
    ],
    related: ["seasonal-car-care-texas", "tpms-warning-light-guide"],
  },
];

export const RESOURCE_SLUGS = RESOURCES.map((r) => r.slug);
