import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/Button";
import { CONTACT_MAILTO } from "@/lib/contact";

export function LandingHero() {
  return (
    <section className="relative overflow-hidden border-b border-border-light px-6 pb-16 pt-28 md:pb-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(250,115,67,0.14),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent_45%)]" />
      <div className="mx-auto grid max-w-[1200px] items-center gap-14 md:grid-cols-[1.05fr_0.95fr]">
        <div>
          <Logo variant="mark" size="lg" className="hero-enter hero-enter-1 text-accent-green" />

          <p className="hero-enter hero-enter-2 mt-10 font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
            Real-to-sim evaluation for robot policies
          </p>

          <h1 className="hero-enter hero-enter-3 mt-5 max-w-3xl text-4xl font-medium leading-[1.02] tracking-[-0.04em] md:text-6xl">
            Measure robot progress without burning robot hours.
          </h1>

          <p className="hero-enter hero-enter-4 mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            Tracefield turns real scenes into simulation-backed evaluation suites, so
            teams can rank checkpoints, map failure boundaries, and compare generalist
            policies before running expensive real-world rollouts.
          </p>

          <div className="hero-enter hero-enter-5 mt-9 flex flex-wrap items-center gap-3">
            <Button href={CONTACT_MAILTO}>Book an eval review</Button>
            <Button href="/demo" variant="secondary">
              See RT-1-X results
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

        <div className="hero-enter hero-enter-6 card-surface bg-black/70 p-3 shadow-2xl shadow-accent-green/5">
          <div className="card-surface bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.01))] p-5">
            <div className="flex items-center justify-between border-b border-border-light pb-4">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                  Evaluation run
                </p>
                <p className="mt-1 text-sm text-foreground/90">Workbench / close drawer</p>
              </div>
              <span className="rounded-full border border-accent-green/40 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-accent-green">
                live
              </span>
            </div>

            <div className="mt-5 grid grid-cols-4 gap-2">
              {Array.from({ length: 16 }).map((_, index) => (
                <div
                  key={index}
                  className={`aspect-square border ${
                    [2, 7, 11].includes(index)
                      ? "border-red-400/30 bg-red-400/10"
                      : "border-accent-green/30 bg-accent-green/10"
                  }`}
                />
              ))}
            </div>

            <div className="mt-5 space-y-3">
              {[
                ["camera tilt", "reliable to 10 deg"],
                ["lighting", "fails below dim range"],
                ["object placement", "ranking stable"],
              ].map(([label, result]) => (
                <div
                  key={label}
                  className="flex items-center justify-between border border-border-light px-3 py-2"
                >
                  <span className="font-mono text-[10px] uppercase tracking-wider text-muted">
                    {label}
                  </span>
                  <span className="text-xs text-foreground/90">{result}</span>
                </div>
              ))}
            </div>

            <p className="mt-5 text-xs leading-relaxed text-muted">
              Simulated rollouts sweep camera, lighting, placement, and task variation to
              expose where policy behavior changes before hardware time is scheduled.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
