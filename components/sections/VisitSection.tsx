type IconProps = React.SVGProps<SVGSVGElement>;

const MapPin = (props: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.75}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const Clock = (props: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.75}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

const Instagram = (props: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.75}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
  </svg>
);

const Facebook = (props: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.75}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3Z" />
  </svg>
);

const hours = [
  { day: "Mon – Fri", time: "7:30 — 18:00" },
  { day: "Saturday", time: "8:00 — 19:00" },
  { day: "Sunday", time: "8:00 — 17:00" },
];

export function VisitSection() {
  return (
    <section id="visit" className="bg-white py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:gap-16">
        <div className="relative aspect-square w-full overflow-hidden rounded-lg border border-brown/10 md:aspect-auto">
          <iframe
            title="Mellow Brew location on Google Maps"
            src="https://www.google.com/maps?q=13.7563,100.5018&z=15&output=embed"
            className="h-full w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>

        <div className="flex flex-col justify-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-terracotta">
            Come Say Hi
          </p>
          <h2 className="text-4xl font-semibold leading-tight tracking-tight text-ink md:text-5xl">
            Find us in Bangkok.
          </h2>

          <div className="mt-8 space-y-6 text-base text-ink/80">
            <div className="flex items-start gap-3">
              <MapPin
                className="mt-1 h-5 w-5 shrink-0 text-terracotta"
                aria-hidden
              />
              <div>
                <p className="font-medium text-ink">42 Soi Sukhumvit 24</p>
                <p className="text-ink/65">Khlong Tan, Khlong Toei,</p>
                <p className="text-ink/65">Bangkok 10110</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock
                className="mt-1 h-5 w-5 shrink-0 text-terracotta"
                aria-hidden
              />
              <ul className="space-y-1">
                {hours.map((h) => (
                  <li key={h.day} className="flex gap-6 text-sm">
                    <span className="w-24 font-medium text-ink">{h.day}</span>
                    <span className="text-ink/65">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 flex gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-brown/20 text-ink/70 transition-colors hover:border-brown/40 hover:text-ink"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-brown/20 text-ink/70 transition-colors hover:border-brown/40 hover:text-ink"
            >
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
