import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi'
import { useState } from 'react'

const socialLinks = [
  { icon: FiGithub,   href: 'https://github.com/UsamaMAlik01',                  label: 'GitHub'   },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/usama-malik-219270287', label: 'LinkedIn' },
  { icon: FiMail,     href: 'mailto:usamamalik60m@gmail.com',                    label: 'Email'    },
]

function SocialIcon({ icon: Icon, href, label }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onClick={() => window.open(href, '_blank')}
      title={label}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: '38px', height: '38px', borderRadius: '50%',
        border: hovered ? '1px solid var(--color-gold-400)' : '1px solid rgba(251,191,36,0.2)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: hovered ? 'var(--color-gold-400)' : '#64748b',
        backgroundColor: hovered ? 'rgba(251,191,36,0.08)' : 'transparent',
        cursor: 'pointer', transition: 'all 0.3s ease',
      }}
    >
      <Icon size={16} />
    </div>
  )
}

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer style={{ backgroundColor: 'var(--color-navy-950)', borderTop: '1px solid rgba(251,191,36,0.1)', padding: '2.5rem 0', width: '100%' }}>
      <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 1.5rem', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem' }}>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 700, color: '#f1f5f9' }}>
            <span style={{ color: 'var(--color-gold-400)' }}>&lt;/</span>
            UsamaMalik
            <span style={{ color: 'var(--color-gold-400)' }}>&gt;</span>
          </span>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: '#475569' }}>
            Full Stack Developer & AI/ML Enthusiast
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {socialLinks.map((link) => (
            <SocialIcon key={link.label} icon={link.icon} href={link.href} label={link.label} />
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: '#475569' }}>
          <span>Built with</span>
          <FiHeart size={12} style={{ color: 'var(--color-gold-400)' }} />
          <span>by Usama Malik &copy; {year}</span>
        </div>

      </div>
    </footer>
  )
}