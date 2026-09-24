import type { Metadata } from "next";
import Image from "next/image";
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
      <section className="relative overflow-hidden px-5 py-16 md:px-10 md:py-24">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <Image
            src={images.menuBanner}
            alt=""
            fill
            sizes="100vw"
            quality={75}
            className="scale-110 object-cover opacity-55 blur-xl"
          />
          <div className="absolute inset-0 bg-ink/50" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/55 to-ink/70" />
        </div>
        <div className="relative z-10">
          <MenuList />
        </div>
      </section>
    </>
  );
}
