import { FiMoon, FiSun } from 'react-icons/fi'
import { portfolio } from '../data/portfolio'

const links = ['About', 'Skills', 'Experience', 'Projects', 'NCC', 'Resume', 'Contact']

export function Navbar({ darkMode, onToggleTheme }) {
  return (
    <header className="nav-shell">
      <a className="brand" href="#home" aria-label="Go to hero section">
        <img src={portfolio.assets.profilePhoto} alt={`${portfolio.name} profile`} />
      </a>
      <nav aria-label="Primary navigation">
        {links.map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`}>
            {link}
          </a>
        ))}
      </nav>
      <button className="icon-button" onClick={onToggleTheme} aria-label="Toggle color theme">
        {darkMode ? <FiSun /> : <FiMoon />}
      </button>
    </header>
  )
}
