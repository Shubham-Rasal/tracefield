const ASSET = "/assets/rt1x";

const RUN_STATS = [
  { value: "1,024", label: "rollouts per sweep" },
  { value: "4", label: "perturbation axes" },
  { value: "12 min", label: "full eval runtime" },
];

export function FeatureParallelPreview() {
  return (
    <div className="mt-auto space-y-4 pt-6">
      <div className="grid grid-cols-3 gap-2">
        {RUN_STATS.map((stat) => (
          <div key={stat.label} className="rounded-xl border border-border-light bg-white/[0.03] px-3 py-3">
            <p className="font-mono text-lg text-foreground">{stat.value}</p>
            <p className="mt-1 font-mono text-[9px] uppercase tracking-wider text-muted">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      <div className="overflow-hidden rounded-2xl border border-border-light bg-[#050505] p-2">
        <div className="relative aspect-[5/4] w-full overflow-hidden rounded-xl bg-black">
          <video
            src={`${ASSET}/hero_parallel_eval_grid.mp4`}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 h-full w-full object-contain"
          />
        </div>
        <div className="flex items-center justify-between px-2 py-2.5">
          <p className="font-mono text-[10px] uppercase tracking-wider text-muted">
            8 lighting presets in parallel
          </p>
          <p className="font-mono text-[10px] text-accent-green">6 pass · 2 fail</p>
        </div>
      </div>
    </div>
  );
}

export function FeatureFailurePreview() {
  const clips = [
    {
      src: `${ASSET}/success_close_drawer_baseline.mp4`,
      label: "0° camera tilt",
      result: "pass",
      tone: "success" as const,
    },
    {
      src: `${ASSET}/clip_camera_tilt_15deg.mp4`,
      label: "15° camera tilt",
      result: "fail",
      tone: "fail" as const,
    },
  ];

  return (
    <div className="mt-auto space-y-4 pt-6">
      <div className="grid gap-3 sm:grid-cols-2">
        {clips.map((clip) => (
          <div
            key={clip.label}
            className="overflow-hidden rounded-2xl border border-border-light bg-black/40"
          >
            <div className="relative aspect-[5/4] w-full overflow-hidden bg-black">
              <video
                src={clip.src}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="absolute inset-0 h-full w-full object-contain"
              />
              <span
                className={`absolute right-2 top-2 border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider ${
                  clip.tone === "success"
                    ? "border-accent-green/40 bg-accent-green/10 text-accent-green"
                    : "border-red-500/40 bg-red-500/10 text-red-400"
                }`}
              >
                {clip.result}
              </span>
            </div>
            <p className="border-t border-border-light px-3 py-2.5 text-xs text-foreground/90">
              Close drawer · {clip.label}
            </p>
          </div>
        ))}
      </div>
      <p className="text-xs leading-relaxed text-muted">
        Same policy, same task — only the controlled perturbation changes. Tracefield flags
        the exact rollout where behavior breaks.
      </p>
    </div>
  );
}
