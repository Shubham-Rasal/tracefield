import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  showArrow?: boolean;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "border border-accent-green bg-accent-green text-accent-foreground hover:bg-accent-green/90",
  secondary:
    "border border-border-light bg-transparent text-foreground hover:border-accent-green/50 hover:bg-accent-green/10",
};

export function Button({
  href = "#",
  children,
  variant = "primary",
  className = "",
  showArrow = true,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.12em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-green focus-visible:ring-offset-2 focus-visible:ring-offset-background ${variants[variant]} ${className}`}
    >
      {children}
      {showArrow && <ArrowUpRight className="h-3 w-3" strokeWidth={2} />}
    </Link>
  );
}
