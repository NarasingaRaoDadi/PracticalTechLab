import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { signup } from "../services/authService";
import "../css/Signup.css";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

export default function Signup() {

  const navigate = useNavigate();

  const location = useLocation();

  const from = location.state?.from || "/dashboard";

  const [name,setName] = useState("");

  const [email,setEmail] = useState("");

  const [password,setPassword] = useState("");

  const handleSignup = async (e)=>{

    e.preventDefault();

    try{

      const userCredential = await signup(email,password);

      const user = userCredential.user;

      await setDoc(doc(db,"ptl_users",user.uid),{

        name,

        email,

        purchasedModules:[],

        completedLessons:[],

        createdAt:new Date()

      });

      alert("Account created successfully!");

      navigate("/login",{

        state:{

          from

        }

      });

    }

    catch(error){

      alert(error.message);

    }

  };

  return(

    <div className="signup-container">

  
      <form className="signup-form" onSubmit={handleSignup}>

        <div className="login-actions">

          <button
            type="button"
            className="icon-btn"
            onClick={() => navigate("/")}
            title="Home"
          >
            🏠
          </button>

          <button
            type="button"
            className="icon-btn"
            onClick={() =>
              window.history.length > 1
                ? navigate(-1)
                : navigate("/")
            }
            title="Back"
          >
            ←
          </button>

        </div>

        <h1>Create Account</h1>

        <input

          type="text"

          placeholder="Full Name"

          value={name}

          onChange={(e)=>setName(e.target.value)}

          required

        />

        <input

          type="email"

          placeholder="Email Address"

          value={email}

          onChange={(e)=>setEmail(e.target.value)}

          required

        />

        <input

          type="password"

          placeholder="Password"

          value={password}

          onChange={(e)=>setPassword(e.target.value)}

          required

        />

        <button type="submit">

          Sign Up

        </button>

        <p style={{marginTop:"20px"}}>

          Already have an account?

        </p>

        <button

          type="button"

          onClick={()=>

            navigate("/login",{

              state:{

                from

              }

            })

          }

        >

          Login

        </button>

      </form>

    </div>

  );

}