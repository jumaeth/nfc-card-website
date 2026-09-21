import { ImageResponse } from "next/og";
import { LOCALE_SLUGS, slugToLocale } from "@/lib/locale";
import { SITE_NAME } from "@/lib/seo";
import { site } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return LOCALE_SLUGS.map((locale) => ({ locale }));
}

// Brand palette (mirrors src/app/globals.css).
const INK = "#14120f";
const PAPER = "#f6f3ec";
const ACCENT = "#f0431f";

export const alt = `${SITE_NAME} — Swiss NFC cards`;

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const loc = slugToLocale((await params).locale) ?? "DE";
  const tagline = site.tagline[loc];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: INK,
          color: PAPER,
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              background: ACCENT,
              display: "flex",
            }}
          />
          <div style={{ fontSize: 44, fontWeight: 700, letterSpacing: -1 }}>
            {SITE_NAME}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 84, fontWeight: 800, lineHeight: 1.05, letterSpacing: -2 }}>
            {tagline}
          </div>
          <div style={{ fontSize: 34, color: "#c9c2b4" }}>
            Premium NFC cards · Reviews · Menus · Links · 🇨🇭 Switzerland
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 30, color: ACCENT, fontWeight: 600 }}>
          taplino.ch
        </div>
      </div>
    ),
    { ...size },
  );
}
