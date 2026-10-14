import './Hero.css'

const interests = [
  'Software Engineering',
  'Artificial Intelligence',
  'Startups',
  'Technology',
]

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero-introduction">
        <p className="hero-greeting">
          <span>// hello, world.</span>
          <span>// i'm ayaan.</span>
        </p>

        <h1 id="hero-heading">Ayaan Khan.</h1>
        <p className="hero-roles">
          <span>Software engineer.</span>
          <span>AI explorer. Product builder.</span>
        </p>
        <p className="hero-description">
          Computer Science student at the University of Maryland. I build
          thoughtful software, explore AI, and turn interesting problems into
          useful products.
        </p>

        {/* These native links will scroll to the sections when they are added. */}
        <div className="hero-actions">
          <a className="hero-action hero-action-primary" href="#experience">
            Explore Experience <span aria-hidden="true">↓</span>
          </a>
          <a className="hero-action hero-action-secondary" href="#projects">
            View Projects <span aria-hidden="true">↓</span>
          </a>
        </div>
        <p className="hero-scroll-hint">
          <span>↓&nbsp; scroll to explore</span>
          <span>/</span>
          <span>portfolio.tsx</span>
        </p>
      </div>

      <aside className="hero-code-panel" aria-label="My interests">
        <pre className="hero-code"><code>
          <span className="hero-code-line hero-code-opening">
            <span className="hero-line-number" aria-hidden="true">01</span>
            <span>{'const interests = ['}</span>
          </span>
          {interests.map((interest, index) => (
            <span className="hero-code-line hero-code-interest" key={interest}>
              <span className="hero-line-number" aria-hidden="true">
                {String(index + 2).padStart(2, '0')}
              </span>
              <span>{`  "${interest}"${index < interests.length - 1 ? ',' : ''}`}</span>
              {'\n'}
            </span>
          ))}
          <span className="hero-code-line hero-code-closing">
            <span className="hero-line-number" aria-hidden="true">06</span>
            <span>{'];'}</span>
          </span>
        </code></pre>

        {/* The dot pattern is decorative and stays out of the accessibility tree. */}
        <div className="hero-dot-pattern" aria-hidden="true">
          {Array.from({ length: 35 }, (_, index) => <span key={index} />)}
        </div>
        <p className="hero-code-caption">{'{ curiosity: always_on }'}</p>
      </aside>
    </section>
  )
}

export default Hero
