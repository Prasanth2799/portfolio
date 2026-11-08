import {
  FaAws,
  FaBootstrap,
  FaBrain,
  FaBriefcase,
  FaCss3Alt,
  FaGithub,
  FaGraduationCap,
  FaHtml5,
  FaJs,
  FaLaptopCode,
  FaNodeJs,
  FaReact,
  FaRocket,
} from "react-icons/fa";
import { MdDevices } from "react-icons/md";
import {
  SiExpress,
  SiFirebase,
  SiGithubcopilot,
  SiJsonwebtokens,
  SiMongodb,
  SiMongoose,
  SiNextdotjs,
  SiOpenai,
  SiPostman,
  SiRedux,
  SiSocketdotio,
  SiTailwindcss,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { VscCodeReview } from "react-icons/vsc";

export const personalInfo = {
  name: "Lenka Prasanth Kumar",
  preferredName: "Prasanth",
  monogram: "PK",
  title: "Senior Frontend Developer",
  tagline: "Architecting high-performance, accessible, and human-centric digital experiences.",
  availability: "Available for full-time & high-impact frontend roles",
  location: "India · Open to Worldwide Remote",
  email: "prasanthlenka2@gmail.com",
  resumePath: "/Lenka_Prasanth_Kumar_Full_Stack_Developer_Resume.pdf",
  socialLinks: {
    github: "https://github.com/Prasanth2799",
    linkedin: "https://www.linkedin.com/in/lenka-prasanth-kumar/",
    email: "mailto:prasanthlenka2@gmail.com",
  },
  stats: [
    { value: "4.5+", label: "Years Experience", detail: "TCS & Infosys (BFSI & Enterprise)" },
    { value: "10+", label: "Projects Shipped", detail: "Modern React & Scalable MERN" },
    { value: "98%", label: "Accessibility & Perf", detail: "Core Web Vitals & Clean Code" },
  ],
};

export const navItems = [
  { id: "about", label: "About", href: "#about" },
  { id: "skills", label: "Skills", href: "#skills" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "journey", label: "Journey", href: "#journey" },
  { id: "contact", label: "Contact", href: "#contact" },
];

export const aboutHighlights = [
  {
    icon: FaLaptopCode,
    title: "Thoughtful Interfaces",
    description: "Designing responsive, intuitive UI systems optimized around real human ergonomics and frictionless workflows.",
    accent: "from-emerald-500/20 to-transparent",
  },
  {
    icon: VscCodeReview,
    title: "Maintainable Architecture",
    description: "Developing scalable design systems, modular component libraries, and predictable state patterns.",
    accent: "from-blue-500/20 to-transparent",
  },
  {
    icon: FaBrain,
    title: "AI-Augmented Delivery",
    description: "Harnessing LLMs, OpenAI APIs, and prompt workflows to accelerate turnaround without compromising fidelity.",
    accent: "from-purple-500/20 to-transparent",
  },
  {
    icon: FaRocket,
    title: "Performance by Default",
    description: "Obsessively optimizing Core Web Vitals, bundle footprints, accessibility (WCAG), and responsive rendering.",
    accent: "from-amber-500/20 to-transparent",
  },
];

export const skillCategories = [
  { id: "all", label: "All Arsenal" },
  { id: "frontend", label: "Frontend & UI" },
  { id: "backend", label: "Backend & DB" },
  { id: "ai", label: "AI & Modern Stack" },
  { id: "tools", label: "Architecture & DevOps" },
];

export const skillsList = [
  // Frontend
  { name: "React 19", category: "frontend", icon: FaReact, color: "#61dafb", badge: "Core" },
  { name: "Next.js", category: "frontend", icon: SiNextdotjs, color: "#ffffff", badge: "SSR / App Router" },
  { name: "JavaScript", category: "frontend", icon: FaJs, color: "#f7df1e", badge: "ESNext / Async" },
  { name: "Tailwind CSS", category: "frontend", icon: SiTailwindcss, color: "#38bdf8", badge: "Modern UI" },
  { name: "Redux Toolkit", category: "frontend", icon: SiRedux, color: "#764abc", badge: "State Mgmt" },
  { name: "HTML5", category: "frontend", icon: FaHtml5, color: "#e34f26", badge: "Semantic" },
  { name: "CSS3", category: "frontend", icon: FaCss3Alt, color: "#1572b6", badge: "Layout & Motion" },
  { name: "Bootstrap", category: "frontend", icon: FaBootstrap, color: "#7952b3", badge: "Grid Systems" },
  { name: "Responsive Design", category: "frontend", icon: MdDevices, color: "#10b981", badge: "Mobile First" },

  // Backend & Cloud
  { name: "Node.js", category: "backend", icon: FaNodeJs, color: "#339933", badge: "Server Runtime" },
  { name: "Express.js", category: "backend", icon: SiExpress, color: "#e4e4e7", badge: "REST Framework" },
  { name: "MongoDB", category: "backend", icon: SiMongodb, color: "#47a248", badge: "NoSQL DB" },
  { name: "Mongoose", category: "backend", icon: SiMongoose, color: "#880000", badge: "Data Modeling" },
  { name: "REST APIs", category: "backend", icon: TbApi, color: "#0ea5e9", badge: "API Design" },
  { name: "Socket.io", category: "backend", icon: SiSocketdotio, color: "#ffffff", badge: "WebSockets" },
  { name: "AWS", category: "backend", icon: FaAws, color: "#ff9900", badge: "Cloud Infra" },
  { name: "Firebase", category: "backend", icon: SiFirebase, color: "#ffca28", badge: "BaaS & Auth" },

  // AI & Innovation
  { name: "OpenAI API", category: "ai", icon: SiOpenai, color: "#10a37f", badge: "LLM Orchestration" },
  { name: "GitHub Copilot", category: "ai", icon: SiGithubcopilot, color: "#a855f7", badge: "AI Pair Dev" },
  { name: "AI Integration", category: "ai", icon: FaBrain, color: "#ec4899", badge: "Product Workflows" },

  // Architecture & Tools
  { name: "Code Review", category: "tools", icon: VscCodeReview, color: "#3b82f6", badge: "Quality & Standards" },
  { name: "JWT Auth", category: "tools", icon: SiJsonwebtokens, color: "#d63aff", badge: "Security" },
  { name: "Git & GitHub", category: "tools", icon: FaGithub, color: "#f05032", badge: "Version Control" },
  { name: "Postman", category: "tools", icon: SiPostman, color: "#ff6c37", badge: "API Testing" },
];

export const projectsList = [
  {
    id: 1,
    name: "Dev Connect",
    badge: "Full-Stack MERN",
    badgeType: "emerald",
    photo: "/Dev Connect.png",
    subtitle: "Developer Networking & Community Hub",
    description:
      "A developer networking ecosystem engineered for developers to discover peers, showcase skills, collaborate on projects, and unlock career opportunities in tech.",
    highlights: [
      "Custom JWT authentication & session handling with encrypted passwords",
      "Dynamic developer profiles with portfolio links, skill tags & social accounts",
      "Clean modular REST API built with Express, Node.js, and MongoDB",
    ],
    live_link: "https://www.dev-connectcom.site/login",
    github_url: "https://github.com/Prasanth2799/devConnect",
    stack: ["React", "Node.js", "MongoDB", "Express", "JWT Auth", "REST APIs"],
  },
  {
    id: 2,
    name: "Netflix GPT",
    badge: "AI-Powered Streaming",
    badgeType: "purple",
    photo: "/Netflix GPT.png",
    subtitle: "Conversational Movie Intelligence & Streaming UI",
    description:
      "A cinema discovery platform featuring AI-powered natural language recommendations, real-time TMDB movie data, and a Netflix-inspired streaming interface.",
    highlights: [
      "Integrated OpenAI GPT APIs to parse conversational movie search queries",
      "Centralized global state management leveraging Redux Toolkit",
      "Fully responsive dark-mode cinema layout built with Tailwind CSS",
    ],
    live_link: "https://moviz-gpt-lpk99.netlify.app/",
    github_url: "https://github.com/Prasanth2799/netflix-gpt",
    stack: ["React", "Redux Toolkit", "OpenAI API", "Tailwind CSS", "TMDB API"],
  },
];

export const experienceData = [
  {
    period: "July 2026 – Present",
    company: "Tata Consultancy Services",
    role: "Senior Frontend Developer",
    domain: "BFSI (Banking & Financial Services)",
    summary:
      "Spearheading frontend solutions in the BFSI sector, building mission-critical client interfaces with an uncompromising focus on accessibility, state management, and high-velocity user flows.",
    achievements: [
      "Engineered reusable component architecture adopted across client-facing banking workflows.",
      "Optimized rendering pipelines, reducing initial load latency and ensuring smooth 60fps transitions.",
      "Collaborated closely with cross-functional product, UX, and security teams on enterprise requirements.",
    ],
    tags: ["React 19", "JavaScript", "Component Systems", "BFSI Domain", "Accessibility", "Performance"],
  },
  {
    period: "May 2022 – July 2026",
    company: "Infosys",
    role: "Senior Systems Associate – Frontend Developer",
    domain: "Financial & Manufacturing Business Units",
    summary:
      "Engineered frontend applications for large-scale financial and manufacturing operations, optimizing enterprise workflows and delivering reliable, cross-browser digital interfaces.",
    achievements: [
      "Modernized legacy screens into responsive, intuitive workflows used daily by enterprise staff.",
      "Integrated RESTful API endpoints and maintained consistent data flow with error resilience.",
      "Participated actively in peer code reviews, ensuring adherence to coding standards and best practices.",
    ],
    tags: ["React", "JavaScript", "REST APIs", "Responsive Design", "Enterprise Delivery", "Code Review"],
  },
];

export const educationData = [
  {
    period: "2022",
    institution: "NxtWave CCBP 4.0 Intensive Program",
    degree: "Full-Stack MERN Specialization",
    description:
      "Completed intensive hands-on software development program covering data structures, MERN architecture, REST APIs, and production deployment.",
    achievements: [
      "MERN Architecture (MongoDB, Express, React, Node)",
      "REST API design & SQL/NoSQL fundamentals",
      "Production project execution and testing",
    ],
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JavaScript"],
  },
  {
    period: "2017 – 2020",
    institution: "B.Sc (MPC - Mathematics, Physics, Chemistry)",
    degree: "Bachelor of Science",
    description:
      "Completed graduation in MPC, establishing a strong foundation in analytical reasoning, quantitative problem solving, and structured deduction.",
    achievements: [
      "Analytical reasoning and mathematical problem solving",
      "Applied science methodology and algorithmic thinking",
    ],
    tags: ["Problem Solving", "Logical Reasoning", "Analytical Thinking"],
  },
];
