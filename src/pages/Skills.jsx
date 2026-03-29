import { FiCode, FiServer, FiCpu, FiLayers, FiDatabase } from 'react-icons/fi'
import { SiReact, SiJavascript, SiHtml5, SiTailwindcss, SiNodedotjs, SiExpress, SiMongodb, SiGit, SiGithub, SiPython, SiTensorflow, SiPytorch } from 'react-icons/si'

const skillCategories = [
  {
    icon: FiCode,
    label: 'Frontend',
    number: '01',
    skills: [
      { name: 'React',      icon: SiReact,       level: 90 },
      { name: 'JavaScript', icon: SiJavascript,  level: 88 },
      { name: 'HTML5',      icon: SiHtml5,       level: 95 },
      { name: 'Tailwind',   icon: SiTailwindcss, level: 85 },
    ],
  },
  {
    icon: FiServer,
    label: 'Backend',
    number: '02',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, level: 85 },
      { name: 'Express', icon: SiExpress,   level: 82 },
      { name: 'MongoDB', icon: SiMongodb,   level: 80 },
      { name: 'GitHub',  icon: SiGithub,    level: 90 },
    ],
  },
  {
    icon: FiCpu,
    label: 'AI / ML',
    number: '03',
    skills: [
      { name: 'Python',       icon: SiPython,     level: 82 },
      { name: 'TensorFlow',   icon: SiTensorflow, level: 75 },
      { name: 'Hugging Face', icon: FiCpu,        level: 78 },
      { name: 'YOLO',         icon: FiDatabase,   level: 72 },
    ],
  },
]

function SkillBar({ name, icon: Icon, level }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Icon size={14} style={{ color: 'var(--color-gold-400)' }} />
          <span style={{ fontSize: '0.85rem', color: '#cbd5e1', fontFamily: 'var(--font-body)' }}>{name}</span>
        </div>
        <span style={{ fontSize: '0.75rem', color: 'var(--color-gold-400)', fontFamily: 'var(--font-mono)' }}>{level}%</span>
      </div>
      <div style={{ width: '100%', height: '5px', borderRadius: '9999px', backgroundColor: 'rgba(251,191,36,0.1)' }}>
        <div style={{ width: `${level}%`, height: '100%', borderRadius: '9999px', background: 'linear-gradient(90deg, var(--color-gold-600), var(--color-gold-400))', boxShadow: '0 0 6px rgba(251,191,36,0.4)' }} />
      </div>
    </div>
  )
}

function CategoryCard({ icon: Icon, label, number, skills }) {
  return (
    <div
      style={{ backgroundColor: 'var(--color-navy-800)', border: '1px solid rgba(251,191,36,0.15)', borderRadius: '1rem', padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '1rem', transition: 'border-color 0.3s ease' }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(251,191,36,0.4)' }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(251,191,36,0.15)' }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '32px', height: '32px', borderRadius: '8px', backgroundColor: 'rgba(251,191,36,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Icon size={16} style={{ color: 'var(--color-gold-400)' }} />
          </div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, color: '#f1f5f9', margin: 0 }}>{label}</h3>
        </div>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1.25rem', fontWeight: 900, color: 'rgba(251,191,36,0.12)' }}>{number}</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {skills.map((skill) => (
          <SkillBar key={skill.name} name={skill.name} icon={skill.icon} level={skill.level} />
        ))}
      </div>
    </div>
  )
}

function SectionLabel() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
      <span style={{ fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-gold-400)', fontFamily: 'var(--font-mono)' }}>02. Skills</span>
      <div style={{ height: '1px', width: '60px', backgroundColor: 'rgba(251,191,36,0.3)' }} />
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" style={{ backgroundColor: 'var(--color-navy-900)', width: '100%', padding: '5rem 0' }}>
      <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 1.5rem', width: '100%' }}>
        <SectionLabel />
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.25rem', fontWeight: 900, color: '#f1f5f9', marginBottom: '0.75rem' }}>
          My Tech Stack
        </h2>
        <p style={{ fontFamily: 'var(--font-body)', color: '#94a3b8', marginBottom: '3rem', maxWidth: '500px', lineHeight: 1.7 }}>
          Technologies I work with daily — from building full stack web apps to training and fine-tuning AI models.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', width: '100%' }}>
          {skillCategories.map((cat) => (
            <CategoryCard key={cat.label} icon={cat.icon} label={cat.label} number={cat.number} skills={cat.skills} />
          ))}
        </div>
      </div>
    </section>
  )
}