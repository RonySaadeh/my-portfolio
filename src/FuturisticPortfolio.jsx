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
  ExternalLink
} from "lucide-react";
// (can remove if unused elsewhere)
// import { image, title } from "framer-motion/client";

const RECEIVER_EMAIL = "rony.saade3@hotmail.com"; // <-- put your email here

const PROJECTS = [
  {
    id: "intels-sis",
    title: "INTELS SIS — Service Information System",
    description:
      "Flutter desktop + Python/Flask. Industrial manuals, BOM, stock availability, Machine Parts Requests, Excel Request Generation and Automatic Emails.",
    tags: ["Flutter", "Python", "Excel", "PDF", "Desktop"],
    year: 2025,
    image: "https://th.bing.com/th/id/OIP.TDEmxKTk0SMWMDUB-3L-EgHaET?w=309&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    link: "#",
    images: [
      "https://github.com/RonySaadeh/Images-To-Link-Use/blob/main/Screenshot%202025-08-30%20181636.png?raw=true",
      "https://github.com/RonySaadeh/Images-To-Link-Use/blob/main/Screenshot%202025-08-30%20181645.png?raw=true",
      "https://github.com/RonySaadeh/Images-To-Link-Use/blob/main/Screenshot%202025-08-30%20181652.png?raw=true",
      "https://github.com/RonySaadeh/Images-To-Link-Use/blob/main/Screenshot%202025-08-30%20181711.png?raw=true",
      "https://github.com/RonySaadeh/Images-To-Link-Use/blob/main/Screenshot%202025-08-30%20181717.png?raw=true",
      "https://github.com/RonySaadeh/Images-To-Link-Use/blob/main/Screenshot%202025-08-30%20181724.png?raw=true"
    ],
    caseStudy: {
      problem:
        "Technicians lacked a unified, searchable system for machine manuals, BOM, and stock availability—leading to delays and errors in parts requests.",
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
    title: "Private Management Tool — Parlays & Analytics",
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
    title: "FriendScrow — AI Travel & Budgeting",
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
    title: "Btellaya 1850 — POS & Restaurant Suite",
    description:
      "Windows Flutter app. Table orders, discounts/tips, Excel reports, receipt PDF, admin dashboard.",
    tags: ["Flutter", "POS", "Excel"],
    year: 2024,
    image: "https://picsum.photos/seed/pos/1200/800",
    link: "#",
    images: [
      "https://github.com/RonySaadeh/Images-To-Link-Use/blob/main/Screenshot%202025-08-30%20182336.png?raw=true",
      "https://github.com/RonySaadeh/Images-To-Link-Use/blob/main/Screenshot%202025-08-30%20182352.png?raw=true",
      "https://github.com/RonySaadeh/Images-To-Link-Use/blob/main/Screenshot%202025-08-30%20182404.png?raw=true",
      "https://github.com/RonySaadeh/Images-To-Link-Use/blob/main/Screenshot%202025-08-30%20182414.png?raw=true",
      "https://github.com/RonySaadeh/Images-To-Link-Use/blob/main/Screenshot%202025-08-30%20182509.png?raw=true",
      "https://github.com/RonySaadeh/Images-To-Link-Use/blob/main/Screenshot%202025-08-30%20182602.png?raw=true"
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
    role: "Software Engineer & Builder",
    org: "INTELS - Nigeria | ESAB - United Arab Emirates",
    period: "2024 → Present",
    bullets: [
      "Engineered industrial desktop solutions in Flutter & Python with advanced Excel/PDF automation for data and workflow management.",
      "Developed robust service information systems integrating machine manuals, stock availability, and spare-parts BOM tracking.",
      "Designed professional, performance-first UIs with embedded PDF viewers, search, and analytics to enhance usability in engineering operations."
    ]
  },
  {
    role: "Technical Consultant BC - Microsoft Dynamic 365 Business Central",
    org: "Exquitech - Lebanon",
    period: "Present",
    bullets: [
      "Implemented and customized Business Central modules to optimize financial, sales, and inventory workflows.",
      "Developed AL extensions and integrations with external systems, enhancing core Business Central functionality.",
      "Delivered training and support to end-users, ensuring smooth adoption and improved business efficiency."
    ]
  },
  {
    role: "Full Stack Developer",
    org: "Mobile Application, Website",
    period: "2024 -> 2025",
    bullets: [
      "Developed and deployed cross-platform mobile, web, and desktop applications using Flutter, Python, and REST APIs.",
      "Built automation pipelines for Excel/PDF data handling, streamlining reporting and operational workflows.",
      "Designed modern, performance-first UIs with authentication, analytics, and Firestore integration."
    ]
  },
  {
    role: "AI/ML Projects",
    org: "Mobile Application",
    period: "2024 → 2025",
    bullets: [
      "Travel recommendation engine with ML feedback loops.",
      "Data pipelines, experimentation notebooks, model evals."
    ]
  }
];

const SKILLS = [
  { name: "Flutter / Dart", level: 86 },
  { name: "Python / Flask", level: 80 },
  {name: "Machine Learning", level: 85},
  { name: "React / Next", level: 75 },
  { name: "Firestore / Firebase", level: 80 },
  { name: "Excel Automation", level: 93 },
  { name: "UI/UX & Motion", level: 90 }
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
      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
        <div className="absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] [background-size:40px_40px] opacity-20" />
        <motion.div
          aria-hidden
          className="absolute -top-24 left-1/3 h-[60vw] w-[60vw] rounded-full blur-3xl"
          style={{ background: "radial-gradient(600px 400px at 50% 50%, var(--accent), transparent 60%)" }}
          animate={{ y: [0, 40, -10, 0], x: [0, -20, 30, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl opacity-30"
          style={{
            top: cursor.y,
            left: cursor.x,
            width: 400,
            height: 400,
            background: "radial-gradient(200px 200px at center, var(--accent), transparent 60%)"
          }}
        />
      </div>

      {/* TOP PROGRESS */}
      <motion.div className="fixed left-0 right-0 top-0 z-50 h-1 bg-[var(--accent)]" style={{ width: progressWidth }} />

      {/* NAVBAR */}
      <nav className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex h-14 items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-md bg-[var(--accent)]/80 ring-2 ring-white/20 grid place-items-center text-xs font-bold text-white">RS</div>
              <span className="text-sm text-white/70 hidden sm:inline">Rony Saadeh</span>
            </div>
            <div className="hidden md:flex items-center gap-2 text-white/80">
              <NavLink active={activeSection === "Home"} href="#home">Home</NavLink>
              <NavLink active={activeSection === "Projects"} href="#projects">Projects</NavLink>
              <NavLink active={activeSection === "Experience"} href="#experience">Experience</NavLink>
              <NavLink active={activeSection === "Skills"} href="#skills">Skills</NavLink>
              <NavLink active={activeSection === "Contact"} href="#contact">Contact</NavLink>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setPaletteOpen(true)}
                className="group hidden sm:flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/80 hover:bg-white/10 active:scale-[.98] transition"
              >
                <Search className="h-4 w-4 opacity-80" />
                <span className="opacity-80">Search</span>
                <kbd className="ml-1 rounded border border-white/20 bg-white/10 px-1.5 text-[10px]">Ctrl K</kbd>
              </button>
              <ThemeToggle dark={dark} setDark={setDark} />
            </div>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" ref={heroRef} className="relative mx-auto max-w-7xl px-4 pt-16 md:pt-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-black tracking-tight text-white"
            >
              Building <span className="text-[var(--accent)]">legendary</span> apps
              <br /> with precision & flair.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="mt-5 max-w-xl text-white/70"
            >
             I’m Rony Saadeh — a full-stack developer and AI/ML engineer building premium products with Flutter, React, and Python. I specialize in blending cutting-edge machine learning with elegant, high-performance systems. My work is driven by a passion for motion design, efficiency, and creating experiences that feel seamless and almost magical
            </motion.p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Magnetic>
                <a href="#projects" className="group inline-flex items-center gap-2 rounded-xl bg-[var(--accent)] px-4 py-2 font-semibold text-slate-900 shadow-lg shadow-[var(--accent)]/30">
                  <Rocket className="h-4 w-4" /> Explore Projects
                </a>
              </Magnetic>
              <Magnetic>
                <a href="#contact" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 font-semibold text-white/90 hover:bg-white/10">
                  <Mail className="h-4 w-4" /> Contact
                </a>
              </Magnetic>
              <Magnetic>
                <a href="/resume.pdf" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/0 px-4 py-2 text-white/80 hover:bg-white/10">
                  <Download className="h-4 w-4" /> Resume
                </a>
              </Magnetic>
            </div>
            <div className="mt-6 flex gap-3 text-white/70">
              <a
                  aria-label="LinkedIn"
                  href="https://www.linkedin.com/in/rony-saadeh1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              <a aria-label="Email" href="mailto:rony.saade3@hotmail.com" className="hover:text-white"><Mail className="h-5 w-5" /></a>
            </div>
          </div>

          <HeroParallax />
        </div>

        <div className="mt-16 flex items-center justify-center text-white/60">
          <ChevronDown className="h-5 w-5 animate-bounce" />
        </div>
      </section>

      {/* ACCENT PICKER */}
      <section className="mx-auto max-w-7xl px-4">
        <div className="mt-10 flex items-center gap-3 text-white/70">
          <Sparkles className="h-4 w-4" />
          <span className="text-sm">Accent:</span>
          <div className="flex flex-wrap gap-2">
            {ACCENTS.map((c) => (
              <button
                key={c.value}
                onClick={() => setAccent(c.value)}
                className={cn(
                  "h-6 w-6 rounded-full ring-2 ring-white/30",
                  accent === c.value ? "ring-[var(--accent)] ring-offset-2 ring-offset-slate-900" : ""
                )}
                style={{ backgroundColor: c.value }}
                title={c.name}
              />
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" ref={projRef} className="mx-auto max-w-7xl px-4 pt-20">
        <SectionHeader icon={<Layout className="h-5 w-5" />} title="Projects" subtitle="Featured builds & case studies" />

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-white/40" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects"
              className="w-72 rounded-xl bg-white/5 pl-9 pr-3 py-2 text-sm text-white/90 placeholder-white/40 outline-none ring-1 ring-white/10 focus:ring-[var(--accent)]/60"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {allTags.map((t) => (
              <button
                key={t}
                onClick={() => setActiveTag(t)}
                className={cn(
                  "rounded-full border px-3 py-1 text-xs",
                  activeTag === t
                    ? "border-[var(--accent)]/70 bg-[var(--accent)]/10 text-white"
                    : "border-white/10 bg-white/0 text-white/70 hover:bg-white/5"
                )}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
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
      <section id="experience" ref={expRef} className="mx-auto max-w-7xl px-4 pt-24">
        <SectionHeader icon={<ScrollText className="h-5 w-5" />} title="Experience" subtitle="What I ship & how I work" />
        <div className="mt-8 relative">
          <div className="absolute left-3 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[var(--accent)]/60 via-white/10 to-transparent" />
          <div className="space-y-6">
            {EXPERIENCE.map((e, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className="relative ml-8 rounded-2xl border border-white/10 bg-white/5 p-5 text-white/80"
              >
                <div className="absolute -left-[23px] top-5 h-4 w-4 rounded-full border border-white/20 bg-[var(--accent)] shadow-[0_0_20px] shadow-[var(--accent)]/40" />
                <div className="flex flex-wrap items-end justify-between gap-3">
                  <div>
                    <h3 className="text-white font-semibold">{e.role}</h3>
                    <p className="text-sm text-white/60">{e.org}</p>
                  </div>
                  <span className="text-xs text-white/50">{e.period}</span>
                </div>
                <ul className="mt-3 list-disc pl-5 text-sm">
                  {e.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" ref={skillsRef} className="mx-auto max-w-7xl px-4 pt-24">
        <SectionHeader icon={<Cpu className="h-5 w-5" />} title="Skills" subtitle="Core stack & strengths" />
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {SKILLS.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-4"
            >
              <div className="flex items-center justify-between text-white/80">
                <span>{s.name}</span>
                <span className="text-sm text-white/60">{s.level}%</span>
              </div>
              <div className="mt-3 h-2 w-full rounded-full bg-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="h-2 rounded-full bg-[var(--accent)]"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" ref={contactRef} className="mx-auto max-w-7xl px-4 pt-24 pb-20">
        <SectionHeader icon={<Mail className="h-5 w-5" />} title="Contact" subtitle="Let’s build something exceptional" />
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
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <div className="grid gap-4">
              <input
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                className="rounded-xl bg-white/5 p-3 text-sm text-white/90 outline-none ring-1 ring-white/10 focus:ring-[var(--accent)]/60"
                placeholder="Your name"
                required
              />
              <input
                type="email"
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
                className="rounded-xl bg-white/5 p-3 text-sm text-white/90 outline-none ring-1 ring-white/10 focus:ring-[var(--accent)]/60"
                placeholder="Email"
                required
              />
              <textarea
                rows={5}
                value={contactMsg}
                onChange={(e) => setContactMsg(e.target.value)}
                className="rounded-xl bg-white/5 p-3 text-sm text-white/90 outline-none ring-1 ring-white/10 focus:ring-[var(--accent)]/60"
                placeholder="What can we build together?"
              />
              <Magnetic>
                <button className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--accent)] px-4 py-3 font-semibold text-slate-900 shadow-lg shadow-[var(--accent)]/30">
                  Send Message <ArrowUpRight className="h-4 w-4" />
                </button>
              </Magnetic>
            </div>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/80"
          >
            <h3 className="text-white font-semibold">Let’s talk</h3>
            <p className="mt-2 text-sm text-white/70">
              I’m open to collaborations, freelance work, and ambitious product ideas.
              Best reach me by email; I reply within 24h.
            </p>
            <div className="mt-4 space-y-2 text-sm">
              <p>
                <span className="text-white/50">Email:</span>{" "}
                <a className="text-white hover:underline" href={`mailto:${RECEIVER_EMAIL}`}>{RECEIVER_EMAIL}</a>
              </p>
              <p><span className="text-white/50">Location:</span> Beirut, Lebanon · Remote-friendly</p>
            </div>
            <div className="mt-6 flex gap-3 text-white/80">
             <a
                aria-label="LinkedIn"
                href="https://www.linkedin.com/in/rony-saadeh1"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a aria-label="Email" href={`mailto:${RECEIVER_EMAIL}`} className="hover:text-white"><Mail className="h-5 w-5" /></a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-8 text-center text-sm text-white/50">
        © {new Date().getFullYear()} Rony Saadeh · Crafted with React, Tailwind, and Framer Motion
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
        "rounded-xl px-3 py-1.5 text-sm transition",
        active ? "bg-white/10 text-white" : "text-white/70 hover:text-white hover:bg-white/5"
      )}
    >
      {children}
    </a>
  );
}

function SectionHeader({ icon, title, subtitle }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div>
        <h2 className="flex items-center gap-2 text-2xl font-bold text-white">
          <span className="grid place-items-center rounded-lg bg-[var(--accent)]/15 p-2 text-[var(--accent)]">{icon}</span>
          {title}
        </h2>
        <p className="mt-1 text-sm text-white/60">{subtitle}</p>
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
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const rot = useTransform(scrollYProgress, [0, 1], [0, 8]);
  return (
    <div ref={ref} className="relative grid place-items-center">
      <div className="relative h-[360px] w-full">
        <motion.div style={{ y: y1, rotate: rot }} className="absolute left-6 top-6 right-12 bottom-12 rounded-3xl border border-white/10 bg-white/5 backdrop-blur" />
        <motion.div style={{ y: y2 }} className="absolute -left-4 bottom-6 h-24 w-24 rounded-xl bg-[var(--accent)]/30 blur-md" />
        <motion.div style={{ y: y2 }} className="absolute right-0 top-0 h-20 w-20 rounded-full bg-[var(--accent)]/20 blur" />
        <div className="absolute inset-0 grid place-items-center">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/40 to-slate-800/20 p-6 shadow-2xl">
            <div className="flex items-center gap-3 text-white/80">
              <div className="h-10 w-10 rounded-xl bg-[var(--accent)]/80 ring-2 ring-white/20 grid place-items-center text-slate-900 font-extrabold">RS</div>
              <div>
                <div className="text-white font-semibold">Premium Interfaces</div>
                <div className="text-xs text-white/60">Flutter · React · Python</div>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3">
              <Badge>FrontEnd</Badge>
              <Badge>BackEnd</Badge>
              <Badge>Firestore</Badge>
              <Badge>Machine Learning</Badge>
              <Badge>Dashboards</Badge>
              <Badge>AI Workflows</Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Badge({ children }) {
  return (
    <span className="rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-center text-[11px] text-white/80">
      {children}
    </span>
  );
}

function ProjectCard({ p, index, onOpen }) {
  const ref = useTilt(8);
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5"
    >
      <div ref={ref} className="p-0 transition-transform will-change-transform">
        <div className="relative aspect-[16/10] overflow-hidden">
          <img src={p.image} alt="" className="h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/0 to-transparent" />
          <div className="absolute left-4 right-4 bottom-4">
            <h3 className="text-xl font-bold text-white drop-shadow">{p.title}</h3>
            <div className="mt-1 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="rounded-full bg-black/40 px-2 py-0.5 text-[10px] text-white/80 ring-1 ring-white/10">{t}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-3 p-4 text-white/80">
          <p className="text-sm text-white/70">{p.description}</p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => onOpen("gallery")}
              className="inline-flex items-center gap-1 text-sm text-[var(--accent)] hover:underline"
            >
              View <ExternalLink className="h-3.5 w-3.5" />
            </button>
            <button
              onClick={() => onOpen("info")}
              className="inline-flex items-center gap-1 text-sm text-white/80 hover:text-white"
            >
              More Info
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
