import { Button } from "@/components/Button";
import { EditorialHeading } from "@/components/EditorialHeading";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { menuCategories } from "@/content/menu";
import { images } from "@/content/photos";

export function DessertSection() {
  const dolci = menuCategories.find((c) => c.id === "dolci");

  return (
    <section className="relative overflow-hidden bg-ink-mid px-5 py-28 md:px-10 md:py-36">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `url(${images.dessert})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-3xl text-center">
        <Reveal>
          <SectionLabel>After dinner</SectionLabel>
          <EditorialHeading className="mt-5 text-6xl md:text-8xl">
            Dolci
          </EditorialHeading>
          <ul className="mx-auto mt-14 max-w-md space-y-6">
            {dolci?.items.map((item) => (
              <li key={item.name} className="border-b border-cream/10 pb-6">
                <p className="font-display text-3xl text-cream md:text-4xl">
                  {item.name}
                </p>
                {item.description ? (
                  <p className="mt-2 text-sm text-cream-muted">
                    {item.description}
                  </p>
                ) : null}
                {item.price ? (
                  <p className="mt-2 text-sm tabular-nums text-metal">
                    {item.price}
                  </p>
                ) : null}
              </li>
            ))}
          </ul>
          <div className="mt-12">
            <Button href="/menu#dolci" variant="secondary">
              See the Menu
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
