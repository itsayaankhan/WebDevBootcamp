import portrait from '../assets/ayaan-portrait.png'
import './About.css'

function About() {
  return (
    <section id="about" className="about" aria-labelledby="about-heading">
      <header className="about-header">
        <p className="about-section-label">
          <span aria-hidden="true">01</span>
          <span>// about_me</span>
        </p>
        <h2 id="about-heading">Curiosity, translated into software.</h2>
        <p className="about-subtitle">A little context behind the code.</p>
      </header>

      <div className="about-layout">
        <figure className="about-portrait-card">
          <p className="about-image-label">ayaan.profile / .png</p>
          {/* Importing the local asset lets Vite include it in production builds. */}
          <img
            className="about-portrait"
            src={portrait}
            alt="Ayaan Khan wearing a suit outdoors"
            width="800"
            height="800"
            loading="lazy"
            decoding="async"
          />
          <figcaption>01 / builder behind the screen</figcaption>
        </figure>

        <div className="about-biography">
          <h3>
            <span>I like making things work.</span>
            <span>Then making them matter.</span>
          </h3>
          <p className="about-introduction">
            I'm Ayaan, a Computer Science student at UMD with interests across
            software engineering, AI, robotics, and entrepreneurship. I enjoy
            connecting the technical details with the people and problems a
            product serves.
          </p>
          <p className="about-projects-description">
            From full-stack applications to a dual-axis solar tracker, my favorite
            projects start with a question and end with something you can use.
          </p>

          <dl className="about-details">
            <div>
              <dt>Location</dt>
              <dd>College Park, MD</dd>
            </div>
            <div>
              <dt>University</dt>
              <dd>UMD</dd>
            </div>
            <div>
              <dt>Major</dt>
              <dd>Computer Science</dd>
            </div>
          </dl>
          <p className="about-current-focus">
            <code>{'current_focus = "Full-stack products + applied AI"'}</code>
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
