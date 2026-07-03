export default function Videos() {

  return (

    <section id="youtube" className="youtube">

      <div className="youtube-left">

        <h2>Learn Free on YouTube</h2>

        <p>

          Start your QA Automation journey with free practical tutorials.
          Every video is designed to help you build real projects,
          prepare for interviews and become job-ready.

        </p>

        <ul>

          <li>✔ Playwright Tutorials</li>

          <li>✔ Selenium Automation</li>

          <li>✔ API Testing</li>

          <li>✔ React Native Projects</li>

          <li>✔ Interview Questions</li>

          <li>✔ Real Industry Frameworks</li>

        </ul>

        <div className="youtube-buttons">

          <a
            href="https://www.youtube.com/@practicaltechlab"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            Watch Videos
          </a>

          <a
            href="https://www.youtube.com/@practicaltechlab?sub_confirmation=1"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
          >
            Subscribe
          </a>

        </div>

      </div>

      <div className="youtube-right">

        <div className="youtube-card">

          <h3>Practical Tech Lab</h3>

          <h1>150+</h1>

          <p>Technical Videos</p>

          <hr />

          <p>Playwright</p>

          <p>Selenium</p>

          <p>API Testing</p>

          <p>React Native</p>

          <p>Interview Preparation</p>

        </div>

      </div>

    </section>

  );

}