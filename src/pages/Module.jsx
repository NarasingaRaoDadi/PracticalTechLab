import { Link, useParams } from "react-router-dom";

import { COURSES } from "../data/courses";
import { getLessonsByIds } from "../data/courseData";

export default function Module() {

  const { courseId, moduleId } = useParams();

  const course = COURSES[courseId];

  if (!course) {
    return <h2>Course Not Found</h2>;
  }

  const module = course.modules.find(
    m => m.id === moduleId
  );

  if (!module) {
    return <h2>Module Not Found</h2>;
  }

  const lessons = getLessonsByIds(module.lessons);

  return (

    <section className="playwright-course">

      <div className="course-header">

        <h1>{module.title}</h1>

        <h3>{module.subtitle}</h3>

        <p>Unlocked ✅</p>

      </div>

      <div className="lesson-list">

        {

          lessons.map((lesson) => (

            <div
              className="lesson-card"
              key={lesson.id}
            >

              <h3>{lesson.title}</h3>

              <Link to={lesson.route}>

                <button>

                  ▶ Watch Lesson

                </button>

              </Link>

            </div>

          ))

        }

      </div>

    </section>

  );

}