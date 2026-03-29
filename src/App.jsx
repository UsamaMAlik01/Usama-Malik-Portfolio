import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './pages/Hero'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Footer from './pages/Footer'

function AllSections() {
  return (
    <main className="w-full">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer/>
    </main>
  )
}

export default function App() {
  return (
    <div className="w-full min-h-screen" style={{ backgroundColor: 'var(--color-navy-950)' }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<AllSections />} />
      </Routes>
    </div>
  )
}