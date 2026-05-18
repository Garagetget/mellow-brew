import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-cream px-6 py-24 text-center">
      <p className="mb-4 text-sm uppercase tracking-[0.3em] text-terracotta">
        404 · Page not found
      </p>
      <h1 className="max-w-2xl text-5xl font-semibold leading-[1.1] tracking-tight text-brown md:text-7xl">
        Lost in the brew?
      </h1>
      <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink/75">
        This page wandered off. Let&apos;s get you back.
      </p>
      <div className="mt-10">
        <Button size="lg" asChild>
          <Link href="/">Back to home</Link>
        </Button>
      </div>
    </main>
  );
}
