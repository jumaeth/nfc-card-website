"use client";

import { heroStats, ui } from "@/lib/site";
import { Button, Arrow } from "@/components/ui";
import { TapCard } from "@/components/TapCard";
import { Reveal } from "@/components/Reveal";
import { useT } from "@/lib/i18n";

export function Hero() {
  const t = useT();
  return (
    <section id="top" className="section-pad relative overflow-hidden pt-32 pb-16 sm:pt-40">
      {/* backdrop grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-line) 1px, transparent 1px), linear-gradient(90deg, var(--color-line) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, #000 30%, transparent 75%)",
        }}
      />

      <div className="relative grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <Reveal>
            <h1 className="display mt-6 text-5xl sm:text-6xl lg:text-7xl">
              {t(ui.hero.headPre)}{" "}
              <span className="relative whitespace-nowrap text-accent">
                {t(ui.hero.headHighlight)}
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 12"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 8c40-6 120-6 196 0"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              {t(ui.hero.headPost)}
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted">
              {t(ui.hero.body)}
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button href="#pricing">
                {t(ui.hero.ctaPrimary)} <Arrow />
              </Button>
              <Button href="#how" variant="outline">
                {t(ui.hero.ctaSecondary)}
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <dl className="mt-12 grid max-w-md grid-cols-2 gap-6 border-t border-line pt-8">
              {heroStats.map((s) => (
                <div key={s.value}>
                  <dt className="display text-3xl text-ink">{s.value}</dt>
                  <dd className="mt-1 text-xs text-muted">{t(s.label)}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={0.2} y={40}>
          <TapCard />
        </Reveal>
      </div>
    </section>
  );
}
