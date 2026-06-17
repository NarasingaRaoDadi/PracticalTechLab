import heroImage from "../assets/hero.png";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">

        <div className="hero-text">
          <h1>LexAutomation</h1>

          <h2>Legal Technology Solutions</h2>

          <p>
            Bridging Law and Technology through innovative legal automation,
            software solutions and digital transformation.
          </p>

          <button className="btn">
            Contact Us
          </button>
        </div>

        <div className="hero-image">
          <img src={heroImage} alt="LexAutomation" />
        </div>

      </div>
    </section>
  );
}