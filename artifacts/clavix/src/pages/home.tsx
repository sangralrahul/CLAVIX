import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "wouter";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X, CheckCircle2, ChevronDown, BrainCircuit, ExternalLink, Database, Cpu, ShieldCheck, BarChart3, ShoppingBag, Linkedin, Twitter, Mail, MapPin, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#09090b]/90 backdrop-blur-xl border-b border-white/5 py-4 shadow-[0_1px_30px_rgba(0,0,0,0.5)]"
          : "bg-gradient-to-b from-black/60 to-transparent border-b border-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16 flex items-center justify-between">
        <div className="flex items-center gap-1 cursor-pointer" onClick={() => scrollTo("hero")} data-testid="nav-logo">
          <span className="text-xl font-bold tracking-[0.15em] text-white font-serif relative">
            CLAVIX
            <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-blue-600 rounded-full opacity-50"></span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          {["ventures", "about", "investors", "careers"].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="hover:text-white transition-colors uppercase tracking-widest text-[13px] font-sans"
              data-testid={`nav-link-${item}`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="hidden md:block">
          <Button 
            variant="outline" 
            className="border-white/10 bg-white/5 hover:bg-white/10 hover:text-white rounded-full px-6 text-sm font-sans"
            onClick={() => scrollTo("contact")}
            data-testid="nav-contact-btn"
          >
            Get in Touch
          </Button>
        </div>

        <button className="md:hidden text-white" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#09090b] border-b border-white/5 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {["ventures", "about", "investors", "careers"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item)}
                  className="text-left text-zinc-400 hover:text-white transition-colors uppercase tracking-widest text-sm font-medium"
                >
                  {item}
                </button>
              ))}
              <Button 
                variant="outline" 
                className="w-full border-white/10 bg-white/5 hover:bg-white/10 text-white rounded-full"
                onClick={() => scrollTo("contact")}
              >
                Get in Touch
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section id="hero" className="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden bg-[#09090b]">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-blue-600/10 rounded-full blur-[120px] -z-10 mix-blend-screen opacity-60" />
      <div className="absolute top-1/3 right-1/4 w-[35rem] h-[35rem] bg-cyan-400/5 rounded-full blur-[100px] -z-10 mix-blend-screen opacity-50" />
      <div className="absolute bottom-1/4 left-1/2 w-[45rem] h-[45rem] bg-violet-600/5 rounded-full blur-[150px] -z-10 mix-blend-screen opacity-40" />

      <div className="max-w-7xl mx-auto px-6 md:px-16 w-full relative z-10 grid lg:grid-cols-[55%_45%] gap-12 items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start"
        >
          <div className="text-xs font-medium tracking-[0.2em] uppercase text-zinc-500 mb-8">
            Healthcare Technology · Est. 2026
          </div>
          
          <h1 className="text-6xl md:text-7xl lg:text-[5.5rem] font-bold font-serif text-white leading-[1.05] tracking-tight mb-8">
            Powering the<br/>
            next generation<br/>
            of <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Indian healthcare.</span>
          </h1>
          
          <p className="text-base md:text-lg text-zinc-400 font-light max-w-md leading-relaxed mb-10">
            To make world-class medical tools and intelligence accessible to every doctor in India.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-12">
            <Button 
              className="rounded-full px-8 h-12 text-sm bg-blue-600 hover:bg-blue-700 text-white font-medium border-0 transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]"
              onClick={() => document.getElementById("ventures")?.scrollIntoView({ behavior: "smooth" })}
              data-testid="hero-explore-btn"
            >
              Explore Ventures
            </Button>
            <Button 
              variant="ghost" 
              className="rounded-full px-8 h-12 text-sm hover:bg-white/5 text-zinc-300 hover:text-white border border-transparent hover:border-white/10 transition-all group"
              onClick={() => document.getElementById("investors")?.scrollIntoView({ behavior: "smooth" })}
              data-testid="hero-investor-btn"
            >
              Investor Relations <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="flex items-center gap-6 text-sm font-medium text-zinc-500 tracking-wider">
            <span>3 Ventures Built</span>
            <span className="w-1 h-1 bg-zinc-700 rounded-full"></span>
            <span>1.2M+ Doctors</span>
            <span className="w-1 h-1 bg-zinc-700 rounded-full"></span>
            <span>Delhi, India</span>
          </div>
        </motion.div>

        <motion.div 
          className="relative hidden lg:block"
          style={{ y: y1, opacity }}
        >
          <div className="relative rounded-3xl overflow-hidden aspect-[3/4] border border-white/10 shadow-[0_0_50px_rgba(37,99,235,0.15)]">
            <img 
              src="/images/hero-doctor.png" 
              alt="Indian doctor using AI interface" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent opacity-80" />
            
            {/* Floating Card */}
            <div className="absolute bottom-10 left-10 right-10 bg-white/10 backdrop-blur-xl border border-white/20 p-5 rounded-2xl flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <BrainCircuit className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <div className="text-white font-medium font-serif text-lg">CADUS AI</div>
                  <div className="text-zinc-400 text-xs">Processing diagnostics...</div>
                </div>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/20 border border-blue-500/30">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                <span className="text-[10px] uppercase tracking-wider text-blue-300 font-bold">Live</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        onClick={() => document.getElementById("ticker")?.scrollIntoView({ behavior: "smooth" })}
      >
        <span className="text-[10px] uppercase tracking-[0.25em] text-zinc-600">Scroll</span>
        <ChevronDown className="w-4 h-4 text-zinc-600" />
      </motion.div>
    </section>
  );
};

