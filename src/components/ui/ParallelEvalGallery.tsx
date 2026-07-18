const TILES = [
  { id: 1, success: true },
  { id: 2, success: true },
  { id: 3, success: false },
  { id: 4, success: true },
  { id: 5, success: true },
  { id: 6, success: false },
  { id: 7, success: true },
  { id: 8, success: true },
];

export function ParallelEvalGallery({ src }: { src: string }) {
  const successCount = TILES.filter((t) => t.success).length;

  return (
    <div className="overflow-hidden border border-border-light">
      <div className="relative">
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-black md:aspect-[21/9]">
          <video
            src={src}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 flex flex-wrap items-end justify-between gap-4 p-5 md:p-6">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
              Parallel evaluation
            </p>
            <p className="mt-2 text-lg font-medium text-foreground">
              {successCount} of {TILES.length} conditions succeed
            </p>
            <p className="mt-1 max-w-md text-sm text-muted">
              Eight lighting presets evaluated simultaneously — failures surface without
              rerunning hardware.
            </p>
          </div>
          <div className="grid grid-cols-4 gap-1.5">
            {TILES.map((tile) => (
              <div
                key={tile.id}
                className={`flex h-8 w-8 items-center justify-center border font-mono text-[10px] ${
                  tile.success
                    ? "border-accent-green/40 bg-accent-green/10 text-accent-green"
                    : "border-red-500/40 bg-red-500/10 text-red-400"
                }`}
              >
                {tile.id}
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className="border-t border-border-light px-4 py-3 font-mono text-[11px] text-muted">
        RT-1-X · lighting sweep · illustrative rollout grid
      </p>
    </div>
  );
}
