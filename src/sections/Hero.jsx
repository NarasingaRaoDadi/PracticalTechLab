import heroImage from "../assets/hero.png";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">

        <div className="hero-text">
          <h1>Practical Tech Lab</h1>

          <h2>Master QA Automation | 
              Like Industry Professionals</h2>

          <p>
            Learn Playwright, Selenium,
            TypeScript, JavaScript,
            API Testing and React Native
            through practical projects,
            real interview questions
            and industry-focused training.
          </p>

          <div className="hero-buttons">
          <a href="#portfolio" className="btn">
            Start Learning
          </a>

  <a
    href="https://www.youtube.com/@practicaltechlab"
    target="_blank"
    rel="noreferrer"
    className="btn-secondary"
  >
    Watch YouTube
  </a>
</div>
        </div>

        <div className="hero-image">
          <img src={heroImage} alt="Practical Tech Lab" />
        </div>

      </div>
    </section>
  );
}