"use client";

import { useRef, useState, type ReactNode } from "react";
import Image from "next/image";
import { ui, site, reviewCards } from "@/lib/site";
import { useT } from "@/lib/i18n";
import { Button, Arrow } from "@/components/ui";
import { CardPreview } from "./CardPreview";
import {
  PRESETS,
  exampleCard,
  type CardConfig,
  type CardLayout,
  type FontStyle,
  type HeaderShape,
  type Preset,
} from "./types";

const UNIT_PRICE = Number(reviewCards[0].price); // CHF per card

function initialConfig(): CardConfig {
  return exampleCard();
}

function Section({ n, title, children }: { n: number; title: string; children: ReactNode }) {
  return (
    <section className="border-t border-line py-7 first:border-t-0 first:pt-0">
      <div className="mb-4 flex items-center gap-3">
        <span className="grid h-6 w-6 place-items-center rounded-full bg-ink text-[0.7rem] font-bold text-paper">
          {n}
        </span>
        <h2 className="display text-lg">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted">
        {label}
      </span>
      {children}
    </label>
  );
}

const inputCls =
  "w-full rounded-xl border border-line bg-paper px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-ink";

function ColorField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted">
        {label}
      </span>
      <div className="flex items-center gap-2 rounded-xl border border-line bg-paper p-1.5">
        <input
          type="color"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          aria-label={label}
          className="h-8 w-9 cursor-pointer rounded-lg border-0 bg-transparent p-0"
        />
        <input
          type="text"
          value={value.toUpperCase()}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-transparent text-sm font-medium text-ink outline-none"
          spellCheck={false}
        />
      </div>
    </div>
  );
}

const textareaCls =
  "w-full resize-y rounded-xl border border-line bg-paper px-3.5 py-2.5 text-sm leading-relaxed text-ink outline-none transition-colors focus:border-ink";

// A segmented button group for a small set of mutually-exclusive options.
function Segmented<T extends string>({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: T;
  options: { value: T; label: string }[];
  onChange: (v: T) => void;
}) {
  return (
    <div>
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted">
        {label}
      </span>
      <div className="inline-flex flex-wrap gap-1 rounded-xl border border-line p-1">
        {options.map((o) => (
          <button
            key={o.value}
            type="button"
            onClick={() => onChange(o.value)}
            className={`rounded-lg px-3.5 py-1.5 text-sm font-semibold transition-colors ${
              value === o.value ? "bg-ink text-paper" : "text-muted hover:text-ink"
            }`}
          >
            {o.label}
          </button>
        ))}
      </div>
    </div>
  );
}

// A labelled on/off switch.
function Toggle({
  label,
  hint,
  checked,
  onChange,
}: {
  label: string;
  hint: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className="flex w-full items-center justify-between gap-4 rounded-xl border border-line bg-paper px-3.5 py-3 text-left transition-colors hover:border-ink/40"
    >
      <span className="min-w-0">
        <span className="block text-sm font-semibold text-ink">{label}</span>
        <span className="mt-0.5 block text-xs leading-snug text-muted">{hint}</span>
      </span>
      <span
        className={`relative h-6 w-11 shrink-0 rounded-full transition-colors ${
          checked ? "bg-ink" : "bg-line"
        }`}
      >
        <span
          className={`absolute top-0.5 h-5 w-5 rounded-full bg-paper shadow transition-all ${
            checked ? "left-[1.375rem]" : "left-0.5"
          }`}
        />
      </span>
    </button>
  );
}

// Tiny wireframe of each layout for the layout picker buttons.
function LayoutGlyph({ kind, active }: { kind: CardLayout; active: boolean }) {
  const stroke = active ? "#14120f" : "#9c968a";
  return (
    <svg width="100%" height="34" viewBox="0 0 60 34" fill="none" aria-hidden className="rounded-md bg-paper-2/60">
      <rect x="8" y="4" width="44" height="7" rx="2" fill={stroke} opacity="0.5" />
      {kind === "logo" && (
        <rect x="21" y="16" width="18" height="14" rx="3" stroke={stroke} strokeWidth="1.6" strokeDasharray="3 2" />
      )}
      {kind === "text" && (
        <>
          <rect x="14" y="18" width="32" height="3" rx="1.5" fill={stroke} />
          <rect x="18" y="24" width="24" height="3" rx="1.5" fill={stroke} />
        </>
      )}
      {kind === "list" && (
        <>
          {[16, 22, 28].map((y) => (
            <g key={y}>
              <circle cx="16" cy={y + 1.5} r="1.3" fill={stroke} />
              <rect x="21" y={y} width="26" height="3" rx="1.5" fill={stroke} />
            </g>
          ))}
        </>
      )}
    </svg>
  );
}

