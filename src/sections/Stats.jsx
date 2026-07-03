export default function Stats() {

const roadmap = [

"📺 Watch Free YouTube Videos",

"🎓 Complete Free Playwright Module",

"📚 Enroll in Full Course",

"💻 Build Real Automation Projects",

"📝 Resume & LinkedIn Review",

"🎤 Mock Technical Interview",

"🏆 Get Your Dream QA Automation Job"

];

return (

<section id="roadmap" className="roadmap">

<h2>Your Learning Journey</h2>

<p>

A step-by-step roadmap designed to help you become an industry-ready QA Automation Engineer.

</p>

<div className="roadmap-container">

{roadmap.map((step,index)=>(

<div className="roadmap-step" key={index}>

<div className="step-number">

{index+1}

</div>

<h3>{step}</h3>

</div>

))}

</div>

</section>

);

}