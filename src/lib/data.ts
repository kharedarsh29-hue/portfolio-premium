import { NavLink, Feature, ShowcaseItem, Testimonial, Stat } from "@/types";

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#features" },
  { label: "Work", href: "#showcase" },
  { label: "Contact", href: "#contact" },
];

export const stats: Stat[] = [
  { value: 150, suffix: "+", label: "Projects Delivered" },
  { value: 50, suffix: "+", label: "Happy Clients" },
  { value: 8, suffix: "+", label: "Years Experience" },
  { value: 99, suffix: "%", label: "Client Satisfaction" },
];

export const features: Feature[] = [
  {
    icon: "🚀",
    title: "3D Web Experiences",
    description: "Immersive 3D environments built with Three.js and WebGL that captivate and engage your audience.",
    gradient: "from-blue-500 to-purple-500",
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    description: "Pixel-perfect interfaces designed with cutting-edge trends and deep user psychology research.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: "⚡",
    title: "Performance",
    description: "Lightning-fast load times with optimized assets, lazy loading, and top-tier Core Web Vitals scores.",
    gradient: "from-pink-500 to-cyan-500",
  },
  {
    icon: "🧠",
    title: "AI Integration",
    description: "Smart features powered by machine learning to create personalized, intelligent user experiences.",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: "📱",
    title: "Responsive Design",
    description: "Flawless experiences across every device with adaptive layouts and touch-optimized interactions.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: "🔒",
    title: "Enterprise Security",
    description: "Bank-grade security protocols, encrypted data transmission, and SOC 2 compliant infrastructure.",
    gradient: "from-purple-500 to-blue-500",
  },
];

export const showcaseItems: ShowcaseItem[] = [
  {
    id: 1,
    title: "Cosmic Dashboard",
    category: "Web App",
    image: "/images/placeholder-1.svg",
    color: "#6366f1",
  },
  {
    id: 2,
    title: "Neo Bank",
    category: "FinTech",
    image: "/images/placeholder-2.svg",
    color: "#ec4899",
  },
  {
    id: 3,
    title: "Quantum Analytics",
    category: "SaaS",
    image: "/images/placeholder-3.svg",
    color: "#06b6d4",
  },
  {
    id: 4,
    title: "Aura E-Commerce",
    category: "Retail",
    image: "/images/placeholder-1.svg",
    color: "#a78bfa",
  },
  {
    id: 5,
    title: "Vertex AR",
    category: "AR/VR",
    image: "/images/placeholder-2.svg",
    color: "#f472b6",
  },
  {
    id: 6,
    title: "Nexus Social",
    category: "Social",
    image: "/images/placeholder-3.svg",
    color: "#22d3ee",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "CEO",
    company: "TechVentures",
    content: "They transformed our digital presence completely. The 3D interactive experience they built increased our conversion rate by 340%. Absolutely outstanding work.",
    avatar: "SC",
  },
  {
    id: 2,
    name: "Marcus Rivera",
    role: "CTO",
    company: "DataSphere",
    content: "The level of polish and attention to detail is remarkable. Every micro-animation, every transition — it all feels purposeful and premium.",
    avatar: "MR",
  },
  {
    id: 3,
    name: "Elena Kosova",
    role: "Design Director",
    company: "Creative Labs",
    content: "Working with this team was a dream. They understood our vision immediately and delivered something that exceeded every expectation we had.",
    avatar: "EK",
  },
  {
    id: 4,
    name: "James Okonkwo",
    role: "Founder",
    company: "Pulse Innovations",
    content: "I've worked with dozens of agencies. This is the first time a website actually feels like a product — not just a template with our logo swapped in.",
    avatar: "JO",
  },
];
