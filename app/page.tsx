'use client'

import { ArrowUpRight, GitBranch, Link as LinkIcon, Mail, Menu, X, Download, MapPin, Sparkles, BrainCircuit } from 'lucide-react'
import { useState } from 'react'

const categories = ['All', 'Full Stack Development', 'AI / Machine Learning', 'Generative AI', 'Web Development', 'DevOps'] as const

type Project = {
  number: string
  title: string
  description: string
  tags: string[]
  category: (typeof categories)[number][]
  type: string
  github: string
  demo?: string
  gradient: string
}

const projects: Project[] = [
  { number: '01', title: 'NexaMind AI', description: 'An AI-focused application for exploring intelligent workflows and practical product experiences.', tags: ['Python', 'AI', 'JavaScript'], category: ['AI / Machine Learning', 'Generative AI'], type: 'AI / MACHINE LEARNING', github: 'https://github.com/sandeep-rathod-2004/nexamind-ai', gradient: 'from-violet-500/20 via-indigo-500/5 to-transparent' },
  { number: '02', title: 'AgentInvoiceAI', description: 'An invoice workflow project centered on agentic automation and structured financial data.', tags: ['Python', 'AI Agents', 'Automation'], category: ['AI / Machine Learning', 'Generative AI'], type: 'AGENTIC AI', github: 'https://github.com/sandeep-rathod-2004/AgentInvoiceAI', gradient: 'from-fuchsia-500/20 via-violet-500/5 to-transparent' },
  { number: '03', title: 'AI Invoice Audit Agent', description: 'An AI-assisted invoice auditing project designed to help surface issues in business documents.', tags: ['Python', 'AI', 'Document Processing'], category: ['AI / Machine Learning', 'Generative AI'], type: 'AI / AUTOMATION', github: 'https://github.com/sandeep-rathod-2004/ai-invoice-audit-agent', gradient: 'from-amber-300/20 via-orange-400/5 to-transparent' },
  { number: '04', title: 'MERN Gemini Chat', description: 'A full stack chat experience integrating the MERN ecosystem with Google Gemini capabilities.', tags: ['MongoDB', 'Express', 'React', 'Node.js'], category: ['Full Stack Development', 'Generative AI'], type: 'FULL STACK', github: 'https://github.com/sandeep-rathod-2004/mern-gemini-chat', gradient: 'from-cyan-400/20 via-blue-500/5 to-transparent' },
  { number: '05', title: 'Lead Management System', description: 'A system for organizing, tracking, and managing sales leads through a focused web interface.', tags: ['React', 'Node.js', 'MongoDB'], category: ['Full Stack Development', 'Web Development'], type: 'FULL STACK', github: 'https://github.com/sandeep-rathod-2004/LeadManagementSystem', gradient: 'from-emerald-400/20 via-teal-500/5 to-transparent' },
  { number: '06', title: 'TexConnect', description: 'A web project built around connecting people through a clear and approachable product experience.', tags: ['React', 'JavaScript', 'CSS'], category: ['Web Development'], type: 'WEB DEVELOPMENT', github: 'https://github.com/sandeep-rathod-2004/TexConnect', gradient: 'from-sky-400/20 via-cyan-500/5 to-transparent' },
  { number: '07', title: 'Crop Recommendation System', description: 'A machine learning project that recommends suitable crops from agricultural input data.', tags: ['Python', 'Machine Learning', 'Jupyter'], category: ['AI / Machine Learning'], type: 'MACHINE LEARNING', github: 'https://github.com/sandeep-rathod-2004/crop_recommendation_project', gradient: 'from-lime-400/20 via-green-500/5 to-transparent' },
  { number: '08', title: 'Document React Model', description: 'A React-based document modeling project focused on structured content and reusable UI.', tags: ['React', 'JavaScript', 'HTML'], category: ['Web Development'], type: 'WEB DEVELOPMENT', github: 'https://github.com/sandeep-rathod-2004/document_react_model', gradient: 'from-blue-400/20 via-indigo-500/5 to-transparent' },
  { number: '09', title: 'Elevate', description: 'A web development project focused on presenting a polished, purposeful digital experience.', tags: ['HTML', 'CSS', 'JavaScript'], category: ['Web Development'], type: 'WEB DEVELOPMENT', github: 'https://github.com/sandeep-rathod-2004', gradient: 'from-pink-400/20 via-rose-500/5 to-transparent' },
  { number: '10', title: 'Tea Macha', description: 'A tea-focused web experience with a warm visual direction and accessible browsing flow.', tags: ['HTML', 'CSS', 'JavaScript'], category: ['Web Development'], type: 'WEB DEVELOPMENT', github: 'https://github.com/sandeep-rathod-2004', gradient: 'from-yellow-400/20 via-amber-500/5 to-transparent' },
  { number: '11', title: 'Real Estate Premium', description: 'A premium real estate interface designed around clear property discovery and presentation.', tags: ['HTML', 'CSS', 'JavaScript'], category: ['Web Development'], type: 'WEB DEVELOPMENT', github: 'https://github.com/sandeep-rathod-2004', gradient: 'from-stone-400/20 via-zinc-500/5 to-transparent' },
  { number: '12', title: 'LuxeSalon Pro', description: 'A polished salon web concept with a considered layout for services and brand storytelling.', tags: ['HTML', 'CSS', 'JavaScript'], category: ['Web Development'], type: 'WEB DEVELOPMENT', github: 'https://github.com/sandeep-rathod-2004', gradient: 'from-rose-400/20 via-pink-500/5 to-transparent' },
  { number: '13', title: 'Jagari Tea Spot', description: 'A welcoming tea spot web experience built with a strong sense of place and visual identity.', tags: ['HTML', 'CSS', 'JavaScript'], category: ['Web Development'], type: 'WEB DEVELOPMENT', github: 'https://github.com/sandeep-rathod-2004', gradient: 'from-orange-400/20 via-yellow-500/5 to-transparent' },
]

