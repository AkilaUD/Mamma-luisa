import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
import { images } from "@/content/photos";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Gift Certificates",
  description:
    "Give the gift of a beautiful dining experience at Mamma Luisa in Newport.",
  alternates: { canonical: "/gift-certificates" },
};

export default function GiftCertificatesPage() {
  return (
    <>
      <PageHero
        label="A gift"
        title="Gift Certificates"
        image={images.giftsBanner}
        alt="Gift certificates for Mamma Luisa"
      />
      <section className="bg-ink px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-display text-3xl leading-relaxed text-cream md:text-4xl">
            {site.giftCertificates.copy}
          </p>
          <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-cream-soft">
            {site.giftCertificates.detail}
          </p>
          <div className="mt-12">
            <Button href={site.giftCertificates.url} external>
              Buy Now
            </Button>
          </div>
          <p className="mt-10 text-sm text-cream-muted">
            Purchases are fulfilled through Square Gift.
          </p>
        </div>
      </section>
    </>
  );
}
