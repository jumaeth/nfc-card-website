import type { Metadata } from "next";
import { Bricolage_Grotesque, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { BRAND, site } from "@/lib/site";
import { LangProvider } from "@/lib/i18n";

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
    "A premium, fully customisable Swiss-made NFC stand for any business. Customers tap their phone — no app — to open your links, socials, menu, booking or Google reviews.",
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
    description: site.tagline.EN,
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
      <body className="grain min-h-full flex flex-col">
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
