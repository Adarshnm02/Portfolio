import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gray-800 text-white w-full">
      {/* Logo */}
      <div className="text-2xl font-bold">
        MyLogo
      </div>

      {/* Center Links */}
      <div className="hidden md:flex space-x-6">
        <Link to="/about" className="hover:text-gray-400">About</Link>
        <Link to="/my-works" className="hover:text-gray-400">My Works</Link>
        <Link to="/contact" className="hover:text-gray-400">Contact</Link>
      </div>

      {/* Resume Button */}
      <Link to="/resume" className="hidden md:block px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded">
        Resume
      </Link>
    </nav>
  );
};

export default Navbar;
