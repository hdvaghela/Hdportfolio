import { useState } from 'react'
import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { personalInfo } from '../data/portfolioData'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const submitForm = (event) => {
    event.preventDefault()
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`)
    const body = encodeURIComponent(`Hi Hardik,\n\n${form.message}\n\nFrom: ${form.name}\nEmail: ${form.email}`)
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`
  }

  return (
    <section className="section-shell contact-section" id="contact">
      <div className="container">
        <div className="contact-panel">
          <div className="contact-glow" aria-hidden="true" />
          <div className="contact-left">
            <SectionHeading eyebrow="HAVE SOMETHING IN MIND?" title={<>Let’s build<br />something <span className="gradient-text">together.</span></>} description="Have an interesting project or professional opportunity? Feel free to connect with me." />
            <div className="contact-details">
              <a href={`mailto:${personalInfo.email}`}><span><Mail size={17} /></span><div><small>EMAIL ME</small><b>{personalInfo.email}</b></div><ArrowUpRight size={15} /></a>
              <a href={`tel:${personalInfo.phone.replaceAll(' ', '')}`}><span><Phone size={17} /></span><div><small>GIVE ME A CALL</small><b>{personalInfo.phone}</b></div><ArrowUpRight size={15} /></a>
              <div className="contact-location"><span><MapPin size={17} /></span><div><small>BASED IN</small><b>{personalInfo.location}</b></div></div>
            </div>
            <div className="contact-socials">
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn <ArrowUpRight size={13} /></a>
              <a href={personalInfo.github} target="_blank" rel="noreferrer"><Github size={16} /> GitHub <ArrowUpRight size={13} /></a>
            </div>
          </div>
          <form className="contact-form" onSubmit={submitForm}>
            <div className="form-topline"><span>YOUR MESSAGE</span><span>01 — 03</span></div>
            <label htmlFor="contact-name">Your name</label>
            <input id="contact-name" name="name" autoComplete="name" placeholder="How should I address you?" value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} required />
            <label htmlFor="contact-email">Email address</label>
            <input id="contact-email" name="email" type="email" autoComplete="email" placeholder="you@company.com" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} required />
            <label htmlFor="contact-message">A little about it</label>
            <textarea id="contact-message" name="message" rows="3" placeholder="Tell me what you're thinking..." value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} required />
            <button className="button button-primary form-submit" type="submit">Start a conversation <ArrowUpRight size={16} /></button>
            <p className="form-note">Opens your email app with your message ready to send.</p>
          </form>
        </div>
      </div>
    </section>
  )
}
