"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { MenuItem } from "@/components/MenuItem";
import { menuCategories, menuIntro } from "@/content/menu";
import { images, menuSectionImages } from "@/content/photos";

export function MenuList() {
  const [active, setActive] = useState(menuCategories[0].id);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash && menuCategories.some((c) => c.id === hash)) {
      setActive(hash);
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    const sections = menuCategories
      .map((c) => document.getElementById(c.id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) =>
              (a.boundingClientRect.top ?? 0) - (b.boundingClientRect.top ?? 0),
          );
        const top = visible[0];
        if (top?.target?.id) {
          setActive(top.target.id);
        }
      },
      {
        rootMargin: "-40% 0px -45% 0px",
        threshold: [0, 0.25, 0.5],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const chipClass = (id: string) =>
    `inline-flex min-h-11 shrink-0 items-center border px-4 text-[11px] tracking-[0.16em] uppercase transition-colors ${
      active === id
        ? "border-metal bg-ink/50 text-cream"
        : "border-cream/25 text-cream-soft"
    }`;

  return (
    <div className="mx-auto max-w-[1440px]">
      <nav
        aria-label="Menu categories"
        className="scrollbar-none fixed inset-x-0 top-16 z-30 flex gap-2 overflow-x-auto border-b border-cream/15 bg-ink px-5 py-3 md:top-20 md:px-10 lg:hidden"
      >
        {menuCategories.map((cat) => (
          <a
            key={cat.id}
            href={`#${cat.id}`}
            onClick={() => setActive(cat.id)}
            className={chipClass(cat.id)}
          >
            {cat.title}
          </a>
        ))}
      </nav>
      {/* Spacer so list content clears the fixed chip bar on mobile */}
      <div className="h-14 lg:hidden" aria-hidden />

      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <aside className="hidden lg:col-span-3 lg:block">
          <div className="sticky top-28 rounded-sm bg-ink/55 px-5 py-6 backdrop-blur-sm">
            <p className="text-[11px] tracking-[0.28em] uppercase text-metal">
              Categories
            </p>
            <nav
              className="mt-6 flex flex-col gap-3"
              aria-label="Menu categories"
            >
              {menuCategories.map((cat) => (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  onClick={() => setActive(cat.id)}
                  className={`text-left text-sm tracking-[0.08em] transition-colors ${
                    active === cat.id
                      ? "text-cream"
                      : "text-cream-soft hover:text-cream"
                  }`}
                >
                  {cat.title}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        <div className="min-w-0 space-y-10 lg:col-span-9 lg:space-y-12">
          <aside className="border border-metal/50 bg-ink/55 px-4 py-4 backdrop-blur-sm md:px-6 md:py-5">
            <p className="text-[11px] tracking-[0.24em] uppercase text-metal">
              Dietary notes
            </p>
            <p className="mt-3 text-sm leading-relaxed text-cream">
              {menuIntro}. Please advise your server of any food allergy in your
              party.
            </p>
          </aside>

          {menuCategories.map((category) => {
            const bg = menuSectionImages[category.id] ?? images.menuBanner;

            return (
              <section
                key={category.id}
                id={category.id}
                className="relative scroll-mt-[9.5rem] overflow-hidden lg:scroll-mt-28"
              >
                <div
                  className="pointer-events-none absolute inset-0"
                  aria-hidden
                >
                  <Image
                    src={bg}
                    alt=""
                    fill
                    sizes="(max-width: 1024px) 100vw, 70vw"
                    quality={85}
                    className="scale-105 object-cover opacity-100"
                  />
                  <div className="absolute inset-0 bg-ink/45" />
                  <div className="absolute inset-0 bg-gradient-to-b from-ink/35 via-ink/50 to-ink/65" />
                </div>

                <div className="relative z-10 bg-ink/70 px-4 py-8 backdrop-blur-md sm:px-6 sm:py-10 md:px-8">
                  <div className="flex flex-col gap-2 border-b border-cream/25 pb-4 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
                    <h2 className="font-display text-3xl text-cream drop-shadow-[0_2px_8px_rgba(0,0,0,0.75)] sm:text-4xl md:text-5xl">
                      {category.title}
                    </h2>
                    {category.intro ? (
                      <p className="text-xs tracking-[0.16em] uppercase text-cream-soft sm:pb-1">
                        {category.intro}
                      </p>
                    ) : null}
                  </div>

                  <div className="divide-y divide-cream/15">
                    {category.items.map((item) => (
                      <MenuItem
                        key={`${category.id}-${item.name}`}
                        item={item}
                      />
                    ))}
                  </div>

                  {category.footnotes?.length ? (
                    <ul className="mt-8 space-y-2 text-sm leading-relaxed text-cream-soft">
                      {category.footnotes.map((note) => (
                        <li key={note}>*{note}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}
