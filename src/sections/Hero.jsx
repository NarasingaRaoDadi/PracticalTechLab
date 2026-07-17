import heroImage from "../assets/hero.png";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">

        <div className="hero-text">
          <h1>Practical Tech Lab</h1>

          <h2>Master QA Automation
Build Real Projects.
Crack Interviews.</h2>

          <p>
            Learn Playwright, Selenium, API Testing, JavaScript, TypeScript and React Native through real-world projects, interview-focused examples and enterprise automation practices used in the software industry.
          </p>

          <div className="hero-buttons">
          <a href="#courses" className="btn">
            Start Learning
          </a>

  <Link to="/login" className="btn-secondary">
    Student Login
  </Link>
    
</div>
        </div>

        <div className="hero-image">
          <img src={heroImage} alt="Practical Tech Lab" />
        </div>

      </div>
    </section>
  );
}