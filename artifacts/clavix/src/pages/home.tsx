import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronRight, Mail, MapPin, Building2, CheckCircle2, ChevronDown, Stethoscope, BrainCircuit, ExternalLink, Database, Cpu, ShieldCheck, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// --- Components ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

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
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 border-b border-transparent ${
        scrolled ? "bg-background/80 backdrop-blur-md border-white/5 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center gap-1 cursor-pointer" onClick={() => scrollTo("hero")} data-testid="nav-logo">
          <span className="text-xl font-bold tracking-[0.18em] text-white" style={{ fontFamily: "'Playfair Display', serif" }}>CLAVIX</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          {["ventures", "about", "investors", "careers"].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="hover:text-white transition-colors uppercase tracking-wider text-xs"
              data-testid={`nav-link-${item}`}
            >
              {item}
            </button>
          ))}
        </div>

        <Button 
          variant="outline" 
          className="border-white/10 hover:bg-white/5 hover:text-white rounded-full px-6"
          onClick={() => scrollTo("contact")}
          data-testid="nav-contact-btn"
        >
          Get in Touch
        </Button>
      </div>
    </motion.nav>
  );
};

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden bg-grid-pattern">
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background z-0" />
      
      {/* Abstract Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -z-10 mix-blend-screen" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-secondary/10 rounded-full blur-[150px] -z-10 mix-blend-screen" />

      <div className="container relative z-10 mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
        </motion.div>
        
        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-white max-w-5xl mx-auto leading-[1.1] mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        >
          Powering the next generation of <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400 italic">Indian healthcare</span>.
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 font-light"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        >
          To make world-class medical tools and intelligence accessible to every doctor in India. Focused products, built with precise intent.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button 
            className="rounded-full px-8 h-12 text-base bg-primary hover:bg-primary/90 text-white"
            onClick={() => document.getElementById("ventures")?.scrollIntoView({ behavior: "smooth" })}
            data-testid="hero-explore-btn"
          >
            Explore Ventures
          </Button>
          <Button 
            variant="ghost" 
            className="rounded-full px-8 h-12 text-base hover:bg-white/5 border-transparent hover:border-white/10"
            onClick={() => document.getElementById("investors")?.scrollIntoView({ behavior: "smooth" })}
            data-testid="hero-investor-btn"
          >
            Investor Relations
          </Button>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <ChevronDown className="w-6 h-6 opacity-50" />
      </motion.div>
    </section>
  );
};

const Ventures = () => {
  return (
    <section id="ventures" className="py-32 relative border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-20 md:mb-32">
          <h2 className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">Our Ventures</h2>
          <p className="text-3xl md:text-5xl font-serif text-white max-w-3xl leading-tight">
            Building the infrastructure for modern medical practice.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          {/* Aethex Card */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="group relative flex flex-col justify-between p-8 md:p-12 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-secondary/30 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-secondary/20 transition-all duration-700" />
            
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                    <Stethoscope className="w-5 h-5 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-serif text-white tracking-wide">AETHEX</h3>
                </div>
                <span className="px-3 py-1 rounded-full bg-white/5 text-xs text-secondary border border-secondary/20 uppercase tracking-wider">Live</span>
              </div>
              
              <h4 className="text-xl font-medium text-white mb-4">India's Medical Marketplace</h4>
              <p className="text-muted-foreground leading-relaxed mb-8">
                The premier destination for doctors and students. Surgical instruments, diagnostics, scrubs, stethoscopes, portable devices, and NEET-PG study materials — all in one unified ecosystem.
              </p>

              <ul className="space-y-3 mb-12">
                {["Medical Shop", "Study Hub", "GST Invoice", "Fast Delivery"].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-secondary/70" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <a 
              href="https://aethex.in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-white group/btn"
              data-testid="link-aethex"
            >
              Visit Aethex 
              <ExternalLink className="w-4 h-4 text-secondary group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
            </a>
          </motion.div>

          {/* CADUS AI Card */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="group relative flex flex-col justify-between p-8 md:p-12 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-primary/30 transition-all duration-500 overflow-hidden md:translate-y-16"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/20 transition-all duration-700" />
            
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <BrainCircuit className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-2xl font-serif text-white tracking-wide">CADUS AI</h3>
                </div>
                <span className="px-3 py-1 rounded-full bg-white/5 text-xs text-primary border border-primary/20 uppercase tracking-wider">Live</span>
              </div>
              
              <h4 className="text-xl font-medium text-white mb-4">Clinical AI Assistant</h4>
              <p className="text-muted-foreground leading-relaxed mb-8">
                An advanced cognitive partner for medical professionals. Featuring diagnosis generation, lab interpretation, drug interactions, voice input, image analysis, and seamless PDF export.
              </p>

              <ul className="space-y-3 mb-12">
                {["3 Model Tiers (Minor/Medius/Magnus)", "Clinical DDx Generation", "Lab Result Interpreter", "Multimodal Image Analysis"].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-primary/70" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <a 
              href="https://aethex.in/ai-assistant" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-white group/btn"
              data-testid="link-cadus-ai"
            >
              Discover CADUS AI 
              <ExternalLink className="w-4 h-4 text-primary group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* Aethex OS — Coming Soon */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="mt-12 lg:mt-20 group relative rounded-2xl overflow-hidden border border-white/5 hover:border-violet-500/30 transition-all duration-700"
          data-testid="card-aethex-os"
        >
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-transparent to-indigo-900/10 pointer-events-none" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-violet-600/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-violet-600/18 transition-all duration-700" />

          <div className="relative p-8 md:p-12 lg:p-16 grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Identity */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-violet-500/15 border border-violet-500/20 flex items-center justify-center">
                  <Database className="w-6 h-6 text-violet-400" />
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-2xl font-serif text-white tracking-wide">AETHEX OS</h3>
                    <span className="px-3 py-1 rounded-full bg-violet-500/10 text-xs text-violet-300 border border-violet-500/25 uppercase tracking-wider animate-pulse">
                      Coming Soon
                    </span>
                  </div>
                  <p className="text-sm text-violet-300/70 mt-1 tracking-wide uppercase">Hospital Intelligence Platform</p>
                </div>
              </div>

              <h4 className="text-xl md:text-2xl font-medium text-white mb-5 leading-snug">
                The operating layer for the modern Indian hospital.
              </h4>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Aethex OS is an AI-native hospital management system designed from the ground up for the Indian healthcare infrastructure. It unifies patient records, clinical workflows, pharmacy inventory, diagnostic pipelines, and administrative intelligence into a single, continuously-learning platform — giving every hospital the operational clarity of a world-class institution.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Built as a silent engine beneath the hospital's existing systems, Aethex OS surfaces insights where and when they matter most — at the point of care, at the billing desk, and in the boardroom.
              </p>
            </div>

            {/* Right: Pillars */}
            <div className="space-y-5">
              {[
                {
                  icon: Cpu,
                  title: "AI-Powered Clinical Engine",
                  desc: "Real-time diagnostic support, auto-coding, and treatment pathway suggestions embedded directly into clinical workflows."
                },
                {
                  icon: Database,
                  title: "Unified Hospital Data Layer",
                  desc: "A single source of truth for patient records, billing, pharmacy, diagnostics, and staff — fully interoperable and audit-ready."
                },
                {
                  icon: ShieldCheck,
                  title: "Compliance & Security",
                  desc: "Built for ABDM interoperability and DISHA compliance. Encrypted at rest and in transit, with role-based access across every department."
                },
                {
                  icon: BarChart3,
                  title: "Operational Intelligence",
                  desc: "Live dashboards for bed occupancy, revenue cycles, supply chain, and clinical KPIs — turning hospital data into actionable decisions."
                }
              ].map(({ icon: Icon, title, desc }, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-violet-500/20 transition-colors duration-300"
                >
                  <div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="w-4 h-4 text-violet-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white mb-1">{title}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                </motion.div>
              ))}

              <div className="pt-2">
                <p className="text-xs text-violet-400/60 tracking-wider uppercase">Notify me when it launches</p>
                <a
                  href="mailto:hello@clavix.in?subject=Aethex OS Early Access"
                  className="inline-flex items-center gap-2 mt-3 text-sm font-medium text-violet-300 hover:text-violet-100 transition-colors group/os"
                  data-testid="link-aethex-os-notify"
                >
                  Request Early Access
                  <ArrowRight className="w-4 h-4 group-hover/os:translate-x-1 transition-transform" />
                </a>
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
    <section id="about" className="py-32 relative bg-black/40">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">Identity & Origin</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-white mb-8 leading-tight">
              A quiet force in Indian healthcare technology.
            </h3>
            <p className="text-lg text-muted-foreground mb-6 font-light leading-relaxed">
              Founded in India and for India, Clavix Technologies was built on a singular premise: Indian doctors deserve world-class software and infrastructure. We don't chase trends; we solve systemic inefficiencies in medical procurement and clinical decision-making.
            </p>
            <p className="text-lg text-muted-foreground font-light leading-relaxed">
              We operate with understated authority and precise engineering. Our products speak for themselves in the hands of the medical professionals who rely on them daily.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { label: "Founded", value: "2026", desc: "Delhi, India" },
              { label: "Ventures", value: "03", desc: "2 Live + 1 Coming Soon" },
              { label: "Focus", value: "India", desc: "First Market" },
              { label: "Audience", value: "B2B/B2C", desc: "Medical Sector" }
            ].map((stat, i) => (
              <div key={i} className="p-8 bg-white/[0.02] border border-white/5 rounded-xl text-center">
                <div className="text-3xl font-serif text-white mb-2">{stat.value}</div>
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-1">{stat.label}</div>
                <div className="text-xs text-gray-500">{stat.desc}</div>
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
    <section id="investors" className="py-32 relative border-t border-white/5 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[30rem] bg-primary/5 blur-[120px] rounded-full -z-10" />
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-16"
          >
            <h2 className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">Investor Relations</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-white leading-tight">
              Scale with us.
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-8 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 text-center"
            >
              <div className="text-sm text-primary mb-2 uppercase tracking-wider font-medium">Seed Round</div>
              <div className="text-4xl font-serif text-white mb-2">₹2 Cr</div>
              <div className="text-sm text-muted-foreground">Seeking Investment</div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 text-center"
            >
              <div className="text-sm text-white mb-2 uppercase tracking-wider font-medium">Valuation</div>
              <div className="text-4xl font-serif text-white mb-2">₹20 Cr</div>
              <div className="text-sm text-muted-foreground">Pre-Money</div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-8 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 text-center"
            >
              <div className="text-sm text-white mb-2 uppercase tracking-wider font-medium">Market</div>
              <div className="text-4xl font-serif text-white mb-2">1.2M+</div>
              <div className="text-sm text-muted-foreground">Target Doctors in India</div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="p-8 md:p-12 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div>
              <h4 className="text-xl font-medium text-white mb-2">Dual Revenue Architecture</h4>
              <p className="text-muted-foreground text-sm max-w-md">
                Diversified growth through B2B/B2C marketplace transactions (Aethex) and recurring SaaS intelligence subscriptions (CADUS AI). DPIIT recognition in progress.
              </p>
            </div>
            <Button 
              asChild
              className="rounded-full px-8 h-12 bg-white text-black hover:bg-gray-200 w-full md:w-auto shrink-0"
              data-testid="investor-deck-btn"
            >
              <a href="mailto:investor@clavix.in?subject=Requesting Investor Deck">
                Request Investor Deck <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Careers = () => {
  const roles = [
    { title: "Full Stack Developer", dept: "Engineering", type: "Remote" },
    { title: "AI/ML Engineer", dept: "Engineering", type: "Remote" },
    { title: "Medical Content Writer", dept: "Clinical", type: "Remote" }
  ];

  return (
    <section id="careers" className="py-32 relative bg-black/40 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">Careers</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-white">Join the mission.</h3>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-muted-foreground max-w-sm">We are a small, elite team building serious tools. If you care deeply about your craft, we want to hear from you. To apply for any role, email your updated resume to <a href="mailto:email@aethex.in" className="text-primary hover:underline">email@aethex.in</a></p>
          </motion.div>
        </div>

        <div className="grid gap-4">
          {roles.map((role, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 md:p-8 rounded-xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/5 transition-colors"
            >
              <div>
                <h4 className="text-xl font-medium text-white mb-2 group-hover:text-primary transition-colors">{role.title}</h4>
                <div className="flex gap-4 text-sm text-muted-foreground">
                  <span>{role.dept}</span>
                  <span>•</span>
                  <span>{role.type}</span>
                </div>
              </div>
              <Button 
                asChild
                variant="ghost" 
                className="mt-4 sm:mt-0 text-white hover:bg-white/10 rounded-full group/btn"
                data-testid={`career-apply-${i}`}
              >
                <a href={`mailto:email@aethex.in?subject=Application for ${role.title} — Resume Attached`}>
                  Apply Now <ChevronRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-32 relative border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">Contact</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-white mb-8">Start a conversation.</h3>
            <p className="text-muted-foreground mb-12 font-light">
              Whether you're a doctor looking for better tools, an investor seeking growth, or a partner aiming to collaborate — our line is always open.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest mb-1">Email</div>
                  <a href="mailto:email@aethex.in" className="text-white hover:text-primary transition-colors">email@aethex.in</a>
                </div>
              </div>
              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                  <Building2 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest mb-1">Headquarters</div>
                  <div className="text-white">Delhi, India</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="p-8 rounded-2xl bg-white/[0.02] border border-white/5"
          >
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                const fd = new FormData(e.currentTarget);
                const name = fd.get('name');
                const email = fd.get('email');
                const message = fd.get('message');
                window.location.href = `mailto:email@aethex.in?subject=Inquiry from ${name}&body=${message}%0D%0A%0D%0AFrom: ${name} (${email})`;
              }}
              className="space-y-6"
            >
              <div className="space-y-2">
                <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Name</label>
                <Input 
                  name="name" 
                  required 
                  className="bg-black/50 border-white/10 focus-visible:ring-primary rounded-xl h-12" 
                  placeholder="John Doe"
                  data-testid="contact-input-name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Email</label>
                <Input 
                  name="email" 
                  type="email" 
                  required 
                  className="bg-black/50 border-white/10 focus-visible:ring-primary rounded-xl h-12" 
                  placeholder="john@example.com"
                  data-testid="contact-input-email"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Message</label>
                <Textarea 
                  name="message" 
                  required 
                  className="bg-black/50 border-white/10 focus-visible:ring-primary rounded-xl min-h-[120px] resize-none" 
                  placeholder="How can we help you?"
                  data-testid="contact-input-message"
                />
              </div>
              <Button type="submit" className="w-full rounded-xl h-12 bg-white text-black hover:bg-gray-200" data-testid="contact-submit-btn">
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/10 bg-background text-muted-foreground">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-1">
            <span className="text-lg font-bold tracking-[0.18em] text-white" style={{ fontFamily: "'Playfair Display', serif" }}>CLAVIX</span>
          </div>
          <p className="text-xs text-gray-500">© {new Date().getFullYear()} Clavix Technologies Private Limited.</p>
        </div>
        

      </div>
    </footer>
  );
};

// --- Main Page Component ---

export default function Home() {
  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-primary/30">
      <Navbar />
      <main>
        <Hero />
        <Ventures />
        <About />
        <Investors />
        <Careers />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
