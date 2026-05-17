import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about" className="bg-cream py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:items-center md:gap-16">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg">
          <Image
            src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1200&q=80"
            alt="Barista pouring milk into a latte"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-terracotta">
            Our Story
          </p>
          <h2 className="text-4xl font-semibold leading-tight tracking-tight text-ink md:text-5xl">
            A small place for big quiet.
          </h2>

          <div className="mt-8 space-y-5 text-base leading-relaxed text-ink/75">
            <p>
              Mellow Brew started as a weekend hobby — a single hand grinder, a
              borrowed kettle, and friends who didn&apos;t mind being the test
              audience. Five years later we&apos;re still chasing the same
              feeling: a cup that&apos;s worth slowing down for.
            </p>
            <p>
              We work with small farms across Northern Thailand and a rotating
              cast of partners from Ethiopia and Colombia. Beans are roasted in
              small batches each week so nothing ever sits long on the shelf.
            </p>
            <p>
              The room is small on purpose. Soft music, soft light, room to
              breathe. Bring a book, bring a friend, or bring nothing at all —
              we saved you a seat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
