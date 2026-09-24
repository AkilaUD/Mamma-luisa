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
    <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-12 lg:gap-16">
      <aside className="lg:col-span-3">
        <div className="sticky top-28 hidden lg:block">
          <p className="text-[11px] tracking-[0.28em] uppercase text-metal">
            Categories
          </p>
          <nav className="mt-6 flex flex-col gap-3" aria-label="Menu categories">
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

        <div className="scrollbar-none sticky top-16 z-20 -mx-5 flex gap-2 overflow-x-auto border-b border-cream/10 bg-ink/95 px-5 py-3 backdrop-blur-md md:top-20 lg:hidden">
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
      </aside>

      <div className="lg:col-span-9">
        <aside className="mb-10 border border-metal/40 bg-ink-mid/60 px-5 py-5 md:px-6">
          <p className="text-[11px] tracking-[0.24em] uppercase text-metal">
            Dietary notes
          </p>
          <p className="mt-3 text-sm leading-relaxed text-cream-soft">
            {menuIntro}. Please advise your server of any food allergy in your
            party.
          </p>
        </aside>

        <div className="space-y-20">
          {menuCategories.map((category) => (
            <section
              key={category.id}
              id={category.id}
              className="scroll-mt-28"
              onMouseEnter={() => setActive(category.id)}
            >
              <div className="flex items-end justify-between gap-4 border-b border-cream/15 pb-4">
                <h2 className="font-display text-4xl text-cream md:text-5xl">
                  {category.title}
                </h2>
                {category.intro ? (
                  <p className="pb-1 text-xs tracking-[0.16em] uppercase text-cream-muted">
                    {category.intro}
                  </p>
                ) : null}
              </div>

              <div className="divide-y divide-cream/10">
                {category.items.map((item) => (
                  <MenuItem key={`${category.id}-${item.name}`} item={item} />
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
  );
}
