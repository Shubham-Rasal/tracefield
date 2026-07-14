type RolloutStatus = "success" | "fail";

export function RolloutClip({
  src,
  caption,
  status,
  label,
}: {
  src: string;
  caption: string;
  status: RolloutStatus;
  label?: string;
}) {
  const isSuccess = status === "success";

  return (
    <article className="group overflow-hidden border border-border-light bg-black/40 transition-colors hover:border-foreground/20">
      <div className="relative">
        {label ? (
          <span className="absolute left-3 top-3 z-10 font-mono text-[10px] uppercase tracking-wider text-muted">
            {label}
          </span>
        ) : null}
        <span
          className={`absolute right-3 top-3 z-10 border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider ${
            isSuccess
              ? "border-accent-green/40 bg-accent-green/10 text-accent-green"
              : "border-red-500/40 bg-red-500/10 text-red-400"
          }`}>
          {isSuccess ? "Success" : "Fail"}
        </span>
        <video
          src={src}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="aspect-video w-full bg-black object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>
      <p className="border-t border-border-light px-4 py-3 text-sm text-foreground/90">{caption}</p>
    </article>
  );
}
