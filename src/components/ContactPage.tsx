"use client";

import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { ui } from "@/lib/site";
import { useT } from "@/lib/i18n";

export function ContactPage() {
  const t = useT();
  const c = ui.contact;

  return (
    <section className="section-pad py-16 sm:py-24">
      <div className="mx-auto max-w-2xl">
        <Reveal>
          <span className="eyebrow text-accent">{t(c.eyebrow)}</span>
          <h1 className="display mt-4 text-4xl text-ink sm:text-5xl">{t(c.title)}</h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">{t(c.intro)}</p>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="mt-10">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
