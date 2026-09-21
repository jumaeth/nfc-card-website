"use client";

import Image from "next/image";
import { products, reviewCards, ui } from "@/lib/site";
import type { L } from "@/lib/locale";
import { SectionHeading, Button, Arrow } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { CardPreview } from "@/components/editor/CardPreview";
import { exampleCard } from "@/components/editor/types";
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
      <div className="absolute right-5 top-5">
        <Image
          src={accent ? "/logo/taplino-mark-cream-on-ink.svg" : "/logo/taplino-mark.svg"}
          alt=""
          width={64}
          height={64}
          className="h-7 w-7"
        />
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

function Check() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className="mt-0.5 shrink-0 text-accent"
      aria-hidden="true"
    >
      <circle cx="10" cy="10" r="10" fill="currentColor" opacity="0.12" />
      <path
        d="M6 10.5l2.5 2.5L14 7.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
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
              <span className="absolute right-6 top-6 z-10 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white">
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
      {/* Our range: the customisable NFC cards */}
      <section id="products" className="section-pad py-24 sm:py-32">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <SectionHeading
              eyebrow={t(ui.products.range.eyebrow)}
              title={t(ui.products.range.title)}
              intro={t(ui.products.range.intro)}
            />
          </Reveal>
          <Reveal delay={0.1}>
            <Button href="#pricing" variant="outline">
              {t(ui.products.range.cta)} <Arrow />
            </Button>
          </Reveal>
        </div>

        <ProductGrid items={products} badge={ui.products.range.badge} />
      </section>

      {/* Separate line: the Google review card, pitched as our editor feature */}
      <section id="review-cards" className="section-pad py-24 sm:py-32">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <Reveal>
            <CardPreview config={exampleCard()} />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="max-w-xl">
              <SectionHeading
                eyebrow={t(ui.products.review.eyebrow)}
                title={t(ui.products.review.title)}
                intro={t(ui.products.review.intro)}
              />
              <ul className="mt-8 space-y-3">
                {ui.products.review.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-ink-soft">
                    <Check />
                    <span className="leading-relaxed">{t(f)}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <p>
                  <span className="text-xs text-muted">{t(ui.products.from)}</span>
                  <br />
                  <span className="display text-3xl">CHF {reviewCards[0].price}</span>
                </p>
                <Button href="/editor" variant="solid">
                  {t(ui.products.review.editorCta)} <Arrow />
                </Button>
                <Button href="#pricing" variant="ghost">
                  {t(ui.products.review.cta)}
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
