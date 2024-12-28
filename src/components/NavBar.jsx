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
    <nav className="fixed top-0 w-full bg-[#0a192f] text-[#ccd6f6] flex justify-between items-center px-10 py-4 z-50 shadow-md">
      {/* Logo */}
      <div className="text-2xl font-bold text-[#64ffda]">A</div>

      {/* Navigation Links */}
      <div className="flex items-center space-x-6 text-sm font-medium">
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          <button
            onClick={() => scrollToSection(refs.aboutRef)}
            className="hover:text-[#64ffda] transition-colors duration-200"
          >
            <span className="text-[#64ffda]">01.</span> About
          </button>
          <button
            onClick={() => scrollToSection(refs.workRef)}
            className="hover:text-[#64ffda] transition-colors duration-200"
          >
            <span className="text-[#64ffda]">02.</span> Work
          </button>
          <button
            onClick={() => scrollToSection(refs.contactRef)}
            className="hover:text-[#64ffda] transition-colors duration-200"
          >
            <span className="text-[#64ffda]">04.</span> Contact
          </button>
        </div>

        {/* Resume Button */}
        <a
          href="/resume.pdf"
          className="text-sm px-4 py-2 border border-[#64ffda] text-[#64ffda] rounded hover:bg-[#64ffda] hover:text-[#0a192f] transition-all duration-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
