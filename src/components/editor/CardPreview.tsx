"use client";

import Image from "next/image";
import { ui } from "@/lib/site";
import { useT } from "@/lib/i18n";
import { FONT_STACKS, type CardConfig, type HeaderShape } from "./types";

const STAR =
  "M12 2l3 6.5 7 .8-5.2 4.7 1.4 6.9L12 17.6 5.4 20.9l1.4-6.9L1.6 9.3l7-.8L12 2z";

function GoogleG({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden>
      <path
        fill="#EA4335"
        d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
      />
      <path
        fill="#4285F4"
        d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
      />
      <path
        fill="#FBBC05"
        d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
      />
      <path
        fill="#34A853"
        d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
      />
    </svg>
  );
}

function TapGlyph({ color }: { color: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M9 11.5a4 4 0 0 1 0-.01M12 14a7 7 0 0 0 0-4M15 16a10 10 0 0 0 0-8"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <rect x="3.5" y="4" width="8" height="16" rx="2" stroke={color} strokeWidth="1.8" />
    </svg>
  );
}

// The shaped bottom edge of the header band. Rendered as an SVG that continues
// the header colour downwards, so the header appears to "melt" into the card —
// the flowy Google-review-card look. `straight` keeps a plain rounded band.
function HeaderEdge({ shape, color }: { shape: HeaderShape; color: string }) {
  if (shape === "straight") return null;
  const paths: Record<Exclude<HeaderShape, "straight">, string> = {
    // one dip + one rise → a soft double wave
    wave: "M0 0 H100 V8 Q75 22 50 10 T0 10 Z",
    // a single wide arch bulging down in the middle
    round: "M0 0 H100 V5 Q50 30 0 5 Z",
    // a row of rounded scallops
    scallop:
      "M0 6 a10 8 0 0 1 20 0 a10 8 0 0 1 20 0 a10 8 0 0 1 20 0 a10 8 0 0 1 20 0 a10 8 0 0 1 20 0 V0 H0 Z",
  };
  return (
    <svg
      viewBox="0 0 100 24"
      preserveAspectRatio="none"
      className="-mt-px block h-5 w-full"
      aria-hidden
    >
      <path d={paths[shape]} fill={color} />
    </svg>
  );
}

