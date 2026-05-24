import { Button } from "@/components/ui/Button";

export function ContactSection() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-[1400px] px-6 py-24">
        <p className="mb-4 text-[10px] uppercase tracking-[0.15em] text-muted">
          Early access
        </p>
        <h2 className="font-display text-4xl font-semibold md:text-5xl">
          Building in the open
        </h2>
        <p className="mt-6 max-w-md text-sm leading-relaxed text-muted">
          Tracefield is in early development. If you&apos;re working on robot policies
          and want eval tooling that actually sticks, we&apos;d love to hear from you.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="#">Get early access</Button>
          <Button href="#" variant="secondary">
            Book a call
          </Button>
        </div>
      </div>
    </section>
  );
}
