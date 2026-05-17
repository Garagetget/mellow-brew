import Image from "next/image";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section id="top" className="relative h-screen min-h-[640px] w-full">
      <Image
        src="https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=2000&q=80"
        alt="Warmly lit cafe interior with wooden counter"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 mx-auto flex h-full max-w-4xl flex-col items-start justify-center px-6 text-cream">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cream/80">
          Est. 2021 · Bangkok
        </p>
        <h1 className="max-w-3xl text-5xl font-semibold leading-[1.1] tracking-tight md:text-7xl">
          Slow coffee,
          <br />
          warm moments.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/85">
          A quiet corner for single-origin pour-overs, fresh bakes, and
          unhurried mornings — brewed with care, served without a rush.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button size="lg" asChild>
            <a href="#menu">View Menu</a>
          </Button>
          <Button size="lg" variant="light" asChild>
            <a href="#visit">Visit Us</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
