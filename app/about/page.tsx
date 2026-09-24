import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { images } from "@/content/photos";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Since 1992, Mamma Luisa has brought northern Italian cuisine from a village near Bologna to Newport, Rhode Island.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="The House"
        title="About Us"
        image={images.aboutBanner}
        alt="About Mamma Luisa"
      />
      <section className="bg-paper px-5 py-20 text-ink md:px-10 md:py-28">
        <div className="mx-auto grid max-w-[1440px] items-start gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="relative aspect-[3/4] overflow-hidden bg-paper-deep">
              <Image
                src={images.house}
                alt="Watercolor of Mamma Luisa on Thames Street"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            <p className="mt-3 text-[10px] tracking-[0.2em] uppercase text-ink/45">
              Illustration of the house on Thames Street
            </p>
            <div className="relative mt-8 mx-auto aspect-[3/4] max-w-[220px]">
              <Image
                src={images.logoArt}
                alt="Mamma Luisa Ristorante Italiano artwork"
                fill
                sizes="220px"
                className="object-contain"
              />
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <p className="text-[11px] tracking-[0.28em] uppercase text-accent">
              Est. {site.established}
            </p>
            <h2 className="mt-4 font-display text-5xl md:text-6xl">
              {site.about.heading}
            </h2>
            <div className="mt-8 h-px w-16 bg-metal" />
            <p className="mt-8 text-lg leading-[1.9] text-ink/75">
              {site.about.body}
            </p>
            <p className="mt-12 font-display text-5xl text-metal">
              {site.about.mark}
            </p>
            <div className="mt-16 space-y-3 text-sm text-ink/60">
              <p>{site.address.full}</p>
              <p>
                <a href={site.phone.tel} className="hover:text-accent">
                  {site.phone.display}
                </a>
              </p>
              <p>{site.hours}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
