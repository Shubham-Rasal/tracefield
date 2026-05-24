import Link from "next/link";
import { Logo } from "./Logo";
import { Button } from "./ui/Button";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="border-b border-border px-6 py-16">
        <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="font-display text-2xl font-semibold md:text-3xl">
              Regression tests for robot policies.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="#">Get early access</Button>
              <Button href="#" variant="secondary">
                Book a call
              </Button>
            </div>
          </div>
          <Logo />
        </div>
      </div>

      <div className="mx-auto flex max-w-[1400px] flex-wrap gap-x-12 gap-y-6 px-6 py-10 text-sm">
        <Link href="#evals" className="text-foreground/80 hover:text-foreground">
          Evals
        </Link>
        <Link href="#fleet" className="text-foreground/80 hover:text-foreground">
          Fleet
        </Link>
        <Link href="#" className="text-foreground/80 hover:text-foreground">
          Contact
        </Link>
      </div>

      <div className="border-t border-border px-6 py-6">
        <p className="mx-auto max-w-[1400px] text-center text-xs text-muted">
          © 2026 Tracefield, Inc.
        </p>
      </div>
    </footer>
  );
}
