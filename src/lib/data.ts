export const profile = {
  name: "H4R1SH",
  firstName: "H4r1sh",
  role: "Digital Marketer & AI Automation Builder",
  tagline: "Video Editing • Digital Marketing • AI Automations",
  location: "India",
  email: "hello@h4r1sh.dev",
  phone: "+91 93639 73591",
  resumeUrl: "#",
  availability: "Available for freelance & full-time roles",
  socials: {
    github: "https://github.com/harish-offl",
    linkedin: "https://www.linkedin.com/in/mrmannamalai",
    instagram: "https://instagram.com/h4rish_offl",
    whatsapp: "https://wa.me/919363973591",
  },
  heroDescription:
    "I craft scroll-stopping video content and growth-driven digital marketing, then supercharge it with real-time AI — from email automation to full e-commerce and interview prep tools.",
  about:
    "I'm a digital marketer and video editor who fell in love with building. What started as cutting reels and running ad campaigns grew into engineering real-time AI products. Today I blend creative storytelling with automation — shipping tools that save time, generate leads, and scale brands. Whether it's a high-retention YouTube edit, a performance ad funnel, or an AI that runs your inbox, I build the whole pipeline end to end.",
  stats: [
    { label: "Projects Shipped", value: "12+" },
    { label: "Campaigns Managed", value: "30+" },
    { label: "Video Hours Edited", value: "500+" },
    { label: "AI Tools Built", value: "5" },
  ],
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  icon: string;
  category: "marketing" | "ai";
  featured?: boolean;
  demoUrl?: string;
  sourceUrl?: string;
  highlight?: string;
};

export const marketingProjects: Project[] = [
  {
    title: "Video Editing & Digital Marketing Studio",
    description:
      "End-to-end content engine: high-retention YouTube and short-form edits paired with performance ad creatives, SEO content, and social funnels that turn views into revenue.",
    tags: ["Premiere Pro", "After Effects", "DaVinci", "Meta Ads", "SEO", "Analytics"],
    icon: "video",
    category: "marketing",
    featured: true,
    highlight: "3.4x average ROAS across managed campaigns",
    demoUrl: "#",
  },
  {
    title: "Short-Form Growth Engine",
    description:
      "A repeatable reel/shorts system — hook writing, dynamic captions, trend research, and posting cadence — engineered for algorithmic reach and follower growth.",
    tags: ["Reels", "Shorts", "CapCut", "Trend Research", "Copywriting"],
    icon: "sparkles",
    category: "marketing",
    highlight: "12M+ organic views generated",
    demoUrl: "#",
  },
  {
    title: "Performance Ad Campaign System",
    description:
      "Full-funnel paid social: audience research, creative testing, A/B hooks, and landing-page conversion optimization across Meta and Google.",
    tags: ["Google Ads", "Meta Ads", "A/B Testing", "CRO", "Google Analytics"],
    icon: "target",
    category: "marketing",
    highlight: "Cut cost-per-lead by 47%",
    demoUrl: "#",
  },
];

