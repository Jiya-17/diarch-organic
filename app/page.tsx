'use client';

import Image from "next/image";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Leaf, 
  FlaskConical, 
  Handshake, 
  Sun, 
  Star, 
  StarHalf, 
  Mail, 
  Globe, 
  Instagram,
  Activity,
  ShoppingBag
} from "lucide-react";

import hero from "./assets/hero-spices.png";
import pTurmeric from "./assets/p-turmeric.png";
import pChilli from "./assets/p-chilli.png";
import pCumin from "./assets/p-cumin.png";
import pCardamom from "./assets/p-cardamom.png";

// Premium Scroll Animation Settings
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.215, 0.610, 0.355, 1.000] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const features = [
  { icon: <Leaf className="text-emerald-600 h-7 w-7" />, title: "100% Homegrown", text: "Cultivated directly on our family-owned sustainable farms." },
  { icon: <FlaskConical className="text-emerald-600 h-7 w-7" />, title: "No Chemicals", text: "Absolutely free from artificial preservatives and additives." },
  { icon: <Handshake className="text-emerald-600 h-7 w-7" />, title: "Sourced Ethically", text: "Fair wages and respectful partnerships with local growers." },
  { icon: <Sun className="text-emerald-600 h-7 w-7" />, title: "Sun-Dried", text: "Traditional sun-drying methods to lock in essential oils." },
];

const products = [
  { tag: "Organic", rating: 4.8, name: "Alleppey Turmeric", desc: "High curcumin content, ethically harvested.", price: "$12.00", sizes: ["100g", "250g", "500g"], img: pTurmeric },
  { tag: "Artisanal", rating: 5.0, name: "Hand-pounded Chilli", desc: "Smoky, robust heat from sun-dried peppers.", price: "$14.50", sizes: ["100g", "250g", "500g"], img: pChilli },
  { tag: "Organic", rating: 4.2, name: "Wild Cumin Seeds", desc: "Earthy and aromatic, perfect for tempering.", price: "$9.00", sizes: ["100g", "250g", "500g"], img: pCumin },
  { tag: "Fair Trade", rating: 4.9, name: "Green Cardamom", desc: "Sweet, floral notes. Hand-picked at dawn.", price: "$22.00", sizes: ["50g", "100g", "250g"], img: pCardamom },
];

const journeySteps = [
  { title: "Sourcing from Earth", subtitle: "100% Organic Harvesting", desc: "We partner directly with local growers in India's most nutrient-rich soil belts, securing direct-trade fair wages and ensuring 100% pesticide-free, chemical-free organic farming practices.", icon: <Leaf className="h-6 w-6 text-emerald-700" /> },
  { title: "Sun-Dried & Hand-Picked", subtitle: "Meticulous Sorting", desc: "Harvested crops are naturally dried on large brick patios bathed in tropical sunlight. Our expert sorters meticulously hand-pick and sort out any imperfect pods or roots, ensuring only premium-grade stock moves forward.", icon: <Sun className="h-6 w-6 text-emerald-700" /> },
  { title: "Traditional Cold-Grinding", subtitle: "Locking In Potent Oils", desc: "Commercial grinding heats spices, evaporating crucial natural oils. We grind slowly using stone equipment at ultra-low speeds and temperatures to lock in the absolute peak essential oil content, flavor profile, and robust aroma.", icon: <Activity className="h-6 w-6 text-emerald-700" /> },
  { title: "Eco-Friendly Packaging", subtitle: "Sustainable Freshness", desc: "Spices are immediately packed and sealed in our biodegradable, plastic-free custom pouches and glass jars. Zero plastic waste, absolute flavor retention, and full transparency.", icon: <ShoppingBag className="h-6 w-6 text-emerald-700" /> },
];

function Stars({ value }: { value: number }) {
  const full = Math.floor(value);
  const half = value - full >= 0.5;
  return (
    <span className="inline-flex items-center text-amber-500 leading-none">
      {Array.from({ length: full }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-current" />
      ))}
      {half && <StarHalf className="h-4 w-4 fill-current" />}
      {Array.from({ length: 5 - full - (half ? 1 : 0) }).map((_, i) => (
        <Star key={`e${i}`} className="h-4 w-4 opacity-25" />
      ))}
      <span className="ml-1.5 text-xs text-slate-500 font-medium">({value.toFixed(1)})</span>
    </span>
  );
}

