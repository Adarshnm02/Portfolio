import React, { useEffect, useRef, useState } from "react";
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

  const [finishedLoading, setFinishedLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFinishedLoading(true);
    }, 3000);
  }, []);

  return (
    <Router className="bg-[#0a192f] min-h-screen text-[#ccd6f6]">
      {!finishedLoading ? (
        <div className="flex justify-center items-center h-screen">
          <h1>Loding...</h1>
        </div>
      ) : (
        <>
          <NavBar refs={{ aboutRef, workRef, contactRef }} />
          <main>
            <About ref={aboutRef} finishedLoading={finishedLoading}/>
            <Work ref={workRef} />
            <Contact ref={contactRef} />
          </main>
        </>
      )}
    </Router>
  );
};

export default App;
