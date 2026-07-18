const TILES = [
  { id: 1, label: "100 lux", success: false },
  { id: 2, label: "300 lux", success: true },
  { id: 3, label: "500 lux", success: true },
  { id: 4, label: "700 lux", success: true },
  { id: 5, label: "900 lux", success: true },
  { id: 6, label: "1100 lux", success: true },
  { id: 7, label: "1300 lux", success: false },
  { id: 8, label: "1500 lux", success: true },
];

type ParallelEvalGalleryProps = {
  src: string;
  compact?: boolean;
};

export function ParallelEvalGallery({ src, compact = false }: ParallelEvalGalleryProps) {
  const successCount = TILES.filter((tile) => tile.success).length;

  return (
    <figure className="card-surface overflow-hidden rounded-[1.5rem] bg-white/[0.025]">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border-light px-4 py-4 md:px-5">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent-green">
            Parallel evaluation
          </p>
          <p className="mt-1 text-sm text-foreground/90">
            Eight lighting presets · same checkpoint · same task
          </p>
        </div>
        <div className="rounded-full border border-border-light bg-black/40 px-3 py-1.5 font-mono text-[11px] text-foreground">
          <span className="text-accent-green">{successCount} pass</span>
          <span className="text-muted"> · </span>
          <span className="text-red-400">{TILES.length - successCount} fail</span>
        </div>
      </div>

      <div className="bg-[#050505] p-3 md:p-4">
        <div
          className={`relative mx-auto w-full overflow-hidden rounded-xl border border-border-light bg-black ${
            compact ? "max-w-md" : "max-w-3xl"
          }`}
        >
          <div className="relative aspect-[5/4] w-full">
            <video
              src={src}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="absolute inset-0 h-full w-full object-contain"
            />
          </div>
        </div>
      </div>

      <figcaption className="border-t border-border-light px-4 py-4 md:px-5">
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {TILES.map((tile) => (
            <div
              key={tile.id}
              className={`flex items-center justify-between rounded-lg border px-3 py-2 ${
                tile.success
                  ? "border-accent-green/25 bg-accent-green/5"
                  : "border-red-500/25 bg-red-500/5"
              }`}
            >
              <span className="font-mono text-[10px] uppercase tracking-wider text-muted">
                {tile.label}
              </span>
              <span
                className={`font-mono text-[10px] uppercase tracking-wider ${
                  tile.success ? "text-accent-green" : "text-red-400"
                }`}
              >
                {tile.success ? "pass" : "fail"}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-4 font-mono text-[11px] text-muted">
          RT-1-X · close drawer · lighting sweep
        </p>
      </figcaption>
    </figure>
  );
}
