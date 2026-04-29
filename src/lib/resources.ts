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

  {
    slug: "ac-compressor-replacement-cost",
    category: "AC & HVAC",
    title: "AC compressor replacement cost: what Texas drivers actually pay",
    description:
      "Real cost ranges for AC compressor replacement in North Texas, why our climate burns them out faster, and the symptoms to watch for before yours fails.",
    publishedDate: "2026-05-04",
    readMinutes: 6,
    heroImage:
      "https://images.unsplash.com/photo-1534093607318-f025413f49cb?w=1600&q=75&auto=format&fit=crop",
    heroAlt: "Vehicle AC compressor and serpentine belt under the hood",
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
    heroImage:
      "https://images.unsplash.com/photo-1581094288338-2244c4b50ad2?w=1600&q=75&auto=format&fit=crop",
    heroAlt: "Multimeter probes on a car battery during a charging system test",
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
    heroImage:
      "https://images.unsplash.com/photo-1605152276897-4f618f831968?w=1600&q=75&auto=format&fit=crop",
    heroAlt: "Mechanic working under the hood on a timing system",
    eyebrow: "Engine Repair",
    lede: "A timing belt is the single piece of maintenance with the highest catastrophic-failure cost relative to its replacement cost. Skip it past its interval and a $700 job becomes a $4,000 job overnight. Here is everything you actually need to know.",
    sections: [
      { type: "h2", text: "Belt or chain — how to know what you have" },
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
    heroImage:
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1600&q=75&auto=format&fit=crop",
    heroAlt: "Fresh motor oil being poured during routine service",
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
          "Trust your manufacturer's recommendation and your oil-life monitor — both are calibrated for the real world",
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
    heroImage:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1600&q=75&auto=format&fit=crop",
    heroAlt: "Vehicle dashboard temperature gauge approaching the red zone",
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
];

export const RESOURCE_SLUGS = RESOURCES.map((r) => r.slug);
