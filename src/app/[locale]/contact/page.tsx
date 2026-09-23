import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ContactPage } from "@/components/ContactPage";
import { ContactJsonLd } from "@/components/JsonLd";
import { slugToLocale } from "@/lib/locale";
import { buildMetadata, seoCopy } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const loc = slugToLocale((await params).locale) ?? "DE";
  return buildMetadata({
    locale: loc,
    path: "/contact",
    title: seoCopy.contact.title[loc],
    description: seoCopy.contact.description[loc],
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const loc = slugToLocale((await params).locale) ?? "DE";
  return (
    <>
      <ContactJsonLd locale={loc} />
      <Nav />
      <main className="flex-1 pt-28 sm:pt-32">
        <ContactPage />
      </main>
      <Footer />
    </>
  );
}
