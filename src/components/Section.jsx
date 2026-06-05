import { motion } from 'framer-motion'

export function Section({ id, eyebrow, title, children, className = '' }) {
  return (
    <motion.section
      id={id}
      className={`section ${className}`}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
    >
      {(eyebrow || title) && (
        <div className="section-heading">
          {eyebrow && <span>{eyebrow}</span>}
          {title && <h2>{title}</h2>}
        </div>
      )}
      {children}
    </motion.section>
  )
}
