"use client"

import { useState, useCallback } from "react"
import { useEditor } from "@/lib/editor-context"
import { motion, AnimatePresence } from "framer-motion"

export function EditToggle() {
  const { isEditing, setIsEditing, hasUnsaved, save } = useEditor()

  if (!isEditing) {
    return (
      <button
        onClick={() => setIsEditing(true)}
        className="fixed bottom-6 right-6 z-[9999] px-6 py-3 bg-accent text-white rounded-xl font-medium text-sm shadow-xl hover:bg-accent-light transition-all"
      >
        Edit Website
      </button>
    )
  }

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex items-center gap-3">
      {hasUnsaved && (
        <span className="text-xs text-text-muted bg-bg-card px-3 py-2 rounded-lg border border-border-subtle">
          Unsaved changes
        </span>
      )}
      <button
        onClick={() => { save(); setIsEditing(false) }}
        className="px-5 py-3 bg-text-primary text-bg-primary rounded-xl font-medium text-sm shadow-xl hover:opacity-90 transition-all"
      >
        {hasUnsaved ? "Save & Exit" : "Exit Editor"}
      </button>
    </div>
  )
}

interface FieldProps {
  label: string
  value: string
  onChange: (v: string) => void
  multiline?: boolean
  type?: string
  placeholder?: string
}

function Field({ label, value, onChange, multiline, type, placeholder }: FieldProps) {
  return (
    <div className="space-y-1.5">
      <label className="text-[10px] uppercase tracking-wider text-text-muted font-medium">{label}</label>
      {multiline ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          rows={3}
          className="w-full px-3 py-2 text-xs rounded-lg bg-white/[0.04] border border-border-subtle text-text-primary placeholder-text-muted focus:outline-none focus:border-accent/40 transition-colors resize-none"
        />
      ) : (
        <input
          type={type || "text"}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full px-3 py-2 text-xs rounded-lg bg-white/[0.04] border border-border-subtle text-text-primary placeholder-text-muted focus:outline-none focus:border-accent/40 transition-colors"
        />
      )}
    </div>
  )
}

function ArrayField({ label, items, onChange, itemLabel }: { label: string; items: string[]; onChange: (items: string[]) => void; itemLabel?: string }) {
  const update = (i: number, v: string) => {
    const next = [...items]; next[i] = v; onChange(next)
  }
  const add = () => onChange([...items, ""])
  const remove = (i: number) => onChange(items.filter((_, idx) => idx !== i))

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="text-[10px] uppercase tracking-wider text-text-muted font-medium">{label}</label>
        <button onClick={add} className="text-xs text-accent hover:text-accent-light transition-colors">+ Add</button>
      </div>
      {items.map((item, i) => (
        <div key={i} className="flex items-center gap-2">
          <span className="text-[10px] text-text-muted w-4 shrink-0">{i + 1}.</span>
          <input value={item} onChange={(e) => update(i, e.target.value)} className="flex-1 px-2 py-1.5 text-xs rounded-lg bg-white/[0.04] border border-border-subtle text-text-primary focus:outline-none focus:border-accent/40" />
          <button onClick={() => remove(i)} className="text-xs text-red-400/60 hover:text-red-400 shrink-0">✕</button>
        </div>
      ))}
    </div>
  )
}

function SectionPanel({ children, section }: { children: React.ReactNode; section: string }) {
  return (
    <div className="p-4 border-b border-border-subtle last:border-b-0 space-y-3">
      <p className="text-[10px] uppercase tracking-widest text-accent font-semibold">{section}</p>
      {children}
    </div>
  )
}

function HeroEditor() {
  const { data, dispatch } = useEditor()
  const s = data.sections.hero
  return (
    <SectionPanel section="Hero">
      <Field label="Label" value={s.label} onChange={(v) => dispatch({ type: "UPDATE_SECTION", sectionId: "hero", data: { label: v } })} />
      <ArrayField label="Title Lines" items={s.titleLines || []} onChange={(v) => dispatch({ type: "UPDATE_SECTION", sectionId: "hero", data: { titleLines: v, heading: v.join("\n") } })} />
      <Field label="Gradient Text" value={s.headingGradient} onChange={(v) => dispatch({ type: "UPDATE_SECTION", sectionId: "hero", data: { headingGradient: v } })} />
      <Field label="Description" value={s.description || ""} onChange={(v) => dispatch({ type: "UPDATE_SECTION", sectionId: "hero", data: { description: v } })} multiline />
      <Field label="CTA Text" value={s.ctaPrimary?.text || ""} onChange={(v) => dispatch({ type: "UPDATE_SECTION", sectionId: "hero", data: { ctaPrimary: { ...s.ctaPrimary!, text: v } } })} />
      <Field label="CTA 2 Text" value={s.ctaSecondary?.text || ""} onChange={(v) => dispatch({ type: "UPDATE_SECTION", sectionId: "hero", data: { ctaSecondary: { ...s.ctaSecondary!, text: v } } })} />
      <Field label="Trusted Text" value={s.trustedText || ""} onChange={(v) => dispatch({ type: "UPDATE_SECTION", sectionId: "hero", data: { trustedText: v } })} />
    </SectionPanel>
  )
}

