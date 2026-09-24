import Link from "next/link";
import { site } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-cream/10 bg-ink-soft text-cream">
      <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-10 md:py-28">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-[11px] tracking-[0.32em] uppercase text-metal">
              Est. {site.established}
            </p>
            <h2 className="mt-4 font-display text-5xl text-cream md:text-6xl">
              Mamma Luisa
            </h2>
            <p className="mt-3 text-sm tracking-[0.18em] uppercase text-cream-muted">
              {site.tagline}
            </p>
            <div className="mt-10 space-y-2 text-cream-soft">
              <p>{site.address.street}</p>
              <p>
                {site.address.city}, {site.address.state} {site.address.zip}
              </p>
              <p className="pt-3">
                <a
                  href={site.phone.tel}
                  className="transition-colors hover:text-cream"
                >
                  {site.phone.display}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${site.email}`}
                  className="transition-colors hover:text-cream"
                >
                  {site.email}
                </a>
              </p>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-3">
            <div>
              <p className="text-[11px] tracking-[0.28em] uppercase text-metal">
                Navigate
              </p>
              <ul className="mt-5 space-y-3">
                {site.footerNav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-cream-soft transition-colors hover:text-cream"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-[11px] tracking-[0.28em] uppercase text-metal">
                Visit
              </p>
              <ul className="mt-5 space-y-3 text-sm text-cream-soft">
                <li>
                  <a
                    href={site.links.resy}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-cream"
                  >
                    Reserve a Table
                  </a>
                </li>
                <li>
                  <a
                    href={site.phone.tel}
                    className="transition-colors hover:text-cream"
                  >
                    Take Out
                  </a>
                </li>
                <li>
                  <Link
                    href="/gift-certificates"
                    className="transition-colors hover:text-cream"
                  >
                    Gift Certificates
                  </Link>
                </li>
              </ul>
              <p className="mt-8 max-w-xs text-sm leading-relaxed text-cream-muted">
                {site.hours}
              </p>
            </div>

            <div>
              <p className="text-[11px] tracking-[0.28em] uppercase text-metal">
                Follow
              </p>
              <ul className="mt-5 space-y-3 text-sm text-cream-soft">
                <li>
                  <a
                    href={site.links.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-cream"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href={site.links.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-cream"
                  >
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-3 border-t border-cream/10 pt-8 text-xs tracking-[0.12em] text-cream-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Mamma Luisa</p>
          <p className="uppercase">{site.fineDining}</p>
        </div>
      </div>
    </footer>
  );
}
