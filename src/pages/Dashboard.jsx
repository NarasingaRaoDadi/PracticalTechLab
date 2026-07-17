import { useEffect, useState } from "react";
import { auth, db } from "../firebase/firebaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import "../css/Dashboard.css";
import { COURSES } from "../data/courses";

export default function Dashboard() {

  const [userData, setUserData] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, async (user) => {

      if (!user) {
        navigate("/login");
        return;
      }

      const docRef = doc(db, "ptl_users", user.uid);

      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setUserData(docSnap.data());
      }

    });

    return () => unsubscribe();

  }, []);

  if (!userData) return <h2>Loading...</h2>;

  const purchasedModules = userData.purchasedModules || [];

  const course = COURSES["playwright-typescript"];

  const modules = course.modules;

  const foundation = modules.find(m => m.id === "module1");

  const hasModule1 = purchasedModules.includes(foundation.id);

  const completedLessons = userData.completedLessons || [];

  const progress = Math.round(
    (completedLessons.length / 29) * 100
  );

  const handleLogout = async () => {

    await signOut(auth);

    navigate("/");

  };

  return (

  <div className="dashboard">

    <h1>Welcome {userData.name} 👋</h1>

    <p>{userData.email}</p>

    <hr />

    <h2>🎭 My Courses</h2>

    <div className="course-card">

      <h3>{course.title}</h3>

      <h4>Progress</h4>

      <progress value={progress} max="100"></progress>

      <p>{progress}%</p>

      <hr />

      <h4>Purchased Modules</h4>

      <p>

        {hasModule1 ? "✅ Foundation" : "🔒 Foundation"}

      </p>

      <p>

        🔒 Framework

      </p>

      <p>

        🔒 Real Projects

      </p>

      <p>

        🔒 AI + MCP

      </p>

      <hr />

      {

        hasModule1 ?

        (

          <button

            onClick={() =>

              navigate("/courses/playwright-typescript/module1")

            }

          >

            ▶ Continue Learning

          </button>

        )

        :

        (

          <button

            onClick={() =>

              navigate("/payment", {
  state: {
    from: "/dashboard",

    course: foundation.course,

    moduleName: foundation.moduleName,

    moduleId: foundation.id,

    price: foundation.price
  }
})

            }

          >

            {`🔓 Unlock ${foundation.moduleName} ₹${foundation.price}`}

          </button>

        )

      }

    </div>

    <br />

    <button onClick={handleLogout}>

      Logout

    </button>

  </div>

);

}