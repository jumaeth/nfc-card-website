"use client";

import { site, ui } from "@/lib/site";
import { Button, Arrow } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { useT } from "@/lib/i18n";

export function CTA() {
  const t = useT();
  return (
    <section id="contact" className="section-pad pb-24 sm:pb-32">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] bg-ink px-8 py-16 text-center sm:px-16 sm:py-24">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 50% 120%, rgba(240,67,31,0.35), transparent 55%)",
            }}
          />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
          <div className="relative mx-auto max-w-2xl">
            <span className="eyebrow text-accent">{t(ui.cta.eyebrow)}</span>
            <h2 className="display mt-4 text-4xl text-paper sm:text-6xl">
              {t(ui.cta.title)}
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-paper/70">
              {t(ui.cta.body)}
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Button href={`mailto:${site.email}`} variant="light">
                {t(ui.cta.primary)} <Arrow />
              </Button>
              <Button
                href={`mailto:${site.email}`}
                variant="ghost"
                className="text-paper hover:text-accent"
              >
                {site.email}
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
