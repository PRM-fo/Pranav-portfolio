import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';

const IconWrapper = ({ children, className = "w-4 h-4" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>{children}</svg>
);
const ArrowUpRight = (p) => <IconWrapper {...p}><path d="M7 7h10v10"/><path d="M7 17 17 7"/></IconWrapper>;
const Github = (p) => <IconWrapper {...p}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></IconWrapper>;
const Linkedin = (p) => <IconWrapper {...p}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></IconWrapper>;
const Copy = (p) => <IconWrapper {...p}><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></IconWrapper>;
const Check = (p) => <IconWrapper {...p}><path d="M20 6 9 17l-5-5"/></IconWrapper>;
const Shield = (p) => <IconWrapper {...p}><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></IconWrapper>;
const Cpu = (p) => <IconWrapper {...p}><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/></IconWrapper>;
const Menu = (p) => <IconWrapper {...p}><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></IconWrapper>;
const X = (p) => <IconWrapper {...p}><path d="M18 6 6 18"/><path d="m6 6 12 12"/></IconWrapper>;
const ArrowUp = (p) => <IconWrapper {...p}><path d="m5 12 7-7 7 7"/><path d="M12 19V5"/></IconWrapper>;
const Globe = (p) => <IconWrapper {...p}><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></IconWrapper>;

const PROFILE = {
  name: 'Pranav Rakshith.M',
  monogram: 'PR // 01',
  role: 'Developer / Builder / Student',
  status: 'CURRENTLY BUILDING & LEARNING',
  headline: 'I like turning ideas into things people can use.',
  subheadline:
    'Computer Science student exploring software development, cybersecurity, and AI. I learn by building, experimenting, and figuring things out along the way.',
  about:
    "I'm a computer science student who enjoys exploring technology by building things. I like taking an idea, figuring out how it could work, and turning it into something real. I've been experimenting with web development, AI-assisted development, and cybersecurity, and I'm always looking for opportunities to learn from people who approach problems differently. I'm still learning, but I enjoy the process of getting better by actually doing the work.",
  email: 'pranvrm2008@gmail.com',
  github: 'https://github.com/PRM-fo',
  linkedin: 'https://www.linkedin.com/in/pranav-rakshith-m-93b44442b/',
  interests: [
    'Software and web development',
    'Cybersecurity',
    'AI and developer tools',
    'Building useful products',
    'Hackathons and collaborative projects'
  ],
  exploring: [
    {
      title: 'Cybersecurity fundamentals',
      detail: 'Network defense, access control, and database security architectures.'
    },
    {
      title: 'Full-stack development',
      detail: 'Connecting reactive frontends with resilient relational backends.'
    },
    {
      title: 'AI-assisted coding workflows',
      detail: 'Rapid prototyping and turning product specifications into working deployments.'
    },
    {
      title: 'Writing maintainable code',
      detail: 'Component modularity, clean state flow, and predictable architectures.'
    },
    {
      title: 'Building & shipping personal projects',
      detail: 'Taking ideas from local builds to live production environments.'
    }
  ]
};

const PROJECTS = [
  {
    id: '01',
    slug: 'ventosaur',
    title: 'VENTOSAUR',
    status: 'LIVE PRODUCTION',
    category: 'Anonymous Connection & Safety Platform',
    description:
      'An anonymous chat platform designed to make it easier for people to connect with others. Built with an emphasis on user experience, safety, and moderation.',
    problem:
      'Open anonymous platforms often degrade quickly without clear boundaries, safe session handling, and strict database-level access rules.',
    solution:
      'Engineered a component-based React interface backed by Supabase and PostgreSQL, enforcing Row-Level Security (RLS) policies and thoughtful UX patterns focused on safe peer connection.',
    role: 'Creator & Full-Stack Developer — Architected the frontend interface, state interactions, Supabase backend integration, and PostgreSQL Row-Level Security policies.',
    liveUrl: 'https://ventosaurr.vercel.app/',
    repoUrl: 'https://github.com/PRM-fo/v0-ventosaur-listening-heart',
    techStack: [
      { name: 'React', usage: 'Building the component-based frontend' },
      { name: 'JavaScript', usage: 'Frontend interactions and functionality' },
      { name: 'HTML', usage: 'Structuring the web interface' },
      { name: 'CSS', usage: 'Styling, layouts, and visual design' },
      { name: 'Supabase', usage: 'Backend services, database, and authentication' },
      { name: 'PostgreSQL', usage: 'Relational database through Supabase' },
      { name: 'Row-Level Security (RLS)', usage: 'Controlling and isolating database access' },
      { name: 'Vercel', usage: 'Hosting and production deployment' },
      { name: 'Git & GitHub', usage: 'Source control and code repository' },
      { name: 'AI-Assisted / Vibe Coding', usage: 'Iterative development workflow' }
    ]
  },
  {
    id: '02',
    slug: 'hushline',
    title: 'HUSHLINE',
    status: 'LIVE HACKATHON BUILD',
    category: 'AI Text Summarization & Signal Extraction',
    description:
      'An AI-focused project built during a solo vibe-coding hackathon, exploring how AI-assisted development can turn an idea into a working product that summarizes your text and gives you all the important stuff about it.',
    problem:
      'Long-form articles, notes, and dense documentation bury critical takeaways under layers of repetitive text.',
    solution:
      'Built an interactive summarization web app that distills raw input text into structured key points, core takeaways, and actionable highlights in seconds.',
    role: 'Solo Builder — Conceived, designed, and shipped end-to-end during a solo vibe-coding hackathon.',
    liveUrl: 'https://hushline-ai-qbu2.bolt.host',
    repoUrl: 'https://github.com/PRM-fo/HushLine',
    techStack: [
      { name: 'React', usage: 'Interactive summarization interface & state management' },
      { name: 'JavaScript / TypeScript', usage: 'Text processing & client logic' },
      { name: 'Tailwind CSS', usage: 'Responsive layout and typography system' },
      { name: 'AI Summarization Engine', usage: 'Distilling raw text into key takeaways' },
      { name: 'AI-Assisted / Vibe Coding', usage: 'Rapid solo hackathon prototyping to production' },
      { name: 'Git & GitHub', usage: 'Source control and release tracking' }
    ]
  }
];

const WORKFLOW_STEPS = [
  {
    step: '01',
    label: 'BUILD',
    headline: 'Ideas become experiments.',
    description:
      'Start with a concrete friction point—whether it is anonymous peer support or distilling dense text—and scaffold a working prototype quickly using React and modern tooling.',
    telemetry: 'STAGE_01 // PROTOTYPE_INIT'
  },
  {
    step: '02',
    label: 'TEST',
    headline: 'Experiments meet real constraints.',
    description:
      'Push the prototype against real-world edge cases: configuring PostgreSQL Row-Level Security (RLS), verifying authentication boundaries, and refining UI responsiveness.',
    telemetry: 'STAGE_02 // SECURITY_&_UX_VALIDATION'
  },
  {
    step: '03',
    label: 'LEARN',
    headline: 'Experiments become projects.',
    description:
      'Every bug or architectural bottleneck teaches how systems actually behave under the hood—bridging the gap between AI-assisted speed and solid engineering fundamentals.',
    telemetry: 'STAGE_03 // SYSTEM_SYNTHESIS'
  },
  {
    step: '04',
    label: 'REPEAT',
    headline: 'Projects become experience.',
    description:
      'Deploy to production, gather feedback, document the repository, and carry those lessons directly into the next build.',
    telemetry: 'STAGE_04 // CONTINUOUS_SHIPPING'
  }
];

function Interactive3DCanvas({ mode, motionEnabled, scrollProgress }) {
  const mountRef = useRef(null);
  const motionEnabledRef = useRef(motionEnabled);
  const scrollProgressRef = useRef(scrollProgress);

  useEffect(() => {
    motionEnabledRef.current = motionEnabled;
  }, [motionEnabled]);

  useEffect(() => {
    scrollProgressRef.current = scrollProgress;
  }, [scrollProgress]);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    const scene = new THREE.Scene();
    const width = currentMount.clientWidth;
    const height = currentMount.clientHeight;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 6;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    currentMount.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xbef264, 2.5, 50);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    let geometry;
    if (mode === 'TORUS') {
      geometry = new THREE.TorusKnotGeometry(1.4, 0.4, 100, 16);
    } else if (mode === 'LATTICE') {
      geometry = new THREE.IcosahedronGeometry(1.6, 1);
    } else {
      geometry = new THREE.OctahedronGeometry(1.8, 2);
    }

    const material = new THREE.MeshStandardMaterial({
      color: 0x0b0d10,
      roughness: 0.3,
      metalness: 0.8
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const wireframeMat = new THREE.MeshBasicMaterial({
      color: 0xbef264,
      wireframe: true,
      transparent: true,
      opacity: 0.65
    });
    const wireframeMesh = new THREE.Mesh(geometry, wireframeMat);
    scene.add(wireframeMesh);

    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e) => {
      const rect = currentMount.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);

    let animationFrameId;
    const startTime = performance.now();

    const animate = () => {
      const elapsedTime = (performance.now() - startTime) / 1000;

      if (motionEnabledRef.current) {
        mesh.rotation.x = elapsedTime * 0.3 + mouseY * 0.5 + scrollProgressRef.current * 2;
        mesh.rotation.y = elapsedTime * 0.4 + mouseX * 0.5 + scrollProgressRef.current * 3;
        wireframeMesh.rotation.x = mesh.rotation.x;
        wireframeMesh.rotation.y = mesh.rotation.y;
      }

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      if (!currentMount) return;
      const w = currentMount.clientWidth;
      const h = currentMount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      wireframeMat.dispose();
    };
  }, [mode]);

  return <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />;
}

