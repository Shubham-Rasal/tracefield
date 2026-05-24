"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

const fleetCards = [
  { robot: "franka_01", task: "pick_cup", success: "81%", episodes: "1.2k/day", status: "healthy" },
  { robot: "franka_02", task: "pick_cup", success: "76%", episodes: "980/day", status: "healthy" },
  { robot: "ur5_lab", task: "bin_picking", success: "68%", episodes: "420/day", status: "degraded" },
  { robot: "mobile_03", task: "nav_warehouse", success: "94%", episodes: "2.1k/day", status: "healthy" },
  { robot: "mobile_04", task: "nav_warehouse", success: "91%", episodes: "1.8k/day", status: "healthy" },
  { robot: "bimanual_01", task: "assembly", success: "62%", episodes: "310/day", status: "alert" },
];

const ingestFeatures = [
  "ROS 2 & custom SDK ingestion — Stream episodes from sim rollouts and deployed robots with unified schema.",
  "Multimodal storage — Video, depth, proprioception, and trajectory data stored with indexed metadata.",
  "Real-time dashboards — Monitor fleet success rates, collision events, and latency across sites.",
];

const fleetFeatures = [
  "Online scoring rules — Automatically score production episodes as they arrive with your eval scorers.",
  "Failure promotion — One click to add a field failure to your regression benchmark suite.",
  "Alert thresholds — Get notified when fleet metrics drop below configured baselines.",
];

export function ComputeSection() {
  const [view, setView] = useState<"sim" | "fleet">("fleet");

  return (
    <section id="fleet" className="border-t border-border">
      <div className="border-b border-border px-6 py-16">
        <div className="mx-auto max-w-[1400px]">
          <h2 className="font-display text-3xl font-semibold md:text-4xl">
            <span className="text-foreground">Fleet.</span>{" "}
            <span className="text-muted">
              Ingest robot data and monitor deployed policies in production.
            </span>
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#">Get early access</Button>
            <Button href="#" variant="secondary">
              Book a call
            </Button>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2">
        <div className="border-b border-r border-border p-8 md:p-12">
          <p className="mb-2 text-xs uppercase tracking-wider text-muted">Ingestion</p>
          <p className="mb-8 text-sm text-muted">
            Log episodes from Isaac Lab, MuJoCo, ROS 2, or custom robot stacks. One
            schema for sim and real.
          </p>
          <ul className="mb-8 space-y-4">
            {ingestFeatures.map((f, i) => (
              <li key={f} className="flex gap-3 text-sm text-foreground/80">
                <span className="text-muted shrink-0">1.{i + 1}</span>
                {f}
              </li>
            ))}
          </ul>
          <Button href="#" variant="secondary" className="!text-[10px]">
            View SDK docs
          </Button>
        </div>

        <div className="border-b border-border p-8 md:p-12">
          <p className="mb-6 text-[10px] uppercase tracking-[0.2em] text-muted">
            FIG.5
          </p>
          <div className="mb-4 flex gap-2">
            <button
              type="button"
              onClick={() => setView("sim")}
              className={`px-3 py-1.5 text-[10px] uppercase tracking-wider ${
                view === "sim"
                  ? "bg-foreground text-background"
                  : "border border-border text-muted"
              }`}
            >
              Sim
            </button>
            <button
              type="button"
              onClick={() => setView("fleet")}
              className={`px-3 py-1.5 text-[10px] uppercase tracking-wider ${
                view === "fleet"
                  ? "bg-foreground text-background"
                  : "border border-border text-muted"
              }`}
            >
              Fleet
            </button>
          </div>
          <div className="grid max-h-80 grid-cols-2 gap-2 overflow-y-auto">
            {fleetCards.map((item) => (
              <div
                key={item.robot}
                className="border border-border bg-surface p-3 transition-colors hover:border-border-light"
              >
                <div className="mb-1 flex items-center justify-between">
                  <span className="text-[10px] text-muted">{item.robot}</span>
                  <span
                    className={`text-[9px] ${
                      item.status === "healthy"
                        ? "text-accent-green"
                        : item.status === "alert"
                          ? "text-red-400"
                          : "text-yellow-400"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
                <p className="text-sm font-medium">{item.task}</p>
                <p className="mt-1 text-xs font-semibold">{item.success} success</p>
                <p className="mt-2 text-[9px] text-muted">{item.episodes}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2">
        <div className="border-b border-r border-border p-8 md:p-12">
          <p className="mb-2 text-xs uppercase tracking-wider text-muted">
            Production monitoring
          </p>
          <p className="mb-8 text-sm text-muted">
            Score live fleet episodes with the same scorers you use in offline evals.
            Catch regressions before they spread across deployments.
          </p>
          <ul className="mb-8 space-y-4">
            {fleetFeatures.map((f, i) => (
              <li key={f} className="flex gap-3 text-sm text-foreground/80">
                <span className="text-muted shrink-0">1.{i + 1}</span>
                {f}
              </li>
            ))}
          </ul>
          <div className="flex gap-3">
            <Button href="#" variant="secondary" className="!text-[10px]">
              Set up alerts
            </Button>
            <Button href="#" variant="ghost" className="!text-[10px]">
              Book a call
            </Button>
          </div>
        </div>

        <div className="border-b border-border p-8 md:p-12">
          <p className="mb-6 text-[10px] uppercase tracking-[0.2em] text-muted">
            FIG.7
          </p>
          <div className="border border-border bg-surface p-6">
            <input
              type="text"
              placeholder="Filter by robot or task.."
              className="mb-6 w-full border-b border-border bg-transparent pb-2 text-sm text-foreground placeholder:text-muted focus:outline-none"
            />
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-[10px] text-muted">Regression suite</p>
                <p className="font-medium">kitchen-pick-place-v2</p>
                <p className="text-[10px] text-muted">48 episodes · 6 robots</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold">81% → 76%</p>
                <p className="text-xs text-red-400">-5% regression detected</p>
              </div>
            </div>
            <div className="space-y-2 border-t border-border pt-4 text-xs">
              <div className="flex justify-between text-muted">
                <span>Policy v0.3.2 (baseline)</span>
                <span>81% success</span>
              </div>
              <div className="flex justify-between text-muted">
                <span>Policy v0.3.3 (candidate)</span>
                <span>76% success</span>
              </div>
              <div className="flex justify-between text-muted">
                <span>Collisions per episode</span>
                <span>0.3 → 0.8</span>
              </div>
              <div className="flex justify-between text-muted">
                <span>Failed episodes</span>
                <span>11 new failures</span>
              </div>
              <div className="flex justify-between border-t border-border pt-2 font-medium text-red-400">
                <span>CI gate status</span>
                <span>Blocked — merge rejected</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
