import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  showArrow?: boolean;
  onClick?: () => void;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-foreground text-background hover:bg-foreground/90 border border-foreground",
  secondary:
    "bg-white/5 text-foreground hover:bg-white/10 border border-white/15 backdrop-blur-sm",
  ghost: "text-foreground hover:text-foreground/70 border border-transparent",
};

export function Button({
  href = "#",
  children,
  variant = "primary",
  className = "",
  showArrow = true,
  onClick,
}: ButtonProps) {
  const classes = `inline-flex items-center gap-2 px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.12em] transition-colors ${variants[variant]} ${className}`;

  const content = (
    <>
      {children}
      {showArrow && <ArrowUpRight className="h-3 w-3" strokeWidth={2} />}
    </>
  );

  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={classes}>
        {content}
      </button>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
