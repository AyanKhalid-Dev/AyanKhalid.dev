// app/page.tsx  (ya components/Hero.tsx — jahan bhi hai)
import { Github, ExternalLink, Mail, Calendar, Code2, Zap, Rocket } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <>
     

      {/* FIXED BACKGROUND */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-0 bg-[radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]" />
      </div>

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 text-center pt-20 pb-32">
        <div className="max-w-5xl w-full">
          <h1 className="text-6xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mt-[30px] mb-1 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-cyan-300">
              Full Stack Developer
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-purple-200 mb-4 font-light">
            Building Digital Experiences That Matter
          </p>

          <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 sm:p-8 mb-5 max-w-4xl mx-auto">
            <p className="text-lg sm:text-xl md:text-2xl text-gray-100 leading-relaxed md:w-full">
              Hi, I’m <span className="text-cyan-300 font-bold">Ayan Khalid</span> Full-Stack Developer specializing in<br className="hidden sm:block" />
              <span className="text-purple-300 font-bold"> high-converting roofing websites</span>.
              <br/><br/>
              I build <span className="text-cyan-300 font-bold">lead-generating machines</span> that load in &lt;1.5s,
              rank #1 locally, and make your phone ring non-stop.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center w-full max-w-md sm:max-w-3xl mx-auto">
  <a
    href="#projects"
    className="px-10 py-5 sm:px-12 sm:py-6 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-bold text-lg sm:text-xl rounded-full hover:scale-105 transition-all shadow-2xl"
  >
    View My Work
  </a>

  <a
    href="#contact"
    className="px-10 py-5 sm:px-12 sm:py-6 border-2 border-purple-400 text-purple-300 font-bold text-lg sm:text-xl rounded-full hover:bg-purple-500/20 transition-all hover:scale-105"
  >
    Let's Talk Project
  </a>
</div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 sm:py-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-8">About Me</h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-16">
            Turning roofing businesses into online lead machines with blazing-fast, Google-dominating websites.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: Code2, title: "Pixel Perfect", desc: "Clean, modern designs that convert visitors into calls" },
              { icon: Zap, title: "Blazing Fast", desc: "90+ Lighthouse scores — websites that load instantly" },
              { icon: Rocket, title: "Lead Focused", desc: "Every site built to fill your calendar with jobs" }
            ].map((item, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-purple-500/50 hover:bg-white/10 transition-all duration-500 hover:-translate-y-3">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-3xl mx-auto mb-6 flex items-center justify-center">
                  <item.icon className="w-10 h-10 text-purple-300" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-300 text-base sm:text-lg">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="py-20 sm:py-32 px-6 bg-black/30">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-8">Tech Stack</h2>
          <p className="text-purple-200 text-lg sm:text-xl mb-12">Tools I use to build roofing empires online</p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {["Next.js", "React", "Tailwind CSS", "Node.js", "MongoDB", " Formspree ", "Vercel", "GitHub"].map((tech) => (
              <div key={tech} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl px-6 py-8 hover:border-purple-500/60 hover:bg-white/8 transition-all">
                <p className="text-[18px] sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                  {tech}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-20 sm:py-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-8">Featured Projects</h2>
          <p className="text-purple-200 text-lg sm:text-xl mb-16">Real roofing websites getting real jobs daily</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
  {[
    {
      name: "SummitPro Roofing",
      desc: "100/100 SEO · Gallery + Formspree · Helps you get not only general messages but also actual leads",
      live: "https://summitproroofing.vercel.app",
      github: "https://github.com/AyanKhalid-Dev/summitproroofing",
    },
    {
      name: "Apex Roofing Co",
      desc: "Emergency CTA + Quote Request Form · Make your phone ring whole day",
      live: "https://apexroofingco.vercel.app",
      github: "https://github.com/AyanKhalid-Dev/apexroofingco",
    },
    {
      name: "PeakShield Roofing",
      desc: "24/7 leads + Quote Request · potential of #1 Google in 3 weeks",
      live: "https://peakshieldroofing.vercel.app",
      github: "https://github.com/AyanKhalid-Dev/peakshieldroofing",
    },
  ].map((p) => (
    <div
      key={p.name}
      className="group bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 hover:border-purple-500/60 hover:bg-white/8 transition-all duration-500 hover:-translate-y-2"
    >
      <h3 className="text-3xl sm:text-4xl font-black text-white mb-4">
        {p.name}
      </h3>

      <p className="text-gray-300 mb-8 text-base sm:text-lg leading-relaxed">
        {p.desc}
      </p>

      <div className="flex gap-4 flex-col md:flex-row">
        {/* GitHub Button */}
        <a
          href={p.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-4 bg-gradient-to-r from-cyan-500 to-cyan-900 text-white font-bold rounded-2xl hover:from-cyan-600 hover:to-cyan-900 transition-all shadow-xl flex items-center justify-center gap-3"
        >
          <Github className="w-5 h-5" /> Github
        </a>

        {/* Live Demo Button */}
        <a
          href={p.live}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-bold rounded-2xl hover:from-purple-600 hover:to-cyan-600 transition-all shadow-xl flex items-center justify-center gap-3"
        >
          <ExternalLink className="w-5 h-5" /> Live Demo
        </a>
      </div>
    </div>
  ))}
</div>

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 sm:py-32 px-6">
        <div className="min-h-screen flex flex-col justify-center items-center text-center">
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-8">
            Let's Build Your Next Lead Machine
          </h2>
          <p className="text-purple-200 text-lg sm:text-xl mb-16 max-w-2xl">
            Ready to dominate Google and get daily roofing jobs?
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl w-full px-6">
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-10 border border-white/10 hover:border-purple-500/60 transition-all duration-500 hover:scale-105">
              <div className="flex flex-col items-center space-y-5">
                <div className="p-6 bg-purple-500/10 rounded-2xl">
                  <Mail className="w-16 h-16 text-purple-400" />
                </div>
                <p className="text-purple-300 text-sm tracking-wider">EMAIL ME</p>
                <a href="mailto:ayan@ayankhalid.dev" className="text-2xl md:text-3xl font-black text-white hover:text-purple-300 transition">
                  ayan@ayankhalid.dev
                </a>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-10 border border-white/10 hover:border-purple-500/60 transition-all duration-500 hover:scale-105">
              <div className="flex flex-col items-center space-y-5">
                <div className="p-6 bg-purple-500/10 rounded-2xl">
                  <Calendar className="w-16 h-16 text-purple-400" />
                </div>
                <p className="text-purple-300 text-sm tracking-wider">BOOK A CALL</p>
                <a href="https://calendly.com/ayan-ayankhalid/15-minute-meeting" target="_blank" rel="noopener noreferrer" className="text-2xl md:text-3xl font-black text-white hover:text-purple-300 transition">
                  Free 15-min Strategy Call
                </a>
              </div>
            </div>
          </div>

          <a href="https://calendly.com/ayan-ayankhalid/30min" target="_blank" className="mt-16 px-12 py-6 sm:px-16 sm:py-8 bg-gradient-to-r from-purple-600 to-cyan-600 text-white text-xl sm:text-2xl font-black rounded-full hover:scale-110 transition-all shadow-2xl">
            Book Free Call Now
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black/40 backdrop-blur-2xl border-t border-purple-500/20 py-16 mt-32">
  <div className="max-w-7xl mx-auto px-6 text-center">

    {/* Logo / Name */}
    <h2 className="text-4xl sm:text-6xl font-black mb-8">
      <Link href="/" className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-cyan-300 to-purple-400 hover:from-cyan-300 hover:to-purple-400 transition-all duration-500">
        Ayan Khalid
      </Link>
    </h2>

    <p className="text-purple-200 text-base sm:text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
      Building high-converting, lightning-fast roofing websites that get you more calls, more jobs, and more revenue.
    </p>

    {/* Social / Contact Icons */}
    <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-12">

      {/* Email */}
      <a
        href="mailto:ayan@ayankhalid.dev"
        className="group flex items-center gap-4 px-8 py-5 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-purple-500/60 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20"
      >
        <Mail className="w-7 h-7 text-purple-400 group-hover:scale-110 transition" />
        <span className="text-white font-medium text-lg">ayan@ayankhalid.dev</span>
      </a>

      {/* Book a Call */}
      <a
        href="https://calendly.com/ayan-ayankhalid/15-minute-meeting"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-4 px-8 py-5 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl hover:from-purple-500 hover:to-cyan-500 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl hover:shadow-purple-600/50"
      >
        <Calendar className="w-7 h-7 text-white group-hover:scale-110 transition" />
        <span className="text-white font-bold text-lg">Book Free Call</span>
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/AyanKhalid-Dev"
        target="_blank"
        rel="noopener noreferrer"
        className="group p-5 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-cyan-500/60 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-cyan-500/20"
      >
        <Github className="w-8 h-8 text-cyan-400 group-hover:text-white transition" />
      </a>

    </div>

    {/* Copyright */}
    <div className="text-gray-500 text-sm tracking-wider">
      © {new Date().getFullYear()} Ayan Khalid. Built with 
      <span className="text-purple-400 font-semibold"> Next.js & Love</span>
    </div>

    {/* Decorative glow line */}
    <div className="mt-10 h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent max-w-md mx-auto" />
  </div>
</footer>
    </>
  );
}