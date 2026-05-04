import React, { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, Menu, X, ExternalLink, BrainCircuit,
  ShoppingBag, Database, Linkedin, Twitter, Mail,
  ArrowUpRight, ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// ─── Utility ──────────────────────────────────────────────────────────────────
const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
});

// ─── Navbar ───────────────────────────────────────────────────────────────────
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  const links = [
    { label: "Ventures", id: "ventures" },
    { label: "About", id: "about" },
    { label: "Investors", id: "investors" },
    { label: "Careers", id: "careers" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#09090b]/96 backdrop-blur-2xl border-b border-white/6"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-14 h-16 flex items-center justify-between">
        <button onClick={() => scrollTo("hero")} className="flex items-center gap-3">
          <span className="text-[15px] font-bold tracking-[0.22em] text-white font-serif">CLAVIX</span>
          <span className="hidden sm:block text-[9px] text-zinc-600 tracking-[0.22em] uppercase font-semibold border-l border-white/10 pl-3">Technologies</span>
        </button>

        <div className="hidden md:flex items-center gap-9">
          {links.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-[11px] font-semibold tracking-[0.16em] uppercase text-zinc-500 hover:text-zinc-200 transition-colors duration-200"
            >
              {label}
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center">
          <button
            onClick={() => scrollTo("contact")}
            className="text-[11px] font-semibold tracking-[0.14em] uppercase text-zinc-400 hover:text-white border border-white/10 hover:border-white/20 transition-all px-5 py-2 rounded-sm"
          >
            Contact
          </button>
        </div>

        <button className="md:hidden text-white p-1" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
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
              {links.map(({ label, id }) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="text-left text-[11px] font-semibold tracking-[0.16em] uppercase text-zinc-500 hover:text-white transition-colors"
                >
                  {label}
                </button>
              ))}
              <button
                onClick={() => scrollTo("contact")}
                className="text-[11px] font-semibold tracking-[0.14em] uppercase text-zinc-400 border border-white/10 rounded-sm py-2.5 px-6 text-center hover:bg-white/4 transition-all"
              >
                Contact
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

// ─── Hero ─────────────────────────────────────────────────────────────────────
const Hero = () => (
  <section id="hero" className="relative min-h-[100dvh] flex flex-col justify-between bg-[#09090b]">
    <div className="max-w-7xl mx-auto px-6 md:px-14 w-full flex flex-col flex-1 justify-center pt-28 pb-0">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Eyebrow */}
        <p className="text-[10px] font-semibold tracking-[0.32em] uppercase text-zinc-600 mb-10">
          Clavix Technologies · Healthcare Technology Group · India
        </p>

        {/* Headline — bold, confident, full-width */}
        <h1 className="text-[2.6rem] sm:text-[3.4rem] md:text-[4.25rem] lg:text-[5rem] font-black text-white leading-[1.04] tracking-[-0.03em] mb-8 max-w-4xl">
          Building India's medical technology infrastructure.
        </h1>

        <p className="text-[16px] md:text-[17px] text-zinc-400 font-light leading-[1.8] max-w-xl mb-10">
          We design, build, and operate the software platforms serving India's 1.2 million practising physicians and the institutions that employ them.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-4 mb-16">
          <button
            onClick={() => document.getElementById("ventures")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center gap-2 h-11 px-7 bg-white text-[#09090b] text-[13px] font-bold tracking-[0.02em] hover:bg-zinc-100 transition-colors rounded-sm"
          >
            Our Companies <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => document.getElementById("investors")?.scrollIntoView({ behavior: "smooth" })}
            className="text-[13px] font-semibold text-zinc-500 hover:text-white transition-colors"
          >
            Investor Relations →
          </button>
        </div>
      </motion.div>
    </div>

    {/* Company tiles — full width at bottom of hero */}
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.35, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="w-full border-t border-white/8 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/8"
    >
      {[
        { name: "AETHEX", tagline: "India's Medical Marketplace", status: "Live", href: "https://aethex.in" },
        { name: "CADUS AI", tagline: "Clinical Intelligence Platform", status: "Live", href: "https://aethex.in/ai-assistant" },
        { name: "AETHEX OS", tagline: "Hospital Management System", status: "In Development", href: "mailto:hello@clavix.in?subject=Aethex OS Early Access" },
      ].map((v) => (
        <a
          key={v.name}
          href={v.href}
          target={v.href.startsWith("http") ? "_blank" : undefined}
          rel="noopener noreferrer"
          className="group flex flex-col justify-between px-8 py-7 hover:bg-white/[0.025] transition-colors"
        >
          <div className="flex items-center justify-between mb-8">
            <span className={`text-[10px] font-semibold tracking-[0.18em] uppercase ${
              v.status === "Live" ? "text-emerald-500" : "text-zinc-600"
            }`}>{v.status}</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-zinc-700 group-hover:text-zinc-400 transition-colors" />
          </div>
          <div>
            <h3 className="text-[15px] font-bold text-white mb-1 group-hover:text-zinc-200 transition-colors">{v.name}</h3>
            <p className="text-[12px] text-zinc-600 font-light">{v.tagline}</p>
          </div>
        </a>
      ))}
    </motion.div>
  </section>
);

// ─── Philosophy ───────────────────────────────────────────────────────────────
const Philosophy = () => (
  <section className="py-24 md:py-32 bg-zinc-950 border-y border-white/6">
    <div className="max-w-5xl mx-auto px-6 md:px-14">
      <motion.div {...fade()}>
        <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-zinc-600 mb-8">Founding Principle</p>
        <blockquote className="text-2xl md:text-3xl lg:text-4xl font-black text-white leading-[1.15] tracking-[-0.025em] mb-8 max-w-4xl">
          "Indian doctors deserve the same quality of medical tools and clinical intelligence as doctors anywhere in the world."
        </blockquote>
        <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-zinc-600">
          Clavix Technologies — Est. 2026
        </p>
      </motion.div>
    </div>
  </section>
);

// ─── Ventures ─────────────────────────────────────────────────────────────────
const PORTFOLIO = [
  {
    name: "AETHEX",
    tagline: "India's Medical Marketplace",
    description:
      "End-to-end procurement for India's medical community. Surgical instruments, diagnostics, pharma consumables, NEET-PG study material, GST-compliant invoicing, and fast delivery — all in one platform.",
    status: "Live",
    statusColor: "text-emerald-400 bg-emerald-400/8 border-emerald-400/20",
    href: "https://aethex.in",
    accent: "border-cyan-500/30 hover:border-cyan-500/60",
    dot: "bg-cyan-400",
    model: "B2C · B2B",
    icon: ShoppingBag,
    iconColor: "text-cyan-400 bg-cyan-500/8 border-cyan-500/15",
    features: ["Medical Shop & Pharmacy", "Study Hub for PG Aspirants", "GST Invoice Generation", "Pan-India Delivery"],
  },
  {
    name: "CADUS AI",
    tagline: "Clinical Intelligence Platform",
    description:
      "AI-powered clinical decision support for practising physicians. Differential diagnosis, lab interpretation, drug interactions, voice input, multimodal image analysis, and PDF export — in three precision tiers.",
    status: "Live",
    statusColor: "text-emerald-400 bg-emerald-400/8 border-emerald-400/20",
    href: "https://aethex.in/ai-assistant",
    accent: "border-blue-500/30 hover:border-blue-500/60",
    dot: "bg-blue-400",
    model: "SaaS · B2B",
    icon: BrainCircuit,
    iconColor: "text-blue-400 bg-blue-500/8 border-blue-500/15",
    features: ["Minor / Medius / Magnus Tiers", "Clinical Diagnosis Engine", "Lab & Radiology Interpretation", "Multimodal AI Analysis"],
  },
  {
    name: "AETHEX OS",
    tagline: "Hospital Management System",
    description:
      "An AI-native operating layer for healthcare institutions — unifying patient records, clinical workflows, pharmacy, diagnostics, and administrative intelligence into one seamless system.",
    status: "Coming Soon",
    statusColor: "text-violet-400 bg-violet-400/8 border-violet-400/20",
    href: "mailto:hello@clavix.in?subject=Aethex OS Early Access",
    accent: "border-violet-500/30 hover:border-violet-500/60",
    dot: "bg-violet-400",
    model: "B2B · SaaS",
    icon: Database,
    iconColor: "text-violet-400 bg-violet-500/8 border-violet-500/15",
    features: ["Unified Patient Records", "Clinical Workflow Engine", "Pharmacy & Diagnostics", "Admin Intelligence Dashboard"],
  },
];

const Ventures = () => (
  <section id="ventures" className="py-24 md:py-32 bg-[#09090b] border-t border-white/8">
    <div className="max-w-7xl mx-auto px-6 md:px-14">
      <motion.div {...fade()} className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
        <div>
          <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-zinc-600 mb-4">Our Portfolio</p>
          <h2 className="text-3xl md:text-4xl font-black text-white leading-tight tracking-[-0.025em]">
            Our companies
          </h2>
        </div>
        <p className="text-sm text-zinc-500 font-light leading-relaxed max-w-sm md:text-right">
          Each independently operated with shared infrastructure and a unified founding vision.
        </p>
      </motion.div>

      {/* 3-column product grid */}
      <div className="grid md:grid-cols-3 gap-px bg-white/8">
        {PORTFOLIO.map((v, i) => {
          const Icon = v.icon;
          return (
            <motion.div
              key={v.name}
              {...fade(i * 0.1)}
              className="group bg-[#09090b] hover:bg-white/[0.022] transition-colors duration-300 p-8 md:p-10 flex flex-col"
            >
              <div className="flex items-center justify-between mb-10">
                <span className={`text-[10px] font-semibold tracking-[0.2em] uppercase ${
                  v.status === "Live" ? "text-emerald-500" : "text-zinc-600"
                }`}>{v.status}</span>
                <Icon className="w-4 h-4 text-zinc-700 group-hover:text-zinc-500 transition-colors" />
              </div>

              <div className="mb-auto">
                <h3 className="text-2xl font-black text-white mb-1.5 tracking-[-0.02em]">{v.name}</h3>
                <p className="text-[11px] text-zinc-600 font-medium tracking-[0.04em] mb-1">{v.tagline}</p>
                <p className="text-[10px] text-zinc-700 font-semibold tracking-[0.1em] uppercase mb-6">{v.model}</p>
                <p className="text-[13px] text-zinc-400 font-light leading-[1.8] mb-7">{v.description}</p>
                <div className="space-y-2">
                  {v.features.map((f) => (
                    <div key={f} className="flex items-center gap-2.5 text-[11px] text-zinc-600 font-light">
                      <span className="w-3 h-px bg-white/15 shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/6">
                <a
                  href={v.href}
                  target={v.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-zinc-500 hover:text-white transition-colors"
                >
                  {v.status === "Coming Soon" ? "Request early access" : `Visit ${v.name}`}
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

// ─── About ────────────────────────────────────────────────────────────────────
const About = () => (
  <section id="about" className="py-28 md:py-40 bg-zinc-950 border-t border-white/5">
    <div className="max-w-7xl mx-auto px-6 md:px-14">
      <div className="grid lg:grid-cols-[1fr_1px_1fr] gap-16 md:gap-0 items-start">

        {/* Left: narrative */}
        <motion.div {...fade()} className="lg:pr-16">
          <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-zinc-600 mb-4">Who We Are</p>
          <h2 className="text-3xl md:text-4xl font-black text-white leading-tight tracking-[-0.025em] mb-8">
            A focused technology group for Indian healthcare.
          </h2>
          <p className="text-base text-zinc-400 font-light leading-relaxed mb-6">
            Clavix Technologies is a privately held healthcare technology company headquartered in Delhi, India. We design, build, and operate technology products that address the most persistent inefficiencies in India's healthcare system.
          </p>
          <p className="text-base text-zinc-400 font-light leading-relaxed mb-6">
            Our model is that of a focused operating company — not a passive holding group. Every venture we launch is built and run by our founding team, with shared infrastructure, a common technology core, and an unrelenting commitment to quality.
          </p>
          <p className="text-base text-zinc-400 font-light leading-relaxed mb-12">
            We do not chase scale for its own sake. We pursue durable relevance in the hands of doctors who trust our software with critical decisions.
          </p>
          <div className="flex flex-col gap-2 text-sm text-zinc-500 font-medium">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-white/25" />
              Founded in Delhi · 2026
            </div>
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-white/25" />
              Incorporated in India
            </div>
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-white/25" />
              Focus: Medical Technology
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="hidden lg:block w-px bg-white/6 self-stretch mx-4" />

        {/* Right: values + numbers */}
        <motion.div {...fade(0.15)} className="lg:pl-16 space-y-14">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-zinc-600 mb-8">Operating Principles</p>
            <div className="space-y-8">
              {[
                {
                  title: "Precision over velocity",
                  body: "We move thoughtfully. Medical software that fails a doctor fails their patient. We verify carefully before we ship.",
                },
                {
                  title: "India-native, globally competitive",
                  body: "Every product is designed for Indian healthcare realities: regulatory context, language, workflows, and economics.",
                },
                {
                  title: "Ownership across the full stack",
                  body: "We own the product, the engineering, the clinical content, and the distribution. No dependencies, no excuses.",
                },
              ].map(({ title, body }) => (
                <div key={title} className="flex gap-5">
                  <div className="w-px bg-white/8 shrink-0 mt-1" />
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-2">{title}</h4>
                    <p className="text-sm text-zinc-500 font-light leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-white/8">
            {[
              { label: "Ventures Built", value: "3", sub: "2 live · 1 in development" },
              { label: "Market Focus", value: "India-first", sub: "Primary market" },
              { label: "Revenue Model", value: "Dual-stream", sub: "Marketplace + SaaS" },
              { label: "Team Model", value: "Lean", sub: "Founding team-led" },
            ].map(({ label, value, sub }) => (
              <div key={label} className="flex items-baseline justify-between py-4 border-b border-white/6">
                <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-zinc-600">{label}</p>
                <div className="text-right">
                  <p className="text-sm font-semibold text-white">{value}</p>
                  <p className="text-[10px] text-zinc-600 font-light mt-0.5">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  </section>
);

// ─── Investors ────────────────────────────────────────────────────────────────
const Investors = () => (
  <section id="investors" className="py-28 md:py-40 bg-[#09090b] border-t border-white/5">
    <div className="max-w-7xl mx-auto px-6 md:px-14">
      <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-start">

        <motion.div {...fade()}>
          <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-zinc-600 mb-4">Investor Relations</p>
          <h2 className="text-3xl md:text-4xl font-black text-white leading-tight tracking-[-0.025em] mb-8">
            Partnering with<br />the right capital.
          </h2>
          <p className="text-base text-zinc-400 font-light leading-relaxed mb-5">
            We are raising a Seed round to accelerate product development, expand our clinical team, and grow distribution across India's medical community.
          </p>
          <p className="text-base text-zinc-400 font-light leading-relaxed mb-10">
            We are seeking investors who understand long-horizon category creation in regulated markets, and who are aligned with building durable companies rather than optimising for near-term exit metrics.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="mailto:investor@clavix.in?subject=Requesting Investor Deck — Clavix Technologies"
              className="inline-flex items-center justify-center gap-2 h-10 px-6 rounded-sm bg-white text-[#09090b] text-[12px] font-semibold tracking-[0.06em] uppercase hover:bg-zinc-100 transition-colors"
            >
              Request Investor Deck <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="mailto:investor@clavix.in"
              className="inline-flex items-center justify-center gap-2 h-10 px-6 rounded-sm border border-white/12 text-zinc-300 text-[12px] font-semibold tracking-[0.06em] uppercase hover:border-white/22 hover:text-white transition-all"
            >
              Schedule a Call
            </a>
          </div>
        </motion.div>

        <motion.div {...fade(0.15)} className="space-y-5">
          {[
            { label: "Round", value: "Seed", note: "Currently open" },
            { label: "Raise Target", value: "₹2 Cr", note: "INR" },
            { label: "Pre-Money Valuation", value: "₹20 Cr", note: "INR" },
            { label: "Market Opportunity", value: "1.2M+", note: "Target doctors in India" },
          ].map(({ label, value, note }, i) => (
            <div
              key={label}
              className="flex items-center justify-between py-5 border-b border-white/5"
            >
              <div>
                <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-zinc-600 mb-1">{label}</p>
                <p className="text-sm text-zinc-500 font-light">{note}</p>
              </div>
              <p className="text-2xl md:text-3xl font-serif font-semibold text-white">{value}</p>
            </div>
          ))}

          <div className="mt-8 pt-6 border-t border-white/6">
            <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-zinc-600 mb-3">Revenue Architecture</p>
            <p className="text-sm text-zinc-500 font-light leading-relaxed">
              Dual-stream model: marketplace GMV commissions from AETHEX (B2C + B2B), and high-margin recurring SaaS subscriptions from CADUS AI — creating defensible, compounding revenue at scale.
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  </section>
);

// ─── Careers ──────────────────────────────────────────────────────────────────
const CareersSection = () => {
  const [, navigate] = useLocation();

  const roles = [
    { id: "full-stack-developer", title: "Full Stack Developer", dept: "Engineering", type: "Remote" },
    { id: "ai-ml-engineer", title: "AI / ML Engineer", dept: "Engineering", type: "Remote" },
    { id: "medical-content-writer", title: "Medical Content Writer", dept: "Clinical", type: "Remote" },
    { id: "product-manager", title: "Product Manager", dept: "Product", type: "Remote" },
    { id: "devops-engineer", title: "DevOps / Infrastructure Engineer", dept: "Engineering", type: "Remote" },
    { id: "ui-ux-designer", title: "UI / UX Designer", dept: "Design", type: "Remote" },
    { id: "data-engineer", title: "Data Engineer", dept: "Engineering", type: "Remote" },
    { id: "clinical-advisor", title: "Clinical Advisor (MBBS)", dept: "Clinical", type: "Remote" },
    { id: "business-development-manager", title: "Business Development Manager", dept: "Business", type: "Remote" },
    { id: "customer-success-executive", title: "Customer Success Executive", dept: "Operations", type: "Remote" },
    { id: "pharmacist", title: "Pharmacist / Drug Database Specialist", dept: "Clinical", type: "Remote" },
    { id: "qa-engineer", title: "QA / Automation Engineer", dept: "Engineering", type: "Remote" },
    { id: "growth-marketing-manager", title: "Growth & Marketing Manager", dept: "Marketing", type: "Remote" },
  ];

  return (
    <section id="careers" className="py-28 md:py-40 bg-zinc-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-14">
        <motion.div {...fade()} className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-zinc-600 mb-4">Careers</p>
            <h2 className="text-3xl md:text-4xl font-black text-white leading-tight tracking-[-0.025em]">
              Open positions
            </h2>
          </div>
          <Link href="/careers">
            <button className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors group">
              View all open roles
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </motion.div>

        <div className="border-t border-white/8">
          {roles.map((r, i) => (
            <motion.div key={r.id} {...fade(i * 0.05)}>
              <Link href={`/careers/apply/${r.id}`}>
                <div className="flex items-center justify-between py-5 border-b border-white/6 cursor-pointer group">
                  <div className="flex items-center gap-8">
                    <h3 className="text-sm font-medium text-white group-hover:text-zinc-300 transition-colors">{r.title}</h3>
                    <div className="hidden sm:flex items-center gap-4 text-[11px] text-zinc-600 font-medium tracking-[0.04em]">
                      <span>{r.dept}</span>
                      <span className="text-zinc-700">·</span>
                      <span>{r.type}</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-700 group-hover:text-zinc-400 transition-colors shrink-0" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div {...fade(0.3)} className="mt-8 p-7 border-t border-white/6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h4 className="text-sm font-semibold text-white mb-1">Don't see your role listed?</h4>
            <p className="text-sm text-zinc-500 font-light">
              If you are exceptional at your discipline and believe in what we are building, we want to hear from you.
            </p>
          </div>
          <a
            href="mailto:careers@clavix.in?subject=General Application — Clavix Technologies"
            className="shrink-0 inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.1em] uppercase text-zinc-400 border border-white/10 rounded-sm px-5 py-2 hover:border-white/20 hover:text-white transition-all"
          >
            General Application <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

// ─── Contact ──────────────────────────────────────────────────────────────────
const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const set = (f: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(p => ({ ...p, [f]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Enquiry from ${form.name}`);
    const body = encodeURIComponent(`From: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.open(`mailto:hello@clavix.in?subject=${subject}&body=${body}`, "_blank");
    setSent(true);
  };

  const inputCls = "w-full h-10 bg-transparent border-0 border-b border-white/12 text-white text-sm px-0 placeholder:text-zinc-700 focus:outline-none focus:border-white/30 transition-colors rounded-none";

  return (
    <section id="contact" className="py-28 md:py-40 bg-[#09090b] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-14">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-start">

          <motion.div {...fade()}>
            <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-zinc-600 mb-4">Get in Touch</p>
            <h2 className="text-3xl md:text-4xl font-black text-white leading-tight tracking-[-0.025em] mb-6">
              Contact
            </h2>
            <p className="text-base text-zinc-400 font-light leading-relaxed mb-12">
              Whether you're a prospective partner, an investor, a medical professional interested in our products, or simply curious about what we're building — we'd like to hear from you.
            </p>
            <div className="space-y-5">
              {[
                { label: "General Enquiries", value: "hello@clavix.in", href: "mailto:hello@clavix.in" },
                { label: "Investor Relations", value: "investor@clavix.in", href: "mailto:investor@clavix.in" },
                { label: "Careers", value: "careers@clavix.in", href: "mailto:careers@clavix.in" },
              ].map(({ label, value, href }) => (
                <div key={label} className="flex items-center justify-between py-4 border-b border-white/5">
                  <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-zinc-600">{label}</p>
                  <a href={href} className="text-sm text-white font-medium hover:text-blue-400 transition-colors flex items-center gap-1.5">
                    {value} <ArrowUpRight className="w-3 h-3 opacity-50" />
                  </a>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div {...fade(0.15)}>
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center gap-4 py-20">
                <div className="w-14 h-14 rounded-full border border-blue-500/30 bg-blue-500/8 flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-serif text-white">Email client opened</h3>
                <p className="text-sm text-zinc-500 font-light max-w-xs">
                  Your message has been pre-filled. Send it to complete your enquiry.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-4 text-xs font-medium text-zinc-600 hover:text-zinc-400 transition-colors underline underline-offset-2"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-semibold tracking-[0.18em] uppercase text-zinc-600 mb-1.5">Full Name</label>
                    <Input value={form.name} onChange={set("name")} required placeholder="Dr. Arjun Sharma" className={inputCls} />
                  </div>
                  <div>
                    <label className="block text-[10px] font-semibold tracking-[0.18em] uppercase text-zinc-600 mb-1.5">Email Address</label>
                    <Input type="email" value={form.email} onChange={set("email")} required placeholder="arjun@hospital.com" className={inputCls} />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-semibold tracking-[0.18em] uppercase text-zinc-600 mb-1.5">Message</label>
                  <Textarea
                    value={form.message}
                    onChange={set("message")}
                    required
                    rows={6}
                    placeholder="Tell us what you have in mind..."
                    className="w-full bg-transparent border-0 border-b border-white/12 text-white text-sm px-0 py-2 placeholder:text-zinc-700 focus:outline-none focus:border-white/30 resize-none transition-colors rounded-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full h-10 rounded-sm bg-white text-[#09090b] text-[12px] font-semibold tracking-[0.06em] uppercase hover:bg-zinc-100 transition-colors"
                >
                  Send Message
                </button>
                <p className="text-center text-xs text-zinc-700">
                  Your email client will open pre-filled. We respond within 2 business days.
                </p>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

// ─── Footer ───────────────────────────────────────────────────────────────────
const Footer = () => (
  <footer className="bg-zinc-950 border-t border-white/5">
    <div className="max-w-7xl mx-auto px-6 md:px-14">
      <div className="py-14 grid grid-cols-2 md:grid-cols-4 gap-10 border-b border-white/5">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <div className="text-lg font-serif font-bold tracking-[0.18em] text-white mb-4">CLAVIX</div>
          <p className="text-xs text-zinc-600 font-light leading-relaxed mb-6 max-w-[180px]">
            Healthcare Technology Group. Delhi, India. Est. 2026.
          </p>
          <div className="flex gap-4">
            {[
              { href: "#", Icon: Linkedin, label: "LinkedIn" },
              { href: "#", Icon: Twitter, label: "Twitter / X" },
              { href: "mailto:hello@clavix.in", Icon: Mail, label: "Email" },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-8 h-8 rounded-full border border-white/8 flex items-center justify-center text-zinc-600 hover:text-white hover:border-white/20 transition-all"
              >
                <Icon className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
        </div>

        {/* Company */}
        <div>
          <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-zinc-700 mb-5">Company</p>
          <div className="space-y-3">
            {[
              { label: "About", id: "about" },
              { label: "Ventures", id: "ventures" },
              { label: "Investors", id: "investors" },
              { label: "Careers", id: "careers" },
            ].map(({ label, id }) => (
              <button
                key={id}
                onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })}
                className="block text-xs text-zinc-600 hover:text-white transition-colors font-medium"
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Ventures */}
        <div>
          <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-zinc-700 mb-5">Ventures</p>
          <div className="space-y-3">
            {[
              { label: "AETHEX", href: "https://aethex.in" },
              { label: "CADUS AI", href: "https://aethex.in/ai-assistant" },
              { label: "AETHEX OS", href: "mailto:hello@clavix.in?subject=Aethex OS Early Access" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-zinc-600 hover:text-white transition-colors font-medium"
              >
                {label}
                {href.startsWith("http") && <ExternalLink className="w-2.5 h-2.5 opacity-50" />}
              </a>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-zinc-700 mb-5">Contact</p>
          <div className="space-y-3">
            {[
              { label: "General", href: "mailto:hello@clavix.in", value: "hello@clavix.in" },
              { label: "Investors", href: "mailto:investor@clavix.in", value: "investor@clavix.in" },
              { label: "Careers", href: "mailto:careers@clavix.in", value: "careers@clavix.in" },
            ].map(({ label, href, value }) => (
              <div key={label}>
                <p className="text-[9px] text-zinc-700 uppercase tracking-widest mb-0.5">{label}</p>
                <a href={href} className="text-xs text-zinc-600 hover:text-white transition-colors font-medium">{value}</a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-[11px] text-zinc-700 font-medium">
          © 2026 Clavix Technologies Pvt. Ltd. All rights reserved.
        </p>
        <p className="text-[11px] text-zinc-700">
          CIN · Pending · Delhi, India
        </p>
      </div>
    </div>
  </footer>
);

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="bg-[#09090b] text-white font-sans selection:bg-blue-500/25">
      <Navbar />
      <Hero />
      <Philosophy />
      <Ventures />
      <About />
      <Investors />
      <CareersSection />
      <Contact />
      <Footer />
    </div>
  );
}
