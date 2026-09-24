type SectionLabelProps = {
  children: React.ReactNode;
  light?: boolean;
  className?: string;
};

export function SectionLabel({
  children,
  light = false,
  className = "",
}: SectionLabelProps) {
  return (
    <p
      className={`text-[11px] tracking-[0.32em] uppercase ${
        light ? "text-ink/55" : "text-metal"
      } ${className}`}
    >
      {children}
    </p>
  );
}