function TiltSurface({ children, className = '', motionEnabled = true }) {
  const [transform, setTransform] = useState('perspective(1100px) rotateX(0deg) rotateY(0deg)');

  const handleMouseMove = (e) => {
    if (!motionEnabled) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    const rotateX = (-y * 4.5).toFixed(2);
    const rotateY = (x * 4.5).toFixed(2);
    setTransform(`perspective(1100px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
  };

  const handleMouseLeave = () => {
    setTransform('perspective(1100px) rotateX(0deg) rotateY(0deg)');
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform, transition: 'transform 220ms cubic-bezier(0.16, 1, 0.3, 1)' }}
      className={className}
    >
      {children}
    </div>
  );
}

export default function App() {
  const [topologyMode, setTopologyMode] = useState('TORUS');
  const [motionEnabled, setMotionEnabled] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [ventosaurTab, setVentosaurTab] = useState('INTERFACE');
  const [sampleInputIdx, setSampleInputIdx] = useState(0);
  const [activeWorkflowIdx, setActiveWorkflowIdx] = useState(0);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) setMotionEnabled(false);

    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const current = window.scrollY;
      setScrollProgress(totalScroll > 0 ? current / totalScroll : 0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const HUSHLINE_SAMPLES = [
    {
      label: 'System Architecture Note',
      raw: 'Row-Level Security (RLS) in PostgreSQL enables fine-grained access control directly at the database layer. Instead of relying solely on client filtering, policies evaluate every query against authenticated session attributes before returning or mutating rows.',
      bullets: [
        'Enforces access rules directly inside PostgreSQL.',
        'Prevents unauthorized reads/writes even if client keys are exposed.',
        'Evaluates per-row policies dynamically using session context.'
      ],
      takeaway: 'Database-level RLS guarantees defense-in-depth for client-connected apps.'
    },
    {
      label: 'Hackathon Build Log',
      raw: 'During a solo vibe-coding sprint, the primary goal is reducing the loop between a product concept and a functional user interface. By pairing structured prompts with modular React components, core text summarization features were shipped and deployed to a live host.',
      bullets: [
        'Minimizes latency between initial concept and live deployment.',
        'Combines AI-assisted workflows with modular React state.',
        'Focuses strictly on shipping a usable core product.'
      ],
      takeaway: 'AI-assisted workflows accelerate prototyping when paired with clear product scope.'
    }
  ];

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3 group focus:outline-none">
            <span className="w-8 h-8 border border-[#BEF264]/60 bg-[#BEF264]/10 flex items-center justify-center font-mono text-xs font-semibold text-[#BEF264] group-hover:bg-[#BEF264] group-hover:text-[#070809] transition-colors">
              PR
            </span>
            <div className="flex flex-col">
              <span className="font-mono text-xs tracking-widest text-white font-semibold">
                PRANAV
              </span>
              <span className="font-mono text-[10px] text-neutral-400 tracking-wider">
                DEV // BUILDER // STUDENT
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8 font-mono text-xs tracking-wider text-neutral-300">
            <a href="#projects" className="hover:text-[#BEF264] transition-colors">01. PROJECTS</a>
            <a href="#about" className="hover:text-[#BEF264] transition-colors">02. ABOUT</a>
            <a href="#exploring" className="hover:text-[#BEF264] transition-colors">03. EXPLORING</a>
            <a href="#workflow" className="hover:text-[#BEF264] transition-colors">04. PROCESS</a>
            <a href="#contact" className="hover:text-[#BEF264] transition-colors">05. CONTACT</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setMotionEnabled(!motionEnabled)}
              className="px-3 py-1.5 border border-white/15 bg-white/[0.02] hover:border-[#BEF264]/50 font-mono text-[11px] tracking-wider text-neutral-300 flex items-center gap-2 transition-colors cursor-pointer"
            >
              <span className={`w-2 h-2 rounded-full ${motionEnabled ? 'bg-[#BEF264]' : 'bg-neutral-500'}`} />
              3D MOTION: {motionEnabled ? 'ON' : 'OFF'}
            </button>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 border border-white/15 hover:border-white/40 font-mono text-[11px] tracking-wider text-white flex items-center gap-1.5 transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              GITHUB
              <ArrowUpRight className="w-3 h-3 text-[#BEF264]" />
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 border border-white/15 text-neutral-200 hover:border-[#BEF264]"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-b border-white/10 bg-[#070809] px-4 pt-3 pb-6 space-y-3 font-mono text-xs">
            <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-neutral-200 hover:text-[#BEF264]">01 // FEATURED PROJECTS</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-neutral-200 hover:text-[#BEF264]">02 // ABOUT ME</a>
            <a href="#exploring" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-neutral-200 hover:text-[#BEF264]">03 // CURRENTLY EXPLORING</a>
            <a href="#workflow" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-neutral-200 hover:text-[#BEF264]">04 // BUILD → TEST → LEARN</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-neutral-200 hover:text-[#BEF264]">05 // CONTACT</a>
          </div>
        )}
      </header>

      <main id="top" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="py-12 md:py-20 lg:py-24 border-b border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2.5 px-3 py-1.5 border border-[#BEF264]/30 bg-[#BEF264]/[0.06]">
                <span className="w-2 h-2 rounded-full bg-[#BEF264] animate-pulse" />
                <span className="font-mono text-[11px] tracking-widest text-[#BEF264] uppercase">
                  {PROFILE.status}
                </span>
              </div>

              <div className="space-y-2">
                <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.2em] text-neutral-400">
                  PRANAV — {PROFILE.role}
                </p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.06] text-white">
                  {PROFILE.headline}
                </h1>
              </div>

              <p className="text-base sm:text-lg text-neutral-300 max-w-2xl leading-relaxed">
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

              <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl">
                <a
                  href="https://ventosaurr.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 border border-white/10 bg-white/[0.02] hover:border-[#BEF264]/50 flex items-center justify-between transition-colors"
                >
                  <div>
                    <span className="font-mono text-[10px] text-[#BEF264] block">PROJECT 01 // LIVE</span>
                    <span className="text-sm font-medium text-white group-hover:text-[#BEF264] transition-colors">Ventosaur Platform</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-[#BEF264]" />
                </a>

                <a
                  href="https://hushline-ai-qbu2.bolt.host"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 border border-white/10 bg-white/[0.02] hover:border-[#BEF264]/50 flex items-center justify-between transition-colors"
                >
                  <div>
                    <span className="font-mono text-[10px] text-[#BEF264] block">PROJECT 02 // LIVE</span>
                    <span className="text-sm font-medium text-white group-hover:text-[#BEF264] transition-colors">HushLine Summarizer</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-[#BEF264]" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="border border-white/15 bg-[#0B0D10] relative overflow-hidden">
                <div className="px-4 py-2.5 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
                  <span className="font-mono text-[11px] text-neutral-300 flex items-center gap-2">
                    <Cpu className="w-3.5 h-3.5 text-[#BEF264]" />
                    THREE.JS WEBGL 3D // DRAG TO ORBIT
                  </span>
                  <span className="font-mono text-[10px] text-[#BEF264]">60 FPS</span>
                </div>

                <div className="h-[340px] sm:h-[380px] relative">
                  <Interactive3DCanvas
                    mode={topologyMode}
                    motionEnabled={motionEnabled}
                    scrollProgress={scrollProgress}
                  />
                  <div className="absolute bottom-3 left-3 pointer-events-none font-mono text-[10px] text-neutral-400 bg-[#070809]/80 px-2.5 py-1 border border-white/10">
                    MESH: {topologyMode} // WEBGL LIGHTING & SHADING
                  </div>
                </div>

                <div className="grid grid-cols-3 border-t border-white/10 font-mono text-[11px]">
                  {['TORUS', 'LATTICE', 'SHIELD'].map((m) => (
                    <button
                      key={m}
                      onClick={() => setTopologyMode(m)}
                      className={`py-2.5 text-center tracking-wider transition-colors cursor-pointer ${
                        topologyMode === m
                          ? 'bg-[#BEF264] text-[#070809] font-semibold'
                          : 'text-neutral-400 hover:text-white hover:bg-white/[0.03]'
                      }`}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-16 md:py-24 border-b border-white/10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#BEF264] mb-2">
                01 // SELECTED ENGINEERING WORK
              </p>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
                Featured Projects
              </h2>
            </div>
            <p className="font-mono text-xs text-neutral-400 max-w-md">
              Verified repositories and live deployments. Built to solve real problems with clean frontend state and secure backends.
            </p>
          </div>

          <div className="space-y-16">
            <TiltSurface
              motionEnabled={motionEnabled}
              className="border border-white/15 bg-[#0B0D10] p-6 sm:p-8 lg:p-10 relative"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
                <div className="lg:col-span-6 space-y-6">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-4">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs px-2.5 py-1 bg-[#BEF264]/15 text-[#BEF264] border border-[#BEF264]/40">
                        PROJECT 01
                      </span>
                      <span className="font-mono text-xs text-neutral-400">
                        {PROJECTS[0].category}
                      </span>
                    </div>
                    <span className="font-mono text-[11px] text-[#BEF264] flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#BEF264]" />
                      {PROJECTS[0].status}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-3">
                      {PROJECTS[0].title}
                    </h3>
                    <p className="text-neutral-300 leading-relaxed text-base">
                      {PROJECTS[0].description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="p-4 border border-white/10 bg-white/[0.02]">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-[#BEF264] block mb-1">
                        PROBLEM STATEMENT
                      </span>
                      <p className="text-xs text-neutral-300 leading-relaxed">
                        {PROJECTS[0].problem}
                      </p>
                    </div>
                    <div className="p-4 border border-white/10 bg-white/[0.02]">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-[#BEF264] block mb-1">
                        WHAT IT DOES & ROLE
                      </span>
                      <p className="text-xs text-neutral-300 leading-relaxed">
                        {PROJECTS[0].role}
                      </p>
                    </div>
                  </div>

                  <div>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-400 block mb-2.5">
                      VERIFIED REPOSITORY TECH STACK
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {PROJECTS[0].techStack.map((t) => (
                        <span
                          key={t.name}
                          className="px-2.5 py-1 border border-white/15 bg-white/[0.03] font-mono text-xs text-neutral-200"
                          title={t.usage}
                        >
                          {t.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <a
                      href={PROJECTS[0].liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 bg-[#BEF264] text-[#070809] font-mono text-xs font-semibold uppercase tracking-wider hover:bg-[#d2f987] transition-colors flex items-center gap-2"
                    >
                      <Globe className="w-3.5 h-3.5" />
                      Launch Live App
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={PROJECTS[0].repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 border border-white/20 hover:border-[#BEF264] text-white font-mono text-xs uppercase tracking-wider transition-colors flex items-center gap-2"
                    >
                      <Github className="w-3.5 h-3.5" />
                      GitHub Repo
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#BEF264]" />
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-6 flex flex-col justify-between border border-white/10 bg-[#070809]">
                  <div className="border-b border-white/10 px-4 py-2.5 flex flex-wrap items-center justify-between gap-2 bg-white/[0.02]">
                    <span className="font-mono text-[11px] text-neutral-400">
                      VENTOSAUR // INTERACTIVE INSPECTOR
                    </span>
                    <div className="flex gap-1 font-mono text-[10px]">
                      {['INTERFACE', 'RLS SECURITY', 'STACK USAGE'].map((tab) => (
                        <button
                          key={tab}
                          onClick={() => setVentosaurTab(tab)}
                          className={`px-2.5 py-1 transition-colors cursor-pointer ${
                            ventosaurTab === tab
                              ? 'bg-[#BEF264] text-[#070809] font-semibold'
                              : 'text-neutral-400 hover:text-white border border-white/10'
                          }`}
                        >
                          {tab}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between min-h-[300px]">
                    {ventosaurTab === 'INTERFACE' && (
                      <div className="space-y-4">
                        <div className="flex items-center justify-between border-b border-white/10 pb-3">
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#BEF264]" />
                            <span className="font-mono text-xs text-white">
                              ANONYMOUS SESSION // LISTENING HEART
                            </span>
                          </div>
                          <span className="font-mono text-[10px] px-2 py-0.5 border border-[#BEF264]/40 text-[#BEF264]">
                            MODERATION ACTIVE
                          </span>
                        </div>

                        <div className="space-y-3 font-sans text-xs">
                          <div className="p-3 border border-white/10 bg-white/[0.02] max-w-[85%]">
                            <span className="font-mono text-[10px] text-neutral-400 block mb-1">
                              PEER_NODE // ANONYMOUS
                            </span>
                            <p className="text-neutral-200">
                              Sometimes you just need a quiet space to talk through overwhelming weeks without judgment.
                            </p>
                          </div>
                          <div className="p-3 border border-[#BEF264]/30 bg-[#BEF264]/[0.05] max-w-[85%] ml-auto">
                            <span className="font-mono text-[10px] text-[#BEF264] block mb-1">
                              LISTENER_SESSION // VERIFIED RLS
                            </span>
                            <p className="text-neutral-100">
                              You are connected in an isolated session. Safety controls and reporting boundaries are active.
                            </p>
                          </div>
                        </div>

                        <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                          <span>SUPABASE REALTIME + POSTGRESQL</span>
                          <a
                            href={PROJECTS[0].liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#BEF264] hover:underline flex items-center gap-1"
                          >
                            OPEN LIVE DEPLOYMENT <ArrowUpRight className="w-3 h-3" />
                          </a>
                        </div>
                      </div>
                    )}

                    {ventosaurTab === 'RLS SECURITY' && (
                      <div className="space-y-4 font-mono text-xs">
                        <div className="p-3 border border-[#BEF264]/30 bg-[#BEF264]/[0.05] text-[#BEF264] flex items-center gap-2">
                          <Shield className="w-4 h-4 shrink-0" />
                          <span>PostgreSQL Row-Level Security (RLS) Access Control Flow</span>
                        </div>
                        <div className="space-y-2.5 text-neutral-300">
                          <div className="p-3 border border-white/10 bg-white/[0.02]">
                            <span className="text-white font-semibold block">
                              1. Client Request (React + Supabase SDK)
                            </span>
                            <span className="text-neutral-400 text-[11px]">
                              Scoped session token attached to every database read/write operation.
                            </span>
                          </div>
                          <div className="p-3 border border-white/10 bg-white/[0.02]">
                            <span className="text-white font-semibold block">
                              2. PostgreSQL RLS Policy Verification
                            </span>
                            <span className="text-neutral-400 text-[11px]">
                              Database verifies session permissions before exposing chat records.
                            </span>
                          </div>
                          <div className="p-3 border border-white/10 bg-white/[0.02]">
                            <span className="text-white font-semibold block">
                              3. User Safety & Moderation Focus
                            </span>
                            <span className="text-neutral-400 text-[11px]">
                              Designed to protect user privacy while preventing unauthorized table queries.
                            </span>
                          </div>
                        </div>
                      </div>
                    )}

                    {ventosaurTab === 'STACK USAGE' && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-[280px] overflow-y-auto pr-1">
                        {PROJECTS[0].techStack.map((item) => (
                          <div key={item.name} className="p-2.5 border border-white/10 bg-white/[0.02]">
                            <span className="font-mono text-xs text-[#BEF264] font-semibold block">
                              {item.name}
                            </span>
                            <span className="text-[11px] text-neutral-300">{item.usage}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </TiltSurface>

            <TiltSurface
              motionEnabled={motionEnabled}
              className="border border-white/15 bg-[#0B0D10] p-6 sm:p-8 lg:p-10 relative"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
                <div className="lg:col-span-6 space-y-6">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-4">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs px-2.5 py-1 bg-[#BEF264]/15 text-[#BEF264] border border-[#BEF264]/40">
                        PROJECT 02
                      </span>
                      <span className="font-mono text-xs text-neutral-400">
                        {PROJECTS[1].category}
                      </span>
                    </div>
                    <span className="font-mono text-[11px] text-[#BEF264] flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#BEF264]" />
                      {PROJECTS[1].status}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-3">
                      {PROJECTS[1].title}
                    </h3>
                    <p className="text-neutral-300 leading-relaxed text-base">
                      {PROJECTS[1].description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="p-4 border border-white/10 bg-white/[0.02]">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-[#BEF264] block mb-1">
                        PROBLEM STATEMENT
                      </span>
                      <p className="text-xs text-neutral-300 leading-relaxed">
                        {PROJECTS[1].problem}
                      </p>
                    </div>
                    <div className="p-4 border border-white/10 bg-white/[0.02]">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-[#BEF264] block mb-1">
                        SOLO HACKATHON ROLE
                      </span>
                      <p className="text-xs text-neutral-300 leading-relaxed">
                        {PROJECTS[1].role}
                      </p>
                    </div>
                  </div>

                  <div>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-400 block mb-2.5">
                      TECHNOLOGY & WORKFLOW
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {PROJECTS[1].techStack.map((t) => (
                        <span
                          key={t.name}
                          className="px-2.5 py-1 border border-white/15 bg-white/[0.03] font-mono text-xs text-neutral-200"
                        >
                          {t.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <a
                      href={PROJECTS[1].liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 bg-[#BEF264] text-[#070809] font-mono text-xs font-semibold uppercase tracking-wider hover:bg-[#d2f987] transition-colors flex items-center gap-2"
                    >
                      <Globe className="w-3.5 h-3.5" />
                      Launch Live Project
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={PROJECTS[1].repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 border border-white/20 hover:border-[#BEF264] text-white font-mono text-xs uppercase tracking-wider transition-colors flex items-center gap-2"
                    >
                      <Github className="w-3.5 h-3.5" />
                      GitHub Repo
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#BEF264]" />
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-6 flex flex-col justify-between border border-white/10 bg-[#070809]">
                  <div className="border-b border-white/10 px-4 py-2.5 flex flex-wrap items-center justify-between gap-2 bg-white/[0.02]">
                    <span className="font-mono text-[11px] text-neutral-400">
                      HUSHLINE // SIGNAL EXTRACTION PREVIEW
                    </span>
                    <div className="flex gap-1 font-mono text-[10px]">
                      {HUSHLINE_SAMPLES.map((s, idx) => (
                        <button
                          key={s.label}
                          onClick={() => setSampleInputIdx(idx)}
                          className={`px-2.5 py-1 transition-colors cursor-pointer ${
                            sampleInputIdx === idx
                              ? 'bg-[#BEF264] text-[#070809] font-semibold'
                              : 'text-neutral-400 hover:text-white border border-white/10'
                          }`}
                        >
                          SAMPLE 0{idx + 1}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
                    <div className="p-3 border border-white/10 bg-white/[0.02]">
                      <span className="font-mono text-[10px] text-neutral-400 uppercase block mb-1">
                        SOURCE INPUT // {HUSHLINE_SAMPLES[sampleInputIdx].label}
                      </span>
                      <p className="text-xs text-neutral-300 leading-relaxed">
                        "{HUSHLINE_SAMPLES[sampleInputIdx].raw}"
                      </p>
                    </div>

                    <div className="p-3.5 border border-[#BEF264]/30 bg-[#BEF264]/[0.04] space-y-2">
                      <span className="font-mono text-[10px] text-[#BEF264] uppercase tracking-wider block">
                        EXTRACTED KEY POINTS
                      </span>
                      <ul className="space-y-1.5 text-xs text-neutral-200">
                        {HUSHLINE_SAMPLES[sampleInputIdx].bullets.map((b) => (
                          <li key={b} className="flex items-start gap-2">
                            <span className="text-[#BEF264] font-mono">→</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="pt-2 border-t border-white/10 font-mono text-[11px] text-white">
                        CORE TAKEAWAY: {HUSHLINE_SAMPLES[sampleInputIdx].takeaway}
                      </div>
                    </div>

                    <div className="pt-2 flex items-center justify-between font-mono text-[11px] text-neutral-400">
                      <span>SOLO VIBE-CODING HACKATHON</span>
                      <a
                        href={PROJECTS[1].liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#BEF264] hover:underline flex items-center gap-1"
                      >
                        TRY FULL LIVE APP <ArrowUpRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </TiltSurface>
          </div>
        </section>

        <section id="about" className="py-16 md:py-24 border-b border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#BEF264] mb-2">
                02 // PERSPECTIVE & FOUNDATION
              </p>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-4">
                About Me
              </h2>
              <p className="font-mono text-xs text-neutral-400 leading-relaxed">
                First-year Computer Science Engineering student focused on learning by shipping real software.
              </p>
            </div>

            <div className="lg:col-span-7 space-y-8">
              <p className="text-lg sm:text-xl text-neutral-200 leading-relaxed font-normal">
                {PROFILE.about}
              </p>

              <div className="border-t border-white/10 pt-6">
                <span className="font-mono text-xs uppercase tracking-widest text-[#BEF264] block mb-4">
                  AREAS OF INTEREST (EXPLORING & BUILDING)
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {PROFILE.interests.map((interest, idx) => (
                    <div
                      key={interest}
                      className="p-3.5 border border-white/10 bg-white/[0.02] flex items-center gap-3"
                    >
                      <span className="font-mono text-xs text-[#BEF264]">0{idx + 1}</span>
                      <span className="text-sm text-neutral-200">{interest}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="exploring" className="py-16 md:py-24 border-b border-white/10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#BEF264] mb-2">
                03 // MORE THAN JUST PROJECTS
              </p>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
                Currently Exploring
              </h2>
            </div>
            <span className="font-mono text-xs text-neutral-400">
              ACTIVE LEARNING TRACKS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROFILE.exploring.map((item, index) => (
              <div
                key={item.title}
                className="p-6 border border-white/15 bg-[#0B0D10] hover:border-[#BEF264]/50 transition-colors flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs text-[#BEF264] block mb-3">
                    TRACK // 0{index + 1}
                  </span>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    {item.detail}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between font-mono text-[10px] text-neutral-400">
                  <span>STATUS: ACTIVE</span>
                  <span className="text-[#BEF264]">HANDS-ON</span>
                </div>
              </div>
            ))}

            <div className="p-6 border border-[#BEF264]/40 bg-[#BEF264]/[0.04] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs text-[#BEF264] flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5" />
                    DEDICATED LEARNING TRACK
                  </span>
                  <span className="font-mono text-[10px] px-2 py-0.5 border border-[#BEF264]/40 text-[#BEF264]">
                    IN PROGRESS
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Google Cybersecurity Certificate
                </h3>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  Studying core security frameworks, network defense, Linux command-line tools, and incident response workflows to build safer web applications.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between font-mono text-[10px] text-neutral-300">
                <span>STATUS: CURRENTLY STUDYING</span>
                <span className="text-[#BEF264]">FOUNDATIONS</span>
              </div>
            </div>
          </div>
        </section>

        <section id="workflow" className="py-16 md:py-24 border-b border-white/10">
          <div className="mb-10">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#BEF264] mb-2">
              04 // DEVELOPMENT PHILOSOPHY
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
              BUILD → TEST → LEARN → REPEAT
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-1 gap-3">
              {WORKFLOW_STEPS.map((item, idx) => (
                <button
                  key={item.step}
                  onClick={() => setActiveWorkflowIdx(idx)}
                  className={`p-4 text-left border transition-colors cursor-pointer flex items-center justify-between ${
                    activeWorkflowIdx === idx
                      ? 'border-[#BEF264] bg-[#BEF264]/10 text-white'
                      : 'border-white/10 bg-[#0B0D10] text-neutral-400 hover:border-white/30'
                  }`}
                >
                  <div>
                    <span className="font-mono text-[10px] text-[#BEF264] block">
                      STEP {item.step}
                    </span>
                    <span className="font-mono text-base font-semibold tracking-wider">
                      {item.label}
                    </span>
                  </div>
                  <span className="font-mono text-xs text-[#BEF264]">→</span>
                </button>
              ))}
            </div>

            <div className="lg:col-span-7 border border-white/15 bg-[#0B0D10] p-6 sm:p-10 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3 font-mono text-xs text-[#BEF264]">
                  <span>{WORKFLOW_STEPS[activeWorkflowIdx].telemetry}</span>
                  <span>
                    0{activeWorkflowIdx + 1} / 0{WORKFLOW_STEPS.length}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-semibold text-white">
                  {WORKFLOW_STEPS[activeWorkflowIdx].headline}
                </h3>
                <p className="text-neutral-300 leading-relaxed text-base">
                  {WORKFLOW_STEPS[activeWorkflowIdx].description}
                </p>
              </div>

              <div className="pt-8 mt-8 border-t border-white/10 grid grid-cols-3 gap-4 font-mono text-[11px] text-neutral-400">
                <div>
                  <span className="text-white block">Ideas</span>
                  <span>become experiments.</span>
                </div>
                <div>
                  <span className="text-white block">Experiments</span>
                  <span>become projects.</span>
                </div>
                <div>
                  <span className="text-[#BEF264] block">Projects</span>
                  <span>become experience.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 md:py-24">
          <div className="border border-white/15 bg-[#0B0D10] p-8 sm:p-12 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-4">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#BEF264]">
                  05 // DIRECT CHANNELS
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
                    <span className="font-mono text-[10px] text-[#BEF264] uppercase block">
                      EMAIL ADDRESS
                    </span>
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
                      <span className="font-mono text-[10px] text-neutral-400 uppercase block">
                        GITHUB REPOSITORIES
                      </span>
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
                      <span className="font-mono text-[10px] text-neutral-400 uppercase block">
                        LINKEDIN NETWORK
                      </span>
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-neutral-400">
          <div>
            © {new Date().getFullYear()} {PROFILE.name}. Built with React, Tailwind CSS & Three.js WebGL.
          </div>
          <a
            href="#top"
            className="text-neutral-300 hover:text-[#BEF264] flex items-center gap-1.5 transition-colors"
          >
            BACK TO TOP
            <ArrowUp className="w-3.5 h-3.5 text-[#BEF264]" />
          </a>
        </div>
      </footer>
    </div>
  );
}