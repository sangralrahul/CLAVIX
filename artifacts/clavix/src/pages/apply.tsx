import React, { useState, useRef } from "react";
import { Link, useParams } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft, Upload, X, Paperclip, CheckCircle2, Send,
  MapPin, Clock, Globe, ChevronDown, Code2, BrainCircuit, FileText,
  Layers, Server, Palette, Database, Stethoscope, TrendingUp,
  UserCheck, FlaskConical, ShieldCheck, Megaphone
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// ─── Country codes + flags ─────────────────────────────────────────────────
const COUNTRIES = [
  { code: "IN", name: "India", dial: "+91", flag: "🇮🇳" },
  { code: "US", name: "United States", dial: "+1", flag: "🇺🇸" },
  { code: "GB", name: "United Kingdom", dial: "+44", flag: "🇬🇧" },
  { code: "AE", name: "United Arab Emirates", dial: "+971", flag: "🇦🇪" },
  { code: "CA", name: "Canada", dial: "+1", flag: "🇨🇦" },
  { code: "AU", name: "Australia", dial: "+61", flag: "🇦🇺" },
  { code: "SG", name: "Singapore", dial: "+65", flag: "🇸🇬" },
  { code: "DE", name: "Germany", dial: "+49", flag: "🇩🇪" },
  { code: "FR", name: "France", dial: "+33", flag: "🇫🇷" },
  { code: "NL", name: "Netherlands", dial: "+31", flag: "🇳🇱" },
  { code: "SE", name: "Sweden", dial: "+46", flag: "🇸🇪" },
  { code: "CH", name: "Switzerland", dial: "+41", flag: "🇨🇭" },
  { code: "JP", name: "Japan", dial: "+81", flag: "🇯🇵" },
  { code: "KR", name: "South Korea", dial: "+82", flag: "🇰🇷" },
  { code: "NZ", name: "New Zealand", dial: "+64", flag: "🇳🇿" },
  { code: "ZA", name: "South Africa", dial: "+27", flag: "🇿🇦" },
  { code: "NG", name: "Nigeria", dial: "+234", flag: "🇳🇬" },
  { code: "BD", name: "Bangladesh", dial: "+880", flag: "🇧🇩" },
  { code: "PK", name: "Pakistan", dial: "+92", flag: "🇵🇰" },
  { code: "LK", name: "Sri Lanka", dial: "+94", flag: "🇱🇰" },
  { code: "NP", name: "Nepal", dial: "+977", flag: "🇳🇵" },
  { code: "MY", name: "Malaysia", dial: "+60", flag: "🇲🇾" },
  { code: "QA", name: "Qatar", dial: "+974", flag: "🇶🇦" },
  { code: "SA", name: "Saudi Arabia", dial: "+966", flag: "🇸🇦" },
  { code: "BH", name: "Bahrain", dial: "+973", flag: "🇧🇭" },
  { code: "KW", name: "Kuwait", dial: "+965", flag: "🇰🇼" },
  { code: "OM", name: "Oman", dial: "+968", flag: "🇴🇲" },
];

