import { day1 } from "../data/courseData";
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

        <h2>{day1.title}</h2>

        <p>Duration : {day1.duration}</p>

      </div>


      {/* VIDEO */}

      <div className="video-section">

        {/* Replace later with your own video */}

        <video
    src={day1.video}
    controls
    playsInline
    preload="metadata"
    style={{ width: "100%" }}
/>

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