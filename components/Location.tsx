import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { site } from "@/content/site";

export function Location() {
  return (
    <section className="bg-paper-soft px-5 py-24 text-ink md:px-10 md:py-32">
      <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <SectionLabel light>Find us</SectionLabel>
          <h2 className="mt-4 font-display text-5xl md:text-6xl">
            673 Thames Street
          </h2>
          <div className="mt-10 space-y-6 text-base leading-relaxed text-ink/70">
            <p>
              {site.address.city}, {site.address.state} {site.address.zip}
            </p>
            <p>
              <a
                href={site.phone.tel}
                className="text-ink transition-colors hover:text-accent"
              >
                {site.phone.display}
              </a>
            </p>
            <p>
              <a
                href={`mailto:${site.email}`}
                className="text-ink transition-colors hover:text-accent"
              >
                {site.email}
              </a>
            </p>
            <p className="max-w-md">{site.hours}</p>
            <p className="max-w-md text-ink/55">({site.parking})</p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="overflow-hidden border border-ink/10 bg-ink/5">
            <iframe
              title="Map to Mamma Luisa"
              src={site.links.mapEmbed}
              className="h-[360px] w-full grayscale-[20%] contrast-[1.05] md:h-[440px]"
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
        </Reveal>
      </div>
    </section>
  );
}
