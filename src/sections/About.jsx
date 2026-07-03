export default function About() {

const highlights = [

"11+ Years Software Testing Experience",

"Playwright Framework Architect",

"Automation Lead on Enterprise Projects",

"Banking, Retail, Insurance & SAP Domains",

"React Native App Developer",

"150+ Technical Videos",

"Real Interview Preparation",

"Hands-on Project Based Learning"

];

return (

<section id="about" className="about">

<h2>Why Learn From Practical Tech Lab?</h2>

<p className="about-intro">

Learn the exact skills companies expect from QA Automation Engineers.
Every course is built from real project experience—not copied from documentation.

</p>

<div className="highlight-grid">

{highlights.map((item,index)=>(

<div className="highlight-card" key={index}>

✅ {item}

</div>

))}

</div>

</section>

);

}