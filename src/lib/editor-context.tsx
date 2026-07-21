"use client"

import React, { createContext, useContext, useReducer, useCallback, useEffect, useRef } from "react"
import { projects as defaultProjects } from "@/data/projects"
import { services as defaultServices } from "@/data/services"
import { testimonials as defaultTestimonials } from "@/data/testimonials"
import { automations as defaultAutomations } from "@/data/automations"

export interface StoreItem {
  id: string
  title?: string
  [key: string]: any
}

export interface SectionData {
  label: string
  heading: string
  headingGradient: string
  description?: string
  stats?: { value: string; label: string }[]
  values?: { number: string; title: string; desc: string }[]
  titleLines?: string[]
  steps?: { icon: string; title: string; desc: string }[]
  featuresList?: string[]
  methods?: { label: string; value: string; href: string; icon: string }[]
  serviceOptions?: string[]
  navLinks?: { label: string; href: string }[]
  socialLinks?: { label: string; href: string }[]
  contactInfo?: { label: string; value: string }[]
  ctaPrimary?: { text: string; href: string }
  ctaSecondary?: { text: string; href: string }
  trustedText?: string
  copyright?: string
}

export interface GlobalSettings {
  spacing: number
  containerWidth: number
  borderRadius: number
  primaryColor: string
  accentColor: string
  bgColor: string
  textColor: string
  headingFont: string
  bodyFont: string
  animationSpeed: number
  glassEffect: boolean
  navbarHeight: number
}

export interface WebsiteData {
  global: GlobalSettings
  sections: Record<string, SectionData>
  sectionOrder: string[]
  projects: StoreItem[]
  services: StoreItem[]
  testimonials: StoreItem[]
  automations: StoreItem[]
}

type Action =
  | { type: "UPDATE_SECTION"; sectionId: string; data: Partial<SectionData> }
  | { type: "UPDATE_GLOBAL"; data: Partial<GlobalSettings> }
  | { type: "SET_SECTION_ORDER"; order: string[] }
  | { type: "LOAD_DATA"; data: WebsiteData }
  | { type: "ADD_ITEM"; collection: "projects" | "services" | "testimonials" | "automations"; item: StoreItem }
  | { type: "UPDATE_ITEM"; collection: "projects" | "services" | "testimonials" | "automations"; id: string; data: Partial<StoreItem> }
  | { type: "DELETE_ITEM"; collection: "projects" | "services" | "testimonials" | "automations"; id: string }
  | { type: "REORDER_ITEMS"; collection: "projects" | "services" | "testimonials" | "automations"; from: number; to: number }

