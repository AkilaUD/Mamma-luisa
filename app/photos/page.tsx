import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { PhotoGallery } from "@/components/PhotoGallery";
import { galleryPhotos, images } from "@/content/photos";

export const metadata: Metadata = {
  title: "Photos",
  description:
    "Photographs from inside Mamma Luisa — the dining room, the table, and the kitchen.",
  alternates: { canonical: "/photos" },
};

export default function PhotosPage() {
  return (
    <>
      <PageHero
        label="Gallery"
        title="Photos"
        image={images.photosBanner}
        alt="Photographs from Mamma Luisa"
      />
      <section className="bg-ink px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1440px]">
          <p className="mb-12 max-w-xl text-sm text-cream-muted">
            Authentic photographs from the restaurant. Select an image to view
            it full screen.
          </p>
          <PhotoGallery photos={galleryPhotos} />
        </div>
      </section>
    </>
  );
}
