"use client";

import { useState } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { StatTile } from "@/components/ui/StatTile";

const TASK_TABLE = [
  { task: "close drawer", real: "0.741", sim: "0.861" },
  { task: "pick coke can", real: "0.760", sim: "0.577" },
  { task: "place apple in drawer", real: "0.407", sim: "0.400" },
  { task: "move near", real: "0.450", sim: "0.343" },
  { task: "open drawer", real: "0.519", sim: "0.290" },
  { task: "spoon on towel", real: "0.000", sim: "0.042" },
  { task: "carrot on plate", real: "0.000", sim: "0.083" },
  { task: "stack cube", real: "0.000", sim: "0.000" },
  { task: "eggplant in basket", real: "0.000", sim: "0.000" },
];

const CHART_POINTS = TASK_TABLE.map((row, index) => ({
  ...row,
  index,
  realValue: Number(row.real),
  simValue: Number(row.sim),
  jitterX: row.task === "stack cube" ? -8 : row.task === "eggplant in basket" ? 8 : 0,
  jitterY: row.task === "stack cube" ? 5 : row.task === "eggplant in basket" ? -5 : 0,
}));

export function ProofPillar1() {
  const [showTable, setShowTable] = useState(false);
  const [showMethodology, setShowMethodology] = useState(false);

  return (
    <section id="proof" className="scroll-mt-20 border-b border-border-light px-6 py-20">
      <div className="mx-auto max-w-[1200px]">
        <SectionLabel>FIG.1 — Sim predicts real</SectionLabel>
        <h2 className="mt-4 max-w-2xl text-2xl font-medium md:text-4xl">
          Our simulator agrees with the real robot.
        </h2>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
          We validated our simulator against <strong className="text-foreground/90">published real-world success rates</strong> across 9 manipulation tasks. RT-1-X&apos;s simulated scores track the real robot with a <strong className="text-foreground/90">Pearson correlation of 0.93</strong>, and a <strong className="text-foreground/90">Mean Maximum Rank Violation of just 0.037</strong> — meaning if you used our simulator alone to decide which policy or checkpoint to ship, you&apos;d essentially never get the ranking wrong.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <StatTile value="r = 0.93" label="Correlation with real robot" sublabel="RT-1-X, 9 tasks" />
          <StatTile value="0.037" label="Ranking fidelity (MMRV)" sublabel="lower = better" />
          <StatTile value="r = 0.86" label="Correlation, all policies pooled" sublabel="18 policy-task pairs" />
        </div>

        <div className="mt-12">
          <SimRealCorrelationChart />
        </div>

        <blockquote className="mt-10 border-l-2 border-accent-green pl-6 text-lg text-foreground/90">
          &ldquo;Rank your checkpoints and predict deployment success without burning a single
          real-robot hour.&rdquo;
        </blockquote>

        <button
          type="button"
          onClick={() => setShowTable(!showTable)}
          className="mt-8 font-mono text-[10px] uppercase tracking-wider text-muted hover:text-foreground"
        >
          {showTable ? "− Hide" : "+ See"} all 9 tasks
        </button>

        {showTable && (
          <div className="mt-4 overflow-x-auto border border-border-light">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-border-light font-mono text-[10px] uppercase tracking-wider text-muted">
                  <th className="px-4 py-3">Task</th>
                  <th className="px-4 py-3">Real-world</th>
                  <th className="px-4 py-3">Our sim</th>
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
        )}

        <button
          type="button"
          onClick={() => setShowMethodology(!showMethodology)}
          className="mt-6 font-mono text-[10px] uppercase tracking-wider text-muted hover:text-foreground"
        >
          {showMethodology ? "− Hide" : "+ How we computed this"}
        </button>

        {showMethodology && (
          <p className="mt-3 max-w-2xl text-xs leading-relaxed text-muted">
            r = 0.93 and MMRV = 0.037 computed from simulated rollout results against
            published real-world numbers (RT-1-X, 9 tasks). Pooled r = 0.86 across 18
            policy-task pairs (RT-1-X + Octo). Per-task table uses the same source.
          </p>
        )}
      </div>
    </section>
  );
}

