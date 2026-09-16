"use client";

import { standProducts, reviewCards, ui } from "@/lib/site";
import type { L } from "@/lib/locale";
import { SectionHeading, Button, Arrow } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { useT } from "@/lib/i18n";

function CardVisual({ accent }: { accent: boolean }) {
  return (
    <div
      className={`relative mb-8 aspect-[16/10] w-full overflow-hidden rounded-2xl border ${
        accent ? "border-accent/30" : "border-line"
      }`}
    >
      <div
        className={`absolute inset-0 ${
          accent
            ? "bg-gradient-to-br from-[#2a2824] to-ink"
            : "bg-gradient-to-br from-paper-2 to-paper-3"
        }`}
      />
      <div
        className="absolute right-5 top-5"
        style={{ color: accent ? "#f0431f" : "#14120f" }}
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
          <path d="M9 8a5 5 0 0 1 0 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M12.5 5a9 9 0 0 1 0 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <circle cx="6" cy="12" r="1.5" fill="currentColor" />
        </svg>
      </div>
      <span
        className={`absolute bottom-5 left-5 display text-lg ${
          accent ? "text-paper" : "text-ink"
        }`}
      >
        Taplino
      </span>
    </div>
  );
}

type Product = {
  name: string;
  material: L;
  price: string;
  blurb: L;
  accent: boolean;
};

function ProductGrid({ items, badge }: { items: Product[]; badge: L }) {
  const t = useT();
  return (
    <div className="mt-16 grid gap-6 md:grid-cols-3">
      {items.map((p, i) => (
        <Reveal key={p.name} delay={i * 0.1}>
          <div
            className={`group relative flex h-full flex-col rounded-card border p-6 transition-all duration-300 hover:-translate-y-1 ${
              p.accent
                ? "border-accent/30 bg-accent-soft/40 hover:shadow-[0_30px_60px_-30px_rgba(240,67,31,0.5)]"
                : "border-line bg-paper-2/40 hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.35)]"
            }`}
          >
            {p.accent && (
              <span className="absolute right-6 top-6 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white">
                {t(badge)}
              </span>
            )}
            <CardVisual accent={p.accent} />
            <h3 className="display text-2xl">{p.name}</h3>
            <p className="mt-1 text-sm font-medium text-muted">{t(p.material)}</p>
            <p className="mt-3 flex-1 leading-relaxed text-ink-soft">{t(p.blurb)}</p>
            <div className="mt-6 flex items-end justify-between border-t border-line pt-5">
              <p>
                <span className="text-xs text-muted">{t(ui.products.from)}</span>
                <br />
                <span className="display text-3xl">CHF {p.price}</span>
              </p>
              <Button href="#pricing" variant={p.accent ? "solid" : "outline"}>
                {t(ui.products.order)} <Arrow />
              </Button>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export function Products() {
  const t = useT();
  return (
    <>
      {/* Flagship: the customisable NFC stand */}
      <section id="products" className="section-pad py-24 sm:py-32">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <SectionHeading
              eyebrow={t(ui.products.stand.eyebrow)}
              title={t(ui.products.stand.title)}
              intro={t(ui.products.stand.intro)}
            />
          </Reveal>
          <Reveal delay={0.1}>
            <Button href="#pricing" variant="outline">
              {t(ui.products.stand.cta)} <Arrow />
            </Button>
          </Reveal>
        </div>

        <ProductGrid items={standProducts} badge={ui.products.stand.badge} />
      </section>

      {/* Separate line: plain Google Reviews cards */}
      <section id="review-cards" className="section-pad py-24 sm:py-32">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <SectionHeading
              eyebrow={t(ui.products.review.eyebrow)}
              title={t(ui.products.review.title)}
              intro={t(ui.products.review.intro)}
            />
          </Reveal>
          <Reveal delay={0.1}>
            <Button href="#pricing" variant="outline">
              {t(ui.products.review.cta)} <Arrow />
            </Button>
          </Reveal>
        </div>

        <ProductGrid items={reviewCards} badge={ui.products.review.badge} />
      </section>
    </>
  );
}
