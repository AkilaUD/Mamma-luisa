type EditorialHeadingProps = {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3";
  light?: boolean;
  className?: string;
};

export function EditorialHeading({
  children,
  as: Tag = "h2",
  light = false,
  className = "",
}: EditorialHeadingProps) {
  return (
    <Tag
      className={`font-display font-medium leading-[0.95] tracking-[-0.02em] ${
        light ? "text-ink" : "text-cream"
      } ${className}`}
    >
      {children}
    </Tag>
  );
}
