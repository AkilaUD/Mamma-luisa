"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { Photo } from "@/content/photos";

type Props = {
  photos: Photo[];
};

export function PhotoGallery({ photos }: Props) {
  const [index, setIndex] = useState<number | null>(null);

  const close = useCallback(() => setIndex(null), []);
  const prev = useCallback(() => {
    setIndex((i) => (i === null ? i : (i - 1 + photos.length) % photos.length));
  }, [photos.length]);
  const next = useCallback(() => {
    setIndex((i) => (i === null ? i : (i + 1) % photos.length));
  }, [photos.length]);

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, close, prev, next]);

  let touchX = 0;

  return (
    <>
      <div className="grid gap-3 md:grid-cols-12 md:gap-4">
        {photos.map((photo, i) => {
          const wide = i % 5 === 0 || i % 5 === 3;
          return (
            <button
              key={photo.id}
              type="button"
              onClick={() => setIndex(i)}
              className={`group relative overflow-hidden bg-ink-mid text-left ${
                wide
                  ? "aspect-[16/11] md:col-span-7"
                  : "aspect-[4/5] md:col-span-5"
              }`}
              aria-label={`View ${photo.alt}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <span className="absolute inset-0 bg-ink/0 transition-colors group-hover:bg-ink/20" />
            </button>
          );
        })}
      </div>

      {index !== null ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Photograph viewer"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/95 p-4"
          onClick={close}
          onTouchStart={(e) => {
            touchX = e.changedTouches[0].clientX;
          }}
          onTouchEnd={(e) => {
            const dx = e.changedTouches[0].clientX - touchX;
            if (dx > 50) prev();
            if (dx < -50) next();
          }}
        >
          <button
            type="button"
            className="absolute right-5 top-5 z-10 text-[11px] tracking-[0.22em] uppercase text-cream"
            onClick={close}
          >
            Close · Esc
          </button>
          <button
            type="button"
            className="absolute left-3 top-1/2 z-10 -translate-y-1/2 px-3 py-6 text-cream md:left-6"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous photograph"
          >
            ←
          </button>
          <button
            type="button"
            className="absolute right-3 top-1/2 z-10 -translate-y-1/2 px-3 py-6 text-cream md:right-6"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next photograph"
          >
            →
          </button>
          <div
            className="relative h-[75vh] w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={photos[index].src}
              alt={photos[index].alt}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>
          <p className="absolute bottom-6 left-0 right-0 text-center text-xs tracking-[0.16em] text-cream-muted">
            {index + 1} / {photos.length} · {photos[index].alt}
          </p>
        </div>
      ) : null}
    </>
  );
}
