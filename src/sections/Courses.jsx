export default function Courses() {

const courses = [

{
icon:"🎭",
title:"Playwright + TypeScript",
level:"Beginner → Advanced",
project:"8 Real Projects",
status:"FREE MODULE AVAILABLE"
},

{
icon:"⚡",
title:"Playwright + JavaScript",
level:"Beginner → Advanced",
project:"5 Real Projects",
status:"COMING SOON"
},

{
icon:"🧪",
title:"Selenium + Java",
level:"Core Automation",
project:"Framework Design",
status:"COMING SOON"
},

{
icon:"🌐",
title:"REST API Testing",
level:"Postman + REST Assured",
project:"API Projects",
status:"COMING SOON"
},

{
icon:"📱",
title:"React Native",
level:"Android Development",
project:"Build Live Apps",
status:"COMING SOON"
},

{
icon:"🚀",
title:"Interview Preparation",
level:"QA Automation",
project:"100+ Questions",
status:"COMING SOON"
}

];

return(

<section id="courses" className="courses">

<h2>Courses</h2>

<p>
Learn by building real projects, not by watching endless theory videos.
</p>

<div className="course-grid">

{courses.map((course,index)=>(

<div className="course-card" key={index}>

<h1>{course.icon}</h1>

<h3>{course.title}</h3>

<p>{course.level}</p>

<p>{course.project}</p>

<button>{course.status}</button>

</div>

))}

</div>

</section>

);

}