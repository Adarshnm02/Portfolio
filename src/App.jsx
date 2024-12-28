import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/NavBar";

const App = () => {
  return (
    <Router>
      <Navbar />
    </Router>
  );
};

export default App;
