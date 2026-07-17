import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import PlaywrightCourse from "./pages/PlaywrightCourse";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Payment from "./pages/Payment";

import Lesson from "./pages/Lesson";
import Module from "./pages/Module";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<HomePage />} />

        <Route
          path="/courses/playwright-typescript"
          element={<PlaywrightCourse />}
        />

        <Route
          path="/courses/:courseId/:moduleId"
          element={<Module />}
        />
      
        
       <Route
          path="/lesson/:courseId/:lessonId"
          element={<Lesson />}
        />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/payment" element={<Payment />} />
        
      </Routes>

    </BrowserRouter>
  );
}

export default App;