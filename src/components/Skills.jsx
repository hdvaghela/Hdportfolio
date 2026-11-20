import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { skillGroups } from '../data/portfolioData'

export default function Skills() {
  return (
    <section className="section-shell skills-section" id="skills">
      <div className="container">
        <SectionHeading eyebrow="THE TOOLKIT" title={'Tools for the\nwhole journey.'} description="From the first pixel to the last API call, these are the technologies I use to bring ideas to life." />
        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <motion.article
              className={`skill-card ${index === 0 ? 'skill-card-featured' : ''}`}
              key={group.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              whileHover={{ y: -5 }}
            >
              <div className="skill-card-top"><span>{group.number} / 05</span><ArrowUpRight size={16} /></div>
              <h3>{group.name}</h3>
              <div className="skill-tags">{group.skills.map((skill) => <span className="skill-tag" key={skill}>{skill}</span>)}</div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
