'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import { diarchData } from '@/data/diarchData';
import { Leaf, MapPin, Globe } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

export default function StoryPage() {
  return (
    <div className="min-h-screen bg-[#FAF9F5] text-stone-900">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-emerald-950">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,95,70,0.3),transparent)]" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[11px] tracking-[0.3em] uppercase text-emerald-400 font-bold mb-6 block"
          >
            Our Heritage
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-[1.1] mb-6"
          >
            Rooted in<br />
            <span className="italic text-emerald-400">Bihar</span>
          </motion.h1>
        </div>
      </section>

      {/* Story Content */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="max-w-[1200px] mx-auto px-6 py-28 md:py-36"
      >
        <motion.div variants={fadeIn} className="max-w-3xl mx-auto text-center mb-24">
          <span className="text-[10px] tracking-[0.25em] uppercase text-emerald-800 font-bold mb-4 block">
            {diarchData.brandStory.title}
          </span>
          <p className="text-xl md:text-2xl font-serif text-stone-700 leading-relaxed italic">
            "{diarchData.brandStory.content}"
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          <motion.div variants={fadeIn} className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-emerald-50 rounded-full flex items-center justify-center">
              <MapPin className="h-6 w-6 text-emerald-800" />
            </div>
            <h3 className="text-lg font-serif text-stone-900 mb-3">The Land</h3>
            <p className="text-sm text-stone-500 leading-relaxed">
              Bihar, where the Ganga has fed civilizations for millennia.
            </p>
          </motion.div>

          <motion.div variants={fadeIn} className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-emerald-50 rounded-full flex items-center justify-center">
              <Leaf className="h-6 w-6 text-emerald-800" />
            </div>
            <h3 className="text-lg font-serif text-stone-900 mb-3">The Harvest</h3>
            <p className="text-sm text-stone-500 leading-relaxed">
              Turmeric, makhana, and aromatic rice — grown for centuries.
            </p>
          </motion.div>

          <motion.div variants={fadeIn} className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-emerald-50 rounded-full flex items-center justify-center">
              <Globe className="h-6 w-6 text-emerald-800" />
            </div>
            <h3 className="text-lg font-serif text-stone-900 mb-3">The Reach</h3>
            <p className="text-sm text-stone-500 leading-relaxed">
              From Patna to Toronto — premium aisles worldwide.
            </p>
          </motion.div>
        </div>
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
