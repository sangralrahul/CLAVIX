import React from "react";
import { ArrowRight, Activity, Heart, Shield, Users, Stethoscope } from "lucide-react";

export function LightWarm() {
  return (
    <div className="min-h-screen bg-[#fdfaf6] text-[#1c2b2b] font-sans selection:bg-[#14b8a6] selection:text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#fdfaf6]/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="w-10 h-10 rounded-xl bg-[#0d9488] flex items-center justify-center text-white font-bold text-xl">
                C
              </div>
              <span className="font-bold text-2xl tracking-tight text-[#1c2b2b]">Clavix</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-[#1c2b2b]/70 hover:text-[#0d9488] transition-colors font-medium">About Us</a>
              <a href="#portfolio" className="text-[#1c2b2b]/70 hover:text-[#0d9488] transition-colors font-medium">Portfolio</a>
              <a href="#impact" className="text-[#1c2b2b]/70 hover:text-[#0d9488] transition-colors font-medium">Impact</a>
              <a href="#news" className="text-[#1c2b2b]/70 hover:text-[#0d9488] transition-colors font-medium">News</a>
              <button className="bg-[#0d9488] hover:bg-[#14b8a6] text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-sm hover:shadow-md active:scale-95">
                Partner With Us
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#84cc16]/10 text-[#65a30d] font-semibold mb-6">
                <Heart size={16} />
                <span>Human-Centered Healthcare</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1] text-[#1c2b2b]">
                Powering the <span className="text-[#0d9488]">next generation</span> of Indian healthcare.
              </h1>
              <p className="text-xl text-[#1c2b2b]/70 mb-10 leading-relaxed max-w-lg">
                We invest in visionary founders building empathetic, accessible, and innovative healthcare solutions for a billion lives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[#0d9488] hover:bg-[#14b8a6] text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg shadow-[#0d9488]/20 hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2">
                  Our Portfolio <ArrowRight size={20} />
                </button>
                <button className="bg-white hover:bg-[#fdfaf6] text-[#1c2b2b] border-2 border-[#e5e5e5] px-8 py-4 rounded-full font-bold text-lg transition-all hover:border-[#0d9488]/30 flex items-center justify-center">
                  Learn More
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#84cc16]/20 to-[#0d9488]/20 rounded-[3rem] blur-3xl -z-10"></div>
              <img 
                src="/__mockup/images/warm-hero.png" 
                alt="Friendly healthcare professionals" 
                className="w-full rounded-[2.5rem] shadow-2xl border-4 border-white/50 object-cover"
              />
              
              {/* Floating badges */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-[#f5f5f5] flex items-center gap-4 animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="w-12 h-12 rounded-full bg-[#84cc16]/10 flex items-center justify-center text-[#65a30d]">
                  <Activity size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#1c2b2b]">50+ Startups</p>
                  <p className="text-xs text-[#1c2b2b]/60">Funded & Growing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values/Features Section */}
      <section className="py-24 bg-white rounded-[3rem] mx-4 sm:mx-8 lg:mx-12 shadow-sm mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6">Investing with Empathy</h2>
            <p className="text-lg text-[#1c2b2b]/70">
              We believe the best healthcare solutions put people first. Our investment philosophy centers on approachability, accessibility, and genuine care.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="text-[#0d9488]" size={32} />,
                title: "Patient-First Innovation",
                desc: "Backing technologies that improve the patient experience, making care more intuitive and less intimidating.",
                color: "bg-[#0d9488]/10"
              },
              {
                icon: <Shield className="text-[#84cc16]" size={32} />,
                title: "Accessible Care",
                desc: "Democratizing healthcare access across India through scalable, affordable solutions.",
                color: "bg-[#84cc16]/10"
              },
              {
                icon: <Stethoscope className="text-orange-500" size={32} />,
                title: "Empowering Providers",
                desc: "Tools that help doctors and nurses focus on what matters most: human connection and healing.",
                color: "bg-orange-500/10"
              }
            ].map((feature, i) => (
              <div key={i} className="p-8 rounded-[2rem] bg-[#fdfaf6] border border-[#f0ede6] hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center mb-6`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-[#1c2b2b]/70 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#eff5ef] pt-20 pb-10 rounded-t-[3rem]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#0d9488] flex items-center justify-center text-white font-bold text-xl">
                  C
                </div>
                <span className="font-bold text-2xl tracking-tight text-[#1c2b2b]">Clavix</span>
              </div>
              <p className="text-[#1c2b2b]/70 max-w-sm mb-6">
                Powering the next generation of Indian healthcare through empathetic, human-centered investments.
              </p>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm cursor-pointer hover:bg-[#0d9488] hover:text-white transition-colors">
                  <Activity size={18} />
                </div>
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm cursor-pointer hover:bg-[#0d9488] hover:text-white transition-colors">
                  <Heart size={18} />
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6">Company</h4>
              <ul className="space-y-4 text-[#1c2b2b]/70">
                <li><a href="#" className="hover:text-[#0d9488] transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-[#0d9488] transition-colors">Portfolio</a></li>
                <li><a href="#" className="hover:text-[#0d9488] transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-[#0d9488] transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6">Legal</h4>
              <ul className="space-y-4 text-[#1c2b2b]/70">
                <li><a href="#" className="hover:text-[#0d9488] transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-[#0d9488] transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-[#0d9488] transition-colors">Disclosures</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-[#1c2b2b]/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#1c2b2b]/50 text-sm">© 2025 Clavix Technologies. All rights reserved.</p>
            <p className="text-[#1c2b2b]/50 text-sm flex items-center gap-1">
              Made with <Heart size={14} className="text-[#0d9488]" /> for Indian Healthcare
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
