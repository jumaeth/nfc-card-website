"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { faqs, ui } from "@/lib/site";
import { SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { useT } from "@/lib/i18n";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const t = useT();

  return (
    <section id="faq" className="section-pad py-24 sm:py-32">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <SectionHeading
            eyebrow={t(ui.faq.eyebrow)}
            title={t(ui.faq.title)}
            intro={t(ui.faq.intro)}
          />
        </Reveal>

        <div className="divide-y divide-line border-t border-line">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={i} delay={i * 0.04}>
                <div>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  >
                    <span className="text-lg font-semibold text-ink">{t(f.q)}</span>
                    <span
                      className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line transition-all duration-300 ${
                        isOpen ? "rotate-45 bg-accent text-white" : "text-ink"
                      }`}
                    >
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                      </svg>
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 pr-12 leading-relaxed text-muted">{t(f.a)}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
