// Locale primitives — safe to import from both server and client modules.
// The language context/hooks live in i18n.tsx ("use client").

export const LOCALES = ["EN", "DE", "FR", "IT"] as const;
export type Locale = (typeof LOCALES)[number];

// A localized string: one value per supported language.
export type L = Record<Locale, string>;

export const DEFAULT_LOCALE: Locale = "EN";

// Compact authoring helper: l("English", "Deutsch", "Français", "Italiano").
export function l(EN: string, DE: string, FR: string, IT: string): L {
  return { EN, DE, FR, IT };
}

export function isLocale(v: string): v is Locale {
  return (LOCALES as readonly string[]).includes(v);
}
