import { useParams,useNavigate } from "react-router-dom";
import LessonPage from "../components/LessonPage";
import { lessons } from "../data/courseData";

import { useEffect, useState } from "react";


import { auth, db } from "../firebase/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { getModule } from "../data/courses";

export default function Lesson() {

  const { lessonId } = useParams();
  const navigate = useNavigate();

const [checkingAccess, setCheckingAccess] = useState(true);

  const lesson = lessons[lessonId];

  
  if (!lesson) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "50px" }}>
        Lesson Not Found
      </h2>
    );
  }
useEffect(() => {

  const unsubscribe = onAuthStateChanged(auth, async (user) => {

    // Free Preview is always allowed
    if (lesson.module === "preview") {
      setCheckingAccess(false);
      return;
    }

    // Not logged in
    if (!user) {

      navigate("/login", {
        state: {
          from: lesson.route
        }
      });

      return;

    }

    const snap = await getDoc(
      doc(db, "ptl_users", user.uid)
    );

    const purchased =
      snap.data()?.purchasedModules || [];

    if (!purchased.includes(lesson.module)) {

      const module =
getModule(
    lesson.course,
    lesson.module
);

navigate("/payment", {

    state: {

        course: module.course,

        moduleName: module.moduleName,

        moduleId: module.id,

        price: module.price

    }

});

      return;

    }

    setCheckingAccess(false);

  });

  return () => unsubscribe();

}, [lesson, navigate]);

if (checkingAccess) {
  return <h2>Checking access...</h2>;
}
  return <LessonPage lesson={lesson} />;

}