import type { MenuItem as MenuItemType } from "@/content/menu";

type Props = {
  item: MenuItemType;
  light?: boolean;
};

export function MenuItem({ item, light = false }: Props) {
  const nameColor = light ? "text-ink" : "text-cream";
  const descColor = light ? "text-ink/70" : "text-cream-soft";
  const priceColor = light ? "text-ink" : "text-cream";
  const noteColor = light ? "text-ink/50" : "text-cream-soft/90";

  return (
    <article className="py-5">
      <div className="flex min-w-0 items-baseline gap-2">
        <h3
          className={`min-w-0 font-display text-xl leading-snug break-words drop-shadow-[0_1px_6px_rgba(0,0,0,0.55)] sm:text-2xl md:text-[1.75rem] ${nameColor}`}
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
              className={`shrink-0 font-sans text-sm tabular-nums drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)] sm:text-[15px] ${priceColor}`}
            >
              {item.price}
            </span>
          </>
        ) : null}
      </div>
      {item.description ? (
        <p
          className={`mt-2 max-w-2xl text-sm leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.45)] ${descColor}`}
        >
          {item.description}
        </p>
      ) : null}
      {item.variants?.length ? (
        <ul className={`mt-3 space-y-1.5 text-sm ${descColor}`}>
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
