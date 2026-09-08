/**
 * All marketing copy lives here. Pages map over this data, so a headline,
 * a zone, a price, or a FAQ changes in one place.
 */

export const site = {
  name: "Crosstown",
  tagline: "Local delivery your customers can follow to the door.",
  city: "Toronto",
  region: "Toronto, Ontario",
  email: "hello@crosstown.delivery",
  courierEmail: "drive@crosstown.delivery",
  phone: "(416) 555-0142",
  url: "https://crosstown.delivery",
};

export const nav = [
  { label: "For merchants", href: "/merchants/" },
  { label: "Drive", href: "/couriers/" },
  { label: "Pricing", href: "/pricing/" },
  { label: "Contact", href: "/contact/" },
];

export const hero = {
  headline: "Local delivery your customers can follow to the door.",
  body: "Crosstown runs same-day and next-day delivery for shops in Toronto. Send us your orders by your cutoff, we build the routes, local couriers deliver, and every customer gets a tracking page with a photo at the door.",
  primary: { label: "Request a merchant account", href: "/contact/" },
  secondary: { label: "Drive with Crosstown", href: "/couriers/" },
  audience:
    "Florists, bakeries, meal kits, pharmacies, and any shop with something to deliver today.",
};

/** The sample route rendered in the hero. Times are display strings. */
export const sampleRoute = {
  number: "Route 214",
  day: "Tuesday, pickup 2:00 pm",
  pickup: { name: "Bloom & Stem", address: "641 Queen St W" },
  stops: [
    {
      name: "R. Okafor",
      address: "22 Palmerston Ave",
      status: "Delivered 2:41 pm",
      done: true,
    },
    {
      name: "M. Fischer",
      address: "108 Euclid Ave",
      status: "Delivered 2:58 pm",
      done: true,
    },
    {
      name: "J. Nguyen",
      address: "35 Bellwoods Ave",
      status: "Arriving in 6 min",
      current: true,
    },
    { name: "A. Petrov", address: "77 Crawford St", status: "Next" },
    { name: "S. Bhatt", address: "19 Shaw St", status: "Next" },
  ],
  summary: "5 stops, 11.2 km, pays $46.50",
};

export const steps = [
  {
    title: "Upload your orders",
    body: "A spreadsheet or a call to our API. Addresses are checked as they arrive, and problems are flagged before pickup instead of at the door.",
  },
  {
    title: "We price and route",
    body: "Each stop is priced by zone, so you know the cost before anything leaves. Orders are grouped into routes that fit your pickup window.",
  },
  {
    title: "A courier picks up at your cutoff",
    body: "Couriers scan every package at your counter. Short orders and missing packages are caught there.",
  },
  {
    title: "Customers follow every stop",
    body: "A tracking page in your name, with an arrival estimate and an email when the courier is a few stops away.",
  },
  {
    title: "Proof at the door",
    body: "A photo and a note at every door. Anything that could not be delivered comes back to you the same evening.",
  },
];

export const included = [
  {
    title: "Zone pricing",
    body: "A price per stop by postal zone, set in advance. No surge and no distance math.",
  },
  {
    title: "Tracking in your name",
    body: "Your logo, your colours, your pickup message. Customers never see ours.",
  },
  {
    title: "Proof of delivery",
    body: "Photo, timestamp, and location for every stop, kept with the order.",
  },
  {
    title: "Labels",
    body: "Print thermal labels from the batch page, or skip them if your packages are already marked.",
  },
  {
    title: "Returns",
    body: "Bags, bottles, and crates come back on the next route. Set it once per merchant.",
  },
  {
    title: "Weekly invoices",
    body: "One invoice with every stop listed. Weekly, biweekly, or monthly, your choice.",
  },
];

export const courierBand = {
  headline: "Drive when you want. Get paid Friday.",
  body: "Routes are offered to couriers who live nearby, with the pay shown up front. Accept the ones that fit your day. Pickups, stops, and proof of delivery all run through the Crosstown courier app.",
  cta: { label: "See how driving works", href: "/couriers/" },
};

