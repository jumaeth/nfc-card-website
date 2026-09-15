// Central place for brand + marketing copy. Change BRAND here to rename everything.
export const BRAND = "Tapflow";

export const site = {
  brand: BRAND,
  tagline: "One tap. Every connection.",
  email: "hello@tapflow.ch",
  phone: "+41 44 000 00 00",
  city: "Zürich, Switzerland",
  languages: ["EN", "DE", "FR", "IT"] as const,
};

export const nav = [
  { label: "How it works", href: "#how" },
  { label: "Use cases", href: "#use-cases" },
  { label: "Products", href: "#products" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export const heroStats = [
  { value: "3'200+", label: "Cards shipped" },
  { value: "4.9★", label: "Avg. rating lift" },
  { value: "0", label: "Apps to install" },
];

export const destinations = [
  {
    key: "reviews",
    label: "Google Reviews",
    title: "Rate your visit",
    subtitle: "Café Bellevue",
    accent: "#f0431f",
  },
  {
    key: "menu",
    label: "Digital Menu",
    title: "Today's menu",
    subtitle: "Ristorante Da Marco",
    accent: "#1c7d5c",
  },
  {
    key: "links",
    label: "Link Hub",
    title: "Stay connected",
    subtitle: "Boutique Nord",
    accent: "#2f6df0",
  },
];

export const steps = [
  {
    n: "01",
    title: "Design & customize",
    body: "Pick a card, plate or stand, add your logo and choose where a tap should lead — reviews, menu, or a link page.",
  },
  {
    n: "02",
    title: "Made in Switzerland",
    body: "We print, encode and quality-check every piece in our Zürich workshop, then ship it to your door within days.",
  },
  {
    n: "03",
    title: "Tap & grow",
    body: "Guests tap their phone — no app, no QR fiddling. You watch reviews, menu views and followers climb in your dashboard.",
  },
];

export const useCases = [
  {
    key: "reviews",
    label: "Google Reviews",
    heading: "Turn every table into a five-star review",
    body: "Place a plate on the counter or table. One tap opens your Google review form directly — no searching, no typing. Restaurants see 3–5× more reviews in the first month.",
    points: ["Skip the search — deep link to your review form", "Smart routing to catch feedback before it goes public", "Climb the local ranking as reviews roll in"],
  },
  {
    key: "menu",
    label: "Digital Menu",
    heading: "A menu you update, never reprint",
    body: "Tap to open your live menu in any language. Change a price or add a special from your phone and it's live instantly — across every card in the room.",
    points: ["Multilingual — EN · DE · FR · IT", "Allergens, photos and daily specials", "Zero reprint costs, ever"],
  },
  {
    key: "links",
    label: "Link Hub",
    heading: "Instagram, WiFi & booking in one tap",
    body: "A beautiful link page that holds everything: social profiles, WiFi access, table booking, loyalty and your webshop. One card, endless destinations.",
    points: ["Instagram, TikTok & newsletter sign-up", "One-tap WiFi connect", "Booking, loyalty and shop links"],
  },
];

export const features = [
  { title: "No app required", body: "Works straight out of the box on any modern phone. Guests just tap." },
  { title: "iPhone & Android", body: "Compatible with iPhone XR and newer, and all NFC-enabled Android phones." },
  { title: "Waterproof & durable", body: "Built to survive spills, sun and daily handling in a busy venue." },
  { title: "Live dashboard", body: "Track taps, reviews and menu views. Change destinations anytime." },
  { title: "Swiss made", body: "Designed and manufactured in Switzerland with premium materials." },
  { title: "Privacy first", body: "Fully compliant with the Swiss nFADP and EU GDPR. No hidden tracking." },
];

export const products = [
  {
    name: "Classic Card",
    material: "Recycled PVC",
    price: "40",
    blurb: "Credit-card sized, full-colour print. The everyday workhorse.",
    accent: false,
  },
  {
    name: "Metal Card",
    material: "Brushed stainless",
    price: "90",
    blurb: "A premium, weighty card that makes a statement at the counter.",
    accent: true,
  },
  {
    name: "Table Stand",
    material: "Acrylic + base",
    price: "50",
    blurb: "A standing plate for tables and counters. Tap or scan the QR.",
    accent: false,
  },
];

export const pricing = [
  {
    name: "Starter",
    price: "40",
    unit: "one-time / card",
    tagline: "Buy cards, manage them yourself.",
    features: ["Custom-printed NFC cards", "Self-serve dashboard", "One destination per card", "Free QR fallback", "Email support"],
    cta: "Order cards",
    featured: false,
  },
  {
    name: "Pro",
    price: "39",
    unit: "per month",
    tagline: "For growing venues & small chains.",
    features: ["Everything in Starter", "Unlimited destination changes", "Analytics & review insights", "Multiple locations", "Priority support"],
    cta: "Start free trial",
    featured: true,
  },
  {
    name: "Managed",
    price: "250",
    unit: "per month",
    tagline: "We run your menu & reviews for you.",
    features: ["Everything in Pro", "10 personalised NFC plates", "Menu translation & updates", "We reply to every Google review", "Dedicated account manager"],
    cta: "Talk to us",
    featured: false,
  },
];

export const testimonials = [
  {
    quote: "We went from 12 to 80 Google reviews in two months. The plate just sits on the counter and works.",
    name: "Sofia Keller",
    role: "Owner, Café Bellevue — Zürich",
  },
  {
    quote: "Changing the menu used to mean a trip to the printer. Now I do it from my phone during the commute.",
    name: "Marco Bianchi",
    role: "Chef, Ristorante Da Marco — Lugano",
  },
  {
    quote: "One tap gives customers our Instagram, WiFi and webshop. It feels genuinely premium — very Swiss.",
    name: "Camille Favre",
    role: "Founder, Boutique Nord — Genève",
  },
];

export const faqs = [
  {
    q: "Do my customers need to install an app?",
    a: "No. NFC is built into every modern smartphone. Guests simply hold their phone near the card and the destination opens in their browser — no app, no account, no friction.",
  },
  {
    q: "Which phones are compatible?",
    a: "All iPhones from the XR (2018) onward and virtually every NFC-enabled Android phone. For older devices, every product also carries a printed QR code as a fallback.",
  },
  {
    q: "Can I change where a card points to later?",
    a: "Yes — on the Pro and Managed plans you can repoint any card to a new URL from your dashboard at any time, without reordering.",
  },
  {
    q: "Where are the cards made?",
    a: "Everything is designed, printed and encoded in our workshop in Switzerland using premium, durable materials.",
  },
  {
    q: "Is it privacy compliant?",
    a: "Absolutely. Tapflow is fully compliant with the revised Swiss Federal Act on Data Protection (nFADP) and the EU GDPR. We never sell data.",
  },
  {
    q: "What if a card gets damaged?",
    a: "Our cards are waterproof and built for daily use, but accidents happen — replacements are quick and affordable, and included on the Managed plan.",
  },
];