function ProductCard({ p }: { p: (typeof products)[number] }) {
  return (
    <motion.article variants={fadeInUp} className="group flex flex-col">
      <div className="relative aspect-square overflow-hidden bg-slate-100 rounded-sm">
        <Image
          src={p.img}
          alt={p.name}
          placeholder="blur"
          className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
        />
        <span className="absolute top-3 left-3 bg-amber-50 text-slate-900 text-[10px] tracking-[0.18em] uppercase px-2.5 py-1 rounded-full font-semibold">
          {p.tag}
        </span>
      </div>
      <div className="pt-5 flex-1 flex flex-col">
        <Stars value={p.rating} />
        <h3 className="mt-2 text-xl text-slate-900">{p.name}</h3>
        <p className="mt-1 text-sm text-slate-500">{p.desc}</p>
        <div className="mt-4 flex items-baseline gap-3">
          <span className="text-lg font-semibold text-slate-900">{p.price}</span>
          <div className="flex gap-1 ml-auto">
            {p.sizes.map((s, i) => (
              <button
                key={s}
                className={`text-[11px] px-2 py-1 rounded border transition-colors ${
                  i === 0
                    ? "border-slate-900 bg-slate-900 text-amber-50"
                    : "border-slate-200 text-slate-500 hover:border-slate-900 hover:text-slate-900"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
        <button className="mt-4 w-full border border-slate-900 py-2.5 text-xs tracking-[0.2em] uppercase font-semibold text-slate-900 hover:bg-slate-900 hover:text-amber-50 transition-colors">
          Add to Cart
        </button>
      </div>
    </motion.article>
  );
}

export default function Index() {
  return (
    <div className="min-h-screen bg-amber-50 text-slate-900 overflow-x-hidden">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-32 pb-24 lg:pt-40 lg:pb-32 grid lg:grid-cols-12 gap-10 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6 relative z-10"
          >
            <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase text-emerald-700 font-semibold mb-8">
              <span className="h-px w-8 bg-emerald-700" />
              Seed to Sensory
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl leading-[1.02] text-slate-900 font-serif">
              Pure, Homegrown <em className="italic text-emerald-700 font-normal">Spices</em> Straight From Nature's Lap.
            </h1>
            <p className="mt-7 text-base md:text-lg text-slate-600 max-w-xl leading-relaxed">
              Discover the sensory ritual of cooking with our artisanal, farm-to-table ingredients. Cultivated with respect for the earth and traditional harvesting methods.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#shop" className="inline-flex items-center gap-3 bg-slate-900 text-amber-50 px-7 py-4 text-xs tracking-[0.2em] uppercase font-semibold hover:bg-emerald-700 transition-colors">
                <span>Shop Fresh Spices</span>
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#story" className="inline-flex items-center gap-2 px-2 py-4 text-xs tracking-[0.2em] uppercase font-semibold text-slate-900 border-b border-slate-900 hover:text-emerald-700 hover:border-emerald-700 transition-colors">
                Explore Our Farms
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative aspect-[4/5] lg:aspect-[5/6] overflow-hidden rounded-sm bg-emerald-100 flex items-center justify-center">
              <Image
                src={hero}
                alt="Beautiful Arrangement of Organic Spices"
                placeholder="blur"
                className="h-full w-full object-cover"
              />
            </div>
            <motion.div 
              initial={{ scale: 0, rotate: -20 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.6 }}
              className="absolute -bottom-6 -left-6 md:-left-10 bg-amber-50 border border-slate-200 rounded-full h-32 w-32 md:h-40 md:w-40 flex flex-col items-center justify-center text-center shadow-xl"
            >
              <span className="font-serif text-3xl md:text-4xl text-emerald-700 leading-none">100%</span>
              <span className="text-[10px] tracking-[0.2em] uppercase mt-1.5 text-slate-900 font-semibold">Organic<br/>Certified</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Features Strip */}
        <div className="border-t border-slate-200 bg-slate-50">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-2 lg:grid-cols-4 divide-x divide-slate-200"
          >
            {features.map((f) => (
              <motion.div variants={fadeInUp} key={f.title} className="py-8 px-4 lg:px-8 first:pl-0 last:pr-0">
                {f.icon}
                <h3 className="mt-3 text-lg text-slate-900">{f.title}</h3>
                <p className="mt-1.5 text-sm text-slate-500 leading-relaxed">{f.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section id="shop" className="py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="flex items-end justify-between flex-wrap gap-6 mb-14"
          >
            <div>
              <div className="text-[11px] tracking-[0.25em] uppercase text-emerald-700 font-semibold mb-3">— Curated Harvest</div>
              <h2 className="text-4xl md:text-5xl text-slate-900 max-w-xl font-serif">Our signature spices, ready for your kitchen.</h2>
            </div>
            <a href="#" className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-semibold text-slate-900 hover:text-emerald-700 transition-colors">
              <span>View All Products</span> 
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8"
          >
            {products.map((p) => <ProductCard key={p.name} p={p} />)}
          </motion.div>
        </div>
      </section>

      {/* PREMIUM FARM TO TABLE INTERACTIVE TIMELINE */}
      <section id="story" className="py-24 lg:py-32 bg-[#fbf9f4] text-[#1c352d]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-2xl mx-auto mb-20"
          >
            <div className="text-[11px] tracking-[0.25em] uppercase text-amber-600 font-semibold mb-3">— Our Process</div>
            <h2 className="text-4xl md:text-5xl font-serif text-[#1c352d]">The Farm to Table Journey</h2>
            <p className="mt-5 text-gray-600 leading-relaxed">
              Discover how we bring the world's finest, unadulterated organic spices straight from our certified fields directly to your kitchen.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative border-l border-amber-200/80 ml-4 md:ml-32 space-y-12"
          >
            {journeySteps.map((j, i) => (
              <motion.div variants={fadeInUp} key={j.title} className="relative pl-8 md:pl-12 group">
                {/* Timeline Number Node */}
                <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-[#1c352d] border-4 border-[#fbf9f4] flex items-center justify-center text-white text-xs font-bold transition-transform duration-300 group-hover:scale-110 shadow-sm">
                  {i + 1}
                </div>
                {/* Premium Content Box */}
                <div className="bg-white p-6 rounded border border-slate-100 shadow-sm transition-all duration-300 group-hover:shadow-md md:-ml-24 md:pl-28 flex flex-col md:flex-row md:items-center gap-5">
                  <div className="h-12 w-12 shrink-0 bg-amber-50 rounded-full flex items-center justify-center border border-amber-100">
                    {j.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-serif text-[#1c352d] group-hover:text-emerald-700 transition-colors">{j.title}</h3>
                    <span className="text-[11px] font-medium tracking-wide text-amber-600 uppercase block mt-0.5">{j.subtitle}</span>
                    <p className="text-gray-600 text-sm mt-2 max-w-3xl leading-relaxed">{j.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FOOTER SECTION */}
      <footer id="sustain" className="bg-slate-50 pt-20 pb-10 border-t border-slate-200">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 pb-14 border-b border-slate-200">
            <div className="col-span-2 max-w-sm">
              <div className="font-serif text-2xl text-slate-900">
                Diarch <span className="italic text-emerald-700">Organic</span>
              </div>
              <p className="mt-4 text-sm text-slate-500 leading-relaxed">
                Bringing the purity of homegrown, artisanal spices to your kitchen. Cultivated with care, harvested with respect.
              </p>
              <div className="mt-6 flex gap-3">
                <a href="#" className="h-10 w-10 inline-flex items-center justify-center border border-slate-200 rounded-full hover:bg-slate-900 text-slate-700 hover:text-amber-50 hover:border-slate-900 transition-colors">
                  <Mail className="h-4 w-4" />
                </a>
                <a href="#" className="h-10 w-10 inline-flex items-center justify-center border border-border rounded-full hover:bg-slate-900 text-slate-700 hover:text-amber-50 hover:border-slate-900 transition-colors">
                  <Globe className="h-4 w-4" />
                </a>
                <a href="#" className="h-10 w-10 inline-flex items-center justify-center border border-border rounded-full hover:bg-slate-900 text-slate-700 hover:text-amber-50 hover:border-slate-900 transition-colors">
                  <Instagram className="h-4 w-4" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-[11px] tracking-[0.25em] uppercase text-slate-900 font-semibold mb-5">Explore</h4>
              <ul className="space-y-3 text-sm text-slate-500">
                <li><a href="/shop" className="hover:text-emerald-700">Shop All</a></li>
                <li><a href="/#story" className="hover:text-emerald-700">Our Story</a></li>
                <li><a href="/contact" className="hover:text-emerald-700">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[11px] tracking-[0.25em] uppercase text-slate-900 font-semibold mb-5">Support</h4>
              <ul className="space-y-3 text-sm text-slate-500">
                <li><a href="#" className="hover:text-emerald-700">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-emerald-700">Shipping Info</a></li>
                <li><a href="#" className="hover:text-emerald-700">Terms of Service</a></li>
                <li><a href="#" className="hover:text-emerald-700">Wholesale</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-6 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
            <span>© 2026 Diarch Organic. Purely Homegrown.</span>
            <span className="tracking-[0.2em] uppercase">Cultivated · Harvested · Delivered</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
