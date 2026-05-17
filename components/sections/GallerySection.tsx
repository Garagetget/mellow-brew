import Image from "next/image";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80",
    alt: "Latte art in a white cup",
  },
  {
    src: "https://images.unsplash.com/photo-1442975631115-c4f7b05b8a2c?auto=format&fit=crop&w=900&q=80",
    alt: "Cafe counter with pastries",
  },
  {
    src: "https://images.unsplash.com/photo-1494314671902-399b18174975?auto=format&fit=crop&w=900&q=80",
    alt: "Pour-over coffee being brewed",
  },
  {
    src: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=900&q=80",
    alt: "Cafe seating area with soft light",
  },
  {
    src: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=900&q=80",
    alt: "Espresso machine portafilter",
  },
  {
    src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=900&q=80",
    alt: "Wooden table with coffee and book",
  },
];

export function GallerySection() {
  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-terracotta">
            The Room
          </p>
          <h2 className="text-4xl font-semibold leading-tight tracking-tight text-ink md:text-5xl">
            A look around.
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
          {photos.map((photo) => (
            <div
              key={photo.src}
              className="relative aspect-square w-full overflow-hidden rounded-lg"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 768px) 33vw, 50vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
