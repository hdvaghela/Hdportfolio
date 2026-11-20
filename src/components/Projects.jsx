import { motion } from 'framer-motion'
import { ArrowUpRight, Github } from 'lucide-react'
import SectionHeading from './SectionHeading'
import HorizontalRail from './HorizontalRail'
import ProjectVisual from './ProjectVisual'
import { projects } from '../data/portfolioData'

export default function Projects() {
  return (
    <section className="section-shell projects-section" id="projects">
      <div className="container">
        <div className="projects-heading-row">
          <SectionHeading eyebrow="SELECTED WORK" title={'Built to solve.\nDesigned to last.'} description="A few projects that bring thoughtful design and practical engineering together." />
          <span className="projects-side-note">03 PROJECTS<br />DRAG OR SCROLL TO EXPLORE <span>→</span></span>
        </div>
      </div>
      <HorizontalRail label="projects" className="container rail-projects">
        {projects.map((project) => (
          <motion.article className="project-card" key={project.name} whileHover={{ y: -5 }} transition={{ duration: 0.25 }}>
            <ProjectVisual type={project.visual} />
            <div className="project-copy">
              <div className="project-meta"><span>PROJECT {project.number}</span><span>{project.category}</span></div>
              <div className="project-title-line"><h3>{project.name}<span>.</span></h3><a href={project.github} target="_blank" rel="noreferrer" className="project-link" aria-label={`View ${project.name} on GitHub`}><Github size={18} /><ArrowUpRight size={13} /></a></div>
              <p>{project.description}</p>
              <div className="project-tech">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
              <div className="project-features">{project.features.map((feature) => <span key={feature}><i />{feature}</span>)}</div>
            </div>
          </motion.article>
        ))}
      </HorizontalRail>
    </section>
  )
}
