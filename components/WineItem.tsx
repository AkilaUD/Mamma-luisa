import type { Wine } from "@/content/wine";

type Props = {
  wine: Wine;
};

export function WineItem({ wine }: Props) {
  return (
    <article className="flex items-baseline gap-3 py-3.5">
      <h3 className="font-display text-xl text-cream md:text-[1.35rem]">
        {wine.name}
      </h3>
      <span className="price-leader" aria-hidden />
      <span className="shrink-0 font-sans text-sm tabular-nums text-cream-soft">
        {wine.price}
      </span>
    </article>
  );
}
