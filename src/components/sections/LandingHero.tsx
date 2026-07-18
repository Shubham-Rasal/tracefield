import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/Button";
import { CONTACT_MAILTO } from "@/lib/contact";

const ASSET = "/assets/rt1x";

export function LandingHero() {
  return (
    <section className="relative overflow-hidden border-b border-border-light px-6 pb-16 pt-28 md:pb-24 md:pt-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(250,115,67,0.14),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent_45%)]" />
      <div className="mx-auto grid max-w-[1200px] items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <Logo variant="mark" size="lg" className="hero-enter hero-enter-1 text-accent-green" />

          <p className="hero-enter hero-enter-2 mt-10 font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
            Real-to-sim evaluation for robot policies
          </p>

          <h1 className="hero-enter hero-enter-3 mt-5 max-w-3xl text-4xl font-semibold leading-[1.02] tracking-[-0.04em] md:text-6xl">
            Evaluate robot policies
            <br />
            <span className="text-muted">before the lab.</span>
          </h1>

          <p className="hero-enter hero-enter-4 mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            Tracefield turns real scenes into simulation-backed evaluation suites, so teams
            can rank checkpoints, map failure boundaries, and compare generalist policies
            before running expensive real-world rollouts.
          </p>

          <div className="hero-enter hero-enter-5 mt-9 flex flex-wrap items-center gap-3">
            <Button href="#demo">Explore the demo</Button>
            <Button href={CONTACT_MAILTO} variant="secondary">
              Book an eval review
            </Button>
          </div>

          <div className="hero-enter hero-enter-6 mt-10 grid max-w-2xl gap-3 sm:grid-cols-3">
            {[
              ["2-5 min", "scene scan"],
              ["1000s", "parallel rollouts"],
              ["r = 0.93", "real-sim signal"],
            ].map(([value, label]) => (
              <div key={label} className="card-surface bg-white/[0.02] p-4">
                <p className="font-mono text-xl text-foreground">{value}</p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-muted">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-enter hero-enter-6 card-surface overflow-hidden bg-black/70 p-3 shadow-2xl shadow-accent-green/5">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-black md:aspect-[16/11]">
            <video
              src={`${ASSET}/success_close_drawer_baseline.mp4`}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                Tracefield rollout
              </p>
              <p className="mt-1 text-sm font-medium text-foreground">Close drawer · baseline</p>
              <p className="mt-1 text-xs text-muted">
                Simulated policy rollout under calibrated camera pose.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
