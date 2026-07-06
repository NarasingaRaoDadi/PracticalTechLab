import { Link } from "react-router-dom";

export default function PlaywrightCourse() {

const lessons = [

{title:"Day 1 - Installation", free:true},

{title:"Day 2 - VS Code Setup", free:false},

{title:"Day 3 - First Test", free:false},

{title:"Day 4 - Locators", free:false},

{title:"Day 5 - Assertions", free:false},

{title:"Day 6 - Browser Context", free:false},

{title:"Day 7 - Page Object Model", free:false},

{title:"Day 8 - Framework Design", free:false}

];

return(

<section className="playwright-course">

<div className="course-header">

<h1>🎭 Playwright with TypeScript</h1>

<h3>Beginner → Advanced</h3>

<h2>Beginner Friendly</h2>

<p>📚 30 Lessons</p>

<p>💻 8 Real Projects</p>

<p>🎓 Beginner → Advanced</p>

</div>

<div className="lesson-list">

<h2>Module 1 (FREE)</h2>

{

lessons.map((lesson,index)=>(

<div className="lesson-card" key={index}>

<h3>{lesson.title}</h3>

{

lesson.free ?

<Link to="/courses/playwright-typescript/day1">

<button>

▶ Watch Now

</button>

</Link>

:

<button disabled>

🔒 Locked

</button>

}

</div>

))

}

</div>

<div className="unlock-card">

<h2 style={{ color: 'white' }}> Unlock Full Playwright Masterclass</h2>

<h1 style={{ color: 'white' }}>₹499</h1>

<p>✔ 30 Lessons</p>

<p>✔ 8 Real Projects</p>

<p>✔ Source Code</p>

<p>✓ Interview Questions</p>

<p>✔ Certificate</p>

<button>

Unlock Now

</button>

</div>

</section>

);

}