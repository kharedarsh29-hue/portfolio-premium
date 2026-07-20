export interface NavLink {
  label: string;
  href: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
  gradient: string;
}

export interface ShowcaseItem {
  id: number;
  title: string;
  category: string;
  image: string;
  color: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}
