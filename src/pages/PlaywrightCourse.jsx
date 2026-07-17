import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import { auth, db } from "../firebase/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { COURSES } from "../data/courses";

export default function PlaywrightCourse() {
const [purchasedModules, setPurchasedModules] = useState([]);
useEffect(() => {

  const unsubscribe = onAuthStateChanged(auth, async (user) => {

    if (!user) return;

    const snap = await getDoc(doc(db, "ptl_users", user.uid));

    if (snap.exists()) {

      setPurchasedModules(
        snap.data().purchasedModules || []
      );

    }

  });

  return () => unsubscribe();

}, []);

const course = COURSES["playwright-typescript"];

const modules = course.modules;

return(

<section className="playwright-course">

<div className="course-header">

<h1>{course.title}</h1>

<h3>{course.level}</h3>

<h2>{course.subtitle}</h2>

<p>📚 {course.totalLessons} Lessons</p>

<p>💻 {course.totalProjects} Real Projects</p>

</div>

<div className="lesson-list">

<h2>Preview (FREE)</h2>

{

modules.map((module,index)=>{
const purchased =
    purchasedModules.includes(module.id);
  
  return (
<div className="module-card" key={index}>

<h2>{module.title}</h2>

<p>{module.subtitle}</p>

<h3>{module.free
    ? "FREE"
    : `₹${module.price}`}</h3>

{
module.topics &&

<ul>

{
module.topics.map((topic,i)=>(

<li key={i}>✅ {topic}</li>

))
}

</ul>

}

{
module.free ?

<Link to={module.route}>
   <button>{module.button}</button>
</Link>

:

module.disabled ? (

  <button disabled>
    {module.button}
  </button>

) : purchased ? (

  <Link to={module.continueRoute}>
    <button>▶ Continue Learning</button>
  </Link>

) : (

  <Link
    to={module.route}
    state={{
      course: module.course,
      moduleName: module.moduleName,
      moduleId: module.id,
      price: module.price
    }}
  >
    <button>{module.button}</button>
  </Link>

)

}

</div>
  );

})
}

</div>

</section>

);

}