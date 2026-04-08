import React from 'react';
import { ArrowRight, ChevronRight, Mail, MapPin, Phone } from 'lucide-react';

export function NavyGold() {
  return (
    <div className="min-h-screen bg-[#050d1a] text-[#f5f0e8] font-['Inter'] selection:bg-[#d4af37]/30">
      {/* 1. NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050d1a]/90 backdrop-blur-md border-b border-transparent">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <div className="text-2xl font-['Playfair_Display'] font-bold text-[#d4af37] tracking-wider">
            CLAVIX
          </div>
          <div className="hidden md:flex items-center space-x-10">
            {['Ventures', 'About', 'Investors', 'Careers'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[#f5f0e8]/70 hover:text-[#d4af37] transition-colors text-sm font-medium tracking-wide uppercase"
              >
                {item}
              </a>
            ))}
          </div>
          <button className="hidden md:block px-6 py-2.5 border border-[#d4af37] text-[#d4af37] text-sm font-medium tracking-wide uppercase hover:bg-[#d4af37] hover:text-[#050d1a] transition-all duration-300">
            Get in Touch
          </button>
        </div>
      </nav>

      {/* 2. HERO */}
      <header className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden min-h-[90vh] flex items-center">
        {/* Radial Gold Glow */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[70%] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.15)_0%,rgba(5,13,26,0)_70%)] blur-3xl"></div>
        </div>

        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#050d1a] via-[#050d1a]/90 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050d1a] via-transparent to-[#050d1a]/50 z-10" />
          <img
            src="/__mockup/images/clavix-navy-hero.png"
            alt="Modern Indian Hospital"
            className="w-full h-full object-cover object-right opacity-30 mix-blend-luminosity"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-['Playfair_Display'] font-bold leading-tight mb-8">
              Powering the next generation of <span className="italic text-[#d4af37] font-medium">Indian</span> healthcare.
            </h1>
            <p className="text-lg md:text-xl text-[#9da8b5] font-['Inter'] leading-relaxed mb-12 max-w-2xl">
              We build, fund, and scale transformative medical technologies to make world-class care accessible to every doctor across the subcontinent.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="px-8 py-4 bg-[#d4af37] text-[#050d1a] font-['Inter'] font-semibold tracking-wide uppercase text-sm hover:bg-[#f0d060] transition-colors flex items-center justify-center gap-2 group">
                Explore Ventures
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 border border-[#d4af37]/50 text-[#f5f0e8] font-['Inter'] font-medium tracking-wide uppercase text-sm hover:border-[#d4af37] hover:text-[#d4af37] transition-all flex items-center justify-center">
                Investor Relations
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* 3. STATS BAR */}
      <section className="relative z-20 max-w-7xl mx-auto px-6 -mt-16 mb-24">
        <div className="bg-[#0c1a2e] border border-[#d4af37]/25 py-12 px-8 shadow-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-[#d4af37]/10">
            {[
              { label: 'Capital Deployed', value: '₹420 Cr+' },
              { label: 'Doctors Reached', value: '2.4M+' },
              { label: 'Hospitals Onboarded', value: '38' },
              { label: 'Successful Exits', value: '6' },
            ].map((stat, i) => (
              <div key={i} className={`flex flex-col ${i !== 0 ? 'pl-8' : ''}`}>
                <span className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold text-[#d4af37] mb-2">
                  {stat.value}
                </span>
                <span className="font-['Inter'] font-medium tracking-widest uppercase text-xs text-[#f5f0e8]/80">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. VENTURES GRID */}
      <section className="py-24 bg-[#050d1a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-xs font-['Inter'] font-medium tracking-widest uppercase text-[#d4af37] mb-4">Portfolio</h2>
              <h3 className="text-4xl md:text-5xl font-['Playfair_Display'] font-bold text-[#f5f0e8]">
                Transformative Ventures
              </h3>
            </div>
            <button className="text-[#d4af37] font-medium tracking-wide uppercase text-sm flex items-center gap-2 hover:text-[#f0d060] transition-colors pb-2 border-b border-[#d4af37]/30 hover:border-[#d4af37]">
              View All Portfolio <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: 'ClavixAI',
                desc: 'AI-powered clinical decision support system designed specifically for low-resource rural clinics, reducing diagnostic errors by 40%.',
              },
              {
                name: 'MedPulse',
                desc: 'Real-time patient vitals monitoring platform utilizing edge computing to alert staff seconds before critical events.',
              },
              {
                name: 'SurgicaLink',
                desc: 'High-fidelity remote surgical training & mentoring network connecting tier-1 surgeons with tier-2/3 operating rooms.',
              },
              {
                name: 'DiagnoScan',
                desc: 'Portable, AI-enhanced diagnostic imaging hardware built for rugged environments and mobile health camps.',
              },
            ].map((venture, i) => (
              <div
                key={i}
                className="group bg-[#0c1a2e] border-l-4 border-[#d4af37]/50 hover:border-[#d4af37] p-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(212,175,55,0.05)] cursor-pointer flex flex-col justify-between min-h-[280px]"
              >
                <div>
                  <h4 className="text-3xl font-['Playfair_Display'] font-bold text-[#f5f0e8] mb-4">
                    {venture.name}
                  </h4>
                  <p className="text-[#9da8b5] font-['Inter'] leading-relaxed text-lg">
                    {venture.desc}
                  </p>
                </div>
                <div className="mt-8 flex justify-end">
                  <div className="w-10 h-10 rounded-full border border-[#d4af37]/30 flex items-center justify-center group-hover:bg-[#d4af37] group-hover:border-[#d4af37] transition-all duration-300">
                    <ArrowRight className="w-5 h-5 text-[#d4af37] group-hover:text-[#050d1a] transition-colors" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. INVESTMENT THESIS */}
      <section className="py-32 relative overflow-hidden bg-[#0a1424] border-y border-[#d4af37]/10">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
            <div className="md:col-span-5">
              <h2 className="text-xs font-['Inter'] font-medium tracking-widest uppercase text-[#d4af37] mb-6">Investment Thesis</h2>
              <blockquote className="text-3xl md:text-5xl font-['Playfair_Display'] font-bold text-[#d4af37] italic leading-tight">
                "We don't just invest in companies. We architect the infrastructure of tomorrow's healthcare system."
              </blockquote>
            </div>
            
            <div className="md:col-span-6 md:col-start-7 space-y-12">
              {[
                {
                  title: 'Deep Domain Expertise',
                  desc: 'Our team comprises former chief medical officers and health-tech operators who understand the intricate realities of Indian healthcare.'
                },
                {
                  title: 'Patient-Centric Technology',
                  desc: 'We back solutions that demonstrably improve patient outcomes while lowering the absolute cost of care delivery.'
                },
                {
                  title: 'Scalable Infrastructure',
                  desc: 'Focusing on platform plays and infrastructural technologies that can support hundreds of localized medical startups.'
                }
              ].map((thesis, i) => (
                <div key={i} className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-gradient-to-b before:from-[#d4af37] before:to-transparent">
                  <h4 className="text-xl font-['Playfair_Display'] font-bold text-[#f5f0e8] mb-3">{thesis.title}</h4>
                  <p className="text-[#9da8b5] font-['Inter'] leading-relaxed">{thesis.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. TEAM */}
      <section className="py-24 bg-[#050d1a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
             <h2 className="text-xs font-['Inter'] font-medium tracking-widest uppercase text-[#d4af37] mb-4">Leadership</h2>
             <h3 className="text-4xl md:text-5xl font-['Playfair_Display'] font-bold text-[#f5f0e8]">
               Guided by Experience
             </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                name: 'Arjun Mehta',
                role: 'Founder & CEO',
                img: '/__mockup/images/clavix-navy-team-1.png'
              },
              {
                name: 'Priya Kapoor',
                role: 'Chief Investment Officer',
                img: '/__mockup/images/clavix-navy-team-2.png'
              },
              {
                name: 'Rahul Sangal',
                role: 'Head of Ventures',
                img: '/__mockup/images/clavix-navy-team-3.png'
              }
            ].map((member, i) => (
              <div key={i} className="group flex flex-col items-center text-center">
                <div className="relative mb-8 p-2 rounded-full border border-[#d4af37]/25 group-hover:border-[#d4af37] transition-colors duration-500">
                  <div className="w-48 h-48 rounded-full overflow-hidden bg-[#0c1a2e]">
                    <img 
                      src={member.img} 
                      alt={member.name} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                </div>
                <h4 className="text-2xl font-['Playfair_Display'] font-bold text-[#f5f0e8] mb-2">{member.name}</h4>
                <p className="text-xs font-['Inter'] font-medium tracking-widest uppercase text-[#9da8b5]">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FOOTER */}
      <footer className="bg-[#020710] py-20 border-t border-[#d4af37]/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="text-3xl font-['Playfair_Display'] font-bold text-[#d4af37] tracking-wider mb-6">
                CLAVIX
              </div>
              <p className="text-[#9da8b5] font-['Inter'] max-w-sm leading-relaxed mb-8 text-sm">
                Investing in India's medical future. We are building the technological foundation for the next century of healthcare delivery.
              </p>
              <div className="flex gap-4">
                 <button className="w-10 h-10 rounded border border-[#d4af37]/25 flex items-center justify-center text-[#d4af37] hover:bg-[#d4af37] hover:text-[#020710] transition-colors">
                   <span className="sr-only">LinkedIn</span>
                   <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                 </button>
                 <button className="w-10 h-10 rounded border border-[#d4af37]/25 flex items-center justify-center text-[#d4af37] hover:bg-[#d4af37] hover:text-[#020710] transition-colors">
                   <span className="sr-only">Twitter</span>
                   <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                 </button>
              </div>
            </div>
            
            <div>
              <h5 className="text-[#f5f0e8] font-['Playfair_Display'] font-bold text-lg mb-6">Navigation</h5>
              <ul className="space-y-4">
                {['Ventures', 'About Us', 'Investment Strategy', 'Careers', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-[#9da8b5] hover:text-[#d4af37] text-sm transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h5 className="text-[#f5f0e8] font-['Playfair_Display'] font-bold text-lg mb-6">Offices</h5>
              <ul className="space-y-4">
                <li className="flex gap-3 text-sm text-[#9da8b5]">
                  <MapPin className="w-5 h-5 text-[#d4af37] shrink-0" />
                  <span>Level 42, One BKC, Bandra Kurla Complex, Mumbai 400051</span>
                </li>
                <li className="flex gap-3 text-sm text-[#9da8b5]">
                  <MapPin className="w-5 h-5 text-[#d4af37] shrink-0" />
                  <span>Block C, RMZ Ecospace, Bellandur, Bengaluru 560103</span>
                </li>
                <li className="flex gap-3 text-sm text-[#9da8b5] mt-6">
                  <Mail className="w-5 h-5 text-[#d4af37] shrink-0" />
                  <span>partners@clavix.in</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-[#d4af37]/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-[#9da8b5]/60">
              © {new Date().getFullYear()} Clavix Technologies Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-xs text-[#9da8b5]/60 hover:text-[#d4af37]">Privacy Policy</a>
              <a href="#" className="text-xs text-[#9da8b5]/60 hover:text-[#d4af37]">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
