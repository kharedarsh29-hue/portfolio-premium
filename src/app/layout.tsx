import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NOVA | Digital 3D Experience Agency",
  description:
    "We craft immersive 3D web experiences that captivate audiences, drive engagement, and transform how brands connect with their users.",
  keywords: ["3D web", "web development", "UI/UX design", "Three.js", "digital agency"],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "NOVA | Digital 3D Experience Agency",
    description:
      "We craft immersive 3D web experiences that captivate audiences, drive engagement, and transform how brands connect with their users.",
    type: "website",
    locale: "en_US",
    siteName: "NOVA",
  },
  twitter: {
    card: "summary_large_image",
    title: "NOVA | Digital 3D Experience Agency",
    description:
      "We craft immersive 3D web experiences that captivate audiences, drive engagement, and transform how brands connect with their users.",
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
      className={`${inter.variable} ${outfit.variable}`}
    >
      <body className="min-h-screen bg-background text-foreground antialiased noise-bg">
        {children}
      </body>
    </html>
  );
}