function defaultWebsiteData(): WebsiteData {
  return {
    global: {
      spacing: 32,
      containerWidth: 1280,
      borderRadius: 24,
      primaryColor: "#0a0a0c",
      accentColor: "#e85d04",
      bgColor: "#0a0a0c",
      textColor: "#f0efed",
      headingFont: "Plus Jakarta Sans",
      bodyFont: "Inter",
      animationSpeed: 1,
      glassEffect: true,
      navbarHeight: 64,
    },
    sections: {
      hero: {
        label: "Premium Digital Agency",
        heading: "Crafting Digital\nExperiences That\nGrow Businesses.",
        headingGradient: "Grow Businesses.",
        titleLines: ["Crafting Digital", "Experiences That", "Grow Businesses."],
        description: "Premium websites, AI receptionists, and smart automations that turn visitors into clients — on autopilot.",
        ctaPrimary: { text: "View Projects", href: "#portfolio" },
        ctaSecondary: { text: "Book a Call", href: "#contact" },
        trustedText: "Trusted by 50+ businesses",
      },
      about: {
        label: "About",
        heading: "Building digital\nproducts that\ndrive growth.",
        headingGradient: "products",
        description: "I help businesses bridge the gap between stunning design and intelligent automation.\n\nFrom Shopify stores to WhatsApp bots, I combine design thinking with technical execution to deliver solutions that feel premium and perform relentlessly.",
        stats: [
          { value: "50+", label: "Projects Delivered" },
          { value: "35+", label: "Happy Clients" },
          { value: "4+", label: "Years Experience" },
          { value: "200+", label: "Automations Built" },
        ],
        values: [
          { number: "01", title: "Strategy First", desc: "Every project starts with understanding your business, goals, and audience before writing a single line of code." },
          { number: "02", title: "Craft Over Speed", desc: "We don't do templates. Every pixel, interaction, and animation is intentionally designed to create impact." },
          { number: "03", title: "Results Driven", desc: "Beautiful is good. Profitable is better. Every solution we build is engineered to grow your business." },
        ],
      },
      services: {
        label: "Services",
        heading: "Everything you need to\nscale your business.",
        headingGradient: "scale your business",
      },
      portfolio: {
        label: "Portfoluio",

  
        heading: "Selected work\nthat speaks for itself.",
        headingGradient: "work",
      },
      automation: {
        label: "Automation",
        heading: "Systems that\nrun while you sleep.",
        headingGradient: "run while you sleep",
      },
      aiReceptionist: {
        label: "AI Receptionist",
        heading: "Your AI receptionist.\nWorks 24/7. Never complains.",
        headingGradient: "Works 24/7. Never complains.",
        steps: [
          { icon: "📞", title: "Inbound Call", desc: "Customer calls. AI answers instantly — no wait times, no missed calls." },
          { icon: "🧠", title: "AI Understands", desc: "Natural language processing understands intent. Books appointments, answers FAQs, qualifies leads." },
          { icon: "📅", title: "Takes Action", desc: "Creates calendar events, sends confirmation SMS/WhatsApp, logs to CRM in real time." },
          { icon: "📊", title: "Reports", desc: "Detailed analytics: call volume, booking rates, popular inquiries, missed opportunities." },
        ],
        featuresList: [
          "24/7 Availability", "Natural Conversations", "Calendar Sync",
          "Multi-Language", "CRM Integration", "Lead Scoring", "Custom Voice", "SMS Follow-ups",
        ],
      },
      testimonials: {
        label: "Testimonials",
        heading: "What clients say.",
        headingGradient: "say",
      },
      process: {
        label: "Process",
        heading: "How I work — from idea\nto launch.",
        headingGradient: "launch",
      },
      contact: {
        label: "Contact",
        heading: "Ready to build\nsomething great?",
        headingGradient: "great",
        description: "Tell me about your project. I'll get back to you within 24 hours with a plan and a quote.",
        methods: [
          { label: "Email", value: "hello@example.com", href: "mailto:hello@example.com", icon: "✉️" },
          { label: "WhatsApp", value: "+1 (555) 123-4567", href: "https://wa.me/15551234567", icon: "💬" },
          { label: "Instagram", value: "@yourhandle", href: "https://instagram.com", icon: "📸" },
          { label: "LinkedIn", value: "Connect with me", href: "https://linkedin.com", icon: "🔗" },
        ],
        serviceOptions: [
          "Premium Website", "Shopify Store", "WhatsApp Automation",
          "Instagram Automation", "AI Receptionist", "Lead Generation",
          "CRM Automation", "Other",
        ],
      },
      footer: {
        label: "Portfoluio",

  
        heading: "Let's Work Together",
        headingGradient: "great",
        description: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.",
        navLinks: [
          { label: "Home", href: "#hero" },
          { label: "Work", href: "#portfolio" },
          { label: "Services", href: "#services" },
          { label: "Contact", href: "#contact" },
        ],
        socialLinks: [
          { label: "Instagram", href: "#" },
          { label: "LinkedIn", href: "#" },
          { label: "WhatsApp", href: "#" },
          { label: "Email", href: "mailto:hello@example.com" },
        ],
        contactInfo: [
          { label: "Email", value: "hello@example.com" },
          { label: "Phone", value: "+1 (555) 123-4567" },
          { label: "Status", value: "Available for projects" },
        ],
        copyright: "All rights reserved.",
      },
    },
    sectionOrder: ["hero", "about", "services", "portfolio", "automation", "aiReceptionist", "testimonials", "process", "contact", "footer"],
    projects: defaultProjects,
    services: defaultServices,
    testimonials: defaultTestimonials,
    automations: defaultAutomations,
  }
}

