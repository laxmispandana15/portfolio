import { motion } from 'framer-motion'
import { FiAward, FiExternalLink } from 'react-icons/fi'

export function GlassCard({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      className={`glass-card ${className}`}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay }}
    >
      {children}
    </motion.div>
  )
}

export function ProjectCard({ project, index }) {
  const visibleLinks = project.links.filter((link) => link.url && link.url !== '#')

  return (
    <GlassCard className="project-card" delay={index * 0.08}>
      <div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
      {visibleLinks.length > 0 && (
        <div className="card-actions">
          {visibleLinks.map((link) => (
            <a key={link.label} href={link.url} target="_blank" rel="noreferrer">
              {link.label} <FiExternalLink />
            </a>
          ))}
        </div>
      )}
    </GlassCard>
  )
}

export function AchievementCard({ achievement, index }) {
  return (
    <GlassCard className="achievement-card" delay={index * 0.07}>
      <FiAward />
      <span>{achievement}</span>
    </GlassCard>
  )
}
