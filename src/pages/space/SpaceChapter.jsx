import { useParams, Link } from "react-router-dom";
import { chapters } from "../../data/iso2026/chapters";

import TopicCard from "../../components/space/TopicCard";
import { getTopics } from "../../data/iso2026/loaders";
import { getChapterProgress } from "../../utils/progress";


export default function SpaceChapter() {

  const { id } = useParams();

  const chapter = chapters.find(c => c.id === Number(id));
  const topics = getTopics(id);
  const progress = getChapterProgress(chapter.id, chapter.topics);

  if (!chapter) {
    return (
      <div style={{padding:"40px"}}>
        <h2>Chapter not found</h2>
      </div>
    );
  }

  return (

    <div style={{
      minHeight:"100vh",
      background:"#08111f",
      color:"white",
      padding:"40px"
    }}>

      <Link
        to="/space/dashboard"
        style={{
          color:"#4da3ff",
          textDecoration:"none",
          fontSize:"18px"
        }}
      >
        ← Back to Dashboard
      </Link>

      <h1 style={{marginTop:"25px"},{ color:"#fff" }}> {chapter.icon} {chapter.title}</h1>

      <p style={{
        color:"#9ecbff",
        fontSize:"20px"
      }}>
        {chapter.topics} Topics • {chapter.mcqs} MCQs
      </p>

      <hr style={{margin:"30px 0"}}/>

      <div style={{
        background:"#203354",
        padding:"30px",
        borderRadius:"15px"
      }}>

        <h1 style={{ color:"#fff" }}>Welcome to this chapter </h1>
        <div
style={{
marginBottom:"25px"
}}
>

<div>

Progress : {progress}%

</div>

<div
style={{
height:"10px",
background:"#32496d",
borderRadius:"20px",
overflow:"hidden",
marginTop:"10px"
}}
>

<div
style={{
width:`${progress}%`,
height:"100%",
background:"#38d26f"
}}
/>

</div>

</div>
        <p>
          Here you will study every topic one by one,
          solve MCQs and finally attempt the chapter test.
        </p>

        <div style={{marginTop:"30px"}}>

    {topics.map(topic => (

        <TopicCard
            key={topic.id}
            topic={topic}
            chapterId={chapter.id}
        />

    ))}

</div>

      </div>

    </div>

  );

}