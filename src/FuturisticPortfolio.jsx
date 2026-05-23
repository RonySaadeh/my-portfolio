"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, useInView, useSpring, useTransform, useScroll } from "framer-motion";
import {
  Linkedin,
  Mail,
  Download,
  Moon,
  Sun,
  ChevronDown,
  ArrowUpRight,
  Search,
  Sparkles,
  Cpu,
  Layout,
  ScrollText,
  Rocket,
  ExternalLink,
  MapPin,
  Cloud,
  Briefcase,
  Zap,
  Award,
  Code2,
  Globe2
} from "lucide-react";
// (can remove if unused elsewhere)
// import { image, title } from "framer-motion/client";

const RECEIVER_EMAIL = "rony.saade3@hotmail.com"; // <-- put your email here

const PROJECTS = [
  {
    id: "intels-sis",
    title: "INTELS SIS Service Information System",
    description:
      "Flutter desktop + Python/Flask. Industrial manuals, BOM, stock availability, Machine Parts Requests, Excel Request Generation and Automatic Emails.",
    tags: ["Flutter", "Python", "Excel", "PDF", "Desktop"],
    year: 2025,
    image: "https://th.bing.com/th/id/OIP.TDEmxKTk0SMWMDUB-3L-EgHaET?w=309&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    link: "#",
    images: [
      "https://github.com/RonySaadeh/Images-To-Link-Use/blob/main/Screenshot%202026-05-23%20140910.png?raw=true",
      "https://github.com/RonySaadeh/Images-To-Link-Use/blob/main/Screenshot%202026-05-23%20140923.png?raw=true",
      "https://github.com/RonySaadeh/Images-To-Link-Use/blob/main/Screenshot%202026-05-23%20140728.png?raw=true",
      "https://github.com/RonySaadeh/Images-To-Link-Use/blob/main/Screenshot%202026-05-23%20140754.png?raw=true",
      "https://github.com/RonySaadeh/Images-To-Link-Use/blob/main/Screenshot%202026-05-23%20140805.png?raw=true",
      "https://github.com/RonySaadeh/Images-To-Link-Use/blob/main/Screenshot%202026-05-23%20140841.png?raw=true",
      "https://github.com/RonySaadeh/Images-To-Link-Use/blob/main/Screenshot%202026-05-23%20140851.png?raw=true"
    ],
    caseStudy: {
      problem:
        "Technicians lacked a unified, searchable system for machine manuals, BOM, and stock availability, which led to delays and errors in parts requests.",
      solution: [
        "Built a Flutter/Python desktop suite with embedded PDF viewer, global search, and Excel/PDF automations.",
        "Integrated BOM & stock availability checks with filterable search and per-plant code routing.",
        "Automated Excel request generation and email dispatch to streamline approvals."
      ],
      architecture: [
        "Frontend: Flutter (desktop) with Syncfusion PDF viewer; clean architecture.",
        "Backend: Python/Flask REST endpoints; pandas/openpyxl for Excel ops.",
        "Data: Local folders for manuals; Excel sources for stock; optional mail relay."
      ],
      impact: [
        "Reduced manual look-ups and request turnaround by ~60%.",
        "Minimized order errors; improved traceability and adoption across sites."
      ],
      link: "#"
    }
  },
  {
    id: "private-management-tool",
    title: "Private Management Tool Parlays & Analytics",
    description:
      "Flutter Web + Firebase. Parlays builder, Firestore data, analytics dashboards, Excel exports, tracking automation.",
    tags: ["Flutter Web", "Firebase", "Analytics"],
    year: 2025,
    image: "https://th.bing.com/th/id/OIP.CEzvq7tUr2SVNfHvGnoW8gHaFj?w=234&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    link: "#",
    images: [
      "https://github.com/RonySaadeh/Images-To-Link-Use/blob/main/Screenshot%202025-08-30%20181202.png?raw=true",
      "https://github.com/RonySaadeh/Images-To-Link-Use/blob/main/Screenshot%202025-08-30%20180645.png?raw=true",
      "https://github.com/RonySaadeh/Images-To-Link-Use/blob/main/Screenshot%202025-08-30%20180654.png?raw=true",
      "https://github.com/RonySaadeh/Images-To-Link-Use/blob/main/Screenshot%202025-08-30%20180705.png?raw=true",
      "https://github.com/RonySaadeh/Images-To-Link-Use/blob/main/Screenshot%202025-08-30%20180717.png?raw=true",
      "https://github.com/RonySaadeh/Images-To-Link-Use/blob/main/Screenshot%202025-08-30%20180731.png?raw=true",
      "https://github.com/RonySaadeh/Images-To-Link-Use/blob/main/Screenshot%202025-08-30%20180741.png?raw=true"
    ],
    caseStudy: {
      problem:
        "Manual tracking of parlays, client performance, and P&L created duplication and slow reporting.",
      solution: [
        "Implemented Flutter Web front-end with Firestore data model for parlays, outcomes, and commissions.",
        "Built analytics dashboard (win/loss rate, best client, common markets/picks).",
        "Added one-click Excel export and automated tracking list updates."
      ],
      architecture: [
        "Flutter Web + Firebase (Auth, Firestore).",
        "Cloud Functions for scheduled summaries; client-side Excel export.",
        "Role-based views for admins vs. operators."
      ],
      impact: [
        "Eliminated spreadsheet fragmentation; centralized source of truth.",
        "Cut reporting time from hours to minutes; clearer profitability insights."
      ],
      link: "#"
    }
  },
  {
    id: "esab",
    title: "ESAB - Machine and Parts Configurator",
    description: "Python, Database Integration, Quotation Generation",
    tags: ["Python", "Excel", "PDF"],
    year: 2024,
    image: "https://th.bing.com/th/id/OIP.esDhE_tzBkGZ69jgXDLb_wHaFE?w=262&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    images: [
      "https://github.com/RonySaadeh/Images-To-Link-Use/blob/main/Screenshot%202025-08-30%20182103.png?raw=true"
    ],
    caseStudy: {
      problem:
        "Sales teams needed a faster way to configure machines, select compatible parts, and generate quotes.",
      solution: [
        "Built a Python-based configurator with rules for models, options, and compatible parts.",
        "Integrated Excel catalogs and generated professional PDF quotations."
      ],
      architecture: [
        "Python application with rules engine; pandas/openpyxl for catalogs.",
        "Report generation with PDF libraries; optional email integration."
      ],
      impact: [
        "Reduced quoting time from days to <1 hour.",
        "Improved accuracy of configurations and customer confidence."
      ]
    }
  },
  {
    id: "friendscrow",
    title: "FriendScrow AI Travel & Budgeting",
    description:
      "Flutter + Python ML. Group expense tracking, smart recommendations, logistic-regression feedback loops, Lebanon travel dataset.",
    tags: ["AI", "Flutter", "Python", "Travel"],
    year: 2024,
    image: "https://th.bing.com/th/id/OIP.KxbPH7cs1uDTGLDqqwrRZgHaF7?w=243&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    link: "#",
    images: [
      "https://github.com/RonySaadeh/Images-To-Link-Use/blob/main/Screenshot_1743959475.png?raw=true",
      "https://github.com/RonySaadeh/Images-To-Link-Use/blob/main/Screenshot_1743959490.png?raw=true",
      "https://github.com/RonySaadeh/Images-To-Link-Use/blob/main/Screenshot_1743959578.png?raw=true",
      "https://github.com/RonySaadeh/Images-To-Link-Use/blob/main/Screenshot_1743959588.png?raw=true",
      "https://github.com/RonySaadeh/Images-To-Link-Use/blob/main/Screenshot_1743959609.png?raw=true",
      "https://github.com/RonySaadeh/Images-To-Link-Use/blob/main/Screenshot_1743959621.png?raw=true",
      "https://github.com/RonySaadeh/Images-To-Link-Use/blob/main/Screenshot_1743959627.png?raw=true",
      "https://github.com/RonySaadeh/Images-To-Link-Use/blob/main/Screenshot_1743959629.png?raw=true",
      "https://github.com/RonySaadeh/Images-To-Link-Use/blob/main/Screenshot_1743959633.png?raw=true",
      "https://github.com/RonySaadeh/Images-To-Link-Use/blob/main/Screenshot_1743959724.png?raw=true",
      "https://github.com/RonySaadeh/Images-To-Link-Use/blob/main/Screenshot_1743959732.png?raw=true",
      "https://github.com/RonySaadeh/Images-To-Link-Use/blob/main/Screenshot_1743959743.png?raw=true",
      "https://github.com/RonySaadeh/Images-To-Link-Use/blob/main/Screenshot_1743959755.png?raw=true",
      "https://github.com/RonySaadeh/Images-To-Link-Use/blob/main/Screenshot_1743959761.png?raw=true",
      "https://github.com/RonySaadeh/Images-To-Link-Use/blob/main/Screenshot_1743959765.png?raw=true",
      "https://github.com/RonySaadeh/Images-To-Link-Use/blob/main/Screenshot_1743959768.png?raw=true",
      "https://github.com/RonySaadeh/Images-To-Link-Use/blob/main/Screenshot_1743959911.png?raw=true",
      "https://github.com/RonySaadeh/Images-To-Link-Use/blob/main/Screenshot_1743959918.png?raw=true"
    ],
    caseStudy: {
      problem:
        "Groups struggled to plan trips within budget and agree on activities suited to their tastes.",
      solution: [
        "Built a mobile app with shared expense tracking and AI recommendation engine.",
        "Added feedback loops (logistic regression) to learn user preferences over time."
      ],
      architecture: [
        "Flutter client; Python backend for ML; dataset for Lebanon travel.",
        "Recommendation pipeline + user feedback storage."
      ],
      impact: [
        "Higher satisfaction with suggested itineraries; clearer budget visibility.",
        "Reduced planning friction for groups."
      ],
      link: "#"
    }
  },
  {
    id: "btellaya-pos",
    title: "Btellaya 1850 POS & Restaurant Suite",
    description:
      "Windows Flutter app. Table orders, discounts/tips, Excel reports, receipt PDF, admin dashboard.",
    tags: ["Flutter", "POS", "Excel"],
    year: 2024,
    image: "https://picsum.photos/seed/pos/1200/800",
    link: "#",
    images: [
      "https://github.com/RonySaadeh/Images-To-Link-Use/blob/main/Screenshot%202026-05-23%20135156.png?raw=true",
      "https://github.com/RonySaadeh/Images-To-Link-Use/blob/main/Screenshot%202026-05-23%20135206.png?raw=true",
      "https://github.com/RonySaadeh/Images-To-Link-Use/blob/main/Screenshot%202026-05-23%20135218.png?raw=true",
      "https://github.com/RonySaadeh/Images-To-Link-Use/blob/main/Screenshot%202026-05-23%20135229.png?raw=true",
      "https://github.com/RonySaadeh/Images-To-Link-Use/blob/main/Screenshot%202026-05-23%20135250.png?raw=true"
    ],
    caseStudy: {
      problem:
        "Manual order taking and fragmented spreadsheets slowed service and created reporting gaps.",
      solution: [
        "Implemented table order flows with discounts/tips and daily Excel exports.",
        "Added printable PDF receipts and an admin dashboard for oversight."
      ],
      architecture: [
        "Flutter desktop; local persistence with Excel; PDF generation.",
        "Modular UI with modern, brand-aligned visuals."
      ],
      impact: [
        "Faster order turnaround, fewer errors, and cleaner end-of-day reporting.",
        "Managers gained visibility into sales and reservations."
      ],
      link: "#"
    }
  }
];

