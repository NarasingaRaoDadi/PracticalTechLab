import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import PlaywrightCourse from "./pages/PlaywrightCourse";
import Day1 from "./pages/Day1";

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
          path="/courses/playwright-typescript/day1"
          element={<Day1 />}
        />
        
      </Routes>

    </BrowserRouter>
  );
}

export default App;