'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import { diarchData } from '@/data/diarchData';
import { ArrowRight } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const categories = ["All", "Ground Powders", "Artisanal Blends"];

export default function Collections() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filteredProducts = activeCategory === "All"
    ? diarchData.products
    : diarchData.products.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-stone-900">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-20 md:pb-28 bg-gradient-to-b from-emerald-950/5 to-transparent">
        <div className="max-w-[1600px] mx-auto px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-[11px] tracking-[0.3em] uppercase text-emerald-800 font-bold mb-5 block">
              The Signature Range
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-stone-900 leading-[1.05] mb-6">
              Our<br />
              <span className="italic text-emerald-800">Collections</span>
            </h1>
            <p className="text-base md:text-lg text-stone-500 max-w-xl mx-auto leading-relaxed">
              A curated edit of India's finest harvests, refined for the world's discerning kitchens.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="max-w-[1600px] mx-auto px-8 lg:px-16 mb-16">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-[11px] uppercase tracking-[0.2em] px-6 py-3 rounded-full border transition-all duration-500 font-semibold ${
                activeCategory === cat
                  ? "bg-emerald-800 text-white border-emerald-800"
                  : "bg-transparent text-stone-600 border-stone-300 hover:border-stone-800 hover:text-stone-900"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Product Grid */}
      <section className="max-w-[1600px] mx-auto px-8 lg:px-16 pb-32 md:pb-40">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8"
        >
          {filteredProducts.map((p) => (
            <motion.article
              key={p.id}
              variants={fadeIn}
              onMouseEnter={() => setHoveredId(p.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative bg-white rounded-3xl border border-stone-200/60 overflow-hidden hover:shadow-2xl transition-all duration-700"
            >
              {/* Image */}
              <div className="relative aspect-[4/5] overflow-hidden bg-stone-50 flex items-center justify-center p-6">
                <img
                  src={p.hasMockup && hoveredId === p.id ? (p as any).mockup : p.img}
                  alt={p.name}
                  className="h-full w-full object-contain transition-transform duration-[1500ms] ease-out group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-[#FAF9F5]/95 backdrop-blur-sm text-stone-900 text-[10px] tracking-[0.2em] uppercase px-3 py-1.5 rounded-full font-semibold border border-stone-200">
                  {p.tag}
                </div>
                {p.hasMockup && (
                  <div className="absolute bottom-4 right-4 bg-emerald-800 text-white text-[9px] tracking-wider uppercase px-3 py-1.5 rounded-full font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    View Packaging
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-6 md:p-8">
                <span className="text-[10px] tracking-[0.2em] text-stone-400 uppercase font-bold mb-2 block">
                  {p.origin}
                </span>
                <h3 className="text-xl md:text-2xl font-serif text-stone-900 mb-3 group-hover:text-emerald-800 transition-colors duration-300">
                  {p.name}
                </h3>
                <p className="text-sm text-stone-500 leading-relaxed mb-5">
                  {p.desc}
                </p>
                <div className="flex items-center justify-between pt-5 border-t border-stone-100">
                  <span className="text-[10px] tracking-wider text-stone-400 uppercase font-semibold">
                    {p.sizes.join(' · ')}
                  </span>
                  <a
                    href="/contact"
                    className="text-emerald-800 text-[10px] tracking-[0.2em] uppercase font-bold hover:text-emerald-950 flex items-center gap-1.5 group/link"
                  >
                    Inquire
                    <ArrowRight className="h-3 w-3 transition-transform group-hover/link:translate-x-1" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}

          {/* Placeholder slots for future products */}
          {[11, 12].map((id) => (
            <motion.div
              key={id}
              variants={fadeIn}
              className="relative bg-stone-100/50 rounded-3xl border border-stone-200/40 border-dashed overflow-hidden aspect-[4/5] flex items-center justify-center"
            >
              <div className="text-center px-6">
                <div className="w-12 h-12 mx-auto mb-4 bg-stone-200/50 rounded-full" />
                <span className="text-[10px] tracking-[0.2em] text-stone-400 uppercase font-semibold">
                  Coming Soon
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-950 text-stone-400 pt-16 pb-8 px-6 border-t border-stone-800/50">
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] tracking-wider uppercase">
          <span className="font-serif text-white text-lg not-italic tracking-normal normal-case">
            Diarch <span className="italic text-emerald-500">Organic</span>
          </span>
          <span>© 2026 Diarch Organic. All Rights Reserved.</span>
        </div>
      </footer>
    </div>
  );
}
