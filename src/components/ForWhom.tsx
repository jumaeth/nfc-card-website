"use client";

import { ui } from "@/lib/site";
import { SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { useT } from "@/lib/i18n";

// Proper nouns, the same across all four languages.
const audiences = ["Restaurants", "Cafés", "Bars", "Hotels", "Food Trucks"];

export function ForWhom() {
  const t = useT();
  return (
    <section id="for-whom" className="section-pad py-24 sm:py-32">
      <Reveal>
        <SectionHeading
          align="center"
          eyebrow={t(ui.forWhom.eyebrow)}
          title={t(ui.forWhom.title)}
          intro={t(ui.forWhom.body)}
        />
      </Reveal>
      <Reveal delay={0.1}>
        <ul className="mx-auto mt-10 flex max-w-2xl flex-wrap justify-center gap-3">
          {audiences.map((a) => (
            <li
              key={a}
              className="rounded-full border border-line bg-paper-2/40 px-5 py-2 text-sm font-semibold text-ink"
            >
              {a}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
