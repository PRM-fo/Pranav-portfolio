import React, { useState } from 'react';

const IconWrapper = ({ children, className = "w-4 h-4" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>{children}</svg>
);
const ArrowUpRight = (p) => <IconWrapper {...p}><path d="M7 7h10v10"/><path d="M7 17 17 7"/></IconWrapper>;
const Github = (p) => <IconWrapper {...p}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></IconWrapper>;
const Linkedin = (p) => <IconWrapper {...p}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></IconWrapper>;
const Copy = (p) => <IconWrapper {...p}><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></IconWrapper>;
const Check = (p) => <IconWrapper {...p}><path d="M20 6 9 17l-5-5"/></IconWrapper>;
const Shield = (p) => <IconWrapper {...p}><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></IconWrapper>;
const Menu = (p) => <IconWrapper {...p}><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></IconWrapper>;
const X = (p) => <IconWrapper {...p}><path d="M18 6 6 18"/><path d="m6 6 12 12"/></IconWrapper>;
const ArrowUp = (p) => <IconWrapper {...p}><path d="m5 12 7-7 7 7"/><path d="M12 19V5"/></IconWrapper>;
const Globe = (p) => <IconWrapper {...p}><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></IconWrapper>;

const PROFILE = {
  name: 'Pranav Rakshith.M',
  role: 'Developer / Builder / Student',
  headline: 'I like turning ideas into things people can use.',
  subheadline:
    'Computer Science student exploring software development, cybersecurity, and AI. I learn by building, experimenting, and figuring things out along the way.',
  about:
    "I'm a first-year computer science student who enjoys exploring technology by building things. I like taking an idea, figuring out how it could work, and turning it into something real. I've been experimenting with web development, AI-assisted development, and cybersecurity, and I'm always looking for opportunities to learn from people who approach problems differently.",
  email: 'pranvrm2008@gmail.com',
  github: 'https://github.com/PRM-fo',
  linkedin: 'https://www.linkedin.com/in/pranav-rakshith-m-93b44442b/'
};

const PROJECTS = [
  {
    id: '01',
    title: 'VENTOSAUR',
    status: 'LIVE',
    category: 'Anonymous Connection & Safety Platform',
    description:
      'An anonymous chat platform designed to make it easier for people to connect with others. Built with an emphasis on user experience, safety, and moderation.',
    problem:
      'Open anonymous platforms degrade quickly without clear boundaries, safe session handling, and strict database-level access rules.',
    role: 'Creator & full-stack developer. Built the React frontend, the Supabase integration, and the PostgreSQL Row-Level Security policies that isolate who can read and write chat data.',
    liveUrl: 'https://ventosaurr.vercel.app/',
    repoUrl: 'https://github.com/PRM-fo/v0-ventosaur-listening-heart',
    liveLabel: 'Launch Live App',
    stack: ['React', 'Supabase', 'PostgreSQL RLS', 'Vercel']
  },
  {
    id: '02',
    title: 'HUSHLINE',
    status: 'LIVE',
    category: 'AI Text Summarization',
    description:
      'Built solo during a vibe-coding hackathon. A web app that takes long text and gives you the key points and takeaways.',
    problem:
      'Long articles, notes, and documentation bury the important takeaways under repetitive text.',
    role: 'Solo builder. Conceived, designed, and shipped it end-to-end during the hackathon.',
    liveUrl: 'https://hushline-ai-qbu2.bolt.host',
    repoUrl: 'https://github.com/PRM-fo/HushLine',
    liveLabel: 'Launch Live App',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'AI summarization']
  }
];

const NAV = [
  { href: '#projects', label: 'PROJECTS' },
  { href: '#about', label: 'ABOUT' },
  { href: '#contact', label: 'CONTACT' }
];

