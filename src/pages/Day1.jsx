import { day1 } from "../data/coursedata";
export default function Day1() {

  const topics = [
    "What is Playwright?",
    "Why Playwright instead of Selenium?",
    "Install Node.js",
    "Verify Node & npm versions",
    "Create project folder",
    "Install VS Code",
    "Install Playwright",
    "Install browsers",
    "Project Structure",
    "Run first sample test",
    "Common Installation Issues",
    "Day 2 Preview"
  ];

  return (

    <section className="lesson-page">

      <div className="lesson-header">

        <h1>🎭 Playwright Masterclass</h1>

        <h2>Day 1 - Installation & Environment Setup</h2>

        <p>Duration : 18 Minutes</p>

      </div>


      {/* VIDEO */}

      <div className="video-section">

        {/* Replace later with your own video */}

        <video controls width="100%">
        <source src={day1.video} type="video/mp4" />
      </video>

      </div>


      {/* DOWNLOAD */}

      <div className="download-section">

      <a href={day1.zip} download>
        📥 Download Source Code
      </a>


      </div>


      {/* TOPICS */}

      <div className="topics">

        <h2>Topics Covered</h2>

        <ul>

          {topics.map((topic,index)=>(

            <li key={index}>

              ✅ {topic}

            </li>

          ))}

        </ul>

      </div>


      {/* NAVIGATION */}

      <div className="lesson-navigation">

        <button disabled>

          ⬅ Previous Lesson

        </button>

        <button disabled>

          🔒 Next Lesson

        </button>

      </div>

    </section>

  );

}