"use client";

import { useState } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";

const TILT_DATA = [
  { tilt: 0, success: 1, label: "baseline" },
  { tilt: 5, success: 1, label: "stable" },
  { tilt: 10, success: 1, label: "edge" },
  { tilt: 15, success: 0, label: "breaks" },
  { tilt: 20, success: 0, label: "fails" },
];

export function ProofPillar2() {
  return (
    <section className="border-b border-border-light px-6 py-20">
      <div className="mx-auto max-w-[1200px]">
        <SectionLabel>FIG.2 — Robustness mapping</SectionLabel>
        <h2 className="mt-4 max-w-2xl text-2xl font-medium md:text-4xl">
          A single success number hides the cliff edge. We map it.
        </h2>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
          Real deployments don&apos;t happen under lab-perfect conditions. Lighting shifts,
          cameras get bumped, objects land a few centimeters off. So we don&apos;t stop at one
          number — we sweep each policy across realistic ranges of{" "}
          <strong className="text-foreground/90">lighting, camera angle and position, and object placement</strong>, and chart the exact point where it stops working. Here&apos;s RT-1-X on the close-drawer task: perfectly reliable through <strong className="text-foreground/90">10° of camera tilt</strong>, then it falls off a cliff at 15°. That&apos;s a deployment boundary you&apos;d otherwise discover the expensive way.
        </p>

        <div className="mt-12">
          <CameraTiltChart />
        </div>
      </div>
    </section>
  );
}

