"use client";

import { createContext, useContext, type ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  isLocaleSlug,
  localeToSlug,
  type L,
  type Locale,
} from "./locale";

const COOKIE_KEY = "taplino-locale";

type LangCtx = {
  lang: Locale;
  setLang: (l: Locale) => void;
  // Resolve a localized value to the active language. Plain strings pass through
  // unchanged, so components can mix localized copy and fixed strings freely.
  t: (v: L | string) => string;
};

const Ctx = createContext<LangCtx | null>(null);

// The active locale is driven by the URL (/de, /fr, …) and passed in from the
// server layout, so server-rendered HTML is already in the right language.
// Switching languages navigates to the sibling locale path rather than toggling
// client state, which keeps every URL independently indexable.
export function LangProvider({
  lang,
  children,
}: {
  lang: Locale;
  children: ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const setLang = (next: Locale) => {
    const nextSlug = localeToSlug(next);
    const segments = (pathname || "/").split("/");
    if (isLocaleSlug(segments[1] ?? "")) {
      segments[1] = nextSlug;
    } else {
      segments.splice(1, 0, nextSlug);
    }
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    // Remember the choice so the root redirect (proxy) honours it next visit.
    if (typeof document !== "undefined") {
      document.cookie = `${COOKIE_KEY}=${nextSlug}; path=/; max-age=31536000; samesite=lax`;
    }
    router.push((segments.join("/") || `/${nextSlug}`) + hash);
  };

  const t = (v: L | string) => (typeof v === "string" ? v : v[lang]);

  return <Ctx.Provider value={{ lang, setLang, t }}>{children}</Ctx.Provider>;
}

export function useLang() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useLang must be used within a LangProvider");
  return ctx;
}

export function useT() {
  return useLang().t;
}

// Prefix an internal href with the active locale. External/mailto/tel links pass
// through. In-page hash links stay bare on the home page and resolve back to the
// localized home elsewhere (e.g. "#pricing" → "/de#pricing" on the editor page).
export function useLocaleHref() {
  const { lang } = useLang();
  const pathname = usePathname();
  const slug = localeToSlug(lang);
  const onHome = pathname === `/${slug}`;
  return (href: string) => {
    if (/^(https?:|mailto:|tel:|#)/.test(href)) {
      return href.startsWith("#") ? (onHome ? href : `/${slug}${href}`) : href;
    }
    if (href.startsWith("/")) return `/${slug}${href}`;
    return href;
  };
}
