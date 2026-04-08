import React from "react";
import { Link } from "wouter";

export function ModernGradient() {
  return (
    <div className="min-h-[100dvh] bg-[#09090b] text-[#fafafa] font-['Inter'] selection:bg-purple-500/30 overflow-x-hidden">
      {/* 1. NAV */}
      <nav className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#09090b]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="font-extrabold tracking-tighter text-xl text-white">CLAVIX</span>
            <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#7c3aed] to-[#06b6d4] shadow-[0_0_10px_rgba(124,58,237,0.5)]"></span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <Link href="#ventures" className="hover:text-white transition-colors">Ventures</Link>
            <Link href="#about" className="hover:text-white transition-colors">About</Link>
            <Link href="#investors" className="hover:text-white transition-colors">Investors</Link>
            <Link href="#careers" className="hover:text-white transition-colors">Careers</Link>
          </div>
          <button className="hidden md:inline-flex h-9 items-center justify-center rounded-full bg-gradient-to-r from-[#7c3aed] via-[#2563eb] to-[#06b6d4] px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:opacity-90 hover:shadow-[0_0_20px_rgba(124,58,237,0.3)]">
            Get in Touch
          </button>
        </div>
      </nav>

      {/* 2. HERO */}
      <section className="relative pt-32 pb-20 overflow-hidden flex flex-col items-center text-center px-4">
        {/* Background Orbs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-r from-[#7c3aed]/20 via-[#2563eb]/20 to-[#06b6d4]/20 blur-[100px] rounded-full pointer-events-none -z-10 opacity-70"></div>
        <div className="absolute top-40 -left-40 w-[400px] h-[400px] bg-[#7c3aed]/20 blur-[120px] rounded-full pointer-events-none -z-10"></div>
        <div className="absolute top-20 -right-40 w-[400px] h-[400px] bg-[#06b6d4]/20 blur-[120px] rounded-full pointer-events-none -z-10"></div>

        <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium text-zinc-300 backdrop-blur-sm mb-8">
          <span className="bg-gradient-to-r from-[#7c3aed] to-[#06b6d4] bg-clip-text text-transparent mr-2">✦</span>
          Healthcare × Technology
        </div>

        <h1 className="max-w-4xl font-extrabold tracking-tighter text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-6">
          Powering the next generation of{" "}
          <span className="bg-gradient-to-r from-[#7c3aed] via-[#2563eb] to-[#06b6d4] bg-clip-text text-transparent">
            Indian healthcare.
          </span>
        </h1>

        <p className="max-w-2xl text-lg md:text-xl text-zinc-400 mb-10 font-light">
          We build, back, and scale world-class medical tools and intelligence, making them accessible to every doctor in India.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button className="w-full sm:w-auto h-12 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#7c3aed] via-[#2563eb] to-[#06b6d4] px-8 py-2 text-sm font-semibold text-white shadow-[0_0_30px_rgba(124,58,237,0.2)] transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(124,58,237,0.4)]">
            Explore Ventures
          </button>
          <button className="w-full sm:w-auto h-12 inline-flex items-center justify-center rounded-full border border-zinc-800 bg-zinc-900/50 px-8 py-2 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-zinc-800">
            Investor Relations
          </button>
        </div>

        <div className="mt-24 w-full max-w-5xl mx-auto relative group perspective-1000">
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#7c3aed] via-[#2563eb] to-[#06b6d4] opacity-20 blur-lg transition duration-1000 group-hover:opacity-40"></div>
          <div className="relative rounded-2xl border border-white/10 bg-[#09090b] p-2 shadow-2xl overflow-hidden ring-1 ring-white/5">
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
            <img 
              src="/__mockup/images/gradient-hero-medical.png" 
              alt="Medical AI Interface" 
              className="w-full h-auto rounded-xl border border-white/5 object-cover aspect-video"
            />
          </div>
        </div>
      </section>

      {/* 3. STATS BAR */}
      <section className="py-12 border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x divide-white/5">
            <div className="flex flex-col items-center justify-center text-center px-4">
              <span className="text-4xl md:text-5xl font-extrabold tracking-tighter bg-gradient-to-r from-[#7c3aed] to-[#2563eb] bg-clip-text text-transparent mb-2">₹420Cr+</span>
              <span className="text-sm font-mono text-zinc-500 uppercase tracking-widest">Deployed</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center px-4">
              <span className="text-4xl md:text-5xl font-extrabold tracking-tighter bg-gradient-to-r from-[#2563eb] to-[#06b6d4] bg-clip-text text-transparent mb-2">2.4M+</span>
              <span className="text-sm font-mono text-zinc-500 uppercase tracking-widest">Doctors Reached</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center px-4">
              <span className="text-4xl md:text-5xl font-extrabold tracking-tighter bg-gradient-to-r from-[#06b6d4] to-[#7c3aed] bg-clip-text text-transparent mb-2">38</span>
              <span className="text-sm font-mono text-zinc-500 uppercase tracking-widest">Hospitals '24</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center px-4">
              <span className="text-4xl md:text-5xl font-extrabold tracking-tighter bg-gradient-to-r from-[#7c3aed] via-[#2563eb] to-[#06b6d4] bg-clip-text text-transparent mb-2">6</span>
              <span className="text-sm font-mono text-zinc-500 uppercase tracking-widest">Successful Exits</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. VENTURES */}
      <section id="ventures" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 md:flex md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter mb-4">Portfolio Ventures</h2>
              <p className="text-lg text-zinc-400 max-w-2xl">Building the infrastructure for modern Indian healthcare.</p>
            </div>
            <Link href="#all-ventures" className="hidden md:inline-flex items-center text-sm font-medium text-[#06b6d4] hover:text-[#7c3aed] transition-colors group">
              View all ventures 
              <span className="ml-2 transform transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="group relative rounded-2xl border border-white/5 bg-[#111113] p-8 overflow-hidden transition-all hover:bg-[#161619] hover:border-white/10">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#7c3aed] to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#7c3aed]"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </div>
              <span className="inline-block px-2.5 py-1 rounded text-xs font-mono font-medium bg-[#7c3aed]/10 text-[#7c3aed] mb-4 border border-[#7c3aed]/20">AI / CLINICAL</span>
              <h3 className="text-2xl font-bold mb-3">ClavixAI</h3>
              <p className="text-zinc-400 leading-relaxed mb-6">AI-powered clinical decision support system designed specifically for rural doctors, augmenting diagnostic accuracy with limited resources.</p>
            </div>

            {/* Card 2 */}
            <div className="group relative rounded-2xl border border-white/5 bg-[#111113] p-8 overflow-hidden transition-all hover:bg-[#161619] hover:border-white/10">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2563eb] to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#2563eb]"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
              </div>
              <span className="inline-block px-2.5 py-1 rounded text-xs font-mono font-medium bg-[#2563eb]/10 text-[#2563eb] mb-4 border border-[#2563eb]/20">HARDWARE / SAAS</span>
              <h3 className="text-2xl font-bold mb-3">MedPulse</h3>
              <p className="text-zinc-400 leading-relaxed mb-6">Real-time patient vitals monitoring platform that connects remote clinics to central hospital hubs via low-bandwidth networks.</p>
            </div>

            {/* Card 3 */}
            <div className="group relative rounded-2xl border border-white/5 bg-[#111113] p-8 overflow-hidden transition-all hover:bg-[#161619] hover:border-white/10">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#06b6d4] to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#06b6d4]"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="m9 10 2 2 4-4"/></svg>
              </div>
              <span className="inline-block px-2.5 py-1 rounded text-xs font-mono font-medium bg-[#06b6d4]/10 text-[#06b6d4] mb-4 border border-[#06b6d4]/20">EDTECH / SURGERY</span>
              <h3 className="text-2xl font-bold mb-3">SurgicaLink</h3>
              <p className="text-zinc-400 leading-relaxed mb-6">Remote surgical training and mentoring network connecting expert surgeons with tier-2 city practitioners through AR-assisted streams.</p>
            </div>

            {/* Card 4 */}
            <div className="group relative rounded-2xl border border-white/5 bg-[#111113] p-8 overflow-hidden transition-all hover:bg-[#161619] hover:border-white/10">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#8b5cf6] to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#8b5cf6]"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><line x1="21.17" x2="12" y1="8" y2="8"/><line x1="3.95" x2="8.54" y1="6.06" y2="14"/><line x1="10.88" x2="15.46" y1="21.94" y2="14"/></svg>
              </div>
              <span className="inline-block px-2.5 py-1 rounded text-xs font-mono font-medium bg-[#8b5cf6]/10 text-[#8b5cf6] mb-4 border border-[#8b5cf6]/20">IMAGING / DIAGNOSTICS</span>
              <h3 className="text-2xl font-bold mb-3">DiagnoScan</h3>
              <p className="text-zinc-400 leading-relaxed mb-6">Portable, affordable diagnostic imaging devices designed for tier-2/3 cities, integrating cloud analysis for rapid results.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. MISSION */}
      <section className="py-32 relative border-y border-white/5 overflow-hidden bg-black flex flex-col items-center justify-center text-center px-6">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)] opacity-40"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="block text-7xl md:text-9xl font-serif bg-gradient-to-br from-[#7c3aed] to-[#06b6d4] bg-clip-text text-transparent leading-none h-16 md:h-24 opacity-80 select-none">"</span>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight mb-8 text-white">
            To make world-class medical tools and intelligence accessible to every doctor in India.
          </h2>
          <p className="text-xl text-zinc-500 font-light max-w-2xl mx-auto">
            We believe that geography should not dictate the quality of care. By investing in scalable, tech-forward solutions, we are bridging the healthcare divide.
          </p>
        </div>
      </section>

      {/* 6. FEATURED METRICS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-3xl border border-white/5 bg-[#09090b] p-10 flex flex-col items-start justify-between min-h-[240px] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#7c3aed]/20 blur-3xl rounded-full"></div>
              <h4 className="text-zinc-400 text-sm font-medium uppercase tracking-wider mb-8">System Scale</h4>
              <div>
                <span className="block text-5xl font-extrabold tracking-tighter text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#7c3aed] group-hover:bg-clip-text group-hover:text-transparent transition-all">4.2M</span>
                <span className="text-lg text-zinc-300">Patient scans processed monthly across our network.</span>
              </div>
            </div>
            
            <div className="rounded-3xl border border-white/5 bg-[#09090b] p-10 flex flex-col items-start justify-between min-h-[240px] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#2563eb]/20 blur-3xl rounded-full"></div>
              <h4 className="text-zinc-400 text-sm font-medium uppercase tracking-wider mb-8">Infrastructure</h4>
              <div>
                <span className="block text-5xl font-extrabold tracking-tighter text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#2563eb] group-hover:bg-clip-text group-hover:text-transparent transition-all">1,200+</span>
                <span className="text-lg text-zinc-300">Rural clinics connected to our digital health backbone.</span>
              </div>
            </div>

            <div className="rounded-3xl border border-white/5 bg-[#09090b] p-10 flex flex-col items-start justify-between min-h-[240px] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#06b6d4]/20 blur-3xl rounded-full"></div>
              <h4 className="text-zinc-400 text-sm font-medium uppercase tracking-wider mb-8">Efficiency</h4>
              <div>
                <span className="block text-5xl font-extrabold tracking-tighter text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#06b6d4] group-hover:bg-clip-text group-hover:text-transparent transition-all">65%</span>
                <span className="text-lg text-zinc-300">Reduction in time-to-diagnosis using ClavixAI tools.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. TEAM */}
      <section className="py-24 bg-white/[0.01] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter mb-4">Leadership</h2>
            <p className="text-lg text-zinc-400">The minds building the future of healthcare.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12">
            <div className="flex flex-col items-center text-center group">
              <div className="w-32 h-32 rounded-full p-1 bg-gradient-to-br from-[#7c3aed] to-transparent mb-6">
                <div className="w-full h-full rounded-full bg-zinc-900 border-4 border-[#09090b] overflow-hidden flex items-center justify-center text-zinc-700">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                </div>
              </div>
              <h4 className="text-xl font-bold text-white mb-1">Arjun Mehta</h4>
              <p className="text-sm font-mono text-zinc-400">Founder & CEO</p>
            </div>

            <div className="flex flex-col items-center text-center group">
              <div className="w-32 h-32 rounded-full p-1 bg-gradient-to-br from-[#2563eb] to-transparent mb-6">
                <div className="w-full h-full rounded-full bg-zinc-900 border-4 border-[#09090b] overflow-hidden flex items-center justify-center text-zinc-700">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                </div>
              </div>
              <h4 className="text-xl font-bold text-white mb-1">Priya Kapoor</h4>
              <p className="text-sm font-mono text-zinc-400">Chief Investment Officer</p>
            </div>

            <div className="flex flex-col items-center text-center group">
              <div className="w-32 h-32 rounded-full p-1 bg-gradient-to-br from-[#06b6d4] to-transparent mb-6">
                <div className="w-full h-full rounded-full bg-zinc-900 border-4 border-[#09090b] overflow-hidden flex items-center justify-center text-zinc-700">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                </div>
              </div>
              <h4 className="text-xl font-bold text-white mb-1">Rahul Sangal</h4>
              <p className="text-sm font-mono text-zinc-400">Head of Ventures</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FOOTER */}
      <footer className="bg-black py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
          <Link href="/" className="flex items-center gap-2 mb-8">
            <span className="font-extrabold tracking-widest text-2xl text-white">CLAVIX</span>
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#7c3aed] to-[#06b6d4] shadow-[0_0_15px_rgba(124,58,237,0.8)]"></span>
          </Link>
          
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-mono text-zinc-500 mb-12">
            <Link href="#ventures" className="hover:text-white transition-colors">Ventures</Link>
            <Link href="#about" className="hover:text-white transition-colors">About</Link>
            <Link href="#investors" className="hover:text-white transition-colors">Investors</Link>
            <Link href="#careers" className="hover:text-white transition-colors">Careers</Link>
            <Link href="#privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="#terms" className="hover:text-white transition-colors">Terms</Link>
          </div>

          <p className="text-zinc-600 font-medium tracking-wide text-sm">
            Designed for the future of Indian medicine.
          </p>
          <p className="text-zinc-700 text-xs mt-4">
            &copy; {new Date().getFullYear()} Clavix Technologies. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
