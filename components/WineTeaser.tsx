import Image from "next/image";
import { Button } from "@/components/Button";
import { EditorialHeading } from "@/components/EditorialHeading";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { images } from "@/content/photos";
import { featuredWineRegions, wineCount } from "@/content/wine";

export function WineTeaser() {
  return (
    <section className="relative overflow-hidden bg-ink-soft">
      <div className="relative h-56 w-full sm:h-72 lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-1/2">
        <Image
          src={images.wine}
          alt="Wine and candlelight on the table"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover opacity-60 lg:opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-soft via-ink-soft/40 to-transparent lg:bg-gradient-to-r lg:from-ink-soft lg:via-ink-soft/80 lg:to-transparent" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-5 py-16 md:px-10 md:py-32 lg:py-32">
        <Reveal className="max-w-2xl">
          <SectionLabel>The cellar</SectionLabel>
          <EditorialHeading className="mt-5 text-5xl md:text-7xl">
            Vini Rossi
          </EditorialHeading>
          <p className="mt-6 max-w-md text-base leading-relaxed text-cream-soft">
            {wineCount} bottles from Italy and beyond — Piedmont, Tuscany,
            Brunello, Supertuscan, and more.
          </p>

          <ul className="mt-12 space-y-4 border-t border-cream/10 pt-10">
            {featuredWineRegions.map((group) => (
              <li
                key={group.id}
                className="flex items-baseline justify-between gap-4 border-b border-cream/10 pb-4"
              >
                <span className="font-display text-2xl text-cream">
                  {group.title}
                </span>
                <span className="text-xs tracking-[0.18em] uppercase text-cream-muted">
                  {group.wines.length} wines
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <Button href="/wine" variant="secondary">
              Open the Wine List
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
