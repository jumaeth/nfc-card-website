import type { Metadata } from "next";
import { Bricolage_Grotesque, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { BRAND, site } from "@/lib/site";

const display = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const body = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: `${BRAND} — Swiss NFC cards for reviews, menus & links`,
  description:
    "Premium Swiss-made NFC cards, plates and stands for restaurants and shops. Guests tap their phone — no app — to open your Google reviews, digital menu or link page.",
  keywords: [
    "NFC cards",
    "Swiss NFC",
    "Google reviews",
    "digital menu",
    "restaurant",
    "tap to review",
  ],
  openGraph: {
    title: `${BRAND} — Swiss NFC cards`,
    description: site.tagline,
    type: "website",
    locale: "en_CH",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} h-full`}
    >
      <body className="grain min-h-full flex flex-col">{children}</body>
    </html>
  );
}
