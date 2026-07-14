export function StatTile({
  value,
  label,
  sublabel,
}: {
  value: string;
  label: string;
  sublabel?: string;
}) {
  return (
    <div className="card-surface bg-white/[0.02] p-6">
      <p className="font-mono text-3xl font-medium text-foreground md:text-4xl">{value}</p>
      <p className="mt-2 text-sm text-foreground/90">{label}</p>
      {sublabel && <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-muted">{sublabel}</p>}
    </div>
  );
}
