export function ProblemSection() {
  return (
    <section id="problem" className="scroll-mt-20 border-y border-border-light bg-black px-6 py-10">
      <div className="mx-auto max-w-[1200px]">
        <p className="font-mono text-sm leading-relaxed text-muted md:text-base">
          Every policy deploy today costs real robot hours. Teams ship checkpoints based on
          lab success rates — then discover lighting shifts, camera bumps, and placement
          variance on hardware. Tracefield evaluates policies offline, maps the exact
          operating envelope, and ranks checkpoints before a single real-robot hour is spent.
        </p>
      </div>
    </section>
  );
}