// An illustrative QR code for the live preview. It is deterministic from the
// review link (real finder patterns + separators + seeded modules) so it looks
// convincing; the print team generates the real, scannable code from the link.
function QrCode({ value, fg, size = 46 }: { value: string; fg: string; size?: number }) {
  const N = 25;
  const s = value || "taplino.ch";
  let h = 2166136261 >>> 0;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  const isOn = (x: number, y: number): boolean => {
    for (const [fx, fy] of [
      [0, 0],
      [N - 7, 0],
      [0, N - 7],
    ] as const) {
      const dx = x - fx;
      const dy = y - fy;
      if (dx >= 0 && dy >= 0 && dx <= 6 && dy <= 6) {
        const ring = dx === 0 || dy === 0 || dx === 6 || dy === 6;
        const core = dx >= 2 && dx <= 4 && dy >= 2 && dy <= 4;
        return ring || core;
      }
    }
    // Quiet separator around each finder pattern.
    if ((x <= 7 && y <= 7) || (x >= N - 8 && y <= 7) || (x <= 7 && y >= N - 8)) {
      return false;
    }
    let v = (h ^ (x * 73856093) ^ (y * 19349663)) >>> 0;
    v = (v ^ (v >>> 13)) >>> 0;
    return (v & 7) > 3;
  };
  const cells: { x: number; y: number }[] = [];
  for (let y = 0; y < N; y++)
    for (let x = 0; x < N; x++) if (isOn(x, y)) cells.push({ x, y });
  const pad = 1;
  const vb = N + pad * 2;
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${vb} ${vb}`}
      className="shrink-0 rounded-[3px]"
      aria-hidden
    >
      <rect width={vb} height={vb} fill="#ffffff" rx={1.5} />
      {cells.map((c, i) => (
        <rect key={i} x={c.x + pad} y={c.y + pad} width={1} height={1} fill={fg} />
      ))}
    </svg>
  );
}

// A faithful, live-updating recreation of the printed Google-review card.
export function CardPreview({ config }: { config: CardConfig }) {
  const t = useT();
  const serif = config.font === "serif";
  const display = config.font === "display";
  const cardFont = FONT_STACKS[config.font];
  const shaped = config.headerShape !== "straight";

  // Headline weight/emphasis follows the chosen voice.
  const headlineStyle = {
    fontFamily: cardFont,
    fontWeight: serif ? 500 : display ? 800 : 700,
    fontStyle: serif ? "italic" : "normal",
    letterSpacing: display ? "-0.03em" : serif ? "0" : "-0.01em",
  } as const;

  const items = config.listItems
    .split("\n")
    .map((s) => s.trim())
    .filter(Boolean);
  const listItems = items.length ? items : t(ui.editor.defaultListItems).split("\n");

  return (
    <div className="w-full">
      <div
        className="mx-auto aspect-[5/6] w-full max-w-[380px] overflow-hidden rounded-[1.75rem] border border-black/5 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.55)]"
        style={{ backgroundColor: config.bodyColor }}
      >
        <div className="flex h-full flex-col p-4">
          {/* Header band */}
          <div>
            <div
              className={`px-5 pt-4 text-center ${shaped ? "rounded-t-[1.25rem] pb-3" : "rounded-[1.25rem] pb-6"}`}
              style={{ backgroundColor: config.headerColor, color: config.headerTextColor }}
            >
              {config.showStars && (
                <div className="flex justify-center gap-1">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <svg key={i} width="18" height="18" viewBox="0 0 24 24" aria-hidden>
                      <path d={STAR} fill={config.starColor} />
                    </svg>
                  ))}
                </div>
              )}
              <p
                className={`text-[1.05rem] leading-tight ${config.showStars ? "mt-2.5" : "mt-0"}`}
                style={headlineStyle}
              >
                {config.headline || t(ui.editor.defaultHeadline)}
              </p>
            </div>
            <HeaderEdge shape={config.headerShape} color={config.headerColor} />
          </div>

          {/* Body — one of three layouts */}
          {config.layout === "logo" && (
            <div className="flex flex-1 items-center justify-center py-4">
              <div
                className="flex h-full w-full flex-col items-center justify-center gap-2 rounded-2xl px-4 text-center"
                style={{ border: `2px dashed ${config.accentColor}66` }}
              >
                {config.logoDataUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={config.logoDataUrl}
                    alt="logo"
                    className="max-h-[62%] max-w-[78%] object-contain"
                  />
                ) : (
                  <>
                    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <rect x="3" y="3" width="18" height="18" rx="3" stroke={config.accentColor} strokeWidth="1.6" />
                      <circle cx="8.5" cy="8.5" r="1.8" stroke={config.accentColor} strokeWidth="1.4" />
                      <path d="M4 16l4.5-4 4 3.2L16 11l4 4.5" stroke={config.accentColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p
                      className="text-sm font-bold uppercase tracking-wide"
                      style={{ color: config.accentColor, fontFamily: cardFont, fontStyle: serif ? "italic" : "normal" }}
                    >
                      {config.logoText || t(ui.editor.defaultLogoText)}
                    </p>
                    <p className="text-xs" style={{ color: `${config.accentColor}cc` }}>
                      {config.logoHint || t(ui.editor.defaultLogoHint)}
                    </p>
                  </>
                )}
              </div>
            </div>
          )}

          {config.layout === "text" && (
            <div className="flex flex-1 flex-col items-center justify-center gap-2 px-3 py-4 text-center">
              {(config.logoDataUrl || config.logoText) &&
                (config.logoDataUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={config.logoDataUrl} alt="logo" className="mb-1 max-h-14 max-w-[60%] object-contain" />
                ) : (
                  <p
                    className="text-xs font-bold uppercase tracking-[0.16em]"
                    style={{ color: config.accentColor }}
                  >
                    {config.logoText}
                  </p>
                ))}
              <span
                className="-mb-2 text-3xl leading-none"
                style={{ color: config.accentColor, fontFamily: cardFont }}
                aria-hidden
              >
                &ldquo;
              </span>
              <p
                className="text-ink text-[1.35rem] leading-snug"
                style={{ ...headlineStyle, color: undefined }}
              >
                {config.bodyText || t(ui.editor.defaultBodyText)}
              </p>
            </div>
          )}

          {config.layout === "list" && (
            <div className="flex flex-1 flex-col justify-center gap-2 px-2 py-3">
              <p
                className="text-center text-xs font-bold uppercase tracking-[0.16em]"
                style={{ color: config.accentColor, fontFamily: cardFont, fontStyle: serif ? "italic" : "normal" }}
              >
                {config.listTitle || t(ui.editor.defaultListTitle)}
              </p>
              <ul className="mx-auto flex w-full max-w-[15rem] flex-col gap-1.5">
                {listItems.slice(0, 6).map((row, i) => (
                  <li key={i} className="flex items-center gap-2.5">
                    <span
                      className="h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ backgroundColor: config.accentColor }}
                    />
                    <span className="text-ink/85 flex-1 text-sm leading-tight" style={{ fontFamily: cardFont }}>
                      {row}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Backup QR for phones without NFC */}
          {config.showQr && (
            <div
              className="mb-2 flex items-center justify-center gap-2.5 rounded-xl px-3 py-2"
              style={{ backgroundColor: `${config.accentColor}12` }}
            >
              <QrCode value={config.reviewUrl} fg={config.headerColor} />
              <div className="text-left">
                <p
                  className="text-[0.62rem] font-bold uppercase tracking-wide"
                  style={{ color: config.accentColor }}
                >
                  {t(ui.editor.cardQrTitle)}
                </p>
                <p className="text-ink/60 text-[0.62rem] leading-tight">
                  {t(ui.editor.cardQrHint)}
                </p>
              </div>
            </div>
          )}

          {/* Footer */}
          <div className="flex items-center justify-between gap-2 pt-1 text-ink">
            <div className="flex items-center gap-1.5">
              <GoogleG />
              <span className="text-[0.62rem] font-semibold leading-tight text-ink/80">
                {t(ui.editor.cardGoogleReview)}
              </span>
            </div>
            <div className="h-6 w-px bg-black/10" />
            <div className="flex items-center gap-1.5">
              <TapGlyph color={config.accentColor} />
              <span className="text-[0.62rem] font-semibold leading-tight text-ink/80">
                {t(ui.editor.cardTap)}
              </span>
            </div>
            <div className="ml-auto flex flex-col items-end">
              <span className="text-[0.5rem] uppercase tracking-wide text-ink/45">
                {t(ui.editor.cardPoweredBy)}
              </span>
              <Image
                src="/logo/taplino-lockup.svg"
                alt="Taplino"
                width={330}
                height={80}
                className="h-3.5 w-auto"
              />
            </div>
          </div>
        </div>
      </div>

      <p className="mt-4 text-center text-xs text-muted">
        {config.category ? `${config.category} · ` : ""}
        {t(ui.editor.cardSize).replace(/^.*·\s*/, "")}
      </p>
    </div>
  );
}