const EXPERIENCE = [
  {
    role: "Salesforce Consultant & Developer",
    org: "EI-Technologies MENA, United Arab Emirates",
    period: "2025 → Present",
    current: true,
    location: "UAE",
    bullets: [
      "Delivering end-to-end Salesforce implementations for enterprise clients across the MENA region, covering Sales Cloud, Service Cloud, and custom solutions.",
      "Designing and developing scalable Apex classes, Lightning Web Components (LWC), triggers, and Flows to automate complex business processes.",
      "Configuring Salesforce orgs: profiles, permission sets, validation rules, approval processes, and advanced security models tailored to client needs.",
      "Leading client discovery workshops, translating business requirements into technical architecture, and shipping clean, maintainable solutions on time."
    ]
  },
  {
    role: "Technical Consultant, Microsoft Dynamics 365 Business Central",
    org: "Exquitech, Lebanon",
    period: "2025",
    bullets: [
      "Implemented and customized Business Central modules to optimize financial, sales, and inventory workflows.",
      "Developed AL extensions and integrations with external systems, enhancing core Business Central functionality.",
      "Delivered training and support to end-users, ensuring smooth adoption and improved business efficiency."
    ]
  },
  {
    role: "Software Engineer & Full-Stack Builder",
    org: "INTELS Nigeria, ESAB United Arab Emirates",
    period: "2024 → 2025",
    bullets: [
      "Engineered industrial desktop solutions in Flutter & Python with advanced Excel/PDF automation for data and workflow management.",
      "Developed robust service information systems integrating machine manuals, stock availability, and spare-parts BOM tracking.",
      "Designed professional, performance-first UIs with embedded PDF viewers, search, and analytics to enhance usability in engineering operations."
    ]
  },
  {
    role: "Cross-Platform App Developer",
    org: "Mobile, Web & Desktop Applications",
    period: "2024 → 2025",
    bullets: [
      "Developed and deployed cross-platform mobile, web, and desktop applications using Flutter, Python, and REST APIs.",
      "Built automation pipelines for Excel/PDF data handling, streamlining reporting and operational workflows.",
      "Designed modern, performance-first UIs with authentication, analytics, and Firestore integration."
    ]
  },
  {
    role: "AI / ML Engineer",
    org: "Travel & Recommendation Systems",
    period: "2024 → 2025",
    bullets: [
      "Travel recommendation engine with logistic-regression feedback loops adapting to user preferences over time.",
      "Built data pipelines, experimentation notebooks, and model evaluation workflows."
    ]
  }
];

