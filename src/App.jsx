import { useEffect, useState } from 'react'
import { FiArrowUp, FiDownload, FiExternalLink } from 'react-icons/fi'
import { AchievementCard, GlassCard, ProjectCard } from './components/Cards'
import { ContactForm } from './components/ContactForm'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Section } from './components/Section'
import { portfolio } from './data/portfolio'

function App() {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('theme') !== 'light')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
    localStorage.setItem('theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 700)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="loader-screen">
        <div className="loader" />
        <p>Loading portfolio</p>
      </div>
    )
  }

  return (
    <>
      <Navbar darkMode={darkMode} onToggleTheme={() => setDarkMode((value) => !value)} />
      <main>
        <Hero data={portfolio} />

        <Section id="about" eyebrow="About Me" title="Research-minded developer with product instincts">
          <div className="about-grid">
            <GlassCard>
              <p className="large-text">{portfolio.summary}</p>
            </GlassCard>
            <div className="timeline">
              {portfolio.education.map((item) => (
                <GlassCard key={`${item.title}-${item.place}`} className="timeline-card">
                  <span>{item.period || 'Academic Record'}</span>
                  <h3>{item.title}</h3>
                  <p>{item.place}</p>
                  <strong>{item.detail}</strong>
                </GlassCard>
              ))}
            </div>
          </div>
        </Section>

        <Section id="skills" eyebrow="Technical Skills" title="Tools for research, engineering, and analytics">
          <div className="skills-grid">
            {portfolio.skills.map((skill, index) => (
              <GlassCard key={skill.group} className="skill-card" delay={index * 0.05}>
                <h3>{skill.group}</h3>
                <div>
                  {skill.items.map((item) => <span key={item}>{item}</span>)}
                </div>
              </GlassCard>
            ))}
          </div>
        </Section>

        <Section id="experience" eyebrow="Work Experience" title="Applied AI research at NIT Warangal">
          <div className="experience-list">
            {portfolio.experience.map((job) => (
              <GlassCard key={job.title} className="experience-card">
                <span>{job.duration}</span>
                <h3>{job.title} - {job.organization}</h3>
                <ul>{job.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
              </GlassCard>
            ))}
          </div>
        </Section>

        <Section id="projects" eyebrow="Projects" title="Selected builds and research prototypes">
          <div className="project-grid">
            {portfolio.projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}
          </div>
        </Section>

        <Section id="publications" eyebrow="Publications" title="Research output">
          <GlassCard className="publication-card">
            <span>Conference Paper</span>
            <h3>{portfolio.publication.title}</h3>
            <p>{portfolio.publication.conference}</p>
            <div className="card-actions">
              {portfolio.publication.links.map((link) => (
                <a key={link.label} href={link.url}>{link.label} <FiExternalLink /></a>
              ))}
            </div>
          </GlassCard>
        </Section>

        <Section id="achievements" eyebrow="Achievements & Leadership" title="Milestones that shaped the journey">
          <div className="achievement-grid">
            {portfolio.achievements.map((achievement, index) => (
              <AchievementCard key={achievement} achievement={achievement} index={index} />
            ))}
          </div>
        </Section>

        <Section id="ncc" eyebrow="NCC" title="Discipline, service, and leadership">
          <div className="ncc-grid">
            <img src={portfolio.assets.nccPhoto} alt="NCC uniform placeholder" />
            <GlassCard>
              <h3>{portfolio.ncc.title}</h3>
              <p>{portfolio.ncc.institution}</p>
              <span>{portfolio.ncc.duration}</span>
              <div className="card-actions">
                <a href={portfolio.assets.nccCertificatePdf} target="_blank" rel="noreferrer">View NCC Certificate</a>
                <a href={portfolio.assets.nccCertificatePdf} download>Download NCC Certificate</a>
              </div>
            </GlassCard>
          </div>
        </Section>

        <Section id="resume" eyebrow="Resume" title="Download the latest CV">
          <GlassCard className="resume-card">
            <div>
              <span>PDF Resume</span>
              <h3>Bollam Laxmi Spandana - Resume</h3>
              <p>Preview or download the configured resume file from the public assets folder.</p>
            </div>
            <iframe title="Resume preview" src={portfolio.assets.resumePdf} />
            <a className="primary-button" href={portfolio.assets.resumePdf} download><FiDownload /> Download Resume</a>
          </GlassCard>
        </Section>

        <Section id="contact" eyebrow="Contact" title="Let us build something meaningful">
          <ContactForm data={portfolio} />
        </Section>
      </main>

      <footer>
        <p>Copyright {new Date().getFullYear()} {portfolio.name}. All rights reserved.</p>
        <div>
          <a href={portfolio.contact.github}>GitHub</a>
          <a href={portfolio.contact.linkedin}>LinkedIn</a>
          <a href="#home" className="back-top"><FiArrowUp /> Back to Top</a>
        </div>
      </footer>
    </>
  )
}

export default App
