/**
 * Every word and number on the page lives here.
 *
 * Some details are sample content, written to the shape of a working haulage
 * desk: lane run times, the fleet's volumes, the "what we move" rows and the
 * on-time share. Replace them with Kanai's own figures before launch.
 */

export const site = {
  name: "Kanai",
  legalName: "Kanai Logistics Ltd",
  description:
    "Kanai runs trucks and vans for cargo hauling across Kenya — full loads, part loads, van runs and containers out of Mombasa, quoted fixed from one dispatch desk in Nairobi.",
  phoneDisplay: "+254 700 214 880",
  phoneHref: "tel:+254700214880",
  whatsappHref: "https://wa.me/254700214880",
  email: "dispatch@kanai.co.ke",
  emailHref: "mailto:dispatch@kanai.co.ke",
  address: "Enterprise Road, Industrial Area, Nairobi",
  hours: "Dispatch desk open 24 hours",
  founded: 2016,
  /** Static so the page can prerender cleanly (Cache Components). */
  copyrightYear: 2026,
} as const;

/** The one action, named the same way everywhere. It opens a written enquiry. */
const quoteBody = [
  "Pickup:",
  "Drop-off:",
  "What is moving (weight and volume):",
  "When it needs to move:",
  "Loading notes:",
  "",
  "Sent from the Kanai website.",
].join("\n");

export const quoteAction = {
  label: "Get a quote",
  href: `${site.emailHref}?subject=${encodeURIComponent(
    "Quote request — cargo haulage",
  )}&body=${encodeURIComponent(quoteBody)}`,
} as const;