function SimRealCorrelationChart() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedPoint = CHART_POINTS[selectedIndex];

  const width = 820;
  const height = 500;
  const margin = { top: 44, right: 38, bottom: 70, left: 70 };
  const plotWidth = width - margin.left - margin.right;
  const plotHeight = height - margin.top - margin.bottom;
  const ticks = [0, 0.25, 0.5, 0.75, 1];
  const x = (value: number) => margin.left + value * plotWidth;
  const y = (value: number) => margin.top + (1 - value) * plotHeight;

  return (
    <figure className="card-surface overflow-hidden rounded-[2rem] bg-white/[0.025]">
      <div className="grid gap-0 lg:grid-cols-[1fr_320px]">
        <div className="min-w-0 p-5 md:p-7">
          <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent-green">
                Real-sim correlation
              </p>
              <h3 className="mt-2 text-2xl font-medium tracking-[-0.03em]">
                Task progress scores
              </h3>
            </div>
            <p className="font-mono text-[11px] uppercase tracking-wider text-muted">
              RT-1-X / 9 tasks
            </p>
          </div>

          <svg
            role="img"
            aria-label="Interactive scatter plot comparing real-world and simulated task progress scores"
            viewBox={`0 0 ${width} ${height}`}
            className="h-auto w-full overflow-visible"
          >
            <defs>
              <radialGradient id="selected-point-glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="var(--accent-green)" stopOpacity="0.45" />
                <stop offset="100%" stopColor="var(--accent-green)" stopOpacity="0" />
              </radialGradient>
            </defs>

            <rect
              x={margin.left}
              y={margin.top}
              width={plotWidth}
              height={plotHeight}
              rx="18"
              fill="rgba(255,255,255,0.025)"
            />

            {ticks.map((tick) => (
              <g key={`grid-${tick}`}>
                <line
                  x1={x(tick)}
                  x2={x(tick)}
                  y1={margin.top}
                  y2={margin.top + plotHeight}
                  stroke="rgba(255,255,255,0.08)"
                />
                <line
                  x1={margin.left}
                  x2={margin.left + plotWidth}
                  y1={y(tick)}
                  y2={y(tick)}
                  stroke="rgba(255,255,255,0.08)"
                />
                <text
                  x={x(tick)}
                  y={margin.top + plotHeight + 28}
                  textAnchor="middle"
                  className="fill-muted font-mono text-[13px]"
                >
                  {tick.toFixed(2)}
                </text>
                <text
                  x={margin.left - 16}
                  y={y(tick) + 4}
                  textAnchor="end"
                  className="fill-muted font-mono text-[13px]"
                >
                  {tick.toFixed(2)}
                </text>
              </g>
            ))}

            <line
              x1={x(0)}
              y1={y(0)}
              x2={x(1)}
              y2={y(1)}
              stroke="var(--accent-green)"
              strokeDasharray="8 8"
              strokeOpacity="0.45"
              strokeWidth="2"
            />
            <text
              x={x(0.74)}
              y={y(0.8)}
              className="fill-muted font-mono text-[12px]"
            >
              perfect agreement
            </text>

            {CHART_POINTS.map((point) => {
              const isSelected = point.index === selectedIndex;
              const pointX = x(point.realValue) + point.jitterX;
              const pointY = y(point.simValue) + point.jitterY;

              return (
                <g key={point.task}>
                  {isSelected ? (
                    <circle cx={pointX} cy={pointY} r="24" fill="url(#selected-point-glow)" />
                  ) : null}
                  <circle
                    role="button"
                    tabIndex={0}
                    aria-label={`${point.task}: real ${point.real}, sim ${point.sim}`}
                    cx={pointX}
                    cy={pointY}
                    r={isSelected ? 8 : 6}
                    className="cursor-pointer outline-none transition-opacity"
                    fill={isSelected ? "var(--accent-green)" : "rgba(255,255,255,0.72)"}
                    stroke={isSelected ? "rgba(255,255,255,0.85)" : "rgba(250,115,67,0.55)"}
                    strokeWidth={isSelected ? 2 : 1.5}
                    onMouseEnter={() => setSelectedIndex(point.index)}
                    onClick={() => setSelectedIndex(point.index)}
                    onFocus={() => setSelectedIndex(point.index)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        setSelectedIndex(point.index);
                      }
                    }}
                  />
                </g>
              );
            })}

            <text
              x={margin.left + plotWidth / 2}
              y={height - 14}
              textAnchor="middle"
              className="fill-foreground font-mono text-[13px]"
            >
              real-world normalized progress
            </text>
            <text
              x={18}
              y={margin.top + plotHeight / 2}
              textAnchor="middle"
              transform={`rotate(-90 18 ${margin.top + plotHeight / 2})`}
              className="fill-foreground font-mono text-[13px]"
            >
              simulated normalized progress
            </text>
          </svg>
        </div>

        <aside className="border-t border-border-light p-5 lg:border-l lg:border-t-0 md:p-7">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
            Selected task
          </p>
          <h4 className="mt-3 text-2xl font-medium tracking-[-0.03em]">
            {selectedPoint.task}
          </h4>
          <div className="mt-5 grid grid-cols-2 gap-3">
            <div className="rounded-2xl bg-white/[0.04] p-4">
              <p className="font-mono text-[10px] uppercase tracking-wider text-muted">
                Real
              </p>
              <p className="mt-2 font-mono text-3xl text-foreground">
                {selectedPoint.real}
              </p>
            </div>
            <div className="rounded-2xl bg-white/[0.04] p-4">
              <p className="font-mono text-[10px] uppercase tracking-wider text-muted">
                Sim
              </p>
              <p className="mt-2 font-mono text-3xl text-accent-green">
                {selectedPoint.sim}
              </p>
            </div>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-muted">
            Points near the dashed diagonal indicate simulation and real-world
            progress agree. Large vertical gaps are the tasks to inspect first.
          </p>

          <div className="mt-6 space-y-2">
            {CHART_POINTS.map((point) => (
              <button
                key={point.task}
                type="button"
                onClick={() => setSelectedIndex(point.index)}
                className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-sm transition-colors ${
                  point.index === selectedIndex
                    ? "bg-accent-green/15 text-foreground"
                    : "bg-white/[0.03] text-muted hover:bg-white/[0.06] hover:text-foreground"
                }`}
              >
                <span>{point.task}</span>
                <span className="font-mono text-[11px]">
                  {point.real} / {point.sim}
                </span>
              </button>
            ))}
          </div>
        </aside>
      </div>
      <figcaption className="border-t border-border-light px-5 py-4 text-sm text-muted md:px-7">
        Each point is one task. Hover or select a point to compare real-world and
        simulated normalized progress.
      </figcaption>
    </figure>
  );
}
