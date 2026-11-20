import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { education } from '../data/portfolioData'

export default function Education() {
  return (
    <section className="section-shell education-section" id="education">
      <div className="container education-layout">
        <SectionHeading eyebrow="THE FOUNDATION" title={'Built on a\nsolid foundation.'} />
        <motion.article
          className="education-card"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
        >
          <div className="education-icon"><GraduationCap size={24} /></div>
          <div><span className="eyebrow">EDUCATION · {education.year}</span><h3>{education.degree}</h3><p>{education.university}</p></div>
          <span className="education-year">{education.year}</span>
        </motion.article>
      </div>
    </section>
  )
}