const Ticker = () => {
  const items = [
    "AETHEX · India's Medical Marketplace",
    "CADUS AI · Clinical Intelligence Platform",
    "AETHEX OS · Coming 2025",
    "Delhi, India · Est. 2026",
    "1.2M+ Target Doctors",
    "₹20 Cr Pre-Money Valuation",
    "Seed Round Open",
  ];

  return (
    <div id="ticker" className="border-y border-white/5 bg-white/[0.015] overflow-hidden py-4 relative">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="inline-flex items-center gap-4 mx-8 text-xs font-medium text-zinc-500 tracking-[0.15em] uppercase">
            <span className="w-1 h-1 rounded-full bg-zinc-600 inline-block"></span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

const Ventures = () => {
  return (
    <section id="ventures" className="py-28 md:py-40 relative bg-[#09090b]">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20 md:mb-24"
        >
          <h2 className="text-xs font-medium tracking-[0.2em] uppercase text-zinc-500 mb-6">Our Portfolio</h2>
          <p className="text-4xl md:text-5xl font-serif text-white max-w-3xl leading-tight">
            Building the infrastructure for modern medical practice.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* AETHEX */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="group relative flex flex-col justify-between p-10 md:p-12 rounded-2xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] hover:border-cyan-500/30 transition-all duration-500 overflow-hidden border-t-2 border-t-cyan-500/50"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-cyan-500/10 transition-all duration-700" />
            
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20">
                    <ShoppingBag className="w-5 h-5 text-cyan-400" />
                  </div>
                  <h3 className="text-2xl font-serif text-white tracking-wide">AETHEX</h3>
                </div>
                <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-[10px] font-bold text-cyan-400 border border-cyan-500/20 uppercase tracking-[0.1em]">Live</span>
              </div>
              
              <h4 className="text-xl font-medium text-white mb-4 font-sans">India's Medical Marketplace</h4>
              <p className="text-zinc-400 leading-relaxed mb-8 font-light">
                Surgical instruments, diagnostics, scrubs, stethoscopes, portable devices, NEET-PG study materials.
              </p>

              <ul className="space-y-4 mb-12">
                {["Medical Shop", "Study Hub", "GST Invoice", "Fast Delivery"].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-zinc-300 font-light">
                    <CheckCircle2 className="w-4 h-4 text-cyan-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <a 
              href="https://aethex.in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-white group/btn hover:text-cyan-400 transition-colors"
            >
              Visit Aethex 
              <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
            </a>
          </motion.div>

          {/* CADUS AI */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group relative flex flex-col justify-between p-10 md:p-12 rounded-2xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] hover:border-blue-500/30 transition-all duration-500 overflow-hidden lg:mt-12 lg:-mb-12 border-t-2 border-t-blue-500/50"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-500/10 transition-all duration-700" />
            
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                    <BrainCircuit className="w-5 h-5 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-serif text-white tracking-wide">CADUS AI</h3>
                </div>
                <span className="px-3 py-1 rounded-full bg-blue-500/10 text-[10px] font-bold text-blue-400 border border-blue-500/20 uppercase tracking-[0.1em]">Live</span>
              </div>
              
              <h4 className="text-xl font-medium text-white mb-4 font-sans">Clinical AI Assistant</h4>
              <p className="text-zinc-400 leading-relaxed mb-8 font-light">
                Diagnosis generation, lab interpretation, drug interactions, voice input, image analysis, PDF export.
              </p>

              <ul className="space-y-4 mb-12">
                {["Tiers: Minor/Medius/Magnus", "Clinical Diagnosis", "Lab Interpretation", "Multimodal Analysis"].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-zinc-300 font-light">
                    <CheckCircle2 className="w-4 h-4 text-blue-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <a 
              href="https://aethex.in/ai-assistant" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-white group/btn hover:text-blue-400 transition-colors"
            >
              Discover CADUS AI 
              <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* AETHEX OS */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          className="mt-12 lg:mt-32 group relative rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] hover:border-violet-500/30 transition-all duration-700"
        >
          {/* Violet gradient background strip */}
          <div className="absolute inset-0 bg-gradient-to-r from-violet-900/10 via-transparent to-transparent pointer-events-none" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-600/5 rounded-full blur-[120px] pointer-events-none group-hover:bg-violet-600/10 transition-all duration-700" />

          <div className="relative p-10 md:p-16 grid lg:grid-cols-[1.2fr_1fr] gap-16 items-center">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
                  <Database className="w-6 h-6 text-violet-400" />
                </div>
                <div>
                  <div className="flex items-center gap-4">
                    <h3 className="text-2xl font-serif text-white tracking-wide">AETHEX OS</h3>
                    <span className="px-3 py-1 rounded-full bg-violet-500/10 text-[10px] font-bold text-violet-300 border border-violet-500/25 uppercase tracking-[0.1em] animate-pulse">
                      Coming Soon
                    </span>
                  </div>
                  <p className="text-xs text-violet-400/80 mt-1 tracking-widest uppercase font-medium">Hospital Management</p>
                </div>
              </div>

              <h4 className="text-2xl font-serif text-white mb-4 leading-snug">
                AI-native Hospital Management System.
              </h4>
              <p className="text-zinc-400 leading-relaxed mb-10 font-light">
                Unifies patient records, clinical workflows, pharmacy, diagnostics, admin intelligence into a seamless operating layer.
              </p>

              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                {[
                  { icon: Cpu, title: "Clinical Workflows" },
                  { icon: Database, title: "Patient Records" },
                  { icon: ShieldCheck, title: "Pharmacy & Diagnostics" },
                  { icon: BarChart3, title: "Admin Intelligence" }
                ].map(({ icon: Icon, title }, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-violet-300" />
                    </div>
                    <p className="text-sm font-medium text-white">{title}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-white/10">
                <a
                  href="mailto:hello@clavix.in?subject=Aethex OS Early Access"
                  className="inline-flex items-center gap-2 text-sm font-medium text-violet-300 hover:text-violet-100 transition-colors group/os"
                >
                  Request Early Access
                  <ArrowRight className="w-4 h-4 group-hover/os:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            <div className="hidden lg:flex items-center justify-center h-full">
              <div className="relative">
                <div className="text-[12rem] font-serif font-bold text-transparent bg-clip-text bg-gradient-to-b from-violet-400/20 to-transparent leading-none opacity-50">
                  OS
                </div>
                <div className="absolute inset-0 flex items-center justify-center flex-col gap-4">
                  <div className="px-6 py-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl text-sm font-medium text-white translate-x-12 -translate-y-8 rotate-3">
                    Intelligent Routing
                  </div>
                  <div className="px-6 py-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl text-sm font-medium text-white -translate-x-8 translate-y-4 -rotate-2">
                    Predictive Care
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-28 md:py-40 relative bg-[#09090b]">
      {/* Full bleed team banner */}
      <div className="absolute top-0 inset-x-0 h-64 md:h-96 overflow-hidden border-b border-white/5">
        <img 
          src="/images/team-office.png" 
          alt="Clavix Team in Delhi" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#09090b]/80 to-[#09090b]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10 pt-32 md:pt-48">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xs font-medium tracking-[0.2em] uppercase text-zinc-500 mb-6">Who We Are</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-white mb-10 leading-tight">
              A quiet force in Indian healthcare technology.
            </h3>
            <p className="text-lg text-zinc-400 mb-6 font-light leading-relaxed">
              Founded in India and for India, Clavix Technologies was built on a singular premise: Indian doctors deserve world-class software and infrastructure. We don't chase trends; we solve systemic inefficiencies in medical procurement and clinical decision-making.
            </p>
            <p className="text-lg text-zinc-400 mb-10 font-light leading-relaxed">
              We operate with understated authority and precise engineering. Our products speak for themselves in the hands of the medical professionals who rely on them daily.
            </p>
            
            <div className="h-px w-16 bg-white/20 mb-8" />
            <p className="text-sm font-medium tracking-widest uppercase text-white">Founded in Delhi · 2026</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { label: "Founded", value: "2026", desc: "Delhi, India" },
              { label: "Ventures", value: "03", desc: "2 Live + 1 Coming" },
              { label: "Focus", value: "India", desc: "First Market" },
              { label: "Model", value: "B2B + B2C", desc: "Medical Sector" }
            ].map((stat, i) => (
              <div key={i} className="p-8 md:p-10 bg-[rgba(255,255,255,0.02)] border border-white/5 rounded-2xl text-center backdrop-blur-sm">
                <div className="text-sm font-medium text-zinc-500 uppercase tracking-[0.2em] mb-4">{stat.label}</div>
                <div className="text-4xl font-serif text-white mb-2">{stat.value}</div>
                <div className="text-xs text-zinc-400 font-light tracking-wide">{stat.desc}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Investors = () => {
  return (
    <section id="investors" className="py-28 md:py-40 relative bg-zinc-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-xs font-medium tracking-[0.2em] uppercase text-zinc-500 mb-6">Investor Relations</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-white leading-tight mb-6">
            Scale with us.
          </h3>
          <p className="text-lg text-zinc-400 font-light max-w-2xl mx-auto">
            We are building the definitive ecosystem for Indian medical professionals. 
            High growth, high margins, and immense systemic impact.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { title: "Seed Round", value: "₹2 Cr", desc: "Seeking Investment" },
            { title: "Valuation", value: "₹20 Cr", desc: "Pre-Money" },
            { title: "Market", value: "1.2M+", desc: "Target Doctors in India" }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-10 rounded-2xl bg-[rgba(255,255,255,0.03)] border border-white/5 text-center flex flex-col items-center justify-center"
            >
              <div className="text-xs font-medium text-zinc-500 uppercase tracking-[0.2em] mb-4">{stat.title}</div>
              <div className="text-5xl font-serif text-white mb-3">{stat.value}</div>
              <div className="text-sm text-zinc-400 font-light">{stat.desc}</div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="p-10 md:p-12 rounded-2xl bg-gradient-to-b from-blue-900/10 to-transparent border border-blue-500/10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left"
        >
          <div>
            <h4 className="text-2xl font-serif text-white mb-3">Dual Revenue Architecture</h4>
            <p className="text-zinc-400 text-sm max-w-xl font-light leading-relaxed">
              Diversified scaling through B2B/B2C marketplace transactions via Aethex, and high-margin recurring SaaS subscriptions via CADUS AI.
            </p>
          </div>
          <Button 
            asChild
            className="rounded-full px-8 h-12 bg-white text-black hover:bg-gray-200 w-full md:w-auto shrink-0 font-medium"
          >
            <a href="mailto:investor@clavix.in?subject=Requesting Investor Deck">
              Request Investor Deck
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

const Careers = () => {
  const [, navigate] = useLocation();

  const roles = [
    { id: "full-stack-developer", title: "Full Stack Developer", dept: "Engineering", type: "Remote", color: "blue" },
    { id: "ai-ml-engineer", title: "AI/ML Engineer", dept: "Engineering", type: "Remote", color: "violet" },
    { id: "medical-content-writer", title: "Medical Content Writer", dept: "Clinical", type: "Remote", color: "cyan" },
  ];

  const badgeMap: Record<string, string> = {
    blue: "bg-blue-500/10 text-blue-400 border border-blue-500/20",
    violet: "bg-violet-500/10 text-violet-400 border border-violet-500/20",
    cyan: "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20",
  };

  return (
    <section id="careers" className="py-28 md:py-40 relative bg-[#09090b]">
      <div className="max-w-5xl mx-auto px-6 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-xs font-medium tracking-[0.2em] uppercase text-zinc-500 mb-6">Careers</h2>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <h3 className="text-4xl md:text-5xl font-serif text-white leading-tight mb-5">
                Join the mission.
              </h3>
              <p className="text-lg text-zinc-400 font-light max-w-lg">
                Build tools used by doctors across India. Small, elite team. Real ownership. Real impact.
              </p>
            </div>
            <Link href="/careers">
              <Button variant="outline" className="shrink-0 rounded-full border-white/10 hover:bg-white/5 text-zinc-300 hover:text-white px-6 h-11 gap-2">
                View All Openings <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </motion.div>

        <div className="space-y-3">
          {roles.map((role, i) => (
            <motion.div
              key={role.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group flex flex-col md:flex-row md:items-center justify-between p-6 md:p-8 rounded-2xl bg-[rgba(255,255,255,0.02)] hover:bg-[rgba(255,255,255,0.035)] border border-white/5 hover:border-white/10 transition-all duration-300 gap-4 cursor-pointer"
              onClick={() => navigate(`/careers#${role.id}`)}
            >
              <div className="flex items-center gap-5">
                <div>
                  <h4 className="text-lg font-medium text-white mb-2">{role.title}</h4>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.1em] ${badgeMap[role.color]}`}>
                      {role.dept}
                    </span>
                    <span className="text-xs text-zinc-500">Remote · India</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-zinc-400 group-hover:text-white transition-colors shrink-0">
                View & Apply
                <ArrowRight className="w-4 h-4 -translate-x-1 group-hover:translate-x-0 opacity-50 group-hover:opacity-100 transition-all" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-zinc-600">
            Don't see your role?{" "}
            <a href="mailto:careers@clavix.in" className="text-zinc-400 hover:text-white transition-colors underline underline-offset-2">
              Send a general application
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.open(`mailto:hello@clavix.in?subject=${subject}&body=${body}`, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-28 md:py-40 relative bg-zinc-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xs font-medium tracking-[0.2em] uppercase text-zinc-500 mb-6">Contact</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-white mb-10 leading-tight">
              Start a conversation.
            </h3>
            <p className="text-lg text-zinc-400 font-light mb-14 max-w-md leading-relaxed">
              Whether you are an investor, a hospital administrator, or an engineer — we would like to hear from you.
            </p>

            <div className="space-y-10">
              <div className="flex items-start gap-5">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-zinc-400" />
                </div>
                <div>
                  <div className="text-xs font-medium text-zinc-500 uppercase tracking-[0.2em] mb-1.5">Headquarters</div>
                  <div className="text-white text-base font-medium">Delhi, India</div>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-4 h-4 text-zinc-400" />
                </div>
                <div>
                  <div className="text-xs font-medium text-zinc-500 uppercase tracking-[0.2em] mb-1.5">General Inquiries</div>
                  <a href="mailto:hello@clavix.in" className="text-white text-base font-medium hover:text-blue-400 transition-colors">hello@clavix.in</a>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Building2 className="w-4 h-4 text-zinc-400" />
                </div>
                <div>
                  <div className="text-xs font-medium text-zinc-500 uppercase tracking-[0.2em] mb-1.5">Investor Relations</div>
                  <a href="mailto:investor@clavix.in" className="text-white text-base font-medium hover:text-blue-400 transition-colors">investor@clavix.in</a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-[rgba(255,255,255,0.02)] border border-white/5 p-8 md:p-12 rounded-3xl"
          >
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="sent"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col items-center justify-center h-full min-h-[320px] text-center gap-4"
                >
                  <div className="w-14 h-14 rounded-full bg-blue-500/15 border border-blue-500/30 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-blue-400" />
                  </div>
                  <h4 className="text-xl font-serif text-white">Message sent!</h4>
                  <p className="text-zinc-400 text-sm max-w-xs">Your email client has opened. We look forward to speaking with you.</p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium text-zinc-400 uppercase tracking-wider mb-2">Name</label>
                      <Input
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="bg-black/50 border-white/10 text-white h-12 rounded-xl focus-visible:ring-blue-500 placeholder:text-zinc-600"
                        placeholder="Dr. Arjun Sharma"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-zinc-400 uppercase tracking-wider mb-2">Email</label>
                      <Input
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className="bg-black/50 border-white/10 text-white h-12 rounded-xl focus-visible:ring-blue-500 placeholder:text-zinc-600"
                        placeholder="you@hospital.com"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-zinc-400 uppercase tracking-wider mb-2">Message</label>
                    <Textarea
                      value={message}
                      onChange={e => setMessage(e.target.value)}
                      className="bg-black/50 border-white/10 text-white min-h-[160px] rounded-xl focus-visible:ring-blue-500 resize-none placeholder:text-zinc-600"
                      placeholder="How can we help you?"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-all shadow-[0_0_20px_rgba(37,99,235,0.25)] hover:shadow-[0_0_30px_rgba(37,99,235,0.4)]">
                    Send Message <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                  <p className="text-center text-xs text-zinc-600">Your email client will open to complete sending.</p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="bg-[#09090b] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-16 pt-20 pb-12">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand col */}
          <div className="md:col-span-1">
            <div className="text-xl font-bold tracking-[0.15em] text-white font-serif mb-4">CLAVIX</div>
            <p className="text-sm text-zinc-500 font-light leading-relaxed mb-6 max-w-[200px]">
              Building India's healthcare technology infrastructure.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com/company/clavix"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5 text-zinc-400" />
              </a>
              <a
                href="https://twitter.com/clavixin"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all"
                aria-label="Twitter / X"
              >
                <Twitter className="w-3.5 h-3.5 text-zinc-400" />
              </a>
            </div>
          </div>

          {/* Company col */}
          <div>
            <div className="text-xs font-medium text-zinc-500 uppercase tracking-[0.2em] mb-6">Company</div>
            <ul className="space-y-4">
              {[
                { label: "Ventures", id: "ventures" },
                { label: "About", id: "about" },
                { label: "Investor Relations", id: "investors" },
                { label: "Careers", id: "careers" },
                { label: "Contact", id: "contact" },
              ].map(({ label, id }) => (
                <li key={id}>
                  <button
                    onClick={() => scrollTo(id)}
                    className="text-sm text-zinc-400 hover:text-white transition-colors font-light"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Ventures col */}
          <div>
            <div className="text-xs font-medium text-zinc-500 uppercase tracking-[0.2em] mb-6">Ventures</div>
            <ul className="space-y-4">
              {[
                { label: "AETHEX", href: "https://aethex.in" },
                { label: "CADUS AI", href: "https://aethex.in/ai-assistant" },
                { label: "AETHEX OS", href: "#ventures" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-sm text-zinc-400 hover:text-white transition-colors font-light inline-flex items-center gap-1.5 group"
                  >
                    {label}
                    {href.startsWith("http") && (
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact col */}
          <div>
            <div className="text-xs font-medium text-zinc-500 uppercase tracking-[0.2em] mb-6">Get In Touch</div>
            <ul className="space-y-4">
              <li>
                <a href="mailto:hello@clavix.in" className="text-sm text-zinc-400 hover:text-white transition-colors font-light">
                  hello@clavix.in
                </a>
              </li>
              <li>
                <a href="mailto:investor@clavix.in" className="text-sm text-zinc-400 hover:text-white transition-colors font-light">
                  investor@clavix.in
                </a>
              </li>
              <li className="text-sm text-zinc-500 font-light">Delhi, India</li>
            </ul>
          </div>
        </div>

        {/* Divider + bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xs text-zinc-600 tracking-wide">
            © 2026 Clavix Technologies Pvt. Ltd. All rights reserved.
          </div>
          <div className="text-[10px] text-zinc-700 tracking-[0.3em] uppercase">
            Designed for India's doctors.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function Home() {
  return (
    <main className="bg-[#09090b] min-h-screen text-white font-sans selection:bg-blue-500/30">
      <Navbar />
      <Hero />
      <Ticker />
      <Ventures />
      <About />
      <Investors />
      <Careers />
      <Contact />
      <Footer />
    </main>
  );
}
