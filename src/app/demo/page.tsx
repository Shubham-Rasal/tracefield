import type { Metadata } from "next";
import { DemoHero } from "@/components/sections/DemoHero";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { ProofPillar1 } from "@/components/sections/ProofPillar1";
import { ProofPillar2 } from "@/components/sections/ProofPillar2";
import { ProofPillar3 } from "@/components/sections/ProofPillar3";
import { RolloutEvidenceSection } from "@/components/sections/RolloutEvidenceSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "RT-1-X Demo — Tracefield",
  description:
    "Full worked example: sim-validated robot policy evaluation on RT-1-X. r = 0.93 correlation with real-world results, robustness mapping, and honest failure detection.",
};

export default function DemoPage() {
  return (
    <>
      <Header />
      <main>
        <DemoHero />
        <ProblemSection />
        <ProofPillar1 />
        <ProofPillar2 />
        <ProofPillar3 />
        <RolloutEvidenceSection />
      </main>
      <Footer />
    </>
  );
}
