import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";

export function Introduction() {
  return (
    <section className="bg-paper px-5 py-24 text-ink md:px-10 md:py-36">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <SectionLabel light>An evening</SectionLabel>
          <p className="mt-10 font-display text-[clamp(2.4rem,6vw,4.75rem)] font-medium leading-[1.05] tracking-[-0.02em] text-ink">
            A table.
            <br />
            A bottle of wine.
            <br />
            An evening in Newport.
          </p>
          <p className="mx-auto mt-10 max-w-lg text-sm leading-relaxed text-ink/60 md:text-base">
            Northern Italian cooking since 1992, on Thames Street — warm, welcoming,
            and set for dinner.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
