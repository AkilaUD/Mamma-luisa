"use client";

import { useEffect, useState } from "react";
import { MenuItem } from "@/components/MenuItem";
import { menuCategories, menuIntro } from "@/content/menu";

export function MenuList() {
  const [active, setActive] = useState(menuCategories[0].id);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash && menuCategories.some((c) => c.id === hash)) {
      setActive(hash);
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div className="mx-auto max-w-[1440px]">
      <div className="scrollbar-none sticky top-16 z-20 -mx-5 mb-8 flex gap-2 overflow-x-auto border-b border-cream/10 bg-ink/90 px-5 py-3 backdrop-blur-md md:top-20 md:-mx-10 md:px-10 lg:hidden">
        {menuCategories.map((cat) => (
          <a
            key={cat.id}
            href={`#${cat.id}`}
            onClick={() => setActive(cat.id)}
            className={`shrink-0 border px-4 py-2 text-[11px] tracking-[0.16em] uppercase transition-colors ${
              active === cat.id
                ? "border-metal text-cream"
                : "border-cream/15 text-cream-muted"
            }`}
          >
            {cat.title}
          </a>
        ))}
      </div>

      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <aside className="hidden lg:col-span-3 lg:block">
          <div className="sticky top-28">
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
                      : "text-cream-muted hover:text-cream-soft"
                  }`}
                >
                  {cat.title}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        <div className="min-w-0 lg:col-span-9">
          <aside className="mb-10 border border-metal/40 bg-ink-mid/50 px-4 py-4 backdrop-blur-sm md:px-6 md:py-5">
            <p className="text-[11px] tracking-[0.24em] uppercase text-metal">
              Dietary notes
            </p>
            <p className="mt-3 text-sm leading-relaxed text-cream-soft">
              {menuIntro}. Please advise your server of any food allergy in your
              party.
            </p>
          </aside>

          <div className="space-y-16 md:space-y-20">
            {menuCategories.map((category) => (
              <section
                key={category.id}
                id={category.id}
                className="scroll-mt-36 md:scroll-mt-40"
                onMouseEnter={() => setActive(category.id)}
              >
                <div className="flex flex-col gap-2 border-b border-cream/15 pb-4 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
                  <h2 className="font-display text-3xl text-cream sm:text-4xl md:text-5xl">
                    {category.title}
                  </h2>
                  {category.intro ? (
                    <p className="text-xs tracking-[0.16em] uppercase text-cream-muted sm:pb-1">
                      {category.intro}
                    </p>
                  ) : null}
                </div>

                <div className="divide-y divide-cream/10">
                  {category.items.map((item) => (
                    <MenuItem
                      key={`${category.id}-${item.name}`}
                      item={item}
                    />
                  ))}
                </div>

                {category.footnotes?.length ? (
                  <ul className="mt-8 space-y-2 text-xs leading-relaxed text-cream-muted">
                    {category.footnotes.map((note) => (
                      <li key={note}>*{note}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
