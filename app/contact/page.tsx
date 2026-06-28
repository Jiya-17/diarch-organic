'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import { diarchData } from '@/data/diarchData';
import { Mail, Phone, MapPin, Send, CircleCheck as CheckCircle2 } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

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
    <div className="min-h-screen bg-[#FAF9F5] text-stone-900 flex flex-col">
      <Navbar />

      <section className="pt-32 pb-16 bg-gradient-to-b from-emerald-950/5 to-transparent">
        <div className="max-w-[1600px] mx-auto px-8 lg:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[11px] tracking-[0.25em] uppercase text-emerald-800 font-bold mb-4 block">
              Connect With Us
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-stone-900 leading-tight">
              Get in Touch
            </h1>
            <p className="mt-4 text-base md:text-lg text-stone-500 max-w-2xl mx-auto leading-relaxed">
              Wholesale inquiries, partnership opportunities, or questions about our heritage products.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24 lg:pb-32 flex-grow">
        <div className="max-w-[1600px] mx-auto px-8 lg:px-16 grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-5 bg-emerald-950 text-stone-200 p-10 lg:p-14 rounded-3xl flex flex-col gap-10"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">Contact</h2>
              <p className="text-emerald-300 text-sm leading-relaxed">
                Reach out for wholesale inquiries, partnerships, or to learn more about our heritage.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 shrink-0 bg-emerald-900 rounded-full flex items-center justify-center text-emerald-400">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-white">Office</h3>
                  <p className="text-emerald-300/80 text-sm mt-1">{diarchData.contact.office}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 shrink-0 bg-emerald-900 rounded-full flex items-center justify-center text-emerald-400">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-white">Email</h3>
                  <p className="text-emerald-300/80 text-sm mt-1">{diarchData.contact.email}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 shrink-0 bg-emerald-900 rounded-full flex items-center justify-center text-emerald-400">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-white">Phone</h3>
                  <p className="text-emerald-300/80 text-sm mt-1">{diarchData.contact.phone}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-7 bg-white p-10 lg:p-14 rounded-3xl border border-stone-200/60 shadow-sm relative overflow-hidden"
          >
            {isSubmitted ? (
              <div className="py-16 text-center flex flex-col items-center justify-center">
                <div className="h-16 w-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="h-10 w-10" />
                </div>
                <h2 className="text-3xl font-serif text-stone-900">Message Received</h2>
                <p className="text-stone-500 mt-3 max-w-md leading-relaxed">
                  Thank you for reaching out. We will respond within 24 hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 bg-emerald-800 text-white px-8 py-3 text-xs tracking-[0.2em] uppercase font-semibold hover:bg-stone-900 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                  <h2 className="text-2xl font-serif text-stone-900 mb-2">Send a Message</h2>
                  <p className="text-stone-500 text-sm">
                    Fill in your details and we will respond shortly.
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-[0.1em] font-semibold text-stone-500">Name</label>
                    <input type="text" name="name" required value={formState.name} onChange={handleInputChange}
                      className="bg-stone-50 border border-stone-200 px-4 py-3 text-sm rounded-lg outline-none focus:border-emerald-700 focus:bg-white transition-all"
                      placeholder="Your name" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-[0.1em] font-semibold text-stone-500">Email</label>
                    <input type="email" name="email" required value={formState.email} onChange={handleInputChange}
                      className="bg-stone-50 border border-stone-200 px-4 py-3 text-sm rounded-lg outline-none focus:border-emerald-700 focus:bg-white transition-all"
                      placeholder="your@email.com" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-[0.1em] font-semibold text-stone-500">Subject</label>
                  <input type="text" name="subject" required value={formState.subject} onChange={handleInputChange}
                    className="bg-stone-50 border border-stone-200 px-4 py-3 text-sm rounded-lg outline-none focus:border-emerald-700 focus:bg-white transition-all"
                    placeholder="Inquiry type" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-[0.1em] font-semibold text-stone-500">Message</label>
                  <textarea name="message" required rows={5} value={formState.message} onChange={handleInputChange}
                    className="bg-stone-50 border border-stone-200 px-4 py-3 text-sm rounded-lg outline-none focus:border-emerald-700 focus:bg-white transition-all resize-none"
                    placeholder="How can we help..." />
                </div>
                <button type="submit" disabled={isSubmitting}
                  className="bg-stone-900 text-white px-8 py-4 text-xs tracking-[0.2em] uppercase font-semibold hover:bg-emerald-800 transition-colors flex items-center justify-center gap-2 mt-2 disabled:opacity-75">
                  {isSubmitting ? 'Sending...' : <><span>Submit Message</span><Send className="h-4 w-4" /></>}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      <footer className="bg-stone-950 text-stone-400 pt-16 pb-8 px-8 border-t border-stone-800">
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
