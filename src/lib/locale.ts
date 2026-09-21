// Locale primitives — safe to import from both server and client modules.
// The language context/hooks live in i18n.tsx ("use client").

export const LOCALES = ["EN", "DE", "FR", "IT"] as const;
export type Locale = (typeof LOCALES)[number];

// A localized string: one value per supported language.
export type L = Record<Locale, string>;

export const DEFAULT_LOCALE: Locale = "DE";

// Compact authoring helper: l("English", "Deutsch", "Français", "Italiano").
export function l(EN: string, DE: string, FR: string, IT: string): L {
  return { EN, DE, FR, IT };
}

export function isLocale(v: string): v is Locale {
  return (LOCALES as readonly string[]).includes(v);
}

// ── URL slugs ─────────────────────────────────────────────────────────
// Routes are locale-prefixed with lowercase slugs (/de, /fr, /it, /en),
// while the internal Locale type stays uppercase. These helpers bridge the two.
// Order matters: the default locale (de) comes first.
export const LOCALE_SLUGS = ["de", "fr", "it", "en"] as const;
export type LocaleSlug = (typeof LOCALE_SLUGS)[number];
export const DEFAULT_SLUG: LocaleSlug = "de";

export function localeToSlug(loc: Locale): LocaleSlug {
  return loc.toLowerCase() as LocaleSlug;
}

export function slugToLocale(slug: string): Locale | null {
  const upper = slug.toUpperCase();
  return isLocale(upper) ? upper : null;
}

export function isLocaleSlug(v: string): v is LocaleSlug {
  return (LOCALE_SLUGS as readonly string[]).includes(v);
}
