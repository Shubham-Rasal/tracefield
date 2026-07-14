import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Logo } from "@/components/Logo";
import { CONTACT_EMAIL, CONTACT_MAILTO } from "@/lib/contact";

const pillButton =
  "inline-flex h-12 select-none items-center rounded-full bg-accent-green px-7 text-[15px] font-medium text-accent-foreground transition-[scale,opacity] duration-150 ease-(--ease-out-strong) hover:opacity-90 active:scale-[0.96] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-green";

const textLink =
  "group inline-flex select-none items-center gap-1 rounded-sm py-2.5 text-[15px] font-medium text-accent-green transition-colors duration-150 hover:text-accent-green/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-green";

const linkChevron =
  "size-4 transition-[translate] duration-150 ease-(--ease-out-strong) group-hover:translate-x-0.5";

const tile = "card-surface flex min-w-0 flex-col rounded-[2rem] bg-white/[0.035] p-6";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col">
        <Hero />
        <Bento />
        <RealToSim />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <HeroBackdrop />
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center px-6 pb-16 pt-32 text-center">
        <div className="hero-enter hero-enter-1 text-accent-green">
          <Logo variant="mark" size="lg" />
        </div>
        <h1 className="hero-enter hero-enter-2 mt-4 text-balance text-5xl font-semibold leading-[1.02] tracking-[-0.04em] sm:text-7xl">
          Evaluate robot policies
          <br />
          <span className="text-muted">before the lab.</span>
        </h1>
        <p className="hero-enter hero-enter-3 mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted">
          Real-to-sim evaluation suites for generalist robot policies. Reconstruct
          real scenes, run thousands of rollouts, and know which checkpoint deserves
          hardware time.
        </p>
        <div className="hero-enter hero-enter-4 mt-8 flex flex-wrap items-center justify-center gap-6">
          <a href={CONTACT_MAILTO} className={pillButton}>
            Book an eval review
          </a>
          <Link href="/demo" className={textLink}>
            View RT-1-X demo
            <ArrowRight aria-hidden="true" className={linkChevron} />
          </Link>
        </div>
        <HeroCode />
      </div>
    </section>
  );
}

function HeroCode() {
  return (
    <div className="hero-enter hero-enter-5 mt-16 w-full max-w-xl text-left">
      <div className="mb-3 font-mono text-xs text-muted">eval.yaml</div>
      <pre className="card-surface overflow-x-auto rounded-xl bg-white/[0.04] p-6 font-mono text-[13px] leading-[1.7]">
        <code>
          <Kw>scene</Kw>: workbench_scan_042{"\n"}
          <Kw>policy</Kw>: rt-1-x/checkpoint_184k{"\n"}
          <Kw>sweeps</Kw>:{"\n"}
          {"  "}camera_tilt: [0, 5, 10, 15]{"\n"}
          {"  "}lighting: [100, 500, 1500]{"\n"}
          {"  "}object_pose: randomized{"\n\n"}
          <Kw>output</Kw>: rank, failure_clips, robustness_map
        </code>
      </pre>
    </div>
  );
}

function Kw({ children }: { children: ReactNode }) {
  return <span className="text-accent-green">{children}</span>;
}

function Bento() {
  return (
    <section id="problem" className="mx-auto w-full max-w-6xl px-6 py-24">
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
        Tracefield reconstructs geometry and appearance, inserts the robot, and
        turns the scene into a repeatable simulation suite.
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
          RT-1-X simulated scores tracked published real-world task success in
          the worked example.
        </p>
      </div>
    </div>
  );
}

function RobustnessTile() {
  return (
    <div className={tile}>
      <h3 className="text-xl font-semibold tracking-tight">
        Find the cliff edge.
      </h3>
      <p className="mt-2 text-pretty text-sm leading-relaxed text-muted">
        Sweep lighting, camera pose, object placement, and scene setup. The
        output is not one success number. It is the envelope where the policy
        still works.
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
        Evaluate many checkpoints, tasks, and perturbations without queueing the
        robot for every hypothesis. Use real-world rollouts where they matter most.
      </p>
      <div className="mt-auto grid grid-cols-8 gap-1.5 pt-6">
        {Array.from({ length: 32 }).map((_, index) => (
          <div
            key={index}
            className={`aspect-square rounded-md ${
              [5, 13, 21, 30].includes(index)
                ? "bg-red-400/20"
                : "bg-accent-green/20"
            }`}
          />
        ))}
      </div>
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
        Tracefield surfaces the rollout where behavior changes, not just the
        aggregate score. Review failures, fix the policy, rerun the suite.
      </p>
      <div className="mt-auto pt-5">
        <WaveArt />
      </div>
    </div>
  );
}

function RealToSim() {
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
        Generic sim benchmarks drift away from the real world. Tracefield uses
        reconstructed environments, task-specific objects, and controlled
        perturbations to make simulation a stronger signal for policy improvement.
      </p>
      <pre className="card-surface mx-auto mt-10 max-w-md overflow-x-auto rounded-xl bg-white/[0.04] p-5 text-left font-mono text-[13px] leading-[1.7]">
        <code>
          <Kw>scan</Kw> -&gt; reconstruction{"\n"}
          <Kw>reconstruction</Kw> -&gt; rollout suite{"\n"}
          <Kw>rollouts</Kw> -&gt; policy ranking{"\n"}
          <Kw>failures</Kw> -&gt; next data target
        </code>
      </pre>
    </section>
  );
}

function FinalCta() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-border-light">
      <ClosingBackdrop />
      <div className="mx-auto flex max-w-4xl flex-col items-center px-6 py-28 text-center">
        <h2 className="text-5xl font-semibold leading-[1.02] tracking-[-0.04em] sm:text-6xl">
          Bring one eval.
        </h2>
        <p className="mt-5 max-w-md text-pretty text-lg leading-relaxed text-muted">
          Send a task, policy, or environment you already test on hardware. We will
          show what can move into simulation before the next robot run.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-6">
          <a href={CONTACT_MAILTO} className={pillButton}>
            {CONTACT_EMAIL}
          </a>
          <Link href="/demo" className={textLink}>
            Follow the demo
            <ArrowRight aria-hidden="true" className={linkChevron} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function HeroBackdrop() {
  return (
    <div aria-hidden className="absolute inset-0 -z-10">
      <div className="absolute left-1/2 top-0 h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-accent-green/15 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.08),transparent_34%),linear-gradient(180deg,transparent,rgba(0,0,0,0.9)_72%)]" />
    </div>
  );
}

function OnDeviceBackdrop() {
  return (
    <div
      aria-hidden
      className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_38%,rgba(255,255,255,0.07),transparent_42%)]"
    />
  );
}

function ClosingBackdrop() {
  return (
    <div aria-hidden className="absolute inset-0 -z-10">
      <div className="absolute bottom-0 left-1/2 h-80 w-[620px] -translate-x-1/2 rounded-full bg-accent-green/15 blur-3xl" />
    </div>
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

function WaveArt() {
  return (
    <div className="flex h-28 items-end gap-1.5 rounded-2xl bg-black/30 p-4">
      {Array.from({ length: 28 }).map((_, index) => (
        <div
          key={index}
          className="flex-1 rounded-full bg-accent-green/40"
          style={{ height: `${24 + ((index * 17) % 64)}%` }}
        />
      ))}
    </div>
  );
}
