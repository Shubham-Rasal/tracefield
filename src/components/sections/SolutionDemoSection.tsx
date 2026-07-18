"use client";

import { useState } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { StatTile } from "@/components/ui/StatTile";
import { RolloutComparison } from "@/components/ui/RolloutComparison";
import { ParallelEvalGallery } from "@/components/ui/ParallelEvalGallery";
import { SimRealCorrelationChart, TASK_TABLE } from "@/components/sections/ProofPillar1";
import { CameraTiltChart } from "@/components/sections/ProofPillar2";

const ASSET = "/assets/rt1x";

const TABS = [
  {
    id: "rank",
    label: "Rank policies",
    summary: "Simulated scores track real-world task progress with r = 0.93.",
  },
  {
    id: "robustness",
    label: "Map robustness",
    summary: "Sweep camera, lighting, and placement to find the cliff edge.",
  },
  {
    id: "failures",
    label: "Review failures",
    summary: "Watch controlled rollouts where behavior breaks — not just the headline score.",
  },
] as const;

type TabId = (typeof TABS)[number]["id"];

export function SolutionDemoSection() {
  const [activeTab, setActiveTab] = useState<TabId>("failures");
  const [showTable, setShowTable] = useState(false);

  return (
    <section id="demo" className="scroll-mt-20 border-y border-border-light px-6 py-20 md:py-28">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <SectionLabel>Tracefield eval suite</SectionLabel>
            <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
              Evaluate robot policies before the lab.
            </h2>
            <p className="mt-5 max-w-lg text-pretty text-sm leading-relaxed text-muted md:text-base">
              Tracefield reconstructs your scene, runs thousands of parallel rollouts, and
              returns rankings, robustness maps, and failure clips your team can act on.
              This demo walks through the RT-1-X worked example.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`rounded-full border px-4 py-2 font-mono text-[10px] uppercase tracking-[0.14em] transition-colors ${
                    activeTab === tab.id
                      ? "border-accent-green bg-accent-green/15 text-accent-green"
                      : "border-border-light text-muted hover:border-accent-green/40 hover:text-foreground"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <p className="mt-5 text-sm leading-relaxed text-muted">
              {TABS.find((tab) => tab.id === activeTab)?.summary}
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <StatTile value="r = 0.93" label="Real-sim correlation" sublabel="9 tasks" />
              <StatTile value="10°" label="Reliable camera tilt" sublabel="close drawer" />
              <StatTile value="1000s" label="Parallel rollouts" sublabel="per eval run" />
            </div>
          </div>

          <div className="min-w-0">
            {activeTab === "rank" ? (
              <div>
                <SimRealCorrelationChart />
                <button
                  type="button"
                  onClick={() => setShowTable(!showTable)}
                  className="mt-6 font-mono text-[10px] uppercase tracking-wider text-muted hover:text-foreground"
                >
                  {showTable ? "− Hide" : "+ See"} all 9 tasks
                </button>
                {showTable ? (
                  <div className="mt-4 overflow-x-auto rounded-2xl border border-border-light">
                    <table className="w-full text-left text-sm">
                      <thead>
                        <tr className="border-b border-border-light font-mono text-[10px] uppercase tracking-wider text-muted">
                          <th className="px-4 py-3">Task</th>
                          <th className="px-4 py-3">Real-world</th>
                          <th className="px-4 py-3">Tracefield sim</th>
                        </tr>
                      </thead>
                      <tbody>
                        {TASK_TABLE.map((row) => (
                          <tr key={row.task} className="border-b border-border-light last:border-0">
                            <td className="px-4 py-3">{row.task}</td>
                            <td className="px-4 py-3 font-mono">{row.real}</td>
                            <td className="px-4 py-3 font-mono">{row.sim}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : null}
              </div>
            ) : null}

            {activeTab === "robustness" ? (
              <div>
                <CameraTiltChart />
                <p className="mt-5 text-sm leading-relaxed text-muted">
                  RT-1-X stays reliable through 10° of camera tilt on close-drawer, then drops
                  to zero at 15°. That deployment boundary is what Tracefield is designed to
                  expose before hardware time is spent.
                </p>
              </div>
            ) : null}

            {activeTab === "failures" ? (
              <div className="space-y-6">
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
                <ParallelEvalGallery src={`${ASSET}/hero_parallel_eval_grid.mp4`} />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
