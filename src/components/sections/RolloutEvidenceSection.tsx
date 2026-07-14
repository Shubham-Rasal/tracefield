import { SectionLabel } from "@/components/ui/SectionLabel";
import { RolloutComparison } from "@/components/ui/RolloutComparison";
import { ParallelEvalGallery } from "@/components/ui/ParallelEvalGallery";

const ASSET = "/assets/rt1x";

export function RolloutEvidenceSection() {
  return (
    <section id="rollouts" className="scroll-mt-20 border-b border-border-light px-6 py-20">
      <div className="mx-auto max-w-[1200px]">
        <SectionLabel>Rollout evidence</SectionLabel>
        <h2 className="mt-4 max-w-2xl text-2xl font-medium md:text-4xl">
          Watch the failures — not just the headline score.
        </h2>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
          Each clip is a controlled rollout under a specific perturbation. Baseline
          conditions sit beside the exact failure mode, so teams can see what broke
          instead of inferring it from a single success rate.
        </p>

        <div className="mt-12 space-y-8">
          <RolloutComparison
            title="Camera tilt"
            description="Reliable through 10° on close-drawer, then the policy misses the handle."
            baseline={{
              src: `${ASSET}/success_close_drawer_baseline.mp4`,
              caption: "0° tilt — succeeds",
              status: "success",
            }}
            variant={{
              src: `${ASSET}/clip_camera_tilt_15deg.mp4`,
              caption: "15° tilt — fails",
              status: "fail",
            }}
          />

          <RolloutComparison
            title="Lighting"
            description="Dim scenes collapse perception; brighter lighting recovers the task."
            baseline={{
              src: `${ASSET}/success_lighting_1500lux.mp4`,
              caption: "1500 lux (bright) — succeeds",
              status: "success",
            }}
            variant={{
              src: `${ASSET}/clip_lighting_100lux_fails.mp4`,
              caption: "100 lux (very dim) — fails",
              status: "fail",
            }}
          />

          <RolloutComparison
            title="Camera position"
            description="A 10cm shift is enough to break an otherwise reliable pick."
            baseline={{
              src: `${ASSET}/success_pick_coke_can_baseline.mp4`,
              caption: "Calibrated position — succeeds",
              status: "success",
            }}
            variant={{
              src: `${ASSET}/clip_camera_translation_10cm.mp4`,
              caption: "Camera shifted 10cm — fails",
              status: "fail",
            }}
            footnote="Same policy, same task — only the controlled condition changes."
          />
        </div>

        <div className="mt-16">
          <ParallelEvalGallery src={`${ASSET}/hero_parallel_eval_grid.mp4`} />
        </div>

        <p className="mt-8 text-xs leading-relaxed text-muted">
          Lighting scale is an approximate intensity heuristic, not a calibrated photometric
          measurement — useful for comparing brighter vs. dimmer, not certified lux values.
        </p>
      </div>
    </section>
  );
}
