export default function Contact() {
  return (
    <section id="contact" className="contact">

      <h2>Ready to Start Your QA Automation Journey?</h2>

      <p>
        Whether you're preparing for interviews, looking for mentorship,
        or need automation consulting, I'm here to help.
      </p>

      <div className="contact-grid">

        <div className="contact-card">
          <h3>🎓 Training</h3>
          <p>Live Playwright, Selenium and API Testing classes.</p>
        </div>

        <div className="contact-card">
          <h3>💼 Freelance</h3>
          <p>Automation Framework Development & QA Consulting.</p>
        </div>

        <div className="contact-card">
          <h3>👨‍💻 Mentorship</h3>
          <p>Resume Review, Mock Interviews and Career Guidance.</p>
        </div>

      </div>

      <div className="contact-buttons">

        <a
          href="mailto:devnarasingarao@gmail.com"
          className="btn"
        >
          Email Me
        </a>

        <a
          href="https://www.linkedin.com/in/narasinga-dadi-291636395"
          target="_blank"
          rel="noreferrer"
          className="btn-secondary"
        >
          Connect on LinkedIn
        </a>

      </div>

    </section>
  );
}