import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { images } from "@/content/photos";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Mamma Luisa at 673 Thames Street, Newport. Phone, email, hours, and parking.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Visit"
        title="Contact Us"
        image={images.contactBanner}
        alt="Finding Mamma Luisa in Newport"
      />
      <section className="bg-paper px-5 py-20 text-ink md:px-10 md:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-16 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl">Get in Touch</h2>
            <dl className="mt-10 space-y-8">
              <div>
                <dt className="text-[11px] tracking-[0.24em] uppercase text-ink/45">
                  Phone
                </dt>
                <dd className="mt-2">
                  <a
                    href={site.phone.tel}
                    className="font-display text-3xl hover:text-accent"
                  >
                    {site.phone.display}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[11px] tracking-[0.24em] uppercase text-ink/45">
                  Email
                </dt>
                <dd className="mt-2">
                  <a
                    href={`mailto:${site.email}`}
                    className="text-lg hover:text-accent"
                  >
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[11px] tracking-[0.24em] uppercase text-ink/45">
                  Hours
                </dt>
                <dd className="mt-2 max-w-md text-base leading-relaxed text-ink/70">
                  {site.hours}
                </dd>
              </div>
              <div>
                <dt className="text-[11px] tracking-[0.24em] uppercase text-ink/45">
                  Address
                </dt>
                <dd className="mt-2 text-base leading-relaxed text-ink/70">
                  {site.address.street}
                  <br />
                  {site.address.city}, {site.address.state} {site.address.zip}
                </dd>
              </div>
              <div>
                <dt className="text-[11px] tracking-[0.24em] uppercase text-ink/45">
                  Parking
                </dt>
                <dd className="mt-2 text-base text-ink/70">
                  ({site.parking})
                </dd>
              </div>
            </dl>
          </div>

          <div>
            <div className="overflow-hidden border border-ink/10">
              <iframe
                title="Map to Mamma Luisa"
                src={site.links.mapEmbed}
                className="h-[420px] w-full md:h-full md:min-h-[520px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <a
              href={site.links.mapsDirections}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex text-[11px] tracking-[0.22em] uppercase text-accent transition-colors hover:text-ink"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
