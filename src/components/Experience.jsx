import { motion } from 'framer-motion'
import { ArrowRight, BriefcaseBusiness, MapPin } from 'lucide-react'
import SectionHeading from './SectionHeading'
import HorizontalRail from './HorizontalRail'
import { experience } from '../data/portfolioData'

export default function Experience() {
  return (
    <section className="section-shell experience-section" id="experience">
      <div className="container">
        <div className="experience-heading-row">
          <SectionHeading eyebrow="WHERE I’VE BEEN" title={'Growing through\nthe work.'} description="Learning, collaborating, and shipping useful things with a great team." />
          <div className="experience-count"><span>01</span><i /> CAREER CHAPTER</div>
        </div>
        <HorizontalRail label="experience" className="experience-rail">
          <motion.article
            className="experience-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
          >
            <div className="experience-card-index"><span>01</span><div /></div>
            <div className="experience-main">
              <div className="experience-company-mark"><BriefcaseBusiness size={26} /></div>
              <div className="experience-role">
                <div className="experience-meta"><span>JAN 2025 — PRESENT</span><span className="experience-current"><i /> CURRENT ROLE</span></div>
                <h3>{experience.position}</h3>
                <h4>{experience.company}</h4>
                <p className="experience-location"><MapPin size={14} /> {experience.location}</p>
                <p className="experience-summary">Building full stack features and responsive experiences as part of a collaborative product team.</p>
                <div className="experience-tags"><span>React.js</span><span>Node.js</span><span>Express.js</span><span>MongoDB</span><span>REST APIs</span></div>
              </div>
              <div className="experience-responsibilities">
                <div className="responsibilities-heading"><span className="eyebrow">THE DAY-TO-DAY</span><span>SCROLL TO EXPLORE →</span></div>
                <HorizontalRail label="experience highlights" className="responsibility-rail">
                  {experience.responsibilities.map((responsibility, index) => (
                    <article className="responsibility-card" key={responsibility}>
                      <span>0{index + 1} <i /></span>
                      <p><ArrowRight size={13} />{responsibility}</p>
                    </article>
                  ))}
                </HorizontalRail>
              </div>
            </div>
            <div className="experience-card-foot"><span>AMAR INFOTECH PVT. LTD.</span><span>AHMEDABAD, GUJARAT</span></div>
          </motion.article>
        </HorizontalRail>
      </div>
    </section>
  )
}