const skills = ['Python', 'React', 'TypeScript', 'Next.js', 'FastAPI', 'SQL', 'AWS']

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="section-label"><span />{children}</p>
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card group">
      <div className={`project-visual bg-gradient-to-br ${project.gradient}`}>
        <div className="project-grid" />
        <div className="project-window">
          <div className="window-bar"><span /><span /><span /><small>{project.type}</small></div>
          <div className="window-content">
            <div className="window-line wide" /><div className="window-line" /><div className="window-line short" />
            <div className="window-chart"><i /><i /><i /><i /><i /><i /><i /></div>
          </div>
        </div>
        <span className="project-number">{project.number}</span>
      </div>
      <div className="project-info">
        <div className="flex items-start justify-between gap-4">
          <div><h3>{project.title}</h3><p>{project.description}</p></div>
          <ArrowUpRight className="mt-1 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" size={19} />
        </div>
        <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
        <div className="project-links"><a href={project.github} target="_blank" rel="noreferrer"><GitBranch size={15} /> GitHub</a>{project.demo ? <a href={project.demo} target="_blank" rel="noreferrer">Live demo <ArrowUpRight size={14} /></a> : <span className="source-label">Source Code Available</span>}</div>
      </div>
    </article>
  )
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>('All')
  const closeMenu = () => setMenuOpen(false)
  const visibleProjects = activeCategory === 'All' ? projects : projects.filter((project) => project.category.includes(activeCategory))

  return (
    <main>
      <nav className="site-nav" aria-label="Main navigation">
        <a className="brand" href="#top" onClick={closeMenu}><span>SR</span> Sandeep Rathod</a>
        <button className="menu-button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          <a href="#about" onClick={closeMenu}>About</a><a href="#work" onClick={closeMenu}>Work</a><a href="#experience" onClick={closeMenu}>Experience</a><a href="#contact" onClick={closeMenu}>Contact</a>
          <a className="nav-cta" href="mailto:sandeep.rathod.dev@gmail.com?subject=Resume%20request" onClick={closeMenu}>Let&apos;s talk <ArrowUpRight size={15} /></a>
        </div>
      </nav>

      <section id="top" className="hero section-wrap">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" /> Available for select opportunities</div>
          <h1>Building digital<br /><em>experiences</em> that matter.</h1>
          <p className="hero-intro">I&apos;m Sandeep, a full stack developer crafting thoughtful products at the intersection of robust engineering and AI.</p>
          <div className="hero-actions"><a className="button button-primary" href="#work">Explore my work <ArrowUpRight size={17} /></a><a className="button button-ghost" href="mailto:sandeep.rathod.dev@gmail.com?subject=Resume%20request"><Download size={16} /> Resume</a></div>
        </div>
        <div className="hero-aside">
          <div className="orbit-art" aria-hidden="true"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit orbit-three" /><div className="orbit-core"><BrainCircuit size={27} /></div></div>
          <p><span>Currently exploring</span><br />How intelligent systems can feel<br />simple, useful, and human.</p>
        </div>
        <div className="scroll-note"><span /> Scroll to explore</div>
      </section>

      <section id="about" className="section-wrap about-section">
        <SectionLabel>01 / About me</SectionLabel>
        <div className="about-grid"><h2>Good software is<br /><span>felt,</span> not noticed.</h2><div className="about-copy"><p>I care about the details that make products feel inevitable — clear interfaces, dependable systems, and thoughtful interactions.</p><p>With a foundation in full stack development and a growing focus on AI engineering, I like working across the entire product surface. From the first idea to the last pixel and production deploy.</p><div className="location"><MapPin size={15} /> Based in India · Working worldwide</div></div></div>
      </section>

      <section id="work" className="section-wrap work-section"><div className="section-heading"><SectionLabel>02 / Selected work</SectionLabel><p>Real repositories, honest details<br />and source code you can explore.</p></div><div className="project-filters" role="tablist" aria-label="Project categories">{categories.map((category) => <button key={category} className={activeCategory === category ? 'is-active' : ''} onClick={() => setActiveCategory(category)} role="tab" aria-selected={activeCategory === category}>{category}</button>)}</div><div className="projects-grid">{visibleProjects.map((project) => <ProjectCard key={project.title} project={project} />)}</div></section>

      <section className="skills-band"><div className="section-wrap skills-inner"><div><SectionLabel>03 / Toolkit</SectionLabel><h2>Tools for turning<br /><em>ideas into impact.</em></h2></div><div className="skills-list">{skills.map((skill, index) => <div className="skill" key={skill}><span>0{index + 1}</span>{skill}</div>)}</div></div></section>

      <section id="experience" className="section-wrap experience-section"><SectionLabel>04 / Experience & education</SectionLabel><div className="timeline"><div className="timeline-item"><div className="timeline-meta">2024 — Present</div><div><h3>Full Stack Developer Intern</h3><p className="muted">Building reliable product experiences across the stack, with a focus on AI-assisted workflows.</p><p className="company">Product Engineering <span>·</span> Remote</p></div></div><div className="timeline-item"><div className="timeline-meta">2021 — 2025</div><div><h3>B.Tech in Computer Science</h3><p className="muted">Developed a strong foundation in algorithms, distributed systems, databases, and software design.</p><p className="company">Computer Science & Engineering</p></div></div></div></section>

      <section id="contact" className="contact-section"><div className="section-wrap contact-inner"><SectionLabel>05 / Get in touch</SectionLabel><h2>Have an idea?<br /><em>Let&apos;s make it real.</em></h2><p>I&apos;m always open to thoughtful conversations, interesting problems, and new ways to build useful things.</p><a className="button button-primary" href="mailto:sandeep.rathod.dev@gmail.com">Start a conversation <ArrowUpRight size={17} /></a><div className="contact-details"><a href="mailto:sandeep.rathod.dev@gmail.com"><Mail size={16} /> sandeep.rathod.dev@gmail.com</a><a href="https://github.com" target="_blank" rel="noreferrer"><GitBranch size={16} /> github.com/sandeeprathod</a><a href="https://linkedin.com" target="_blank" rel="noreferrer"><LinkIcon size={16} /> LinkedIn</a></div></div></section>
      <footer className="site-footer section-wrap"><span>© 2025 Sandeep Rathod</span><span>Designed & built with care <Sparkles size={14} /></span></footer>
    </main>
  )
}
