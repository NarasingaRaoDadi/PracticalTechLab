export default function Portfolio() {

const projects=[

{
title:"Playwright Automation Framework",
desc:"Enterprise-grade Playwright framework with TypeScript, POM, Fixtures, Reporting, API Integration and CI/CD.",
status:"Production Experience"
},

{
title:"Selenium Hybrid Framework",
desc:"Java + Selenium + TestNG + Maven + Cucumber BDD + Jenkins framework used for enterprise automation.",
status:"Enterprise Project"
},

{
title:"REST API Automation",
desc:"API automation using Postman, Rest Assured and Playwright API with validations and reusable utilities.",
status:"Real Project"
},

{
title:"React Native Applications",
desc:"Published Android applications developed using React Native from design to Play Store deployment.",
status:"Google Play"
},

{
title:"GitHub Projects",
desc:"Automation frameworks, utilities, learning examples and reusable code for students.",
status:"Open Source"
},

{
title:"Interview Preparation",
desc:"Real interview questions, coding exercises, framework design and practical assignments.",
status:"Career Ready"
}

];

return(

<section id="portfolio" className="portfolio">

<h2>Projects & Practical Learning</h2>

<p>

Everything taught in Practical Tech Lab comes from real implementation—not copied tutorials.

</p>

<div className="portfolio-grid">

{projects.map((item,index)=>(

<div className="portfolio-card" key={index}>

<h3>{item.title}</h3>

<p>{item.desc}</p>

<span>{item.status}</span>

</div>

))}

</div>

</section>

);

}