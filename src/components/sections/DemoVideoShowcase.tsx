import { ParallelEvalGallery } from "@/components/ui/ParallelEvalGallery";

const ASSET = "/assets/rt1x";

export function DemoVideoShowcase() {
  return (
    <section className="border-b border-border-light px-6 py-10 md:py-14">
      <div className="mx-auto max-w-[1200px]">
        <ParallelEvalGallery src={`${ASSET}/hero_parallel_eval_grid.mp4`} />
      </div>
    </section>
  );
}