export function CardEditor() {
  const t = useT();
  const [config, setConfig] = useState<CardConfig>(initialConfig);
  const [activePreset, setActivePreset] = useState<string>(PRESETS[0].key);
  const [qty, setQty] = useState(50);
  const [ordered, setOrdered] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const set = <K extends keyof CardConfig>(key: K, val: CardConfig[K]) =>
    setConfig((c) => ({ ...c, [key]: val }));

  const applyPreset = (p: Preset) => {
    setActivePreset(p.key);
    setConfig((c) => ({
      ...c,
      headerColor: p.headerColor,
      headerTextColor: p.headerTextColor,
      bodyColor: p.bodyColor,
      starColor: p.starColor,
      accentColor: p.accentColor,
      font: p.font,
      layout: p.layout,
      headerShape: p.headerShape,
      showStars: p.showStars,
      // Only seed the category if the customer hasn't typed their own.
      category: c.category || t(p.category),
    }));
  };

  const presetLabel: Record<Preset["key"], string> = {
    restaurant: t(ui.editor.presetRestaurant),
    electronics: t(ui.editor.presetElectronics),
    fitness: t(ui.editor.presetFitness),
    beauty: t(ui.editor.presetBeauty),
  };

  const onLogo = (file: File | undefined) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      set("logoDataUrl", reader.result as string);
      set("logoName", file.name);
    };
    reader.readAsDataURL(file);
  };

  const reset = () => {
    setConfig(initialConfig());
    setActivePreset(PRESETS[0].key);
    setQty(50);
    if (fileRef.current) fileRef.current.value = "";
  };

  const total = (qty * UNIT_PRICE).toLocaleString("de-CH");

  const placeOrder = () => {
    const lines = [
      "New Google-review card order",
      "",
      `Template: ${presetLabel[activePreset as Preset["key"]] ?? activePreset}`,
      `Layout: ${config.layout}`,
      `Category: ${config.category || "—"}`,
      `Headline: ${config.headline || t(ui.editor.defaultHeadline)}`,
      ...(config.layout === "logo"
        ? [
            `Logo label: ${config.logoText || t(ui.editor.defaultLogoText)}`,
            `Logo caption: ${config.logoHint || t(ui.editor.defaultLogoHint)}`,
          ]
        : []),
      ...(config.layout === "text"
        ? [`Message: ${config.bodyText || t(ui.editor.defaultBodyText)}`]
        : []),
      ...(config.layout === "list"
        ? [
            `List title: ${config.listTitle || t(ui.editor.defaultListTitle)}`,
            `List items: ${(config.listItems || t(ui.editor.defaultListItems)).split("\n").filter(Boolean).join(", ")}`,
          ]
        : []),
      `Logo file: ${config.logoName ?? "none uploaded — will send separately"}`,
      `Font: ${config.font}`,
      `Header edge: ${config.headerShape}`,
      `Star rating: ${config.showStars ? "shown" : "hidden"}`,
      `Backup QR code: ${config.showQr ? "yes" : "no"}`,
      "",
      "Colours",
      `  Header: ${config.headerColor}`,
      `  Header text: ${config.headerTextColor}`,
      `  Background: ${config.bodyColor}`,
      `  Stars: ${config.starColor}`,
      `  Accent: ${config.accentColor}`,
      "",
      `Review link: ${config.reviewUrl || "—"}`,
      "",
      `Quantity: ${qty}`,
      `Total: CHF ${total}`,
    ].join("\n");

    const subject = `Card order — ${config.category || "Custom"} (${qty} pcs)`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(lines)}`;
    setOrdered(true);
  };

  return (
    <div className="section-pad grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,440px)]">
      {/* ── Controls ─────────────────────────────────────────────── */}
      <div className="order-2 lg:order-1">
        {/* 1. Template */}
        <Section n={1} title={t(ui.editor.stepTemplate)}>
          <p className="mb-4 text-sm text-muted">{t(ui.editor.templateHint)}</p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
            {PRESETS.map((p) => {
              const active = activePreset === p.key;
              return (
                <button
                  key={p.key}
                  type="button"
                  onClick={() => applyPreset(p)}
                  className={`group rounded-2xl border p-2 text-left transition-all ${
                    active
                      ? "border-ink ring-2 ring-ink/10"
                      : "border-line hover:border-ink/40"
                  }`}
                >
                  <div
                    className="mb-2 flex aspect-[5/4] items-center justify-center rounded-xl"
                    style={{ backgroundColor: p.bodyColor }}
                  >
                    <div
                      className="flex h-full w-full flex-col items-center justify-center rounded-xl"
                      style={{ backgroundColor: p.headerColor }}
                    >
                      <div className="flex gap-0.5">
                        {[0, 1, 2].map((i) => (
                          <span
                            key={i}
                            className="h-1.5 w-1.5 rounded-full"
                            style={{ backgroundColor: p.starColor }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <span className="block truncate text-xs font-semibold text-ink">
                    {presetLabel[p.key]}
                  </span>
                </button>
              );
            })}
          </div>
        </Section>

        {/* 2. Layout & style */}
        <Section n={2} title={t(ui.editor.stepStyle)}>
          <p className="mb-4 text-sm text-muted">{t(ui.editor.styleHint)}</p>

          {/* Layout picker */}
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted">
            {t(ui.editor.layoutLabel)}
          </span>
          <div className="mb-6 grid grid-cols-3 gap-2">
            {(
              [
                { key: "logo", label: t(ui.editor.layoutLogo), hint: t(ui.editor.layoutLogoHint) },
                { key: "text", label: t(ui.editor.layoutText), hint: t(ui.editor.layoutTextHint) },
                { key: "list", label: t(ui.editor.layoutList), hint: t(ui.editor.layoutListHint) },
              ] as { key: CardLayout; label: string; hint: string }[]
            ).map((o) => {
              const active = config.layout === o.key;
              return (
                <button
                  key={o.key}
                  type="button"
                  onClick={() => set("layout", o.key)}
                  className={`rounded-2xl border p-3 text-left transition-all ${
                    active ? "border-ink ring-2 ring-ink/10" : "border-line hover:border-ink/40"
                  }`}
                >
                  <LayoutGlyph kind={o.key} active={active} />
                  <span className="mt-2 block text-sm font-semibold text-ink">{o.label}</span>
                  <span className="mt-0.5 block text-xs leading-snug text-muted">{o.hint}</span>
                </button>
              );
            })}
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-5">
            <Segmented<FontStyle>
              label={t(ui.editor.fontStyle)}
              value={config.font}
              onChange={(v) => set("font", v)}
              options={[
                { value: "sans", label: t(ui.editor.fontSans) },
                { value: "serif", label: t(ui.editor.fontSerif) },
                { value: "rounded", label: t(ui.editor.fontRounded) },
                { value: "display", label: t(ui.editor.fontDisplay) },
              ]}
            />
            <Segmented<HeaderShape>
              label={t(ui.editor.headerEdge)}
              value={config.headerShape}
              onChange={(v) => set("headerShape", v)}
              options={[
                { value: "straight", label: t(ui.editor.edgeStraight) },
                { value: "wave", label: t(ui.editor.edgeWave) },
                { value: "round", label: t(ui.editor.edgeRound) },
                { value: "scallop", label: t(ui.editor.edgeScallop) },
              ]}
            />
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <Toggle
              label={t(ui.editor.showStars)}
              hint={t(ui.editor.showStarsHint)}
              checked={config.showStars}
              onChange={(v) => set("showStars", v)}
            />
            <Toggle
              label={t(ui.editor.showQr)}
              hint={t(ui.editor.showQrHint)}
              checked={config.showQr}
              onChange={(v) => set("showQr", v)}
            />
          </div>
        </Section>

        {/* 3. Logo */}
        <Section n={3} title={t(ui.editor.stepLogo)}>
          <input
            ref={fileRef}
            type="file"
            accept="image/png,image/jpeg,image/svg+xml,image/webp"
            className="hidden"
            onChange={(e) => onLogo(e.target.files?.[0])}
          />
          {config.logoDataUrl ? (
            <div className="flex items-center gap-4 rounded-2xl border border-line bg-paper-2/50 p-3">
              <div className="grid h-16 w-16 shrink-0 place-items-center rounded-xl border border-line bg-white">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={config.logoDataUrl} alt="logo" className="max-h-12 max-w-12 object-contain" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-ink">{config.logoName}</p>
                <div className="mt-1.5 flex gap-3 text-sm">
                  <button
                    type="button"
                    onClick={() => fileRef.current?.click()}
                    className="font-semibold text-ink link-underline"
                  >
                    {t(ui.editor.replaceLogo)}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      set("logoDataUrl", null);
                      set("logoName", null);
                      if (fileRef.current) fileRef.current.value = "";
                    }}
                    className="font-semibold text-muted hover:text-accent"
                  >
                    {t(ui.editor.removeLogo)}
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => fileRef.current?.click()}
              className="flex w-full flex-col items-center gap-2 rounded-2xl border-2 border-dashed border-line bg-paper-2/40 px-6 py-8 text-center transition-colors hover:border-ink/40"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M12 16V4m0 0L7 9m5-5l5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="text-ink" />
                <path d="M4 17v2a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" className="text-muted" />
              </svg>
              <span className="text-sm font-semibold text-ink">{t(ui.editor.uploadLogo)}</span>
              <span className="text-xs text-muted">{t(ui.editor.uploadHint)}</span>
            </button>
          )}
        </Section>

        {/* 4. Colours */}
        <Section n={4} title={t(ui.editor.stepColors)}>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            <ColorField label={t(ui.editor.colorHeader)} value={config.headerColor} onChange={(v) => set("headerColor", v)} />
            <ColorField label={t(ui.editor.colorHeaderText)} value={config.headerTextColor} onChange={(v) => set("headerTextColor", v)} />
            <ColorField label={t(ui.editor.colorBody)} value={config.bodyColor} onChange={(v) => set("bodyColor", v)} />
            <ColorField label={t(ui.editor.colorStars)} value={config.starColor} onChange={(v) => set("starColor", v)} />
            <ColorField label={t(ui.editor.colorAccent)} value={config.accentColor} onChange={(v) => set("accentColor", v)} />
          </div>
        </Section>

        {/* 5. Content */}
        <Section n={5} title={t(ui.editor.stepContent)}>
          <div className="space-y-4">
            <Field label={t(ui.editor.fieldHeadline)}>
              <input
                type="text"
                className={inputCls}
                value={config.headline}
                placeholder={t(ui.editor.defaultHeadline)}
                onChange={(e) => set("headline", e.target.value)}
              />
            </Field>

            {/* Fields that depend on the chosen layout */}
            {config.layout === "logo" && (
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label={t(ui.editor.fieldLogoText)}>
                  <input
                    type="text"
                    className={inputCls}
                    value={config.logoText}
                    placeholder={t(ui.editor.defaultLogoText)}
                    onChange={(e) => set("logoText", e.target.value)}
                  />
                </Field>
                <Field label={t(ui.editor.fieldLogoHint)}>
                  <input
                    type="text"
                    className={inputCls}
                    value={config.logoHint}
                    placeholder={t(ui.editor.defaultLogoHint)}
                    onChange={(e) => set("logoHint", e.target.value)}
                  />
                </Field>
              </div>
            )}

            {config.layout === "text" && (
              <Field label={t(ui.editor.fieldBodyText)}>
                <textarea
                  rows={3}
                  className={textareaCls}
                  value={config.bodyText}
                  placeholder={t(ui.editor.fieldBodyTextPh)}
                  onChange={(e) => set("bodyText", e.target.value)}
                />
              </Field>
            )}

            {config.layout === "list" && (
              <div className="space-y-4">
                <Field label={t(ui.editor.fieldListTitle)}>
                  <input
                    type="text"
                    className={inputCls}
                    value={config.listTitle}
                    placeholder={t(ui.editor.fieldListTitlePh)}
                    onChange={(e) => set("listTitle", e.target.value)}
                  />
                </Field>
                <Field label={t(ui.editor.fieldListItems)}>
                  <textarea
                    rows={4}
                    className={textareaCls}
                    value={config.listItems}
                    placeholder={t(ui.editor.fieldListItemsPh)}
                    onChange={(e) => set("listItems", e.target.value)}
                  />
                </Field>
              </div>
            )}

            <Field label={t(ui.editor.fieldCategory)}>
              <input
                type="text"
                className={inputCls}
                value={config.category}
                placeholder={t(ui.editor.fieldCategoryPh)}
                onChange={(e) => set("category", e.target.value)}
              />
            </Field>
          </div>
        </Section>

        {/* 6. Destination */}
        <Section n={6} title={t(ui.editor.stepLink)}>
          <Field label={t(ui.editor.reviewUrl)}>
            <input
              type="url"
              inputMode="url"
              className={inputCls}
              value={config.reviewUrl}
              placeholder={t(ui.editor.reviewUrlPh)}
              onChange={(e) => set("reviewUrl", e.target.value)}
            />
          </Field>
          <p className="mt-2 text-xs leading-relaxed text-muted">{t(ui.editor.reviewUrlHint)}</p>
        </Section>

        <button
          type="button"
          onClick={reset}
          className="mt-2 text-sm font-semibold text-muted hover:text-accent"
        >
          ↺ {t(ui.editor.resetDesign)}
        </button>
      </div>

      {/* ── Preview + order (sticky) ─────────────────────────────── */}
      <div className="order-1 lg:order-2">
        <div className="lg:sticky lg:top-28">
          <CardPreview config={config} />

          {/* Order box */}
          <div className="mt-6 rounded-card border border-line bg-paper-2/40 p-5">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-ink">{t(ui.editor.quantity)}</span>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setQty((q) => Math.max(1, q - 10))}
                  className="grid h-8 w-8 place-items-center rounded-full border border-line text-lg leading-none text-ink hover:border-ink"
                  aria-label="−"
                >
                  −
                </button>
                <input
                  type="number"
                  min={1}
                  value={qty}
                  onChange={(e) => setQty(Math.max(1, Number(e.target.value) || 1))}
                  className="w-14 rounded-lg border border-line bg-paper py-1 text-center text-sm font-semibold text-ink outline-none focus:border-ink"
                />
                <button
                  type="button"
                  onClick={() => setQty((q) => q + 10)}
                  className="grid h-8 w-8 place-items-center rounded-full border border-line text-lg leading-none text-ink hover:border-ink"
                  aria-label="+"
                >
                  +
                </button>
              </div>
            </div>

            <div className="mt-4 flex items-end justify-between border-t border-line pt-4">
              <div>
                <span className="text-xs text-muted">
                  {t(ui.editor.total)} · CHF {UNIT_PRICE} {t(ui.editor.unitPrice)}
                </span>
                <p className="display text-3xl text-ink">CHF {total}</p>
              </div>
              <Button onClick={placeOrder}>
                {t(ui.editor.placeOrder)} <Arrow />
              </Button>
            </div>

            <p className="mt-3 text-xs leading-relaxed text-muted">{t(ui.editor.orderNote)}</p>
          </div>
        </div>
      </div>

      {/* Confirmation */}
      {ordered && (
        <div
          className="fixed inset-0 z-[200] grid place-items-center bg-ink/40 p-6 backdrop-blur-sm"
          onClick={() => setOrdered(false)}
        >
          <div
            className="w-full max-w-md rounded-card border border-line bg-paper p-8 text-center shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mx-auto mb-5 grid h-14 w-14 place-items-center rounded-full bg-accent-soft">
              <Image src="/logo/taplino-mark.svg" alt="" width={64} height={64} className="h-8 w-8" />
            </div>
            <h3 className="display text-2xl text-ink">{t(ui.editor.orderThanks)}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{t(ui.editor.orderThanksBody)}</p>
            <button
              type="button"
              onClick={() => setOrdered(false)}
              className="mt-6 text-sm font-semibold text-ink link-underline"
            >
              {t(ui.editor.orderClose)}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
