"use client";

import { ui } from "@/lib/site";
import { SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { useT } from "@/lib/i18n";

export function Problem() {
  const t = useT();
  return (
    <section id="problem" className="section-pad py-24 sm:py-32">
      <Reveal>
        <SectionHeading
          eyebrow={t(ui.problem.eyebrow)}
          title={t(ui.problem.title)}
          intro={t(ui.problem.body)}
        />
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mt-8 max-w-2xl text-lg font-semibold text-ink">
          {t(ui.problem.note)}
        </p>
      </Reveal>
    </section>
  );
}
