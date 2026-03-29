import { FiCode, FiCpu, FiDatabase, FiGlobe } from 'react-icons/fi'

const stats = [
  { number: '2+',  label: 'Years Experience' },
  { number: '15+', label: 'Projects Built'   },
  { number: '5+',  label: 'AI Models Tuned'  },
  { number: '3+',  label: 'Happy Clients'    },
]

const highlights = [
  { icon: FiCode,     title: 'Full Stack Dev', desc: 'Building end-to-end web apps with React, Node.js and MongoDB'              },
  { icon: FiCpu,      title: 'AI / ML',        desc: 'Fine-tuning image detection models and working with Hugging Face'           },
  { icon: FiDatabase, title: 'Backend',        desc: 'REST APIs, database design and server architecture with Node.js'            },
  { icon: FiGlobe,    title: 'Frontend',       desc: 'Responsive, accessible and beautiful UIs with React and Tailwind'           },
]

function StatCard({ number, label }) {
  return (
    <div className="flex flex-col items-center justify-center p-6 rounded-2xl text-center" style={{ backgroundColor: 'var(--color-navy-800)', border: '1px solid rgba(251,191,36,0.15)' }}>
      <span className="text-4xl font-black mb-1" style={{ fontFamily: 'var(--font-display)', background: 'linear-gradient(135deg, var(--color-gold-300), var(--color-gold-500))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
        {number}
      </span>
      <span className="text-sm text-slate-400" style={{ fontFamily: 'var(--font-body)' }}>
        {label}
      </span>
    </div>
  )
}

function HighlightCard({ icon: Icon, title, desc }) {
  return (
    <div className="flex gap-4 p-5 rounded-xl transition-all duration-300" style={{ backgroundColor: 'var(--color-navy-800)', border: '1px solid rgba(251,191,36,0.1)' }} onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(251,191,36,0.4)' }} onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(251,191,36,0.1)' }}>
      <div className="shrink-0 w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'rgba(251,191,36,0.1)' }}>
        <Icon size={18} style={{ color: 'var(--color-gold-400)' }} />
      </div>
      <div className="flex flex-col gap-1">
        <h4 className="text-slate-100 font-semibold text-sm" style={{ fontFamily: 'var(--font-body)' }}>{title}</h4>
        <p className="text-slate-400 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>{desc}</p>
      </div>
    </div>
  )
}

function SectionLabel() {
  return (
    <div className="flex items-center gap-4 mb-4">
      <span className="text-xs tracking-[0.2em] uppercase" style={{ color: 'var(--color-gold-400)', fontFamily: 'var(--font-mono)' }}>
        01. About Me
      </span>
      <div className="h-px w-15" style={{ backgroundColor: 'rgba(251,191,36,0.3)' }} />
    </div>
  )
}

function BioSection() {
  return (
    <div className="flex flex-col gap-6 flex-1 min-w-75">
      <p className="text-slate-300 leading-[1.9] text-[1rem]" style={{ fontFamily: 'var(--font-body)' }}>
        Hey! I am <strong className="text-slate-100">Usama Malik</strong>, a passionate
        Full Stack Developer based in Pakistan. I love building things for the web — from
        clean responsive frontends to robust backend systems.
      </p>
      <p className="text-slate-400 leading-[1.9] text-[1rem]" style={{ fontFamily: 'var(--font-body)' }}>
        Beyond web development, I have a deep passion for
        <strong className="text-slate-200"> Artificial Intelligence and Machine Learning</strong>.
        I enjoy fine-tuning image detection models, experimenting with
        <strong className="text-slate-200"> Hugging Face</strong> transformers, and pushing
        the boundaries of what AI can do in real-world applications.
      </p>
      <p className="text-slate-400 leading-[1.9] text-[1rem]" style={{ fontFamily: 'var(--font-body)' }}>
        When I am not coding, I am exploring new AI research papers, contributing to
        open source, or experimenting with new tech stacks. I believe in writing
        clean, maintainable code that solves real problems.
      </p>
      <div className="flex gap-4 mt-2">
        <button className="btn-primary px-4! py-1! font-semibold" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
          Hire Me
        </button>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-outline px-4! py-1! font-semibold">
          Download CV
        </a>
      </div>
    </div>
  )
}

function StatsSection() {
  return (
    <div className="flex flex-col gap-8 flex-1 min-w-75">
      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat) => (
          <StatCard key={stat.label} number={stat.number} label={stat.label} />
        ))}
      </div>
      <div className="flex flex-col gap-3">
        {highlights.map((item) => (
          <HighlightCard key={item.title} icon={item.icon} title={item.title} desc={item.desc} />
        ))}
      </div>
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="relative py-20! w-full" style={{ backgroundColor: 'var(--color-navy-950)' }}>
      <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 1.5rem', width: '100%' }}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionLabel />
        <h2 className="text-4xl font-black text-slate-100 mb-16" style={{ fontFamily: 'var(--font-display)' }}>
          Who I Am
        </h2>
        <div className="flex gap-16 flex-wrap">
          <BioSection />
          <StatsSection />
        </div>
      </div>
      </div>
    </section>
  )
}