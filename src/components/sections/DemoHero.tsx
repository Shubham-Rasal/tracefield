import { Button } from "@/components/ui/Button";

export function DemoHero() {
  return (
    <section className="border-b border-border-light px-6 pt-28 pb-16 md:pt-32 md:pb-20">
      <div className="mx-auto max-w-[1200px]">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
          Worked example — RT-1-X
        </p>
        <h1 className="mt-4 max-w-3xl text-3xl font-medium leading-snug md:text-5xl">
          Know how your robot policy performs in the real world — before you touch a robot.
        </h1>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
          We evaluate vision-language-action policies in simulation and tell you how well
          they&apos;ll actually do, exactly where they break, and which checkpoint to ship. No
          robot hours, no hardware, results in minutes.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="#proof">View correlation results</Button>
          <Button href="#rollouts" variant="secondary">
            Watch rollout evidence
          </Button>
        </div>
      </div>
    </section>
  );
}
