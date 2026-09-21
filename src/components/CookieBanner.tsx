"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ui } from "@/lib/site";
import { useT, useLocaleHref } from "@/lib/i18n";

const CONSENT_KEY = "taplino-cookie-consent";

// Fired from anywhere (e.g. the footer "Cookie settings" link) to re-open the
// banner so a visitor can change a previously saved choice.
export const COOKIE_SETTINGS_EVENT = "taplino:open-cookie-settings";

export function openCookieSettings() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(COOKIE_SETTINGS_EVENT));
  }
}

// Simple consent banner. The choice is stored in localStorage so it survives
// reloads and the banner never reappears once answered. We render nothing until
// the client has read the stored choice to avoid a server/client mismatch and
// a flash of the banner on already-consented visits.
export function CookieBanner() {
  const t = useT();
  const localize = useLocaleHref();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(CONSENT_KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
    const reopen = () => setVisible(true);
    window.addEventListener(COOKIE_SETTINGS_EVENT, reopen);
    return () => window.removeEventListener(COOKIE_SETTINGS_EVENT, reopen);
  }, []);

  const decide = (choice: "accepted" | "declined") => {
    try {
      localStorage.setItem(CONSENT_KEY, choice);
    } catch {
      // Storage unavailable (private mode); just hide the banner for now.
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-50 p-4 sm:p-6"
    >
      <div className="mx-auto flex max-w-4xl flex-col gap-4 rounded-2xl border border-line bg-paper/95 p-5 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.35)] backdrop-blur sm:flex-row sm:items-center sm:justify-between sm:gap-6">
        <p className="text-sm leading-relaxed text-muted">
          {t(ui.cookie.message)}{" "}
          <Link
            href={localize(ui.footer.privacy.href)}
            className="link-underline font-medium text-ink hover:text-accent"
          >
            {t(ui.cookie.learnMore)}
          </Link>
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => decide("declined")}
            className="rounded-full border border-ink/20 px-5 py-2.5 text-sm font-semibold text-ink transition-all duration-300 hover:border-ink"
          >
            {t(ui.cookie.decline)}
          </button>
          <button
            type="button"
            onClick={() => decide("accepted")}
            className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_30px_-12px_rgba(240,67,31,0.7)] transition-all duration-300 hover:bg-accent-ink"
          >
            {t(ui.cookie.accept)}
          </button>
        </div>
      </div>
    </div>
  );
}
