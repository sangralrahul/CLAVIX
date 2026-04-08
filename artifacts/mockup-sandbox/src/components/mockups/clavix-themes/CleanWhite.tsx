import React from "react";
import { ArrowRight, Activity, Cpu, Stethoscope, Video } from "lucide-react";

export function CleanWhite() {
  return (
    <div className="min-h-screen bg-white text-[#0a0a0a] font-['Inter'] selection:bg-blue-100 selection:text-blue-900">
      {/* 1. NAV */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#e5e7eb]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-xl font-black tracking-widest text-[#0a0a0a]">
            CLAVIX
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#6b7280]">
            <a href="#ventures" className="hover:text-black transition-colors">Ventures</a>
            <a href="#about" className="hover:text-black transition-colors">About</a>
            <a href="#investors" className="hover:text-black transition-colors">Investors</a>
            <a href="#careers" className="hover:text-black transition-colors">Careers</a>
          </div>
          <button className="hidden md:inline-flex h-10 items-center justify-center rounded-full bg-[#0a0a0a] px-6 text-sm font-medium text-white hover:bg-black/90 transition-colors">
            Get in Touch
          </button>
        </div>
      </nav>

      {/* 2. HERO */}
      <section className="relative pt-24 pb-32 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 w-full lg:w-[60%]">
            <div className="inline-block mb-6 px-3 py-1 bg-[#eff6ff] text-[#2563eb] font-medium tracking-widest uppercase text-xs rounded-full">
              Healthcare Technology
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-[5.5rem] font-black tracking-tight leading-[1.05] text-[#0a0a0a] mb-8">
              Powering the next generation of <br className="hidden lg:block" />
              Indian healthcare.
            </h1>
            <p className="text-lg md:text-xl text-[#6b7280] max-w-lg mb-10 leading-relaxed">
              We build and back the medical tools and intelligence that will make world-class healthcare accessible to every doctor in India.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <button className="h-14 px-8 rounded-full bg-[#2563eb] text-white font-medium text-base hover:bg-blue-700 transition-colors flex items-center gap-2">
                Explore Ventures <ArrowRight className="w-4 h-4" />
              </button>
              <button className="h-14 px-8 rounded-full bg-white border border-[#e5e7eb] text-[#0a0a0a] font-medium text-base hover:bg-gray-50 transition-colors">
                Investor Relations
              </button>
            </div>
          </div>
          <div className="w-full lg:w-[40%]">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]">
              <img 
                src="/__mockup/images/doctor-hero.png" 
                alt="Modern Indian doctor using digital tools" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. STATS BAR */}
      <section className="bg-[#f9fafb] border-y border-[#e5e7eb] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-[#e5e7eb]">
            <div className="flex flex-col px-4 text-center lg:text-left">
              <div className="text-5xl font-black tracking-tight text-[#2563eb] mb-2">₹420<span className="text-3xl">Cr+</span></div>
              <div className="font-medium tracking-widest uppercase text-xs text-[#6b7280]">Deployed across 12 ventures</div>
            </div>
            <div className="flex flex-col px-4 text-center lg:text-left">
              <div className="text-5xl font-black tracking-tight text-[#2563eb] mb-2">2.4<span className="text-3xl">M+</span></div>
              <div className="font-medium tracking-widest uppercase text-xs text-[#6b7280]">Doctors reached across India</div>
            </div>
            <div className="flex flex-col px-4 text-center lg:text-left">
              <div className="text-5xl font-black tracking-tight text-[#2563eb] mb-2">38</div>
              <div className="font-medium tracking-widest uppercase text-xs text-[#6b7280]">Hospitals onboarded in 2024</div>
            </div>
            <div className="flex flex-col px-4 text-center lg:text-left">
              <div className="text-5xl font-black tracking-tight text-[#2563eb] mb-2">6</div>
              <div className="font-medium tracking-widest uppercase text-xs text-[#6b7280]">Successful exits</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. VENTURES SECTION */}
      <section id="ventures" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#0a0a0a] mb-4">Our Portfolio</h2>
            <p className="text-xl text-[#6b7280] max-w-2xl">
              Backing the founders who are rewriting the infrastructure of Indian healthcare.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Venture 1 */}
            <div className="group bg-white p-8 rounded-xl border border-[#e5e7eb] hover:shadow-xl hover:border-gray-300 transition-all duration-300 cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-[#eff6ff] text-[#2563eb] flex items-center justify-center mb-6">
                <span className="font-bold">C</span>
              </div>
              <h3 className="text-2xl font-semibold mb-3">ClavixAI</h3>
              <p className="text-[#6b7280] mb-6 leading-relaxed">
                AI-powered clinical decision support for rural doctors.
              </p>
              <div className="flex items-center text-sm font-medium text-[#2563eb] group-hover:translate-x-1 transition-transform">
                View Venture <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </div>

            {/* Venture 2 */}
            <div className="group bg-white p-8 rounded-xl border border-[#e5e7eb] hover:shadow-xl hover:border-gray-300 transition-all duration-300 cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center mb-6">
                <span className="font-bold">M</span>
              </div>
              <h3 className="text-2xl font-semibold mb-3">MedPulse</h3>
              <p className="text-[#6b7280] mb-6 leading-relaxed">
                Real-time patient vitals monitoring platform.
              </p>
              <div className="flex items-center text-sm font-medium text-rose-600 group-hover:translate-x-1 transition-transform">
                View Venture <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </div>

            {/* Venture 3 */}
            <div className="group bg-white p-8 rounded-xl border border-[#e5e7eb] hover:shadow-xl hover:border-gray-300 transition-all duration-300 cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6">
                <span className="font-bold">S</span>
              </div>
              <h3 className="text-2xl font-semibold mb-3">SurgicaLink</h3>
              <p className="text-[#6b7280] mb-6 leading-relaxed">
                Remote surgical training & mentoring network.
              </p>
              <div className="flex items-center text-sm font-medium text-emerald-600 group-hover:translate-x-1 transition-transform">
                View Venture <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </div>

            {/* Venture 4 */}
            <div className="group bg-white p-8 rounded-xl border border-[#e5e7eb] hover:shadow-xl hover:border-gray-300 transition-all duration-300 cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center mb-6">
                <span className="font-bold">D</span>
              </div>
              <h3 className="text-2xl font-semibold mb-3">DiagnoScan</h3>
              <p className="text-[#6b7280] mb-6 leading-relaxed">
                Portable diagnostic imaging for tier-2/3 cities.
              </p>
              <div className="flex items-center text-sm font-medium text-purple-600 group-hover:translate-x-1 transition-transform">
                View Venture <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. MISSION */}
      <section id="about" className="py-32 bg-white border-t border-[#e5e7eb]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-[#e5e7eb]">
              <img 
                src="/__mockup/images/medical-team.png" 
                alt="Diverse Indian medical team" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <blockquote className="text-3xl md:text-4xl font-normal italic leading-snug text-[#0a0a0a] mb-8">
              "To make world-class medical tools and intelligence accessible to every doctor in India."
            </blockquote>
            <div className="w-12 h-1 bg-[#2563eb] mb-8"></div>
            <div className="space-y-6 text-lg text-[#6b7280] leading-relaxed">
              <p>
                India's healthcare challenge isn't just about building more hospitals—it's about scaling the expertise of our best doctors across the country.
              </p>
              <p>
                At Clavix, we invest in and build technologies that act as force multipliers for medical professionals, enabling them to diagnose better, treat faster, and reach further.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TEAM ROW */}
      <section className="py-32 bg-[#f9fafb] border-t border-[#e5e7eb]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#0a0a0a] mb-4">Our Team</h2>
            <p className="text-xl text-[#6b7280]">The people driving the future of healthcare.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Team Member 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-48 h-48 rounded-full overflow-hidden mb-6 shadow-md border-4 border-white">
                <img 
                  src="/__mockup/images/arjun-mehta.png" 
                  alt="Arjun Mehta" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-1">Arjun Mehta</h3>
              <p className="font-medium tracking-widest uppercase text-xs text-[#2563eb]">Founder & CEO</p>
            </div>

            {/* Team Member 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-48 h-48 rounded-full overflow-hidden mb-6 shadow-md border-4 border-white">
                <img 
                  src="/__mockup/images/priya-kapoor.png" 
                  alt="Priya Kapoor" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-1">Priya Kapoor</h3>
              <p className="font-medium tracking-widest uppercase text-xs text-[#2563eb]">Chief Investment Officer</p>
            </div>

            {/* Team Member 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-48 h-48 rounded-full overflow-hidden mb-6 shadow-md border-4 border-white">
                <img 
                  src="/__mockup/images/rahul-sangal.png" 
                  alt="Rahul Sangal" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-1">Rahul Sangal</h3>
              <p className="font-medium tracking-widest uppercase text-xs text-[#2563eb]">Head of Ventures</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FOOTER */}
      <footer className="bg-[#0a0a0a] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
          <div>
            <div className="text-2xl font-black tracking-widest mb-4">CLAVIX</div>
            <p className="text-gray-400 max-w-xs">
              Built for India's doctors.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-10 md:gap-20">
            <div className="flex flex-col gap-4">
              <a href="#" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Ventures</a>
              <a href="#" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">About</a>
              <a href="#" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Careers</a>
            </div>
            <div className="flex flex-col gap-4">
              <a href="#" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Investors</a>
              <a href="#" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Clavix Technologies. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            Headquartered in Bangalore, India
          </div>
        </div>
      </footer>
    </div>
  );
}