function ProjectCard({ project }) {
  return (
    <article className="border border-white/15 bg-[#0B0D10] p-6 sm:p-8 lg:p-10">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-4 mb-6">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs px-2.5 py-1 bg-[#BEF264]/15 text-[#BEF264] border border-[#BEF264]/40">
            PROJECT {project.id}
          </span>
          <span className="font-mono text-xs text-neutral-300">{project.category}</span>
        </div>
        <span className="font-mono text-xs text-[#BEF264] flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#BEF264]" />
          {project.status}
        </span>
      </div>

      <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-3">
        {project.title}
      </h3>
      <p className="text-neutral-300 leading-relaxed text-base max-w-3xl">{project.description}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 max-w-4xl">
        <div className="p-4 border border-white/10 bg-white/[0.02]">
          <span className="font-mono text-xs uppercase tracking-wider text-[#BEF264] block mb-1.5">
            Problem
          </span>
          <p className="text-sm text-neutral-300 leading-relaxed">{project.problem}</p>
        </div>
        <div className="p-4 border border-white/10 bg-white/[0.02]">
          <span className="font-mono text-xs uppercase tracking-wider text-[#BEF264] block mb-1.5">
            My role
          </span>
          <p className="text-sm text-neutral-300 leading-relaxed">{project.role}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mt-6">
        {project.stack.map((s) => (
          <span
            key={s}
            className="px-2.5 py-1 border border-white/15 bg-white/[0.03] font-mono text-xs text-neutral-200"
          >
            {s}
          </span>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 bg-[#BEF264] text-[#070809] font-mono text-xs font-semibold uppercase tracking-wider hover:bg-[#d2f987] transition-colors flex items-center gap-2"
        >
          <Globe className="w-3.5 h-3.5" />
          {project.liveLabel}
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 border border-white/20 hover:border-[#BEF264] text-white font-mono text-xs uppercase tracking-wider transition-colors flex items-center gap-2"
        >
          <Github className="w-3.5 h-3.5" />
          GitHub Repo
          <ArrowUpRight className="w-3.5 h-3.5 text-[#BEF264]" />
        </a>
      </div>
    </article>
  );
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  return (
    <div className="min-h-screen bg-[#070809] text-[#F3F4F6] selection:bg-[#BEF264] selection:text-[#070809] font-sans antialiased overflow-x-hidden">
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.035] z-0"
        style={{
          backgroundImage:
            'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '64px 64px'
        }}
      />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070809]/85 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3 group focus:outline-none">
            <span className="w-8 h-8 border border-[#BEF264]/60 bg-[#BEF264]/10 flex items-center justify-center font-mono text-xs font-semibold text-[#BEF264] group-hover:bg-[#BEF264] group-hover:text-[#070809] transition-colors">
              PR
            </span>
            <span className="font-mono text-sm tracking-widest text-white font-semibold">
              PRANAV
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8 font-mono text-xs tracking-wider text-neutral-300">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="hover:text-[#BEF264] transition-colors">
                {n.label}
              </a>
            ))}
          </nav>

          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex px-3 py-1.5 border border-white/15 hover:border-white/40 font-mono text-xs tracking-wider text-white items-center gap-1.5 transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
            GITHUB
            <ArrowUpRight className="w-3 h-3 text-[#BEF264]" />
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 border border-white/15 text-neutral-200 hover:border-[#BEF264]"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-b border-white/10 bg-[#070809] px-4 pt-3 pb-6 space-y-1 font-mono text-sm">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2.5 text-neutral-200 hover:text-[#BEF264]"
              >
                {n.label}
              </a>
            ))}
          </div>
        )}
      </header>

      <main id="top" className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="py-16 md:py-24 lg:py-32 border-b border-white/10">
          <div className="max-w-3xl space-y-6">
            <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.2em] text-[#BEF264]">
              {PROFILE.name} — {PROFILE.role}
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.06] text-white">
              {PROFILE.headline}
            </h1>
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
              {PROFILE.subheadline}
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="px-6 py-3.5 bg-[#BEF264] text-[#070809] font-mono text-xs font-semibold tracking-wider uppercase hover:bg-[#d2f987] transition-colors flex items-center gap-2"
              >
                Explore my work
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="px-6 py-3.5 border border-white/20 hover:border-[#BEF264] text-white font-mono text-xs tracking-wider uppercase transition-colors"
              >
                Get in touch
              </a>
            </div>
          </div>
        </section>

        <section id="projects" className="py-16 md:py-24 border-b border-white/10">
          <div className="mb-10">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#BEF264] mb-2">
              Selected work
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
              Projects
            </h2>
          </div>
          <div className="space-y-10">
            {PROJECTS.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </section>

        <section id="about" className="py-16 md:py-24 border-b border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#BEF264] mb-2">
                Background
              </p>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
                About
              </h2>
            </div>

            <div className="lg:col-span-8 space-y-8">
              <p className="text-lg sm:text-xl text-neutral-200 leading-relaxed">
                {PROFILE.about}
              </p>

              <div className="p-5 border border-[#BEF264]/40 bg-[#BEF264]/[0.04]">
                <div className="flex items-center justify-between mb-2 gap-3">
                  <span className="font-mono text-xs text-[#BEF264] flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5" />
                    CURRENTLY STUDYING
                  </span>
                  <span className="font-mono text-xs px-2 py-0.5 border border-[#BEF264]/40 text-[#BEF264]">
                    IN PROGRESS
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">
                  Google Cybersecurity Certificate
                </h3>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  Security frameworks, network defense, Linux command-line tools, and incident response, to build safer web applications.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 md:py-24">
          <div className="border border-white/15 bg-[#0B0D10] p-8 sm:p-12 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-4">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#BEF264]">
                  Contact
                </p>
                <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white">
                  Have an idea? Let's build something.
                </h2>
                <p className="text-neutral-300 text-base sm:text-lg max-w-xl leading-relaxed">
                  I'm always open to meeting people who enjoy building things, exchanging ideas, and learning together.
                </p>
              </div>

              <div className="lg:col-span-5 space-y-3">
                <div className="p-4 border border-white/15 bg-[#070809] flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <span className="font-mono text-xs text-[#BEF264] uppercase block">Email</span>
                    <a
                      href={`mailto:${PROFILE.email}`}
                      className="font-mono text-xs sm:text-sm text-white hover:text-[#BEF264] truncate block"
                    >
                      {PROFILE.email}
                    </a>
                  </div>
                  <button
                    onClick={copyEmail}
                    className="px-3 py-2 border border-white/15 hover:border-[#BEF264] font-mono text-xs text-neutral-200 flex items-center gap-1.5 shrink-0 cursor-pointer"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#BEF264]" />
                        COPIED
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        COPY
                      </>
                    )}
                  </button>
                </div>

                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 border border-white/15 bg-[#070809] hover:border-[#BEF264] flex items-center justify-between transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Github className="w-5 h-5 text-[#BEF264]" />
                    <div>
                      <span className="font-mono text-xs text-neutral-300 uppercase block">GitHub</span>
                      <span className="font-mono text-xs sm:text-sm text-white group-hover:text-[#BEF264]">
                        github.com/PRM-fo
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-[#BEF264]" />
                </a>

                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 border border-white/15 bg-[#070809] hover:border-[#BEF264] flex items-center justify-between transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-5 h-5 text-[#BEF264]" />
                    <div>
                      <span className="font-mono text-xs text-neutral-300 uppercase block">LinkedIn</span>
                      <span className="font-mono text-xs sm:text-sm text-white group-hover:text-[#BEF264]">
                        in/pranav-rakshith-m-93b44442b
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-[#BEF264]" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#070809] py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-neutral-300">
          <div>© {new Date().getFullYear()} {PROFILE.name}</div>
          <a
            href="#top"
            className="hover:text-[#BEF264] flex items-center gap-1.5 transition-colors"
          >
            BACK TO TOP
            <ArrowUp className="w-3.5 h-3.5 text-[#BEF264]" />
          </a>
        </div>
      </footer>
    </div>
  );
}
