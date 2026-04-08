import React from 'react';
import { ArrowRight, Activity, Brain, Shield, Zap, Stethoscope } from 'lucide-react';

export function ModernGradient() {
  return (
    <div className="min-h-screen bg-[#080b14] text-white font-sans overflow-hidden relative selection:bg-purple-500/30">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]"></div>
        
        {/* Glowing Orbs */}
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-purple-600/20 blur-[120px] mix-blend-screen animate-pulse duration-10000"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-600/20 blur-[150px] mix-blend-screen animate-pulse duration-7000"></div>
        <div className="absolute top-[40%] left-[60%] w-[30vw] h-[30vw] rounded-full bg-indigo-500/10 blur-[100px] mix-blend-screen animate-pulse duration-8000"></div>
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#080b14]/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center p-[1px]">
              <div className="w-full h-full bg-[#080b14] rounded-[7px] flex items-center justify-center group-hover:bg-transparent transition-colors duration-300">
                <Activity className="w-4 h-4 text-white group-hover:text-white" />
              </div>
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              Clavix
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-white transition-colors hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-blue-400">About</a>
            <a href="#portfolio" className="hover:text-white transition-colors hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-blue-400">Portfolio</a>
            <a href="#thesis" className="hover:text-white transition-colors hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-blue-400">Thesis</a>
            <button className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
              Pitch Us
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 pt-32 pb-20">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 pt-20 pb-32 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium mb-8 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            Accelerating Indian Healthcare Innovation
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.1] mb-8 max-w-5xl">
            Powering the <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-indigo-400 to-blue-500 drop-shadow-[0_0_30px_rgba(124,58,237,0.3)]">
              next generation
            </span> <br className="hidden md:block" />
            of Indian healthcare.
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-12 leading-relaxed">
            We provide capital, network, and operational expertise to visionary founders building transformative healthtech solutions for a billion lives.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 font-semibold text-white overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(124,58,237,0.4)]">
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
              <span className="relative flex items-center justify-center gap-2">
                Explore Our Portfolio <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button className="px-8 py-4 rounded-full bg-white/5 border border-white/10 font-semibold text-white hover:bg-white/10 transition-colors backdrop-blur-sm">
              Read Our Thesis
            </button>
          </div>
        </section>

        {/* Features Section */}
        <section className="max-w-7xl mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why partner with <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Clavix</span>?</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">More than just capital. We bring decades of domain expertise to help you navigate the complex Indian healthcare ecosystem.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature Card 1 */}
            <div className="group relative p-[1px] rounded-2xl bg-gradient-to-b from-white/10 to-transparent hover:from-purple-500/50 hover:to-blue-500/50 transition-colors duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative h-full bg-[#080b14]/90 backdrop-blur-xl p-8 rounded-2xl flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-2">
                  <Brain className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold">Deep Domain Expertise</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Our partners are veteran healthcare operators who understand the regulatory, operational, and clinical nuances of building in India.
                </p>
              </div>
            </div>

            {/* Feature Card 2 */}
            <div className="group relative p-[1px] rounded-2xl bg-gradient-to-b from-white/10 to-transparent hover:from-purple-500/50 hover:to-blue-500/50 transition-colors duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative h-full bg-[#080b14]/90 backdrop-blur-xl p-8 rounded-2xl flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-2">
                  <Activity className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold">Strategic Network</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Direct access to top hospitals, diagnostics chains, and regulatory bodies to accelerate your go-to-market strategy and partnerships.
                </p>
              </div>
            </div>

            {/* Feature Card 3 */}
            <div className="group relative p-[1px] rounded-2xl bg-gradient-to-b from-white/10 to-transparent hover:from-purple-500/50 hover:to-blue-500/50 transition-colors duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative h-full bg-[#080b14]/90 backdrop-blur-xl p-8 rounded-2xl flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-2">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold">Patient Capital</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  We understand that transforming healthcare takes time. We are committed to long-term partnerships that prioritize sustainable impact.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="max-w-7xl mx-auto px-6 py-20 border-y border-white/5 bg-white/[0.02]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/5">
            <div className="flex flex-col items-center justify-center text-center">
              <span className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-500 mb-2">$500M</span>
              <span className="text-sm text-slate-400 font-medium tracking-wide uppercase">AUM</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <span className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-500 mb-2">24</span>
              <span className="text-sm text-slate-400 font-medium tracking-wide uppercase">Portfolio Cos</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <span className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-500 mb-2">6</span>
              <span className="text-sm text-slate-400 font-medium tracking-wide uppercase">Unicorns</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <span className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-500 mb-2">15M+</span>
              <span className="text-sm text-slate-400 font-medium tracking-wide uppercase">Lives Impacted</span>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto px-6 py-32 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Building the future of care?</h2>
          <p className="text-xl text-slate-400 mb-10">Let's talk about how we can accelerate your journey.</p>
          <button className="px-10 py-5 rounded-full bg-white text-[#080b14] font-bold text-lg hover:bg-slate-200 transition-colors shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_50px_rgba(255,255,255,0.4)]">
            Submit Your Pitch
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 bg-[#080b14] py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Activity className="w-5 h-5 text-purple-500" />
            <span className="text-lg font-bold text-white">Clavix</span>
          </div>
          <p className="text-slate-500 text-sm">© {new Date().getFullYear()} Clavix Technologies. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-slate-400">
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
