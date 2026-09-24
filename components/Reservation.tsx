import { Button } from "@/components/Button";
import { EditorialHeading } from "@/components/EditorialHeading";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { site } from "@/content/site";

export function Reservation() {
  return (
    <section className="bg-ink px-5 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <SectionLabel>Reservations</SectionLabel>
          <EditorialHeading className="mt-6 text-5xl md:text-7xl">
            The table is waiting.
          </EditorialHeading>
          <p className="mx-auto mt-8 max-w-md text-cream-soft">
            {site.address.full}
          </p>
          <p className="mt-3">
            <a
              href={site.phone.tel}
              className="font-display text-3xl text-cream transition-colors hover:text-metal md:text-4xl"
            >
              {site.phone.display}
            </a>
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href={site.links.resy} external>
              Reserve on Resy
            </Button>
            <Button href={site.phone.tel} variant="secondary">
              Call to Reserve
            </Button>
          </div>

          <div className="mx-auto mt-16 max-w-xl border-t border-cream/10 pt-10 text-left">
            <p className="text-[11px] tracking-[0.28em] uppercase text-metal">
              Reservation policy
            </p>
            <p className="mt-4 text-sm leading-relaxed text-cream-muted">
              {site.reservationPolicy}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
