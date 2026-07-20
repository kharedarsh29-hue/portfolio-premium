# NOVA - Premium 3D Digital Experience Agency Website

A stunning, high-converting, award-worthy 3D animated website built with Next.js, Three.js, React Three Fiber, Framer Motion, and GSAP.

## ✨ Features

- **Immersive 3D Hero** - Interactive 3D centerpiece with particle fields and floating geometry
- **Smooth Scroll** - Buttery-smooth Lenis scroll with parallax effects
- **Glassmorphism UI** - Premium glass cards with dynamic lighting and hover effects
- **Animated Sections** - Scroll-triggered animations with Framer Motion
- **Interactive 3D Cards** - Tilt-responsive cards with gradient overlays
- **Live Statistics** - Animated counter numbers that trigger on scroll
- **Testimonial Carousel** - Smooth sliding testimonials with star ratings
- **Functional Contact Form** - With validation, success/error states
- **Responsive Design** - Flawless experience across all devices
- **Loading Screen** - Premium animated loading experience
- **Mobile Menu** - Full-screen animated mobile navigation
- **Newsletter Signup** - Email subscription in footer
- **SEO Optimized** - Proper meta tags and Open Graph data

## 🚀 Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 16 | React framework with App Router |
| TypeScript | Type safety |
| Tailwind CSS v4 | Utility-first styling |
| Three.js / React Three Fiber | 3D rendering |
| Drei | R3F helpers |
| Framer Motion | UI animations |
| Lenis | Smooth scrolling |
| React Icons | Icon library |

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css        # Global styles, theme, animations
│   ├── layout.tsx         # Root layout with fonts & metadata
│   ├── loading.tsx        # Route loading state
│   └── page.tsx           # Main page (client component)
├── components/
│   ├── ui/                # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── GlassCard.tsx
│   │   ├── GradientText.tsx
│   │   └── SectionTitle.tsx
│   ├── layout/            # Layout components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── MobileMenu.tsx
│   │   └── LoadingScreen.tsx
│   ├── sections/          # Page sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Features.tsx
│   │   ├── Showcase.tsx
│   │   ├── Testimonials.tsx
│   │   └── Contact.tsx
│   ├── three/             # 3D components
│   │   ├── Scene3D.tsx
│   │   ├── Hero3D.tsx
│   │   ├── FloatingShapes.tsx
│   │   └── ParticleField.tsx
│   └── animations/        # Animation components
│       ├── ScrollReveal.tsx
│       ├── AnimatedCounter.tsx
│       └── ParallaxTilt.tsx
├── hooks/
│   ├── useMousePosition.ts
│   └── useScrollProgress.ts
├── lib/
│   ├── data.ts            # All content data
│   └── utils.ts           # Utility functions
└── types/
    └── index.ts           # TypeScript interfaces
```

## 🛠️ Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

## 🎨 Design System

- **Background**: `#0a0a0f` (deep dark)
- **Primary**: Indigo `#6366f1` → Purple `#ec4899` → Pink gradient
- **Accent**: Cyan `#06b6d4`
- **Glass**: `rgba(255, 255, 255, 0.03-0.06)` with backdrop blur
- **Typography**: Inter (body), Outfit (display)

## 🌐 Deployment

Deploy to Vercel, Netlify, or any Node.js hosting:

```bash
npm run build
# Deploy the .next folder
```

## 📄 License

MIT
