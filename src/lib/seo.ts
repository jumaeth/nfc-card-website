// Central SEO/GEO configuration: the production origin, per-locale metadata
// helpers, and the organisation facts used for structured data (JSON-LD) and
// llms.txt. Keep marketing copy in site.ts; this file is about discoverability.
import type { Metadata } from "next";
import { l } from "@/lib/locale";
import {
  LOCALES,
  localeToSlug,
  type L,
  type Locale,
} from "@/lib/locale";

export const SITE_URL = "https://taplino.ch";
export const SITE_NAME = "Taplino";

// Open Graph locale codes (BCP-47-ish with region for the Swiss languages).
const OG_LOCALE: Record<Locale, string> = {
  DE: "de_CH",
  FR: "fr_CH",
  IT: "it_CH",
  EN: "en_US",
};

// hreflang values advertised in <head> and the sitemap.
const HREFLANG: Record<Locale, string> = {
  DE: "de-CH",
  FR: "fr-CH",
  IT: "it-CH",
  EN: "en",
};

// Absolute URL for a locale + path, e.g. localeUrl("DE", "/editor").
export function localeUrl(locale: Locale, path = ""): string {
  return `${SITE_URL}/${localeToSlug(locale)}${path}`;
}

// The regional hreflang value for one locale (e.g. "de-CH"), used for the
// `inLanguage` field in JSON-LD so it matches the hreflang tags in <head>.
export function localeToHreflang(locale: Locale): string {
  return HREFLANG[locale];
}

// hreflang alternates map for a given path across every locale (+ x-default).
export function languageAlternates(path = ""): Record<string, string> {
  const languages: Record<string, string> = {};
  for (const loc of LOCALES) {
    languages[HREFLANG[loc]] = `/${localeToSlug(loc)}${path}`;
  }
  languages["x-default"] = `/de${path}`;
  return languages;
}

// Build a complete, localized Metadata object for one route.
export function buildMetadata({
  locale,
  path = "",
  title,
  description,
  keywords,
}: {
  locale: Locale;
  path?: string;
  title: string;
  description: string;
  keywords?: string[];
}): Metadata {
  const canonical = `/${localeToSlug(locale)}${path}`;
  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    ...(keywords ? { keywords } : {}),
    alternates: { canonical, languages: languageAlternates(path) },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE_NAME,
      type: "website",
      locale: OG_LOCALE[locale],
      alternateLocale: LOCALES.filter((x) => x !== locale).map(
        (x) => OG_LOCALE[x],
      ),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

// ── Localized SEO copy for routes without their own long-form copy ─────
// (About/Privacy/Terms/Imprint reuse their page title + intro from site.ts.)
export const seoCopy: Record<"home" | "editor" | "contact", { title: L; description: L }> = {
  home: {
    // Home sits in the same segment as the title template, so it isn't wrapped;
    // it leads with the brand explicitly. Sub-pages get "%s · Taplino".
    title: l(
      "Taplino: NFC cards for reviews, menus & links",
      "Taplino: NFC-Karten für Bewertungen, Menüs & Links",
      "Taplino: cartes NFC pour avis, menus et liens",
      "Taplino: carte NFC per recensioni, menu e link",
    ),
    description: l(
      "Premium customisable NFC cards from a Swiss company. Customers tap their phone, no app needed, to open your Google reviews, digital menu, links, socials or booking.",
      "Hochwertige, anpassbare NFC-Karten von einem Schweizer Unternehmen. Kunden tippen ihr Handy an, ohne App, und öffnen Google-Bewertungen, das digitale Menü, Links, Social Media oder die Buchung.",
      "Cartes NFC premium et personnalisables d'une entreprise suisse. Les clients approchent leur téléphone, sans appli, pour ouvrir vos avis Google, votre menu, vos liens, réseaux ou réservations.",
      "Carte NFC premium e personalizzabili da un'azienda svizzera. I clienti avvicinano il telefono, senza app, per aprire recensioni Google, menu digitale, link, social o prenotazioni.",
    ),
  },
  editor: {
    title: l(
      "Design your NFC card",
      "Gestalten Sie Ihre NFC-Karte",
      "Concevez votre carte NFC",
      "Progetta la tua carta NFC",
    ),
    description: l(
      "Design your own NFC card online: upload your logo, pick colours, set where a tap leads and order in minutes. Made and shipped in Switzerland.",
      "Gestalten Sie Ihre NFC-Karte online: Logo hochladen, Farben wählen, Tap-Ziel festlegen und in Minuten bestellen. Hergestellt und versandt in der Schweiz.",
      "Concevez votre carte NFC en ligne : ajoutez votre logo, choisissez les couleurs, définissez la destination d'un tap et commandez en minutes. Fabriquée et expédiée en Suisse.",
      "Progetta la tua carta NFC online: carica il logo, scegli i colori, imposta la destinazione del tap e ordina in pochi minuti. Prodotta e spedita in Svizzera.",
    ),
  },
  contact: {
    title: l(
      "Contact us",
      "Kontakt",
      "Contactez-nous",
      "Contattaci",
    ),
    description: l(
      "Get in touch with the Taplino team about NFC cards, pricing or a larger rollout. We usually reply within a few hours.",
      "Nehmen Sie Kontakt mit dem Taplino-Team auf, zu NFC-Karten, Preisen oder einem grösseren Rollout. Wir antworten meist innert weniger Stunden.",
      "Contactez l'équipe Taplino au sujet des cartes NFC, des tarifs ou d'un déploiement plus large. Nous répondons généralement en quelques heures.",
      "Contatta il team Taplino per carte NFC, prezzi o un rollout più ampio. Di solito rispondiamo in poche ore.",
    ),
  },
};

export const seoKeywords: L = l(
  "NFC cards, NFC business card, Google review card, digital menu, tap to review, Switzerland",
  "NFC-Karten, NFC-Visitenkarte, Google-Bewertungskarte, digitales Menü, Tap für Bewertung, Schweiz",
  "cartes NFC, carte de visite NFC, carte avis Google, menu digital, tap pour avis, Suisse",
  "carte NFC, biglietto da visita NFC, carta recensioni Google, menu digitale, tap per recensione, Svizzera",
);

// ── Organisation facts (used by JSON-LD and llms.txt) ─────────────────
// The registered legal name/address, phone, VAT and social profiles are
// pending from the owner. Every optional field below is emitted into JSON-LD
// only when non-empty (see SiteJsonLd), so leaving a value as "" simply omits
// it rather than publishing a placeholder. Fill these in once available.
export const ORG = {
  name: SITE_NAME,
  // Sole proprietorship operated by Marco Jucker (see the imprint). If Taplino
  // is later incorporated (e.g. "Taplino GmbH"), update this to the registered name.
  legalName: SITE_NAME,
  url: SITE_URL,
  email: "hello@taplino.ch",
  telephone: "", // TODO: e.g. "+41 44 123 45 67"
  logo: `${SITE_URL}/logo/taplino-mark.svg`,
  country: "CH",
  // Registered business address (from the imprint). Any empty field is dropped.
  address: {
    streetAddress: "Schwarztorstrasse 115",
    postalCode: "3007",
    locality: "Bern",
    region: "BE",
  },
  founder: "Marco Jucker", // Responsible person named in the imprint.
  vatID: "", // TODO: Swiss UID, e.g. "CHE-123.456.789 MWST"
  foundingDate: "", // TODO: ISO year or date, e.g. "2024"
  sameAs: [] as string[], // TODO: add Instagram / LinkedIn / TikTok URLs
};
