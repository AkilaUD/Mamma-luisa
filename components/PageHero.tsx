import Image from "next/image";
import { SectionLabel } from "@/components/SectionLabel";
import { EditorialHeading } from "@/components/EditorialHeading";

type Props = {
  label: string;
  title: string;
  image: string;
  alt: string;
  children?: React.ReactNode;
};

export function PageHero({ label, title, image, alt, children }: Props) {
  return (
    <section className="relative min-h-[48vh] overflow-hidden md:min-h-[56vh]">
      <Image
        src={image}
        alt={alt}
        fill
        priority
        quality={95}
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/40" />
      <div className="relative z-10 flex min-h-[48vh] items-end px-5 pb-14 pt-28 md:min-h-[56vh] md:px-10 md:pb-20">
        <div className="mx-auto w-full max-w-[1440px]">
          <SectionLabel>{label}</SectionLabel>
          <EditorialHeading className="mt-4 text-5xl md:text-7xl">
            {title}
          </EditorialHeading>
          {children}
        </div>
      </div>
    </section>
  );
}
