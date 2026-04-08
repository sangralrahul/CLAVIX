import React from "react";
import { ArrowRight } from "lucide-react";

export function LightWarm() {
  return (
    <div className="min-h-screen bg-[#fefdf8] text-[#1a1612] font-['Inter'] selection:bg-[#0d9488] selection:text-white">
      {/* 1. NAV */}
      <nav className="sticky top-0 z-50 bg-[#fefdf8]/95 backdrop-blur-md px-6 lg:px-12 py-5 flex items-center justify-between">
        <div className="text-2xl font-['DM_Serif_Display'] tracking-wide">CLAVIX</div>
        <div className="hidden md:flex items-center gap-10 text-sm font-medium text-[#7a6f61]">
          <a href="#" className="hover:text-[#1a1612] transition-colors">Ventures</a>
          <a href="#" className="hover:text-[#1a1612] transition-colors">About</a>
          <a href="#" className="hover:text-[#1a1612] transition-colors">Investors</a>
          <a href="#" className="hover:text-[#1a1612] transition-colors">Careers</a>
        </div>
        <button className="bg-[#0d9488] text-white px-7 py-3 rounded-full text-sm font-medium hover:bg-[#0d9488]/90 transition-all hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0">
          Get in Touch
        </button>
      </nav>

      {/* 2. HERO */}
      <section className="px-6 lg:px-12 py-20 lg:py-32 max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        <div className="flex-1 space-y-8 lg:w-[55%]">
          <div className="inline-flex items-center gap-2 bg-[#ccfbf1] text-[#0d9488] px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0d9488] animate-pulse"></span>
            Transforming Indian Healthcare
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-[5rem] font-['DM_Serif_Display'] leading-[1.05] text-[#1a1612] tracking-tight">
            Powering the <br /> next generation of <br />
            <span className="italic text-[#0d9488] pr-2">Indian healthcare.</span>
          </h1>
          <p className="text-xl text-[#7a6f61] max-w-xl leading-relaxed font-['DM_Sans']">
            To make world-class medical tools and intelligence accessible to every doctor in India.
          </p>
          <div className="flex flex-wrap items-center gap-8 pt-4">
            <button className="bg-[#0d9488] text-white px-8 py-4 rounded-full font-medium hover:bg-[#0d9488]/90 transition-all hover:shadow-xl hover:shadow-[#0d9488]/20 hover:-translate-y-1 active:translate-y-0 text-lg">
              Explore Ventures
            </button>
            <a href="#" className="font-medium text-[#1a1612] underline decoration-2 decoration-[#e8dfc8] underline-offset-8 hover:decoration-[#0d9488] transition-colors text-lg">
              Investor Relations
            </a>
          </div>
        </div>
        <div className="flex-1 w-full lg:w-[45%]">
          <div className="relative rounded-[4rem] rounded-tr-[10rem] rounded-bl-[8rem] overflow-hidden aspect-[4/5] shadow-2xl shadow-[#1a1612]/10 group">
            <img 
              src="/__mockup/images/warm-hero-doc.png" 
              alt="Indian village doctor consulting patient" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[4rem] rounded-tr-[10rem] rounded-bl-[8rem]"></div>
          </div>
        </div>
      </section>

      {/* 3. IMPACT NUMBERS */}
      <section className="bg-[#f5f0e6] py-20 border-y border-[#e8dfc8]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 divide-x-0 md:divide-x divide-[#e8dfc8]">
          <div className="text-center md:text-left md:px-8">
            <div className="text-5xl md:text-6xl font-['DM_Serif_Display'] text-[#0d9488] mb-3">₹420<span className="text-3xl">Cr+</span></div>
            <div className="text-xs font-medium uppercase tracking-widest text-[#7a6f61] leading-relaxed">Deployed across 12 ventures</div>
          </div>
          <div className="text-center md:text-left md:px-8">
            <div className="text-5xl md:text-6xl font-['DM_Serif_Display'] text-[#0d9488] mb-3">2.4M<span className="text-3xl">+</span></div>
            <div className="text-xs font-medium uppercase tracking-widest text-[#7a6f61] leading-relaxed">Doctors reached across India</div>
          </div>
          <div className="text-center md:text-left md:px-8">
            <div className="text-5xl md:text-6xl font-['DM_Serif_Display'] text-[#0d9488] mb-3">38</div>
            <div className="text-xs font-medium uppercase tracking-widest text-[#7a6f61] leading-relaxed">Hospitals onboarded in 2024</div>
          </div>
          <div className="text-center md:text-left md:px-8">
            <div className="text-5xl md:text-6xl font-['DM_Serif_Display'] text-[#0d9488] mb-3">6</div>
            <div className="text-xs font-medium uppercase tracking-widest text-[#7a6f61] leading-relaxed">Successful exits</div>
          </div>
        </div>
      </section>

      {/* 4. VENTURES */}
      <section className="py-32 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-['DM_Serif_Display'] text-[#1a1612]">What We Build</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {[
            { name: "ClavixAI", desc: "AI-powered clinical decision support for rural doctors", accent: "#0d9488" },
            { name: "MedPulse", desc: "Real-time patient vitals monitoring platform", accent: "#84cc16" },
            { name: "SurgicaLink", desc: "Remote surgical training & mentoring network", accent: "#0d9488" },
            { name: "DiagnoScan", desc: "Portable diagnostic imaging for tier-2/3 cities", accent: "#84cc16" }
          ].map((venture, i) => (
            <div key={i} className="group bg-[#f5f0e6] rounded-[2rem] p-10 lg:p-12 shadow-sm hover:shadow-xl transition-all duration-500 border border-[#e8dfc8] relative overflow-hidden hover:-translate-y-2">
              <div className="absolute top-0 left-0 w-full h-2 transition-all duration-500 group-hover:h-3" style={{ backgroundColor: venture.accent }}></div>
              <h3 className="text-4xl font-['DM_Serif_Display'] text-[#1a1612] mb-4 mt-2 group-hover:text-[#0d9488] transition-colors">{venture.name}</h3>
              <p className="text-[#7a6f61] mb-10 text-xl font-['DM_Sans'] leading-relaxed max-w-sm">{venture.desc}</p>
              <a href="#" className="inline-flex items-center gap-2 text-[#0d9488] font-medium hover:gap-4 transition-all text-lg">
                Learn more <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* 5. STORY SECTION */}
      <section className="bg-[#f5f0e6] py-32 border-y border-[#e8dfc8]">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-12 text-center">
          <div className="text-xs font-medium uppercase tracking-widest text-[#7a6f61] mb-10">Why We Exist</div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-['DM_Serif_Display'] italic text-[#1a1612] leading-[1.2] mb-20">
            "We believe that geography should never dictate the quality of care a patient receives. Technology is the bridge."
          </h2>
          <div className="rounded-[3rem] overflow-hidden aspect-[21/9] shadow-2xl relative group">
            <img 
              src="/__mockup/images/warm-camp.png" 
              alt="Community healthcare camp" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[3rem]"></div>
          </div>
        </div>
      </section>

      {/* 6. TEAM */}
      <section className="py-32 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-['DM_Serif_Display'] text-[#1a1612]">Leadership</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-16 lg:gap-20">
          {[
            { name: "Arjun Mehta", role: "Founder & CEO" },
            { name: "Priya Kapoor", role: "Chief Investment Officer" },
            { name: "Rahul Sangal", role: "Head of Ventures" }
          ].map((member, i) => (
            <div key={i} className="text-center group">
              <div className="w-48 h-48 mx-auto rounded-full p-2 ring-2 ring-[#e8dfc8] group-hover:ring-[#0d9488] transition-all duration-500 mb-8 bg-[#fefdf8]">
                <div className="w-full h-full rounded-full bg-[#f5f0e6] overflow-hidden relative group-hover:scale-105 transition-transform duration-500">
                   <div className="absolute inset-0 flex items-center justify-center text-5xl font-['DM_Serif_Display'] text-[#7a6f61] group-hover:text-[#0d9488] transition-colors">
                     {member.name.charAt(0)}
                   </div>
                </div>
              </div>
              <h3 className="text-3xl font-['DM_Serif_Display'] text-[#1a1612] mb-3">{member.name}</h3>
              <p className="text-[#7a6f61] font-medium text-sm uppercase tracking-widest">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. NEWSLETTER/CTA */}
      <section className="bg-[#0d9488] py-32 text-center px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-['DM_Serif_Display'] text-white mb-8">Join our mission</h2>
          <p className="text-[#ccfbf1] text-xl md:text-2xl mb-12 font-['DM_Sans']">Subscribe to our newsletter for insights on Indian healthcare innovation.</p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input 
              type="email" 
              placeholder="Email address" 
              className="flex-1 bg-white/10 border border-white/20 rounded-full px-8 py-5 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 text-lg transition-all"
            />
            <button className="bg-[#fefdf8] text-[#0d9488] px-10 py-5 rounded-full font-bold hover:bg-white transition-colors text-lg shadow-lg">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* 8. FOOTER */}
      <footer className="bg-[#1a1612] text-white py-20 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-4xl font-['DM_Serif_Display'] text-[#fefdf8] tracking-wider">CLAVIX</div>
          <div className="flex flex-wrap justify-center gap-10 text-[#7a6f61] text-sm font-medium uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Ventures</a>
            <a href="#" className="hover:text-white transition-colors">About</a>
            <a href="#" className="hover:text-white transition-colors">Investors</a>
            <a href="#" className="hover:text-white transition-colors">Careers</a>
          </div>
          <div className="text-[#7a6f61] text-xl italic font-['DM_Serif_Display']">
            "For India's 1.4 billion."
          </div>
        </div>
      </footer>
    </div>
  );
}
