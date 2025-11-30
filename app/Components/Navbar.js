'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Github, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const sections = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-xl border-b border-purple-500/30">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="z-50">
            <h1 className="text-2xl md:text-3xl font-black">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-cyan-300 to-purple-400">
                Ayan Khalid
              </span>
            </h1>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {sections.map(sec => (
              <Link
                key={sec.name}
                href={`#${sec.id}`}
                className="text-lg font-medium text-gray-300 hover:text-white transition
                relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r 
                after:from-purple-400 after:to-cyan-400 after:transition-all hover:after:w-full"
              >
                {sec.name}
              </Link>
            ))}

            <a
              href="https://github.com/AyanKhalid-Dev"
              target="_blank"
              className="p-3 rounded-full bg-white/10 border border-white/20 hover:border-purple-500/70 transition"
            >
              <Github className="w-6 h-6 text-gray-300 hover:text-white" />
            </a>
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden z-50">
            {isOpen ? <X className="w-9 h-9 text-white" /> : <Menu className="w-9 h-9 text-white" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-gray-950 mt-20">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 to-cyan-900/40" />

          <div className="relative h-full flex flex-col items-center justify-center gap-16">
            

            {sections.map(sec => (
              <Link
                key={sec.name}
                href={`#${sec.id}`}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-black text-white hover:scale-110 transition"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-cyan-300">
                  {sec.name}
                </span>
              </Link>
            ))}

            <a
              href="https://github.com/AyanKhalid-Dev"
              target="_blank"
              className="p-4 rounded-3xl bg-gradient-to-r from-purple-600 to-cyan-600 hover:scale-110 transition shadow-2xl"
            >
              <Github className="w-10 h-10 text-white" />
            </a>
          </div>
        </div>
      )}

      <div className="h-24 md:h-28" />
    </>
  );
}
