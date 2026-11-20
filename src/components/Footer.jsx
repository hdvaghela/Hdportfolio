import { ArrowUp, Github, Linkedin } from 'lucide-react'
import { navigation, personalInfo } from '../data/portfolioData'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <a href="#home" className="brand footer-brand"><span className="brand-mark">H<span>.</span></span><span className="brand-name">hardik<span>vaghela</span></span></a>
        <p>Thoughtful interfaces.<br />Reliable applications.</p>
        <div className="footer-nav">{navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}</div>
        <div className="footer-socials"><a href={personalInfo.github} target="_blank" rel="noreferrer" aria-label="GitHub profile"><Github size={17} /></a><a href={personalInfo.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile"><Linkedin size={17} /></a><a href={`mailto:${personalInfo.email}`} aria-label="Email Hardik">✉</a></div>
        <a href="#home" className="back-top">Back to top <ArrowUp size={15} /></a>
      </div>
      <div className="container footer-bottom"><span>© 2026 Hardik Vaghela. All rights reserved.</span><span>DESIGNED & BUILT WITH HardikV</span></div>
    </footer>
  )
}
