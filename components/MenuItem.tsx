import type { MenuItem as MenuItemType } from "@/content/menu";

type Props = {
  item: MenuItemType;
  light?: boolean;
};

export function MenuItem({ item, light = false }: Props) {
  const nameColor = light ? "text-ink" : "text-cream";
  const descColor = light ? "text-ink/70" : "text-cream";
  const priceColor = light ? "text-ink" : "text-cream";
  const noteColor = light ? "text-ink/50" : "text-cream-soft";
  const shadow = light
    ? ""
    : "drop-shadow-[0_2px_8px_rgba(0,0,0,0.75)]";

  return (
    <article className="py-5">
      <div className="flex min-w-0 items-baseline gap-2">
        <h3
          className={`min-w-0 font-display text-xl leading-snug break-words sm:text-2xl md:text-[1.75rem] ${shadow} ${nameColor}`}
        >
          {item.asterisk ? "*" : ""}
          {item.name}
          {item.note ? (
            <span
              className={`ml-2 font-sans text-xs tracking-wide ${noteColor}`}
            >
              ({item.note})
            </span>
          ) : null}
        </h3>
        {item.price ? (
          <>
            <span
              className={`price-leader max-sm:hidden ${light ? "border-ink/25" : "border-cream/40"}`}
              aria-hidden
            />
            <span
              className={`shrink-0 font-sans text-sm tabular-nums sm:text-[15px] ${shadow} ${priceColor}`}
            >
              {item.price}
            </span>
          </>
        ) : null}
      </div>
      {item.description ? (
        <p
          className={`mt-2 max-w-2xl text-[15px] leading-relaxed sm:text-sm ${shadow} ${descColor}`}
        >
          {item.description}
        </p>
      ) : null}
      {item.variants?.length ? (
        <ul
          className={`mt-3 space-y-1.5 text-[15px] leading-relaxed sm:text-sm ${shadow} ${descColor}`}
        >
          {item.variants.map((v) => (
            <li key={v.name} className="break-words">
              <span className={`font-medium ${nameColor}`}>{v.name}:</span>{" "}
              {v.description}
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}