export function CameraTiltChart() {
  const [selectedIndex, setSelectedIndex] = useState(2);
  const selected = TILT_DATA[selectedIndex];

  const width = 860;
  const height = 420;
  const margin = { top: 46, right: 42, bottom: 68, left: 70 };
  const plotWidth = width - margin.left - margin.right;
  const plotHeight = height - margin.top - margin.bottom;
  const maxTilt = 20;
  const x = (tilt: number) => margin.left + (tilt / maxTilt) * plotWidth;
  const y = (success: number) => margin.top + (1 - success) * plotHeight;
  const path = TILT_DATA.map((point, index) => {
    const command = index === 0 ? "M" : "L";
    return `${command} ${x(point.tilt)} ${y(point.success)}`;
  }).join(" ");
  const areaPath = `${path} L ${x(20)} ${y(0)} L ${x(0)} ${y(0)} Z`;

  return (
    <figure className="card-surface overflow-hidden rounded-[2rem] bg-white/[0.025]">
      <div className="grid gap-0 lg:grid-cols-[1fr_300px]">
        <div className="min-w-0 p-5 md:p-7">
          <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent-green">
                Robustness sweep
              </p>
              <h3 className="mt-2 text-2xl font-medium tracking-[-0.03em]">
                Close drawer vs. camera tilt
              </h3>
            </div>
            <p className="font-mono text-[11px] uppercase tracking-wider text-muted">
              n = 4 rollouts / level
            </p>
          </div>

          <svg
            role="img"
            aria-label="Interactive line chart showing close drawer success across camera tilt angles"
            viewBox={`0 0 ${width} ${height}`}
            className="h-auto w-full overflow-visible"
          >
            <defs>
              <linearGradient id="tilt-area" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="var(--accent-green)" stopOpacity="0.22" />
                <stop offset="100%" stopColor="var(--accent-green)" stopOpacity="0.02" />
              </linearGradient>
            </defs>

            <rect
              x={margin.left}
              y={margin.top}
              width={plotWidth}
              height={plotHeight}
              rx="18"
              fill="rgba(255,255,255,0.025)"
            />

            {[0, 5, 10, 15, 20].map((tick) => (
              <g key={`x-${tick}`}>
                <line
                  x1={x(tick)}
                  x2={x(tick)}
                  y1={margin.top}
                  y2={margin.top + plotHeight}
                  stroke="rgba(255,255,255,0.08)"
                />
                <text
                  x={x(tick)}
                  y={margin.top + plotHeight + 30}
                  textAnchor="middle"
                  className="fill-muted font-mono text-[13px]"
                >
                  {tick}°
                </text>
              </g>
            ))}

            {[0, 0.5, 1].map((tick) => (
              <g key={`y-${tick}`}>
                <line
                  x1={margin.left}
                  x2={margin.left + plotWidth}
                  y1={y(tick)}
                  y2={y(tick)}
                  stroke="rgba(255,255,255,0.08)"
                />
                <text
                  x={margin.left - 16}
                  y={y(tick) + 4}
                  textAnchor="end"
                  className="fill-muted font-mono text-[13px]"
                >
                  {Math.round(tick * 100)}%
                </text>
              </g>
            ))}

            <rect
              x={x(10)}
              y={margin.top}
              width={x(20) - x(10)}
              height={plotHeight}
              fill="rgba(248,113,113,0.08)"
            />
            <line
              x1={x(12.5)}
              x2={x(12.5)}
              y1={margin.top}
              y2={margin.top + plotHeight}
              stroke="rgba(248,113,113,0.55)"
              strokeDasharray="7 7"
            />
            <text x={x(12.8)} y={margin.top + 24} className="fill-red-300 font-mono text-[12px]">
              failure boundary
            </text>

            <path d={areaPath} fill="url(#tilt-area)" />
            <path d={path} fill="none" stroke="var(--accent-green)" strokeWidth="4" />

            {TILT_DATA.map((point, index) => {
              const isSelected = selectedIndex === index;

              return (
                <circle
                  key={point.tilt}
                  role="button"
                  tabIndex={0}
                  aria-label={`${point.tilt} degrees camera tilt: ${Math.round(
                    point.success * 100,
                  )}% success`}
                  cx={x(point.tilt)}
                  cy={y(point.success)}
                  r={isSelected ? 9 : 6}
                  className="cursor-pointer outline-none"
                  fill={point.success > 0 ? "var(--accent-green)" : "rgb(248 113 113)"}
                  stroke="rgba(255,255,255,0.82)"
                  strokeWidth={isSelected ? 2.5 : 1.5}
                  onMouseEnter={() => setSelectedIndex(index)}
                  onClick={() => setSelectedIndex(index)}
                  onFocus={() => setSelectedIndex(index)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      setSelectedIndex(index);
                    }
                  }}
                />
              );
            })}

            <text
              x={margin.left + plotWidth / 2}
              y={height - 14}
              textAnchor="middle"
              className="fill-foreground font-mono text-[13px]"
            >
              camera tilt from calibrated pose
            </text>
            <text
              x={18}
              y={margin.top + plotHeight / 2}
              textAnchor="middle"
              transform={`rotate(-90 18 ${margin.top + plotHeight / 2})`}
              className="fill-foreground font-mono text-[13px]"
            >
              close-drawer success
            </text>
          </svg>
        </div>

        <aside className="border-t border-border-light p-5 lg:border-l lg:border-t-0 md:p-7">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
            Selected condition
          </p>
          <h4 className="mt-3 text-2xl font-medium tracking-[-0.03em]">
            {selected.tilt}° camera tilt
          </h4>
          <div className="mt-5 rounded-2xl bg-white/[0.04] p-4">
            <p className="font-mono text-[10px] uppercase tracking-wider text-muted">
              Success rate
            </p>
            <p
              className={`mt-2 font-mono text-5xl ${
                selected.success > 0 ? "text-accent-green" : "text-red-400"
              }`}
            >
              {Math.round(selected.success * 100)}%
            </p>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-muted">
            RT-1-X is reliable through 10° of camera tilt, then drops to zero at
            15°. That is the deployment boundary this sweep is meant to expose.
          </p>
          <div className="mt-6 space-y-2">
            {TILT_DATA.map((point, index) => (
              <button
                key={point.tilt}
                type="button"
                onClick={() => setSelectedIndex(index)}
                className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-sm transition-colors ${
                  index === selectedIndex
                    ? "bg-accent-green/15 text-foreground"
                    : "bg-white/[0.03] text-muted hover:bg-white/[0.06] hover:text-foreground"
                }`}
              >
                <span>{point.tilt}° · {point.label}</span>
                <span className="font-mono text-[11px]">
                  {Math.round(point.success * 100)}%
                </span>
              </button>
            ))}
          </div>
        </aside>
      </div>
      <figcaption className="border-t border-border-light px-5 py-4 text-sm text-muted md:px-7">
        Illustrative, n=4 rollouts per level. Hover or select a point to inspect
        the condition.
      </figcaption>
    </figure>
  );
}
