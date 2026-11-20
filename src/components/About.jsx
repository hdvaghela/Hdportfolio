import { motion } from 'framer-motion'
import { Code2, Layers3, MapPin, Sparkles } from 'lucide-react'
import SectionHeading from './SectionHeading'

const highlights = [
  { icon: Code2, value: '2+', label: 'Years experience' },
  { icon: Layers3, value: 'Full stack', label: 'Development' },
  { icon: Sparkles, value: '03', label: 'Featured projects' },
  { icon: MapPin, value: 'Ahmedabad', label: 'Gujarat, India' },
]

export default function About() {
  return (
    <section className="section-shell about-section" id="about">
      <div className="container">
        <SectionHeading eyebrow="A LITTLE ABOUT ME" title={'Curious by nature.\nDeveloper by craft.'} />
        <div className="about-layout">
          <motion.div
            className="about-visual"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65 }}
          >
            <div className="about-orb"><div className="orb-ring ring-one" /><div className="orb-ring ring-two" /><span>HV</span><i className="orb-sparkle sparkle-one">✳</i><i className="orb-sparkle sparkle-two">✦</i></div>
            <div className="about-note"><span className="note-dot" /> Always learning, always building</div>
            <span className="about-visual-index">CREATIVE<br />DEVELOPER</span>
          </motion.div>
          <motion.div
            className="about-copy"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65 }}
          >
            <span className="eyebrow">MY APPROACH</span>
            <h3>Turning thoughtful ideas into <span className="gradient-text">useful software.</span></h3>
            <p>I’m a passionate Full Stack Developer currently working at Amar Infotech Pvt. Ltd., Ahmedabad. I enjoy building responsive user interfaces, developing RESTful APIs, and creating complete web application solutions.</p>
            <p>I focus on writing reusable code, solving real-world problems, and continuously improving my development skills.</p>
            <div className="about-highlights">
              {highlights.map(({ icon: Icon, value, label }) => (
                <div className="highlight-item" key={label}>
                  <span className="highlight-icon"><Icon size={16} /></span>
                  <div><strong>{value}</strong><span>{label}</span></div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
