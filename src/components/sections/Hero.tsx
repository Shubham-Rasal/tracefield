import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-20">
      <Image
        src="https://images.unsplash.com/photo-1565514020179-026b92b78982?q=80&w=2000&auto=format&fit=crop"
        alt=""
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-background" />
      <div className="absolute inset-0 hero-glow opacity-40" />

      <div className="relative mx-auto flex min-h-[calc(100vh-5rem)] max-w-[1400px] flex-col justify-end px-6 pb-12">
        <div className="max-w-3xl animate-fade-up">
          <h1 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
            Eval-First
            <br />
            Observability for Robotics
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
            Measure whether your robot policies are actually improving. Run evals on
            episodes, score with custom metrics, and turn field failures into regression
            tests.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#">Get early access</Button>
            <Button href="#" variant="secondary">
              Book a call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
