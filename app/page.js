'use client';

import { useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import {
  Menu,
  X,
  ArrowRight,
  CheckCircle,
  MessageSquare,
  PhoneCall,
  TrendingUp,
  Clock,
  ShieldCheck,
  BarChart3,
} from 'lucide-react';

const features = [
  'Product management (manual + Excel import)',
  'Replace / Append inventory',
  'Daily sales dashboard',
  'Pending market payments',
  'Low-stock alerts',
  'Instant search (no scrolling)',
  'Flexible pricing',
  'Auto bill calculation',
  'Multi-product billing',
  'Stock limit validation',
  'Customer ledger (without billing)',
  'Paid / Unpaid / Partial payments',
  'Date sorting',
  'Warehouse/location tracking',
  'WhatsApp integration (one click message send)',
  'Built-in calculator',
  'Business hours support',
  'Cloud based',
  'Invoice printable',
  'Auto sort unpaid and partial payments',
];

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const headerBg = useTransform(scrollY, [0, 120], ['rgba(0,0,0,0)', 'rgba(0,0,0,0.92)']);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <div className="bg-black text-white min-h-screen font-['Inter'] overflow-x-hidden">
      <motion.nav
        style={{ backgroundColor: headerBg }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-cyan-500/20 backdrop-blur-xl"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <button
            onClick={() => scrollToSection('hero')}
            className="font-bold tracking-wide bg-gradient-to-r from-cyan-300 to-cyan-500 bg-clip-text text-transparent"
          >
           ProfitPilot PK
          </button>

          <div className="hidden md:flex items-center gap-8 text-sm">
            {[
              { label: 'Features', id: 'features' },
              { label: 'Why Choose Us', id: 'why-us' },
              { label: 'How It Works', id: 'how-it-works' },
              { label: 'Contact', id: 'contact' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-300 hover:text-cyan-300 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-300 hover:text-cyan-300 transition-colors"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-cyan-500/20"
            >
              <div className="px-4 py-3 space-y-2">
                {[
                  { label: 'Features', id: 'features' },
                  { label: 'Why Choose Us', id: 'why-us' },
                  { label: 'How It Works', id: 'how-it-works' },
                  { label: 'Contact', id: 'contact' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left px-3 py-2 rounded-md text-gray-300 hover:text-cyan-300 hover:bg-cyan-500/10 transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <section id="hero" className="relative pt-28 pb-20 md:pt-36 md:pb-28 border-b border-cyan-500/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.24),transparent_45%),radial-gradient(circle_at_80%_75%,rgba(8,145,178,0.22),transparent_45%)]" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block mb-5 px-4 py-2 rounded-full border border-cyan-400/40 bg-cyan-500/10 text-cyan-300 text-sm"
          >
            Built for businesses across Pakistan
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            Save Time and Grow Revenue
            <span className="block bg-gradient-to-r from-cyan-300 to-cyan-500 bg-clip-text text-transparent mt-2">
              Smart Inventory, Billing, and Sales System
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto mt-6 text-lg text-gray-300"
          >
            Manage stock, invoices, pending payments, and customer ledgers in one cloud-based platform.
            Built for local business workflows with fast performance and simple operations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={() => scrollToSection('features')}
              className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-cyan-600 text-black font-bold rounded-lg flex items-center gap-2 hover:scale-105 transition-transform"
            >
              Explore Features <ArrowRight size={18} />
            </button>
            <a
              href="https://wa.me/923285839471"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-cyan-400/40 text-cyan-300 rounded-lg font-semibold flex items-center gap-2 hover:bg-cyan-500/10 transition-colors"
            >
              <MessageSquare size={18} />
              WhatsApp Demo
            </a>
          </motion.div>
        </div>
      </section>

      <section id="features" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <div className="text-center mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold"
          >
            Full Feature Set
          </motion.h2>
          <p className="text-gray-400 mt-3 text-lg">
            End-to-end business control from inventory to payment recovery.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.02 }}
              viewport={{ once: true }}
              className="border border-cyan-500/20 rounded-xl bg-gray-950/60 p-4 flex items-start gap-3"
            >
              <CheckCircle size={18} className="text-cyan-400 mt-0.5 shrink-0" />
              <span className="text-gray-200">{feature}</span>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="why-us" className="border-y border-cyan-500/20 py-14 md:py-20 bg-gray-950/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h3 className="text-3xl md:text-5xl font-bold">Why Choose This System</h3>
            <p className="text-gray-400 mt-3 text-lg">
              Built to solve daily business pain points, not just to look good.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Clock,
                title: 'Saves Operational Time',
                desc: 'Instant search, auto calculations, and smart sorting remove manual work and speed up daily operations.',
              },
              {
                icon: TrendingUp,
                title: 'Improves Revenue Control',
                desc: 'Pending payment tracking and payment status visibility help recover dues and reduce cash flow leakage.',
              },
              {
                icon: BarChart3,
                title: 'Better Decision Making',
                desc: 'Daily sales dashboards and low-stock alerts give you clear visibility for faster, smarter planning.',
              },
              {
                icon: ShieldCheck,
                title: 'Reliable for Real Business Use',
                desc: 'Cloud-based access, warehouse tracking, invoice printing, and ledger control make it practical for daily growth.',
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-cyan-500/20 bg-black/50 p-6"
              >
                <div className="w-11 h-11 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mb-4">
                  <item.icon size={20} className="text-cyan-300" />
                </div>
                <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <div className="text-center mb-10">
          <h3 className="text-3xl md:text-5xl font-bold">How It Works</h3>
          <p className="text-gray-400 mt-3 text-lg">
            Quick setup with direct support and business-hour assistance.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          {[
            { step: '01', title: 'Discuss', desc: 'Share your current workflow and challenges.' },
            { step: '02', title: 'Setup', desc: 'We configure products, stock logic, and billing rules.' },
            { step: '03', title: 'Train', desc: 'You get a simple walkthrough for your team.' },
            { step: '04', title: 'Run', desc: 'Use daily with ongoing support through WhatsApp/call.' },
          ].map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="rounded-xl border border-cyan-500/20 bg-gray-950/60 p-5"
            >
              <p className="text-cyan-300 font-bold text-xl">{item.step}</p>
              <h4 className="font-semibold mt-1">{item.title}</h4>
              <p className="text-gray-400 text-sm mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="contact" className="border-t border-cyan-500/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
          <h3 className="text-3xl md:text-4xl font-bold">Contact for Demo / Setup</h3>
          <p className="text-gray-400 mt-4 text-lg">
            No Calendly. Direct call and WhatsApp support for faster response.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center justify-center">
            <a
              href="tel:03285839471"
              className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-cyan-600 text-black font-bold rounded-lg flex items-center gap-2 hover:scale-105 transition-transform"
            >
              <PhoneCall size={18} />
              Call: 03285839471
            </a>
            <a
              href="https://wa.me/923285839471"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-cyan-400/40 text-cyan-300 rounded-lg font-semibold flex items-center gap-2 hover:bg-cyan-500/10 transition-colors"
            >
              <MessageSquare size={18} />
              WhatsApp: 03285839471
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-cyan-500/20 py-8 text-center text-sm text-gray-500">
        <p>ProfitPilot PK - Cloud based system for inventory, billing, and sales management.</p>
      </footer>
    </div>
  );
}