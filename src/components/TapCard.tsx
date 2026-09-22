"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { destinations, site, ui } from "@/lib/site";
import { useT } from "@/lib/i18n";

function TaplinoMark({
  size = 38,
  accent = "#2F6DF0",
  body = "#F6F3EE",
}: {
  size?: number;
  accent?: string;
  body?: string;
}) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      <g transform="rotate(-12 32 32)">
        <rect x="6" y="24" width="38" height="24" rx="6" fill={body} />
      </g>
      <circle cx="52" cy="14" r="4" fill={accent} />
      <circle cx="52" cy="14" r="9.5" stroke={accent} strokeWidth="3" fill="none" />
    </svg>
  );
}

// The three destinations each ride on a different physical card finish, so the
// hero cycles through the real product range: brushed silver metal (the flagship
// metal card), brushed black metal, and a printed colour card. The brushed-metal
// gradients are the exact swatches used by the live editor preview (FINISHES).
type CardStyle = {
  surface: string; // card background (brushed-metal gradient or printed colour)
  ring: string; // hairline border colour
  ink: string; // primary text colour
  sub: string; // muted text colour
  dotIdle: string; // inactive progress-dot colour
  markBody: string; // fill of the Taplino card glyph so it reads on the surface
  accent: string; // mark stroke, ripple and active-dot colour
  sheen: boolean; // brushed-metal light streak overlay
};

const METAL_SILVER = {
  surface: "linear-gradient(135deg,#f2f3f5 0%,#c3c6cd 38%,#e9eaee 55%,#a9adb6 78%,#dfe1e6 100%)",
  ring: "#b9bcc4",
  ink: "#18171c",
  sub: "rgba(24,23,28,0.55)",
  dotIdle: "rgba(20,18,15,0.18)",
  markBody: "#1b1a1f",
  sheen: true,
};

const METAL_BLACK = {
  surface: "linear-gradient(135deg,#43444a 0%,#161719 38%,#33343a 55%,#0d0e10 78%,#2a2b31 100%)",
  ring: "#2b2c31",
  ink: "#f4f1ea",
  sub: "rgba(244,241,234,0.6)",
  dotIdle: "rgba(244,241,234,0.28)",
  markBody: "#f4f1ea",
  sheen: true,
};

function cardStyleFor(d: (typeof destinations)[number]): CardStyle {
  if (d.key === "menu") return { ...METAL_BLACK, accent: d.accent };
  if (d.key === "links")
    return {
      surface: "linear-gradient(140deg,#3b7bf6 0%,#2f6df0 45%,#1a4dbf 100%)",
      ring: "rgba(255,255,255,0.18)",
      ink: "#ffffff",
      sub: "rgba(255,255,255,0.72)",
      dotIdle: "rgba(255,255,255,0.35)",
      markBody: "#eaf1fd",
      accent: "#ffffff",
      sheen: false,
    };
  return { ...METAL_SILVER, accent: d.accent };
}

