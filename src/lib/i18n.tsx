"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { DEFAULT_LOCALE, isLocale, type L, type Locale } from "./locale";

const STORAGE_KEY = "taplino-lang";

type LangCtx = {
  lang: Locale;
  setLang: (l: Locale) => void;
  // Resolve a localized value to the active language. Plain strings pass through
  // unchanged, so components can mix localized copy and fixed strings freely.
  t: (v: L | string) => string;
};

const Ctx = createContext<LangCtx | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Locale>(DEFAULT_LOCALE);

  // Restore a saved choice, else fall back to the browser language, once mounted.
  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored && isLocale(stored)) {
      apply(stored);
      return;
    }
    const guess = window.navigator.language.slice(0, 2).toUpperCase();
    if (isLocale(guess)) apply(guess);
  }, []);

  function apply(l: Locale) {
    setLangState(l);
    document.documentElement.lang = l.toLowerCase();
  }

  const setLang = (l: Locale) => {
    window.localStorage.setItem(STORAGE_KEY, l);
    apply(l);
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
