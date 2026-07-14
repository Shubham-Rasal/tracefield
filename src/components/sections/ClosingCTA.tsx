import { Button } from "@/components/ui/Button";
import { CONTACT_EMAIL, CONTACT_MAILTO } from "@/lib/contact";

export function ClosingCTA() {
  return (
    <section id="contact" className="scroll-mt-20 border-t border-border-light px-6 py-16">
      <div className="mx-auto max-w-[1200px] text-center">
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
          Early access
        </p>
        <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
          Bring your next robot eval into simulation first.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted md:text-base">
          Send us a policy, task, or environment you already evaluate on hardware. We&apos;ll
          show what Tracefield can measure before your next real-world rollout.
        </p>
        <p className="mt-6 font-mono text-sm text-foreground/90">
          <a href={CONTACT_MAILTO} className="transition-colors hover:text-accent-green">
            {CONTACT_EMAIL}
          </a>
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Button href={CONTACT_MAILTO}>Book an eval review</Button>
          <Button href="/demo" variant="secondary">
            See RT-1-X example
          </Button>
        </div>
      </div>
    </section>
  );
}
