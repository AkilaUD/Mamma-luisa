"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/content/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled || open
            ? "bg-ink/95 backdrop-blur-md border-b border-cream/10"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 md:h-20 md:px-10">
          <Link
            href="/"
            className="font-display text-2xl tracking-wide text-cream md:text-[1.65rem]"
            onClick={() => setOpen(false)}
          >
            Mamma Luisa
          </Link>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[11px] tracking-[0.22em] uppercase text-cream-soft/80 transition-colors hover:text-cream"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={site.phone.tel}
              className="text-[11px] tracking-[0.22em] uppercase text-cream-soft/80 transition-colors hover:text-cream"
            >
              Take Out
            </a>
            <a
              href={site.links.resy}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-metal/70 px-4 py-2 text-[11px] tracking-[0.22em] uppercase text-cream transition-colors hover:border-metal hover:bg-metal/10"
            >
              Reserve
            </a>
          </div>

          <div className="flex items-center gap-3 lg:hidden">
            <a
              href={site.links.resy}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-metal/70 px-3 py-2 text-[10px] tracking-[0.2em] uppercase text-cream"
            >
              Reserve
            </a>
            <button
              type="button"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              className="flex h-10 w-10 items-center justify-center border border-cream/20 text-cream"
              onClick={() => setOpen((v) => !v)}
            >
              <span className="sr-only">Menu</span>
              <span className="relative block h-3 w-5">
                <span
                  className={`absolute left-0 block h-px w-full bg-cream transition-all ${
                    open ? "top-1.5 rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 top-1.5 block h-px w-full bg-cream transition-opacity ${
                    open ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 block h-px w-full bg-cream transition-all ${
                    open ? "top-1.5 -rotate-45" : "top-3"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-nav"
        className={`fixed inset-0 z-40 bg-ink transition-transform duration-500 lg:hidden ${
          open
            ? "translate-y-0"
            : "pointer-events-none -translate-y-[calc(100%+5rem)]"
        }`}
        aria-hidden={!open}
      >
        <div className="flex h-full flex-col px-6 pb-10 pt-24">
          <nav className="flex flex-col gap-6" aria-label="Mobile">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-display text-4xl text-cream"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/reservations"
              onClick={() => setOpen(false)}
              className="font-display text-4xl text-cream"
            >
              Reservations
            </Link>
            <Link
              href="/gift-certificates"
              onClick={() => setOpen(false)}
              className="font-display text-4xl text-cream"
            >
              Gift Certificates
            </Link>
          </nav>
          <div className="mt-auto flex flex-col gap-4 border-t border-cream/10 pt-8">
            <a
              href={site.phone.tel}
              className="text-sm tracking-[0.2em] uppercase text-metal"
            >
              Take Out · {site.phone.display}
            </a>
            <a
              href={site.links.resy}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit border border-metal px-5 py-3 text-[11px] tracking-[0.22em] uppercase text-cream"
            >
              Reserve a Table
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
