import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
import { images } from "@/content/photos";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Reservations",
  description:
    "Reserve a table at Mamma Luisa by phone or on Resy. Credit card required; cancel at least 24 hours in advance.",
  alternates: { canonical: "/reservations" },
};

export default function ReservationsPage() {
  return (
    <>
      <PageHero
        label="Book"
        title="Reservations"
        image={images.reservationsBanner}
        alt="A table ready for dinner"
      />
      <section className="bg-ink px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-2xl">
          <p className="text-sm tracking-[0.2em] uppercase text-metal">
            For reservations, please call us
          </p>
          <a
            href={site.phone.tel}
            className="mt-6 block font-display text-5xl text-cream transition-colors hover:text-metal md:text-6xl"
          >
            {site.phone.display}
          </a>

          <div className="mt-12 flex flex-col gap-3 sm:flex-row">
            <Button href={site.links.resy} external>
              Book on Resy
            </Button>
            <Button href={site.phone.tel} variant="secondary">
              Call {site.phone.display}
            </Button>
          </div>

          <div className="mt-16 border-t border-cream/10 pt-10">
            <h2 className="text-[11px] tracking-[0.28em] uppercase text-metal">
              Reservation policy
            </h2>
            <p className="mt-5 text-base leading-relaxed text-cream-soft">
              {site.reservationPolicy}
            </p>
          </div>

          <div className="mt-12 border-t border-cream/10 pt-10">
            <h2 className="text-[11px] tracking-[0.28em] uppercase text-metal">
              Take out
            </h2>
            <p className="mt-5 text-cream-soft">
              Enjoy fine Italian cooking from the comfort of your home. Call to
              place a takeout order.
            </p>
            <div className="mt-6">
              <Button href={site.phone.tel} variant="ghost">
                Call for Take Out
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
