import React, { useRef } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";

const App = () => {
  // Refs for each section in the page
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <Router>
      <NavBar refs={{ aboutRef, workRef, contactRef }} />
      <main>
        <About ref={aboutRef} />
        <Work ref={workRef} />
        <Contact ref={contactRef} />
      </main>
    </Router>
  );
};

export default App;
