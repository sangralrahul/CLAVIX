import React from "react";
import { ArrowRight, ArrowUpRight, Plus } from "lucide-react";

export function BoldTypographic() {
  return (
    <div className="min-h-[100dvh] bg-white text-black font-sans selection:bg-blue-600 selection:text-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Fraunces:ital,opsz,wght@0,9..144,100..900;1,9..144,100..900&display=swap');
        
        .font-display {
          font-family: 'Fraunces', serif;
        }
        .font-sans {
          font-family: 'Space Grotesk', sans-serif;
        }
        
        /* Hide scrollbar for clean look */
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        ::-webkit-scrollbar-thumb {
          background: #000;
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-black text-white z-50 px-6 py-5 flex items-center justify-between uppercase tracking-widest text-xs font-bold">
        <div className="flex items-center gap-8">
          <span className="text-xl tracking-tighter normal-case font-display italic">Clavix</span>
          <span className="hidden md:inline-block border-l border-neutral-800 pl-8 text-neutral-400">Ventures</span>
        </div>
        <ul className="hidden md:flex items-center gap-12">
          <li><a href="#thesis" className="hover:text-blue-500 transition-colors">Thesis</a></li>
          <li><a href="#portfolio" className="hover:text-blue-500 transition-colors">Portfolio</a></li>
          <li><a href="#team" className="hover:text-blue-500 transition-colors">Team</a></li>
        </ul>
        <button className="bg-white text-black px-6 py-3 hover:bg-blue-600 hover:text-white transition-colors flex items-center gap-2">
          <span>PITCH US</span>
          <ArrowUpRight size={14} />
        </button>
      </nav>

      <main className="pt-24">
        {/* Hero Section */}
        <section className="min-h-[90vh] flex flex-col justify-between px-6 pb-12 pt-20 border-b-2 border-black">
          <div className="max-w-7xl mx-auto w-full">
            <h1 className="text-[12vw] leading-[0.85] font-black tracking-tighter uppercase mb-8">
              Powering <br />
              <span className="font-display font-light italic text-blue-600 normal-case tracking-normal">the next</span> <br />
              Generation
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-24 border-t-2 border-black pt-8">
              <div className="col-span-1">
                <p className="text-sm font-bold uppercase tracking-widest mb-4">01 // The Mission</p>
                <p className="text-xl leading-relaxed">
                  We back the audacious founders building the infrastructure of Indian healthcare.
                </p>
              </div>
              <div className="col-span-2">
                <div className="aspect-[21/9] w-full bg-neutral-100 relative overflow-hidden group">
                  <img 
                    src="/__mockup/images/bold-hero.png" 
                    alt="Abstract medical tech" 
                    className="w-full h-full object-cover filter grayscale contrast-125 group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-blue-600 mix-blend-multiply opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Marquee Divider */}
        <div className="border-b-2 border-black overflow-hidden py-4 bg-blue-600 text-white flex whitespace-nowrap">
          <div className="animate-[marquee_20s_linear_infinite] flex items-center text-3xl font-black uppercase tracking-widest">
            <span>HEALTHCARE INFRASTRUCTURE</span>
            <span className="mx-8 font-display italic font-light text-black">+++</span>
            <span>DIGITAL THERAPEUTICS</span>
            <span className="mx-8 font-display italic font-light text-black">+++</span>
            <span>MEDTECH INNOVATION</span>
            <span className="mx-8 font-display italic font-light text-black">+++</span>
            <span>HEALTHCARE INFRASTRUCTURE</span>
            <span className="mx-8 font-display italic font-light text-black">+++</span>
            <span>DIGITAL THERAPEUTICS</span>
            <span className="mx-8 font-display italic font-light text-black">+++</span>
          </div>
        </div>

        {/* Thesis Section */}
        <section id="thesis" className="py-32 px-6 border-b-2 border-black">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-24 border-b-8 border-black pb-8">
              <h2 className="text-8xl font-black tracking-tighter uppercase">Thesis</h2>
              <span className="text-4xl font-display italic text-blue-600">02</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-16">
              {[
                {
                  title: "Clinical Excellence",
                  desc: "We believe the next wave of unicorns will be built on undeniable clinical outcomes, not just user acquisition metrics."
                },
                {
                  title: "Bharat First",
                  desc: "Solutions built for the top 1% won't scale. We invest in models that democratize access for the next 500 million."
                },
                {
                  title: "Deep Tech",
                  desc: "AI, genomics, and advanced diagnostics are no longer buzzwords. They are the new baseline for healthcare delivery."
                },
                {
                  title: "Provider Empowerment",
                  desc: "Technology should augment doctors, not replace them. We back tools that 10x clinical productivity."
                }
              ].map((item, i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="flex justify-between items-center mb-6 border-b border-black pb-4">
                    <h3 className="text-3xl font-bold uppercase tracking-tight group-hover:text-blue-600 transition-colors">{item.title}</h3>
                    <Plus className="transform group-hover:rotate-90 transition-transform duration-300" />
                  </div>
                  <p className="text-xl text-neutral-600 leading-relaxed font-display">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="bg-black text-white py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-24 border-b-8 border-white pb-8">
              <h2 className="text-8xl font-black tracking-tighter uppercase">Portfolio</h2>
              <span className="text-4xl font-display italic text-blue-500">03</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <div key={item} className="group block">
                  <div className="aspect-[3/4] overflow-hidden mb-6 relative">
                    <img 
                      src={item === 1 ? "/__mockup/images/bold-abstract.png" : "/__mockup/images/bold-hero.png"} 
                      alt="Portfolio company" 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-blue-600 mix-blend-multiply opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-3xl font-bold uppercase mb-2">Company Name</h3>
                      <p className="text-sm tracking-widest uppercase text-neutral-400">Digital Health</p>
                    </div>
                    <ArrowUpRight className="text-blue-500 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team/Letter Section */}
        <section id="team" className="py-32 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <div className="aspect-[3/4] w-full max-w-md mx-auto relative group">
                <div className="absolute top-8 -left-8 w-full h-full bg-blue-600 z-0 group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-500"></div>
                <img 
                  src="/__mockup/images/bold-portrait.png" 
                  alt="Managing Partner" 
                  className="w-full h-full object-cover relative z-10 grayscale contrast-125"
                />
              </div>
            </div>
            <div>
              <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-8 block">04 // The Partnership</span>
              <h2 className="text-6xl font-black uppercase tracking-tighter mb-12">
                We are builders, <br />
                <span className="font-display italic font-light text-neutral-400 normal-case">not just</span> <br />
                allocators.
              </h2>
              <div className="space-y-6 text-xl font-display leading-relaxed">
                <p>
                  We started Clavix because we saw a fundamental mismatch between the capital available and the patient, specialized support healthcare founders actually need.
                </p>
                <p>
                  We don't just write checks. We help navigate regulatory mazes, recruit specialized clinical talent, and design go-to-market strategies that actually work in the complex Indian ecosystem.
                </p>
              </div>
              <button className="mt-12 border-2 border-black px-8 py-4 uppercase font-bold tracking-widest text-sm hover:bg-black hover:text-white transition-colors flex items-center gap-4 group">
                Meet the Team
                <ArrowRight className="transform group-hover:translate-x-2 transition-transform" size={16} />
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white pt-32 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[15vw] leading-[0.8] font-black tracking-tighter uppercase mb-24 text-center">
            Clavix <span className="text-blue-600">.</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-neutral-800 pt-12">
            <div className="col-span-1 md:col-span-2">
              <p className="text-2xl font-display italic text-neutral-400 max-w-sm">
                Powering the next generation of Indian healthcare.
              </p>
            </div>
            <div>
              <p className="font-bold uppercase tracking-widest text-sm mb-6 text-neutral-500">Contact</p>
              <ul className="space-y-4 text-lg">
                <li><a href="#" className="hover:text-blue-500 transition-colors">pitch@clavix.vc</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">press@clavix.vc</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">careers@clavix.vc</a></li>
              </ul>
            </div>
            <div>
              <p className="font-bold uppercase tracking-widest text-sm mb-6 text-neutral-500">Social</p>
              <ul className="space-y-4 text-lg">
                <li><a href="#" className="hover:text-blue-500 transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">Twitter (X)</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">Substack</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-24 flex flex-col md:flex-row justify-between items-center text-xs uppercase tracking-widest text-neutral-600">
            <p>© {new Date().getFullYear()} Clavix Technologies</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
