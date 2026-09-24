import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { images } from "@/content/photos";
import { site } from "@/content/site";

const featureImages = [images.atmosphere, images.pasta, images.secondi];

export function ExperienceSection() {
  return (
    <section className="bg-paper-soft">
      <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-10 md:py-28">
        <Reveal>
          <SectionLabel light>The evening</SectionLabel>
          <h2 className="mt-4 max-w-2xl font-display text-5xl text-ink md:text-6xl">
            What waits at the table
          </h2>
        </Reveal>
      </div>

      <div className="divide-y divide-ink/10 border-y border-ink/10">
        {site.features.map((feature, index) => {
          const imageLeft = index % 2 === 0;
          return (
            <div
              key={feature.number}
              className="mx-auto grid max-w-[1440px] lg:grid-cols-2"
            >
              <Reveal
                className={`relative min-h-[320px] md:min-h-[420px] ${
                  imageLeft ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <Image
                  src={featureImages[index]}
                  alt={feature.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </Reveal>
              <Reveal
                className={`flex flex-col justify-center px-5 py-16 md:px-16 md:py-24 ${
                  imageLeft ? "lg:order-2" : "lg:order-1"
                }`}
                delay={0.08}
              >
                <p className="font-display text-5xl text-accent/80 md:text-6xl">
                  {feature.number}
                </p>
                <h3 className="mt-6 font-display text-4xl text-ink md:text-5xl">
                  {feature.title}
                </h3>
                <div className="mt-6 space-y-1">
                  {feature.lines.map((line) => (
                    <p
                      key={line}
                      className="max-w-sm text-lg leading-relaxed text-ink/65"
                    >
                      {line}
                    </p>
                  ))}
                </div>
                {feature.title === "The Table" ? (
                  <Link
                    href="/menu"
                    className="mt-8 inline-flex min-h-11 items-center py-3 text-[11px] tracking-[0.22em] uppercase text-accent"
                  >
                    See the Menu
                  </Link>
                ) : null}
                {feature.title === "Take Out" ? (
                  <a
                    href={site.phone.tel}
                    className="mt-8 inline-flex min-h-11 items-center py-3 text-[11px] tracking-[0.22em] uppercase text-accent"
                  >
                    Call {site.phone.display}
                  </a>
                ) : null}
              </Reveal>
            </div>
          );
        })}
      </div>
    </section>
  );
}