export const navLinks = [
  { label: "Fleet", href: "#fleet" },
  { label: "Lanes", href: "#lanes" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Contact", href: "#contact" },
] as const;

export const hero = {
  headline: ["Trucks for", "Kenyan cargo."],
  support:
    "Kanai hauls full loads, part loads and van runs out of Nairobi, on fixed lanes, at a price agreed before pickup.",
  note: "Dispatch desk answers every hour, every day.",
  picture: {
    src: "/images/lorry-viaduct.jpg",
    alt: "A lorry raising dust on a murram road beneath the concrete piers of the viaduct at Mazeras, near Mombasa.",
    caption:
      "A lorry on the murram road under the viaduct at Mazeras, near Mombasa.",
  },
} as const;

export const portBand = {
  src: "/images/port-cranes.jpg",
  alt: "Gantry cranes over stacked containers and waiting trucks at the Port of Mombasa.",
  caption:
    "The Port of Mombasa, where most of Kenya's imported containers start their inland run.",
} as const;

export const lanes = {
  heading: "The lanes we run.",
  note: "Every lane below leaves daily. Anything off the list is quoted in the same hour.",
  columns: ["Lane", "Route", "Transit"],
  rows: [
    {
      lane: "Nairobi → Mombasa",
      route: "Northern Corridor · A109 · 485 km",
      transit: "8–10 hrs",
    },
    {
      lane: "Mombasa → Nairobi",
      route: "A109 · container haulage · 485 km",
      transit: "8–10 hrs",
    },
    {
      lane: "Nairobi → Kisumu",
      route: "A104 · via Nakuru and Kericho · 350 km",
      transit: "6–7 hrs",
    },
    {
      lane: "Nairobi → Eldoret",
      route: "A104 · via Nakuru · 310 km",
      transit: "5–6 hrs",
    },
    {
      lane: "Nairobi → Nakuru",
      route: "A104 · Rift Valley escarpment · 160 km",
      transit: "2.5–3 hrs",
    },
    {
      lane: "Eldoret → Malaba",
      route: "A104 · Uganda border · 120 km",
      transit: "2–3 hrs",
    },
  ],
  counties:
    "Standing lanes cover twenty counties: Nairobi, Mombasa, Kisumu, Nakuru, Uasin Gishu, Kiambu, Machakos, Kajiado, Nyeri, Kilifi, Kakamega, Bungoma, Trans Nzoia, Kericho, Narok, Meru, Embu, Kwale, Taita Taveta and Garissa.",
  onTime: "99.2% of loads signed for inside the agreed window.",
  picture: {
    src: "/images/lorry.jpg",
    alt: "A lorry working a rutted rural road in Kenya.",
    caption: "A lorry on a rural road in Kenya.",
  },
} as const;

export const fleet = {
  heading: "Every load has a vehicle.",
  paragraph:
    "A 12 m³ van for the morning shop run; a 90 m³ prime mover for a container out of Mombasa. Six vehicles between them, priced on weight and volume, so you pay for the space you need.",
  control: "How much is moving?",
  loadLabel: "Your load",
  options: [
    {
      id: "500",
      chip: "500 kg",
      load: "500 kg",
      vehicle: "Delivery van",
      volume: "12 m³",
      capacity: "up to 1.5 t",
      bestFor: "Shop restocking and same-day metro runs",
    },
    {
      id: "1500",
      chip: "1.5 t",
      load: "1.5 t",
      vehicle: "Delivery van",
      volume: "12 m³",
      capacity: "up to 1.5 t",
      bestFor: "Palletised goods the length of the city",
    },
    {
      id: "3000",
      chip: "3 t",
      load: "3 t",
      vehicle: "Pickup and light truck",
      volume: "24 m³",
      capacity: "up to 3 t",
      bestFor: "Building supplies and upcountry runs",
    },
    {
      id: "7000",
      chip: "7 t",
      load: "7 t",
      vehicle: "Medium truck",
      volume: "38 m³",
      capacity: "up to 7 t",
      bestFor: "FMCG distribution and part loads",
    },
    {
      id: "18000",
      chip: "18 t",
      load: "18 t",
      vehicle: "Heavy truck",
      volume: "62 m³",
      capacity: "up to 18 t",
      bestFor: "Cement, steel and aggregates",
    },
    {
      id: "28000",
      chip: "28 t",
      load: "28 t",
      vehicle: "Prime mover",
      volume: "90 m³",
      capacity: "up to 28 t",
      bestFor: "Full loads and containers off the ship",
    },
  ],
} as const;

export const howItWorks = {
  heading: "From enquiry to signature.",
  paragraph:
    "No account to open and no minimum order. Send the load and dispatch takes it from there, on one phone number for the whole run.",
  diagramAlt:
    "A diagram of loads scattered loosely in a field, drawn along their routes onto the lanes, and leaving as evenly spaced vehicles.",
  steps: [
    {
      title: "Tell us what is moving",
      body: "Weight, volume, pickup and drop-off. One message or one call.",
    },
    {
      title: "Get a fixed price",
      body: "Quoted inside the hour, covering the vehicle, the driver and the route.",
    },
    {
      title: "We collect and go",
      body: "The driver calls before arrival and loads with your crew at both ends.",
    },
    {
      title: "Track to the doorstep",
      body: "Trip updates by phone, and a signed delivery note for your records.",
    },
  ],
} as const;

export const handling = {
  heading: "What we move.",
  intro: "The same fleet, used six ways.",
  columns: ["Commodity", "Vehicle", "How it travels"],
  rows: [
    [
      "Cement, steel and aggregates",
      "Heavy truck or prime mover",
      "Tipped or side-loaded at your site",
    ],
    ["Palletised FMCG", "Medium truck", "Tail-lift, pallet for pallet"],
    [
      "Fresh produce and tea",
      "Refrigerated unit",
      "Held at 0–8 °C, logged the whole run",
    ],
    [
      "Pharmaceuticals",
      "Refrigerated unit",
      "Temperature log handed over at the door",
    ],
    [
      "Imported containers",
      "Prime mover",
      "Picked up at the port, cleared while in transit",
    ],
    [
      "Building supplies",
      "Pickup and light truck",
      "Upcountry runs, offloaded where you are building",
    ],
  ],
} as const;

export const coverage = {
  claim: "Every county in Kenya.",
  figure: "47",
  caption:
    "Counties with a standing Kanai lane or a quoted run, from Mombasa Port to the Malaba border.",
  source: "Kenya is divided into 47 counties.",
  map: {
    alt: "Kenya, with the country's main roads drawn faint and the lanes Kanai runs drawn bright: Nairobi to Mombasa, Nairobi through Nakuru to the Malaba border, and Nakuru to Kisumu.",
    caption: "The country's main roads in grey, the lanes we run in white.",
    credit: "Boundary and roads from Natural Earth.",
  },
} as const;

export const closing = {
  statement: {
    before: "Tell dispatch",
    after: " what is moving, and it is on the road before morning.",
  },
  terms: [site.hours, site.phoneDisplay],
  picture: {
    src: "/images/rift-valley.jpg",
    alt: "A track crossing open country below Mount Kilimanjaro in Kenya.",
  },
} as const;

export const contact = {
  sentence:
    "Send the load, the pickup and the drop-off. Dispatch answers with a vehicle and a price.",
  question: "Moving this week?",
  links: [
    { label: site.email, href: site.emailHref },
    { label: "WhatsApp", href: site.whatsappHref },
  ],
  meta: "Nairobi, Kenya · replies within the hour",
} as const;

export const footer = {
  reach: [
    { label: site.phoneDisplay, href: site.phoneHref },
    { label: "WhatsApp", href: site.whatsappHref },
    { label: site.email, href: site.emailHref },
  ],
  columns: [
    {
      title: "Fleet",
      links: [
        { label: "Delivery van", href: "#fleet" },
        { label: "Pickup and light truck", href: "#fleet" },
        { label: "Medium truck", href: "#fleet" },
        { label: "Heavy truck", href: "#fleet" },
        { label: "Prime mover", href: "#fleet" },
      ],
    },
    {
      title: "Lanes",
      links: [
        { label: "Nairobi → Mombasa", href: "#lanes" },
        { label: "Nairobi → Kisumu", href: "#lanes" },
        { label: "Nairobi → Eldoret", href: "#lanes" },
        { label: "Nairobi → Nakuru", href: "#lanes" },
        { label: "Eldoret → Malaba", href: "#lanes" },
      ],
    },
    {
      title: "The desk",
      links: [
        { label: "How it works", href: "#how-it-works" },
        { label: "What we move", href: "#handling" },
        { label: "Coverage", href: "#coverage" },
        { label: quoteAction.label, href: quoteAction.href },
      ],
    },
  ],
  legal: `© ${site.copyrightYear} ${site.legalName}, ${site.address}.`,
  credits:
    "Photographs: the Port of Mombasa, a lorry at Mazeras and Landscapes of Kenya, via Wikimedia Commons, used under public domain and Creative Commons licences.",
} as const;
