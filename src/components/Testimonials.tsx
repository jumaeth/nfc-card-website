"use client";

import { testimonials, ui } from "@/lib/site";
import { SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { useT } from "@/lib/i18n";

export function Testimonials() {
  const t = useT();
  return (
    <section className="section-pad py-24 sm:py-32">
      <Reveal>
        <SectionHeading
          eyebrow={t(ui.testimonials.eyebrow)}
          title={t(ui.testimonials.title)}
        />
      </Reveal>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {testimonials.map((item, i) => (
          <Reveal key={item.name} delay={i * 0.1}>
            <figure className="flex h-full flex-col rounded-card border border-line bg-paper-2/40 p-8">
              <div className="flex gap-1 text-accent">
                {Array.from({ length: 5 }).map((_, s) => (
                  <svg key={s} width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3 6.5 7 .8-5.2 4.7 1.4 6.9L12 17.6 5.4 20.9l1.4-6.9L1.6 9.3l7-.8L12 2z" />
                  </svg>
                ))}
              </div>
              <blockquote className="mt-6 flex-1 text-lg leading-relaxed text-ink">
                “{t(item.quote)}”
              </blockquote>
              <figcaption className="mt-6 border-t border-line pt-5">
                <p className="font-semibold text-ink">{item.name}</p>
                <p className="text-sm text-muted">{t(item.role)}</p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
