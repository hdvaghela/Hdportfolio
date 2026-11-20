import { useEffect, useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { navigation } from '../data/portfolioData'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-25% 0px -60% 0px', threshold: [0, 0.2, 0.5] },
    )
    document.querySelectorAll('main section[id]').forEach((section) => observer.observe(section))
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <nav className="navbar container" aria-label="Main navigation">
        <a href="#home" className="brand" onClick={closeMenu} aria-label="Hardik Vaghela home">
          <span className="brand-mark">H<span>.</span></span>
          <span className="brand-name">hardik<span>vaghela</span></span>
        </a>
        <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <div className={`nav-content ${menuOpen ? 'is-open' : ''}`}>
          <div className="nav-links">
            {navigation.map((item) => {
              const id = item.href.slice(1)
              return <a key={id} href={item.href} className={active === id ? 'active' : ''} onClick={closeMenu}>{item.label}</a>
            })}
          </div>
          <a className="nav-resume" href="/resume.pdf" download>
            Resume <ArrowUpRight size={14} />
          </a>
        </div>
      </nav>
    </header>
  )
}
