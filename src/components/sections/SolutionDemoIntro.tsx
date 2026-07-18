import { SectionLabel } from "@/components/ui/SectionLabel";

export function SolutionDemoIntro() {
  return (
    <div className="mx-auto max-w-[1200px] text-center">
      <SectionLabel>Interactive eval demo</SectionLabel>
      <h2 className="mx-auto mt-4 max-w-3xl text-balance text-3xl font-semibold tracking-[-0.03em] md:text-5xl">
        See how Tracefield ranks policies, maps failure boundaries, and surfaces
        rollout evidence.
      </h2>
      <p className="mx-auto mt-5 max-w-2xl text-pretty text-sm leading-relaxed text-muted md:text-base">
        Explore a worked RT-1-X evaluation below — the same pipeline Tracefield runs on
        your scenes, checkpoints, and perturbation sweeps before hardware time is scheduled.
      </p>
    </div>
  );
}
