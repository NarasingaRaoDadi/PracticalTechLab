import React from "react";

export default function Videos() {
return ( <section id="videos"> <h2>Featured Videos</h2>

  <div className="card-container">

    <div className="card">
      <h3>Consumer Complaint Guide</h3>
      <p>E-Jagriti filing process explained step-by-step.</p>
      <a
        href="https://www.youtube.com/watch?v=Pdy2g9t-wsw"
        target="_blank"
        rel="noreferrer"
      >
        Watch Video
      </a>
    </div>

    <div className="card">
      <h3>Consumer Success Story</h3>
      <p>How money was recovered through Consumer Court.</p>
      <a
        href="https://www.youtube.com/watch?v=aQqkeqGh7zI"
        target="_blank"
        rel="noreferrer"
      >
        Watch Video
      </a>
    </div>

    <div className="card">
      <h3>RTI Filing Tutorial</h3>
      <p>Learn how to file RTI applications online.</p>
      <a
        href="https://www.youtube.com/watch?v=lO4Ogbj0f60"
        target="_blank"
        rel="noreferrer"
      >
        Watch Video
      </a>
    </div>

    <div className="card">
      <h3>PG Portal Complaint</h3>
      <p>File government grievances quickly and correctly.</p>
      <a
        href="https://www.youtube.com/shorts/iTE8w6isPuI"
        target="_blank"
        rel="noreferrer"
      >
        Watch Video
      </a>
    </div>

    <div className="card">
      <h3>Block Lost Mobile (CEIR)</h3>
      <p>Learn how to block a lost mobile in under 60 seconds.</p>
      <a
        href="https://www.youtube.com/shorts/dJpszM_3nc4"
        target="_blank"
        rel="noreferrer"
      >
        Watch Video
      </a>
    </div>

    <div className="card">
      <h3>Top 5 LLB Exam Tips</h3>
      <p>Simple tips to improve answers and score higher.</p>
      <a
        href="https://www.youtube.com/shorts/7MrluPHMEb8"
        target="_blank"
        rel="noreferrer"
      >
        Watch Video
      </a>
    </div>

  </div>

  <div className="youtube-cta">
    <a
      href="https://www.youtube.com/@LexAutomation"
      target="_blank"
      rel="noreferrer"
    >
      View All 150+ Videos on YouTube →
    </a>
  </div>
</section>


);
}
