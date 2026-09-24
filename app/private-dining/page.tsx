import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
import { images } from "@/content/photos";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Private Dining",
  description:
    "Exclusive space for small parties at Mamma Luisa. Call or email to inquire.",
  alternates: { canonical: "/private-dining" },
};

export default function PrivateDiningPage() {
  return (
    <>
      <PageHero
        label="Gather"
        title="The Private Table"
        image={images.privateDining}
        alt="The dining room at Mamma Luisa"
      />
      <section className="bg-paper px-5 py-20 text-ink md:px-10 md:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl md:text-5xl">
              Private Dining
            </h2>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-ink/70">
              {site.privateDining}
            </p>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ink/65">
              {site.privateDiningDetail}
            </p>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-ink/55">
              To inquire about a private evening, call the restaurant or send
              us a note. We will arrange the details with you directly.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button href={site.phone.tel} variant="light">
                Call {site.phone.display}
              </Button>
              <Button
                href={`mailto:${site.email}`}
                variant="ghost"
                className="!text-ink !border-ink/25 hover:!border-ink/50 hover:!text-ink"
              >
                Email {site.email}
              </Button>
            </div>
          </div>
          <div className="relative min-h-[360px] overflow-hidden">
            <Image
              src={images.atmosphere}
              alt="Candlelight and wine at the table"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
