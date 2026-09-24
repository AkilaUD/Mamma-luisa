import Image from "next/image";
import { Button } from "@/components/Button";
import { EditorialHeading } from "@/components/EditorialHeading";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { featuredPasta, featuredSecondi } from "@/content/menu";
import { images } from "@/content/photos";

function DishRow({
  name,
  description,
  price,
  light = false,
}: {
  name: string;
  description?: string;
  price: string;
  light?: boolean;
}) {
  return (
    <div className="min-w-0 border-b border-current/10 py-5 last:border-0">
      <div className="flex min-w-0 items-baseline gap-2 sm:gap-3">
        <h3
          className={`min-w-0 font-display text-xl leading-snug break-words sm:text-2xl ${light ? "text-ink" : "text-cream"}`}
        >
          {name}
        </h3>
        <span className="price-leader max-sm:hidden" aria-hidden />
        <span
          className={`shrink-0 text-sm tabular-nums ${
            light ? "text-ink/70" : "text-cream-soft"
          }`}
        >
          {price}
        </span>
      </div>
      {description ? (
        <p
          className={`mt-2 max-w-xl text-sm leading-relaxed ${
            light ? "text-ink/55" : "text-cream-muted"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function FoodShowcase() {
  return (
    <section className="bg-ink">
      <div className="relative h-[55vh] min-h-[360px] md:h-[70vh]">
        <Image
          src={images.pasta}
          alt="Seafood pasta with shrimp and scallops"
          fill
          sizes="100vw"
          quality={95}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
        <div className="absolute bottom-10 left-5 md:bottom-16 md:left-10">
          <SectionLabel>The kitchen</SectionLabel>
          <EditorialHeading className="mt-3 text-6xl md:text-8xl">
            Pasta
          </EditorialHeading>
        </div>
      </div>

      <div className="mx-auto max-w-[1440px] px-5 py-16 md:px-10 md:py-24">
        <Reveal>
          <div className="grid gap-4 md:grid-cols-2 md:gap-x-16">
            {featuredPasta.map((item) => (
              <DishRow
                key={item.name}
                name={item.name}
                description={item.description}
                price={item.price}
              />
            ))}
          </div>
        </Reveal>
      </div>

      <div className="relative h-[50vh] min-h-[320px] md:h-[65vh]">
        <Image
          src={images.secondi}
          alt="A plated stew with rosemary potatoes"
          fill
          sizes="100vw"
          quality={95}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
        <div className="absolute bottom-10 left-5 md:bottom-16 md:left-10">
          <SectionLabel>From the grill</SectionLabel>
          <EditorialHeading className="mt-3 text-6xl md:text-8xl">
            Secondi
          </EditorialHeading>
        </div>
      </div>

      <div className="mx-auto max-w-[1440px] px-5 py-16 md:px-10 md:py-24">
        <Reveal>
          <div className="grid gap-4 md:grid-cols-2 md:gap-x-16">
            {featuredSecondi.map((item) => (
              <DishRow
                key={item.name}
                name={item.asterisk ? `*${item.name}` : item.name}
                description={item.description}
                price={item.price}
              />
            ))}
          </div>
          <div className="mt-12">
            <Button href="/menu" variant="secondary">
              The Full Menu
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
