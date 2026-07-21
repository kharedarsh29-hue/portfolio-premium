# Session Restore — Portfolio Premium

Paste this entire block in a new opencode session to restore context:

---

I have a Next.js 16 portfolio project at `C:\Users\lenovo\premium-3d-website`. It's live at https://portfolio-premium-umber.vercel.app.

Read `.env.local` for tokens. Read `AGENTS.md` and `CLAUDE.md` for rules. Read `SESSION_PROMPT.md` (this file) for context.

The project is a premium personal portfolio with:
- **Tech**: Next.js 16 + TypeScript + Tailwind CSS v4 + Framer Motion + Three.js/R3F + Lenis
- **Fonts**: Inter (body), Plus Jakarta Sans (headings) via next/font/google
- **Colors**: bg #0a0a0c, accent #e85d04, text #f0efed
- **Layout**: Left-aligned editorial, max 1440px hero / 1280px content, responsive padding (96→72→48→24px), pt-32 pb-32 sections
- **Sections**: Hero (3D laptop GLB), Portfolio (2 real sites), AutomationShowcase (SVG mockups), AIReceptionist (waveform), About, Contact
- **GitHub**: https://github.com/kharedarsh29-hue/portfolio-premium (main branch)
- **Vercel**: Project `mer9/portfolio-premium`, connected to GitHub — auto-deploys on push

Key source files:
- `src/app/globals.css` — design tokens, containers, responsive breakpoints
- `src/app/page.tsx` — sections order
- `src/components/sections/*.tsx` — each section component
- `src/components/ui/AutomationVisual.tsx` — SVG mockups
- `src/components/ui/VoiceVisual.tsx` — animated waveform
- `src/data/projects.ts` — portfolio projects
- `src/data/automations.ts` — automation items
- `public/models/laptop.glb` — 3D laptop model
- `public/projects/*.jpg` — site screenshots

Workflow:
1. `cd C:\Users\lenovo\premium-3d-website`
2. Edit files as needed
3. `git add -A && git commit -m "message"`
4. `git push`
5. Vercel auto-deploys in ~40s
6. To deploy manually: `npx vercel deploy --token $env:VERCEL_TOKEN --prod --yes`

TypeScript build check: `npm run build`
