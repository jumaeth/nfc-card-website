import type { MetadataRoute } from "next";
import { LOCALES, localeToSlug } from "@/lib/locale";
import { SITE_URL } from "@/lib/seo";

// One entry per locale × route, each advertising its hreflang alternates so
// search engines index the correct language version for each visitor.
const ROUTES: {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
}[] = [
  { path: "", priority: 1.0, changeFrequency: "monthly" },
  { path: "/editor", priority: 0.9, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.6, changeFrequency: "yearly" },
  { path: "/about", priority: 0.5, changeFrequency: "yearly" },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
  { path: "/imprint", priority: 0.3, changeFrequency: "yearly" },
];

const HREFLANG: Record<(typeof LOCALES)[number], string> = {
  DE: "de-CH",
  FR: "fr-CH",
  IT: "it-CH",
  EN: "en",
};

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return ROUTES.flatMap(({ path, priority, changeFrequency }) => {
    const languages: Record<string, string> = { "x-default": `${SITE_URL}/de${path}` };
    for (const loc of LOCALES) {
      languages[HREFLANG[loc]] = `${SITE_URL}/${localeToSlug(loc)}${path}`;
    }

    return LOCALES.map((loc) => ({
      url: `${SITE_URL}/${localeToSlug(loc)}${path}`,
      lastModified,
      changeFrequency,
      priority,
      alternates: { languages },
    }));
  });
}
