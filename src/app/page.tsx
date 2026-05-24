import { ComputeSection } from "@/components/sections/ComputeSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Hero } from "@/components/sections/Hero";
import { LabSection } from "@/components/sections/LabSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <LabSection />
        <ComputeSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
