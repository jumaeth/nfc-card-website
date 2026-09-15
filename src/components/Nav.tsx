"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { nav, site, BRAND } from "@/lib/site";
import { Button, Arrow } from "@/components/ui";

function Wordmark() {
  return (
    <Link href="#top" className="group flex items-center gap-2">
      <span className="relative grid h-8 w-8 place-items-center rounded-lg bg-ink text-paper">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M9 8a5 5 0 0 1 0 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M12.5 5a9 9 0 0 1 0 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <circle cx="6" cy="12" r="1.6" fill="currentColor" />
        </svg>
        <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-accent" />
      </span>
      <span className="display text-xl tracking-tight">{BRAND}</span>
    </Link>
  );
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<string>(site.languages[0]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`section-pad transition-all duration-500 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <div
          className={`flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-500 ${
            scrolled
              ? "border border-line bg-paper/80 backdrop-blur-xl shadow-[0_10px_40px_-20px_rgba(0,0,0,0.3)]"
              : "border border-transparent"
          }`}
        >
          <Wordmark />

          <nav className="hidden items-center gap-8 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="link-underline text-sm font-medium text-ink-soft hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden items-center rounded-full border border-line p-0.5 sm:flex">
              {site.languages.map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`rounded-full px-2.5 py-1 text-xs font-semibold transition-colors ${
                    lang === l ? "bg-ink text-paper" : "text-muted hover:text-ink"
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
            <Button href="#pricing" className="hidden sm:inline-flex">
              Order cards <Arrow />
            </Button>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
              className="grid h-10 w-10 place-items-center rounded-full border border-line lg:hidden"
            >
              <div className="space-y-1.5">
                <span
                  className={`block h-0.5 w-5 bg-ink transition-transform ${
                    open ? "translate-y-2 rotate-45" : ""
                  }`}
                />
                <span className={`block h-0.5 w-5 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
                <span
                  className={`block h-0.5 w-5 bg-ink transition-transform ${
                    open ? "-translate-y-2 -rotate-45" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="mt-2 rounded-2xl border border-line bg-paper/95 p-4 backdrop-blur-xl lg:hidden">
            <nav className="flex flex-col">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-line py-3 text-base font-medium text-ink last:border-0"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <Button href="#pricing" className="mt-4 w-full" onClick={() => setOpen(false)}>
              Order cards <Arrow />
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}
