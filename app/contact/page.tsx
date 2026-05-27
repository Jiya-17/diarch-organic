'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, Globe, Instagram } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate standard form submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-amber-50 text-slate-900 flex flex-col">
      <Navbar />

      {/* HEADER SECTION */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-emerald-900/10 to-transparent">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase text-emerald-700 font-semibold mb-4">
            <span className="h-px w-8 bg-emerald-700" />
            Connect With Us
          </div>
          <h1 className="text-4xl md:text-5xl font-serif text-slate-900 leading-tight">
            Get in Touch
          </h1>
          <p className="mt-4 text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Have questions about our sustainable farming, wholesale inquiries, or want to know more about our spices? Drop us a line.
          </p>
        </div>
      </section>

      {/* FORM & INFO SECTION */}
      <section className="pb-24 lg:pb-32 flex-grow">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* CONTACT INFO CARD */}
          <div className="lg:col-span-5 bg-emerald-900 text-amber-50 p-8 lg:p-12 rounded shadow-xl flex flex-col gap-10">
            <div>
              <h2 className="text-3xl font-serif mb-4">Farm & Headquarters</h2>
              <p className="text-emerald-200 text-sm leading-relaxed">
                Experience the sensory ritual of homegrown, pure spices. You can reach us or schedule a visit to our estates.
              </p>
            </div>

            {/* INFO BLOCKS */}
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 shrink-0 bg-emerald-800/60 rounded-full flex items-center justify-center text-emerald-300">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-amber-50">Our Sustainable Farm</h3>
                  <p className="text-emerald-200/80 text-sm mt-1">
                    Diarch Spices Estate, Alleppey Hills,<br />
                    Kerala - 688001, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-10 w-10 shrink-0 bg-emerald-800/60 rounded-full flex items-center justify-center text-emerald-300">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-amber-50">Email Address</h3>
                  <p className="text-emerald-200/80 text-sm mt-1">
                    hello@diarchorganic.com<br />
                    wholesale@diarchorganic.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-10 w-10 shrink-0 bg-emerald-800/60 rounded-full flex items-center justify-center text-emerald-300">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-amber-50">Phone Number</h3>
                  <p className="text-emerald-200/80 text-sm mt-1">
                    +91 (477) 224-8900<br />
                    Mon - Sat, 9:00 AM - 6:00 PM IST
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-10 w-10 shrink-0 bg-emerald-800/60 rounded-full flex items-center justify-center text-emerald-300">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-amber-50">Working Hours</h3>
                  <p className="text-emerald-200/80 text-sm mt-1">
                    Visitor Hours: Fri - Sun (Booking required)<br />
                    Online Support: 24/7
                  </p>
                </div>
              </div>
            </div>

            {/* SOCIALS */}
            <div className="border-t border-emerald-800 pt-8 flex gap-4">
              <a href="#" className="h-10 w-10 inline-flex items-center justify-center bg-emerald-850 hover:bg-amber-50 hover:text-emerald-900 rounded-full transition-colors duration-300 text-emerald-200">
                <Globe className="h-4 w-4" />
              </a>
              <a href="#" className="h-10 w-10 inline-flex items-center justify-center bg-emerald-850 hover:bg-amber-50 hover:text-emerald-900 rounded-full transition-colors duration-300 text-emerald-200">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="lg:col-span-7 bg-white/40 p-8 lg:p-12 border border-slate-200/60 rounded shadow-sm relative overflow-hidden">
            {isSubmitted ? (
              <div className="py-16 text-center animate-fade-in flex flex-col items-center justify-center">
                <div className="h-16 w-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="h-10 w-10" />
                </div>
                <h2 className="text-3xl font-serif text-slate-900">Message Received!</h2>
                <p className="text-slate-500 mt-3 max-w-md leading-relaxed">
                  Thank you for reaching out. A member of our farm collective will get in touch with you shortly.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 bg-emerald-700 text-amber-50 px-6 py-3 text-xs tracking-[0.2em] uppercase font-semibold hover:bg-slate-900 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                  <h2 className="text-2xl font-serif text-slate-900 mb-2">Send a Message</h2>
                  <p className="text-slate-500 text-sm">
                    Fill in your details below and we will get back to you within 24 hours.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-xs uppercase tracking-[0.1em] font-semibold text-slate-500">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleInputChange}
                      className="bg-white/60 border border-slate-200 px-4 py-3 text-sm rounded outline-none focus:border-emerald-700 focus:bg-white transition-all duration-300"
                      placeholder="e.g. John Doe"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-xs uppercase tracking-[0.1em] font-semibold text-slate-500">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleInputChange}
                      className="bg-white/60 border border-slate-200 px-4 py-3 text-sm rounded outline-none focus:border-emerald-700 focus:bg-white transition-all duration-300"
                      placeholder="e.g. john@example.com"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="text-xs uppercase tracking-[0.1em] font-semibold text-slate-500">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formState.subject}
                    onChange={handleInputChange}
                    className="bg-white/60 border border-slate-200 px-4 py-3 text-sm rounded outline-none focus:border-emerald-700 focus:bg-white transition-all duration-300"
                    placeholder="e.g. Wholesale spices inquiry"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs uppercase tracking-[0.1em] font-semibold text-slate-500">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={handleInputChange}
                    className="bg-white/60 border border-slate-200 px-4 py-3 text-sm rounded outline-none focus:border-emerald-700 focus:bg-white transition-all duration-300 resize-none"
                    placeholder="Describe how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-slate-900 text-amber-50 px-8 py-4 text-xs tracking-[0.2em] uppercase font-semibold hover:bg-emerald-700 transition-colors duration-300 flex items-center justify-center gap-2 mt-2 disabled:opacity-75 disabled:cursor-not-allowed group"
                >
                  {isSubmitting ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <span>Submit Message</span>
                      <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
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
                <a href="#" className="h-10 w-10 inline-flex items-center justify-center border border-border rounded-full hover:bg-slate-900 text-slate-700 hover:text-amber-50 hover:border-slate-900 transition-colors">
                  <Instagram className="h-4 w-4" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-[11px] tracking-[0.25em] uppercase text-slate-900 font-semibold mb-5">Explore</h4>
              <ul className="space-y-3 text-sm text-slate-500">
                <li><a href="/" className="hover:text-emerald-700">Home</a></li>
                <li><a href="/shop" className="hover:text-emerald-700">Shop All</a></li>
                <li><a href="/#story" className="hover:text-emerald-700">Our Story</a></li>
                <li><a href="/contact" className="hover:text-emerald-700 font-medium text-emerald-700">Contact Us</a></li>
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
