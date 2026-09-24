"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { WineItem } from "@/components/WineItem";
import { images, wineSectionImages } from "@/content/photos";
import { wineCount, wineGroups } from "@/content/wine";

export function WineList() {
  const [active, setActive] = useState(wineGroups[0].id);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash && wineGroups.some((g) => g.id === hash)) {
      setActive(hash);
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    const sections = wineGroups
      .map((g) => document.getElementById(g.id))
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

  const chipLabel = (group: (typeof wineGroups)[number]) =>
    group.shortTitle ?? group.title;

  const chipClass = (id: string) =>
    `inline-flex min-h-11 shrink-0 items-center border px-4 text-[11px] tracking-[0.16em] uppercase transition-colors ${
      active === id
        ? "border-metal bg-ink/50 text-cream"
        : "border-cream/25 text-cream-soft"
    }`;

  return (
    <div className="mx-auto max-w-[1440px]">
      <nav
        aria-label="Wine regions"
        className="scrollbar-none fixed inset-x-0 top-16 z-30 flex gap-2 overflow-x-auto border-b border-cream/15 bg-ink px-5 py-3 md:top-20 md:px-10 lg:hidden"
      >
        {wineGroups.map((group) => (
          <a
            key={group.id}
            href={`#${group.id}`}
            onClick={() => setActive(group.id)}
            className={chipClass(group.id)}
          >
            {chipLabel(group)}
          </a>
        ))}
      </nav>
      <div className="h-14 lg:hidden" aria-hidden />

      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <aside className="hidden lg:col-span-3 lg:block">
          <div className="sticky top-28 rounded-sm bg-ink/55 px-5 py-6 backdrop-blur-sm">
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
                      : "text-cream-soft hover:text-cream"
                  }`}
                >
                  {group.title}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        <div className="min-w-0 space-y-10 lg:col-span-9 lg:space-y-12">
          <aside className="border border-metal/50 bg-ink/55 px-4 py-4 backdrop-blur-sm md:px-6 md:py-5">
            <p className="text-[11px] tracking-[0.24em] uppercase text-metal">
              Bottle list
            </p>
            <p className="mt-3 text-sm leading-relaxed text-cream">
              {wineCount} red wines. Bottle prices as listed on our current wine
              list — from the Northern, Central, and Southern regions of Italy,
              and beyond.
            </p>
          </aside>

          {wineGroups.map((group) => {
            const bg = wineSectionImages[group.id] ?? images.wineBanner;

            return (
              <section
                key={group.id}
                id={group.id}
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
                  <div className="absolute inset-0 bg-ink/20" />
                  <div className="absolute inset-0 bg-gradient-to-b from-ink/10 via-ink/25 to-ink/45" />
                </div>

                <div className="relative z-10 bg-ink/40 px-4 py-8 backdrop-blur-sm sm:px-6 sm:py-10 md:px-8">
                  <div className="border-b border-cream/25 pb-4">
                    <h2 className="font-display text-3xl text-cream drop-shadow-[0_1px_8px_rgba(0,0,0,0.55)] sm:text-4xl md:text-5xl">
                      {group.title}
                    </h2>
                  </div>

                  <div className="divide-y divide-cream/15">
                    {group.wines.map((wine) => (
                      <WineItem
                        key={`${group.id}-${wine.name}`}
                        wine={wine}
                      />
                    ))}
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}
