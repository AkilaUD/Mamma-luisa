"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

type CinematicImageProps = {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  imageClassName?: string;
  sizes?: string;
  kenBurns?: boolean;
  caption?: string;
};

export function CinematicImage({
  src,
  alt,
  priority = false,
  className = "",
  imageClassName = "",
  sizes = "(max-width: 768px) 100vw, 80vw",
  kenBurns = false,
  caption,
}: CinematicImageProps) {
  const reduceMotion = useReducedMotion();

  return (
    <figure className={`relative overflow-hidden bg-ink-mid ${className}`}>
      <motion.div
        className="absolute inset-0"
        initial={kenBurns && !reduceMotion ? { scale: 1 } : false}
        animate={
          kenBurns && !reduceMotion
            ? { scale: 1.04 }
            : { scale: 1 }
        }
        transition={{ duration: 12, ease: "easeOut" }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          quality={95}
          sizes={sizes}
          className={`object-cover ${imageClassName}`}
        />
      </motion.div>
      {caption ? (
        <figcaption className="absolute bottom-4 left-4 right-4 text-[10px] tracking-[0.2em] uppercase text-cream/70">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
