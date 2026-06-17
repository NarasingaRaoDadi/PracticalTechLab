import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Portfolio from "./sections/Portfolio";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Stats from "./sections/Stats";
import Testimonials from "./sections/Testimonials";

function App() {
  return (
    <>
    <Navbar />
    <Hero />
    <About />
    <Services />
    <Portfolio />
    <Stats />
    <Testimonials />
    <Contact />
    <Footer />
  </>
  );
}

export default App;