import { useRef, useState } from 'react'
import './Navbar.css'

const navigationLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  // State controls the mobile menu; desktop links are always visible through CSS.
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  function closeMenu() {
    setIsMenuOpen(false)
  }

  return (
    <header className="navbar">
      <nav
        className="navbar-inner"
        aria-label="Main navigation"
        onKeyDown={(event) => {
          // Escape closes the menu and returns keyboard focus to its button.
          if (event.key === 'Escape' && isMenuOpen) {
            closeMenu()
            menuButtonRef.current?.focus()
          }
        }}
      >
        <a className="navbar-brand" href="#top" onClick={closeMenu}>
          <span aria-hidden="true">{'<AK/>'}</span>
          <span>Ayaan Khan</span>
        </a>

        <button
          ref={menuButtonRef}
          className="navbar-toggle"
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="portfolio-navigation"
          onClick={() => setIsMenuOpen((previousIsOpen) => !previousIsOpen)}
        >
          {isMenuOpen ? 'Close' : 'Menu'}
          <span aria-hidden="true">{isMenuOpen ? '−' : '+'}</span>
        </button>

        <ul
          id="portfolio-navigation"
          className={`navbar-links${isMenuOpen ? ' is-open' : ''}`}
        >
          {navigationLinks.map((link, index) => (
            <li key={link.href}>
              {/* Native anchors will scroll to matching section IDs once added. */}
              <a href={link.href} onClick={closeMenu}>
                <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
