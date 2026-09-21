import type { Metadata } from "next";
import { ContentPage } from "@/components/ContentPage";
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
    path: "/terms",
    title: pages.terms.title[loc],
    description: pages.terms.intro[loc],
  });
}

export default function TermsPage() {
  return <ContentPage data={pages.terms} />;
}
