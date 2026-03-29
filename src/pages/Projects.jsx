import { useState } from 'react'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const projects = [
  {
    category: 'web',
    title: 'Portfolio Website',
    description: 'A fully responsive personal portfolio built with React, Vite, Tailwind and Redux Toolkit featuring smooth animations and EmailJS contact form.',
    tags: ['React', 'Tailwind', 'Redux', 'Vite'],
    github: 'https://github.com/UsamaMAlik01',
    live: '',
    featured: true,
  },
  {
    category: 'web',
    title: 'Full Stack App',
    description: 'A complete MERN stack application with authentication, REST API, and MongoDB database. Features JWT auth and protected routes.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    github: 'https://github.com/UsamaMAlik01',
    live: '',
    featured: false,
  },
  {
    category: 'web',
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce platform with product listings, cart management, and payment integration built with React and Node.js.',
    tags: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
    github: 'https://github.com/UsamaMAlik01',
    live: '',
    featured: false,
  },
  {
    category: 'ai',
    title: 'Image Detection Model',
    description: 'Fine-tuned YOLO model for custom object detection. Trained on custom dataset with high accuracy using transfer learning techniques.',
    tags: ['Python', 'YOLO', 'PyTorch', 'OpenCV'],
    github: 'https://github.com/UsamaMAlik01',
    live: '',
    featured: true,
  },
  {
    category: 'ai',
    title: 'Hugging Face NLP',
    description: 'Fine-tuned transformer model from Hugging Face for text classification. Custom training pipeline with evaluation metrics.',
    tags: ['Python', 'Hugging Face', 'Transformers', 'NLP'],
    github: 'https://github.com/UsamaMAlik01',
    live: '',
    featured: false,
  },
  {
    category: 'ai',
    title: 'ML Pipeline',
    description: 'End-to-end machine learning pipeline for data preprocessing, model training, evaluation and deployment using Python and TensorFlow.',
    tags: ['Python', 'TensorFlow', 'Pandas', 'Scikit-learn'],
    github: 'https://github.com/UsamaMAlik01',
    live: '',
    featured: false,
  },
]

function Tag({ label }) {
  return (
    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--color-gold-400)', backgroundColor: 'rgba(251,191,36,0.08)', border: '1px solid rgba(251,191,36,0.2)', borderRadius: '9999px', padding: '2px 10px' }}>
      {label}
    </span>
  )
}

function ProjectCard({ title, description, tags, github, live, featured }) {
  return (
    <div
      style={{ backgroundColor: 'var(--color-navy-800)', border: featured ? '1px solid rgba(251,191,36,0.3)' : '1px solid rgba(251,191,36,0.1)', borderRadius: '1rem', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', transition: 'all 0.3s ease', position: 'relative', overflow: 'hidden' }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(251,191,36,0.5)'; e.currentTarget.style.transform = 'translateY(-4px)' }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = featured ? 'rgba(251,191,36,0.3)' : 'rgba(251,191,36,0.1)'; e.currentTarget.style.transform = 'translateY(0)' }}
    >
      {featured ? (
        <div style={{ position: 'absolute', top: '12px', right: '12px', backgroundColor: 'rgba(251,191,36,0.15)', border: '1px solid rgba(251,191,36,0.3)', borderRadius: '9999px', padding: '2px 10px' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--color-gold-400)' }}>FEATURED</span>
        </div>
      ) : null}

      <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: 'rgba(251,191,36,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <FiExternalLink size={18} style={{ color: 'var(--color-gold-400)' }} />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700, color: '#f1f5f9', margin: 0 }}>{title}</h3>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: '#94a3b8', lineHeight: 1.7, margin: 0 }}>{description}</p>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
        {tags.map((tag) => (
          <Tag key={tag} label={tag} />
        ))}
      </div>

      <div style={{ display: 'flex', gap: '12px', marginTop: 'auto' }}>
        <div onClick={() => window.open(github, '_blank')} style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer', color: '#94a3b8', fontSize: '0.85rem', fontFamily: 'var(--font-body)', transition: 'color 0.3s ease' }} onMouseEnter={e => { e.currentTarget.style.color = 'var(--color-gold-400)' }} onMouseLeave={e => { e.currentTarget.style.color = '#94a3b8' }}>
          <FiGithub size={16} />
          <span>Code</span>
        </div>
        {live ? (
          <div onClick={() => window.open(live, '_blank')} style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer', color: '#94a3b8', fontSize: '0.85rem', fontFamily: 'var(--font-body)', transition: 'color 0.3s ease' }} onMouseEnter={e => { e.currentTarget.style.color = 'var(--color-gold-400)' }} onMouseLeave={e => { e.currentTarget.style.color = '#94a3b8' }}>
            <FiExternalLink size={16} />
            <span>Live</span>
          </div>
        ) : null}
      </div>
    </div>
  )
}

function TabButton({ label, active, onClick, count }) {
  return (
    <button
      onClick={onClick}
      style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', fontWeight: 500, background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem 1.5rem', borderRadius: '9999px', transition: 'all 0.3s ease', color: active ? 'var(--color-navy-950)' : '#94a3b8', backgroundColor: active ? 'var(--color-gold-500)' : 'transparent' }}
    >
      {label} ({count})
    </button>
  )
}

function SectionLabel() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
      <span style={{ fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-gold-400)', fontFamily: 'var(--font-mono)' }}>03. Projects</span>
      <div style={{ height: '1px', width: '60px', backgroundColor: 'rgba(251,191,36,0.3)' }} />
    </div>
  )
}

export default function Projects() {
  const [activeTab, setActiveTab] = useState('all')

  function getFiltered() {
    if (activeTab === 'all') return projects
    return projects.filter((p) => p.category === activeTab)
  }

  const filtered = getFiltered()

  return (
    <section id="projects" style={{ backgroundColor: 'var(--color-navy-950)', width: '100%', padding: '5rem 0' }}>
      <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 1.5rem', width: '100%' }}>
        <SectionLabel />
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.25rem', fontWeight: 900, color: '#f1f5f9', marginBottom: '0.75rem' }}>
          My Projects
        </h2>
        <p style={{ fontFamily: 'var(--font-body)', color: '#94a3b8', marginBottom: '2.5rem', maxWidth: '500px', lineHeight: 1.7 }}>
          A mix of full stack web apps and AI/ML experiments — things I have built, fine-tuned and shipped.
        </p>

        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '3rem', backgroundColor: 'var(--color-navy-800)', padding: '6px', borderRadius: '9999px', width: 'fit-content' }}>
          <TabButton label="All" active={activeTab === 'all'} onClick={() => setActiveTab('all')} count={projects.length} />
          <TabButton label="Web" active={activeTab === 'web'} onClick={() => setActiveTab('web')} count={projects.filter(p => p.category === 'web').length} />
          <TabButton label="AI / ML" active={activeTab === 'ai'} onClick={() => setActiveTab('ai')} count={projects.filter(p => p.category === 'ai').length} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', width: '100%' }}>
          {filtered.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              tags={project.tags}
              github={project.github}
              live={project.live}
              featured={project.featured}
            />
          ))}
        </div>
      </div>
    </section>
  )
}