function AboutEditor() {
  const { data, dispatch } = useEditor()
  const s = data.sections.about
  const update = (d: any) => dispatch({ type: "UPDATE_SECTION", sectionId: "about", data: d })

  return (
    <SectionPanel section="About">
      <Field label="Label" value={s.label} onChange={(v) => update({ label: v })} />
      <Field label="Heading" value={s.heading} onChange={(v) => update({ heading: v })} multiline />
      <Field label="Gradient Text" value={s.headingGradient} onChange={(v) => update({ headingGradient: v })} />
      <Field label="Description" value={s.description || ""} onChange={(v) => update({ description: v })} multiline />

      <div className="space-y-2">
        <label className="text-[10px] uppercase tracking-wider text-text-muted font-medium">Stats</label>
        {(s.stats || []).map((stat, i) => (
          <div key={i} className="flex gap-2">
            <input value={stat.value} onChange={(e) => { const n = [...s.stats!]; n[i] = { ...n[i], value: e.target.value }; update({ stats: n }) }} placeholder="Value" className="flex-1 px-2 py-1.5 text-xs rounded-lg bg-white/[0.04] border border-border-subtle text-text-primary" />
            <input value={stat.label} onChange={(e) => { const n = [...s.stats!]; n[i] = { ...n[i], label: e.target.value }; update({ stats: n }) }} placeholder="Label" className="flex-1 px-2 py-1.5 text-xs rounded-lg bg-white/[0.04] border border-border-subtle text-text-primary" />
          </div>
        ))}
      </div>

      <div className="space-y-2">
        <label className="text-[10px] uppercase tracking-wider text-text-muted font-medium">Values</label>
        {(s.values || []).map((v, i) => (
          <div key={i} className="space-y-1.5 p-2 rounded-lg bg-white/[0.02]">
            <Field label="Title" value={v.title} onChange={(val) => { const n = [...s.values!]; n[i] = { ...n[i], title: val }; update({ values: n }) }} />
            <Field label="Description" value={v.desc} onChange={(val) => { const n = [...s.values!]; n[i] = { ...n[i], desc: val }; update({ values: n }) }} multiline />
          </div>
        ))}
      </div>
    </SectionPanel>
  )
}

function ServicesEditor() {
  const { data, dispatch } = useEditor()
  const s = data.sections.services
  return (
    <SectionPanel section="Services">
      <Field label="Label" value={s.label} onChange={(v) => dispatch({ type: "UPDATE_SECTION", sectionId: "services", data: { label: v } })} />
      <Field label="Heading" value={s.heading} onChange={(v) => dispatch({ type: "UPDATE_SECTION", sectionId: "services", data: { heading: v } })} multiline />
      <Field label="Gradient Text" value={s.headingGradient} onChange={(v) => dispatch({ type: "UPDATE_SECTION", sectionId: "services", data: { headingGradient: v } })} />
    </SectionPanel>
  )
}

function PortfolioEditor() {
  const { data, dispatch } = useEditor()
  const s = data.sections.portfolio

  return (
    <SectionPanel section="Portfoluio">
      <Field label="Label" value={s.label} onChange={(v) => dispatch({ type: "UPDATE_SECTION", sectionId: "portfolio", data: { label: v } })} />
      <Field label="Heading" value={s.heading} onChange={(v) => dispatch({ type: "UPDATE_SECTION", sectionId: "portfolio", data: { heading: v } })} multiline />
      <Field label="Gradient Text" value={s.headingGradient} onChange={(v) => dispatch({ type: "UPDATE_SECTION", sectionId: "portfolio", data: { headingGradient: v } })} />
    </SectionPanel>
  )
}

