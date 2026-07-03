export default function Courses() {
  const courses = [
    {
      title: "Playwright + TypeScript",
      badge: "⭐ Featured",
      lessons: "50+ Lessons",
      price: "Free Intro",
      status: "Start Learning"
    },
    {
      title: "Playwright + JavaScript",
      badge: "Popular",
      lessons: "40+ Lessons",
      price: "Coming Soon",
      status: "Preview"
    },
    {
      title: "Selenium + Java",
      badge: "Automation",
      lessons: "60+ Lessons",
      price: "Coming Soon",
      status: "Preview"
    },
    {
      title: "REST API Testing",
      badge: "API",
      lessons: "35+ Lessons",
      price: "Coming Soon",
      status: "Preview"
    },
    {
      title: "Postman",
      badge: "API",
      lessons: "20+ Lessons",
      price: "Coming Soon",
      status: "Preview"
    },
    {
      title: "Rest Assured",
      badge: "Advanced",
      lessons: "30+ Lessons",
      price: "Coming Soon",
      status: "Preview"
    },
    {
      title: "React Native",
      badge: "Mobile Apps",
      lessons: "Real Project",
      price: "Coming Soon",
      status: "Preview"
    },
    {
      title: "Git • GitHub • Jenkins",
      badge: "DevOps",
      lessons: "25+ Lessons",
      price: "Coming Soon",
      status: "Preview"
    }
  ];

  return (
    <section id="courses" className="courses">
      <h2>Courses</h2>

      <p>
        Industry-focused training designed to help you build projects,
        crack interviews and become job-ready.
      </p>

      <div className="course-grid">
        {courses.map((course, index) => (
          <div className="course-card" key={index}>
            <span>{course.badge}</span>

            <h3>{course.title}</h3>

            <p>{course.lessons}</p>

            <p>{course.price}</p>

            <button>{course.status}</button>
          </div>
        ))}
      </div>
    </section>
  );
}