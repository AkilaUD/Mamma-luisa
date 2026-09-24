import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { galleryPhotos } from "@/content/photos";

export function PhotoExperience() {
  const featured = galleryPhotos.slice(0, 5);

  return (
    <section className="bg-paper px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1440px]">
        <Reveal className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel light>Inside the room</SectionLabel>
            <h2 className="mt-4 font-display text-5xl text-ink md:text-6xl">
              Photographs
            </h2>
          </div>
          <Link
            href="/photos"
            className="text-[11px] tracking-[0.22em] uppercase text-accent"
          >
            Open the Gallery
          </Link>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-12 md:gap-5">
          <Reveal className="relative aspect-[4/5] md:col-span-7 md:aspect-[16/11]">
            <Image
              src={featured[0].src}
              alt={featured[0].alt}
              fill
              sizes="(max-width: 768px) 100vw, 58vw"
              className="object-cover"
            />
          </Reveal>
          <div className="grid gap-4 md:col-span-5 md:gap-5">
            <Reveal className="relative aspect-[4/3]" delay={0.08}>
              <Image
                src={featured[1].src}
                alt={featured[1].alt}
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </Reveal>
            <Reveal className="relative aspect-[4/3]" delay={0.12}>
              <Image
                src={featured[2].src}
                alt={featured[2].alt}
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </Reveal>
          </div>
          <Reveal className="relative aspect-[16/10] md:col-span-5" delay={0.05}>
            <Image
              src={featured[3].src}
              alt={featured[3].alt}
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
            />
          </Reveal>
          <Reveal className="relative aspect-[16/10] md:col-span-7" delay={0.1}>
            <Image
              src={featured[4].src}
              alt={featured[4].alt}
              fill
              sizes="(max-width: 768px) 100vw, 58vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