function AutomationEditor() {
  const { data, dispatch } = useEditor()
  const s = data.sections.automation
  return (
    <SectionPanel section="Automation">
      <Field label="Label" value={s.label} onChange={(v) => dispatch({ type: "UPDATE_SECTION", sectionId: "automation", data: { label: v } })} />
      <Field label="Heading" value={s.heading} onChange={(v) => dispatch({ type: "UPDATE_SECTION", sectionId: "automation", data: { heading: v } })} multiline />
      <Field label="Gradient Text" value={s.headingGradient} onChange={(v) => dispatch({ type: "UPDATE_SECTION", sectionId: "automation", data: { headingGradient: v } })} />
    </SectionPanel>
  )
}

function AIReceptionistEditor() {
  const { data, dispatch } = useEditor()
  const s = data.sections.aiReceptionist
  const update = (d: any) => dispatch({ type: "UPDATE_SECTION", sectionId: "aiReceptionist", data: d })

  return (
    <SectionPanel section="AI Receptionist">
      <Field label="Label" value={s.label} onChange={(v) => update({ label: v })} />
      <Field label="Heading" value={s.heading} onChange={(v) => update({ heading: v })} multiline />
      <Field label="Gradient Text" value={s.headingGradient} onChange={(v) => update({ headingGradient: v })} />

      <div className="space-y-2">
        <label className="text-[10px] uppercase tracking-wider text-text-muted font-medium">Steps ({s.steps?.length || 0})</label>
        {(s.steps || []).map((step, i) => (
          <div key={i} className="space-y-1.5 p-2 rounded-lg bg-white/[0.02]">
            <div className="flex items-center gap-2">
              <span className="text-sm">{step.icon}</span>
              <Field label="Title" value={step.title} onChange={(val) => { const n = [...s.steps!]; n[i] = { ...n[i], title: val }; update({ steps: n }) }} />
            </div>
            <Field label="Description" value={step.desc} onChange={(val) => { const n = [...s.steps!]; n[i] = { ...n[i], desc: val }; update({ steps: n }) }} multiline />
          </div>
        ))}
      </div>

      <ArrayField label="Features" items={s.featuresList || []} onChange={(v) => update({ featuresList: v })} />
    </SectionPanel>
  )
}

function TestimonialsEditor() {
  const { data, dispatch } = useEditor()
  const s = data.sections.testimonials
  return (
    <SectionPanel section="Testimonials">
      <Field label="Label" value={s.label} onChange={(v) => dispatch({ type: "UPDATE_SECTION", sectionId: "testimonials", data: { label: v } })} />
      <Field label="Heading" value={s.heading} onChange={(v) => dispatch({ type: "UPDATE_SECTION", sectionId: "testimonials", data: { heading: v } })} multiline />
      <Field label="Gradient Text" value={s.headingGradient} onChange={(v) => dispatch({ type: "UPDATE_SECTION", sectionId: "testimonials", data: { headingGradient: v } })} />
    </SectionPanel>
  )
}

function ProcessEditor() {
  const { data, dispatch } = useEditor()
  const s = data.sections.process
  return (
    <SectionPanel section="Process">
      <Field label="Label" value={s.label} onChange={(v) => dispatch({ type: "UPDATE_SECTION", sectionId: "process", data: { label: v } })} />
      <Field label="Heading" value={s.heading} onChange={(v) => dispatch({ type: "UPDATE_SECTION", sectionId: "process", data: { heading: v } })} multiline />
      <Field label="Gradient Text" value={s.headingGradient} onChange={(v) => dispatch({ type: "UPDATE_SECTION", sectionId: "process", data: { headingGradient: v } })} />
    </SectionPanel>
  )
}

function ContactEditor() {
  const { data, dispatch } = useEditor()
  const s = data.sections.contact
  const update = (d: any) => dispatch({ type: "UPDATE_SECTION", sectionId: "contact", data: d })

  return (
    <SectionPanel section="Contact">
      <Field label="Label" value={s.label} onChange={(v) => update({ label: v })} />
      <Field label="Heading" value={s.heading} onChange={(v) => update({ heading: v })} multiline />
      <Field label="Gradient Text" value={s.headingGradient} onChange={(v) => update({ headingGradient: v })} />
      <Field label="Description" value={s.description || ""} onChange={(v) => update({ description: v })} multiline />

      <div className="space-y-2">
        <label className="text-[10px] uppercase tracking-wider text-text-muted font-medium">Contact Methods</label>
        {(s.methods || []).map((m, i) => (
          <div key={i} className="p-2 rounded-lg bg-white/[0.02] space-y-1.5">
            <Field label="Label" value={m.label} onChange={(val) => { const n = [...s.methods!]; n[i] = { ...n[i], label: val }; update({ methods: n }) }} />
            <Field label="Value" value={m.value} onChange={(val) => { const n = [...s.methods!]; n[i] = { ...n[i], value: val }; update({ methods: n }) }} />
          </div>
        ))}
      </div>

      <ArrayField label="Service Options" items={s.serviceOptions || []} onChange={(v) => update({ serviceOptions: v })} />
    </SectionPanel>
  )
}

