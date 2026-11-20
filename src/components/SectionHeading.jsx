import { motion } from 'framer-motion'

export default function SectionHeading({ eyebrow, title, description, className = '' }) {
  const lines = typeof title === 'string' ? title.split('\n') : null

  return (
    <motion.div
      className={`section-heading ${className}`}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>
        {lines
          ? lines.map((line, index) => (
            <span key={line}>{line}{index < lines.length - 1 && <br />}</span>
          ))
          : title}
      </h2>
      {description && <p>{description}</p>}
    </motion.div>
  )
}
