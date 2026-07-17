import { Link } from "react-router-dom";

export default function Courses() {

  const courses = [

    {
      icon: "🎭",
      title: "Playwright + AI",
      level: "Beginner → Advanced",
      project: "4 Real Projects",
      status: "FREE MODULE AVAILABLE",
      active: true,
      link: "/courses/playwright-typescript"
    },

    {
      icon: "🧪",
      title: "Selenium + Python",
      level: "Core Automation",
      project: "Framework Design",
      status: "COMING SOON",
      active: false
    },

    {
      icon: "🌐",
      title: "REST API Testing",
      level: "Postman + REST Assured",
      project: "API Projects",
      status: "COMING SOON",
      active: false
    },

    {
      icon: "📱",
      title: "React Native",
      level: "Android Development",
      project: "Build Live Apps",
      status: "COMING SOON",
      active: false
    },

  ];

  return (

    <section id="courses" className="courses">

      <h2>Courses</h2>

      <p>
        Learn by building real projects, not by watching endless theory videos.
      </p>

      <div className="course-grid">

        {courses.map((course, index) => (

          <div className="course-card" key={index}>

            <h1>{course.icon}</h1>

            <h3>{course.title}</h3>

            <p>{course.level}</p>

            <p>{course.project}</p>

            {course.active ? (

              <Link to={course.link}>

                <button>
                  {course.status}
                </button>

              </Link>

            ) : (

              <button disabled>
                {course.status}
              </button>

            )}

          </div>

        ))}

      </div>

    </section>

  );

}