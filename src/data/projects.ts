export interface Project {
  id: string
  title: string
  industry: string
  description: string
  services: string[]
  technologies: string[]
  image: string
  url?: string
  video?: string
  featured: boolean
}

export const projects: Project[] = [
  {
    id: "nmk-fintech",
    title: "NMK Fintech",
    industry: "Finance",
    description:
      "A comprehensive loan distribution platform connecting users with 100+ banks and NBFCs. Features loan comparison, EMI calculators, credit score guides, and a streamlined application process for home loans, business loans, and personal loans.",
    services: ["Website", "Lead Generation", "CRM Integration"],
    technologies: ["Next.js", "Loan Calculator", "Lead Forms", "Analytics"],
    image: "/projects/nmk-fintech.jpg",
    url: "https://nmkfintech.com",
    featured: true,
  },
  {
    id: "sahibji-travels",
    title: "Sahib Ji Tour & Travels",
    industry: "Travel & Transportation",
    description:
      "A premium vehicle rental platform offering cars, buses, and travellers across India. Features fleet showcase, online booking, instant quotes, and 24/7 customer support for weddings, corporate events, and long-distance travel.",
    services: ["Website", "Booking System", "Lead Capture"],
    technologies: ["Next.js", "Payment Gateway", "Booking Engine", "Google Maps"],
    image: "/projects/sahibji-travels.jpg",
    url: "https://sahibjitourandtravels.com",
    featured: true,
  },
]
