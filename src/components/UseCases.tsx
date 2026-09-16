"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useCases, ui } from "@/lib/site";
import { SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { useT } from "@/lib/i18n";

export function UseCases() {
  const [active, setActive] = useState(0);
  const t = useT();
  const uc = useCases[active];
  const stat = ui.useCases.stats[active];

  return (
    <section id="use-cases" className="section-pad py-24 sm:py-32">
      <Reveal>
        <SectionHeading
          eyebrow={t(ui.useCases.eyebrow)}
          title={t(ui.useCases.title)}
          intro={t(ui.useCases.intro)}
        />
      </Reveal>

      <div className="mt-12 flex flex-wrap gap-2">
        {useCases.map((c, i) => (
          <button
            key={c.key}
            onClick={() => setActive(i)}
            className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
              active === i
                ? "bg-ink text-paper"
                : "border border-line text-ink-soft hover:border-ink"
            }`}
          >
            {t(c.label)}
          </button>
        ))}
      </div>

      <div className="mt-8 grid items-center gap-10 rounded-card border border-line bg-paper-2/40 p-8 sm:p-12 lg:grid-cols-2">
        <AnimatePresence mode="wait">
          <motion.div
            key={uc.key}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="eyebrow text-accent">{t(uc.label)}</span>
            <h3 className="display mt-3 text-3xl sm:text-4xl">{t(uc.heading)}</h3>
            <p className="mt-5 text-lg leading-relaxed text-muted">{t(uc.body)}</p>
            <ul className="mt-7 space-y-3">
              {uc.points.map((p, pi) => (
                <li key={pi} className="flex items-start gap-3">
                  <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent/15 text-accent">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6.5 5 9l5-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-ink-soft">{t(p)}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>

        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-line bg-gradient-to-br from-ink-2 to-ink">
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "radial-gradient(circle at 30% 20%, rgba(240,67,31,0.4), transparent 45%)",
            }}
          />
          <AnimatePresence mode="wait">
            <motion.div
              key={uc.key}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.03 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 grid place-items-center p-8 text-center"
            >
              <div>
                <p className="display text-6xl text-paper sm:text-7xl">
                  {t(stat.value)}
                </p>
                <p className="mt-3 text-sm text-paper/60">{t(stat.desc)}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
