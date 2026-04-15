/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Layers, 
  Cpu, 
  Globe, 
  Terminal,
  ChevronDown,
  User,
  Briefcase,
  Wrench,
  MessageSquare,
  Sun,
  Moon,
  Zap,
  Cloud,
  Home
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

const projects = [
  {
    title: "Aura Intelligence",
    description: "An AI-driven sentiment analysis engine that processes millions of social signals to predict market trends with 94% accuracy.",
    tech: ["React", "TypeScript", "Python", "FastAPI", "Redis"],
    image: "https://picsum.photos/seed/ai/800/600",
    link: "#",
    github: "#"
  },
  {
    title: "Vortex Cloud",
    description: "A serverless deployment platform that simplifies multi-cloud orchestration for high-growth engineering teams.",
    tech: ["Go", "Kubernetes", "Docker", "Terraform"],
    image: "https://picsum.photos/seed/cloud/800/600",
    link: "#",
    github: "#"
  },
  {
    title: "Lumina UI",
    description: "A high-performance design system and component library focused on accessibility and fluid motion.",
    tech: ["React", "Tailwind CSS", "Framer Motion", "Storybook"],
    image: "https://picsum.photos/seed/design/800/600",
    link: "#",
    github: "#"
  },
  {
    title: "Chronos Ledger",
    description: "A distributed immutable database designed for high-throughput financial auditing and compliance.",
    tech: ["Rust", "gRPC", "PostgreSQL", "Kafka"],
    image: "https://picsum.photos/seed/finance/800/600",
    link: "#",
    github: "#"
  }
];

const skills = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Motion"] },
  { category: "Backend", items: ["Node.js", "Go", "Python", "PostgreSQL", "Redis"] },
  { category: "DevOps", items: ["Docker", "Kubernetes", "AWS", "CI/CD", "Terraform"] },
  { category: "Core", items: ["Algorithms", "System Design", "Security", "Performance"] }
];

