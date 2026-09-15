import Link from "next/link";
import { nav, site, BRAND } from "@/lib/site";

export function Footer() {
  return (
    <footer className="section-pad border-t border-line bg-paper-2/50 py-16">
      <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2">
            <span className="relative grid h-8 w-8 place-items-center rounded-lg bg-ink text-paper">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M9 8a5 5 0 0 1 0 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M12.5 5a9 9 0 0 1 0 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <circle cx="6" cy="12" r="1.6" fill="currentColor" />
              </svg>
              <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="display text-xl">{BRAND}</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
            {site.tagline} Swiss-made NFC cards, plates and stands for restaurants
            and shops.
          </p>
          <p className="mt-4 text-sm text-muted">{site.city}</p>
        </div>

        <div>
          <p className="text-sm font-semibold text-ink">Product</p>
          <ul className="mt-4 space-y-2.5">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="link-underline text-sm text-muted hover:text-ink">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-ink">Company</p>
          <ul className="mt-4 space-y-2.5">
            {["About", "Sustainability", "Careers", "Blog"].map((l) => (
              <li key={l}>
                <a href="#" className="link-underline text-sm text-muted hover:text-ink">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-ink">Contact</p>
          <ul className="mt-4 space-y-2.5 text-sm text-muted">
            <li>
              <a href={`mailto:${site.email}`} className="link-underline hover:text-ink">
                {site.email}
              </a>
            </li>
            <li>
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="link-underline hover:text-ink">
                {site.phone}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-line pt-8 text-sm text-muted sm:flex-row">
        <p>
          © {BRAND} · Made in Switzerland 🇨🇭
        </p>
        <div className="flex gap-6">
          <a href="#" className="link-underline hover:text-ink">Privacy</a>
          <a href="#" className="link-underline hover:text-ink">Terms</a>
          <a href="#" className="link-underline hover:text-ink">Imprint</a>
        </div>
      </div>
    </footer>
  );
}
