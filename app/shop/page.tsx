'use client';

import { useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import { Mail, Globe, Instagram, Star, StarHalf, ArrowRight, SlidersHorizontal, Check } from 'lucide-react';

import pTurmeric from '../assets/p-turmeric.png';
import pChilli from '../assets/p-chilli.png';
import pCumin from '../assets/p-cumin.png';
import pCardamom from '../assets/p-cardamom.png';

const products = [
  { id: 1, tag: "Organic", rating: 4.8, name: "Alleppey Turmeric", desc: "High curcumin content, ethically harvested.", price: 12.00, category: "Ground Powders", sizes: ["100g", "250g", "500g"], img: pTurmeric },
  { id: 2, tag: "Artisanal", rating: 5.0, name: "Hand-pounded Chilli", desc: "Smoky, robust heat from sun-dried peppers.", price: 14.50, category: "Ground Powders", sizes: ["100g", "250g", "500g"], img: pChilli },
  { id: 3, tag: "Organic", rating: 4.2, name: "Wild Cumin Seeds", desc: "Earthy and aromatic, perfect for tempering.", price: 9.00, category: "Whole Seeds", sizes: ["100g", "250g", "500g"], img: pCumin },
  { id: 4, tag: "Fair Trade", rating: 4.9, name: "Green Cardamom", desc: "Sweet, floral notes. Hand-picked at dawn.", price: 22.00, category: "Whole Seeds", sizes: ["50g", "100g", "250g"], img: pCardamom },
  { id: 5, tag: "Organic", rating: 4.7, name: "Coriander Seeds", desc: "Warm, citrusy profile from premium crops.", price: 10.50, category: "Whole Seeds", sizes: ["100g", "250g", "500g"], img: pCumin },
  { id: 6, tag: "Artisanal", rating: 4.6, name: "Tellicherry Peppercorns", desc: "Pungent, bold aroma, standard of excellence.", price: 13.00, category: "Whole Seeds", sizes: ["100g", "250g", "500g"], img: pCumin },
  { id: 7, tag: "Organic", rating: 4.9, name: "Kashmiri Chilli Powder", desc: "Vibrant red color, mild and sweet heat.", price: 15.00, category: "Ground Powders", sizes: ["100g", "250g", "500g"], img: pChilli },
  { id: 8, tag: "Fair Trade", rating: 4.5, name: "True Ceylon Cinnamon", desc: "Delicate, sweet complexity, ethically sourced.", price: 18.00, category: "Artisanal Blends", sizes: ["50g", "100g", "250g"], img: pCardamom }
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

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedSizes, setSelectedSizes] = useState<Record<number, string>>({});
  const [addedItems, setAddedItems] = useState<Record<number, boolean>>({});

  const categories = ["All", "Whole Seeds", "Ground Powders", "Artisanal Blends"];

  const filteredProducts = activeCategory === "All"
    ? products
    : products.filter(p => p.category === activeCategory);

  const handleSizeChange = (productId: number, size: string) => {
    setSelectedSizes(prev => ({ ...prev, [productId]: size }));
  };

  const handleAddToCart = (productId: number) => {
    setAddedItems(prev => ({ ...prev, [productId]: true }));
    setTimeout(() => {
      setAddedItems(prev => ({ ...prev, [productId]: false }));
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-amber-50 text-slate-900">
      <Navbar />

      {/* HEADER SECTION */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-emerald-900/10 to-transparent">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase text-emerald-700 font-semibold mb-4">
            <span className="h-px w-8 bg-emerald-700" />
            100% Certified Organic Spices
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-slate-900 leading-tight">
            Our Signature Spices
          </h1>
          <p className="mt-4 text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Cultivated directly on family-owned sustainable farms, sun-dried, and stone-ground at low speeds to preserve natural oils and intense potency.
          </p>
        </div>
      </section>

      {/* FILTER & PRODUCTS SECTION */}
      <section className="pb-24 lg:pb-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          
          {/* FILTERS */}
          <div className="flex flex-col md:flex-row items-center justify-between border-b border-slate-200 pb-6 mb-12 gap-6">
            <div className="flex items-center gap-2 text-slate-500 self-start md:self-auto">
              <SlidersHorizontal className="h-4 w-4 text-emerald-700" />
              <span className="text-xs uppercase tracking-[0.15em] font-semibold">Filter:</span>
            </div>

            <div className="flex flex-wrap gap-2 w-full md:w-auto justify-start md:justify-end">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-xs uppercase tracking-[0.15em] px-4 py-2 transition-all duration-300 font-semibold rounded-full border ${
                    activeCategory === cat
                      ? "border-emerald-700 bg-emerald-700 text-amber-50"
                      : "border-slate-200 text-slate-600 hover:border-slate-800 hover:text-slate-900"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {filteredProducts.map((p) => {
              const selectedSize = selectedSizes[p.id] || p.sizes[0];
              const isAdded = addedItems[p.id];

              return (
                <article key={p.id} className="group flex flex-col bg-white/40 p-4 border border-slate-200/50 rounded hover:shadow-xl hover:bg-white/80 transition-all duration-500 ease-out">
                  {/* IMAGE */}
                  <div className="relative aspect-square overflow-hidden bg-slate-100 rounded">
                    <Image
                      src={p.img}
                      alt={p.name}
                      placeholder="blur"
                      className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                    />
                    <span className="absolute top-3 left-3 bg-amber-50/95 backdrop-blur-sm text-slate-900 text-[10px] tracking-[0.18em] uppercase px-2.5 py-1 rounded-full font-semibold border border-slate-200">
                      {p.tag}
                    </span>
                  </div>

                  {/* INFO */}
                  <div className="pt-5 flex-1 flex flex-col">
                    <Stars value={p.rating} />
                    <h3 className="mt-2 text-xl font-serif text-slate-900">{p.name}</h3>
                    <p className="mt-1 text-sm text-slate-500 leading-relaxed flex-grow">{p.desc}</p>
                    
                    {/* SIZE SELECTOR */}
                    <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
                      <span className="text-sm font-semibold text-slate-400">Size:</span>
                      <div className="flex gap-1">
                        {p.sizes.map((size) => (
                          <button
                            key={size}
                            onClick={() => handleSizeChange(p.id, size)}
                            className={`text-[10px] px-2 py-1 rounded border transition-colors ${
                              selectedSize === size
                                ? "border-emerald-700 bg-emerald-700 text-amber-50"
                                : "border-slate-200 text-slate-500 hover:border-slate-900 hover:text-slate-900"
                            }`}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* PRICE & ADD TO CART */}
                    <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
                      <span className="text-xl font-serif font-bold text-emerald-800">
                        ${p.price.toFixed(2)}
                      </span>
                      
                      <button 
                        onClick={() => handleAddToCart(p.id)}
                        className={`px-4 py-2.5 text-[10px] tracking-[0.2em] uppercase font-semibold transition-all duration-300 flex items-center gap-1.5 ${
                          isAdded 
                            ? "bg-emerald-600 text-amber-50" 
                            : "bg-slate-900 text-amber-50 hover:bg-emerald-750"
                        }`}
                      >
                        {isAdded ? (
                          <>
                            <Check className="h-3 w-3" />
                            <span>Added</span>
                          </>
                        ) : (
                          <span>Add to Cart</span>
                        )}
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-slate-500 text-lg">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-200">
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
                <a href="#" className="h-10 w-10 inline-flex items-center justify-center border border-slate-200 rounded-full hover:bg-slate-900 text-slate-700 hover:text-amber-50 hover:border-slate-900 transition-colors">
                  <Globe className="h-4 w-4" />
                </a>
                <a href="#" className="h-10 w-10 inline-flex items-center justify-center border border-slate-200 rounded-full hover:bg-slate-900 text-slate-700 hover:text-amber-50 hover:border-slate-900 transition-colors">
                  <Instagram className="h-4 w-4" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-[11px] tracking-[0.25em] uppercase text-slate-900 font-semibold mb-5">Explore</h4>
              <ul className="space-y-3 text-sm text-slate-500">
                <li><a href="/" className="hover:text-emerald-700">Home</a></li>
                <li><a href="/shop" className="hover:text-emerald-700 font-medium text-emerald-700">Shop All</a></li>
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
