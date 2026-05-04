import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowLeft, ArrowRight, MapPin, Clock, Briefcase, ChevronDown, ChevronUp,
  CheckCircle2, ExternalLink, Upload, X, Send, Code2, BrainCircuit, FileText,
  Globe, Linkedin, Github
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const JOBS = [
  {
    id: "full-stack-developer",
    title: "Full Stack Developer",
    dept: "Engineering",
    type: "Remote",
    location: "India (Remote)",
    experience: "1–3 years",
    icon: Code2,
    color: "blue",
    accent: "text-blue-400",
    border: "border-blue-500/30",
    glow: "bg-blue-500/5",
    badge: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    about: `We are looking for a sharp, product-minded Full Stack Developer to help build and scale our platforms — AETHEX (India's medical marketplace) and CADUS AI (clinical AI assistant). You'll work directly with the founding team on everything from backend APIs to polished frontends.`,
    responsibilities: [
      "Design and build scalable APIs and database schemas for AETHEX and CADUS AI",
      "Develop fast, accessible, responsive frontend interfaces in React + TypeScript",
      "Integrate third-party services (payment gateways, cloud storage, AI APIs)",
      "Own feature delivery end-to-end — from spec to deployment",
      "Maintain code quality through reviews, testing, and documentation",
      "Collaborate with design and clinical teams on product decisions",
    ],
    requirements: [
      "1–3 years of hands-on full stack development experience",
      "Proficiency in React, TypeScript, Node.js / Express or equivalent",
      "Experience with relational databases (PostgreSQL preferred)",
      "Familiarity with REST APIs and basic DevOps (Docker, CI/CD)",
      "Strong understanding of web fundamentals: HTTP, auth, security",
      "Ability to work independently and move fast in a startup environment",
    ],
    nice: [
      "Experience with healthcare or regulated industry software",
      "Knowledge of AI/LLM API integration (OpenAI, Gemini, etc.)",
      "Contributions to open source projects",
    ],
    perks: ["Fully remote", "Competitive stipend + equity discussion", "Direct impact on product", "Fast-track growth"],
  },
  {
    id: "ai-ml-engineer",
    title: "AI/ML Engineer",
    dept: "Engineering",
    type: "Remote",
    location: "India (Remote)",
    experience: "1–4 years",
    icon: BrainCircuit,
    color: "violet",
    accent: "text-violet-400",
    border: "border-violet-500/30",
    glow: "bg-violet-500/5",
    badge: "bg-violet-500/10 text-violet-400 border-violet-500/20",
    about: `CADUS AI is our flagship clinical intelligence platform — it performs differential diagnosis, interprets labs, flags drug interactions, and analyzes medical images. We need a rigorous AI/ML engineer who can take this product from good to world-class. You'll work directly on the models, pipelines, and evaluation frameworks that doctors trust with their decisions.`,
    responsibilities: [
      "Design, fine-tune, and evaluate LLMs for clinical reasoning tasks",
      "Build RAG pipelines with medical knowledge bases (UpToDate, clinical guidelines)",
      "Develop evaluation frameworks to measure accuracy, safety, and hallucination rates",
      "Build multi-modal inference pipelines (text + medical imaging)",
      "Optimize model performance for latency and cost in production",
      "Research and benchmark state-of-the-art approaches in medical AI",
    ],
    requirements: [
      "1–4 years of practical ML/AI engineering experience",
      "Strong Python skills; familiarity with PyTorch or JAX",
      "Experience with LLM APIs (OpenAI, Anthropic, Gemini) and prompt engineering",
      "Understanding of RAG, vector databases, and embedding workflows",
      "Ability to evaluate model outputs critically and quantitatively",
      "Comfortable reading and implementing ideas from ML research papers",
    ],
    nice: [
      "Experience in medical AI, NLP for clinical notes, or ICD coding",
      "Familiarity with medical ontologies (SNOMED, ICD-10, RxNorm)",
      "Published research or Kaggle competition history",
    ],
    perks: ["Fully remote", "Competitive stipend + equity discussion", "Work on genuinely hard problems", "Publish research internally"],
  },
  {
    id: "medical-content-writer",
    title: "Medical Content Writer",
    dept: "Clinical",
    type: "Remote",
    location: "India (Remote)",
    experience: "Fresher / 1–2 years",
    icon: FileText,
    color: "cyan",
    accent: "text-cyan-400",
    border: "border-cyan-500/30",
    glow: "bg-cyan-500/5",
    badge: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    about: `CADUS AI and AETHEX need medically accurate, clearly written content that doctors actually trust. You will create clinical summaries, product descriptions, onboarding guides, diagnostic case studies, and knowledge base articles. You are the bridge between rigorous medicine and accessible software.`,
    responsibilities: [
      "Write and review clinical content for CADUS AI's knowledge base and UI",
      "Create accurate, well-researched product descriptions for AETHEX medical listings",
      "Develop onboarding guides, help docs, and in-app microcopy",
      "Collaborate with the AI team to review and validate LLM outputs",
      "Research clinical guidelines and summarise them for non-specialist audiences",
      "Maintain a consistent, authoritative editorial voice across all platforms",
    ],
    requirements: [
      "MBBS, BDS, BPharm, B.Sc Nursing, or equivalent medical/health sciences background",
      "Ability to write clearly and precisely in English",
      "Genuine interest in healthcare technology and digital health",
      "Strong research skills — ability to verify clinical information from primary sources",
      "Comfortable working asynchronously with a remote team",
    ],
    nice: [
      "Prior experience writing for health-tech startups, journals, or CME platforms",
      "Familiarity with clinical guidelines bodies (ICMR, WHO, UpToDate)",
      "Interest in AI and understanding of how LLMs handle medical text",
    ],
    perks: ["Fully remote", "Flexible working hours", "Exposure to AI product development", "Healthcare + tech hybrid career path"],
  },
];

