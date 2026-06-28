import { useParams, Link } from "react-router-dom";
import { getTopics } from "../../data/iso2026/loaders";

import { useEffect } from "react";
import { markTopicCompleted } from "../../utils/progress";


export default function SpaceTopic() {

  const { chapterId, topicId } = useParams();
  const topics = getTopics(chapterId);

  const topic = topics.find(
      t => t.id === Number(topicId)
  );

  useEffect(()=>{

    if(topic){

        markTopicCompleted(
            chapterId,
            topicId
        );

    }

},[chapterId,topicId]);

  if (!topic) {

    return (

        <div
            style={{
                background:"#08111f",
                color:"white",
                minHeight:"100vh",
                padding:"40px"
            }}
        >

            <h1>Topic Not Found</h1>

        </div>

    );

}

const isLastTopic = Number(topicId) === topics.length;

  return (

    <div
      style={{
        background:"#08111f",
        color:"white",
        minHeight:"100vh",
        padding:"40px"
      }}
    >

      <Link
        to={`/space/chapter/${chapterId}`}
        style={{
          color:"#4da3ff",
          textDecoration:"none"
        }}
      >
        ← Back
      </Link>

      <h1
  style={{
    color: "#fff",
    textAlign: "center",
    fontSize: "52px",
    marginTop: "30px"
  }}
>
  {topic.title}
</h1>

      <hr/>

      <h2 style={{ color:"#fff" }}>📖 Explanation</h2>

<p
style={{
lineHeight:"1.8",
fontSize:"20px",
whiteSpace:"pre-line"
}}
>
{topic.explanation}
</p>

<hr style={{margin:"30px 0"}}/>

<h2 style={{ color:"#fff" }}>⭐ Key Points</h2>

<ul
style={{
maxWidth:"900px",
margin:"25px auto",
lineHeight:"1.9",
fontSize:"20px",
textAlign:"left"
}}
>

{topic.keyPoints.map((point,index)=>(

<li
key={index}
style={{
marginBottom:"12px",
fontSize:"19px"
}}
>
{point}
</li>

))}

</ul>

<hr style={{margin:"30px 0"}}/>

<h2 style={{ color:"#fff" }}>💡 Interesting Facts</h2>

<ul
style={{
maxWidth:"900px",
margin:"25px auto",
lineHeight:"1.9",
fontSize:"20px",
textAlign:"left"
}}
>

{topic.facts.map((fact,index)=>(

<li
key={index}
style={{
marginBottom:"12px",
fontSize:"18px"
}}
>
{fact}
</li>

))}

</ul>

<hr style={{margin:"30px 0"}}/>

<h2 style={{ color:"#fff" }}>📝 Quick Revision</h2>

<ul
style={{
maxWidth:"900px",
margin:"25px auto",
lineHeight:"1.9",
fontSize:"20px",
textAlign:"left"
}}
>

{topic.revision.map((item,index)=>(

<li
key={index}
style={{
marginBottom:"12px",
fontSize:"18px"
}}
>
{item}
</li>

))}

</ul>

      {!isLastTopic ? (

  <Link
    to={`/space/chapter/${chapterId}/topic/${Number(topicId)+1}`}
    style={{
      display:"inline-block",
      marginTop:"40px",
      padding:"14px 28px",
      background:"#4da3ff",
      color:"white",
      textDecoration:"none",
      borderRadius:"10px",
      fontWeight:"600"
    }}
  >
    Next Topic →
  </Link>

) : (

  <Link
    to={`/space/chapter/${chapterId}`}
    style={{
      display:"inline-block",
      marginTop:"40px",
      padding:"14px 28px",
      background:"#16a34a",
      color:"white",
      textDecoration:"none",
      borderRadius:"10px",
      fontWeight:"600"
    }}
  >
    ✅ Chapter Completed
  </Link>

)}

    </div>

  );

}