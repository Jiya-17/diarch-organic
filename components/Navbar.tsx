'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Handle transparent to white/cream transition on scroll for home page
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Our Story', path: '/#story' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-amber-50/95 backdrop-blur-md shadow-sm border-b border-slate-200/50 py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="font-serif text-2xl tracking-tight text-slate-900 select-none group">
          Diarch <span className="italic text-emerald-700 group-hover:text-emerald-600 transition-colors">Organic</span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-10 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.name}
                href={link.path}
                className={`transition-colors relative py-1 ${
                  isActive 
                    ? 'text-emerald-700 font-semibold' 
                    : 'text-slate-700 hover:text-emerald-700'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-emerald-700 rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* ACTIONS */}
        <div className="flex items-center gap-5 text-slate-900">
          <button 
            aria-label="Search" 
            className="hover:text-emerald-700 transition-colors duration-200"
          >
            <Search className="h-5 w-5" />
          </button>
          
          <button 
            aria-label="Cart" 
            className="relative hover:text-emerald-700 transition-colors duration-200 group"
          >
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute -top-1.5 -right-2 bg-emerald-600 text-white text-[10px] font-semibold rounded-full h-4 min-w-4 px-1 flex items-center justify-center transition-transform group-hover:scale-110">
              2
            </span>
          </button>

          {/* MOBILE MENU TRIGGER */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            aria-label="Toggle Menu" 
            className="md:hidden hover:text-emerald-700 transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE NAV OVERLAY */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-[73px] bg-amber-50 z-40 animate-fade-in border-t border-slate-200">
          <nav className="flex flex-col p-6 gap-6 text-lg font-medium text-slate-900">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className={`py-2 border-b border-slate-100 transition-colors ${
                  pathname === link.path ? 'text-emerald-700 font-bold' : 'text-slate-800'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
