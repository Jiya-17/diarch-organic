'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import { diarchData } from '@/data/diarchData';
import { ShieldCheck, X } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

export default function PhilosophyPage() {
  return (
    <div className="min-h-screen bg-[#FAF9F5] text-stone-900">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-stone-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,95,70,0.2),transparent)]" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[11px] tracking-[0.3em] uppercase text-emerald-400 font-bold mb-6 block"
          >
            Brand Philosophy
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-[1.1]"
          >
            We Are <span className="italic text-emerald-400">/ We Are Not</span>
          </motion.h1>
        </div>
      </section>

      {/* Philosophy Grid */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="max-w-[1200px] mx-auto px-6 py-28 md:py-36"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* We Are */}
          <motion.div
            variants={fadeIn}
            className="bg-white p-10 md:p-14 rounded-3xl border border-stone-200/50 shadow-sm"
          >
            <div className="flex items-center gap-3 text-emerald-800 mb-10">
              <ShieldCheck className="h-6 w-6" />
              <h2 className="text-3xl font-serif text-stone-900">We are</h2>
            </div>
            <ul className="space-y-6">
              {diarchData.philosophies.weAre.map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-stone-700 text-base md:text-lg font-medium">
                  <span className="text-emerald-700 bg-emerald-50 w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* We Are Not */}
          <motion.div
            variants={fadeIn}
            className="bg-stone-900 p-10 md:p-14 rounded-3xl border border-stone-800"
          >
            <div className="flex items-center gap-3 text-stone-400 mb-10">
              <X className="h-6 w-6" />
              <h2 className="text-3xl font-serif text-white">We are not</h2>
            </div>
            <ul className="space-y-6">
              {diarchData.philosophies.weAreNot.map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-stone-400 text-base md:text-lg italic">
                  <span className="text-stone-500 bg-stone-800 w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Core Rule */}
        <motion.div
          variants={fadeIn}
          className="mt-16 bg-emerald-950 text-stone-200 p-10 md:p-16 rounded-3xl border border-emerald-900 text-center"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-emerald-400 font-bold mb-6 block">
            Philosophy Core Rule
          </span>
          <p className="text-xl md:text-2xl font-serif text-white leading-relaxed max-w-3xl mx-auto italic">
            "{diarchData.philosophies.coreRule}"
          </p>
          <div className="mt-10 flex items-center justify-center gap-8 text-[10px] text-emerald-400 uppercase tracking-widest font-mono">
            <span>(1) Shelf Recognition</span>
            <span>(2) Ingredient-Forward</span>
            <span>(3) Trust Marks</span>
          </div>
        </motion.div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-stone-950 text-stone-400 pt-16 pb-8 px-6 border-t border-stone-800">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] tracking-wider uppercase">
          <span className="font-serif text-white text-lg not-italic tracking-normal normal-case">
            Diarch <span className="italic text-emerald-500">Organic</span>
          </span>
          <span>© 2026 Diarch Organic. All Rights Reserved.</span>
        </div>
      </footer>
    </div>
  );
}