const colorMap: Record<string, { ring: string; dot: string }> = {
  blue: { ring: "ring-blue-500/40", dot: "bg-blue-400" },
  violet: { ring: "ring-violet-500/40", dot: "bg-violet-400" },
  cyan: { ring: "ring-cyan-500/40", dot: "bg-cyan-400" },
};

interface ApplicationFormProps {
  job: (typeof JOBS)[0];
  open: boolean;
  onClose: () => void;
}

const ApplicationForm = ({ job, open, onClose }: ApplicationFormProps) => {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", linkedin: "", portfolio: "",
    experience: "", notice: "", salary: "", cover: "", resumeLink: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(prev => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Application for ${job.title} — ${form.name}`);
    const body = encodeURIComponent(
      `ROLE: ${job.title}\n\n` +
      `NAME: ${form.name}\n` +
      `EMAIL: ${form.email}\n` +
      `PHONE: ${form.phone}\n` +
      `LINKEDIN: ${form.linkedin || "Not provided"}\n` +
      `PORTFOLIO / GITHUB: ${form.portfolio || "Not provided"}\n` +
      `EXPERIENCE: ${form.experience}\n` +
      `NOTICE PERIOD: ${form.notice}\n` +
      `EXPECTED SALARY: ${form.salary || "Open to discussion"}\n` +
      `RESUME LINK: ${form.resumeLink || "Not provided"}\n\n` +
      `COVER LETTER:\n${form.cover}`
    );
    window.open(`mailto:careers@clavix.in?subject=${subject}&body=${body}`, "_blank");
    setSubmitted(true);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => setSubmitted(false), 500);
  };

  const inputCls = "bg-[#0d0d10] border-white/10 text-white h-11 rounded-xl focus-visible:ring-1 focus-visible:ring-blue-500 focus-visible:border-blue-500/50 placeholder:text-zinc-600 text-sm";
  const labelCls = "block text-[10px] font-semibold text-zinc-500 uppercase tracking-[0.18em] mb-1.5";

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="bg-[#0d0d10] border border-white/8 max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl p-0 gap-0">
        <div className="sticky top-0 z-10 bg-[#0d0d10] border-b border-white/5 px-8 pt-8 pb-6">
          <DialogHeader>
            <div className="flex items-center gap-3 mb-1">
              <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.12em] border ${job.badge}`}>
                {job.dept}
              </span>
              <span className="text-zinc-500 text-xs">{job.location}</span>
            </div>
            <DialogTitle className="text-2xl font-serif text-white">
              Apply — {job.title}
            </DialogTitle>
          </DialogHeader>
        </div>

        <div className="px-8 py-6">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-16 text-center gap-5"
              >
                <div className="w-16 h-16 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-serif text-white mb-2">Application submitted!</h3>
                  <p className="text-zinc-400 text-sm max-w-sm">
                    Your email client has opened with your application pre-filled. We review every application and will get back to you within 5–7 business days.
                  </p>
                </div>
                <Button onClick={handleClose} variant="outline" className="rounded-full border-white/10 hover:bg-white/5 mt-2">
                  Close
                </Button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                {/* Personal Info */}
                <div>
                  <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-4 pb-2 border-b border-white/5">
                    Personal Information
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelCls}>Full Name *</label>
                      <Input value={form.name} onChange={set("name")} className={inputCls} placeholder="Dr. Arjun Sharma" required />
                    </div>
                    <div>
                      <label className={labelCls}>Email Address *</label>
                      <Input type="email" value={form.email} onChange={set("email")} className={inputCls} placeholder="arjun@hospital.com" required />
                    </div>
                    <div>
                      <label className={labelCls}>Phone Number *</label>
                      <Input type="tel" value={form.phone} onChange={set("phone")} className={inputCls} placeholder="+91 98765 43210" required />
                    </div>
                    <div>
                      <label className={labelCls}>LinkedIn Profile</label>
                      <Input value={form.linkedin} onChange={set("linkedin")} className={inputCls} placeholder="linkedin.com/in/yourname" />
                    </div>
                  </div>
                </div>

                {/* Links */}
                <div>
                  <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-4 pb-2 border-b border-white/5">
                    Portfolio & Resume
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelCls}>Portfolio / GitHub / Work Samples</label>
                      <Input value={form.portfolio} onChange={set("portfolio")} className={inputCls} placeholder="github.com/yourname" />
                    </div>
                    <div>
                      <label className={labelCls}>Resume Link (Google Drive / Notion)</label>
                      <Input value={form.resumeLink} onChange={set("resumeLink")} className={inputCls} placeholder="drive.google.com/..." />
                    </div>
                  </div>
                </div>

                {/* Experience */}
                <div>
                  <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-4 pb-2 border-b border-white/5">
                    Experience & Availability
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelCls}>Years of Relevant Experience *</label>
                      <select
                        value={form.experience}
                        onChange={set("experience")}
                        required
                        className="w-full bg-[#0d0d10] border border-white/10 text-white h-11 rounded-xl px-3 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500/50"
                      >
                        <option value="" disabled>Select range</option>
                        <option value="Fresher (0 years)">Fresher (0 years)</option>
                        <option value="Less than 1 year">Less than 1 year</option>
                        <option value="1–2 years">1–2 years</option>
                        <option value="2–4 years">2–4 years</option>
                        <option value="4–6 years">4–6 years</option>
                        <option value="6+ years">6+ years</option>
                      </select>
                    </div>
                    <div>
                      <label className={labelCls}>Notice Period</label>
                      <select
                        value={form.notice}
                        onChange={set("notice")}
                        className="w-full bg-[#0d0d10] border border-white/10 text-white h-11 rounded-xl px-3 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500/50"
                      >
                        <option value="">Select</option>
                        <option value="Immediately available">Immediately available</option>
                        <option value="2 weeks">2 weeks</option>
                        <option value="1 month">1 month</option>
                        <option value="2 months">2 months</option>
                        <option value="3 months">3 months</option>
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label className={labelCls}>Expected Monthly Compensation (₹)</label>
                      <Input value={form.salary} onChange={set("salary")} className={inputCls} placeholder="e.g. ₹40,000 / month — or leave blank if open" />
                    </div>
                  </div>
                </div>

                {/* Cover Letter */}
                <div>
                  <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-4 pb-2 border-b border-white/5">
                    Cover Letter *
                  </h4>
                  <label className={labelCls}>Tell us why you want to join Clavix and what you'd bring *</label>
                  <Textarea
                    value={form.cover}
                    onChange={set("cover")}
                    required
                    className="bg-[#0d0d10] border-white/10 text-white min-h-[140px] rounded-xl focus-visible:ring-1 focus-visible:ring-blue-500 resize-none placeholder:text-zinc-600 text-sm"
                    placeholder="Tell us about yourself, why you're excited about this role, and what specific experience makes you a strong fit. The more specific, the better."
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <Button
                    type="submit"
                    className="flex-1 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-all shadow-[0_0_20px_rgba(37,99,235,0.2)] hover:shadow-[0_0_30px_rgba(37,99,235,0.4)]"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Submit Application
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleClose}
                    className="h-12 px-6 border-white/10 hover:bg-white/5 rounded-xl text-zinc-400"
                  >
                    Cancel
                  </Button>
                </div>
                <p className="text-center text-[11px] text-zinc-600 pb-2">
                  Your email client will open pre-filled with your application. We read every submission.
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const JobCard = ({ job, defaultOpen = false }: { job: (typeof JOBS)[0]; defaultOpen?: boolean }) => {
  const [expanded, setExpanded] = useState(defaultOpen);
  const [applyOpen, setApplyOpen] = useState(false);
  const Icon = job.icon;
  const c = colorMap[job.color];

  return (
    <>
      <motion.div
        id={job.id}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className={`rounded-2xl border border-white/6 bg-[rgba(255,255,255,0.025)] overflow-hidden transition-all duration-300 ${expanded ? job.border : "hover:border-white/10"}`}
      >
        {/* Header row */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full text-left p-8 md:p-10 flex items-start md:items-center justify-between gap-6 group"
        >
          <div className="flex items-start md:items-center gap-5 flex-1 min-w-0">
            <div className={`w-12 h-12 rounded-xl ${job.glow} border border-white/8 flex items-center justify-center shrink-0`}>
              <Icon className={`w-5 h-5 ${job.accent}`} />
            </div>
            <div className="min-w-0">
              <h3 className="text-xl font-serif text-white mb-1.5">{job.title}</h3>
              <div className="flex flex-wrap items-center gap-3">
                <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.1em] border ${job.badge}`}>
                  {job.dept}
                </span>
                <div className="flex items-center gap-1.5 text-xs text-zinc-500">
                  <MapPin className="w-3 h-3" />
                  {job.location}
                </div>
                <div className="flex items-center gap-1.5 text-xs text-zinc-500">
                  <Clock className="w-3 h-3" />
                  {job.experience} exp.
                </div>
                <div className="flex items-center gap-1.5 text-xs text-zinc-500">
                  <Globe className="w-3 h-3" />
                  {job.type}
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <span className={`hidden md:flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium border transition-all ${
              expanded
                ? `${job.badge} ${job.border}`
                : "border-white/10 text-zinc-400 group-hover:border-white/20 group-hover:text-white"
            }`}>
              {expanded ? "Less" : "View Role"}
              {expanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
            </span>
          </div>
        </button>

        {/* Expanded content */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="px-8 md:px-10 pb-10 border-t border-white/5 pt-8">
                <div className="grid lg:grid-cols-[1fr_280px] gap-10">
                  <div className="space-y-8">
                    {/* About */}
                    <div>
                      <h4 className="text-xs font-semibold text-zinc-500 uppercase tracking-[0.2em] mb-3">About the Role</h4>
                      <p className="text-zinc-300 leading-relaxed text-[15px] font-light">{job.about}</p>
                    </div>

                    {/* Responsibilities */}
                    <div>
                      <h4 className="text-xs font-semibold text-zinc-500 uppercase tracking-[0.2em] mb-4">What You'll Do</h4>
                      <ul className="space-y-3">
                        {job.responsibilities.map((r, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-zinc-300 font-light leading-relaxed">
                            <span className={`w-1.5 h-1.5 rounded-full ${c.dot} shrink-0 mt-2`} />
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Requirements */}
                    <div>
                      <h4 className="text-xs font-semibold text-zinc-500 uppercase tracking-[0.2em] mb-4">What We're Looking For</h4>
                      <ul className="space-y-3">
                        {job.requirements.map((r, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-zinc-300 font-light leading-relaxed">
                            <CheckCircle2 className={`w-4 h-4 ${job.accent} shrink-0 mt-0.5`} />
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Nice to have */}
                    <div>
                      <h4 className="text-xs font-semibold text-zinc-500 uppercase tracking-[0.2em] mb-4">Nice to Have</h4>
                      <ul className="space-y-3">
                        {job.nice.map((r, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-zinc-400 font-light leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 shrink-0 mt-2" />
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Side panel */}
                  <div className="space-y-4">
                    <div className={`p-6 rounded-xl ${job.glow} border ${job.border} space-y-5`}>
                      <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-widest">What You Get</h4>
                      {job.perks.map((p, i) => (
                        <div key={i} className="flex items-center gap-3 text-sm text-zinc-300">
                          <span className={`w-1.5 h-1.5 rounded-full ${c.dot} shrink-0`} />
                          {p}
                        </div>
                      ))}
                    </div>

                    <div className="p-6 rounded-xl bg-white/[0.02] border border-white/5 space-y-3">
                      <h4 className="text-xs font-semibold text-zinc-500 uppercase tracking-widest">Role Details</h4>
                      <div className="text-sm space-y-2">
                        <div className="flex justify-between">
                          <span className="text-zinc-500">Type</span>
                          <span className="text-zinc-300">{job.type}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-zinc-500">Dept</span>
                          <span className="text-zinc-300">{job.dept}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-zinc-500">Experience</span>
                          <span className="text-zinc-300">{job.experience}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-zinc-500">Location</span>
                          <span className="text-zinc-300">{job.location}</span>
                        </div>
                      </div>
                    </div>

                    <Button
                      onClick={() => setApplyOpen(true)}
                      className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium shadow-[0_0_20px_rgba(37,99,235,0.2)] hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-all"
                    >
                      Apply Now <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                    <p className="text-[11px] text-zinc-600 text-center">We respond within 5–7 business days</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <ApplicationForm job={job} open={applyOpen} onClose={() => setApplyOpen(false)} />
    </>
  );
};

export default function Careers() {
  const [applyOpen, setApplyOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(JOBS[0]);

  return (
    <main className="bg-[#09090b] min-h-screen text-white font-sans selection:bg-blue-500/30">
      {/* Navbar */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-[#09090b]/90 backdrop-blur-xl border-b border-white/5 py-4">
        <div className="max-w-7xl mx-auto px-6 md:px-16 flex items-center justify-between">
          <Link href="/">
            <span className="text-xl font-bold tracking-[0.15em] text-white font-serif cursor-pointer hover:opacity-80 transition-opacity">
              CLAVIX
            </span>
          </Link>
          <Link href="/">
            <Button variant="ghost" className="text-zinc-400 hover:text-white text-sm gap-2 rounded-full px-4">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 md:px-16 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-xs font-medium tracking-[0.2em] uppercase text-zinc-500 mb-6">Careers at Clavix</div>
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-8 leading-[1.05]">
            Build the future of<br />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Indian healthcare.</span>
          </h1>
          <p className="text-lg text-zinc-400 font-light max-w-2xl leading-relaxed mb-12">
            We are a small, elite team moving fast. Every person on our team has meaningful ownership, direct impact, and the chance to work on problems that matter to 1.2 million doctors across India.
          </p>

          <div className="flex flex-wrap gap-8">
            {[
              { label: "Open Roles", value: "3" },
              { label: "Team Size", value: "Small & Elite" },
              { label: "Work Style", value: "Fully Remote" },
              { label: "Stage", value: "Seed / Early" },
            ].map(({ label, value }) => (
              <div key={label}>
                <div className="text-xs font-medium text-zinc-500 uppercase tracking-[0.2em] mb-1">{label}</div>
                <div className="text-white font-medium">{value}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Culture band */}
      <section className="border-y border-white/5 bg-white/[0.015] py-14 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Move fast, stay precise.",
                desc: "We're building healthcare software. Speed matters — but so does accuracy. We write clean code, validate carefully, and ship confidently.",
              },
              {
                title: "Own your work.",
                desc: "You'll own features end-to-end. No committees, no hand-offs. You design it, build it, ship it, and learn from it.",
              },
              {
                title: "Impact from day one.",
                desc: "Our products are live and used by real doctors today. Your work goes into production immediately, not into a staging environment indefinitely.",
              },
            ].map(({ title, desc }) => (
              <div key={title}>
                <h3 className="text-white font-serif text-lg mb-3">{title}</h3>
                <p className="text-zinc-400 text-sm font-light leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job listings */}
      <section className="py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-xs font-medium tracking-[0.2em] uppercase text-zinc-500 mb-4">Open Positions</h2>
            <h3 className="text-3xl md:text-4xl font-serif text-white">3 roles · All remote</h3>
          </motion.div>

          <div className="space-y-4">
            {JOBS.map((job, i) => (
              <JobCard key={job.id} job={job} defaultOpen={i === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA / General enquiry */}
      <section className="border-t border-white/5 bg-zinc-950 py-24 px-6 md:px-16">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">Don't see your role?</h2>
            <p className="text-zinc-400 font-light leading-relaxed mb-10">
              If you're exceptional at what you do and believe in what we're building, reach out anyway. We're always open to talking to the right people.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="h-12 px-8 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-[0_0_20px_rgba(37,99,235,0.25)]"
              >
                <a href="mailto:careers@clavix.in?subject=General Application — Clavix Technologies">
                  Send a General Application
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-12 px-8 rounded-full border-white/10 hover:bg-white/5 text-zinc-300"
              >
                <a href="mailto:hello@clavix.in">
                  Ask a Question
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#09090b] border-t border-white/5 py-8 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xl font-serif font-bold tracking-[0.15em] text-white">CLAVIX</div>
          <div className="text-xs text-zinc-600">© 2026 Clavix Technologies Pvt. Ltd.</div>
        </div>
      </footer>
    </main>
  );
}
