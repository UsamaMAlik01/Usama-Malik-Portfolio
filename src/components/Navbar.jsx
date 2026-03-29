import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'About',    href: '#about'    },
  { label: 'Skills',   href: '#skills'   },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact'  },
]

function NavLink({ label, isActive, onClick }) {
  const [hovered, setHovered] = useState(false)
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative bg-transparent border-none cursor-pointer py-1 text-[0.95rem] font-medium transition-colors duration-300"
      style={{
        fontFamily: 'var(--font-body)',
        color: isActive || hovered ? 'var(--color-gold-400)' : '#94a3b8',
      }}
    >
      {label}
      {isActive ? (
        <span
          className="absolute bottom-0.5 left-0 right-0 h-0.5 rounded-sm"
          style={{ backgroundColor: 'var(--color-gold-400)' }}
        />
      ) : null}
    </button>
  )
}

function Hamburger({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col gap-1.25 p-1 bg-transparent border-none cursor-pointer"
    >
      <span className="block w-6 gap-1.25 rounded-sm" style={{ backgroundColor: 'var(--color-gold-400)' }} />
      <span className="block w-6 gap-1.25 rounded-sm" style={{ backgroundColor: 'var(--color-gold-400)' }} />
      <span className="block w-6 gap-1.25 rounded-sm" style={{ backgroundColor: 'var(--color-gold-400)' }} />
    </button>
  )
}

function DesktopLinks({ activeSection, handleNavClick }) {
  return (
    <ul className="flex items-center gap-10 list-none m-0 p-0">
      {navLinks.map(({ label, href }) => (
        <li key={label}>
          <NavLink
            label={label}
            isActive={activeSection === href.replace('#', '')}
            onClick={() => handleNavClick(href)}
          />
        </li>
      ))}
      <li>
        <button
          onClick={() => handleNavClick('#contact')}
          className="btn-primary px-5! py-2! text-sm font-semibold"
        >
          Hire Me
        </button>
      </li>
    </ul>
  )
}

function MobileMenu({ handleNavClick }) {
  return (
    <div
      className="flex flex-col gap-4 px-6 py-6"
      style={{
        backgroundColor: 'var(--color-navy-900)',
        borderTop: '1px solid rgba(251,191,36,0.2)',
      }}
    >
      {navLinks.map(({ label, href }) => (
        <button
          key={label}
          onClick={() => handleNavClick(href)}
          className="bg-transparent border-none cursor-pointer text-left text-base py-2 text-slate-200"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          {label}
        </button>
      ))}
      <button
        onClick={() => handleNavClick('#contact')}
        className="btn-primary px-6! py-2! mt-2 font-semibold"
      >
        Hire Me
      </button>
    </div>
  )
}

function NavContent({ isMobile, menuOpen, setMenuOpen, activeSection, handleNavClick }) {
  
  function getRightSide() {
    if (isMobile) {
      return <Hamburger onClick={() => setMenuOpen(!menuOpen)} />
    }
    return <DesktopLinks activeSection={activeSection} handleNavClick={handleNavClick} />
  }

  return (
    <div className="max-w-6xl ml-10! px-6 h-17.5 flex items-center justify-between">
      <a href="/" className="text-2xl font-bold no-underline" style={{ fontFamily: 'var(--font-display)' }}>
        <span style={{ color: 'var(--color-gold-400)' }}>&lt;</span>
        <span className="text-slate-100">Usama</span>
        <span style={{ color: 'var(--color-gold-400)' }}>/&gt;</span>
      </a>
      {getRightSide()}
    </div>
  )
}

export default function Navbar() {
  const [scrolled,      setScrolled]      = useState(false)
  const [menuOpen,      setMenuOpen]      = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [isMobile,      setIsMobile]      = useState(window.innerWidth < 768)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    const sections = ['about', 'skills', 'projects', 'contact']
    const onScroll = () => {
      for (const id of sections) {
        const el = document.getElementById(id)
        if (!el) continue
        const { top } = el.getBoundingClientRect()
        if (top <= 120) setActiveSection(id)
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href) => {
    setMenuOpen(false)
    const id = href.replace('#', '')
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'rgba(4,15,43,0.9)' : 'transparent',
        backdropFilter:   scrolled ? 'blur(12px)'        : 'none',
        borderBottom:     scrolled ? '1px solid rgba(251,191,36,0.15)' : '1px solid transparent',
      }}
    >
      <NavContent
        isMobile={isMobile}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        activeSection={activeSection}
        handleNavClick={handleNavClick}
      />
      {(isMobile && menuOpen) ? <MobileMenu handleNavClick={handleNavClick} /> : null}
    </header>
  )
}