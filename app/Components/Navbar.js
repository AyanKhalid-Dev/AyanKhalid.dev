'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Github, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];
  

  return (
    <>
      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-xl border-b border-purple-500/30">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">

          <Link href="/" className="z-50">
            <h1 className="text-2xl md:text-3xl font-black">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-cyan-300 to-purple-400">
                Ayan Khalid
              </span>
            </h1>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map(link => (
              <Link key={link.name} href={link.href} className="text-gray-300 hover:text-white text-lg font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-purple-400 after:to-cyan-400 after:transition-all hover:after:w-full transition">
                {link.name}
              </Link>
            ))}
            <a href="https://github.com/AyanKhalid-Dev" target="_blank" className="p-3 rounded-full bg-white/10 border border-white/20 hover:border-purple-500/70 transition">
              <Github className="w-6 h-6 text-gray-300 hover:text-white" />
            </a>
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden z-50">
            {isOpen ? <X className="w-9 h-9 text-white" /> : <Menu className="w-9 h-9 text-white" />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU — AB TEXT BILKUL CLEAR DIKHEGA */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-gradient-to-br from-[#0d1b1e] via-[#071012] to-[#001f24]">

          
          {/* Subtle purple-cyan glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-transparent to-cyan-900/40" />
          
          {/* Content — Super Clear */}
          <div className="relative h-full flex flex-col items-center justify-center gap-16 px-8">

            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 p-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/30 hover:bg-white/20 transition-all hover:scale-110"
            >
              <X className="w-10 h-10 text-white" />
            </button>

            {/* Navigation Links — Bada, Bold, Clear */}
            <section className='mt-10 flex flex-col gap-10 text-center'>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl  sm:text-7xl font-black text-white hover:scale-110 transition-all duration-300"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-cyan-300 to-purple-300 drop-shadow-2xl">
                  {link.name}
                </span>
              </Link>
            ))}
            </section>

            {/* GitHub Icon */}
            <a
              href="https://github.com/AyanKhalid-Dev"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 p-2 rounded-3xl bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 transition-all duration-300 shadow-2xl hover:scale-110"
            >
              <Github className="w-15 h-15 text-white" />
            </a>
          </div>
        </div>
      )}
      </>
  )
}
      