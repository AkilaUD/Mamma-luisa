import Image from "next/image";
import { Button } from "@/components/Button";
import { EditorialHeading } from "@/components/EditorialHeading";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { images } from "@/content/photos";
import { site } from "@/content/site";

export function PrivateDining() {
  return (
    <section className="bg-paper">
      <div className="mx-auto grid max-w-[1440px] lg:grid-cols-2">
        <Reveal className="relative min-h-[420px] lg:min-h-[640px]">
          <Image
            src={images.privateDining}
            alt="The dining room prepared for guests"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </Reveal>
        <Reveal
          className="flex flex-col justify-center px-5 py-20 md:px-16 md:py-28"
          delay={0.1}
        >
          <SectionLabel light>For a small party</SectionLabel>
          <EditorialHeading light className="mt-5 text-5xl md:text-6xl">
            The Private Table
          </EditorialHeading>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-ink/65">
            {site.privateDining}
          </p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-ink/50">
            {site.privateDiningDetail}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button href="/private-dining" variant="light">
              Learn More
            </Button>
            <Button href={site.phone.tel} variant="ghost" className="!text-ink !border-ink/25 hover:!border-ink/50 hover:!text-ink">
              Call to Inquire
            </Button>
            <Button href={`mailto:${site.email}`} variant="ghost" className="!text-ink !border-ink/25 hover:!border-ink/50 hover:!text-ink">
              Email Us
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
