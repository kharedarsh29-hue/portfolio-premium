export interface Service {
  id: string
  title: string
  tagline: string
  description: string
  features: string[]
  gradient: string
  icon: string
}

export const services: Service[] = [
  {
    id: "premium-websites",
    title: "Premium Websites",
    tagline: "Digital experiences that captivate",
    description:
      "Award-worthy websites built with cutting-edge tech. From immersive 3D experiences to lightning-fast landing pages — every pixel is intentional.",
    features: [
      "Custom Design",
      "3D Integration",
      "GSAP Animations",
      "CMS Integration",
      "SEO Optimized",
      "Lighthouse 90+",
    ],
    gradient: "from-amber-600 to-orange-500",
    icon: "🌐",
  },
  {
    id: "shopify-stores",
    title: "Shopify Stores",
    tagline: "E-commerce that converts",
    description:
      "High-converting Shopify stores with custom themes, 3D product views, automated workflows, and seamless payment experiences.",
    features: [
      "Custom Themes",
      "3D Products",
      "App Integrations",
      "Automated Orders",
      "Subscription Setup",
      "Migration Support",
    ],
    gradient: "from-emerald-600 to-teal-500",
    icon: "🛍️",
  },
  {
    id: "whatsapp-automation",
    title: "WhatsApp Automation",
    tagline: "Message your customers at scale",
    description:
      "Automated WhatsApp flows for order confirmations, support tickets, broadcast campaigns, and AI-powered conversational chatbots.",
    features: [
      "Auto Replies",
      "Order Updates",
      "Broadcast Campaigns",
      "AI Chatbot",
      "CRM Sync",
      "Analytics Dashboard",
    ],
    gradient: "from-emerald-500 to-green-600",
    icon: "💬",
  },
  {
    id: "instagram-automation",
    title: "Instagram Automation",
    tagline: "Grow your audience on autopilot",
    description:
      "Smart automation for DMs, comments, story interactions, and scheduled posting — all designed to grow your following and engagement.",
    features: [
      "DM Automation",
      "Comment Replies",
      "Story Interactions",
      "Scheduled Posts",
      "Growth Analytics",
      "Hashtag Research",
    ],
    gradient: "from-pink-600 to-rose-500",
    icon: "📸",
  },
  {
    id: "ai-receptionist",
    title: "AI Receptionists",
    tagline: "Never miss a call again",
    description:
      "An AI voice agent that answers calls, books appointments, qualifies leads, and integrates with your calendar — available 24/7.",
    features: [
      "Call Answering",
      "Appointment Booking",
      "Lead Qualification",
      "Calendar Sync",
      "Multi-Language",
      "Analytics",
    ],
    gradient: "from-violet-600 to-purple-500",
    icon: "🤖",
  },
  {
    id: "lead-generation",
    title: "Lead Generation Systems",
    tagline: "Automate your pipeline",
    description:
      "End-to-end lead generation systems that capture, qualify, and nurture leads across multiple channels automatically.",
    features: [
      "Multi-Channel Capture",
      "Auto Qualification",
      "CRM Integration",
      "Email Sequences",
      "SMS Campaigns",
      "Reporting Dashboard",
    ],
    gradient: "from-blue-600 to-cyan-500",
    icon: "📈",
  },
]
