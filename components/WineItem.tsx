import type { Wine } from "@/content/wine";

type Props = {
  wine: Wine;
};

export function WineItem({ wine }: Props) {
  return (
    <article className="flex min-w-0 items-baseline gap-2 py-3.5 sm:gap-3">
      <h3 className="min-w-0 font-display text-xl leading-snug break-words text-cream drop-shadow-[0_1px_6px_rgba(0,0,0,0.55)] md:text-[1.35rem]">
        {wine.name}
      </h3>
      <span className="price-leader max-sm:hidden border-cream/40" aria-hidden />
      <span className="shrink-0 font-sans text-sm tabular-nums text-cream drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
        {wine.price}
      </span>
    </article>
  );
}
