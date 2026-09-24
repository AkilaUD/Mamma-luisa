import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { WineList } from "@/components/WineList";
import { images } from "@/content/photos";
import { wineCount } from "@/content/wine";

export const metadata: Metadata = {
  title: "Wine",
  description: `The red wine list at Mamma Luisa — ${wineCount} bottles from Italy and beyond.`,
  alternates: { canonical: "/wine" },
};

export default function WinePage() {
  return (
    <>
      <PageHero
        label="Vini Rossi"
        title="The Wine List"
        image={images.wineBanner}
        alt="Wine at Mamma Luisa"
      >
        <p className="mt-5 max-w-lg text-sm text-cream-soft">
          {wineCount} red wines. Bottle prices as listed on our current wine
          list.
        </p>
      </PageHero>
      <section className="bg-ink px-5 py-16 md:px-10 md:py-24">
        <WineList />
      </section>
    </>
  );
}
