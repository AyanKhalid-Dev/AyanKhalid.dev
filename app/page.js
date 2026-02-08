'use client';

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  ArrowRight,
  CheckCircle,
  Code,
  Zap,
  Brain,
  Lock,
  MessageSquare,
  Calendar,
  Workflow,
  TrendingUp,
  Shield,
  GitBranch,
  Server,
  Database,
  Cpu,
  ChevronRight,
} from 'lucide-react';

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('lead-qualification');
  const { scrollY } = useScroll();
  const headerBg = useTransform(
    scrollY,
    [0, 100],
    ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.95)']
  );

  const scrollToSection = (sectionId) => {
    setMobileMenuOpen(false);
    // Add delay to allow menu to close before scrolling
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const glowVariants = {
    initial: { boxShadow: '0 0 20px rgba(0, 255, 255, 0.2)' },
    animate: {
      boxShadow: [
        '0 0 20px rgba(0, 255, 255, 0.2)',
        '0 0 50px rgba(0, 255, 255, 0.5)',
        '0 0 20px rgba(0, 255, 255, 0.2)',
      ],
      transition: { duration: 3, repeat: Infinity },
    },
  };

  const scrollVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <div className="bg-black text-white overflow-hidden font-['Inter']">
      {/* ==================== NAVIGATION ==================== */}
      <motion.nav
        style={{ backgroundColor: headerBg }}
        className="fixed w-full z-50 backdrop-blur-xl border-b border-cyan-500/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/30">
                <Code size={18} className="text-black font-bold" />
              </div>
              <div>
                <span className="text-sm font-bold bg-gradient-to-r from-cyan-300 to-cyan-400 bg-clip-text text-transparent">
                  AYAN KHALID
                </span>
                <p className="text-xs text-cyan-500/60">AI Systems Architect</p>
              </div>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-12">
              {['Services', 'Tech Stack', 'About'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className="text-sm font-medium text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <motion.button
                onClick={() => scrollToSection('cta')}
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 255, 255, 0.6)' }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2.5 bg-gradient-to-r from-cyan-400 to-cyan-600 text-black font-semibold rounded-lg transition-all duration-300 text-sm"
              >
                Free AI Audit
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-400 hover:text-cyan-400 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden pb-4 space-y-3 border-t border-cyan-500/10"
              >
                {['Services', 'Tech Stack', 'About'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                    className="block px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/5 rounded transition-colors"
                  >
                    {item}
                  </button>
                ))}
                <motion.button
                  onClick={() => scrollToSection('cta')}
                  whileHover={{ scale: 1.02 }}
                  className="block px-4 py-2.5 bg-gradient-to-r from-cyan-400 to-cyan-600 text-black font-semibold rounded-lg text-center text-sm"
                >
                  Free AI Audit
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* ==================== HERO SECTION ==================== */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Gradient Orbs */}
          <motion.div
            animate={{
              x: [0, 50, -50, 0],
              y: [0, -50, 50, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute top-20 left-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              x: [0, -50, 50, 0],
              y: [0, 50, -50, 0],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-block mb-6 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 backdrop-blur-sm"
            >
              <span className="text-sm font-medium text-cyan-400">
                AI-Powered Wealth Coaching Infrastructure
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            >
              Eliminate the Admin Work.{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                Scale Your Coaching Business.
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Reclaim 20+ hours per week while your AI ecosystem qualifies leads, books appointments,
              and manages client relationships 24/7. No more manual grind. Pure scalability.
            </motion.p>

            {/* CTA Section */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.a
                href="#cta"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-cyan-600 text-black font-bold rounded-lg shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/80 transition-all duration-300 flex items-center gap-2 text-base"
              >
                Book Your Free AI Audit <ArrowRight size={20} />
              </motion.a>
              {/* <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-8 py-4 border border-cyan-500/30 rounded-lg font-semibold text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 flex items-center gap-2 text-base"
              >
                See It In Action <ChevronRight size={20} />
              </motion.button> */}
            </motion.div>

            {/* Social Proof */}
            <motion.div
              variants={itemVariants}
              className="mt-16 pt-8 border-t border-cyan-500/10 flex flex-col sm:flex-row justify-center items-center gap-8"
            >
              <div className="text-center">
                <p className="text-3xl font-bold text-cyan-400">5+</p>
                <p className="text-sm text-gray-400">Custom Systems Built</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-cyan-400">400+</p>
                <p className="text-sm text-gray-400">Monthly AI Qualifications</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-cyan-400">87%</p>
                <p className="text-sm text-gray-400">Appointment Conversion Rate</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ==================== PROBLEM/SOLUTION SECTION ==================== */}
      <section
        id="how-it-works"
        className="py-20 md:py-32 relative overflow-hidden border-t border-cyan-500/10"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              You're a Victim of Your Own Growth
            </h2>
            <p className="text-lg text-gray-400">
              Your coaching business is thriving, but you're drowning in operational chaos.
            </p>
          </motion.div>

          {/* Problem/Solution Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* The Manual Grind */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-red-950/20 to-red-900/10 border border-red-500/20 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold mb-6 text-red-400 flex items-center gap-3">
                <span className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center">
                  ✕
                </span>
                The Manual Grind
              </h3>
              <ul className="space-y-4">
                {[
                  'Hours spent vetting unqualified leads',
                  'Sales reps working evenings to book calls',
                  'Forgotten follow-ups and lost opportunities',
                  'No visibility into lead quality or pipeline',
                  'Burnout despite growing revenue',
                  'Stuck at 6-figure ceiling (hitting growth wall)',
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3 text-gray-300"
                  >
                    <span className="text-red-400 mt-1">•</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* The Autonomous Future */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-cyan-950/20 to-cyan-900/10 border border-cyan-500/30 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold mb-6 text-cyan-400 flex items-center gap-3">
                <span className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                  ✓
                </span>
                The Autonomous Future
              </h3>
              <ul className="space-y-4">
                {[
                  'AI qualifies every inbound lead automatically',
                  'Fully booked calendar from autonomous scheduling',
                  'Zero missed opportunities (24/7 engagement)',
                  'Real-time dashboards with lead intelligence',
                  'You reclaim 20+ hours every single week',
                  'Scale to $250K+/month without hiring',
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3 text-gray-300"
                  >
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Transition Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center py-8 border-t border-cyan-500/10"
          >
            <p className="text-lg text-gray-400">
              The difference? A custom-built AI ecosystem engineered specifically for wealth coaches.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ==================== CORE PILLARS SECTION ==================== */}
      <section
        id="services"
        className="py-20 md:py-32 relative overflow-hidden border-t border-cyan-500/10"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              The Three-Fold AI Ecosystem
            </h2>
            <p className="text-lg text-gray-400">
              Three interconnected systems that turn your coaching business into a lead-generating,
              appointment-booking, revenue-scaling machine.
            </p>
          </motion.div>

          {/* Service Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                id: 'lead-qualification',
                icon: Brain,
                title: 'Lead Qualification',
                description:
                  'Custom AI vetting agents that evaluate prospect fit, financial readiness, and coachability in real-time.',
                features: [
                  'Multi-criteria lead scoring',
                  'Automated qualification flows',
                  'Integration with CRM (HubSpot, Pipedrive)',
                  'Compliance-first approach',
                ],
                color: 'cyan',
              },
              {
                id: 'appointment-setting',
                icon: Calendar,
                title: 'Appointment Setting',
                description:
                  '24/7 autonomous booking engine that never sleeps, schedules calls, and follows up on missed opportunities.',
                features: [
                  'Calendar-aware scheduling',
                  'Multi-channel outreach (Email, SMS)',
                  'Timezone-intelligent automation',
                  'No-show prevention system',
                ],
                color: 'cyan',
              },
              {
                id: 'mern-infrastructure',
                icon: Server,
                title: 'MERN Dashboards',
                description:
                  'Production-grade dashboards built with React, Node.js, and MongoDB. Full data visibility and control.',
                features: [
                  'Real-time pipeline analytics',
                  'Custom integrations',
                  'Scalable backend',
                  'Secure data architecture',
                ],
                color: 'cyan',
              },
            ].map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                onMouseEnter={() => setActiveTab(service.id)}
                className="group relative bg-gradient-to-br from-gray-900/50 to-gray-950/50 border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-cyan-500/0 group-hover:from-cyan-500/10 group-hover:to-cyan-500/5 rounded-2xl transition-all duration-300" />

                <div className="relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-xl flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-cyan-500/50 transition-all">
                    <service.icon size={24} className="text-black" />
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-2">
                    {service.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-gray-300">
                        <CheckCircle size={16} className="text-cyan-400 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Integration Visual */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-br from-gray-900/50 to-gray-950/50 border border-cyan-500/20 rounded-2xl p-12 text-center"
          >
            <h3 className="text-2xl font-bold mb-8">How They Work Together</h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
              <div className="flex items-center gap-3">
                <div className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-lg text-sm font-semibold">
                  Lead Comes In
                </div>
              </div>
              <ArrowRight className="text-cyan-400" size={24} />
              <div className="flex items-center gap-3">
                <div className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-lg text-sm font-semibold">
                  AI Qualifies
                </div>
              </div>
              <ArrowRight className="text-cyan-400" size={24} />
              <div className="flex items-center gap-3">
                <div className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-lg text-sm font-semibold">
                  Auto Books Call
                </div>
              </div>
              <ArrowRight className="text-cyan-400" size={24} />
              <div className="flex items-center gap-3">
                <div className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-lg text-sm font-semibold">
                  Dashboard Tracks
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==================== TECH STACK SECTION ==================== */}
      <section
        id="tech-stack"
        className="py-20 md:py-32 relative overflow-hidden border-t border-cyan-500/10"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Enterprise-Grade Infrastructure
            </h2>
            <p className="text-lg text-gray-400">
              Not fragile no-code bots. Robust, scalable, production-ready engineering.
            </p>
          </motion.div>

          {/* Tech Stack Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* n8n Workflows */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-gray-900/50 to-gray-950/50 border border-cyan-500/20 rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center">
                  <Workflow size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold">n8n Workflow Automation</h3>
              </div>
              <p className="text-gray-400 mb-6">
                Visual, code-free orchestration of complex automation workflows. Your AI ecosystem's
                backbone.
              </p>
              <ul className="space-y-3">
                {[
                  'Multi-step lead qualification flows',
                  'Real-time webhook integrations',
                  'Error handling and retry logic',
                  'Advanced conditional routing',
                  'Scheduled tasks and cron jobs',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                    <Zap size={16} className="text-orange-400 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* MERN Stack */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-gray-900/50 to-gray-950/50 border border-cyan-500/20 rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center">
                  <Code size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold">MERN + APIs</h3>
              </div>
              <p className="text-gray-400 mb-6">
                Production-grade full-stack systems. MongoDB, Express, React, Node.js engineered for scale.
              </p>
              <ul className="space-y-3">
                {[
                  'React dashboards with real-time updates',
                  'Node.js REST/GraphQL APIs',
                  'MongoDB data persistence',
                  'JWT authentication & security',
                  'OpenAI/Claude API integrations',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                    <Code size={16} className="text-green-400 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Tech Comparison */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-br from-gray-900/50 to-gray-950/50 border border-cyan-500/20 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-8 text-center">Why This Stack Matters</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Stability',
                  description:
                    'Battle-tested technologies. Zero vendor lock-in.',
                  icon: Shield,
                },
                {
                  title: 'Scalability',
                  description:
                    'Handles 10,000+ leads per month without performance degradation.',
                  icon: TrendingUp,
                },
                {
                  title: 'Customization',
                  description:
                    'Built to your exact specifications. Full control over your automation logic.',
                  icon: GitBranch,
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 bg-cyan-500/10 border border-cyan-500/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <item.icon size={24} className="text-cyan-400" />
                  </div>
                  <h4 className="font-bold mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-400">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Code Snippet Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-12 bg-gray-950/80 border border-cyan-500/20 rounded-2xl p-8 overflow-hidden"
          >
            <p className="text-sm text-cyan-400 font-mono mb-4">// Sample API Integration</p>
            <pre className="text-sm text-gray-300 font-mono overflow-x-auto">
              {`const qualifyLead = async (leadData) => {
  const response = await fetch('/api/qualify', {
    method: 'POST',
    headers: { 'Authorization': 'Bearer token' },
    body: JSON.stringify(leadData)
  });
  
  const { qualified, score, nextAction } = await response.json();
  
  if (qualified) {
    await bookAppointment(leadData, nextAction);
  }
  
  return { status: 'processed', score };
};`}
            </pre>
          </motion.div>
        </div>
      </section>

      {/* ==================== ABOUT THE ARCHITECT SECTION ==================== */}
      <section
        id="about"
        className="py-20 md:py-32 relative overflow-hidden border-t border-cyan-500/10"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: About Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Built by a Full-Stack Engineer, For Wealth Coaches
              </h2>
              <p className="text-gray-400 mb-6 leading-relaxed">
                I'm Ayan Khalid. I'm a full-stack engineer who spent the last 1 year building AI 
                automation systems for B2B businesses. When I started working with wealth coaches, 
                I noticed a clear pattern: they're brilliant at coaching, but drowning in admin work.
              </p>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Lead qualification. Appointment scheduling. Follow-ups. CRM management. None of it 
                requires a human but all of it was stealing hours from what actually moves the needle: 
                helping clients transform their financial lives.
              </p>
              <p className="text-gray-400 mb-6 leading-relaxed">
                So I built what I call your "AI Operations Layer" a custom-engineered system that 
                becomes an extension of your business. It learns your process, handles the repetitive 
                tasks, and gives you back the time to do what you were hired to do: coach.
              </p>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Every system I build follows engineering first principles: production-grade code, 
                full scalability, security by design. Not templates. Not low-code hacks. Real infrastructure 
                that grows with you.
              </p>

              <div className="space-y-4">
                {[
                  { label: 'Full-Stack Engineering', value: '2+ years' },
                  { label: 'AI/Automation Expertise', value: '1+ years' },
                  { label: 'Custom Systems Built', value: '5+' },
                  { label: 'Monthly Lead Volume Handled', value: '400+' },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex justify-between items-center pb-4 border-b border-cyan-500/10"
                  >
                    <span className="text-gray-400">{stat.label}</span>
                    <span className="font-bold text-cyan-400">{stat.value}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right: Visual/Tech Stack */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { icon: Database, label: 'MongoDB', color: 'green' },
                { icon: Server, label: 'Node.js', color: 'green' },
                { icon: Code, label: 'React', color: 'blue' },
                { icon: Cpu, label: 'Express', color: 'yellow' },
                { icon: Workflow, label: 'n8n', color: 'orange' },
                { icon: Brain, label: 'OpenAI/Claude', color: 'purple' },
                { icon: Lock, label: 'Security First', color: 'red' },
                { icon: TrendingUp, label: 'Scalable', color: 'cyan' },
              ].map((tech, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-950/50 border border-cyan-500/20 rounded-xl p-4 text-center hover:border-cyan-500/50 transition-all"
                >
                  <div className="w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <tech.icon size={20} className="text-cyan-400" />
                  </div>
                  <p className="text-sm font-medium text-gray-300">{tech.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Philosophy Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-16 bg-gradient-to-r from-cyan-950/30 to-gray-950/30 border border-cyan-500/20 rounded-2xl p-8 md:p-12"
          >
            <h3 className="text-2xl font-bold mb-6 text-cyan-300">My Philosophy</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Digital Twin',
                  desc: 'Your coaching business deserves an AI replica that learns your playbook.',
                },
                {
                  title: 'No Shortcuts',
                  desc: 'Custom-built systems, not bloated SaaS subscriptions. You own your data.',
                },
                {
                  title: 'Scale-First',
                  desc: 'Engineered to handle 10X growth without architectural rewrites.',
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15 }}
                >
                  <h4 className="font-bold mb-2 text-cyan-300">{item.title}</h4>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==================== PROCESS SECTION ==================== */}
      <section className="py-20 md:py-32 relative overflow-hidden border-t border-cyan-500/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              The Engagement Process
            </h2>
            <p className="text-lg text-gray-400">
              From audit to deployment in 4-6 weeks. No lengthy contracts. Pure engineering.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Free AI Audit',
                description: 'We analyze your current lead flow, identify bottlenecks, and calculate potential time savings.',
              },
              {
                step: '02',
                title: 'Custom Design',
                description: 'Custom AI ecosystem design tailored to your coaching methodology and sales process.',
              },
              {
                step: '03',
                title: 'Build & Test',
                description: 'Full development, integration testing, and QA. You get a sandbox environment to preview.',
              },
              {
                step: '04',
                title: 'Launch & Scale',
                description: 'Live deployment with 24/7 monitoring, optimization, and ongoing support included.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                className="relative"
              >
                {/* Step Number */}
                <div className="absolute -top-8 left-0 text-5xl font-bold text-cyan-500/20">
                  {item.step}
                </div>

                <div className="bg-gradient-to-br from-gray-900/50 to-gray-950/50 border border-cyan-500/20 rounded-xl p-6 pt-8 h-full hover:border-cyan-500/50 transition-all">
                  <h3 className="font-bold text-lg mb-3">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.description}</p>
                </div>

                {/* Connector Line */}
                {i < 3 && (
                  <div className="hidden md:block absolute top-20 -right-6 w-12 h-0.5 bg-gradient-to-r from-cyan-500 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== TESTIMONIALS/RESULTS ==================== */}
      <section className="py-20 md:py-32 relative overflow-hidden border-t border-cyan-500/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Results Speak Louder
            </h2>
            <p className="text-lg text-gray-400">
              Real outcomes from wealth coaches using our AI ecosystem.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                metric: '87%',
                description: 'Average appointment conversion rate (industry avg: 32%)',
                coach: 'Measurable Outcome',
              },
              {
                metric: '20+ hrs',
                description: 'Average weekly time reclaimed per system',
                coach: 'Time-Back Guarantee',
              },
              {
                metric: '3-5x',
                description: 'Lead volume increase with same operational load',
                coach: 'Typical Range',
              },
            ].map((result, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                className="bg-gradient-to-br from-cyan-950/20 to-gray-950/30 border border-cyan-500/30 rounded-2xl p-8 text-center"
              >
                <p className="text-5xl font-bold text-cyan-400 mb-4">{result.metric}</p>
                <p className="text-gray-300 mb-4">{result.description}</p>
                <p className="text-sm text-cyan-400/60">{result.coach}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA SECTION ==================== */}
      <section
        id="cta"
        className="py-20 md:py-32 relative overflow-hidden border-t border-cyan-500/10"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute inset-0 bg-gradient-to-b from-cyan-600/10 via-transparent to-transparent"
            />
          </div>

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Scale Your Coaching Business?
              </h2>
              <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
                The Free AI Audit takes 30 minutes. We'll map your current process, identify
                automation opportunities, and show you exactly how much time and revenue you could
                unlock.
              </p>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <motion.a
                  href="https://calendly.com/ayan-ayankhalid/30-minute-business-audit"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0 0 40px rgba(0, 255, 255, 0.7)',
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 bg-gradient-to-r from-cyan-400 to-cyan-600 text-black font-bold rounded-lg shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/80 transition-all duration-300 flex items-center gap-2 text-base"
                >
                  Schedule Free Audit <ArrowRight size={20} />
                </motion.a>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="px-8 py-4 border border-cyan-500/30 rounded-lg font-semibold text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300"
                >
                  ayankhalid.dev
                </motion.button>
              </motion.div>

              {/* Trust Badges */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-12 pt-8 border-t border-cyan-500/10 flex flex-col sm:flex-row justify-center items-center gap-6"
              >
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Shield size={16} className="text-cyan-400" />
                  <span>Enterprise-Grade Security</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Lock size={16} className="text-cyan-400" />
                  <span>Your Data, Your Infrastructure</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Zap size={16} className="text-cyan-400" />
                  <span>Fast Deployment</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="border-t border-cyan-500/10 py-12 md:py-16 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-lg flex items-center justify-center">
                  <Code size={16} className="text-black" />
                </div>
                <span className="font-bold bg-gradient-to-r from-cyan-300 to-cyan-400 bg-clip-text text-transparent">
                  AYAN KHALID
                </span>
              </div>
              <p className="text-sm text-gray-400">AI Systems Architect for Wealth Coaches</p>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#services" className="hover:text-cyan-400 transition-colors">Services</a></li>
                <li><a href="#tech-stack" className="hover:text-cyan-400 transition-colors">Tech Stack</a></li>
                <li><a href="#about" className="hover:text-cyan-400 transition-colors">About</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Terms</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="mailto:ayan@ayankhalid.dev" target='_blank' className="hover:text-cyan-400 transition-colors">Email</a></li>
                <li><a href="https://www.instagram.com/ayankhalidai/" target='_blank' className="hover:text-cyan-400 transition-colors">Instagram</a></li>
                <li><a href="https://www.linkedin.com/in/ayankhalid/" target='_blank' className="hover:text-cyan-400 transition-colors">LinkedIn</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-cyan-500/10 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; 2026 Ayan Khalid. All rights reserved.</p>
            <p>Engineered with precision. Built for scale.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}