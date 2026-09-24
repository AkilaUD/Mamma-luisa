import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "ghost" | "light";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-cream hover:bg-[#a03d33] border border-transparent",
  secondary:
    "bg-transparent text-cream border border-metal/60 hover:border-metal hover:text-cream",
  ghost:
    "bg-transparent text-cream-soft border border-cream/20 hover:border-cream/50 hover:text-cream",
  light:
    "bg-ink text-cream hover:bg-ink-soft border border-transparent",
};

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  external?: boolean;
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center px-6 py-3 text-[11px] tracking-[0.22em] uppercase font-medium transition-colors duration-300 ${variants[variant]} ${className}`;

  if (external || href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        className={classes}
        {...(href.startsWith("http")
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
