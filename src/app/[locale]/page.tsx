import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Logos } from "@/components/Logos";
import { Problem } from "@/components/Problem";
import { Solution } from "@/components/Solution";
import { Products } from "@/components/Products";
import { HowItWorks } from "@/components/HowItWorks";
import { Features } from "@/components/Features";
import { ForWhom } from "@/components/ForWhom";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { HomeJsonLd } from "@/components/JsonLd";
import { slugToLocale } from "@/lib/locale";
import { buildMetadata, seoCopy, seoKeywords } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const loc = slugToLocale((await params).locale) ?? "DE";
  return buildMetadata({
    locale: loc,
    path: "",
    title: seoCopy.home.title[loc],
    description: seoCopy.home.description[loc],
    keywords: seoKeywords[loc].split(", "),
  });
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const loc = slugToLocale((await params).locale) ?? "DE";
  return (
    <>
      <HomeJsonLd locale={loc} />
      <Nav />
      <main className="flex-1">
        <Hero />
        <Logos />
        <Problem />
        <Solution />
        <Products />
        <HowItWorks />
        <Features />
        <ForWhom />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