function GlobalEditor() {
  const { data, dispatch } = useEditor()
  const g = data.global

  return (
    <SectionPanel section="Global Settings">
      <Field label="Section Spacing (px)" value={String(g.spacing)} type="number" onChange={(v) => dispatch({ type: "UPDATE_GLOBAL", data: { spacing: Number(v) } })} />
      <Field label="Container Width (px)" value={String(g.containerWidth)} type="number" onChange={(v) => dispatch({ type: "UPDATE_GLOBAL", data: { containerWidth: Number(v) } })} />
      <Field label="Border Radius (px)" value={String(g.borderRadius)} type="number" onChange={(v) => dispatch({ type: "UPDATE_GLOBAL", data: { borderRadius: Number(v) } })} />
      <Field label="Accent Color" value={g.accentColor} type="text" onChange={(v) => dispatch({ type: "UPDATE_GLOBAL", data: { accentColor: v } })} />
      <Field label="Animation Speed" value={String(g.animationSpeed)} type="number" onChange={(v) => dispatch({ type: "UPDATE_GLOBAL", data: { animationSpeed: Number(v) } })} />
    </SectionPanel>
  )
}

function ItemListEditor({ collection, label }: { collection: "projects" | "services" | "testimonials" | "automations"; label: string }) {
  const { data, dispatch } = useEditor()
  const items = data[collection]
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const [dragIdx, setDragIdx] = useState<number | null>(null)

  const add = () => {
    const id = `${collection}-${Date.now()}`
    dispatch({ type: "ADD_ITEM", collection, item: { id, title: `New ${label.slice(0, -1)}` } })
    setExpandedId(id)
  }

  return (
    <SectionPanel section={label}>
      <div className="flex items-center justify-between mb-1">
        <span className="text-[10px] text-text-muted">{items.length} items</span>
        <button onClick={add} className="text-xs text-accent hover:text-accent-light transition-colors">+ Add New</button>
      </div>
      <div className="space-y-1 max-h-[300px] overflow-y-auto">
        {items.map((item, idx) => (
          <div
            key={item.id}
            draggable
            onDragStart={() => setDragIdx(idx)}
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => { if (dragIdx !== null && dragIdx !== idx) { dispatch({ type: "REORDER_ITEMS", collection, from: dragIdx, to: idx }); setDragIdx(null) } }}
            className={`p-2 rounded-lg cursor-pointer transition-colors ${expandedId === item.id ? "bg-accent/[0.06] border border-accent/20" : "bg-white/[0.02] border border-transparent hover:border-border-subtle"}`}
            onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
          >
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs text-text-primary truncate">{item.title || "Untitled"}</span>
              <span className="text-[10px] text-text-muted shrink-0 cursor-grab">⠿</span>
            </div>
            <AnimatePresence>
              {expandedId === item.id && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden mt-2 space-y-1.5">
                  <Field label="Title" value={item.title || ""} onChange={(v) => dispatch({ type: "UPDATE_ITEM", collection, id: item.id, data: { title: v } })} />
                  {item.description !== undefined && (
                    <Field label="Description" value={item.description || ""} onChange={(v) => dispatch({ type: "UPDATE_ITEM", collection, id: item.id, data: { description: v } })} multiline />
                  )}
                  {item.content !== undefined && (
                    <Field label="Content" value={item.content || ""} onChange={(v) => dispatch({ type: "UPDATE_ITEM", collection, id: item.id, data: { content: v } })} multiline />
                  )}
                  {collection === "projects" && (
                    <>
                      <Field label="Industry" value={(item as any).industry || ""} onChange={(v) => dispatch({ type: "UPDATE_ITEM", collection, id: item.id, data: { industry: v } })} />
                      <Field label="URL" value={item.url || ""} onChange={(v) => dispatch({ type: "UPDATE_ITEM", collection, id: item.id, data: { url: v } })} />
                    </>
                  )}
                  {collection === "testimonials" && (
                    <>
                      <Field label="Name" value={(item as any).name || ""} onChange={(v) => dispatch({ type: "UPDATE_ITEM", collection, id: item.id, data: { name: v } })} />
                      <Field label="Role" value={(item as any).role || ""} onChange={(v) => dispatch({ type: "UPDATE_ITEM", collection, id: item.id, data: { role: v } })} />
                      <Field label="Company" value={(item as any).company || ""} onChange={(v) => dispatch({ type: "UPDATE_ITEM", collection, id: item.id, data: { company: v } })} />
                      <Field label="Project" value={(item as any).project || ""} onChange={(v) => dispatch({ type: "UPDATE_ITEM", collection, id: item.id, data: { project: v } })} />
                    </>
                  )}
                  <button onClick={() => dispatch({ type: "DELETE_ITEM", collection, id: item.id })} className="text-xs text-red-400/60 hover:text-red-400 transition-colors mt-1">Delete</button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </SectionPanel>
  )
}

export function PropertiesPanel() {
  const { data, dispatch, isEditing, selectedSection, setSelectedSection } = useEditor()

  if (!isEditing) return null

  const sectionComponents: Record<string, React.ReactNode> = {
    hero: <HeroEditor />,
    about: <AboutEditor />,
    services: <ServicesEditor />,
    portfolio: <PortfolioEditor />,
    automation: <AutomationEditor />,
    aiReceptionist: <AIReceptionistEditor />,
    testimonials: <TestimonialsEditor />,
    process: <ProcessEditor />,
    contact: <ContactEditor />,
  }

  return (
    <AnimatePresence>
      {selectedSection && (
        <motion.div
          initial={{ x: 320, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 320, opacity: 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 35 }}
          className="fixed top-0 right-0 h-full w-[320px] z-[9998] bg-bg-card border-l border-border-subtle overflow-y-auto shadow-2xl"
        >
          <div className="sticky top-0 z-10 bg-bg-card/90 backdrop-blur-md border-b border-border-subtle px-4 py-3 flex items-center justify-between">
            <span className="text-xs font-medium text-text-primary capitalize">{selectedSection}</span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => dispatch({ type: "UPDATE_GLOBAL", data: {} })}
                className="text-[10px] text-text-muted hover:text-text-secondary transition-colors"
              >
                Global
              </button>
              <button
                onClick={() => setSelectedSection(null)}
                className="text-xs text-text-muted hover:text-text-primary transition-colors"
              >
                ✕
              </button>
            </div>
          </div>

          {sectionComponents[selectedSection] || <SectionPanel section={selectedSection}><p className="text-xs text-text-muted">No editor available</p></SectionPanel>}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export function SectionSelectWrapper({ id, children, className }: { id: string; children: React.ReactNode; className?: string }) {
  const { isEditing, selectedSection, setSelectedSection } = useEditor()

  if (!isEditing) return <>{children}</>

  const isSelected = selectedSection === id

  return (
    <div
      className={`relative ${className || ""}`}
      onClick={(e) => { e.stopPropagation(); setSelectedSection(id) }}
      style={{
        outline: isSelected ? "2px solid rgba(232, 93, 4, 0.6)" : "2px solid transparent",
        outlineOffset: isSelected ? "2px" : "0px",
        cursor: "pointer",
        transition: "outline 0.15s ease",
      }}
      onMouseEnter={(e) => { if (!isSelected) (e.currentTarget as HTMLElement).style.outline = "2px solid rgba(59, 130, 246, 0.3)" }}
      onMouseLeave={(e) => { if (!isSelected) (e.currentTarget as HTMLElement).style.outline = "2px solid transparent" }}
    >
      {isSelected && (
        <div className="absolute top-2 left-2 z-50 px-2 py-1 bg-accent text-white text-[10px] font-medium rounded-md uppercase tracking-wider">
          {id}
        </div>
      )}
      {children}
    </div>
  )
}

export function ImageUploader({ imageKey, children, className }: { imageKey: string; children: React.ReactNode; className?: string }) {
  const { isEditing, images, setImage } = useEditor()

  if (!isEditing) return <>{children}</>

  return (
    <div className={`relative group ${className || ""}`}>
      {children}
      <label className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer z-20">
        <span className="text-xs text-white font-medium px-4 py-2 bg-accent rounded-lg">Replace Image</span>
        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => {
            const file = e.target.files?.[0]
            if (!file) return
            const reader = new FileReader()
            reader.onload = () => setImage(imageKey, reader.result as string)
            reader.readAsDataURL(file)
          }}
        />
      </label>
    </div>
  )
}
