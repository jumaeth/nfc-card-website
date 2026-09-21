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
    path: "/privacy",
    title: pages.privacy.title[loc],
    description: pages.privacy.intro[loc],
  });
}

export default function PrivacyPage() {
  return <ContentPage data={pages.privacy} />;
}