// ─── Job data ───────────────────────────────────────────────────────────────
const JOBS: Record<string, Job> = {
  "full-stack-developer": {
    id: "full-stack-developer",
    title: "Full Stack Developer",
    dept: "Engineering",
    type: "Full-time",
    location: "India (Remote)",
    experience: "1–3 years",
    icon: Code2,
    color: "blue",
    accent: "text-blue-400",
    badge: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    about: "We are looking for a sharp, product-minded Full Stack Developer to help build and scale AETHEX and CADUS AI. You will work directly with the founding team on everything from backend APIs to polished frontends.",
    sections: [
      {
        title: "What You'll Do",
        items: [
          "Design and build scalable APIs and database schemas for AETHEX and CADUS AI",
          "Develop fast, accessible, responsive frontend interfaces in React + TypeScript",
          "Integrate third-party services (payment gateways, cloud storage, AI APIs)",
          "Own feature delivery end-to-end — from spec to deployment",
          "Maintain code quality through reviews, testing, and documentation",
          "Collaborate with design and clinical teams on product decisions",
        ],
      },
      {
        title: "What We're Looking For",
        items: [
          "1–3 years of hands-on full stack development experience",
          "Proficiency in React, TypeScript, Node.js / Express or equivalent",
          "Experience with relational databases (PostgreSQL preferred)",
          "Familiarity with REST APIs and basic DevOps (Docker, CI/CD)",
          "Strong understanding of web fundamentals: HTTP, auth, security",
          "Ability to work independently and move fast in a startup environment",
        ],
      },
      {
        title: "Nice to Have",
        items: [
          "Experience with healthcare or regulated industry software",
          "Knowledge of AI/LLM API integration (OpenAI, Gemini, etc.)",
          "Contributions to open source projects",
        ],
      },
    ],
  },
  "ai-ml-engineer": {
    id: "ai-ml-engineer",
    title: "AI/ML Engineer",
    dept: "Engineering",
    type: "Full-time",
    location: "India (Remote)",
    experience: "1–4 years",
    icon: BrainCircuit,
    color: "violet",
    accent: "text-violet-400",
    badge: "bg-violet-500/10 text-violet-400 border-violet-500/20",
    about: "CADUS AI is our flagship clinical intelligence platform. We need a rigorous AI/ML engineer who can take this product from good to world-class. You'll work directly on the models, pipelines, and evaluation frameworks that doctors trust with their decisions.",
    sections: [
      {
        title: "What You'll Do",
        items: [
          "Design, fine-tune, and evaluate LLMs for clinical reasoning tasks",
          "Build RAG pipelines with medical knowledge bases (UpToDate, clinical guidelines)",
          "Develop evaluation frameworks to measure accuracy, safety, and hallucination rates",
          "Build multi-modal inference pipelines (text + medical imaging)",
          "Optimize model performance for latency and cost in production",
          "Research and benchmark state-of-the-art approaches in medical AI",
        ],
      },
      {
        title: "What We're Looking For",
        items: [
          "1–4 years of practical ML/AI engineering experience",
          "Strong Python skills; familiarity with PyTorch or JAX",
          "Experience with LLM APIs (OpenAI, Anthropic, Gemini) and prompt engineering",
          "Understanding of RAG, vector databases, and embedding workflows",
          "Ability to evaluate model outputs critically and quantitatively",
          "Comfortable reading and implementing ideas from ML research papers",
        ],
      },
      {
        title: "Nice to Have",
        items: [
          "Experience in medical AI, NLP for clinical notes, or ICD coding",
          "Familiarity with medical ontologies (SNOMED, ICD-10, RxNorm)",
          "Published research or Kaggle competition history",
        ],
      },
    ],
  },
  "medical-content-writer": {
    id: "medical-content-writer",
    title: "Medical Content Writer",
    dept: "Clinical",
    type: "Full-time",
    location: "India (Remote)",
    experience: "Fresher / 1–2 years",
    icon: FileText,
    color: "cyan",
    accent: "text-cyan-400",
    badge: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    about: "CADUS AI and AETHEX need medically accurate, clearly written content that doctors actually trust. You will create clinical summaries, product descriptions, onboarding guides, and knowledge base articles — bridging rigorous medicine and accessible software.",
    sections: [
      {
        title: "What You'll Do",
        items: [
          "Write and review clinical content for CADUS AI's knowledge base and UI",
          "Create accurate product descriptions for AETHEX medical listings",
          "Develop onboarding guides, help docs, and in-app microcopy",
          "Collaborate with the AI team to review and validate LLM outputs",
          "Research clinical guidelines and summarise them for non-specialist audiences",
          "Maintain a consistent, authoritative editorial voice across all platforms",
        ],
      },
      {
        title: "What We're Looking For",
        items: [
          "MBBS, BDS, BPharm, B.Sc Nursing, or equivalent medical/health sciences background",
          "Ability to write clearly and precisely in English",
          "Genuine interest in healthcare technology and digital health",
          "Strong research skills — ability to verify clinical information from primary sources",
          "Comfortable working asynchronously with a remote team",
        ],
      },
      {
        title: "Nice to Have",
        items: [
          "Prior experience writing for health-tech startups, journals, or CME platforms",
          "Familiarity with clinical guidelines bodies (ICMR, WHO, UpToDate)",
          "Interest in AI and how LLMs handle medical text",
        ],
      },
    ],
  },
  "product-manager": {
    id: "product-manager",
    title: "Product Manager",
    dept: "Product",
    type: "Full-time",
    location: "India (Remote)",
    experience: "2–5 years",
    icon: Layers,
    color: "emerald",
    accent: "text-emerald-400",
    badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    about: "Building world-class medical products requires someone who can translate clinical insight into precise product decisions. As Product Manager, you will own the roadmap for CADUS AI and AETHEX, working at the intersection of medicine, engineering, and business.",
    sections: [
      {
        title: "What You'll Do",
        items: [
          "Define and own the product roadmap for CADUS AI and AETHEX",
          "Conduct user research with doctors, hospitals, and medical professionals",
          "Write precise product requirement documents and acceptance criteria",
          "Prioritize features rigorously based on impact, effort, and strategic fit",
          "Coordinate between engineering, clinical, and design teams",
          "Track key product metrics and drive data-informed decisions",
        ],
      },
      {
        title: "What We're Looking For",
        items: [
          "2–5 years of product management experience, ideally in B2B SaaS or healthtech",
          "Strong analytical thinking — ability to make decisions with incomplete information",
          "Excellent written and verbal communication in English",
          "Comfortable with ambiguity in an early-stage environment",
          "Experience conducting user interviews and synthesizing qualitative feedback",
        ],
      },
      {
        title: "Nice to Have",
        items: [
          "Medical or clinical background (MBBS, BPharm, or healthcare-adjacent degree)",
          "Experience with AI products or LLM-powered platforms",
          "Familiarity with Indian healthcare system workflows and stakeholders",
        ],
      },
    ],
  },
  "devops-engineer": {
    id: "devops-engineer",
    title: "DevOps / Infrastructure Engineer",
    dept: "Engineering",
    type: "Full-time",
    location: "India (Remote)",
    experience: "2–4 years",
    icon: Server,
    color: "amber",
    accent: "text-amber-400",
    badge: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    about: "As our infrastructure and DevOps engineer, you will own the reliability, scalability, and security of production systems across AETHEX and CADUS AI — systems that doctors rely on for time-sensitive clinical decisions.",
    sections: [
      {
        title: "What You'll Do",
        items: [
          "Design and maintain cloud infrastructure on AWS or GCP",
          "Build and manage CI/CD pipelines for all Clavix services",
          "Monitor system health, latency, and uptime with observability tooling",
          "Implement and enforce security best practices and SOC 2-readiness",
          "Manage containerisation and orchestration (Docker, Kubernetes)",
          "Cost-optimise cloud infrastructure as we scale",
        ],
      },
      {
        title: "What We're Looking For",
        items: [
          "2–4 years of DevOps or infrastructure engineering experience",
          "Proficiency with AWS or GCP cloud services",
          "Strong knowledge of Docker, Kubernetes, and Terraform or equivalent",
          "Experience building robust CI/CD pipelines (GitHub Actions preferred)",
          "Understanding of security fundamentals and networking",
        ],
      },
      {
        title: "Nice to Have",
        items: [
          "Experience in regulated or healthcare cloud environments",
          "Familiarity with HIPAA, ISO 27001, or health data security standards",
          "Knowledge of SRE practices, SLO and SLA management",
        ],
      },
    ],
  },
  "ui-ux-designer": {
    id: "ui-ux-designer",
    title: "UI / UX Designer",
    dept: "Design",
    type: "Full-time",
    location: "India (Remote)",
    experience: "2–4 years",
    icon: Palette,
    color: "rose",
    accent: "text-rose-400",
    badge: "bg-rose-500/10 text-rose-400 border-rose-500/20",
    about: "Clinical software has historically been hard to use. We are changing that. As our UI/UX Designer, you will shape how doctors interact with CADUS AI and how medical professionals shop on AETHEX — making complex information feel simple, trustworthy, and fast.",
    sections: [
      {
        title: "What You'll Do",
        items: [
          "Design end-to-end user experiences for CADUS AI and AETHEX",
          "Conduct user research and usability testing with medical professionals",
          "Build and maintain a comprehensive design system in Figma",
          "Collaborate closely with engineering to ensure high-fidelity implementation",
          "Create wireframes, prototypes, and final UI mockups",
          "Translate complex clinical workflows into intuitive interfaces",
        ],
      },
      {
        title: "What We're Looking For",
        items: [
          "2–4 years of product or UI/UX design experience",
          "Strong portfolio demonstrating interaction design and visual thinking",
          "Proficiency in Figma and familiarity with component-driven design systems",
          "Understanding of accessibility and responsive design principles",
          "Ability to give and receive direct, rigorous design feedback",
        ],
      },
      {
        title: "Nice to Have",
        items: [
          "Experience designing for healthcare, medtech, or data-heavy products",
          "Familiarity with design tokens and Framer Motion or equivalent",
          "Understanding of how medical professionals think, work, and navigate software",
        ],
      },
    ],
  },
  "data-engineer": {
    id: "data-engineer",
    title: "Data Engineer",
    dept: "Engineering",
    type: "Full-time",
    location: "India (Remote)",
    experience: "2–5 years",
    icon: Database,
    color: "blue",
    accent: "text-blue-400",
    badge: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    about: "Data is at the core of CADUS AI's intelligence and AETHEX's marketplace efficiency. As Data Engineer, you will build the pipelines, warehouses, and infrastructure that power our analytics, AI training, and business intelligence across all ventures.",
    sections: [
      {
        title: "What You'll Do",
        items: [
          "Build and maintain data pipelines for AETHEX and CADUS AI",
          "Design a scalable data warehouse architecture on cloud infrastructure",
          "Enable analytics and reporting for clinical and business metrics",
          "Curate and clean medical datasets for AI/ML model training",
          "Collaborate with ML engineers to deliver training-ready data",
          "Ensure data quality, consistency, and governance across all systems",
        ],
      },
      {
        title: "What We're Looking For",
        items: [
          "2–5 years of data engineering experience",
          "Proficiency with SQL and Python",
          "Experience with data pipeline tools (Airflow, dbt, or equivalent)",
          "Familiarity with cloud data warehouses (BigQuery, Redshift, or Snowflake)",
          "Strong understanding of data modelling and schema design",
        ],
      },
      {
        title: "Nice to Have",
        items: [
          "Experience with healthcare or clinical datasets (ICD codes, HL7, FHIR)",
          "Background in medical informatics or bioinformatics",
          "Familiarity with ML data pipelines, feature stores, and vector databases",
        ],
      },
    ],
  },
  "clinical-advisor": {
    id: "clinical-advisor",
    title: "Clinical Advisor (MBBS)",
    dept: "Clinical",
    type: "Full-time",
    location: "India (Remote)",
    experience: "MBBS + 1–3 years",
    icon: Stethoscope,
    color: "emerald",
    accent: "text-emerald-400",
    badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    about: "Our AI products make clinical recommendations alongside doctors. The Clinical Advisor is the medical conscience of our engineering team — reviewing AI outputs, flagging clinical risks, designing evaluation frameworks, and ensuring CADUS AI meets the standard Indian doctors deserve.",
    sections: [
      {
        title: "What You'll Do",
        items: [
          "Review and validate CADUS AI's diagnostic outputs against clinical standards",
          "Design clinical evaluation frameworks and case libraries for AI testing",
          "Collaborate with the AI team on prompt design, RAG quality, and hallucination mitigation",
          "Write and review clinical content across all Clavix products",
          "Represent the clinical perspective in product and engineering discussions",
          "Stay current with Indian clinical guidelines (NMC, ICMR) and international standards",
        ],
      },
      {
        title: "What We're Looking For",
        items: [
          "MBBS from a recognised Indian medical college (MD/MS preferred but not required)",
          "1–3 years of post-internship clinical experience",
          "Genuine interest in AI, digital health, and clinical decision support",
          "Strong analytical thinking and ability to critique complex clinical scenarios",
          "Comfortable working asynchronously in a remote, tech-first environment",
        ],
      },
      {
        title: "Nice to Have",
        items: [
          "Prior exposure to health-tech or medical AI products",
          "Familiarity with clinical decision support systems (UpToDate, Isabel DDx, etc.)",
          "Experience with medical informatics, clinical research, or evidence-based medicine",
        ],
      },
    ],
  },
  "business-development-manager": {
    id: "business-development-manager",
    title: "Business Development Manager",
    dept: "Business",
    type: "Full-time",
    location: "India (Remote)",
    experience: "2–5 years",
    icon: TrendingUp,
    color: "violet",
    accent: "text-violet-400",
    badge: "bg-violet-500/10 text-violet-400 border-violet-500/20",
    about: "Clavix products serve doctors, hospitals, medical colleges, and pharma distributors. As Business Development Manager, you will build the institutional relationships and partnerships that accelerate adoption of AETHEX and CADUS AI across India's medical ecosystem.",
    sections: [
      {
        title: "What You'll Do",
        items: [
          "Identify and develop relationships with hospitals, medical colleges, and pharma distributors",
          "Drive B2B sales for CADUS AI subscriptions and AETHEX institutional accounts",
          "Represent Clavix at medical conferences, CME events, and doctor forums",
          "Design and execute partnership agreements with healthcare institutions",
          "Build and manage a structured sales pipeline with clear reporting",
          "Relay market feedback to shape product and pricing decisions",
        ],
      },
      {
        title: "What We're Looking For",
        items: [
          "2–5 years in B2B sales, business development, or partnerships — ideally in healthcare",
          "Existing relationships within the Indian medical community",
          "Strong communication and negotiation skills",
          "Comfort with ambiguity and willingness to build processes from scratch",
          "Self-driven with a high degree of personal accountability",
        ],
      },
      {
        title: "Nice to Have",
        items: [
          "Background in pharma sales, medical devices, or health-tech",
          "Clinical or life sciences academic background (MBBS, BPharm, MPharm)",
          "Experience with CRM tools (HubSpot, Salesforce, or equivalent)",
        ],
      },
    ],
  },
  "customer-success-executive": {
    id: "customer-success-executive",
    title: "Customer Success Executive",
    dept: "Operations",
    type: "Full-time",
    location: "India (Remote)",
    experience: "1–3 years",
    icon: UserCheck,
    color: "cyan",
    accent: "text-cyan-400",
    badge: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    about: "Our B2B clients — hospitals, clinics, and medical institutions — need a trusted point of contact who understands both their clinical context and our technology. You will own onboarding, drive product adoption, resolve issues swiftly, and ensure clients see measurable value.",
    sections: [
      {
        title: "What You'll Do",
        items: [
          "Own end-to-end onboarding for institutional CADUS AI and AETHEX clients",
          "Conduct training sessions and product walkthroughs for doctors and admin staff",
          "Monitor client health metrics and proactively address churn signals",
          "Collect structured product feedback and relay it to the engineering team",
          "Handle support escalations with speed and empathy",
          "Identify expansion opportunities within existing accounts",
        ],
      },
      {
        title: "What We're Looking For",
        items: [
          "1–3 years of customer success, account management, or clinical support experience",
          "Excellent communication skills — written and spoken English",
          "Empathetic, patient, and methodical when handling client concerns",
          "Comfortable with SaaS tools and basic technical troubleshooting",
          "Self-organised and highly detail-oriented",
        ],
      },
      {
        title: "Nice to Have",
        items: [
          "Medical or health sciences background (Nursing, BPharm, BPT, or MBBS)",
          "Prior experience at a SaaS or health-tech startup",
          "Familiarity with helpdesk tools (Intercom, Freshdesk, or Zendesk)",
        ],
      },
    ],
  },
  "pharmacist": {
    id: "pharmacist",
    title: "Pharmacist / Drug Database Specialist",
    dept: "Clinical",
    type: "Full-time",
    location: "India (Remote)",
    experience: "B.Pharm / M.Pharm + 0–3 years",
    icon: FlaskConical,
    color: "amber",
    accent: "text-amber-400",
    badge: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    about: "CADUS AI's drug interaction engine and AETHEX's pharmacy catalogue require rigorous, clinically validated drug data. You will own the pharmacology layer of our products — ensuring our AI gives doctors the accurate, safe drug information they need.",
    sections: [
      {
        title: "What You'll Do",
        items: [
          "Build, curate, and maintain CADUS AI's drug interaction and contraindication database",
          "Validate AI-generated drug information against authoritative pharmacological references",
          "Review AETHEX pharmacy catalogue listings for accuracy and completeness",
          "Develop structured drug monographs for the CADUS AI knowledge base",
          "Flag and escalate pharmacovigilance issues in AI outputs",
          "Stay current with CDSCO guidelines, new drug approvals, and generic availability in India",
        ],
      },
      {
        title: "What We're Looking For",
        items: [
          "B.Pharm or M.Pharm from a recognised institution",
          "Strong pharmacology foundation and comprehensive drug knowledge",
          "Meticulous attention to detail and comfort working with structured data",
          "Ability to validate AI outputs against primary references (BNF, CIMS India, MIMS)",
          "Genuine interest in healthcare technology and AI applications in pharmacy",
        ],
      },
      {
        title: "Nice to Have",
        items: [
          "Experience in clinical pharmacy, medical writing, or drug information services",
          "Familiarity with international drug databases (DrugBank, RxNorm, WHO Essential Medicines)",
          "Coding or scripting interest — even basic SQL or Python is a plus",
        ],
      },
    ],
  },
  "qa-engineer": {
    id: "qa-engineer",
    title: "QA / Automation Engineer",
    dept: "Engineering",
    type: "Full-time",
    location: "India (Remote)",
    experience: "1–4 years",
    icon: ShieldCheck,
    color: "rose",
    accent: "text-rose-400",
    badge: "bg-rose-500/10 text-rose-400 border-rose-500/20",
    about: "Medical software cannot fail silently. As our QA and Automation Engineer, you will build the test infrastructure that ensures CADUS AI and AETHEX behave correctly, safely, and reliably — every time, for every doctor who depends on them.",
    sections: [
      {
        title: "What You'll Do",
        items: [
          "Design, write, and maintain automated test suites (unit, integration, E2E) across all products",
          "Build and own the QA process: test plans, bug tracking, and regression cycles",
          "Perform manual exploratory testing of clinical workflows and edge cases",
          "Collaborate with engineering to embed testing into CI/CD pipelines",
          "Define and enforce quality benchmarks for AI-generated outputs",
          "Create structured bug reports with reproducible steps and severity classification",
        ],
      },
      {
        title: "What We're Looking For",
        items: [
          "1–4 years of QA engineering experience",
          "Proficiency with test frameworks (Playwright, Cypress, Jest, or equivalent)",
          "Experience writing and maintaining automated test suites at scale",
          "Understanding of CI/CD integration for testing workflows",
          "Strong analytical mindset and relentless attention to detail",
        ],
      },
      {
        title: "Nice to Have",
        items: [
          "Experience testing AI or ML systems (prompt regression, output validation)",
          "Background in healthcare software or regulated system testing",
          "Knowledge of API testing tools (Postman, REST-assured, or equivalent)",
        ],
      },
    ],
  },
  "growth-marketing-manager": {
    id: "growth-marketing-manager",
    title: "Growth & Marketing Manager",
    dept: "Marketing",
    type: "Full-time",
    location: "India (Remote)",
    experience: "2–5 years",
    icon: Megaphone,
    color: "violet",
    accent: "text-violet-400",
    badge: "bg-violet-500/10 text-violet-400 border-violet-500/20",
    about: "Clavix is building category-defining products for Indian healthcare. As our Growth and Marketing Manager, you will design and execute the strategies that put CADUS AI and AETHEX in front of India's 1.2 million doctors — through digital, community, and professional channels.",
    sections: [
      {
        title: "What You'll Do",
        items: [
          "Own digital marketing for AETHEX and CADUS AI — SEO, performance, social, and email",
          "Build and manage communities of doctors and medical professionals around our products",
          "Create and execute a content strategy: blog, LinkedIn, YouTube, and clinical case studies",
          "Run experiments on acquisition, activation, and retention with rigorous tracking",
          "Track and report on CAC, LTV, and channel attribution with clarity",
          "Work with BDM on co-marketing initiatives with hospitals and medical institutions",
        ],
      },
      {
        title: "What We're Looking For",
        items: [
          "2–5 years of growth or digital marketing experience, ideally in SaaS or healthcare",
          "Demonstrated track record of growing a product audience from scratch",
          "Strong writing and content creation skills in English",
          "Data-driven decision-making with proficiency in analytics tools (GA4, Mixpanel, or equivalent)",
          "Comfort building new channels with limited budget and no existing playbook",
        ],
      },
      {
        title: "Nice to Have",
        items: [
          "Understanding of how Indian medical professionals discover and adopt new tools",
          "Background in healthcare, pharma, or med-tech marketing",
          "Experience with LinkedIn and WhatsApp-based professional community building",
        ],
      },
    ],
  },
};

