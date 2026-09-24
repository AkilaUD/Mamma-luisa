"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/Button";
import { CinematicImage } from "@/components/CinematicImage";
import { images } from "@/content/photos";
import { site } from "@/content/site";

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-ink">
      <div className="absolute inset-0">
        <CinematicImage
          src={images.hero}
          alt="The dining room at Mamma Luisa, tables set for dinner"
          priority
          kenBurns
          className="h-full w-full"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/45 to-ink/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(23,19,16,0.55)_100%)]" />
      </div>

      <div className="relative z-10 flex min-h-[100svh] flex-col justify-end px-5 pb-16 pt-28 md:justify-center md:px-10 md:pb-24 md:pt-20">
        <div className="mx-auto w-full max-w-[1440px]">
          <motion.p
            className="text-[11px] tracking-[0.36em] uppercase text-metal"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15 }}
          >
            {site.locationLabel}
          </motion.p>

          <motion.h1
            className="mt-6 font-display text-[clamp(3.25rem,14vw,9.5rem)] font-medium leading-[0.88] tracking-[-0.03em] text-cream"
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            Mamma
            <br />
            Luisa
          </motion.h1>

          <motion.p
            className="mt-6 max-w-md text-sm tracking-[0.2em] uppercase text-cream-soft md:text-[13px]"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.55 }}
          >
            {site.heroLine}
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <Button href={site.links.resy} external>
              Reserve a Table
            </Button>
            <Button href="/menu" variant="secondary">
              Explore the Menu
            </Button>
            <a
              href={site.phone.tel}
              className="inline-flex min-h-11 items-center px-3 py-3 text-[11px] tracking-[0.22em] uppercase text-cream-soft/80 transition-colors hover:text-cream sm:ml-1"
            >
              Take Out
            </a>
          </motion.div>

          <motion.p
            className="mt-6 text-[11px] tracking-[0.22em] uppercase text-metal"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.85 }}
          >
            {site.hoursShort}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
