import React from 'react';
import { ArrowRight, Activity, Heart, Shield } from 'lucide-react';

export function CleanWhite() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Activity className="text-white w-5 h-5" />
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900">Clavix</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#" className="hover:text-blue-600 transition-colors">Ventures</a>
            <a href="#" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Team</a>
            <a href="#" className="hover:text-blue-600 transition-colors">News</a>
          </div>
          <div>
            <button className="bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-slate-800 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-24 px-6 border-b border-slate-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[1.1] text-slate-900">
              Powering the next generation of <br className="hidden md:block" />
              <span className="text-blue-600">Indian healthcare.</span>
            </h1>
            <p className="text-xl text-slate-500 max-w-lg leading-relaxed">
              We back visionary founders building transformative healthcare solutions for a billion lives. Clinical precision meets venture scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                Our Portfolio <ArrowRight className="w-4 h-4" />
              </button>
              <button className="bg-slate-50 text-slate-900 px-8 py-4 rounded-full font-medium hover:bg-slate-100 border border-slate-200 transition-colors flex items-center justify-center">
                Investment Thesis
              </button>
            </div>
          </div>
          <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden bg-slate-100 border border-slate-200 shadow-sm flex items-center justify-center">
             <img src="/__mockup/images/hero-lab.jpg" alt="Modern healthcare laboratory" className="object-cover w-full h-full absolute inset-0 z-10" />
             <div className="absolute inset-0 bg-slate-100 flex items-center justify-center z-0">
               <Activity className="w-24 h-24 text-slate-300" />
             </div>
          </div>
        </div>
      </section>

      {/* Ventures */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Featured Ventures</h2>
              <p className="text-lg text-slate-500">Breakthrough companies redefining patient care, diagnostics, and digital health infrastructure.</p>
            </div>
            <button className="text-blue-600 font-semibold flex items-center gap-2 hover:text-blue-700 transition-colors">
              View all ventures <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Aura Diagnostics",
                desc: "AI-powered pathology infrastructure for tier-2 and tier-3 cities.",
                icon: <Activity className="w-6 h-6 text-blue-600" />,
                img: "venture-1.jpg"
              },
              {
                title: "CareOS",
                desc: "Unified operating system for independent clinics and small hospitals.",
                icon: <Shield className="w-6 h-6 text-blue-600" />,
                img: "venture-2.jpg"
              },
              {
                title: "Nirvana Health",
                desc: "Full-stack mental health platform integrating therapy and psychiatry.",
                icon: <Heart className="w-6 h-6 text-blue-600" />,
                img: "venture-3.jpg"
              }
            ].map((venture, i) => (
              <div key={i} className="group rounded-2xl border border-slate-200 p-6 hover:border-blue-200 hover:shadow-xl transition-all duration-300 bg-white flex flex-col h-full">
                <div className="aspect-[16/9] mb-6 rounded-xl overflow-hidden bg-slate-50 relative shrink-0">
                  <img src={`/__mockup/images/${venture.img}`} alt={venture.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 absolute inset-0 z-10" />
                  <div className="absolute inset-0 flex items-center justify-center z-0 bg-slate-50">
                    <Activity className="w-8 h-8 text-slate-300" />
                  </div>
                </div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6 shrink-0">
                  {venture.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{venture.title}</h3>
                <p className="text-slate-500 leading-relaxed mb-6 flex-grow">{venture.desc}</p>
                <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 mt-auto">
                  Read story <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 py-12 px-6 border-t border-slate-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
              <Activity className="text-white w-3 h-3" />
            </div>
            <span className="font-bold text-lg tracking-tight text-slate-900">Clavix</span>
          </div>
          <div className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Clavix Technologies. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-sm font-medium text-slate-500">
            <a href="#" className="hover:text-slate-900 transition-colors">Privacy</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Terms</a>
            <a href="#" className="hover:text-slate-900 transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
