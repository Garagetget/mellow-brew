import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";

type MenuItem = {
  name: string;
  description: string;
  price: number;
  image: string;
};

const items: MenuItem[] = [
  {
    name: "Pour Over",
    description:
      "Single-origin beans, hand-poured over a paper filter for a clean, bright cup.",
    price: 130,
    image:
      "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Iced Latte",
    description:
      "Double-shot espresso poured over cold milk and slow-melting ice cubes.",
    price: 110,
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Cappuccino",
    description:
      "A balanced shot under a dense, velvety foam — small but mighty.",
    price: 100,
    image:
      "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Cold Brew",
    description:
      "Steeped 18 hours for a smooth, low-acid coffee that's gentle on the palate.",
    price: 120,
    image:
      "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Butter Croissant",
    description:
      "Laminated by hand, baked each morning until the layers shatter.",
    price: 85,
    image:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Banana Bread",
    description:
      "Warm, lightly spiced, and just sweet enough — a friend to any cup.",
    price: 95,
    image:
      "https://images.unsplash.com/photo-1605286978633-2dec93ff88a2?auto=format&fit=crop&w=900&q=80",
  },
];

export function MenuSection() {
  return (
    <section id="menu" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-terracotta">
            The Menu
          </p>
          <h2 className="text-4xl font-semibold leading-tight tracking-tight text-ink md:text-5xl">
            A short list, done well.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink/65">
            Six things we make every day — nothing flashy, nothing rushed.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <Card key={item.name} className="group flex flex-col">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <CardContent className="flex flex-1 flex-col gap-2 p-6">
                <div className="flex items-baseline justify-between gap-3">
                  <CardTitle>{item.name}</CardTitle>
                  <span className="text-sm font-medium text-terracotta whitespace-nowrap">
                    ฿{item.price}
                  </span>
                </div>
                <CardDescription>{item.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
