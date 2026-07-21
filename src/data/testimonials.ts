export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  avatar?: string
  video?: string
  content: string
  rating: number
  project: string
}

export const testimonials: Testimonial[] = [
  {
    id: "sarah-j",
    name: "Sarah Johnson",
    role: "CEO",
    company: "Luxe & Co.",
    content:
      "He transformed our online store completely. The 3D product viewer increased conversions by 40%, and the WhatsApp automation saved our support team 20+ hours per week. Absolutely worth every rupee.",
    rating: 5,
    project: "Shopify Store + WhatsApp Automation",
  },
  {
    id: "marcus-c",
    name: "Marcus Chen",
    role: "Founder",
    company: "Urban Realty Group",
    content:
      "The AI receptionist handles all our inbound calls flawlessly. It books viewings, answers detailed questions about properties, and follows up automatically. It's like having a full-time assistant without the salary.",
    rating: 5,
    project: "AI Receptionist + Website",
  },
  {
    id: "priya-p",
    name: "Priya Patel",
    role: "Wellness Coach",
    company: "FitNest",
    content:
      "Instagram automation grew my audience by 300% in just two months. DMs, comments, story replies — everything runs on autopilot. I finally have time to focus on my clients instead of social media.",
    rating: 5,
    project: "Instagram Automation",
  },
  {
    id: "alex-r",
    name: "Alex Rivera",
    role: "Owner",
    company: "BistroAI",
    content:
      "Our new website doubled online orders. The AI receptionist books reservations 24/7 and integrates directly with our POS. We haven't missed a single call since launch. Best investment we've made.",
    rating: 5,
    project: "Website + AI Receptionist",
  },
  {
    id: "emma-w",
    name: "Emma Watson",
    role: "Creative Director",
    company: "Creativ Studio",
    content:
      "The 3D portfolio he built for our agency won us two awards. The animations are buttery smooth, the CMS makes updates effortless, and the lead gen system brings us qualified clients every week.",
    rating: 5,
    project: "3D Website + Lead Generation",
  },
]