function reducer(state: WebsiteData, action: Action): WebsiteData {
  switch (action.type) {
    case "UPDATE_SECTION":
      return {
        ...state,
        sections: {
          ...state.sections,
          [action.sectionId]: { ...state.sections[action.sectionId], ...action.data },
        },
      }
    case "UPDATE_GLOBAL":
      return { ...state, global: { ...state.global, ...action.data } }
    case "SET_SECTION_ORDER":
      return { ...state, sectionOrder: action.order }
    case "LOAD_DATA":
      return action.data
    case "ADD_ITEM": {
      const col = action.collection
      return { ...state, [col]: [...state[col], action.item] }
    }
    case "UPDATE_ITEM": {
      const col = action.collection
      return { ...state, [col]: state[col].map((item) => (item.id === action.id ? { ...item, ...action.data } : item)) }
    }
    case "DELETE_ITEM": {
      const col = action.collection
      return { ...state, [col]: state[col].filter((item) => item.id !== action.id) }
    }
    case "REORDER_ITEMS": {
      const col = action.collection
      const items = [...state[col]]
      const [moved] = items.splice(action.from, 1)
      items.splice(action.to, 0, moved)
      return { ...state, [col]: items }
    }
    default:
      return state
  }
}

function loadFromStorage(): WebsiteData {
  try {
    const saved = localStorage.getItem("website-data")
    if (saved) {
      const parsed = JSON.parse(saved)
      const defaults = defaultWebsiteData()
      return { ...defaults, ...parsed, sections: { ...defaults.sections, ...parsed.sections } }
    }
  } catch {}
  return defaultWebsiteData()
}

interface EditorContextValue {
  data: WebsiteData
  dispatch: React.Dispatch<Action>
  isEditing: boolean
  setIsEditing: (v: boolean) => void
  selectedSection: string | null
  setSelectedSection: (id: string | null) => void
  save: () => void
  hasUnsaved: boolean
  images: Record<string, string>
  setImage: (key: string, dataUrl: string) => void
}

const EditorContext = createContext<EditorContextValue | null>(null)

export function EditorProvider({ children }: { children: React.ReactNode }) {
  const [data, dispatch] = useReducer(reducer, undefined, loadFromStorage)
  const [isEditing, setIsEditing] = React.useState(false)
  const [selectedSection, setSelectedSection] = React.useState<string | null>(null)
  const [hasUnsaved, setHasUnsaved] = React.useState(false)
  const [images, setImages] = React.useState<Record<string, string>>({})
  const initialized = useRef(false)

  useEffect(() => {
    try {
      const saved = localStorage.getItem("website-images")
      if (saved) setImages(JSON.parse(saved))
    } catch {}
    initialized.current = true
  }, [])

  useEffect(() => {
    if (initialized.current) setHasUnsaved(true)
  }, [data])

  const save = useCallback(() => {
    try {
      const { global, sections, sectionOrder, projects, services, testimonials, automations } = data
      localStorage.setItem("website-data", JSON.stringify({ global, sections, sectionOrder, projects, services, testimonials, automations }))
      localStorage.setItem("website-images", JSON.stringify(images))
      setHasUnsaved(false)
    } catch (e) {
      console.error("Save failed:", e)
    }
  }, [data, images])

  const setImage = useCallback((key: string, dataUrl: string) => {
    setImages((prev) => ({ ...prev, [key]: dataUrl }))
  }, [])

  return (
    <EditorContext.Provider value={{
      data, dispatch,
      isEditing, setIsEditing,
      selectedSection, setSelectedSection,
      save, hasUnsaved,
      images, setImage,
    }}>
      {children}
    </EditorContext.Provider>
  )
}

export function useEditor() {
  const ctx = useContext(EditorContext)
  if (!ctx) throw new Error("useEditor must be used within EditorProvider")
  return ctx
}
