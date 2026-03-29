import { useDispatch, useSelector } from 'react-redux'
import { updateField, resetForm, sendContactEmail } from '../features/contact/contactSlice'
import { FiMail, FiMapPin, FiLinkedin, FiGithub, FiSend } from 'react-icons/fi'

function SectionLabel() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
      <span style={{ fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-gold-400)', fontFamily: 'var(--font-mono)' }}>04. Contact</span>
      <div style={{ height: '1px', width: '60px', backgroundColor: 'rgba(251,191,36,0.3)' }} />
    </div>
  )
}

function InfoItem({ icon: Icon, label, value, link }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: 'rgba(251,191,36,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        <Icon size={18} style={{ color: 'var(--color-gold-400)' }} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{label}</span>
        {link ? (
          <span onClick={() => window.open(link, '_blank')} style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: '#e2e8f0', cursor: 'pointer', transition: 'color 0.3s ease' }} onMouseEnter={e => { e.currentTarget.style.color = 'var(--color-gold-400)' }} onMouseLeave={e => { e.currentTarget.style.color = '#e2e8f0' }}>{value}</span>
        ) : (
          <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: '#e2e8f0' }}>{value}</span>
        )}
      </div>
    </div>
  )
}

function LeftPanel() {
  return (
    <div style={{ flex: 1, minWidth: '280px', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700, color: '#f1f5f9', margin: 0 }}>
          Let us work together
        </h3>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: '#94a3b8', lineHeight: 1.8, margin: 0 }}>
          I am currently open to new opportunities — whether it is a full stack project, AI/ML collaboration, or just a chat about tech. My inbox is always open!
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        <InfoItem icon={FiMail} label="Email" value="usamamalik60m@gmail.com" link="mailto:usamamalik60m@gmail.com" />
        <InfoItem icon={FiMapPin} label="Location" value="Pakistan" link={null} />
        <InfoItem icon={FiLinkedin} label="LinkedIn" value="usama-malik-219270287" link="https://www.linkedin.com/in/usama-malik-219270287" />
        <InfoItem icon={FiGithub} label="GitHub" value="UsamaMAlik01" link="https://github.com/UsamaMAlik01" />
      </div>

      <div style={{ padding: '1.25rem', borderRadius: '1rem', backgroundColor: 'rgba(251,191,36,0.05)', border: '1px solid rgba(251,191,36,0.15)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#22c55e', boxShadow: '0 0 8px #22c55e' }} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--color-gold-400)' }}>Available for work</span>
        </div>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: '#64748b', margin: 0, lineHeight: 1.6 }}>
          Open to freelance, part-time and full-time roles in web development and AI/ML.
        </p>
      </div>
    </div>
  )
}

function ContactForm() {
  const dispatch = useDispatch()
  const { formData, status, error } = useSelector((state) => state.contact)

  function handleChange(field, value) {
    dispatch(updateField({ field, value }))
  }

  function handleSubmit() {
    if (!formData.name || !formData.email || !formData.message) return
    dispatch(sendContactEmail(formData))
  }

  function handleReset() {
    dispatch(resetForm())
  }

  const inputStyle = {
    width: '100%',
    backgroundColor: 'var(--color-navy-950)',
    border: '1px solid rgba(251,191,36,0.2)',
    borderRadius: '10px',
    padding: '0.875rem 1rem',
    fontFamily: 'var(--font-body)',
    fontSize: '0.95rem',
    color: '#e2e8f0',
    outline: 'none',
    transition: 'border-color 0.3s ease',
    boxSizing: 'border-box',
  }

  const labelStyle = {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.75rem',
    color: '#64748b',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    marginBottom: '6px',
    display: 'block',
  }

  if (status === 'succeeded') {
    return (
      <div style={{ flex: 1, minWidth: '280px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem', padding: '3rem', backgroundColor: 'var(--color-navy-800)', borderRadius: '1rem', border: '1px solid rgba(251,191,36,0.2)', textAlign: 'center' }}>
        <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'rgba(34,197,94,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <FiSend size={24} style={{ color: '#22c55e' }} />
        </div>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700, color: '#f1f5f9', margin: 0 }}>Message Sent!</h3>
        <p style={{ fontFamily: 'var(--font-body)', color: '#94a3b8', margin: 0 }}>Thanks for reaching out. I will get back to you soon.</p>
        <button onClick={handleReset} className="btn-primary px-6! py-2.5!" style={{ marginTop: '0.5rem' }}>Send Another</button>
      </div>
    )
  }

  return (
    <div style={{ flex: 1, minWidth: '280px', display: 'flex', flexDirection: 'column', gap: '1.25rem', backgroundColor: 'var(--color-navy-800)', borderRadius: '1rem', padding: '2rem', border: '1px solid rgba(251,191,36,0.15)' }}>
      <div>
        <label style={labelStyle}>Your Name</label>
        <input
          type="text"
          placeholder="Usama Malik"
          value={formData.name}
          onChange={e => handleChange('name', e.target.value)}
          style={inputStyle}
          onFocus={e => { e.target.style.borderColor = 'rgba(251,191,36,0.6)' }}
          onBlur={e => { e.target.style.borderColor = 'rgba(251,191,36,0.2)' }}
        />
      </div>
      <div>
        <label style={labelStyle}>Email Address</label>
        <input
          type="email"
          placeholder="you@example.com"
          value={formData.email}
          onChange={e => handleChange('email', e.target.value)}
          style={inputStyle}
          onFocus={e => { e.target.style.borderColor = 'rgba(251,191,36,0.6)' }}
          onBlur={e => { e.target.style.borderColor = 'rgba(251,191,36,0.2)' }}
        />
      </div>
      <div>
        <label style={labelStyle}>Message</label>
        <textarea
          placeholder="Tell me about your project..."
          value={formData.message}
          onChange={e => handleChange('message', e.target.value)}
          rows={5}
          style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }}
          onFocus={e => { e.target.style.borderColor = 'rgba(251,191,36,0.6)' }}
          onBlur={e => { e.target.style.borderColor = 'rgba(251,191,36,0.2)' }}
        />
      </div>

      {error ? (
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: '#ef4444', margin: 0 }}>{error}</p>
      ) : null}

      <button
        onClick={handleSubmit}
        disabled={status === 'loading'}
        className="btn-primary px-6! py-3!"
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', opacity: status === 'loading' ? 0.7 : 1, cursor: status === 'loading' ? 'not-allowed' : 'pointer' }}
      >
        <FiSend size={16} />
        <span style={{ fontFamily: 'var(--font-body)', fontWeight: 600 }}>
          {status === 'loading' ? 'Sending...' : 'Send Message'}
        </span>
      </button>
    </div>
  )
}

export default function Contact() {
  return (
    <section id="contact" style={{ backgroundColor: 'var(--color-navy-900)', width: '100%', padding: '5rem 0' }}>
      <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 1.5rem', width: '100%' }}>
        <SectionLabel />
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.25rem', fontWeight: 900, color: '#f1f5f9', marginBottom: '0.75rem' }}>
          Get In Touch
        </h2>
        <p style={{ fontFamily: 'var(--font-body)', color: '#94a3b8', marginBottom: '3rem', maxWidth: '500px', lineHeight: 1.7 }}>
          Have a project in mind or want to collaborate? Drop me a message and I will get back to you as soon as possible.
        </p>
        <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
          <LeftPanel />
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