export const aiProjects: Project[] = [
  {
    title: "AI Email Automation",
    description:
      "Real-time agent that reads, classifies, and auto-drafts replies to inbound email — with smart follow-ups, sentiment tagging, and CRM sync.",
    tags: ["Python", "OpenAI", "IMAP/SMTP", "Next.js", "Cron"],
    icon: "mail",
    category: "ai",
    demoUrl: "#",
    sourceUrl: "#",
  },
  {
    title: "AI Canvas",
    description:
      "An infinite collaborative canvas where an AI co-pilot generates layouts, diagrams, and design assets from a single prompt — with live multiplayer cursors.",
    tags: ["Next.js", "WebSockets", "Canvas API", "LLM", "Zustand"],
    icon: "layout",
    category: "ai",
    demoUrl: "#",
    sourceUrl: "#",
  },
  {
    title: "E-commerce Platform",
    description:
      "A full storefront with cart, checkout, payments, order tracking, and an AI product-recommendation engine that learns shopper behaviour in real time.",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "AI Recs"],
    icon: "shopping",
    category: "ai",
    demoUrl: "#",
    sourceUrl: "#",
  },
  {
    title: "Task Tracker",
    description:
      "A real-time task board with drag-and-drop, team presence, smart deadline reminders, and an AI assistant that auto-prioritizes and breaks down your work.",
    tags: ["React", "Socket.IO", "MongoDB", "AI", "Drag & Drop"],
    icon: "check",
    category: "ai",
    demoUrl: "#",
    sourceUrl: "#",
  },
  {
    title: "AI Mock Interview",
    description:
      "Voice-driven interview simulator with real-time speech-to-text, adaptive questions, instant feedback scoring, and a downloadable performance report.",
    tags: ["OpenAI", "Whisper", "Web Speech API", "Next.js", "Realtime"],
    icon: "mic",
    category: "ai",
    demoUrl: "#",
    sourceUrl: "#",
  },
];

export const allProjects: Project[] = [...marketingProjects, ...aiProjects];

export type SkillGroup = {
  title: string;
  icon: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Video Editing",
    icon: "video",
    skills: [
      "Premiere Pro",
      "After Effects",
      "DaVinci Resolve",
      "CapCut",
      "Motion Graphics",
      "Color Grading",
      "Sound Design",
      "Subtitles",
    ],
  },
  {
    title: "Digital Marketing",
    icon: "trending",
    skills: [
      "Meta Ads",
      "Google Ads",
      "SEO",
      "Content Strategy",
      "Copywriting",
      "Google Analytics",
      "Email Marketing",
      "CRO",
    ],
  },
  {
    title: "AI & Automation",
    icon: "bot",
    skills: [
      "OpenAI API",
      "LangChain",
      "Python",
      "n8n / Zapier",
      "Prompt Engineering",
      "RAG",
      "Speech-to-Text",
      "Automation",
    ],
  },
  {
    title: "Development",
    icon: "code",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "PostgreSQL",
      "MongoDB",
      "REST APIs",
    ],
  },
];

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
  icon: string;
  tools: string[];
};

export const devProcess: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery & Strategy",
    description:
      "Understanding the brand, audience, and goals. Mapping pages, features, and the content structure before a single pixel is placed.",
    icon: "search",
    tools: ["Brief", "Sitemap", "User Flow"],
  },
  {
    step: "02",
    title: "UX / UI Design",
    description:
      "Wireframes into high-fidelity mockups with a clear visual system — typography, color, components, and responsive layouts.",
    icon: "pen",
    tools: ["Figma", "Design System", "Prototype"],
  },
  {
    step: "03",
    title: "Development",
    description:
      "Building fast, accessible, and scalable front-ends with clean code — integrating CMS, payments, and APIs where needed.",
    icon: "code",
    tools: ["Next.js", "React", "Tailwind"],
  },
  {
    step: "04",
    title: "Testing & QA",
    description:
      "Cross-browser and device testing, performance audits, SEO checks, and fixing edge cases before launch.",
    icon: "test",
    tools: ["Lighthouse", "Responsive", "SEO"],
  },
  {
    step: "05",
    title: "Deployment",
    description:
      "Shipping to production with a custom domain, SSL, analytics, and monitoring wired up end to end.",
    icon: "rocket",
    tools: ["Vercel", "Domains", "Analytics"],
  },
  {
    step: "06",
    title: "Support & Growth",
    description:
      "Post-launch updates, conversion tweaks, and continuous improvement based on real user data.",
    icon: "support",
    tools: ["CRO", "Iteration", "Maintenance"],
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const marqueeWords = [
  "Video Editing",
  "Digital Marketing",
  "AI Automation",
  "Content Strategy",
  "Email Automation",
  "E-commerce",
  "Motion Design",
  "Performance Ads",
  "Realtime AI",
  "Mock Interviews",
];
