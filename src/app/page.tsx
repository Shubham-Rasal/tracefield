import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LandingHero } from "@/components/sections/LandingHero";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { SolutionDemoIntro } from "@/components/sections/SolutionDemoIntro";
import { DemoVideoShowcase } from "@/components/sections/DemoVideoShowcase";
import { SolutionDemoSection } from "@/components/sections/SolutionDemoSection";
import { ClosingCTA } from "@/components/sections/ClosingCTA";
import { FeatureFailurePreview, FeatureParallelPreview } from "@/components/ui/FeatureMedia";
import { CONTACT_MAILTO } from "@/lib/contact";

const tile = "card-surface flex min-w-0 flex-col rounded-[2rem] bg-white/[0.035] p-6";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col">
        <LandingHero />
        <ProblemSection />
        <section className="px-6 pb-10 pt-20 md:pt-24">
          <SolutionDemoIntro />
        </section>
        <DemoVideoShowcase />
        <SolutionDemoSection />
        <FeaturesSection />
        <ProofSection />
        <ClosingCTA />
      </main>
      <Footer />
    </>
  );
}

function FeaturesSection() {
  return (
    <section id="features" className="mx-auto w-full max-w-6xl px-6 py-24">
      <h2 className="text-balance text-center text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
        Everything you need to compare policies.
        <br />
        <span className="text-muted">Nothing to rediscover on hardware.</span>
      </h2>
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <ReconstructionTile />
        <CorrelationTile />
        <RobustnessTile />
        <ScaleTile />
        <FailureTile />
      </div>
    </section>
  );
}

function ReconstructionTile() {
  return (
    <div className={`${tile} relative overflow-hidden lg:col-span-2`}>
      <OrbitArt />
      <h3 className="relative text-xl font-semibold tracking-tight">
        Real scenes become eval environments.
      </h3>
      <p className="relative mt-2 text-pretty text-sm leading-relaxed text-muted">
        Start with a short scan of the bench, kitchen, lab, or warehouse cell.
        Tracefield reconstructs geometry and appearance, inserts the robot, and turns the
        scene into a repeatable simulation suite.
      </p>
      <div className="relative mt-auto grid grid-cols-4 gap-2 pt-8">
        {["scan", "mesh", "robot", "eval"].map((label) => (
          <div key={label} className="rounded-xl bg-white/[0.05] px-3 py-4 text-center">
            <p className="font-mono text-[10px] uppercase tracking-wider text-muted">
              {label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function CorrelationTile() {
  return (
    <div className={`${tile} relative justify-between gap-8 overflow-hidden`}>
      <StatArt />
      <h3 className="relative text-xl font-semibold tracking-tight">
        Rankings that track reality.
      </h3>
      <div className="relative">
        <div className="text-5xl font-semibold tracking-[-0.04em] text-accent-green">
          r = 0.93
        </div>
        <p className="mt-1 text-pretty text-sm text-muted">
          Simulated scores tracked published real-world task success in the worked example.
        </p>
      </div>
    </div>
  );
}

function RobustnessTile() {
  return (
    <div className={tile}>
      <h3 className="text-xl font-semibold tracking-tight">Find the cliff edge.</h3>
      <p className="mt-2 text-pretty text-sm leading-relaxed text-muted">
        Sweep lighting, camera pose, object placement, and scene setup. The output is not
        one success number. It is the envelope where the policy still works.
      </p>
      <div className="mt-auto space-y-2 pt-5">
        {["0 deg succeeds", "10 deg stable", "15 deg fails"].map((item, index) => (
          <div
            key={item}
            className="flex items-center justify-between rounded-lg border border-border-light p-3"
          >
            <span className="font-mono text-[11px] text-muted">{item}</span>
            <span className={index < 2 ? "text-accent-green" : "text-red-400"}>
              {index < 2 ? "pass" : "break"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ScaleTile() {
  return (
    <div className={`${tile} lg:col-span-2`}>
      <h3 className="text-xl font-semibold tracking-tight">
        Thousands of rollouts in parallel.
      </h3>
      <p className="mt-2 text-pretty text-sm leading-relaxed text-muted">
        Evaluate many checkpoints, tasks, and perturbation sweeps without queueing the robot
        for every hypothesis. A full robustness map completes in minutes, not weeks.
      </p>
      <FeatureParallelPreview />
    </div>
  );
}

function FailureTile() {
  return (
    <div className={`${tile} lg:col-span-2`}>
      <h3 className="text-xl font-semibold tracking-tight">
        Failure clips your team can act on.
      </h3>
      <p className="mt-2 max-w-md text-pretty text-sm leading-relaxed text-muted">
        Tracefield surfaces the rollout where behavior changes, not just the aggregate
        score. Review the failure clip, fix the policy, rerun the suite.
      </p>
      <FeatureFailurePreview />
    </div>
  );
}

function ProofSection() {
  return (
    <section
      id="proof"
      className="relative mx-auto w-full max-w-4xl overflow-hidden px-6 py-28 text-center"
    >
      <OnDeviceBackdrop />
      <p className="text-sm font-semibold text-accent-green">Built from reality</p>
      <h2 className="mt-4 text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.03em] sm:text-5xl">
        Simulation that starts
        <br />
        <span className="text-muted">with your scene.</span>
      </h2>
      <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted">
        Generic sim benchmarks drift away from the real world. Tracefield uses reconstructed
        environments, task-specific objects, and controlled perturbations to make simulation
        a stronger signal for policy improvement.
      </p>
      <pre className="card-surface mx-auto mt-10 max-w-md overflow-x-auto rounded-xl bg-white/[0.04] p-5 text-left font-mono text-[13px] leading-[1.7]">
        <code>
          <Kw>scan</Kw> -&gt; reconstruction{"\n"}
          <Kw>reconstruction</Kw> -&gt; rollout suite{"\n"}
          <Kw>rollouts</Kw> -&gt; policy ranking{"\n"}
          <Kw>failures</Kw> -&gt; next data target
        </code>
      </pre>
      <div className="mt-10">
        <a
          href={CONTACT_MAILTO}
          className="inline-flex h-12 items-center rounded-full bg-accent-green px-7 text-[15px] font-medium text-accent-foreground transition-opacity hover:opacity-90"
        >
          Book an eval review
        </a>
      </div>
    </section>
  );
}

function Kw({ children }: { children: ReactNode }) {
  return <span className="text-accent-green">{children}</span>;
}

function OnDeviceBackdrop() {
  return (
    <div
      aria-hidden
      className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_38%,rgba(255,255,255,0.07),transparent_42%)]"
    />
  );
}

function OrbitArt() {
  return (
    <div aria-hidden className="absolute inset-0 opacity-70">
      <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full border border-accent-green/20" />
      <div className="absolute -right-6 top-10 h-24 w-24 rounded-full border border-accent-green/30" />
      <div className="absolute right-16 top-24 h-3 w-3 rounded-full bg-accent-green" />
    </div>
  );
}

function StatArt() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <div className="absolute -right-16 -top-20 h-52 w-52 rounded-full bg-accent-green/20 blur-3xl" />
      <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-accent-green/35 to-transparent" />
    </div>
  );
}
