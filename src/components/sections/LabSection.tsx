import { Button } from "@/components/ui/Button";

const features = [
  {
    fig: "FIG.1",
    num: "01",
    title: "Experiments",
    description:
      "Run policy evals on fixed benchmark suites and compare results across versions.",
    points: [
      "Side-by-side episode replay with video",
      "Immutable experiment records for every eval run",
      "Compare policy versions on the same benchmark suite",
    ],
    cta: "Run your first eval",
    preview: "eval",
  },
  {
    fig: "FIG.2",
    num: "02",
    title: "Datasets",
    description:
      "Curate episode collections from sim rollouts, teleop demos, and field logs.",
    points: [
      "Filter by task, robot, success/failure, environment",
      "Promote production failures to regression suites",
      "Versioned datasets with full lineage",
    ],
    cta: "Create a dataset",
    preview: "datasets",
  },
  {
    fig: "FIG.3",
    num: "03",
    title: "Scorers",
    description:
      "Define custom metrics for task success, safety, efficiency, and sim-to-real gap.",
    points: [
      "Built-in scorers: success rate, collisions, cycle time",
      "Custom Python scorers for domain-specific checks",
      "Human review queue for ambiguous episodes",
    ],
    cta: "Browse scorers",
    preview: "scorers",
  },
  {
    fig: "FIG.4",
    num: "04",
    title: "Improve",
    description:
      "Close the loop from deploy to retrain. Field failures become permanent test cases.",
    points: [
      "Score live fleet episodes with online rules",
      "GitHub Action blocks merges when eval scores regress",
      "Route insights back into training and sim replay",
    ],
    cta: "Set up CI gates",
    preview: "improve",
  },
];

function FeaturePreview({ type }: { type: string }) {
  if (type === "eval") {
    return (
      <div className="border border-border bg-surface p-4 font-mono text-[10px] leading-relaxed">
        <div className="mb-3 flex items-center justify-between border-b border-border pb-2">
          <span className="text-muted">kitchen-pick-place-v2</span>
          <span className="text-muted">48 episodes</span>
        </div>
        <button type="button" className="mb-3 bg-foreground px-3 py-1 text-[9px] font-semibold uppercase tracking-wider text-background">
          Run eval
        </button>
        <div className="space-y-1">
          <div className="flex justify-between">
            <span className="text-muted">policy v0.3.1</span>
            <span className="text-muted">success 72%</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted">policy v0.3.2</span>
            <span className="text-accent-green">success 81% (+9%)</span>
          </div>
        </div>
      </div>
    );
  }

  if (type === "datasets") {
    return (
      <div className="border border-border bg-surface p-4 font-mono text-[10px]">
        <div className="mb-2 text-muted">regression_suite_q2</div>
        <div className="mb-3 space-y-1">
          {[
            { id: "ep_1042", tag: "grasp_fail", src: "fleet" },
            { id: "ep_1043", tag: "collision", src: "sim" },
            { id: "ep_1044", tag: "timeout", src: "fleet" },
          ].map((ep) => (
            <div key={ep.id} className="flex justify-between border border-border px-2 py-1">
              <span>{ep.id}</span>
              <span className="text-muted">{ep.tag} · {ep.src}</span>
            </div>
          ))}
        </div>
        <span className="text-muted">+ promote from production</span>
      </div>
    );
  }

  if (type === "scorers") {
    return (
      <div className="border border-border bg-surface p-4 font-mono text-[10px]">
        <div className="mb-2 flex h-16 items-end gap-0.5">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="flex-1 bg-foreground/20"
              style={{ height: `${30 + Math.sin(i * 0.6) * 25 + i}%` }}
            />
          ))}
        </div>
        <div className="grid grid-cols-2 gap-2 text-muted">
          <span>success_rate 0.81</span>
          <span>collisions 0.3/ep</span>
          <span>avg_cycle 11.9s</span>
          <span>jerk_score 0.94</span>
        </div>
      </div>
    );
  }

  return (
    <div className="border border-border bg-surface p-4 font-mono text-[10px]">
      <div className="flex items-center gap-4">
        <div className="flex-1">
          <p className="mb-1 text-muted">Deploy → Eval → Retrain</p>
          <div className="flex h-1 overflow-hidden rounded-full bg-border">
            <div className="w-1/3 bg-foreground/40" />
            <div className="w-1/3 bg-foreground/60" />
            <div className="w-1/3 bg-accent-green/60" />
          </div>
          <p className="mt-2 text-muted">CI gate: success ≥ 78% ✓</p>
        </div>
      </div>
    </div>
  );
}

export function LabSection() {
  return (
    <section id="evals" className="border-t border-border">
      <div className="relative overflow-hidden border-b border-border px-6 py-20 dot-pattern">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
        <div className="relative mx-auto max-w-[1400px]">
          <p className="font-display text-3xl font-medium md:text-5xl">
            <span className="text-foreground">Evals.</span>{" "}
            <span className="text-muted">
              Systematically measure robot policy quality
            </span>
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#">Get early access</Button>
            <Button href="#" variant="secondary">
              Book a call
            </Button>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1400px]">
        {features.map((feature, index) => (
          <div
            key={feature.fig}
            className={`grid border-b border-border md:grid-cols-2 ${
              index % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div className="border-r border-border p-8 md:p-12">
              <p className="mb-6 text-[10px] uppercase tracking-[0.2em] text-muted">
                {feature.fig}
              </p>
              <FeaturePreview type={feature.preview} />
            </div>
            <div className="flex flex-col justify-center p-8 md:p-12">
              <span className="mb-2 text-[10px] font-medium text-muted">
                {feature.num}
                {feature.title}
              </span>
              <p className="mb-6 text-sm leading-relaxed text-muted">
                {feature.description}
              </p>
              <ul className="mb-8 space-y-2">
                {feature.points.map((point, i) => (
                  <li key={point} className="flex gap-3 text-sm text-foreground/80">
                    <span className="text-muted">{feature.num}.{i + 1}</span>
                    {point}
                  </li>
                ))}
              </ul>
              <div>
                <Button href="#" variant="secondary" className="!text-[10px]">
                  {feature.cta}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
