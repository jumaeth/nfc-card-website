"use client";

import { logoNames, ui } from "@/lib/site";
import { useT } from "@/lib/i18n";

export function Logos() {
  const t = useT();
  return (
    <section className="border-y border-line bg-paper-2/60 py-8">
      <p className="section-pad text-center text-xs font-medium uppercase tracking-[0.2em] text-muted">
        {t(ui.logos.trusted)}
      </p>
      <div className="relative mt-6 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
        <div className="marquee-track flex w-max gap-16 pr-16">
          {[...logoNames, ...logoNames].map((name, i) => (
            <span
              key={i}
              className="display shrink-0 text-2xl text-ink/35 transition-colors hover:text-ink/70"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
