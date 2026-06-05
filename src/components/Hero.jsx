import { motion } from 'framer-motion'
import { FiDownload, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

export function Hero({ data }) {
  return (
    <section id="home" className="hero-section">
      <div className="animated-bg" aria-hidden="true" />
      <motion.img
        className="profile-photo"
        src={data.assets.profilePhoto}
        alt={`${data.name} profile`}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      />
      <motion.div
        className="hero-copy"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <p className="hero-kicker">Computer Science Engineering Portfolio</p>
        <h1>{data.name}</h1>
        <h2>{data.role}</h2>
        <p>{data.intro}</p>
      </motion.div>
      <div className="hero-actions">
        <a className="primary-button" href={data.assets.resumePdf} download>
          <FiDownload /> Download Resume
        </a>
        <a className="ghost-button" href={data.contact.github} target="_blank" rel="noreferrer">
          <FiGithub /> GitHub
        </a>
        <a className="ghost-button" href={data.contact.linkedin} target="_blank" rel="noreferrer">
          <FiLinkedin /> LinkedIn
        </a>
        <a className="ghost-button" href="#contact">
          <FiMail /> Contact Me
        </a>
      </div>
    </section>
  )
}
