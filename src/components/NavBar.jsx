import React from "react";
import scrollIntoView from "scroll-into-view-if-needed";


const NavBar = ({ refs }) => {
    const scrollToSection = (ref) => {
        if (ref && ref.current) {
          scrollIntoView(ref.current, {
            behavior: "smooth",
            block: "start",
          });
        }
      };
      

  return (
    <nav className="fixed top-0 w-full bg-gray-800 text-white flex justify-between px-6 py-4 z-50">
      {/* Logo */}
      <div className="text-2xl font-bold">MyLogo</div>

      {/* Navigation Links */}
      <div className="flex space-x-6">
        <button
          onClick={() => scrollToSection(refs.aboutRef)}
          className="hover:text-gray-400"
        >
          About
        </button>
        <button
          onClick={() => scrollToSection(refs.workRef)}
          className="hover:text-gray-400"
        >
          My Work
        </button>
        <button
          onClick={() => scrollToSection(refs.contactRef)}
          className="hover:text-gray-400"
        >
          Contact
        </button>
      </div>

      {/* Resume Button */}
      <a
        href="/resume.pdf"
        className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded"
        target="_blank"
        rel="noopener noreferrer"
      >
        Resume
      </a>
    </nav>
  );
};


export default NavBar;
