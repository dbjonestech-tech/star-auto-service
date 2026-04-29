/**
 * Areas-served data for /areas/[slug] landing pages.
 */

export type Area = {
  slug: string;
  name: string;
  state: string;
  /** Estimated drive time from the shop. */
  driveTime: string;
  /** Approximate distance in miles. */
  distance: string;
  /** Short typographic positioning line. */
  positioning: string;
  /** Multi-paragraph body. */
  intro: string[];
  /** What kind of vehicles / drivers we typically see from this area. */
  drivers: string;
  /** A point of local color (a road name, neighborhood, etc.). */
  localDetail: string;
  /** Bullet list of services especially relevant to this city. */
  topServices: string[];
  /** Hero photo URL. */
  heroImage: string;
  heroAlt: string;
};

export const AREAS: Area[] = [
  {
    slug: "richardson-tx",
    name: "Richardson",
    state: "TX",
    driveTime: "On Belt Line, in Richardson",
    distance: "Home base",
    positioning: "Where we live, where we work, where we've been since 1998.",
    intro: [
      "The Star Auto Service has been on E Belt Line Road since 1998, twenty-eight years on the same corner. Richardson is home. The shop and the people in it are part of the neighborhood.",
      "We service Richardson drivers from Canyon Creek, Heights, J.J. Pearce, Berkner, Cottonwood Heights, Dover Park, Sherrill Park, and everywhere in between. Old and new, domestic and import, from teenager-first-car to retirement Tahoe.",
    ],
    drivers:
      "Daily commuters down 75, families running between Richardson ISD schools, retirees who've been bringing the same Camry in since the W presidency, UTD students, transplants from out of state. We see all of it.",
    localDetail:
      "We're across from Coin Laundry on E Belt Line, a few minutes from Richardson Square, between Plano Road and Jupiter. Easy in, easy out, and walk-ins always welcome.",
    topServices: [
      "Texas state safety + emissions inspections (walk-in)",
      "Brake repair, the local roads are easy on brakes; long highway commutes aren't",
      "Oil changes timed to your real driving, not a sticker",
      "AC service in time for August (book in March, you'll thank yourself)",
      "Pre-purchase inspections for used cars from any nearby lot",
    ],
    heroImage: "/assets/area-richardson.jpg",
    heroAlt: "Richardson, Texas neighborhood at golden hour",
  },
  {
    slug: "garland-tx",
    name: "Garland",
    state: "TX",
    driveTime: "About 8–12 minutes",
    distance: "5 miles",
    positioning: "A short hop east on Belt Line, and worth the drive.",
    intro: [
      "Garland drivers have been making the short trip down Belt Line for years. We're easy to get to: Belt Line Road runs straight through, no highway hopping required, no toll-tag drama.",
      "Whether you're coming from Firewheel, Duck Creek, Lake Highlands-adjacent neighborhoods, or out by Naaman Forest High School, the drive over is short and the difference in honesty is the part you keep coming back for.",
    ],
    drivers:
      "Long-time Garland families, multi-vehicle households, fleet trucks from local small businesses, and plenty of folks who've gotten burned at chain shops on Northwest Highway.",
    localDetail:
      "Less than 6 miles from Garland city center via E Belt Line Road, straight shot west.",
    topServices: [
      "Brake jobs, Garland-to-downtown commutes are stop-and-go",
      "Texas state inspections (we stay open until 4 on Saturdays)",
      "Engine diagnostics, second opinions on dealer quotes",
      "AC repair, the year-round Texas necessity",
      "Transmission service for higher-mileage commuter vehicles",
    ],
    heroImage: "/assets/area-garland.jpeg",
    heroAlt: "Aerial view of Garland, Texas at golden hour",
  },
  {
    slug: "plano-tx",
    name: "Plano",
    state: "TX",
    driveTime: "About 10–15 minutes",
    distance: "6 miles",
    positioning: "Short drive south, big difference in pricing.",
    intro: [
      "Plano drivers come to us when the dealer quote feels like a number that came out of a hat. We give you the straight version: what your car actually needs, what it doesn't, and what the realistic cost is at a non-dealer rate.",
      "From West Plano, Legacy West, downtown Plano, or out by Bob Woodruff Park, the drive south on Coit or 75 to Belt Line is fast and the parking is easier than wherever you've been.",
    ],
    drivers:
      "Plano drivers tend to bring us late-model imports, Lexus, Acura, BMW, Mercedes, for second opinions on dealer quotes. We give straight diagnoses on European and Asian makes alike.",
    localDetail:
      "About 6 miles south on Coit or 15 minutes via 75 South, easier than the Plano dealership lots.",
    topServices: [
      "Second opinions on dealer-recommended work",
      "Maintenance for late-model luxury imports without dealer markup",
      "Brake repair using OEM-quality parts at independent prices",
      "Engine diagnostics for codes the dealer couldn't pin down",
      "Cooling system service for the fleets of Lexus, BMW, and Mercedes we see weekly",
    ],
    heroImage: "/assets/area-plano.jpg",
    heroAlt: "Plano, Texas town center with brick buildings",
  },
  {
    slug: "dallas-tx",
    name: "Dallas",
    state: "TX",
    driveTime: "About 15–25 minutes from north Dallas",
    distance: "10–14 miles",
    positioning: "North Dallas drivers, the trip pays for itself.",
    intro: [
      "North Dallas drivers, Lake Highlands, Lakewood, White Rock, M Streets, Vickery Park, make the trip up because it's worth it. The shop rate is honest, the work is right the first time, and there's nobody trying to upsell you on a cabin air filter you replaced six months ago.",
      "Take 75 north to Belt Line, hang east. Twenty minutes off-peak, less on a Saturday morning before the lines at the inspection stations get long.",
    ],
    drivers:
      "Lake Highlands and Lakewood families, professionals on the 75 corridor, and a steady stream of word-of-mouth referrals from Dallas friends who got tired of the dealer routine.",
    localDetail:
      "Belt Line Road runs east-west across the metro, easy access from anywhere on 75 or the Dallas North Tollway.",
    topServices: [
      "Pre-purchase inspections for cars off Park Cities and Lakewood lots",
      "Brake and rotor replacement (downtown commute eats brakes)",
      "AC repair, north Dallas summer is brutal, year after year",
      "Engine diagnostics on intermittent issues",
      "Maintenance schedules built around your actual driving",
    ],
    heroImage: "/assets/area-dallas.webp",
    heroAlt: "Dallas, Texas downtown skyline",
  },
  {
    slug: "allen-tx",
    name: "Allen",
    state: "TX",
    driveTime: "About 20 minutes",
    distance: "12 miles",
    positioning: "Family fleets, honest service, worth the drive north.",
    intro: [
      "Allen families bring us their fleet, Suburbans, Sequoias, F-150s, plus the kid's first car, because what costs $1,200 at a north-suburbs chain shop costs less here, and the diagnosis is real.",
      "Take 75 south or Custer to Belt Line, then east. About twenty minutes door-to-door. Worth the trip when you've got more than one car to keep on the road.",
    ],
    drivers:
      "Multi-vehicle Allen households, parents shuttling kids to Allen ISD games, and folks who've discovered that 'family-owned shop in Richardson' really does mean something different from the strip-mall chains.",
    localDetail:
      "Twenty minutes south on 75 or Custer Road, direct shot down to E Belt Line.",
    topServices: [
      "Family-fleet maintenance (we'll keep your records for every car)",
      "Pre-purchase inspections for first-cars or replacements",
      "Brake service across the household, multi-car discount on the work, not on the parts",
      "Texas state inspections, walk-in",
      "Engine repair without the dealer markup",
    ],
    heroImage: "/assets/area-allen.jpg",
    heroAlt: "City of Allen, Texas water tower over the suburbs",
  },
  {
    slug: "murphy-tx",
    name: "Murphy",
    state: "TX",
    driveTime: "About 12 minutes",
    distance: "7 miles",
    positioning: "The neighborhood shop, just over the line.",
    intro: [
      "Murphy is small, and you can tell, neighbors recommend us to neighbors over backyard fences. About a third of the cars on our lifts on any given Saturday came in because someone in Murphy told someone else to call us.",
      "Belt Line west or McCreary north, twelve minutes from most of Murphy. Easier than fighting the bigger shops down on 190.",
    ],
    drivers:
      "Murphy families, daily commuters into Plano and Richardson, retirees who don't want to drive into a dealership service lane ever again.",
    localDetail:
      "Ten minutes via Belt Line, closer to us than to most of the bigger Plano dealer shops.",
    topServices: [
      "Maintenance schedules tied to your real driving (Murphy → Richardson → home)",
      "Brake and tire service",
      "Oil changes you can wait for, walk-in",
      "Texas state inspections",
      "AC service (book in March, before the rush)",
    ],
    heroImage: "/assets/area-murphy.jpeg",
    heroAlt: "Murphy, Texas residential neighborhood at sunset",
  },
];

export const AREA_SLUGS = AREAS.map((a) => a.slug);
