"use client";

import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { useT } from "@/lib/i18n";
import type { ContentPageData } from "@/lib/site";

// Shared shell for the static footer pages (About, Privacy, Terms, Imprint).
// Copy lives in `pages` in src/lib/site.ts; a section body may use blank lines
// to separate paragraphs, with single line breaks preserved.
export function ContentPage({ data }: { data: ContentPageData }) {
  const t = useT();

  return (
    <>
      <Nav />
      <main className="flex-1 pt-28 sm:pt-32">
        <article className="section-pad py-16 sm:py-24">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <span className="eyebrow text-accent">{t(data.eyebrow)}</span>
              <h1 className="display mt-4 text-4xl text-ink sm:text-5xl">{t(data.title)}</h1>
              <p className="mt-5 text-lg leading-relaxed text-muted">{t(data.intro)}</p>
              {data.updated && (
                <p className="mt-4 text-sm text-muted/80">{t(data.updated)}</p>
              )}
            </Reveal>

            <div className="mt-12 space-y-10">
              {data.sections.map((s, i) => (
                <Reveal key={i} delay={i * 0.04}>
                  <section>
                    <h2 className="text-xl font-semibold text-ink">{t(s.heading)}</h2>
                    {t(s.body)
                      .split("\n\n")
                      .map((para, j) => (
                        <p
                          key={j}
                          className="mt-3 whitespace-pre-line leading-relaxed text-muted"
                        >
                          {para}
                        </p>
                      ))}
                  </section>
                </Reveal>
              ))}
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
