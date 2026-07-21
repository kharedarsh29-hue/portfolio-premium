export interface Automation {
  id: string
  title: string
  description: string
  image: string
  category: "whatsapp" | "instagram" | "crm" | "leads" | "workflow"
  tags: string[]
}

export const automations: Automation[] = [
  {
    id: "whatsapp-order-flow",
    title: "WhatsApp Order & Delivery Flow",
    description:
      "Automated order confirmation, real-time delivery tracking, and proactive customer updates — all through WhatsApp. Integrates with any e-commerce platform.",
    image: "/automations/whatsapp-order-flow.jpg",
    category: "whatsapp",
    tags: ["WhatsApp API", "E-Commerce", "Notifications"],
  },
  {
    id: "instagram-dm-bot",
    title: "Instagram DM Booking Bot",
    description:
      "AI-powered DM bot that answers inquiries, books appointments, and sends automated follow-ups — all within Instagram DMs.",
    image: "/automations/instagram-dm-bot.jpg",
    category: "instagram",
    tags: ["Instagram API", "AI Chatbot", "Booking"],
  },
  {
    id: "n8n-crm-sync",
    title: "n8n CRM Sync & Lead Routing",
    description:
      "Multi-platform lead capture with automatic CRM enrichment, scoring, and routing to the right team member via n8n workflows.",
    image: "/automations/n8n-crm-sync.jpg",
    category: "workflow",
    tags: ["n8n", "CRM", "Lead Routing", "Automation"],
  },
  {
    id: "zapier-email-sequence",
    title: "Zapier Email & SMS Sequences",
    description:
      "Automated multi-channel nurture sequences triggered by user behavior — email, SMS, and WhatsApp follow-ups in perfect sync.",
    image: "/automations/zapier-email-sequence.jpg",
    category: "leads",
    tags: ["Zapier", "Email", "SMS", "Lead Nurture"],
  },
  {
    id: "instagram-comment-auto",
    title: "Instagram Comment Auto-Reply",
    description:
      "Smart comment automation that detects keywords, answers FAQs, and engages with your audience automatically under every post.",
    image: "/automations/instagram-comment-auto.jpg",
    category: "instagram",
    tags: ["Instagram API", "NLP", "Engagement"],
  },
  {
    id: "make-lead-capture",
    title: "Make.com Lead Capture System",
    description:
      "Complete lead capture system connecting website forms, Facebook ads, and landing pages into one automated pipeline.",
    image: "/automations/make-lead-capture.jpg",
    category: "workflow",
    tags: ["Make.com", "Lead Capture", "Multi-Channel"],
  },
]
