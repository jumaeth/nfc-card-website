"use client";

import { steps, ui } from "@/lib/site";
import { SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { useT } from "@/lib/i18n";

export function HowItWorks() {
  const t = useT();
  return (
    <section id="how" className="section-pad py-24 sm:py-32">
      <Reveal>
        <SectionHeading
          eyebrow={t(ui.how.eyebrow)}
          title={t(ui.how.title)}
          intro={t(ui.how.intro)}
        />
      </Reveal>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {steps.map((s, i) => (
          <Reveal key={s.n} delay={i * 0.1}>
            <div className="group relative h-full overflow-hidden rounded-card border border-line bg-paper-2/40 p-8 transition-colors hover:bg-paper-2">
              <div className="absolute -right-4 -top-6 select-none font-display text-[7rem] font-bold leading-none text-ink/[0.04] transition-colors group-hover:text-accent/10">
                {s.n}
              </div>
              <div className="relative">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-ink text-sm font-bold text-paper">
                  {s.n}
                </span>
                <h3 className="display mt-6 text-2xl">{t(s.title)}</h3>
                <p className="mt-3 leading-relaxed text-muted">{t(s.body)}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
