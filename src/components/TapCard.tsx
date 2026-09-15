"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { destinations } from "@/lib/site";

function NfcWaves({ color = "currentColor" }: { color?: string }) {
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
      <path d="M8.5 8.5a5 5 0 0 1 0 7" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
      <path d="M11.5 5.5a9 9 0 0 1 0 13" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
      <path d="M14.5 2.5a13 13 0 0 1 0 19" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="5.5" cy="12" r="1.6" fill={color} />
    </svg>
  );
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
  return (
    <div className="flex h-full flex-col p-4">
      <div className="flex items-center gap-2">
        <span
          className="grid h-8 w-8 place-items-center rounded-full text-white"
          style={{ background: d.accent }}
        >
          <span className="text-xs font-bold">{d.subtitle[0]}</span>
        </span>
        <div className="leading-tight">
          <p className="text-[11px] font-semibold text-ink">{d.subtitle}</p>
          <p className="text-[9px] text-muted">tapflow.ch/{d.key}</p>
        </div>
      </div>

      {d.key === "reviews" && (
        <div className="mt-4 flex flex-1 flex-col items-center justify-center gap-3 text-center">
          <p className="text-sm font-semibold text-ink">{d.title}</p>
          <Stars />
          <div className="w-full rounded-lg bg-paper-2 py-2 text-[10px] text-muted">
            Tell us how it went…
          </div>
          <div
            className="w-full rounded-lg py-2 text-[11px] font-semibold text-white"
            style={{ background: d.accent }}
          >
            Post to Google
          </div>
        </div>
      )}

      {d.key === "menu" && (
        <div className="mt-3 flex-1 space-y-2">
          <p className="text-sm font-semibold text-ink">{d.title}</p>
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
          <p className="text-sm font-semibold text-ink">{d.title}</p>
          {["Instagram", "Connect to WiFi", "Book a table", "Our webshop"].map((l) => (
            <div
              key={l}
              className="flex items-center justify-between rounded-lg border px-3 py-2"
              style={{ borderColor: `${d.accent}30` }}
            >
              <span className="text-[11px] font-medium text-ink">{l}</span>
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
  const d = destinations[i];

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % destinations.length), 3400);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px]">
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
        className="absolute right-2 top-6 h-[340px] w-[172px] rounded-[2rem] border-[6px] border-ink bg-paper shadow-[0_40px_80px_-30px_rgba(0,0,0,0.45)] sm:right-6"
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

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 40, rotate: -10 }}
        animate={{ opacity: 1, y: 0, rotate: -8 }}
        transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ rotate: -4, y: -6 }}
        className="absolute bottom-4 left-0 h-[210px] w-[330px] rounded-[1.4rem] bg-gradient-to-br from-ink-2 to-ink p-6 text-paper shadow-[0_40px_80px_-24px_rgba(0,0,0,0.6)] sm:left-2"
      >
        {/* ripples from NFC point */}
        <div className="absolute right-6 top-6">
          {[0, 0.8, 1.6].map((delay) => (
            <span
              key={delay}
              className="ripple-ring absolute right-2 top-2 h-8 w-8 rounded-full border"
              style={{ borderColor: `${d.accent}`, animationDelay: `${delay}s` }}
            />
          ))}
          <span className="relative text-accent" style={{ color: d.accent }}>
            <NfcWaves color={d.accent} />
          </span>
        </div>

        <div className="flex h-full flex-col justify-between">
          <div>
            <span className="eyebrow text-paper/50">Tapflow</span>
          </div>
          <div>
            <div className="mb-3 flex gap-1.5">
              {destinations.map((dd, idx) => (
                <span
                  key={dd.key}
                  className="h-1 rounded-full transition-all duration-500"
                  style={{
                    width: idx === i ? 22 : 8,
                    background: idx === i ? d.accent : "rgba(246,243,236,0.25)",
                  }}
                />
              ))}
            </div>
            <p className="display text-2xl">{d.label}</p>
            <p className="mt-1 text-sm text-paper/50">Tap to open · no app needed</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
