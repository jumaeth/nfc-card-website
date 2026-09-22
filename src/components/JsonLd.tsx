// Structured data (JSON-LD) — the primary machine-readable signal for Google
// rich results and AI answer engines (ChatGPT, Perplexity, Google AI). Server
// component: no hooks, localized via the `locale` prop passed from the layout.
import type { Locale } from "@/lib/locale";
import { LOCALES, localeToSlug } from "@/lib/locale";
import { ORG, SITE_NAME, SITE_URL, localeUrl } from "@/lib/seo";
import { products, menuCard, reviewCards, faqs } from "@/lib/site";

function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      // Data is built from our own constants, not user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

const ORG_ID = `${SITE_URL}/#organization`;
const availableLanguage = LOCALES.map((l) => localeToSlug(l));

// Organization + WebSite — rendered on every page (in the root layout).
export function SiteJsonLd({ locale }: { locale: Locale }) {
  const organization = {
    "@type": "Organization",
    "@id": ORG_ID,
    name: ORG.name,
    legalName: ORG.legalName,
    url: ORG.url,
    logo: ORG.logo,
    email: ORG.email,
    address: {
      "@type": "PostalAddress",
      addressCountry: ORG.country,
    },
    areaServed: { "@type": "Country", name: "Switzerland" },
    contactPoint: {
      "@type": "ContactPoint",
      email: ORG.email,
      contactType: "customer support",
      availableLanguage,
    },
    ...(ORG.sameAs.length ? { sameAs: ORG.sameAs } : {}),
  };

  const website = {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: localeUrl(locale),
    inLanguage: localeToSlug(locale),
    publisher: { "@id": ORG_ID },
  };

  return (
    <JsonLd
      data={{ "@context": "https://schema.org", "@graph": [organization, website] }}
    />
  );
}

// Product list + FAQPage + BreadcrumbList — rendered on the home page.
export function HomeJsonLd({ locale }: { locale: Locale }) {
  const home = localeUrl(locale);

  const productList = [...products, menuCard, ...reviewCards].map((p) => ({
    "@type": "Product",
    name: p.name,
    description: p.blurb[locale],
    material: p.material[locale],
    brand: { "@type": "Brand", name: SITE_NAME },
    offers: {
      "@type": "Offer",
      price: p.price,
      priceCurrency: "CHF",
      availability: "https://schema.org/InStock",
      url: `${home}#products`,
      seller: { "@id": ORG_ID },
    },
  }));

  const faqPage = {
    "@type": "FAQPage",
    "@id": `${home}#faq`,
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q[locale],
      acceptedAnswer: { "@type": "Answer", text: f.a[locale] },
    })),
  };

  const breadcrumb = {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: SITE_NAME, item: home },
    ],
  };

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@graph": [...productList, faqPage, breadcrumb],
      }}
    />
  );
}
