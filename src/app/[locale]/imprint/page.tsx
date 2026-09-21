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
    path: "/imprint",
    title: pages.imprint.title[loc],
    description: pages.imprint.intro[loc],
  });
}

export default function ImprintPage() {
  return <ContentPage data={pages.imprint} />;
}