function Stars() {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#f5a623">
          <path d="M12 2l3 6.5 7 .8-5.2 4.7 1.4 6.9L12 17.6 5.4 20.9l1.4-6.9L1.6 9.3l7-.8L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function Screen({ d }: { d: (typeof destinations)[number] }) {
  const t = useT();
  return (
    <div className="flex h-full flex-col px-4 pb-4 pt-7">
      <div className="flex items-center gap-2">
        <span
          className="grid h-8 w-8 place-items-center rounded-full text-white"
          style={{ background: d.accent }}
        >
          <span className="text-xs font-bold">{d.subtitle[0]}</span>
        </span>
        <div className="leading-tight">
          <p className="text-[11px] font-semibold text-ink">{d.subtitle}</p>
          <p className="text-[9px] text-muted">taplino.ch/{d.key}</p>
        </div>
      </div>

      {d.key === "reviews" && (
        <div className="mt-4 flex flex-1 flex-col items-center justify-center gap-3 text-center">
          <p className="text-sm font-semibold text-ink">{t(d.title)}</p>
          <Stars />
          <div className="w-full rounded-lg bg-paper-2 py-2 text-[10px] text-muted">
            {t(ui.tapCard.tellUs)}
          </div>
          <div
            className="w-full rounded-lg py-2 text-[11px] font-semibold text-white"
            style={{ background: d.accent }}
          >
            {t(ui.tapCard.postToGoogle)}
          </div>
        </div>
      )}

      {d.key === "menu" && (
        <div className="mt-3 flex-1 space-y-2">
          <p className="text-sm font-semibold text-ink">{t(d.title)}</p>
          {[
            ["Burrata & tomato", "18.–"],
            ["Risotto ai funghi", "26.–"],
            ["Tagliata di manzo", "39.–"],
          ].map(([n, p]) => (
            <div key={n} className="flex items-center justify-between rounded-lg bg-paper-2 px-3 py-2">
              <span className="text-[11px] text-ink">{n}</span>
              <span className="text-[11px] font-semibold" style={{ color: d.accent }}>
                {p}
              </span>
            </div>
          ))}
        </div>
      )}

      {d.key === "links" && (
        <div className="mt-3 flex-1 space-y-2">
          <p className="text-sm font-semibold text-ink">{t(d.title)}</p>
          {ui.tapCard.links.map((link, li) => (
            <div
              key={li}
              className="flex items-center justify-between rounded-lg border px-3 py-2"
              style={{ borderColor: `${d.accent}30` }}
            >
              <span className="text-[11px] font-medium text-ink">{t(link)}</span>
              <span style={{ color: d.accent }}>→</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function TapCard() {
  const [i, setI] = useState(0);
  const t = useT();
  const d = destinations[i];
  const cs = cardStyleFor(d);

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % destinations.length), 3400);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative mx-auto aspect-[7/8] w-full max-w-[360px] sm:aspect-square sm:max-w-[520px]">
      {/* soft glow */}
      <div
        className="absolute inset-0 rounded-full blur-3xl transition-colors duration-700"
        style={{ background: `${d.accent}22` }}
      />

      {/* Phone */}
      <motion.div
        initial={{ opacity: 0, y: 30, rotate: 4 }}
        animate={{ opacity: 1, y: 0, rotate: 4 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="absolute right-0 top-0 h-[310px] w-[156px] rounded-[2rem] border-[6px] border-ink bg-paper shadow-[0_40px_80px_-30px_rgba(0,0,0,0.45)] sm:right-6 sm:top-6 sm:h-[340px] sm:w-[172px]"
      >
        <div className="absolute left-1/2 top-2 h-1.5 w-14 -translate-x-1/2 rounded-full bg-ink/80" />
        <div className="h-full w-full overflow-hidden rounded-[1.5rem]">
          <AnimatePresence mode="wait">
            <motion.div
              key={d.key}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="h-full"
            >
              <Screen d={d} />
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Card — cycles through the real product finishes (silver metal, black
          metal, printed colour), one per destination. */}
      <motion.div
        initial={{ opacity: 0, y: 40, rotate: -10 }}
        animate={{ opacity: 1, y: 0, rotate: -8 }}
        transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ rotate: -4, y: -6 }}
        className="absolute bottom-0 left-0 h-[180px] w-[280px] overflow-hidden rounded-[1.4rem] border p-5 shadow-[0_40px_80px_-24px_rgba(0,0,0,0.6)] transition-colors duration-700 sm:bottom-4 sm:left-2 sm:h-[210px] sm:w-[330px] sm:p-6"
        style={{ background: cs.surface, borderColor: cs.ring, color: cs.ink }}
      >
        {/* brushed-metal sheen */}
        {cs.sheen && (
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(120deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0) 34%, rgba(255,255,255,0) 60%, rgba(255,255,255,0.22) 100%)",
            }}
          />
        )}

        {/* Taplino logo with ripples radiating from its center */}
        <div className="absolute right-6 top-6 grid place-items-center">
          {[0, 0.8, 1.6].map((delay) => (
            <span
              key={delay}
              className="ripple-ring absolute left-1/2 top-1/2 -ml-4 -mt-4 h-8 w-8 rounded-full border"
              style={{ borderColor: cs.accent, animationDelay: `${delay}s` }}
            />
          ))}
          <span className="relative">
            <TaplinoMark accent={cs.accent} body={cs.markBody} />
          </span>
        </div>

        <div className="relative flex h-full flex-col justify-between">
          <div>
            <span className="eyebrow" style={{ color: cs.sub }}>
              Taplino
            </span>
          </div>
          <div>
            <div className="mb-3 flex gap-1.5">
              {destinations.map((dd, idx) => (
                <span
                  key={dd.key}
                  className="h-1 rounded-full transition-all duration-500"
                  style={{
                    width: idx === i ? 22 : 8,
                    background: idx === i ? cs.accent : cs.dotIdle,
                  }}
                />
              ))}
            </div>
            <p className="display text-2xl">{t(d.label)}</p>
            <p className="mt-1 text-sm" style={{ color: cs.sub }}>
              {t(ui.tapCard.tapToOpen)}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