interface Job {
  id: string;
  title: string;
  dept: string;
  type: string;
  location: string;
  experience: string;
  icon: React.ElementType;
  color: string;
  accent: string;
  badge: string;
  about: string;
  sections: { title: string; items: string[] }[];
}

// ─── Phone field with country selector ─────────────────────────────────────
const PhoneField = ({
  value,
  onChange,
  dialCode,
  onDialChange,
}: {
  value: string;
  onChange: (v: string) => void;
  dialCode: string;
  onDialChange: (c: (typeof COUNTRIES)[0]) => void;
}) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const selected = COUNTRIES.find(c => c.dial === dialCode) ?? COUNTRIES[0];
  const filtered = COUNTRIES.filter(
    c =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.dial.includes(search)
  );

  return (
    <div className="flex gap-0 relative">
      {/* Country trigger */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-3 h-11 bg-[#13131a] border border-white/10 border-r-0 rounded-l-xl text-sm hover:bg-white/5 transition-colors shrink-0 min-w-[90px]"
      >
        <span className="text-base leading-none">{selected.flag}</span>
        <span className="text-zinc-300 font-medium">{selected.dial}</span>
        <ChevronDown className="w-3 h-3 text-zinc-500 ml-auto" />
      </button>

      {/* Phone number input */}
      <input
        type="tel"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder="98765 43210"
        className="flex-1 h-11 bg-[#13131a] border border-white/10 rounded-r-xl px-3 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500/50"
        required
      />

      {/* Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 mt-1 w-72 bg-[#13131a] border border-white/10 rounded-xl shadow-2xl overflow-hidden z-50"
          >
            <div className="p-2 border-b border-white/5">
              <input
                autoFocus
                type="text"
                placeholder="Search country..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full bg-white/5 border border-white/8 rounded-lg px-3 py-2 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div className="max-h-52 overflow-y-auto">
              {filtered.map(c => (
                <button
                  key={c.code}
                  type="button"
                  onClick={() => { onDialChange(c); setOpen(false); setSearch(""); }}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-white/5 transition-colors text-left ${
                    c.code === selected.code ? "bg-blue-500/8 text-white" : "text-zinc-300"
                  }`}
                >
                  <span className="text-lg leading-none">{c.flag}</span>
                  <span className="flex-1 truncate">{c.name}</span>
                  <span className="text-zinc-500 text-xs font-medium">{c.dial}</span>
                </button>
              ))}
              {filtered.length === 0 && (
                <p className="text-center text-zinc-600 text-sm py-6">No country found</p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// ─── File upload zone ────────────────────────────────────────────────────────
const FileZone = ({
  label,
  hint,
  accept,
  file,
  onFile,
  onClear,
  optional = true,
}: {
  label: string;
  hint: string;
  accept: string;
  file: File | null;
  onFile: (f: File) => void;
  onClear: () => void;
  optional?: boolean;
}) => {
  const ref = useRef<HTMLInputElement>(null);
  const [dragging, setDragging] = useState(false);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    const f = e.dataTransfer.files[0];
    if (f) onFile(f);
  };

  const fmt = (b: number) =>
    b < 1048576 ? `${(b / 1024).toFixed(0)} KB` : `${(b / 1048576).toFixed(1)} MB`;

  return (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <label className="text-[11px] font-semibold text-zinc-400 uppercase tracking-[0.18em]">
          {label} {!optional && <span className="text-red-400 ml-0.5">*</span>}
        </label>
        {optional && <span className="text-[10px] text-zinc-600 italic">Optional</span>}
      </div>
      {file ? (
        <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-blue-500/8 border border-blue-500/25">
          <Paperclip className="w-4 h-4 text-blue-400 shrink-0" />
          <div className="flex-1 min-w-0">
            <p className="text-sm text-white truncate font-medium">{file.name}</p>
            <p className="text-[11px] text-zinc-500">{fmt(file.size)}</p>
          </div>
          <button
            type="button"
            onClick={onClear}
            className="w-7 h-7 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center shrink-0 transition-colors"
          >
            <X className="w-3.5 h-3.5 text-zinc-400" />
          </button>
        </div>
      ) : (
        <div
          onClick={() => ref.current?.click()}
          onDragOver={e => { e.preventDefault(); setDragging(true); }}
          onDragLeave={() => setDragging(false)}
          onDrop={handleDrop}
          className={`flex flex-col items-center justify-center gap-2 py-6 px-4 rounded-xl border-2 border-dashed cursor-pointer transition-all duration-200 ${
            dragging
              ? "border-blue-500/60 bg-blue-500/8"
              : "border-white/8 bg-white/[0.01] hover:border-white/16 hover:bg-white/[0.025]"
          }`}
        >
          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${dragging ? "bg-blue-500/15" : "bg-white/5"}`}>
            <Upload className={`w-4 h-4 ${dragging ? "text-blue-400" : "text-zinc-500"}`} />
          </div>
          <div className="text-center">
            <p className="text-sm text-zinc-300 font-medium">
              Drag & drop or{" "}
              <span className="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors">
                choose file
              </span>
            </p>
            <p className="text-xs text-zinc-600 mt-0.5">{hint}</p>
          </div>
          <input
            ref={ref}
            type="file"
            accept={accept}
            className="hidden"
            onChange={e => { const f = e.target.files?.[0]; if (f) onFile(f); }}
          />
        </div>
      )}
    </div>
  );
};

// ─── Main Page ───────────────────────────────────────────────────────────────
export default function Apply() {
  const params = useParams<{ jobId: string }>();
  const jobId = params.jobId ?? "";
  const job = JOBS[jobId];

  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "",
    phone: "", dialCode: "+91",
    address: "", city: "", state: "", country: "India", zip: "",
    linkedin: "", portfolio: "", resumeLink: "",
    experience: "", notice: "", salary: "",
    whyJoin: "", relevantExp: "",
  });
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [coverFile, setCoverFile] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const set = (field: string) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm(prev => ({ ...prev, [field]: e.target.value }));

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.firstName.trim()) e.firstName = "Required";
    if (!form.lastName.trim()) e.lastName = "Required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Valid email required";
    if (!form.phone.trim()) e.phone = "Required";
    if (!form.experience) e.experience = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const resumeLine = resumeFile
      ? `RESUME FILE: ${resumeFile.name} (${(resumeFile.size / 1024).toFixed(0)} KB) — please attach before sending`
      : `RESUME LINK: ${form.resumeLink || "Not provided"}`;
    const coverLine = coverFile
      ? `\nCOVER LETTER FILE: ${coverFile.name} — please attach before sending`
      : "";

    const subject = encodeURIComponent(`Application: ${job.title} — ${form.firstName} ${form.lastName}`);
    const body = encodeURIComponent(
      `ROLE: ${job.title} · ${job.dept}\n\n` +
      `── PERSONAL DETAILS ──────────────────\n` +
      `Full Name: ${form.firstName} ${form.lastName}\n` +
      `Email: ${form.email}\n` +
      `Phone: ${form.dialCode} ${form.phone}\n` +
      `Address: ${[form.address, form.city, form.state, form.zip, form.country].filter(Boolean).join(", ")}\n\n` +
      `── LINKS & DOCUMENTS ─────────────────\n` +
      `LinkedIn: ${form.linkedin || "Not provided"}\n` +
      `Portfolio / GitHub: ${form.portfolio || "Not provided"}\n` +
      `${resumeLine}${coverLine}\n\n` +
      `── AVAILABILITY ──────────────────────\n` +
      `Experience: ${form.experience}\n` +
      `Notice Period: ${form.notice || "Not specified"}\n` +
      `Expected Salary: ${form.salary || "Open to discussion"}\n\n` +
      `── QUESTIONS ─────────────────────────\n` +
      `Why Clavix?\n${form.whyJoin || "(not answered)"}\n\n` +
      `Relevant Experience:\n${form.relevantExp || "(not answered)"}`
    );
    window.open(`mailto:careers@clavix.in?subject=${subject}&body=${body}`, "_blank");
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!job) {
    return (
      <main className="bg-[#09090b] min-h-screen flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4 tracking-[-0.02em]">Role not found</h1>
          <Link href="/careers">
            <Button variant="outline" className="border-white/10 rounded-full">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Careers
            </Button>
          </Link>
        </div>
      </main>
    );
  }

  const Icon = job.icon;
  const inputCls = "h-11 bg-[#13131a] border-white/10 text-white rounded-xl focus-visible:ring-1 focus-visible:ring-blue-500 focus-visible:border-blue-500/50 placeholder:text-zinc-600 text-sm";
  const labelCls = "block text-[11px] font-semibold text-zinc-400 uppercase tracking-[0.18em] mb-1.5";
  const sectionHead = "text-xs font-semibold text-zinc-400 uppercase tracking-[0.2em] pt-2 pb-3 border-b border-white/5 mb-5";

  return (
    <main className="bg-[#09090b] min-h-screen text-white font-sans">
      {/* Navbar */}
      <nav className="sticky top-0 z-40 bg-[#09090b]/95 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
          <Link href="/">
            <span className="text-lg font-bold tracking-[0.15em] text-white font-serif cursor-pointer hover:opacity-80 transition-opacity">
              CLAVIX
            </span>
          </Link>
          <Link href="/careers">
            <Button variant="ghost" className="text-zinc-400 hover:text-white text-sm gap-2 rounded-full px-4 h-9">
              <ArrowLeft className="w-3.5 h-3.5" />
              All Jobs
            </Button>
          </Link>
        </div>
      </nav>

      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-xl mx-auto px-6 py-32 text-center"
          >
            <div className="w-20 h-20 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center mx-auto mb-8">
              <CheckCircle2 className="w-9 h-9 text-blue-400" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4 tracking-[-0.02em]">Application sent!</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              Your email client opened with your application pre-filled for <strong className="text-white">{job.title}</strong>. Send it to complete your application.
            </p>
            {(resumeFile || coverFile) && (
              <p className="text-amber-400/80 text-sm mb-8 p-4 rounded-xl bg-amber-500/6 border border-amber-500/20">
                Remember to attach{" "}
                {[resumeFile?.name, coverFile?.name].filter(Boolean).join(" and ")}{" "}
                before sending.
              </p>
            )}
            <div className="flex gap-3 justify-center">
              <Link href="/careers">
                <Button variant="outline" className="rounded-full border-white/10 hover:bg-white/5">
                  <ArrowLeft className="w-4 h-4 mr-2" /> All Jobs
                </Button>
              </Link>
              <Link href="/">
                <Button className="rounded-full bg-blue-600 hover:bg-blue-700">
                  Back to Home
                </Button>
              </Link>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-7xl mx-auto px-6 md:px-12 py-12"
          >
            <div className="grid lg:grid-cols-[400px_1fr] gap-12 xl:gap-20 items-start">

              {/* ── LEFT: Job info (sticky) ─────────────────────────────── */}
              <aside className="lg:sticky lg:top-20 space-y-6">
                {/* Job header */}
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-11 h-11 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center`}>
                      <Icon className={`w-5 h-5 ${job.accent}`} />
                    </div>
                    <div>
                      <p className="text-xs text-zinc-500 font-medium">Clavix Technologies</p>
                      <span className={`text-[10px] font-bold uppercase tracking-[0.12em] px-2 py-0.5 rounded-full border ${job.badge}`}>
                        {job.dept}
                      </span>
                    </div>
                  </div>
                  <h1 className="text-3xl font-black text-white leading-tight mb-4 tracking-[-0.025em]">{job.title}</h1>
                  <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-zinc-500">
                    <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" />{job.location}</span>
                    <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{job.experience} exp.</span>
                    <span className="flex items-center gap-1.5"><Globe className="w-3.5 h-3.5" />{job.type}</span>
                  </div>
                </div>

                <div className="h-px bg-white/5" />

                {/* About */}
                <div>
                  <h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-[0.2em] mb-3">About the Role</h3>
                  <p className="text-sm text-zinc-300 leading-relaxed font-light">{job.about}</p>
                </div>

                {/* Sections */}
                {job.sections.map(section => (
                  <div key={section.title}>
                    <h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-[0.2em] mb-3">{section.title}</h3>
                    <ul className="space-y-2.5">
                      {section.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-zinc-400 font-light leading-relaxed">
                          <span className={`w-1.5 h-1.5 rounded-full ${job.accent.replace("text-", "bg-")} shrink-0 mt-1.5`} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-zinc-500 space-y-1.5">
                  <p>📧 careers@clavix.in</p>
                  <p>🏢 Clavix Technologies Pvt. Ltd.</p>
                  <p>📍 Delhi, India</p>
                </div>
              </aside>

              {/* ── RIGHT: Application form ──────────────────────────────── */}
              <div className="bg-[#0d0d13] border border-white/6 rounded-2xl overflow-hidden">
                {/* Form header */}
                <div className="px-8 py-6 border-b border-white/5 bg-white/[0.01]">
                  <h2 className="text-xl font-bold text-white tracking-[-0.02em]">Submit Your Application</h2>
                  <p className="text-sm text-zinc-500 mt-1">Fields marked <span className="text-red-400">*</span> are required.</p>
                </div>

                <form onSubmit={handleSubmit} noValidate className="px-8 py-8 space-y-8">

                  {/* ── Section 1: Personal Info ──────────────── */}
                  <div>
                    <h3 className={sectionHead}>Personal Information</h3>
                    <div className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className={labelCls}>First Name <span className="text-red-400">*</span></label>
                          <Input value={form.firstName} onChange={set("firstName")} className={`${inputCls} ${errors.firstName ? "border-red-500/50" : ""}`} placeholder="Arjun" />
                          {errors.firstName && <p className="text-xs text-red-400 mt-1">{errors.firstName}</p>}
                        </div>
                        <div>
                          <label className={labelCls}>Last Name <span className="text-red-400">*</span></label>
                          <Input value={form.lastName} onChange={set("lastName")} className={`${inputCls} ${errors.lastName ? "border-red-500/50" : ""}`} placeholder="Sharma" />
                          {errors.lastName && <p className="text-xs text-red-400 mt-1">{errors.lastName}</p>}
                        </div>
                      </div>

                      <div>
                        <label className={labelCls}>Email Address <span className="text-red-400">*</span></label>
                        <Input type="email" value={form.email} onChange={set("email")} className={`${inputCls} ${errors.email ? "border-red-500/50" : ""}`} placeholder="arjun@hospital.com" />
                        {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
                      </div>

                      <div>
                        <label className={labelCls}>Phone Number <span className="text-red-400">*</span></label>
                        <PhoneField
                          value={form.phone}
                          onChange={v => setForm(p => ({ ...p, phone: v }))}
                          dialCode={form.dialCode}
                          onDialChange={c => setForm(p => ({ ...p, dialCode: c.dial }))}
                        />
                        {errors.phone && <p className="text-xs text-red-400 mt-1">{errors.phone}</p>}
                      </div>
                    </div>
                  </div>

                  {/* ── Section 2: Address ───────────────────── */}
                  <div>
                    <h3 className={sectionHead}>Address</h3>
                    <div className="space-y-4">
                      <div>
                        <label className={labelCls}>Street Address</label>
                        <Input value={form.address} onChange={set("address")} className={inputCls} placeholder="123, MG Road, Apartment 4B" />
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className={labelCls}>City</label>
                          <Input value={form.city} onChange={set("city")} className={inputCls} placeholder="Delhi" />
                        </div>
                        <div>
                          <label className={labelCls}>State / Province</label>
                          <Input value={form.state} onChange={set("state")} className={inputCls} placeholder="Delhi" />
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className={labelCls}>Country</label>
                          <select
                            value={form.country}
                            onChange={set("country")}
                            className="w-full h-11 bg-[#13131a] border border-white/10 text-white rounded-xl px-3 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                          >
                            {COUNTRIES.map(c => (
                              <option key={c.code} value={c.name}>{c.flag} {c.name}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className={labelCls}>Postal / ZIP Code</label>
                          <Input value={form.zip} onChange={set("zip")} className={inputCls} placeholder="110001" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ── Section 3: Links ─────────────────────── */}
                  <div>
                    <h3 className={sectionHead}>Links & Profiles</h3>
                    <div className="space-y-4">
                      <div>
                        <label className={labelCls}>LinkedIn Profile URL</label>
                        <Input value={form.linkedin} onChange={set("linkedin")} className={inputCls} placeholder="https://linkedin.com/in/yourname" />
                      </div>
                      <div>
                        <label className={labelCls}>Portfolio / GitHub / Personal Website</label>
                        <Input value={form.portfolio} onChange={set("portfolio")} className={inputCls} placeholder="https://github.com/yourname" />
                      </div>
                    </div>
                  </div>

                  {/* ── Section 4: Documents ─────────────────── */}
                  <div>
                    <h3 className={sectionHead}>Documents</h3>
                    <div className="space-y-4">
                      <FileZone
                        label="Resume / CV"
                        hint="PDF, DOC, DOCX · Max 5 MB"
                        accept=".pdf,.doc,.docx"
                        file={resumeFile}
                        onFile={setResumeFile}
                        onClear={() => setResumeFile(null)}
                        optional
                      />
                      {!resumeFile && (
                        <div>
                          <label className={labelCls}>Or paste a Resume / CV link</label>
                          <Input value={form.resumeLink} onChange={set("resumeLink")} className={inputCls} placeholder="https://drive.google.com/..." />
                        </div>
                      )}
                      <FileZone
                        label="Cover Letter"
                        hint="PDF, DOC, DOCX, TXT · Max 5 MB"
                        accept=".pdf,.doc,.docx,.txt"
                        file={coverFile}
                        onFile={setCoverFile}
                        onClear={() => setCoverFile(null)}
                        optional
                      />
                    </div>
                  </div>

                  {/* ── Section 5: Availability ──────────────── */}
                  <div>
                    <h3 className={sectionHead}>Availability</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className={labelCls}>Years of Experience <span className="text-red-400">*</span></label>
                        <select
                          value={form.experience}
                          onChange={set("experience")}
                          className={`w-full h-11 bg-[#13131a] border text-white rounded-xl px-3 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 ${errors.experience ? "border-red-500/50" : "border-white/10"}`}
                        >
                          <option value="" disabled>Select</option>
                          <option>Fresher (0 years)</option>
                          <option>Less than 1 year</option>
                          <option>1–2 years</option>
                          <option>2–4 years</option>
                          <option>4–6 years</option>
                          <option>6+ years</option>
                        </select>
                        {errors.experience && <p className="text-xs text-red-400 mt-1">{errors.experience}</p>}
                      </div>
                      <div>
                        <label className={labelCls}>Notice Period</label>
                        <select
                          value={form.notice}
                          onChange={set("notice")}
                          className="w-full h-11 bg-[#13131a] border border-white/10 text-white rounded-xl px-3 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                        >
                          <option value="">Select</option>
                          <option>Immediately available</option>
                          <option>2 weeks</option>
                          <option>1 month</option>
                          <option>2 months</option>
                          <option>3 months</option>
                        </select>
                      </div>
                      <div className="sm:col-span-2">
                        <label className={labelCls}>Expected Monthly Compensation (₹)</label>
                        <Input value={form.salary} onChange={set("salary")} className={inputCls} placeholder="e.g. ₹50,000 / month — leave blank if open" />
                      </div>
                    </div>
                  </div>

                  {/* ── Section 6: Questions ─────────────────── */}
                  <div>
                    <h3 className={sectionHead}>Application Questions</h3>
                    <div className="space-y-5">
                      <div>
                        <label className={labelCls}>
                          Why do you want to work at Clavix Technologies?
                        </label>
                        <Textarea
                          value={form.whyJoin}
                          onChange={set("whyJoin")}
                          className="bg-[#13131a] border-white/10 text-white min-h-[120px] rounded-xl focus-visible:ring-1 focus-visible:ring-blue-500 resize-none placeholder:text-zinc-600 text-sm"
                          placeholder="What excites you about our mission, and why now?"
                        />
                      </div>
                      <div>
                        <label className={labelCls}>
                          What relevant experience or work makes you a strong fit for this role?
                        </label>
                        <Textarea
                          value={form.relevantExp}
                          onChange={set("relevantExp")}
                          className="bg-[#13131a] border-white/10 text-white min-h-[120px] rounded-xl focus-visible:ring-1 focus-visible:ring-blue-500 resize-none placeholder:text-zinc-600 text-sm"
                          placeholder="Be specific — mention projects, tools, and outcomes."
                        />
                      </div>
                    </div>
                  </div>

                  {/* File attach reminder */}
                  {(resumeFile || coverFile) && (
                    <div className="flex items-start gap-3 px-4 py-3.5 rounded-xl bg-amber-500/6 border border-amber-500/20">
                      <Paperclip className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <p className="text-xs text-amber-300/80 leading-relaxed">
                        After your email client opens, manually attach{" "}
                        <strong>{[resumeFile?.name, coverFile?.name].filter(Boolean).join(" and ")}</strong>{" "}
                        before sending.
                      </p>
                    </div>
                  )}

                  {/* Submit */}
                  <div className="pt-2">
                    <Button
                      type="submit"
                      className="w-full h-13 py-3.5 text-base bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-all shadow-[0_0_30px_rgba(37,99,235,0.2)] hover:shadow-[0_0_40px_rgba(37,99,235,0.4)]"
                    >
                      <Send className="w-4 h-4 mr-2.5" />
                      Submit Application
                    </Button>
                    <p className="text-center text-xs text-zinc-600 mt-3">
                      Your email client will open pre-filled. We respond within 5–7 business days.
                    </p>
                  </div>
                </form>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
