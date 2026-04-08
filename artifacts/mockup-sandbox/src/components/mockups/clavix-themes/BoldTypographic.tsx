import React from "react";

export function BoldTypographic() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#e63946] selection:text-white overflow-hidden font-['Inter']">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&display=swap');
        
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
      
      {/* NAV */}
      <nav className="border-b border-white/10 px-6 py-6 flex items-center justify-between sticky top-0 bg-black z-50">
        <div>
          <div className="font-['Bebas_Neue'] text-4xl tracking-wider leading-none">CLAVIX</div>
          <div className="h-[2px] w-full bg-[#e63946] mt-1"></div>
        </div>
        <div className="hidden md:flex gap-12 font-bold uppercase tracking-[0.3em] text-xs text-white">
          <a href="#" className="hover:text-[#e63946] transition-colors">Ventures</a>
          <a href="#" className="hover:text-[#e63946] transition-colors">About</a>
          <a href="#" className="hover:text-[#e63946] transition-colors">Investors</a>
          <a href="#" className="hover:text-[#e63946] transition-colors">Careers</a>
        </div>
        <button className="bg-[#e63946] text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-colors rounded-none">
          Get in Touch
        </button>
      </nav>

      {/* HERO */}
      <section className="pt-24 pb-16 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col mb-12">
          <h1 className="font-['Bebas_Neue'] text-[12vw] leading-[0.85] tracking-tight text-white m-0 p-0">
            POWERING THE NEXT
          </h1>
          <h1 className="font-['Bebas_Neue'] text-[12vw] leading-[0.85] tracking-tight text-white m-0 p-0">
            GENERATION OF
          </h1>
          <h1 className="font-['Bebas_Neue'] text-[12vw] leading-[0.85] tracking-tight text-[#e63946] m-0 p-0">
            INDIAN
          </h1>
          <h1 className="font-['Bebas_Neue'] text-[12vw] leading-[0.85] tracking-tight text-white m-0 p-0">
            HEALTHCARE.
          </h1>
        </div>
        
        <div className="h-[1px] w-full bg-[#e63946] mb-12"></div>
        
        <div className="grid md:grid-cols-2 gap-12 items-end">
          <p className="text-xl text-[#6b6b6b] max-w-md leading-relaxed pb-6">
            To make world-class medical tools and intelligence accessible to every doctor in India. We deploy capital and build technology that transforms patient outcomes across the subcontinent.
          </p>
          <div className="relative aspect-[4/3] w-full grayscale contrast-125">
            <img 
              src="/__mockup/images/bold-hero-tech.png" 
              alt="Futuristic Medical Tech" 
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 border border-white/20"></div>
          </div>
        </div>
      </section>

      {/* TICKER / MARQUEE */}
      <section className="bg-black border-y border-white/20 py-6 overflow-hidden relative flex">
        <div className="flex whitespace-nowrap animate-marquee w-max">
          <div className="font-['Bebas_Neue'] text-3xl md:text-5xl tracking-widest text-[#e63946] flex items-center shrink-0">
            <span className="mx-8">₹420 CR DEPLOYED</span>
            <span className="mx-8 text-white/30">•</span>
            <span className="mx-8">2.4M DOCTORS</span>
            <span className="mx-8 text-white/30">•</span>
            <span className="mx-8">38 HOSPITALS</span>
            <span className="mx-8 text-white/30">•</span>
            <span className="mx-8">12 VENTURES</span>
            <span className="mx-8 text-white/30">•</span>
            <span className="mx-8">6 EXITS</span>
            <span className="mx-8 text-white/30">•</span>
            
            {/* DUPLICATE FOR SEAMLESS LOOP */}
            <span className="mx-8">₹420 CR DEPLOYED</span>
            <span className="mx-8 text-white/30">•</span>
            <span className="mx-8">2.4M DOCTORS</span>
            <span className="mx-8 text-white/30">•</span>
            <span className="mx-8">38 HOSPITALS</span>
            <span className="mx-8 text-white/30">•</span>
            <span className="mx-8">12 VENTURES</span>
            <span className="mx-8 text-white/30">•</span>
            <span className="mx-8">6 EXITS</span>
            <span className="mx-8 text-white/30">•</span>
          </div>
        </div>
      </section>

      {/* VENTURES */}
      <section className="bg-white text-black py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-['Bebas_Neue'] text-7xl md:text-9xl mb-24 tracking-tight">OUR PORTFOLIO</h2>
          
          <div className="grid md:grid-cols-2 gap-x-24 gap-y-32">
            {[
              { num: "01", name: "ClavixAI", desc: "AI-powered clinical decision support for rural doctors." },
              { num: "02", name: "MedPulse", desc: "Real-time patient vitals monitoring platform." },
              { num: "03", name: "SurgicaLink", desc: "Remote surgical training & mentoring network." },
              { num: "04", name: "DiagnoScan", desc: "Portable diagnostic imaging for tier-2/3 cities." }
            ].map((venture) => (
              <div key={venture.num} className="relative group cursor-pointer pl-8 border-l-8 border-[#e63946]">
                <div className="absolute -top-16 -left-12 font-['Bebas_Neue'] text-[150px] md:text-[180px] leading-none text-[#f0f0f0] select-none transition-transform group-hover:-translate-y-4">
                  {venture.num}
                </div>
                <div className="relative z-10 pt-4">
                  <h3 className="font-['Playfair_Display'] italic text-4xl md:text-5xl mb-6">{venture.name}</h3>
                  <p className="text-[#6b6b6b] text-lg max-w-sm">{venture.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="bg-black text-white py-40 px-6">
        <div className="max-w-5xl mx-auto text-center relative">
          <span className="absolute -top-24 left-1/2 -translate-x-1/2 font-['Playfair_Display'] text-[150px] leading-none text-[#e63946] opacity-50">"</span>
          <h2 className="font-['Playfair_Display'] italic text-4xl md:text-6xl leading-tight mb-16 relative z-10">
            We are not just funding healthcare. We are re-engineering the infrastructure of life itself.
          </h2>
          <div className="font-bold uppercase tracking-[0.3em] text-xs text-[#e63946]">
            — Clavix Investment Thesis
          </div>
        </div>
      </section>

      {/* DATA WALL */}
      <section className="bg-white border-t-8 border-black">
        <div className="grid grid-cols-2 md:grid-cols-4 border-b border-black">
          {[
            { num: "₹420+", label: "Cr Deployed" },
            { num: "2.4M", label: "Doctors Reached" },
            { num: "38", label: "Hospitals (2024)" },
            { num: "6", label: "Successful Exits" }
          ].map((stat, i) => (
            <div key={i} className={`p-12 flex flex-col items-center justify-center text-center ${i !== 0 ? 'md:border-l border-black' : ''} ${i === 1 || i === 3 ? 'border-l border-black md:border-l-0' : ''} ${i < 2 ? 'border-b border-black md:border-b-0' : ''}`}>
              <div className="font-['Bebas_Neue'] text-6xl md:text-8xl text-black mb-4">{stat.num}</div>
              <div className="font-bold uppercase tracking-[0.2em] text-xs text-[#6b6b6b]">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section className="bg-black py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-['Bebas_Neue'] text-7xl md:text-9xl mb-24 tracking-tight text-white">THE TEAM</h2>
          
          <div className="grid md:grid-cols-3 gap-16">
            {[
              { name: "ARJUN MEHTA", role: "FOUNDER & CEO", img: "bold-team-1.png" },
              { name: "PRIYA KAPOOR", role: "CHIEF INVESTMENT OFFICER", img: "bold-team-2.png" },
              { name: "RAHUL SANGAL", role: "HEAD OF VENTURES", img: "bold-team-3.png" }
            ].map((member, i) => (
              <div key={i} className="group">
                <div className="aspect-[3/4] mb-8 overflow-hidden grayscale contrast-125 border border-white/20 relative">
                  <div className="absolute inset-0 bg-[#e63946] mix-blend-multiply opacity-0 group-hover:opacity-40 transition-opacity duration-500 z-10 pointer-events-none"></div>
                  <img 
                    src={`/__mockup/images/${member.img}`} 
                    alt={member.name} 
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-['Bebas_Neue'] text-5xl text-white mb-4">{member.name}</h3>
                <div className="h-[2px] w-12 bg-[#e63946] mb-4 transition-all duration-300 group-hover:w-full"></div>
                <p className="font-bold uppercase tracking-[0.2em] text-xs text-[#6b6b6b]">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#e63946] text-white pt-32 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="font-['Bebas_Neue'] text-[20vw] leading-[0.75] mb-16 tracking-tighter text-white">
            CLAVIX
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-end mb-24">
            <h3 className="font-['Playfair_Display'] italic text-4xl max-w-sm">
              Changing Indian Healthcare. Permanently.
            </h3>
            <div className="flex flex-col md:flex-row gap-8 md:justify-end font-bold uppercase tracking-[0.2em] text-xs">
              <a href="#" className="hover:text-black transition-colors">Ventures</a>
              <a href="#" className="hover:text-black transition-colors">About</a>
              <a href="#" className="hover:text-black transition-colors">Investors</a>
              <a href="#" className="hover:text-black transition-colors">Careers</a>
            </div>
          </div>
          
          <div className="border-t border-white/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/70 uppercase tracking-widest font-bold">
            <div>© {new Date().getFullYear()} Clavix Technologies</div>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
