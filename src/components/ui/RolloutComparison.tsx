import { RolloutClip } from "@/components/ui/RolloutClip";

type Clip = {
  src: string;
  caption: string;
  status: "success" | "fail";
  label?: string;
};

export function RolloutComparison({
  title,
  description,
  baseline,
  variant,
  footnote,
}: {
  title: string;
  description?: string;
  baseline: Clip;
  variant: Clip;
  footnote?: string;
}) {
  return (
    <div className="border border-border-light bg-black/20 p-5 md:p-6">
      <div className="mb-5 max-w-2xl">
        <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">{title}</h3>
        {description ? (
          <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
        ) : null}
      </div>

      <div className="grid items-stretch gap-4 md:grid-cols-[1fr_auto_1fr]">
        <RolloutClip {...baseline} label={baseline.label ?? "Baseline"} />
        <div className="hidden items-center justify-center md:flex">
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted">vs</span>
        </div>
        <RolloutClip {...variant} label={variant.label ?? "Perturbed"} />
      </div>

      {footnote ? <p className="mt-4 text-center text-xs italic text-muted">{footnote}</p> : null}
    </div>
  );
}
