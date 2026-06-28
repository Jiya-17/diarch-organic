'use client';

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/collections", label: "Collections" },
    { href: "/story", label: "Our Story" },
    { href: "/philosophy", label: "Philosophy" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#FAF9F5]/80 backdrop-blur-xl z-50 border-b border-stone-200/40">
      <div className="max-w-[1600px] mx-auto px-8 lg:px-16 h-20 flex items-center justify-between">
        <a href="/" className="font-serif text-2xl tracking-tight text-stone-900 group">
          Diarch <span className="italic text-emerald-800 transition-colors group-hover:text-emerald-700">Organic</span>
        </a>

        <div className="hidden md:flex items-center gap-12 text-[11px] tracking-[0.25em] uppercase font-semibold text-stone-600">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-emerald-800 transition-colors duration-300">
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-6">
          <a href="/contact" className="border border-stone-800 text-stone-800 text-[11px] tracking-[0.2em] uppercase font-semibold px-6 py-2.5 hover:bg-emerald-800 hover:text-white hover:border-emerald-800 transition-all duration-300">
            Inquire
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-stone-900 hover:text-emerald-800 transition-colors"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#FAF9F5] border-b border-stone-200 overflow-hidden"
          >
            <div className="px-8 py-8 flex flex-col gap-6 text-sm tracking-widest uppercase font-semibold text-stone-600">
              {links.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="hover:text-emerald-800">
                  {link.label}
                </a>
              ))}
              <hr className="border-stone-200" />
              <a href="/contact" onClick={() => setIsOpen(false)} className="text-emerald-800 font-bold">
                Inquire Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