export type Zone = {
  name: string;
  areas: string;
  service: string;
  cutoff: string;
  sameDay: string;
  nextDay: string;
};

export const zones: Zone[] = [
  {
    name: "Core",
    areas: "Downtown, midtown, Leslieville, the Junction",
    service: "Same day and next day",
    cutoff: "2:00 pm for same day",
    sameDay: "$9.50",
    nextDay: "$7.50",
  },
  {
    name: "East",
    areas: "East York, the Beaches, Scarborough",
    service: "Next day",
    cutoff: "6:00 pm",
    sameDay: "Not offered",
    nextDay: "$8.50",
  },
  {
    name: "West and north",
    areas: "Etobicoke, North York, Weston",
    service: "Next day",
    cutoff: "6:00 pm",
    sameDay: "Not offered",
    nextDay: "$8.50",
  },
  {
    name: "Outer",
    areas: "Mississauga, Vaughan, Markham",
    service: "Tuesday and Friday",
    cutoff: "6:00 pm the day before",
    sameDay: "Not offered",
    nextDay: "$11.00",
  },
];

export const pricingExtras = [
  { item: "Additional package at the same stop", price: "$1.50" },
  { item: "Return pickup (bags, bottles, crates)", price: "$2.00 per stop" },
  {
    item: "Failed delivery, no answer and no leave-at-door",
    price: "Half the stop price",
  },
  { item: "Address correction after cutoff", price: "$3.00" },
  { item: "Thermal labels", price: "Included" },
  { item: "Tracking page and email updates", price: "Included" },
];

export const volumeRates = [
  { threshold: "Up to 200 stops a week", rate: "Listed zone price" },
  { threshold: "200 to 500 stops a week", rate: "10% off every stop" },
  { threshold: "More than 500 stops a week", rate: "Talk to us" },
];

export const pricingTeaser = {
  headline: "Priced by the stop, not by the kilometre.",
  body: "From $7.50 a stop in the core and $8.50 in the outer zones, with volume rates above 200 stops a week. Every stop appears on your invoice with its zone and price.",
  cta: { label: "See pricing", href: "/pricing/" },
};

export const homeFaqs = [
  {
    q: "What can you not deliver?",
    a: "Nothing hazardous, nothing over 20 kg per package, and nothing that needs refrigeration in the vehicle. Alcohol is fine. Couriers check ID at the door and bring it back if no one of age is home.",
  },
  {
    q: "What happens if nobody is home?",
    a: "If the order allows leave-at-door, the courier leaves it, photographs it, and the customer gets the photo. Otherwise the package comes back to you that evening and you are charged half the stop price.",
  },
  {
    q: "Do you connect to my store?",
    a: "Today you upload a spreadsheet or send orders to our API as JSON. Tell us what you sell on and we will show you the fastest way to get orders in.",
  },
  {
    q: "How do I get started?",
    a: "Request an account, and we will set up your pickup address, cutoff, and zones within a business day. Your first batch can go out the day after.",
  },
];

export const merchantDay = [
  {
    time: "9:00 am",
    title: "Upload the day's orders",
    body: "Drop in the spreadsheet or let your system send them. Bad addresses are flagged right away.",
  },
  {
    time: "11:30 am",
    title: "Routes are built",
    body: "You see the routes, the stop count, and the price before anything is picked up.",
  },
  {
    time: "2:00 pm",
    title: "Courier at your counter",
    body: "Every package is scanned against the batch. Anything missing is caught here.",
  },
  {
    time: "2:30 pm",
    title: "First delivery",
    body: "Customers get an email as the courier gets close, then a photo at the door.",
  },
  {
    time: "6:00 pm",
    title: "Route complete",
    body: "Anything undelivered comes back to you with a reason attached.",
  },
  {
    time: "Friday",
    title: "Invoice",
    body: "One PDF, every stop listed with its zone and price.",
  },
];

