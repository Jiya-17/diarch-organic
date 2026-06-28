'use client';

 
import { motion } from 'framer-motion';
import { diarchData } from '@/data/diarchData';
import Navbar from '@/components/Navbar';
import { ArrowRight, Leaf, ArrowDown } from 'lucide-react';


const fadeIn = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'easeOut' } },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF9F5] text-stone-900 font-sans antialiased overflow-x-hidden">
      <Navbar />

      {/* 1. FULL-BLEED HERO */}
      <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-emerald-950" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,95,70,0.25),transparent_70%)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-transparent to-transparent opacity-60" />
        </div>

        {/* Decorative circles */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-800/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-stone-800/20 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-[1600px] mx-auto px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase text-emerald-400 font-bold mb-8">
              <Leaf className="h-4 w-4 text-emerald-400" />
              <span>{diarchData.brandInfo.tagline}</span>
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-white leading-[0.95] mb-8">
              Diarch<br />
              <span className="italic text-emerald-400 font-normal">Organic</span>
            </h1>

            <p className="text-lg md:text-xl text-stone-300 max-w-lg leading-relaxed mb-10">
              A luxury Indian pantry house — curated for the world's discerning kitchens.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="/collections"
                className="bg-emerald-500 hover:bg-emerald-400 text-emerald-950 text-xs tracking-[0.2em] uppercase font-bold px-10 py-4 transition-all duration-500 flex items-center gap-3 group"
              >
                Explore Collections
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="/story"
                className="border border-stone-600 text-stone-300 hover:bg-white hover:text-stone-900 text-xs tracking-[0.2em] uppercase font-bold px-10 py-4 transition-all duration-500"
              >
                Our Heritage
              </a>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
            className="lg:col-span-6 relative flex justify-center items-center"
          >
            <div className="relative w-full max-w-[550px] aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-stone-700/50">
              <img
                src="/images/hero-spices.jpg"
                alt="Premium Indian Spices Selection"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/40 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2 text-stone-400"
          >
            <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
            <ArrowDown className="h-4 w-4" />
          </motion.div>
        </motion.div>
      </section>

      {/* 2. INTRO STRIP */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="max-w-[1200px] mx-auto px-8 py-28 md:py-36 text-center"
      >
        <motion.div variants={fadeIn}>
          <span className="text-[11px] tracking-[0.3em] uppercase text-emerald-800 font-bold mb-6 block">
            {diarchData.introduction.title}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-stone-900 leading-tight mb-8 max-w-4xl mx-auto">
            Not another spice brand.<br />
            <span className="italic text-emerald-800 font-normal">A luxury pantry house.</span>
          </h2>
          <p className="text-base md:text-lg text-stone-500 max-w-2xl mx-auto leading-relaxed">
            {diarchData.introduction.content}
          </p>
        </motion.div>
      </motion.section>

      {/* 3. LUXURY PRODUCT GRID */}
      <section className="bg-stone-50 border-t border-b border-stone-200/60 py-24 md:py-32">
        <div className="max-w-[1600px] mx-auto px-8 lg:px-16">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <motion.span variants={fadeIn} className="text-[11px] tracking-[0.3em] uppercase text-emerald-800 font-bold mb-5 block">
              The Signature Range
            </motion.span>
            <motion.h2 variants={fadeIn} className="text-5xl md:text-6xl lg:text-7xl font-serif text-stone-900 leading-[1.05] mb-6">
              Featured<br />
              <span className="italic text-emerald-800">Products</span>
            </motion.h2>
            <motion.p variants={fadeIn} className="text-base text-stone-500 max-w-xl mx-auto">
              Export-grade spices from India's finest seasonal harvests.
            </motion.p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8"
          >
            {diarchData.products.slice(0, 8).map((prod) => (
              <motion.article
                key={prod.id}
                variants={scaleIn}
                className="group bg-white rounded-3xl border border-stone-200/60 overflow-hidden hover:shadow-2xl transition-all duration-700"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-stone-50 flex items-center justify-center p-6">
                  <img
                    src={prod.hasMockup ? (prod as any).mockup : prod.img}
                    alt={prod.name}
                    className="h-full w-full object-contain transition-transform duration-[1500ms] ease-out group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-[#FAF9F5]/95 backdrop-blur-sm text-stone-900 text-[10px] tracking-[0.2em] uppercase px-3 py-1.5 rounded-full font-semibold border border-stone-200">
                    {prod.tag}
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <span className="text-[10px] tracking-[0.2em] text-stone-400 uppercase font-bold mb-2 block">
                    {prod.origin}
                  </span>
                  <h3 className="text-xl font-serif text-stone-900 mb-3 group-hover:text-emerald-800 transition-colors duration-300">
                    {prod.name}
                  </h3>
                  <p className="text-sm text-stone-500 leading-relaxed mb-5 line-clamp-2">
                    {prod.desc}
                  </p>
                  <div className="flex items-center justify-between pt-5 border-t border-stone-100">
                    <span className="text-[10px] tracking-wider text-stone-400 uppercase font-semibold">
                      {prod.sizes.join(' · ')}
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

            {/* Placeholder slots */}
            {[9, 10].map((id) => (
              <motion.div
                key={id}
                variants={scaleIn}
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center mt-16"
          >
            <a
              href="/collections"
              className="inline-flex items-center gap-3 bg-stone-900 text-white text-xs tracking-[0.2em] uppercase font-bold px-10 py-4 hover:bg-emerald-800 transition-all duration-500"
            >
              View All Collections
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* 4. BRAND STATS STRIP */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="bg-emerald-950 text-white py-20 md:py-24"
      >
        <div className="max-w-[1200px] mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          <motion.div variants={fadeIn}>
            <span className="text-5xl md:text-6xl font-serif text-emerald-400 block mb-2">25+</span>
            <span className="text-[10px] tracking-[0.2em] uppercase text-stone-400">Diaspora Cities</span>
          </motion.div>
          <motion.div variants={fadeIn}>
            <span className="text-5xl md:text-6xl font-serif text-emerald-400 block mb-2">10</span>
            <span className="text-[10px] tracking-[0.2em] uppercase text-stone-400">Signature Products</span>
          </motion.div>
          <motion.div variants={fadeIn}>
            <span className="text-5xl md:text-6xl font-serif text-emerald-400 block mb-2">9</span>
            <span className="text-[10px] tracking-[0.2em] uppercase text-stone-400">Product Categories</span>
          </motion.div>
          <motion.div variants={fadeIn}>
            <span className="text-5xl md:text-6xl font-serif text-emerald-400 block mb-2">2016</span>
            <span className="text-[10px] tracking-[0.2em] uppercase text-stone-400">Year Founded</span>
          </motion.div>
        </div>
      </motion.section>

      {/* 5. FOUNDER MESSAGE */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="max-w-[1000px] mx-auto px-8 py-28 md:py-36"
      >
        <motion.div variants={fadeIn} className="text-center mb-16">
          <span className="text-[11px] tracking-[0.3em] uppercase text-emerald-800 font-bold mb-5 block">
            Leadership
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-4">
            {diarchData.founderMessage.title}
          </h2>
          <p className="text-emerald-800 font-medium text-xs tracking-[0.2em] uppercase">
            {diarchData.founderMessage.subheading}
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn}
          className="space-y-8 text-stone-600 text-base leading-relaxed max-w-3xl mx-auto text-center"
        >
          <p className="italic text-lg text-stone-700">
            "{diarchData.founderMessage.paragraphs[0]}"
          </p>
          <p className="text-sm text-stone-500">
            {diarchData.founderMessage.paragraphs[1]}
          </p>
        </motion.div>

        <motion.div variants={fadeIn} className="mt-16 pt-8 border-t border-stone-200 text-center">
          <p className="font-serif font-bold text-stone-900 text-xl md:text-2xl">
            — {diarchData.founderMessage.author}
          </p>
          <p className="text-stone-400 text-[10px] tracking-[0.2em] uppercase mt-2">
            {diarchData.founderMessage.designation}
          </p>
        </motion.div>
      </motion.section>

      {/* 6. FOOTER */}
      <footer className="bg-stone-950 text-stone-400 pt-20 pb-10 px-8 border-t border-stone-800/50">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-stone-800/60">
            <div className="lg:col-span-5 max-w-md">
              <div className="font-serif text-3xl text-white mb-4">
                Diarch <span className="italic text-emerald-500">Organic</span>
              </div>
              <p className="text-stone-500 text-sm leading-relaxed mb-6">
                Premium, hygienically processed, export-grade pantry essentials. Sourced from celebrated agricultural belts.
              </p>
              <div className="text-[10px] text-stone-400 tracking-[0.2em] uppercase">
                A Division of the Diarch Group
              </div>
            </div>

            <div className="lg:col-span-3">
              <h4 className="text-[10px] tracking-[0.25em] uppercase text-white font-bold mb-6">Navigate</h4>
              <ul className="space-y-3 text-sm text-stone-500">
                <li><a href="/" className="hover:text-emerald-500 transition-colors">Home</a></li>
                <li><a href="/collections" className="hover:text-emerald-500 transition-colors">Collections</a></li>
                <li><a href="/story" className="hover:text-emerald-500 transition-colors">Our Story</a></li>
                <li><a href="/philosophy" className="hover:text-emerald-500 transition-colors">Philosophy</a></li>
                <li><a href="/contact" className="hover:text-emerald-500 transition-colors">Inquire</a></li>
              </ul>
            </div>

            <div className="lg:col-span-4">
              <h4 className="text-[10px] tracking-[0.25em] uppercase text-white font-bold mb-6">Contact</h4>
              <div className="space-y-3 text-sm text-stone-500">
                <p>{diarchData.contact.phone}</p>
                <p>{diarchData.contact.email}</p>
                <p className="text-xs leading-relaxed">{diarchData.contact.office}</p>
              </div>
            </div>
          </div>

          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] text-stone-500">
            <span>© 2026 Diarch Organic. All Rights Reserved.</span>
            <span className="tracking-[0.15em] uppercase text-stone-600">Roots of India · Reach of the World</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
