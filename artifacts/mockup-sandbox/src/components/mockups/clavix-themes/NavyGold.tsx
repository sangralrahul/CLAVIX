import React from 'react';

export function NavyGold() {
  return (
    <div className="min-h-screen bg-[#0d1b2a] text-[#f8f4e8] font-sans selection:bg-[#d4af37] selection:text-[#0d1b2a]">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-[#0d1b2a]/90 backdrop-blur-md border-b border-[#d4af37]/20">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-[#d4af37] flex items-center justify-center text-[#0d1b2a] font-bold font-serif text-xl">
              C
            </div>
            <span className="font-serif text-2xl font-bold tracking-tight">Clavix</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest text-[#f8f4e8]/80">
            <a href="#about" className="hover:text-[#d4af37] transition-colors">About</a>
            <a href="#portfolio" className="hover:text-[#d4af37] transition-colors">Portfolio</a>
            <a href="#team" className="hover:text-[#d4af37] transition-colors">Team</a>
            <a href="#contact" className="hover:text-[#d4af37] transition-colors">Contact</a>
          </div>
          <button className="hidden md:block px-6 py-2 border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-[#0d1b2a] transition-all duration-300 text-sm uppercase tracking-wider">
            Partner With Us
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src="/__mockup/images/hero-navy.png" alt="Hero Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d1b2a] via-[#0d1b2a]/80 to-[#0d1b2a]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[1px] w-12 bg-[#d4af37]"></div>
              <span className="text-[#d4af37] uppercase tracking-widest text-sm font-semibold">Venture Capital</span>
            </div>
            <h1 className="font-serif text-6xl md:text-8xl font-bold leading-tight mb-8">
              Powering the next generation of <br />
              <span className="italic text-[#d4af37] font-light">Indian healthcare.</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#f8f4e8]/70 mb-12 max-w-2xl font-light leading-relaxed">
              We provide strategic capital to transformative healthcare companies, building the infrastructure for a healthier tomorrow.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="px-8 py-4 bg-[#d4af37] text-[#0d1b2a] font-semibold hover:bg-white transition-colors duration-300 uppercase tracking-wider text-sm">
                Explore Portfolio
              </button>
              <button className="px-8 py-4 border border-[#d4af37]/50 text-[#f8f4e8] hover:border-[#d4af37] transition-colors duration-300 uppercase tracking-wider text-sm">
                Our Investment Thesis
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#0f172a] border-y border-[#d4af37]/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              { label: 'Assets Under Management', value: '$500M+' },
              { label: 'Portfolio Companies', value: '42' },
              { label: 'Exits & IPOs', value: '14' },
            ].map((stat, i) => (
              <div key={i} className="border-l-2 border-[#d4af37] pl-8 py-2">
                <div className="font-serif text-5xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-[#f8f4e8]/60 uppercase tracking-widest text-xs font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24">
          <div className="md:w-1/2">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8">Strategic capital for bold founders.</h2>
            <div className="h-[2px] w-24 bg-[#d4af37] mb-8"></div>
            <p className="text-[#f8f4e8]/70 text-lg leading-relaxed mb-8">
              We look beyond the immediate horizon to identify the companies that will define the future of healthcare. Our approach is rooted in deep domain expertise and an unwavering commitment to our founders.
            </p>
            <a href="#" className="inline-flex items-center gap-3 text-[#d4af37] hover:text-white transition-colors uppercase tracking-widest text-sm font-semibold">
              Read our philosophy
              <span className="text-xl">→</span>
            </a>
          </div>
          <div className="md:w-1/2 relative">
            <div className="absolute -inset-4 border border-[#d4af37]/30 translate-x-4 translate-y-4"></div>
            <img src="/__mockup/images/team-navy.png" alt="Our Team" className="relative w-full h-[400px] object-cover" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f172a] pt-24 pb-12 px-6 border-t border-[#d4af37]/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded bg-[#d4af37] flex items-center justify-center text-[#0d1b2a] font-bold font-serif text-xl">
                  C
                </div>
                <span className="font-serif text-2xl font-bold tracking-tight">Clavix</span>
              </div>
              <p className="text-[#f8f4e8]/50 max-w-xs">
                Powering the next generation of Indian healthcare through strategic venture capital.
              </p>
            </div>
            
            <div className="flex gap-16">
              <div>
                <h4 className="text-white uppercase tracking-widest text-xs font-bold mb-6">Firm</h4>
                <div className="flex flex-col gap-4 text-[#f8f4e8]/60 text-sm">
                  <a href="#" className="hover:text-[#d4af37] transition-colors">About Us</a>
                  <a href="#" className="hover:text-[#d4af37] transition-colors">Team</a>
                  <a href="#" className="hover:text-[#d4af37] transition-colors">Careers</a>
                </div>
              </div>
              <div>
                <h4 className="text-white uppercase tracking-widest text-xs font-bold mb-6">Legal</h4>
                <div className="flex flex-col gap-4 text-[#f8f4e8]/60 text-sm">
                  <a href="#" className="hover:text-[#d4af37] transition-colors">Privacy Policy</a>
                  <a href="#" className="hover:text-[#d4af37] transition-colors">Terms of Use</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-[#d4af37]/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#f8f4e8]/40">
            <div>© {new Date().getFullYear()} Clavix Technologies. All rights reserved.</div>
            <div>Mumbai • Bengaluru • Delhi</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
