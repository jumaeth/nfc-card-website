import type { Metadata } from "next";
import { Bricolage_Grotesque, Hanken_Grotesk } from "next/font/google";
import { notFound } from "next/navigation";
import { Analytics } from "@vercel/analytics/next";
import "../globals.css";
import { LangProvider } from "@/lib/i18n";
import { LOCALE_SLUGS, localeToSlug, slugToLocale } from "@/lib/locale";
import { SITE_NAME, SITE_URL, seoCopy } from "@/lib/seo";
import { SiteJsonLd } from "@/components/JsonLd";

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

export function generateStaticParams() {
  return LOCALE_SLUGS.map((locale) => ({ locale }));
}

export const dynamicParams = false;

// Shared base metadata. Each page sets its own localized title, description,
// canonical and hreflang alternates via buildMetadata() in src/lib/seo.ts.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const loc = slugToLocale(locale) ?? "DE";
  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: seoCopy.home.title[loc],
      template: `%s · ${SITE_NAME}`,
    },
    description: seoCopy.home.description[loc],
    applicationName: SITE_NAME,
    openGraph: { siteName: SITE_NAME },
    robots: { index: true, follow: true },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc = slugToLocale(locale);
  if (!loc) notFound();

  return (
    <html
      lang={localeToSlug(loc)}
      className={`${display.variable} ${body.variable} h-full`}
    >
      <body className="grain min-h-full flex flex-col">
        <SiteJsonLd locale={loc} />
        <LangProvider lang={loc}>{children}</LangProvider>
        <Analytics />
      </body>
    </html>
  );
}
