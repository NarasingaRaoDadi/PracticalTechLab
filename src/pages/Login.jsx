import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { login, forgotPassword } from "../services/authService";
import "../css/Login.css";
import { Home, ArrowLeft } from "lucide-react";

export default function Login() {

  const navigate = useNavigate();

  const location = useLocation();

  const from = location.state?.from || "/dashboard";

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      await login(email, password);

      navigate(from);

    }

    catch (error) {

  switch (error.code) {

    case "auth/invalid-credential":

      alert("Invalid email or password.");

      break;

    case "auth/user-not-found":

      alert("No account found with this email.");

      break;

    case "auth/wrong-password":

      alert("Incorrect password.");

      break;

    case "auth/too-many-requests":

      alert(
        "Too many failed login attempts. Please try again later."
      );

      break;

    default:

      alert("Unable to login. Please try again.");

  }

}

  };

  const handleForgotPassword = async () => {

  if (!email.trim()) {

    alert("Please enter your email address.");

    return;

  }

  try {

    await forgotPassword(email);

    alert(
      "Password reset email sent. Please check your inbox."
    );

  }

  catch (error) {

    switch (error.code) {

      case "auth/user-not-found":

        alert("No account found with this email.");

        break;

      case "auth/invalid-email":

        alert("Please enter a valid email address.");

        break;

      default:

        alert(
          "Unable to send password reset email."
        );

    }

  }

};

  return (

    <div className="login-container">

  
  <form className="login-form" onSubmit={handleLogin}>

    <div className="login-actions">

  <button
    type="button"
    className="icon-btn"
    onClick={() => navigate("/")}
    title="Home"
  >
    <Home size={20} strokeWidth={2.5}/>
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
    <ArrowLeft size={20} strokeWidth={2.5}/>
  </button>

</div>

        <h1>Student Login</h1>

        <input

          type="email"

          placeholder="Email"

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

          Login

        </button>

        <button
          type="button"
          className="forgot-password"
          onClick={handleForgotPassword}
        >
          Forgot Password?
        </button>

        <p style={{marginTop:"15px"}}>

          New Student?

        </p>

        <button

          type="button"

          onClick={()=>

            navigate("/signup",{

              state:{

                from

              }

            })

          }

        >

          Create Account

        </button>

      </form>

    </div>

  );

}