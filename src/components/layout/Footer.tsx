import MagneticButton from "@/components/ui/MagneticButton"

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Work", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
]

const socialLinks = [
  { label: "LinkedIn", href: "#" },
  { label: "Email", href: "mailto:kharedarsh29@gmail.com" },
]

const contactInfo = [
  { label: "Email", value: "kharedarsh29@gmail.com" },
  { label: "Phone", value: "8787281731" },
  { label: "Status", value: "Available for projects" },
]

export default function Footer() {
  return (
    <footer className="bg-bg-card border-t border-border-subtle relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1280px] h-px bg-gradient-to-r from-transparent via-accent/15 to-transparent" />

      <div className="container-site relative z-10">
        <div className="py-32 border-b border-border-subtle">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-8">
              <p className="section-label">Let&apos;s Work Together</p>
              <h2 className="section-heading max-w-3xl">
                Ready to build something <span className="text-gradient">great</span>?
              </h2>
              <p className="mt-6 text-base text-text-secondary leading-relaxed paragraph-max mb-10">
                I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              <MagneticButton size="lg" href="#contact">
                Get in Touch
              </MagneticButton>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8 pt-32 pb-32">
          <div className="col-span-12 md:col-span-5">
            <a href="#hero" className="inline-block text-3xl font-heading font-bold tracking-tight mb-6">
              <span className="text-gradient">P</span>
              <span className="text-white/70">ortfoluio</span>
            </a>
            <p className="text-sm text-text-muted leading-relaxed paragraph-max mb-8">
              Premium websites, AI receptionists, and smart automations
              that turn visitors into clients — on autopilot.
            </p>
            <p className="text-sm text-text-muted/60">
              Available for select projects &amp; collaborations worldwide.
            </p>
          </div>

          <div className="col-span-6 md:col-span-2 md:col-start-7">
            <h4 className="text-xs font-heading font-semibold text-text-primary uppercase tracking-wider mb-8">Navigation</h4>
            <div className="flex flex-col gap-4">
              {navLinks.map((l) => (
                <a key={l.href} href={l.href} className="text-sm text-text-muted hover:text-text-secondary transition-colors">{l.label}</a>
              ))}
            </div>
          </div>

          <div className="col-span-6 md:col-span-2">
            <h4 className="text-xs font-heading font-semibold text-text-primary uppercase tracking-wider mb-8">Social</h4>
            <div className="flex flex-col gap-4">
              {socialLinks.map((l) => (
                <a key={l.label} href={l.href} className="text-sm text-text-muted hover:text-text-secondary transition-colors">{l.label}</a>
              ))}
            </div>
          </div>

          <div className="col-span-12 md:col-span-3">
            <h4 className="text-xs font-heading font-semibold text-text-primary uppercase tracking-wider mb-8">Contact</h4>
            <div className="flex flex-col gap-4">
              {contactInfo.map((info, i) => (
                <p key={i} className="text-sm text-text-muted">{info.value}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="pb-8 pt-8 border-t border-border-subtle flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-text-muted/60">&copy; {new Date().getFullYear()} All rights reserved.</p>
          <p className="text-sm text-text-muted/60">Crafted with precision.</p>
        </div>
      </div>
    </footer>
  )
}
