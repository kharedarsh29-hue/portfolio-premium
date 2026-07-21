import type { Metadata } from "next"
import { Inter, Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Portfoluio | Premium Websites, Automations & AI",
  description:
    "Crafting digital experiences that grow businesses. Premium websites, Shopify stores, AI receptionists, WhatsApp & Instagram automations.",
  openGraph: {
    title: "Portfoluio | Premium Websites, Automations & AI",
    description:
      "Crafting digital experiences that grow businesses. Premium websites, Shopify stores, AI receptionists, WhatsApp & Instagram automations.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jakarta.variable} dark`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-bg-primary text-text-primary font-body antialiased">
        {children}
      </body>
    </html>
  )
}
