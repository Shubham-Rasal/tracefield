import { SectionLabel } from "@/components/ui/SectionLabel";

export function ProofPillar3() {
  return (
    <section className="border-b border-border-light px-6 py-20">
      <div className="mx-auto max-w-[1200px]">
        <SectionLabel>FIG.3 — Scale and honesty</SectionLabel>
        <h2 className="mt-4 max-w-2xl text-2xl font-medium md:text-4xl">
          Thousands of rollouts in parallel — and it tells you the truth.
        </h2>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
          The evaluation runs massively in parallel, so a full robustness map across tasks
          and conditions completes in a fraction of real-robot time. And crucially, it&apos;s
          honest: the simulator flags what a policy <strong className="text-foreground/90">can&apos;t</strong> do, not just what it can. RT-1-X scores zero on cube-stacking, eggplant-in-basket, and spoon-on-towel in <strong className="text-foreground/90">both</strong> simulation and the real world — so you find the gaps in minutes, on your laptop, instead of on the hardware.
        </p>

        <blockquote className="mt-10 border-l-2 border-foreground/30 pl-6 text-lg text-foreground/90">
          &ldquo;Sim that only tells you good news is worthless. Ours tells you where your
          policy fails — which is exactly what you need to know before shipping.&rdquo;
        </blockquote>
      </div>
    </section>
  );
}
