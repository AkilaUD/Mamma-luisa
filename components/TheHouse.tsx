import Image from "next/image";
import { Button } from "@/components/Button";
import { EditorialHeading } from "@/components/EditorialHeading";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { images } from "@/content/photos";
import { site } from "@/content/site";

export function TheHouse() {
  return (
    <section className="bg-ink px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto grid max-w-[1440px] items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="relative lg:col-span-5">
          <div className="relative aspect-[3/4] overflow-hidden bg-ink-mid">
            <Image
              src={images.house}
              alt="Watercolor of Mamma Luisa on Thames Street"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
          <p className="mt-3 text-[10px] tracking-[0.2em] uppercase text-cream-muted">
            Illustration of the house on Thames Street
          </p>
        </Reveal>

        <Reveal className="lg:col-span-6 lg:col-start-7" delay={0.1}>
          <SectionLabel>The House</SectionLabel>
          <EditorialHeading className="mt-5 text-5xl md:text-6xl">
            {site.about.heading}
          </EditorialHeading>
          <div className="mt-8 h-px w-16 bg-metal/60" />
          <p className="mt-8 max-w-xl text-base leading-[1.85] text-cream-soft md:text-lg">
            {site.about.body}
          </p>
          <p
            className="mt-10 font-display text-4xl text-metal"
            aria-label="Mark"
          >
            {site.about.mark}
          </p>
          <div className="mt-10">
            <Button href="/about" variant="secondary">
              Read Our Story
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
