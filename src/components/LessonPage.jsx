import { useNavigate } from "react-router-dom";

export default function LessonPage({ lesson }) {

  const navigate = useNavigate();

  return (

    <section className="lesson-page">

      <div className="lesson-header">

        <h1>🎭 Playwright Masterclass</h1>

        <h2>{lesson.title}</h2>

        <p>Duration : {lesson.duration}</p>

      </div>

      {/* VIDEO */}

      <div className="video-section">

        {

          lesson.video ?

          (

            <video
              src={lesson.video}
              controls
              playsInline
              preload="metadata"
              style={{ width: "100%" }}
            />

          )

          :

          (

            <div
              style={{
                padding: "80px",
                textAlign: "center",
                border: "2px dashed #ccc",
                borderRadius: "10px"
              }}
            >

              <h2>🎬 Video Coming Soon</h2>

              <p>

                This lesson will be available soon.

              </p>

            </div>

          )

        }

      </div>

      {/* DOWNLOAD */}

      <div className="download-section">

        <a href={lesson.zip} download>

          📥 Download Source Code

        </a>

      </div>

      {/* TOPICS */}

      <div className="topics">

        <h2>Topics Covered</h2>

        <ul>

          {

            lesson.topics.map((topic,index)=>(

              <li key={index}>

                ✅ {topic}

              </li>

            ))

          }

        </ul>

      </div>

      {/* NAVIGATION */}

      <div className="lesson-navigation">

        <button
          disabled={!lesson.previous}
          onClick={() => navigate(lesson.previous)}
        >
          ⬅ Previous Lesson
        </button>

        <button
          disabled={!lesson.next}
          onClick={() => navigate(lesson.next)}
        >
          Next Lesson ➡
        </button>

      </div>

    </section>

  );

}