export default function App() {
  const [theme, setTheme] = useState('drake');

  const themes = [
    { id: 'minimalist', icon: Sun, label: 'Light' },
    { id: 'dark', icon: Moon, label: 'Dark' },
    { id: 'cyber', icon: Zap, label: 'Cyber' },
    { id: 'nordic', icon: Cloud, label: 'Nordic' },
    { id: 'drake', icon: User, label: 'Drake' },
  ];

  useEffect(() => {
    document.body.className = theme === 'minimalist' ? '' : `theme-${theme}`;
  }, [theme]);

  if (theme === 'drake') {
    return (
      <div className="min-h-screen bg-[#1f1f1f] text-white font-sans selection:bg-[#28e98c] selection:text-[#1f1f1f]">
        {/* Theme Switcher (Floating) */}
        <div className="fixed top-6 right-6 z-[100] flex items-center gap-2 p-1 bg-white/5 backdrop-blur-md rounded-full border border-white/10">
          {themes.map((t) => (
            <button
              key={t.id}
              onClick={() => setTheme(t.id)}
              className={`p-1.5 rounded-full transition-all ${
                theme === t.id 
                ? 'bg-[#28e98c] text-[#1f1f1f]' 
                : 'text-zinc-500 hover:text-white'
              }`}
            >
              <t.icon size={14} />
            </button>
          ))}
        </div>

        <div className="max-w-[1400px] mx-auto px-6 py-12 lg:py-24 grid lg:grid-cols-[380px_1fr] gap-12 lg:gap-24 relative">
          
          {/* Left Sidebar (Fixed-ish) */}
          <aside className="lg:sticky lg:top-24 h-fit">
            <div className="drake-sidebar rounded-[2.5rem] p-10 flex flex-col gap-8">
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold tracking-tight">Relebohile <span className="text-xs align-top">©</span></span>
                <span className="text-[10px] text-right uppercase tracking-widest leading-tight text-zinc-500">
                  Software Developer<br />& Engineer
                </span>
              </div>

              <div className="aspect-square rounded-[2rem] overflow-hidden bg-zinc-800">
                <img 
                  src="https://picsum.photos/seed/relebohile/600/600" 
                  alt="Profile" 
                  className="w-full h-full object-cover grayscale"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="text-center space-y-2">
                <a href="mailto:hello@relebohile.dev" className="text-lg font-medium hover:text-[#28e98c] transition-colors">
                  hello@relebohile.dev
                </a>
                <p className="text-zinc-500 text-sm">Base in Johannesburg, SA</p>
              </div>

              <div className="flex justify-center gap-4">
                {[Github, Linkedin, Mail, Globe].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-500 hover:text-[#28e98c] hover:border-[#28e98c] transition-all">
                    <Icon size={18} />
                  </a>
                ))}
              </div>

              <Button className="w-full h-14 rounded-full bg-[#28e98c] hover:bg-[#28e98c]/90 text-[#1f1f1f] font-bold uppercase tracking-widest text-xs gap-2">
                <Mail size={16} />
                Hire Me!
              </Button>
            </div>
          </aside>

          {/* Right Content */}
          <main className="space-y-32">
            {/* Intro Section */}
            <section id="home" className="pt-12">
              <div className="drake-badge inline-flex items-center gap-2 mb-12">
                <Home size={12} className="text-zinc-500" />
                <span>Introduce</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight mb-12">
                Say Hi from <span className="text-[#28e98c]">Relebohile</span>,<br />
                Software Developer and Engineer
              </h1>

              <p className="text-zinc-500 text-lg max-w-xl leading-relaxed mb-16">
                I design and code beautifully simple things and I love what I do. 
                Just simple like that!
              </p>

              <div className="relative w-40 h-40 flex items-center justify-center">
                <div className="absolute inset-0 drake-circle-text">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                    <text className="text-[8px] uppercase tracking-[0.2em] fill-zinc-500 font-bold">
                      <textPath xlinkHref="#circlePath">
                        My Projects • My Projects • My Projects •
                      </textPath>
                    </text>
                  </svg>
                </div>
                <ChevronDown size={32} className="text-white" />
              </div>

              <div className="grid grid-cols-2 gap-12 mt-24">
                <div>
                  <div className="text-6xl font-bold text-[#28e98c] mb-2">5+</div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 leading-relaxed">
                    Years of<br />Experience
                  </div>
                </div>
                <div>
                  <div className="text-6xl font-bold text-[#28e98c] mb-2">40+</div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 leading-relaxed">
                    Projects completed on<br />5 countries
                  </div>
                </div>
              </div>
            </section>

            {/* Projects Section */}
            <section id="work">
              <div className="drake-badge inline-flex items-center gap-2 mb-12">
                <Briefcase size={12} className="text-zinc-500" />
                <span>Portfolio</span>
              </div>
              <h2 className="text-4xl font-bold mb-12">Featured <span className="text-[#28e98c]">Projects</span></h2>
              
              <div className="grid gap-12">
                {projects.map((project) => (
                  <div key={project.title} className="group cursor-pointer">
                    <div className="aspect-[16/9] rounded-[2.5rem] overflow-hidden bg-zinc-800 mb-8 relative">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute bottom-8 left-8 flex gap-2">
                        {project.tech.map(t => (
                          <span key={t} className="bg-black/50 backdrop-blur-md px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold group-hover:text-[#28e98c] transition-colors mb-2">{project.title}</h3>
                    <p className="text-zinc-500">{project.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Skills Section */}
            <section id="skills">
              <div className="drake-badge inline-flex items-center gap-2 mb-12">
                <Wrench size={12} className="text-zinc-500" />
                <span>My Skills</span>
              </div>
              <h2 className="text-4xl font-bold mb-12">My <span className="text-[#28e98c]">Advantages</span></h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {skills.flatMap(s => s.items).map((skill) => (
                  <div key={skill} className="border border-white/10 rounded-[2rem] p-8 flex flex-col items-center gap-4 hover:border-[#28e98c] transition-colors group">
                    <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center group-hover:bg-[#28e98c] group-hover:text-[#1f1f1f] transition-colors">
                      <Code2 size={24} />
                    </div>
                    <span className="text-sm font-bold uppercase tracking-widest text-zinc-500 group-hover:text-white transition-colors">{skill}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="pb-32">
              <div className="drake-badge inline-flex items-center gap-2 mb-12">
                <MessageSquare size={12} className="text-zinc-500" />
                <span>Contact</span>
              </div>
              <h2 className="text-4xl font-bold mb-12">Let's Work <span className="text-[#28e98c]">Together!</span></h2>
              
              <div className="space-y-8">
                <p className="text-3xl font-medium">hello@relebohile.dev</p>
                <div className="flex gap-8">
                  {['LinkedIn', 'GitHub', 'Twitter', 'Instagram'].map(social => (
                    <a key={social} href="#" className="text-sm font-bold uppercase tracking-widest text-zinc-500 hover:text-[#28e98c] transition-colors">
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </section>
          </main>

          {/* Vertical Nav (Floating Right) */}
          <nav className="fixed right-12 top-1/2 -translate-y-1/2 hidden xl:block">
            <div className="drake-nav-vertical flex flex-col gap-6">
              {[
                { id: 'home', icon: Home, label: 'Home' },
                { id: 'work', icon: Briefcase, label: 'Portfolio' },
                { id: 'skills', icon: Wrench, label: 'Skills' },
                { id: 'contact', icon: MessageSquare, label: 'Contact' }
              ].map((item) => (
                <a 
                  key={item.id} 
                  href={`#${item.id}`} 
                  className="p-3 text-zinc-500 hover:text-[#28e98c] transition-colors group relative"
                  title={item.label}
                >
                  <item.icon size={20} />
                  <span className="absolute right-full mr-4 px-2 py-1 bg-zinc-800 text-[10px] uppercase tracking-widest rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {item.label}
                  </span>
                </a>
              ))}
            </div>
          </nav>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans selection:bg-[var(--primary)] selection:text-[var(--primary-foreground)] transition-colors duration-300">
      {/* Navigation */}
      <nav className="sticky top-0 w-full z-50 bg-[var(--background)]/80 backdrop-blur-sm border-b border-[var(--border)]">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold tracking-tight">RN</span>
          
          <div className="flex items-center gap-8">
            <div className="hidden md:flex gap-6 text-xs font-medium uppercase tracking-wider text-[var(--muted)]">
              <a href="#work" className="hover:text-[var(--foreground)] transition-colors">Work</a>
              <a href="#about" className="hover:text-[var(--foreground)] transition-colors">About</a>
              <a href="#contact" className="hover:text-[var(--foreground)] transition-colors">Contact</a>
            </div>

            <div className="flex items-center gap-2 p-1 bg-[var(--border)] rounded-full">
              {themes.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTheme(t.id)}
                  className={`p-1.5 rounded-full transition-all ${
                    theme === t.id 
                    ? 'bg-[var(--background)] text-[var(--primary)] shadow-sm' 
                    : 'text-[var(--muted)] hover:text-[var(--foreground)]'
                  }`}
                  title={t.label}
                >
                  <t.icon size={14} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6">
        {/* Hero Section */}
        <section className="py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Relebohile Ntsetselane
            </h1>
            <p className="text-xl text-[var(--muted)] leading-relaxed max-w-2xl">
              Software Developer. I build clean, functional, and scalable digital products 
              with a focus on simplicity and technical excellence.
            </p>
          </motion.div>
        </section>

        {/* Work Section */}
        <section id="work" className="py-20 border-t border-[var(--border)]">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--muted)] mb-12 opacity-50">Selected Projects</h2>
          <div className="grid grid-cols-1 gap-16">
            {projects.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group grid md:grid-cols-2 gap-8 items-center"
              >
                <div className="aspect-[4/3] bg-[var(--accent)] overflow-hidden rounded-[var(--radius)] border border-[var(--border)]">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className={`w-full h-full object-cover transition-all duration-500 ${theme === 'cyber' ? 'hue-rotate-90' : 'grayscale hover:grayscale-0'}`}
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-[var(--muted)] mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map(t => (
                      <span key={t} className="text-[10px] font-medium text-[var(--muted)] bg-[var(--accent)] px-2 py-1 rounded-[var(--radius)]">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a href={project.github} className="text-[var(--muted)] hover:text-[var(--primary)] transition-colors">
                      <Github size={18} />
                    </a>
                    <a href={project.link} className="text-[var(--muted)] hover:text-[var(--primary)] transition-colors">
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 border-t border-[var(--border)]">
          <div className="grid md:grid-cols-[1fr_2fr] gap-12">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--muted)] opacity-50">About</h2>
            <div className="space-y-6 text-[var(--muted)] leading-relaxed">
              <p>
                I am a developer who values clarity and performance. My goal is to create software 
                 that solves real problems without unnecessary complexity.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-4">
                {skills.map(group => (
                  <div key={group.category}>
                    <h4 className="text-xs font-bold text-[var(--foreground)] uppercase mb-3">{group.category}</h4>
                    <ul className="text-sm space-y-1 text-[var(--muted)] opacity-80">
                      {group.items.map(item => <li key={item}>{item}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 border-t border-[var(--border)] text-center">
          <h2 className="text-2xl font-bold mb-6">Get in touch</h2>
          <p className="text-[var(--muted)] mb-10 max-w-md mx-auto">
            I'm always interested in hearing about new projects and opportunities.
          </p>
          <div className="flex justify-center gap-8">
            <a href="mailto:relebohile@example.com" className="text-sm font-bold border-b-2 border-[var(--primary)] pb-1">Email</a>
            <a href="#" className="text-sm font-bold border-b-2 border-[var(--primary)] pb-1">LinkedIn</a>
            <a href="#" className="text-sm font-bold border-b-2 border-[var(--primary)] pb-1">GitHub</a>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-[var(--border)]">
        <div className="max-w-4xl mx-auto px-6 flex justify-between items-center text-[10px] font-bold text-[var(--muted)] opacity-30 uppercase tracking-widest">
          <span>© 2024 Relebohile Ntsetselane</span>
          <span>Theme: {theme}</span>
        </div>
      </footer>
    </div>
  );
}
