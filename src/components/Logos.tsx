const logos = [
  "Café Bellevue",
  "Da Marco",
  "Boutique Nord",
  "La Santeria",
  "Kaffi Züri",
  "Le Gruyérien",
  "Osteria Sole",
];

export function Logos() {
  return (
    <section className="border-y border-line bg-paper-2/60 py-8">
      <p className="section-pad text-center text-xs font-medium uppercase tracking-[0.2em] text-muted">
        Trusted by venues across Switzerland
      </p>
      <div className="relative mt-6 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
        <div className="marquee-track flex w-max gap-16 pr-16">
          {[...logos, ...logos].map((name, i) => (
            <span
              key={i}
              className="display shrink-0 text-2xl text-ink/35 transition-colors hover:text-ink/70"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