const SKILLS = [
  { name: "Salesforce (Sales/Service Cloud)", level: 88, group: "Salesforce" },
  { name: "Apex & Lightning Web Components", level: 85, group: "Salesforce" },
  { name: "Salesforce Flows & Automation", level: 90, group: "Salesforce" },
  { name: "Flutter / Dart", level: 92, group: "Frontend" },
  { name: "React / Next.js", level: 80, group: "Frontend" },
  { name: "Python / Flask", level: 84, group: "Backend" },
  { name: "Machine Learning", level: 82, group: "AI" },
  { name: "Firestore / Firebase", level: 85, group: "Backend" },
  { name: "Excel & PDF Automation", level: 95, group: "Tools" },
  { name: "UI / UX & Motion Design", level: 90, group: "Design" }
];

const STATS = [
  { label: "Years Experience", value: "3+", icon: Briefcase },
  { label: "Projects Shipped", value: "20+", icon: Rocket },
  { label: "Clients Served", value: "10+", icon: Globe2 },
  { label: "Technologies", value: "15+", icon: Code2 }
];

function useLocalStorage(key, initial) {
  const [value, setValue] = useState(() => {
    if (typeof window === "undefined") return initial;
    try {
      const saved = localStorage.getItem(key);
      return saved ? JSON.parse(saved) : initial;
    } catch {
      return initial;
    }
  });
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {}
  }, [key, value]);
  return [value, setValue];
}

const ACCENTS = [
  { name: "Sapphire", value: "#60A5FA" },
  { name: "Crimson", value: "#EF4444" },
  { name: "Emerald", value: "#10B981" },
  { name: "Violet", value: "#8B5CF6" },
  { name: "Amber", value: "#F59E0B" }
];

const cn = (...xs) => xs.filter(Boolean).join(" ");

function useMagnet(strength = 0.25) {
  const ref = useRef(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const onMove = (e) => {
      const rect = node.getBoundingClientRect();
      const relX = e.clientX - (rect.left + rect.width / 2);
      const relY = e.clientY - (rect.top + rect.height / 2);
      node.style.transform = `translate(${relX * strength}px, ${relY * strength}px)`;
    };
    const reset = () => (node.style.transform = "translate(0,0)");
    node.addEventListener("mousemove", onMove);
    node.addEventListener("mouseleave", reset);
    return () => {
      node.removeEventListener("mousemove", onMove);
      node.removeEventListener("mouseleave", reset);
    };
  }, [strength]);
  return ref;
}

function useTilt(maxTilt = 10) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      const rx = (py - 0.5) * -2 * maxTilt;
      const ry = (px - 0.5) * 2 * maxTilt;
      el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    };
    const reset = () => (el.style.transform = "perspective(900px) rotateX(0) rotateY(0)");
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", reset);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", reset);
    };
  }, [maxTilt]);
  return ref;
}

