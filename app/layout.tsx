import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mellow-brew.vercel.app"),
  title: "Mellow Brew — Slow coffee, warm moments.",
  description:
    "A neighborhood cafe in Bangkok serving slow-brewed coffee and quiet mornings.",
  keywords: [
    "Mellow Brew",
    "Bangkok cafe",
    "specialty coffee",
    "slow coffee",
    "neighborhood cafe",
    "coffee shop Bangkok",
    "pour over",
    "espresso",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mellow-brew.vercel.app",
    siteName: "Mellow Brew",
    title: "Mellow Brew — Slow coffee, warm moments.",
    description:
      "A neighborhood cafe in Bangkok serving slow-brewed coffee and quiet mornings.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mellow Brew — Slow coffee, warm moments.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mellow Brew — Slow coffee, warm moments.",
    description:
      "A neighborhood cafe in Bangkok serving slow-brewed coffee and quiet mornings.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink">
        {children}
      </body>
    </html>
  );
}
