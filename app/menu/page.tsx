import type { Metadata } from "next";
import { MenuList } from "@/components/MenuList";
import { PageHero } from "@/components/PageHero";
import { images } from "@/content/photos";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Antipasti, pasta, secondi, verdure, vegetarian menu, beverages, and desserts at Mamma Luisa in Newport.",
  alternates: { canonical: "/menu" },
};

export default function MenuPage() {
  return (
    <>
      <PageHero
        label="Food"
        title="The Menu"
        image={images.menuBanner}
        alt="Food at Mamma Luisa"
      >
        <p className="mt-5 max-w-lg text-sm text-cream-soft">
          Gluten-free pasta available. Many dishes besides pasta can be made
          gluten free.
        </p>
      </PageHero>
      <section className="bg-ink px-5 py-16 md:px-10 md:py-24">
        <MenuList />
      </section>
    </>
  );
}
