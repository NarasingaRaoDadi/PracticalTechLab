import aboutMeImg from "../assets/about-me.png";

export default function AboutMe() {
  return (
    <section id="aboutme" className="about">

      <h2>Meet Your Instructor</h2>

      <img
        src={aboutMeImg}
        alt="Narasinga Rao Dadi"
        className="profile-photo"
      />

      <h3 className="about-name">
        Narasinga Rao Dadi
      </h3>

      <h4 className="about-role">
        Senior QA Automation Engineer
      </h4>

      <div className="profile-tags">
        <span>11+ Years Experience</span>
        <span>Enterprise QA Expert</span>
        <span>✓ Playwright</span>
        <span>✓ Selenium</span>
        <span>✓ API Testing</span>
        <span>✓ Framework Design</span>
        <span>✓ Mobile Automation</span>
        <span>✓ Interview Support</span>
        <span>✓ Web & Mobile App Development</span>
      </div>

      <p className="about-description">
        With over 11 years of experience in QA Automation, I have built enterprise
        automation frameworks, tested banking and retail applications, and mentored
        QA engineers. Practical Tech Lab is designed to help students master
        Playwright, Selenium, API Testing and modern automation practices through
        practical, real-world projects instead of theory alone.
      </p>

    </section>
  );
}