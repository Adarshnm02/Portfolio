import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import AboutMe from "./components/AboutMe";
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  // Refs for each section in the page
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);

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
    <Router className="bg-[#0a192f] min-h-screen text-[#ccd6f6]">
      {!finishedLoading ? (
        <div className="flex justify-center items-center h-screen">
          <h1>Loding...</h1>
        </div>
      ) : (
        <div className="bg-[#0a192f]">
          <NavBar refs={{ aboutRef, workRef, contactRef }} />
          <main>
            <About ref={aboutRef} finishedLoading={finishedLoading} />
            <AboutMe />
            <Work ref={workRef} />
            <Contact ref={contactRef} />
          </main>
        </div>
      )}
    </Router>
  );
};

export default App;