export const portalFeatures = [
  {
    title: "Batches",
    body: "Upload orders, see the problems, fix them in place, and send the batch to routing.",
  },
  {
    title: "Labels",
    body: "Print thermal labels for a batch with your logo and the stop number.",
  },
  {
    title: "Service area",
    body: "See your zones, cutoffs, and prices. Ask for a change from the same page.",
  },
  {
    title: "Tracking page",
    body: "Set your logo, colours, and the message customers see when the courier is close.",
  },
  {
    title: "Reports",
    body: "Stops, failed deliveries, and returns by week, downloadable as a spreadsheet.",
  },
  { title: "Billing", body: "Every invoice, with the stops behind each line." },
];

export const courierRequirements = [
  "A car, van, or hatchback insured in your name",
  "A valid Ontario G licence and a clean abstract",
  "A smartphone that can run the Crosstown courier app",
  "A background check, which we arrange and pay for",
  "Availability for at least two afternoons a week",
];

export const courierHow = [
  {
    title: "Set your availability",
    body: "Tell the app the days and times you can drive. Offers only come for those windows.",
  },
  {
    title: "Accept the routes you want",
    body: "Each offer shows the pickup, the number of stops, the distance, and the pay. Offers expire after twenty minutes so someone else can take them.",
  },
  {
    title: "Scan at pickup",
    body: "Every package is scanned at the merchant's counter. If the count is short, you tell the app and move on.",
  },
  {
    title: "Make the deliveries",
    body: "The app orders the stops and navigates. At each door you take a photo, add a note if needed, and mark the stop.",
  },
  {
    title: "Get paid Friday",
    body: "Every route you completed that week is paid by direct deposit on Friday, with a breakdown in the app.",
  },
];

export const samplePay = {
  title: "What a route pays",
  lines: [
    { label: "Base for the route", amount: "$18.00" },
    { label: "12 stops at $2.25", amount: "$27.00" },
    { label: "14.6 km at $0.45", amount: "$6.57" },
    { label: "Return pickup", amount: "$2.00" },
  ],
  total: { label: "Route pay", amount: "$53.57" },
  note: "Pay is shown before you accept. Tips left through the tracking page are added on top.",
};

export const courierFaqs = [
  {
    q: "Is this a job?",
    a: "You drive as an independent contractor. You choose your routes, and you are paid per route, not per hour.",
  },
  {
    q: "How many routes can I do in a day?",
    a: "Most routes take two to three hours. Couriers who want a full day usually take an afternoon route and an evening route.",
  },
  {
    q: "What if a package is damaged or missing?",
    a: "Report it in the app at pickup or at the door. Ops sees it immediately and handles it with the merchant. You are not charged for it.",
  },
  {
    q: "Do I need to bring anything back?",
    a: "Some merchants ask for bags or bottles back. The app tells you at the stop, and you are paid for the return.",
  },
];

export const pricingFaqs = [
  {
    q: "How are zones decided?",
    a: "By the first three characters of the postal code. Your service area page shows every zone you deliver to and its price.",
  },
  {
    q: "When am I billed?",
    a: "Weekly by default, on Friday, for the routes completed that week. Biweekly and monthly are available on request.",
  },
  {
    q: "Is there a minimum?",
    a: "No monthly minimum. A route needs at least four stops to go out. Smaller batches are grouped with a nearby merchant's route at the same price.",
  },
  {
    q: "What about tips?",
    a: "Customers can tip through the tracking page. Tips go to the courier in full and never appear on your invoice.",
  },
];

export const contactTopics = [
  { value: "merchant", label: "I run a shop and want to deliver with Crosstown" },
  { value: "courier", label: "I want to drive for Crosstown" },
  { value: "other", label: "Something else" },
];

export const contactVolumes = [
  { value: "under-50", label: "Under 50 deliveries a week" },
  { value: "50-200", label: "50 to 200 a week" },
  { value: "200-500", label: "200 to 500 a week" },
  { value: "over-500", label: "More than 500 a week" },
];
