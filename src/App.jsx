import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Works from "./components/Works";
import Contact from "./components/Contact";
import AboutMe from "./components/AboutMe";
import Aos from "aos";
import "aos/dist/aos.css";
import LoadingAnimation from "./components/LoadingAnimation";
import Skills from "./components/Skills";


const App = () => {
  const heroRef = useRef(null)
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);
  const techRef = useRef(null)

  const [finishedLoading, setFinishedLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setFinishedLoading(true);
    }, 3000);
  }, []);
  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);

  return (
    <Router>
      {!finishedLoading ? (
        <LoadingAnimation/>
      ) : (
        <div className="bg-[#0a192f] ">
          <NavBar refs={{heroRef, aboutRef, workRef, contactRef, techRef }} />
          <main>
            <About ref={heroRef} finishedLoading={finishedLoading} />
            <AboutMe ref={aboutRef} />
            <Skills ref={techRef}/>
            <Works ref={workRef} />
            <Contact ref={contactRef} />
          </main>
        </div>
      )}
    </Router>
  );
};

export default App;