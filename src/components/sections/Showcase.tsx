"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiEye } from "react-icons/hi";
import SectionTitle from "@/components/ui/SectionTitle";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { showcaseItems } from "@/lib/data";

export default function Showcase() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="showcase" className="relative py-32 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Our Work"
          title="Featured Projects"
          description="Each project is a unique blend of creativity and technology, crafted to deliver exceptional results for our clients."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {showcaseItems.map((item, i) => (
            <ScrollReveal key={item.id} delay={i * 0.1} distance={40}>
              <motion.div
                onHoverStart={() => setHoveredId(item.id)}
                onHoverEnd={() => setHoveredId(null)}
                className="group relative rounded-2xl overflow-hidden cursor-pointer h-72"
              >
                <div
                  className="absolute inset-0 bg-gradient-to-br opacity-80"
                  style={{
                    background: `linear-gradient(135deg, ${item.color}22, ${item.color}44)`,
                  }}
                />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div
                      className="w-20 h-20 rounded-2xl mx-auto mb-4 flex items-center justify-center"
                      style={{ background: `${item.color}33` }}
                    >
                      <span className="text-3xl font-bold" style={{ color: item.color }}>
                        {item.title[0]}
                      </span>
                    </div>
                  </div>
                </div>

                <AnimatePresence>
                  {hoveredId === item.id && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-[#0a0a0f]/90 backdrop-blur-sm flex items-center justify-center"
                    >
                      <div className="text-center px-6">
                        <motion.div
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.1 }}
                        >
                          <span className="text-xs font-semibold tracking-widest uppercase text-indigo-400">
                            {item.category}
                          </span>
                          <h3 className="text-xl font-bold text-white mt-2 mb-4">{item.title}</h3>
                          <button className="inline-flex items-center gap-2 text-sm font-medium text-white px-5 py-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300">
                            <HiEye size={16} />
                            View Project
                          </button>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#0a0a0f]/80 to-transparent">
                  <span className="text-xs font-semibold tracking-widest uppercase text-gray-400">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                </div>

                <div
                  className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium"
                  style={{
                    background: `${item.color}33`,
                    color: item.color,
                    border: `1px solid ${item.color}44`,
                  }}
                >
                  Featured
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