export default function FuturisticPortfolio() {
  const [dark, setDark] = useLocalStorage("pf.theme.dark", true);
  const [accent, setAccent] = useLocalStorage("pf.theme.accent", ACCENTS[0].value);
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState("All");
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMsg, setContactMsg] = useState("");

  const [modalProject, setModalProject] = useState(null);
  const [modalTab, setModalTab] = useState("gallery"); // "gallery" | "info"

  // cursor glow
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const onMove = (e) => setCursor({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  // top progress bar
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 20 });
  const progressWidth = useTransform(progress, (v) => `${v * 100}%`);

  // command palette (Ctrl/Cmd + K)
  useEffect(() => {
    const onKey = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPaletteOpen((s) => !s);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // derived data
  const allTags = useMemo(() => ["All", ...Array.from(new Set(PROJECTS.flatMap((p) => p.tags)))], []);
  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return PROJECTS.filter((p) => {
      const hitQ = !q || p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q);
      const hitT = activeTag === "All" || p.tags.includes(activeTag);
      return hitQ && hitT;
    });
  }, [query, activeTag]);

  // apply theme vars
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.style.setProperty("--accent", accent);
    document.documentElement.classList.toggle("dark", !!dark);
  }, [accent, dark]);

  // section refs
  const heroRef = useRef(null);
  const projRef = useRef(null);
  const expRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  const inHero = useInView(heroRef, { margin: "-40% 0px -60% 0px" });
  const inProj = useInView(projRef, { margin: "-40% 0px -60% 0px" });
  const inExp = useInView(expRef, { margin: "-40% 0px -60% 0px" });
  const inSkills = useInView(skillsRef, { margin: "-40% 0px -60% 0px" });
  const inContact = useInView(contactRef, { margin: "-40% 0px -60% 0px" });

  const activeSection = inContact
    ? "Contact"
    : inSkills
    ? "Skills"
    : inExp
    ? "Experience"
    : inProj
    ? "Projects"
    : "Home";

  return (
    <div className={cn("min-h-screen selection:bg-[var(--accent)]/30", dark ? "dark" : "")}>
      {/* BACKGROUND: 2026 aurora mesh */}
      <div className="fixed inset-0 -z-10 overflow-hidden noise">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#0b1233_0%,_#050816_55%,_#020410_100%)]" />
        <div className="absolute inset-0 [background-image:radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:28px_28px] opacity-60" />
        <div
          aria-hidden
          className="aurora-blob absolute -top-32 left-[8%] h-[55vw] w-[55vw] rounded-full blur-[120px] opacity-50"
          style={{ background: "radial-gradient(circle, var(--accent) 0%, transparent 60%)" }}
        />
        <div
          aria-hidden
          className="aurora-blob absolute top-[40%] -right-[10%] h-[45vw] w-[45vw] rounded-full blur-[120px] opacity-35"
          style={{ background: "radial-gradient(circle, var(--accent-2) 0%, transparent 60%)", animationDelay: "-6s" }}
        />
        <div
          aria-hidden
          className="aurora-blob absolute bottom-[-10%] left-[30%] h-[40vw] w-[40vw] rounded-full blur-[120px] opacity-30"
          style={{ background: "radial-gradient(circle, #06b6d4 0%, transparent 60%)", animationDelay: "-12s" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl opacity-30"
          style={{
            top: cursor.y,
            left: cursor.x,
            width: 500,
            height: 500,
            background: "radial-gradient(250px 250px at center, var(--accent), transparent 60%)"
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_40%,_rgba(0,0,0,0.6)_100%)]" />
      </div>

      {/* TOP PROGRESS */}
      <motion.div className="fixed left-0 right-0 top-0 z-50 h-[2px] bg-gradient-to-r from-[var(--accent)] via-[var(--accent-2)] to-[var(--accent)]" style={{ width: progressWidth }} />

      {/* NAVBAR: floating pill */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-40 w-[min(96%,72rem)]">
        <div className="flex h-14 items-center justify-between gap-3 rounded-2xl border border-white/10 bg-slate-950/40 px-3 sm:px-4 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.35)]">
          <a href="#home" className="flex items-center gap-2.5 pl-1">
            <div className="relative h-8 w-8 rounded-xl bg-gradient-to-br from-[var(--accent)] to-[var(--accent-2)] grid place-items-center text-xs font-black text-slate-950 shadow-lg shadow-[var(--accent)]/30">
              RS
              <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-emerald-400 ring-2 ring-slate-950" />
            </div>
            <div className="hidden sm:block">
              <div className="text-sm font-semibold text-white leading-tight">Rony Saadeh</div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-white/50">Salesforce · Full-Stack</div>
            </div>
          </a>
          <div className="hidden md:flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] px-1 py-1">
            <NavLink active={activeSection === "Home"} href="#home">Home</NavLink>
            <NavLink active={activeSection === "Projects"} href="#projects">Projects</NavLink>
            <NavLink active={activeSection === "Experience"} href="#experience">Experience</NavLink>
            <NavLink active={activeSection === "Skills"} href="#skills">Skills</NavLink>
            <NavLink active={activeSection === "Contact"} href="#contact">Contact</NavLink>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setPaletteOpen(true)}
              className="group hidden sm:flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-mono text-white/80 hover:bg-white/10 active:scale-[.98] transition"
            >
              <Search className="h-3.5 w-3.5 opacity-80" />
              <kbd className="rounded border border-white/20 bg-white/10 px-1.5 text-[10px]">⌘K</kbd>
            </button>
            <ThemeToggle dark={dark} setDark={setDark} />
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" ref={heroRef} className="relative mx-auto max-w-7xl px-4 pt-28 md:pt-36">
        <div className="grid items-center gap-10 md:grid-cols-[1.15fr_1fr]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs sm:text-sm text-white/90 backdrop-blur-xl shadow-lg shadow-black/20"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/60">Live</span>
              <span className="h-3 w-px bg-white/20" />
              <Cloud className="h-3.5 w-3.5 text-[var(--accent)]" />
              <span className="text-white/90">Salesforce Consultant @ <strong className="font-semibold text-white">EI-Technologies MENA</strong></span>
              <span className="hidden sm:inline-flex items-center gap-1 text-white/60">
                <MapPin className="h-3 w-3" /> UAE
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold text-white leading-[0.95] tracking-tight"
            >
              Engineering
              <br />
              <span className="bg-gradient-to-br from-white via-white/90 to-[var(--accent)] bg-clip-text text-transparent">enterprise</span>{" "}
              <span className="italic font-light text-white/70">systems</span>
              <br />
              <span className="text-white">with</span>{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] bg-clip-text text-transparent">craft</span>
                <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 200 10" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="g1" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" style={{ stopColor: "var(--accent)" }} />
                      <stop offset="100%" style={{ stopColor: "var(--accent-2)" }} />
                    </linearGradient>
                  </defs>
                  <path d="M2 8 Q 50 -2 100 5 T 198 6" stroke="url(#g1)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                </svg>
              </span>
              <span className="text-white">.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="mt-6 max-w-xl text-white/65 leading-relaxed text-base sm:text-lg"
            >
              I'm <span className="text-white font-semibold">Rony Saadeh</span>, Salesforce Consultant & Developer at <span className="text-[var(--accent)] font-medium">EI-Technologies MENA</span>, building enterprise CRM solutions in the UAE. Beyond Salesforce, I ship premium products across Flutter, React, Python, and AI/ML. Fast, elegant, inevitable.
            </motion.p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Magnetic>
                <a href="#projects" className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-white/10 transition hover:shadow-[var(--accent)]/40">
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] transition-transform duration-500 group-hover:translate-x-0" />
                  <span className="relative z-10 flex items-center gap-2 transition group-hover:text-white">
                    <Rocket className="h-4 w-4" /> Explore Projects
                    <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </a>
              </Magnetic>
              <Magnetic>
                <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur hover:bg-white/10 transition">
                  <Mail className="h-4 w-4" /> Contact Me
                </a>
              </Magnetic>
              <Magnetic>
                <a href="/Rony%20Saadeh%20CV.pdf" download="Rony Saadeh CV.pdf" className="inline-flex items-center gap-2 rounded-full px-3 py-3 text-sm text-white/70 hover:text-white transition link-underline">
                  <Download className="h-4 w-4" /> Resume
                </a>
              </Magnetic>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <div className="flex gap-2">
                <a
                  aria-label="LinkedIn"
                  href="https://www.linkedin.com/in/rony-saadeh1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 backdrop-blur hover:text-white hover:border-[var(--accent)]/40 hover:bg-[var(--accent)]/10 transition"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  aria-label="Email"
                  href="mailto:rony.saade3@hotmail.com"
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 backdrop-blur hover:text-white hover:border-[var(--accent)]/40 hover:bg-[var(--accent)]/10 transition"
                >
                  <Mail className="h-4 w-4" />
                </a>
              </div>
              <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">v2026.5</span>
            </div>
          </div>

          <HeroParallax />
        </div>

        {/* Marquee tech ticker */}
        <div className="relative mt-20 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[#050816] to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#050816] to-transparent" />
          <div className="flex w-max animate-marquee gap-12 py-4 px-6 font-mono text-sm uppercase tracking-[0.18em] text-white/50">
            {[...Array(2)].flatMap((_, k) =>
              ["Salesforce", "Apex", "LWC", "Flows", "Sales Cloud", "Service Cloud", "Flutter", "React", "Next.js", "Python", "Firebase", "Machine Learning", "Excel Automation", "REST APIs"].map((t, i) => (
                <span key={`${k}-${i}`} className="flex items-center gap-12 whitespace-nowrap">
                  <span className="hover:text-white transition">{t}</span>
                  <span className="text-[var(--accent)]/60">✦</span>
                </span>
              ))
            )}
          </div>
        </div>

        <div className="mt-12 flex items-center justify-center text-white/40">
          <ChevronDown className="h-5 w-5 animate-bounce" />
        </div>
      </section>

      {/* ACCENT PICKER */}
      <section className="mx-auto max-w-7xl px-4">
        <div className="mt-12 flex items-center gap-3 text-white/70">
          <div className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-white/50">
            Theme
          </div>
          <div className="flex flex-wrap gap-2">
            {ACCENTS.map((c) => (
              <button
                key={c.value}
                onClick={() => setAccent(c.value)}
                className={cn(
                  "h-7 w-7 rounded-full ring-2 ring-white/20 transition",
                  accent === c.value ? "ring-white ring-offset-2 ring-offset-[#050816] scale-110" : "hover:scale-110"
                )}
                style={{ backgroundColor: c.value, boxShadow: accent === c.value ? `0 0 24px ${c.value}` : "none" }}
                title={c.name}
              />
            ))}
          </div>
        </div>
      </section>

      {/* STATS: bento */}
      <section className="mx-auto max-w-7xl px-4 pt-16">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {STATS.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="conic-border card-spotlight group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.01] p-5 md:p-6 backdrop-blur-xl transition"
                onMouseMove={(e) => {
                  const r = e.currentTarget.getBoundingClientRect();
                  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
                  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="grid h-9 w-9 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10 text-[var(--accent)]">
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/40">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <div className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tighter num-glow">{s.value}</div>
                <div className="mt-1 text-xs md:text-sm text-white/55">{s.label}</div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" ref={projRef} className="mx-auto max-w-7xl px-4 pt-28">
        <SectionHeader kicker="Selected Work" icon={<Layout className="h-5 w-5" />} title="Projects" subtitle="Featured builds, case studies, and product engineering across CRM, mobile, and AI." />

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3.5 top-3 h-4 w-4 text-white/40" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects…"
              className="w-72 rounded-full bg-white/[0.04] pl-10 pr-3 py-2.5 text-sm text-white/90 placeholder-white/40 outline-none ring-1 ring-white/10 backdrop-blur focus:ring-[var(--accent)]/60 transition"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {allTags.map((t) => (
              <button
                key={t}
                onClick={() => setActiveTag(t)}
                className={cn(
                  "rounded-full border px-3.5 py-1.5 text-xs font-medium transition",
                  activeTag === t
                    ? "border-transparent bg-white text-slate-950"
                    : "border-white/10 bg-white/[0.03] text-white/70 hover:bg-white/10 hover:text-white"
                )}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:gap-6">
          {filtered.map((p, i) => (
            <ProjectCard
              key={p.id}
              p={p}
              index={i}
              onOpen={(tab) => {
                setModalProject(p);
                setModalTab(tab);
              }}
            />
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" ref={expRef} className="mx-auto max-w-7xl px-4 pt-28">
        <SectionHeader kicker="Career Timeline" icon={<ScrollText className="h-5 w-5" />} title="Experience" subtitle="From AI research and full-stack engineering to enterprise Salesforce consulting." />
        <div className="mt-10 relative">
          <div className="absolute left-3 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[var(--accent)] via-[var(--accent-2)]/40 to-transparent" />
          <div className="space-y-5">
            {EXPERIENCE.map((e, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className={cn(
                  "card-spotlight conic-border group relative ml-10 rounded-3xl border p-6 text-white/80 transition",
                  e.current
                    ? "border-[var(--accent)]/40 bg-gradient-to-br from-[var(--accent)]/12 via-white/[0.03] to-transparent shadow-2xl shadow-[var(--accent)]/10"
                    : "border-white/10 bg-white/[0.03] backdrop-blur hover:bg-white/[0.05]"
                )}
                onMouseMove={(ev) => {
                  const r = ev.currentTarget.getBoundingClientRect();
                  ev.currentTarget.style.setProperty("--mx", `${ev.clientX - r.left}px`);
                  ev.currentTarget.style.setProperty("--my", `${ev.clientY - r.top}px`);
                }}
              >
                <div
                  className={cn(
                    "absolute -left-[31px] top-6 grid h-5 w-5 place-items-center rounded-full border-2",
                    e.current
                      ? "border-[var(--accent)] bg-[var(--accent)] shadow-[0_0_28px] shadow-[var(--accent)]/70"
                      : "border-white/30 bg-slate-950"
                  )}
                >
                  {e.current && <span className="h-2 w-2 rounded-full bg-white animate-pulse" />}
                </div>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      {e.current && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-emerald-300 ring-1 ring-emerald-500/30">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Current
                        </span>
                      )}
                      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/40">{e.period}</span>
                    </div>
                    <h3 className="font-display text-xl sm:text-2xl font-semibold text-white tracking-tight leading-tight">{e.role}</h3>
                    <p className="mt-2 text-sm text-white/55 flex items-center gap-1.5 flex-wrap">
                      <Briefcase className="h-3.5 w-3.5 opacity-70" />
                      {e.org}
                    </p>
                  </div>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-white/70">
                  {e.bullets.map((b, i) => (
                    <li key={i} className="flex gap-3 leading-relaxed">
                      <span className="mt-2 h-1 w-1 rounded-full bg-[var(--accent)] flex-shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" ref={skillsRef} className="mx-auto max-w-7xl px-4 pt-28">
        <SectionHeader kicker="Tech Stack" icon={<Cpu className="h-5 w-5" />} title="Skills" subtitle="Core stack & strengths, from Salesforce orgs to Flutter apps to ML pipelines." />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {SKILLS.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="card-spotlight group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur transition hover:border-[var(--accent)]/30"
              onMouseMove={(ev) => {
                const r = ev.currentTarget.getBoundingClientRect();
                ev.currentTarget.style.setProperty("--mx", `${ev.clientX - r.left}px`);
                ev.currentTarget.style.setProperty("--my", `${ev.clientY - r.top}px`);
              }}
            >
              <div className="flex items-center justify-between text-white/80">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="font-medium truncate">{s.name}</span>
                  {s.group && (
                    <span className="rounded-md bg-white/5 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-white/50 ring-1 ring-white/10 flex-shrink-0">
                      {s.group}
                    </span>
                  )}
                </div>
                <span className="font-mono text-xs font-semibold text-[var(--accent)] flex-shrink-0">{s.level}%</span>
              </div>
              <div className="mt-4 h-1.5 w-full rounded-full bg-white/[0.06] overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full rounded-full bg-gradient-to-r from-[var(--accent)] via-[var(--accent-2)] to-[var(--accent)] shadow-[0_0_18px] shadow-[var(--accent)]/50"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" ref={contactRef} className="mx-auto max-w-7xl px-4 pt-28 pb-20">
        <SectionHeader kicker="Get In Touch" icon={<Mail className="h-5 w-5" />} title="Contact" subtitle="Let's build something exceptional. Replies within 24 hours." />
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={(e) => {
              e.preventDefault();

              if (!contactName.trim() || !contactEmail.trim()) {
                alert("Please enter your name and email.");
                return;
              }

              const subject = `New inquiry from ${contactName}`;
              const lines = [
                `Name: ${contactName}`,
                `Email: ${contactEmail}`,
                "",
                "Message:",
                contactMsg || "(no message provided)"
              ];
              const body = lines.join("\n");

              const url = `mailto:${RECEIVER_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

              if (url.length > 1800) {
                alert("Your message is a bit long for a mail client link. Please shorten it slightly.");
                return;
              }

              window.location.href = url;

              setContactName("");
              setContactEmail("");
              setContactMsg("");
            }}
            className="conic-border relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 backdrop-blur-xl"
          >
            <div className="grid gap-4">
              <div>
                <label className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/40">Name</label>
                <input
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  className="mt-1.5 w-full rounded-xl bg-white/[0.04] p-3.5 text-sm text-white/90 outline-none ring-1 ring-white/10 focus:ring-[var(--accent)]/60 transition"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/40">Email</label>
                <input
                  type="email"
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  className="mt-1.5 w-full rounded-xl bg-white/[0.04] p-3.5 text-sm text-white/90 outline-none ring-1 ring-white/10 focus:ring-[var(--accent)]/60 transition"
                  placeholder="you@company.com"
                  required
                />
              </div>
              <div>
                <label className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/40">Message</label>
                <textarea
                  rows={5}
                  value={contactMsg}
                  onChange={(e) => setContactMsg(e.target.value)}
                  className="mt-1.5 w-full rounded-xl bg-white/[0.04] p-3.5 text-sm text-white/90 outline-none ring-1 ring-white/10 focus:ring-[var(--accent)]/60 transition resize-none"
                  placeholder="What can we build together?"
                />
              </div>
              <Magnetic>
                <button className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] px-5 py-3.5 font-semibold text-slate-950 shadow-lg shadow-[var(--accent)]/30 transition hover:shadow-[var(--accent)]/50">
                  Send Message
                  <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </Magnetic>
            </div>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-6 sm:p-8 text-white/80 backdrop-blur-xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-emerald-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Available for projects
            </div>
            <h3 className="mt-4 font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">Let's create<br />something legendary.</h3>
            <p className="mt-3 text-sm text-white/60 leading-relaxed">
              Open to Salesforce engagements, freelance product builds, and ambitious ideas. I reply within 24 hours.
            </p>

            <div className="mt-6 grid gap-2.5">
              <a href={`mailto:${RECEIVER_EMAIL}`} className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-3.5 transition hover:bg-white/[0.07] hover:border-[var(--accent)]/30">
                <div className="grid h-9 w-9 place-items-center rounded-xl bg-[var(--accent)]/15 text-[var(--accent)]">
                  <Mail className="h-4 w-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/40">Email</div>
                  <div className="text-sm text-white truncate">{RECEIVER_EMAIL}</div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-white/40 transition group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-3.5">
                <div className="grid h-9 w-9 place-items-center rounded-xl bg-[var(--accent)]/15 text-[var(--accent)]">
                  <MapPin className="h-4 w-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/40">Location</div>
                  <div className="text-sm text-white">United Arab Emirates · Remote-friendly</div>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-3.5">
                <div className="grid h-9 w-9 place-items-center rounded-xl bg-[var(--accent)]/15 text-[var(--accent)]">
                  <Briefcase className="h-4 w-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/40">Currently</div>
                  <div className="text-sm text-white flex items-center gap-2 flex-wrap">
                    EI-Technologies MENA
                    <span className="rounded-full bg-[var(--accent)]/15 px-2 py-0.5 text-[10px] font-semibold text-[var(--accent)] ring-1 ring-[var(--accent)]/30">Salesforce</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-3">
              <a
                aria-label="LinkedIn"
                href="https://www.linkedin.com/in/rony-saadeh1"
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 backdrop-blur hover:text-white hover:border-[var(--accent)]/40 hover:bg-[var(--accent)]/10 transition"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                aria-label="Email"
                href={`mailto:${RECEIVER_EMAIL}`}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 backdrop-blur hover:text-white hover:border-[var(--accent)]/40 hover:bg-[var(--accent)]/10 transition"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-[var(--accent)] to-[var(--accent-2)] grid place-items-center text-[10px] font-black text-slate-950">RS</div>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/40">
              © {new Date().getFullYear()} Rony Saadeh. Built in the UAE
            </span>
          </div>
          <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/30">
            React · Tailwind · Framer Motion
          </div>
        </div>
      </footer>

      {/* COMMAND PALETTE */}
      {paletteOpen && <CommandPalette onClose={() => setPaletteOpen(false)} setQuery={setQuery} />}

      {/* PROJECT MODAL */}
      {modalProject && (
        <ProjectModal
          project={modalProject}
          initialTab={modalTab}
          onClose={() => setModalProject(null)}
        />
      )}
    </div>
  );
}

/* ------------------ Sub-components ------------------ */

function NavLink({ href, children, active }) {
  return (
    <a
      href={href}
      className={cn(
        "relative rounded-full px-3.5 py-1.5 text-sm font-medium transition",
        active ? "text-slate-950" : "text-white/70 hover:text-white"
      )}
    >
      {active && (
        <motion.span
          layoutId="nav-pill"
          className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] shadow-lg shadow-[var(--accent)]/30"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}
      {children}
    </a>
  );
}

function SectionHeader({ icon, title, subtitle, kicker }) {
  return (
    <div className="flex items-end justify-between gap-4 flex-wrap">
      <div>
        {kicker && (
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-white/60">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
            {kicker}
          </div>
        )}
        <h2 className="flex items-center gap-3 font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
          <span className="grid place-items-center rounded-2xl border border-white/10 bg-gradient-to-br from-[var(--accent)]/20 to-transparent p-2.5 text-[var(--accent)] backdrop-blur">{icon}</span>
          {title}
        </h2>
        <p className="mt-2 text-sm sm:text-base text-white/55 max-w-lg">{subtitle}</p>
      </div>
    </div>
  );
}

function ThemeToggle({ dark, setDark }) {
  const ref = useMagnet(0.15);
  return (
    <button
      ref={ref}
      onClick={() => setDark((v) => !v)}
      className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/80 hover:bg-white/10"
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}

function Magnetic({ children }) {
  const ref = useMagnet(0.3);
  return <span ref={ref} className="inline-block">{children}</span>;
}

function HeroParallax() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const rot = useTransform(scrollYProgress, [0, 1], [-3, 5]);
  return (
    <div ref={ref} className="relative grid place-items-center">
      <div className="relative h-[440px] w-full">
        {/* Decorative blurs */}
        <motion.div style={{ y: y2 }} className="absolute -left-8 bottom-12 h-28 w-28 rounded-full bg-[var(--accent)]/40 blur-3xl" />
        <motion.div style={{ y: y1 }} className="absolute right-0 top-4 h-24 w-24 rounded-full bg-[var(--accent-2)]/30 blur-3xl" />

        {/* Main centered card */}
        <motion.div style={{ rotate: rot }} className="absolute inset-0 grid place-items-center">
          <div className="conic-border relative w-[88%] rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-slate-950/80 p-6 shadow-2xl backdrop-blur-xl">
            <div className="flex items-center gap-3 text-white/80">
              <div className="relative h-12 w-12 rounded-2xl bg-gradient-to-br from-[var(--accent)] to-[var(--accent-2)] grid place-items-center text-slate-950 font-black text-lg shadow-lg shadow-[var(--accent)]/30">
                RS
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-white font-semibold truncate">Salesforce · Full-Stack · AI</div>
                <div className="text-xs text-white/55 truncate font-mono">EI-Technologies MENA · UAE</div>
              </div>
              <Cloud className="h-5 w-5 text-[var(--accent)] flex-shrink-0" />
            </div>
            <div className="my-4 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
            <div className="grid grid-cols-3 gap-2">
              <Badge>Salesforce</Badge>
              <Badge>Apex · LWC</Badge>
              <Badge>Flows</Badge>
              <Badge>Flutter</Badge>
              <Badge>React</Badge>
              <Badge>Python</Badge>
              <Badge>ML / AI</Badge>
              <Badge>Firestore</Badge>
              <Badge>Automation</Badge>
            </div>
            <div className="mt-4 flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-white/40">
              <span>Production-ready</span>
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> online
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function Badge({ children }) {
  return (
    <span className="rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-center text-[10.5px] leading-tight text-white/80 truncate">
      {children}
    </span>
  );
}

function ProjectCard({ p, index, onOpen }) {
  const ref = useTilt(6);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.05 }}
      className="conic-border card-spotlight group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] backdrop-blur"
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
        e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
      }}
    >
      <div ref={ref} className="p-0 transition-transform will-change-transform">
        <div className="relative aspect-[16/10] overflow-hidden">
          <img src={p.image} alt="" className="h-full w-full object-cover opacity-70 transition duration-700 group-hover:scale-110 group-hover:opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/40 to-transparent" />
          <div className="absolute right-3 top-3">
            <span className="rounded-full border border-white/15 bg-black/40 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-white/70 backdrop-blur">{p.year}</span>
          </div>
          <div className="absolute left-5 right-5 bottom-5">
            <h3 className="font-display text-2xl font-bold text-white drop-shadow-lg leading-tight">{p.title}</h3>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {p.tags.slice(0, 4).map((t) => (
                <span key={t} className="rounded-full bg-black/50 px-2 py-0.5 text-[10px] text-white/80 ring-1 ring-white/15 backdrop-blur">{t}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="relative z-10 space-y-4 p-5 text-white/80">
          <p className="text-sm text-white/65 leading-relaxed line-clamp-2">{p.description}</p>
          <div className="flex items-center justify-between border-t border-white/5 pt-4">
            <button
              onClick={() => onOpen("gallery")}
              className="group/btn inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3.5 py-1.5 text-xs font-semibold text-white ring-1 ring-white/10 hover:bg-white hover:text-slate-950 transition"
            >
              View Gallery
              <ArrowUpRight className="h-3.5 w-3.5 transition group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </button>
            <button
              onClick={() => onOpen("info")}
              className="inline-flex items-center gap-1 text-xs font-medium text-white/60 hover:text-[var(--accent)] transition link-underline"
            >
              Case study →
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectModal({ project, initialTab = "gallery", onClose }) {
  const [tab, setTab] = useState(initialTab); // "gallery" | "info"
  const [idx, setIdx] = useState(0);
  const imgs = Array.isArray(project.images) && project.images.length > 0 ? project.images : [project.image].filter(Boolean);

  // Close on ESC
  useEffect(() => {
    const onEsc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [onClose]);

  // Keyboard gallery nav
  useEffect(() => {
    const onKey = (e) => {
      if (tab !== "gallery" || imgs.length < 2) return;
      if (e.key === "ArrowRight") setIdx((i) => (i + 1) % imgs.length);
      if (e.key === "ArrowLeft") setIdx((i) => (i - 1 + imgs.length) % imgs.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [tab, imgs.length]);

  return (
    <div
      className="fixed inset-0 z-[80] grid place-items-center bg-black/60 p-2 sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} modal`}
    >
      {/* Flex column so header stays visible and body scrolls on small screens */}
      <div className="relative w-full max-w-[100%] sm:max-w-5xl overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-gradient-to-b from-slate-900 to-slate-950 flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="flex items-center justify-between gap-2 border-b border-white/10 p-2 sm:p-3">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setTab("gallery")}
              className={`rounded-lg px-3 py-1.5 text-sm ${
                tab === "gallery" ? "bg-white/10 text-white" : "text-white/70 hover:text-white hover:bg-white/5"
              }`}
            >
              Gallery
            </button>
            <button
              onClick={() => setTab("info")}
              className={`rounded-lg px-3 py-1.5 text-sm ${
                tab === "info" ? "bg-white/10 text-white" : "text-white/70 hover:text-white hover:bg-white/5"
              }`}
            >
              More Info
            </button>
          </div>

          <button
            onClick={onClose}
            className="rounded-md border border-white/10 bg-white/10 px-3 py-1.5 text-xs sm:text-sm text-white/80 hover:bg-white/20"
            aria-label="Close modal"
          >
            Close
          </button>
        </div>

        {/* Body (scrollable) */}
        {tab === "gallery" ? (
          <div className="p-0 overflow-y-auto">
            <div className="relative w-full h-[70vh] sm:h-auto sm:aspect-[16/9] bg-black">
              <img src={imgs[idx]} alt="" className="h-full w-full object-contain" loading="lazy" decoding="async" />
              {imgs.length > 1 && (
                <>
                  <button
                    onClick={() => setIdx((i) => (i - 1 + imgs.length) % imgs.length)}
                    className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white/90 hover:bg-white/20"
                    aria-label="Previous"
                  >
                    ‹
                  </button>
                  <button
                    onClick={() => setIdx((i) => (i + 1) % imgs.length)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white/90 hover:bg-white/20"
                    aria-label="Next"
                  >
                    ›
                  </button>
                </>
              )}
            </div>

            {imgs.length > 1 && (
              <div className="flex gap-2 overflow-x-auto p-3">
                {imgs.map((src, i) => (
                  <button
                    key={src + i}
                    onClick={() => setIdx(i)}
                    className={`h-16 w-24 flex-shrink-0 overflow-hidden rounded-lg border ${
                      i === idx ? "border-[var(--accent)]" : "border-white/10"
                    }`}
                    aria-label={`Open image ${i + 1}`}
                  >
                    <img src={src} alt="" className="h-full w-full object-cover" loading="lazy" />
                  </button>
                ))}
              </div>
            )}
          </div>
        ) : (
          // ===== Single-column, white text, mobile-friendly =====
          <div className="overflow-y-auto p-4 sm:p-6 text-white/80">
            <h3 className="text-white text-xl sm:text-2xl font-bold">{project.title}</h3>
            {project.year ? (
              <p className="mt-1 text-xs sm:text-sm text-white/50">Year: {project.year}</p>
            ) : null}
            <p className="mt-3 text-sm text-white/70">{project.description}</p>

            {/* Problem */}
            {project?.caseStudy?.problem && (
              <section className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
                <h4 className="text-white font-semibold text-sm">Problem</h4>
                <p className="mt-2 text-sm text-white/70">{project.caseStudy.problem}</p>
              </section>
            )}

            {/* Solution */}
            {Array.isArray(project?.caseStudy?.solution) && project.caseStudy.solution.length > 0 && (
              <section className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                <h4 className="text-white font-semibold text-sm">Solution</h4>
                <ul className="mt-2 list-disc pl-5 text-sm text-white/80 space-y-1.5">
                  {project.caseStudy.solution.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
              </section>
            )}

            {/* Architecture */}
            {Array.isArray(project?.caseStudy?.architecture) && project.caseStudy.architecture.length > 0 && (
              <section className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                <h4 className="text-white font-semibold text-sm">Architecture</h4>
                <ul className="mt-2 list-disc pl-5 text-sm text-white/80 space-y-1.5">
                  {project.caseStudy.architecture.map((a, i) => (
                    <li key={i}>{a}</li>
                  ))}
                </ul>
              </section>
            )}

            {/* Impact */}
            {Array.isArray(project?.caseStudy?.impact) && project.caseStudy.impact.length > 0 && (
              <section className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                <h4 className="text-white font-semibold text-sm">Impact</h4>
                <ul className="mt-2 list-disc pl-5 text-sm text-white/80 space-y-1.5">
                  {project.caseStudy.impact.map((x, i) => (
                    <li key={i}>{x}</li>
                  ))}
                </ul>
              </section>
            )}

            {/* Optional links */}
            {(project?.caseStudy?.link && project.caseStudy.link !== "#") || (project?.link && project.link !== "#") ? (
              <div className="mt-5 flex flex-wrap gap-3">
                {project?.caseStudy?.link && project.caseStudy.link !== "#" && (
                  <a href={project.caseStudy.link} className="rounded-xl bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-slate-900">
                    Visit Case Study
                  </a>
                )}
                {project?.link && project.link !== "#" && (
                  <a
                    href={project.link}
                    className="rounded-xl border border-white/10 bg-white/0 px-4 py-2 text-sm text-white/90 hover:bg-white/10 inline-flex items-center gap-2"
                  >
                    Visit Website <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
}


function CommandPalette({ onClose, setQuery }) {
  useEffect(() => {
    const onEsc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [onClose]);

  const go = (hash) => {
    onClose();
    setTimeout(() => {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  return (
    <div className="fixed inset-0 z-[90] grid place-items-start bg-black/50 p-4 pt-24">
      <div className="mx-auto w-full max-w-xl overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-2xl">
        <div className="flex items-center gap-2 border-b border-white/10 bg-slate-900/80 px-3 py-2">
          <Search className="h-4 w-4 text-white/60" />
          <input
            autoFocus
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects or jump to a section…"
            className="w-full bg-transparent p-2 text-sm text-white outline-none placeholder-white/40"
          />
        </div>
        <div className="grid grid-cols-2 gap-2 p-3">
          {[
            { label: "Home", hash: "#home" },
            { label: "Projects", hash: "#projects" },
            { label: "Experience", hash: "#experience" },
            { label: "Skills", hash: "#skills" },
            { label: "Contact", hash: "#contact" }
          ].map((it) => (
            <button
              key={it.hash}
              onClick={() => go(it.hash)}
              className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-left text-sm text-white/80 hover:bg-white/10"
            >
              {it.label}
            </button>
          ))}
        </div>
        <div className="flex justify-end gap-2 border-t border-white/10 p-2 text-xs text-white/50">
          <kbd className="rounded border border-white/20 bg-white/10 px-1.5">Esc</kbd> to close
        </div>
      </div>
    </div>
  );
}
