"use client";

import { useState } from "react";
import { WineItem } from "@/components/WineItem";
import { wineGroups, winePageTitle } from "@/content/wine";

export function WineList() {
  const [active, setActive] = useState(wineGroups[0].id);

  return (
    <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-12 lg:gap-16">
      <aside className="lg:col-span-3">
        <div className="sticky top-28 hidden lg:block">
          <p className="text-[11px] tracking-[0.28em] uppercase text-metal">
            Regions
          </p>
          <nav className="mt-6 flex flex-col gap-3" aria-label="Wine regions">
            {wineGroups.map((group) => (
              <a
                key={group.id}
                href={`#${group.id}`}
                onClick={() => setActive(group.id)}
                className={`text-left text-sm leading-snug transition-colors ${
                  active === group.id
                    ? "text-cream"
                    : "text-cream-muted hover:text-cream-soft"
                }`}
              >
                {group.title}
              </a>
            ))}
          </nav>
        </div>

        <div className="sticky top-16 z-20 -mx-5 flex gap-2 overflow-x-auto border-b border-cream/10 bg-ink/95 px-5 py-3 backdrop-blur-md md:top-20 lg:hidden">
          {wineGroups.map((group) => (
            <a
              key={group.id}
              href={`#${group.id}`}
              onClick={() => setActive(group.id)}
              className={`shrink-0 border px-4 py-2 text-[11px] tracking-[0.12em] uppercase transition-colors ${
                active === group.id
                  ? "border-metal text-cream"
                  : "border-cream/15 text-cream-muted"
              }`}
            >
              {group.title}
            </a>
          ))}
        </div>
      </aside>

      <div className="lg:col-span-9">
        <h2 className="font-display text-3xl text-cream md:text-4xl">
          {winePageTitle}
        </h2>
        <p className="mt-4 max-w-xl text-sm text-cream-muted">
          Bottle prices as listed. Red wines from the Northern, Central, and
          Southern regions of Italy, and beyond.
        </p>

        <div className="mt-16 space-y-16">
          {wineGroups.map((group) => (
            <section
              key={group.id}
              id={group.id}
              className="scroll-mt-28"
              onMouseEnter={() => setActive(group.id)}
            >
              <h3 className="border-b border-metal/40 pb-4 font-display text-3xl text-metal md:text-4xl">
                {group.title}
              </h3>
              <div className="divide-y divide-cream/10">
                {group.wines.map((wine) => (
                  <WineItem key={`${group.id}-${wine.name}`} wine={wine} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
