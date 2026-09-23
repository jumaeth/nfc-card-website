import type { Metadata } from "next";
import { ContentPage } from "@/components/ContentPage";
import { AboutJsonLd } from "@/components/JsonLd";
import { pages } from "@/lib/site";
import { slugToLocale } from "@/lib/locale";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const loc = slugToLocale((await params).locale) ?? "DE";
  return buildMetadata({
    locale: loc,
    path: "/about",
    title: pages.about.title[loc],
    description: pages.about.intro[loc],
  });
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const loc = slugToLocale((await params).locale) ?? "DE";
  return (
    <>
      <AboutJsonLd locale={loc} />
      <ContentPage data={pages.about} />
    </>
  );
}
