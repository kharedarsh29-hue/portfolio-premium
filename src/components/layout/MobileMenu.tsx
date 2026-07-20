"use client";

import { motion } from "framer-motion";
import { navLinks } from "@/lib/data";

interface MobileMenuProps {
  onClose: () => void;
  onNavigate: (href: string) => void;
}

export default function MobileMenu({ onClose, onNavigate }: MobileMenuProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: "100%" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "100%" }}
      transition={{ type: "spring", damping: 25, stiffness: 200 }}
      className="fixed inset-0 z-40 md:hidden bg-[#0a0a0f]/95 backdrop-blur-2xl"
    >
      <div className="flex flex-col items-center justify-center h-full gap-8">
        {navLinks.map((link, i) => (
          <motion.button
            key={link.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            onClick={() => onNavigate(link.href)}
            className="text-2xl font-semibold text-gray-300 hover:text-white transition-colors relative group"
          >
            {link.label}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-pink-400 group-hover:w-full transition-all duration-300" />
          </motion.button>
        ))}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          onClick={() => onNavigate("#contact")}
          className="px-10 py-4 text-lg font-semibold text-white rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 mt-4"
        >
          Get Started
        </motion.button>
      </div>
    </motion.div>
  );
}
