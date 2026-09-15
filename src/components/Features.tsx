import { features } from "@/lib/site";
import { SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/Reveal";

const icons: Record<string, React.ReactNode> = {
  "No app required": (
    <path d="M4 7h16M4 12h16M4 17h10" strokeWidth="1.6" strokeLinecap="round" />
  ),
  "iPhone & Android": (
    <>
      <rect x="6" y="3" width="12" height="18" rx="2" strokeWidth="1.6" />
      <path d="M11 18h2" strokeWidth="1.6" strokeLinecap="round" />
    </>
  ),
  "Waterproof & durable": (
    <path d="M12 3s6 6.5 6 11a6 6 0 1 1-12 0c0-4.5 6-11 6-11z" strokeWidth="1.6" strokeLinejoin="round" />
  ),
  "Live dashboard": (
    <>
      <path d="M4 19V5M4 19h16" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M8 15l3-4 3 2 4-6" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  "Swiss made": (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3" strokeWidth="1.6" />
      <path d="M12 8v8M8 12h8" strokeWidth="2" strokeLinecap="round" />
    </>
  ),
  "Privacy first": (
    <>
      <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M9 12l2 2 4-4" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
};

export function Features() {
  return (
    <section className="section-pad relative overflow-hidden bg-ink py-24 text-paper sm:py-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div
        className="pointer-events-none absolute -left-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full blur-3xl"
        style={{ background: "rgba(240,67,31,0.18)" }}
      />

      <div className="relative">
        <Reveal>
          <SectionHeading
            dark
            eyebrow="Built for real venues"
            title="Premium hardware, effortless software"
            intro="Everything is engineered to just work — for you and for every guest who taps."
          />
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-card border border-line-dark bg-line-dark sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 0.08}>
              <div className="group h-full bg-ink p-8 transition-colors hover:bg-ink-2">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-line-dark text-accent transition-colors group-hover:border-accent/40">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    {icons[f.title]}
                  </svg>
                </span>
                <h3 className="display mt-6 text-xl text-paper">{f.title}</h3>
                <p className="mt-2 leading-relaxed text-paper/55">{f.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
