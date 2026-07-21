"use client"

import dynamic from "next/dynamic"
import Navbar from "@/components/layout/Navbar"
import Hero from "@/components/sections/Hero"
import About from "@/components/sections/About"
import Services from "@/components/sections/Services"
import Portfolio from "@/components/sections/Portfolio"
import AutomationShowcase from "@/components/sections/AutomationShowcase"
import AIReceptionist from "@/components/sections/AIReceptionist"
import Testimonials from "@/components/sections/Testimonials"
import Process from "@/components/sections/Process"
import Contact from "@/components/sections/Contact"
import Footer from "@/components/layout/Footer"

const SmoothScroll = dynamic(
  () => import("@/components/layout/SmoothScroll"),
  { ssr: false }
)

const Cursor = dynamic(() => import("@/components/layout/Cursor"), {
  ssr: false,
})

export default function Home() {
  return (
    <>
      <Cursor />
      <SmoothScroll>
        <div className="grain-overlay" />
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <AutomationShowcase />
        <AIReceptionist />
        <Testimonials />
        <Process />
        <Contact />
        <Footer />
      </SmoothScroll>
    </>
  )
}
