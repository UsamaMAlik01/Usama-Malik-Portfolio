import { useEffect, useState } from 'react'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

const roles = [
  'Full Stack Developer',
  'AI / ML Enthusiast',
  'React & Node.js Engineer',
  'Model Fine-Tuner',
]

const socialLinks = [
  { icon: FiGithub,   href: 'https://github.com/UsamaMAlik01',                  label: 'GitHub'   },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/usama-malik-219270287', label: 'LinkedIn' },
  { icon: FiMail,     href: 'mailto:usamamalik60m@gmail.com',                    label: 'Email'    },
]

function SocialLink({ icon: Icon, href, label }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onClick={() => window.open(href, '_blank')}
      title={label}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="w-11 h-11 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300"
      style={{
        border: hovered ? '1px solid var(--color-gold-400)' : '1px solid rgba(251,191,36,0.3)',
        color: hovered ? 'var(--color-gold-400)' : '#94a3b8',
        backgroundColor: hovered ? 'rgba(251,191,36,0.1)' : 'transparent',
      }}
    >
      <Icon size={20} />
    </div>
  )
}

function CornerBracket({ position }) {
  const styles = {
    tl: 'top-[-8px] left-[-8px] border-t-[3px] border-l-[3px]',
    tr: 'top-[-8px] right-[-8px] border-t-[3px] border-r-[3px]',
    bl: 'bottom-[-8px] left-[-8px] border-b-[3px] border-l-[3px]',
    br: 'bottom-[-8px] right-[-8px] border-b-[3px] border-r-[3px]',
  }
  return (
    <div
      className={`absolute w-6 h-6 border-gold-400 ${styles[position]}`}
    />
  )
}

export default function Hero() {
  const [roleIndex,  setRoleIndex]  = useState(0)
  const [displayed,  setDisplayed]  = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout
    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1800)
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 40)
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false)
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }
    return () => clearTimeout(timeout)
  }, [displayed, isDeleting, roleIndex])

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center  justify-center relative overflow-hidden  bg-navy-950]"
    >

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-125 h-125 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(251,191,36,0.08) 0%, transparent 70%)' }}
        />
        <div className="absolute bottom-[-10%] right-[-5%] w-150 h-150 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(251,191,36,0.06) 0%, transparent 70%)' }}
        />
        <div className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(251,191,36,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(251,191,36,0.03) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Main Content */}
<div className="max-w-6xl mx-auto px-12 pt-17.5 flex items-center justify-around gap-8 w-full">

        {/* Left: Text */}
<div className="flex-1 flex flex-col  gap-6 max-w-145">

  {/* badge */}
  <div
    className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 w-fit"
    style={{
      backgroundColor: 'rgba(251,191,36,0.1)',
      border: '1px solid rgba(251,191,36,0.3)',
    }}
  >
    <span
      className="text-xs tracking-widest"
      style={{ color: 'var(--color-gold-400)', fontFamily: 'var(--font-mono)' }}
    >
      👋 AVAILABLE FOR WORK
    </span>
  </div>

  {/* name */}
  <h1
    className="font-black leading-[1.1] text-slate-100"
    style={{
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(2.2rem, 4vw, 3.8rem)',
    }}
  >
    Hi, I am <br />
    <span style={{
      background: 'linear-gradient(135deg, var(--color-gold-300), var(--color-gold-500))',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    }}>
      Usama Malik
    </span>
  </h1>

  {/* typewriter */}
  <div
    className="flex items-center gap-1"
    style={{
      fontFamily: 'var(--font-mono)',
      fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
    }}
  >
    <span style={{ color: 'var(--color-gold-400)' }}>$&nbsp;</span>
    <span className="text-slate-400">{displayed}</span>
    <span
      className="inline-block w-0.5 h-[1.1em] ml-0.5"
      style={{
        backgroundColor: 'var(--color-gold-400)',
        animation: 'blink 1s step-end infinite',
      }}
    />
  </div>

  {/* bio */}
  <p
    className="text-slate-400 leading-[1.9] text-[0.95rem]"
    style={{ fontFamily: 'var(--font-body)' }}
  >
    I build full stack web applications with
    <strong className="text-slate-200"> React, Node.js and MongoDB</strong>,
    and explore the cutting edge of
    <strong className="text-slate-200"> AI/ML</strong> — from
    fine-tuning image detection models to working with Hugging Face transformers.
  </p>

  {/* CTA */}
  <div className="flex gap-6 ">
    <button
      className="btn-primary px-4! py-1!"
      onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
    >
      View My Work
    </button>
    <button
      className="btn-outline px-4! py-1!"
      onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
    >
      Get In Touch
    </button>
  </div>

  {/* socials */}
  <div className="flex gap-4">
    {socialLinks.map((link) => (
      <SocialLink key={link.label} icon={link.icon} href={link.href} label={link.label} />
    ))}
  </div>

</div>


        {/* Right: Photo */}
        <div className="hidden-mobile shrink-0 flex flex-col items-center">
          <div className="relative" style={{ width: '320px', height: '380px' }}>
            <CornerBracket position="tl" />
            <CornerBracket position="tr" />
            <CornerBracket position="bl" />
            <CornerBracket position="br" />

            <div className="w-full h-full rounded-xl overflow-hidden"
              style={{
                backgroundColor: 'var(--color-navy-800)',
                border: '1px solid rgba(251,191,36,0.2)',
              }}
            >
              <img
                src="/photo.jpeg"
                alt="Usama Malik"
                className="w-full h-full object-cover"
              />
            </div>

            {/* status badge */}
            <div
              className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full px-5 py-2 whitespace-nowrap"
              style={{
                bottom: '-16px',
                backgroundColor: 'var(--color-navy-800)',
                border: '1px solid rgba(251,191,36,0.4)',
              }}
            >
              <span className="w-2 h-2 rounded-full bg-green-500 inline-block"
                style={{ boxShadow: '0 0 8px #22c55e' }}
              />
              <span className="text-xs" style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-gold-400)' }}>
                Open to opportunities
              </span>
            </div>
          </div>
        </div>

</div>
      {/* Scroll Arrow */}
      <button
        onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 bg-transparent border-none cursor-pointer"
        style={{ animation: 'bounce 2s infinite' }}
      >
        <span className="text-[0.7rem] tracking-widest"
          style={{ color: 'rgba(251,191,36,0.5)', fontFamily: 'var(--font-mono)' }}
        >
          SCROLL
        </span>
        <div className="w-6 h-6 -mt-2"
          style={{
            border: '2px solid rgba(251,191,36,0.4)',
            borderTop: 'none',
            borderLeft: 'none',
            transform: 'rotate(45deg)',
          }}
        />
      </button>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50%       { transform: translateX(-50%) translateY(8px); }
        }
      `}</style>

    </section>
  )
}