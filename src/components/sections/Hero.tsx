import Link from "next/link";
import { Logo } from "@/components/Logo";

const links = [
  { label: "Get early access", href: "#" },
  { label: "Book a call", href: "#" },
];

export function Hero() {
  return (
    <div className="flex min-h-screen flex-col bg-black">
      <main className="flex flex-1 flex-col items-center justify-center px-6 pb-24 pt-16">
        <Logo variant="mark" size="lg" className="text-foreground" />

        <p className="mt-14 font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
          Get started
        </p>

        <h1 className="mt-5 max-w-xl text-center text-xl font-normal leading-snug text-foreground md:text-2xl">
          Eval Stack for Robotics
        </h1>

        <p className="mt-5 max-w-md text-center text-sm leading-relaxed text-muted md:text-[15px]">
          Measure whether your robot policies are actually improving. Run evals on
          episodes, score with custom metrics, and turn field failures into regression
          tests.
        </p>

        <div className="mt-10 w-full max-w-xl border border-border-light px-5 py-3.5 text-center font-mono text-[13px] md:text-sm">
          <span className="text-muted">Coming soon</span>
        </div>

        <nav className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
          {links.map((link, index) => (
            <span key={link.label} className="inline-flex items-center gap-3">
              {index > 0 && <span className="text-border-light">|</span>}
              <Link href={link.href} className="transition-colors hover:text-foreground/80">
                {link.label}
              </Link>
            </span>
          ))}
        </nav>
      </main>

      <footer className="flex items-center justify-between px-6 py-6">
        <Logo variant="footer" />
        <span className="text-sm text-muted">tracefield.ai</span>
      </footer>
    </div>
  );
}
