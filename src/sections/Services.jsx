export default function Services() {

const services = [

{
icon:"🎓",
title:"Online Training",
desc:"Industry-focused Playwright, Selenium, API Testing and React Native training with live projects."
},

{
icon:"💼",
title:"Freelance Automation",
desc:"Build automation frameworks, UI testing, API testing, framework migration and maintenance."
},

{
icon:"🏢",
title:"Corporate Training",
desc:"Customized QA Automation training for software teams and organizations."
},

{
icon:"📄",
title:"Resume & Interview",
desc:"Resume review, LinkedIn optimization, mock interviews and job preparation."
},

{
icon:"🚀",
title:"Mentorship",
desc:"One-to-one mentorship until you become interview ready."
},

{
icon:"📱",
title:"Mobile App Development",
desc:"React Native Android application development from idea to Play Store."
}

];

return(

<section id="services" className="services">

<h2>Services</h2>

<p>
Helping students, professionals and companies build real software automation skills.
</p>

<div className="service-grid">

{services.map((item,index)=>(

<div className="service-card" key={index}>

<div className="service-icon">{item.icon}</div>

<h3>{item.title}</h3>

<p>{item.desc}</p>

</div>

))}

</div>

</section>

);

}