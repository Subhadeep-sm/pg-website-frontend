// src/components/Header.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [openBoys, setOpenBoys] = useState(false);
  const [openGirls, setOpenGirls] = useState(false);

  return (
    <header className="flex justify-between items-center px-10 py-4 shadow-md bg-white">
      {/* Logo */}
      <div className="text-3xl font-bold text-black relative">
        <span className="relative z-10">
          <span className="underline decoration-4 decoration-orange-500 decoration-double">Royal</span> PG
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex space-x-6 text-gray-700 font-medium">
        <Link to="/">Home</Link>
        
        <Link to="/facilities">Facilities</Link>
        {/* ...other links */}

        {/* Boys PG Dropdown */}
        <div
          className="relative"
          
        >
          <button className="flex items-center gap-1">
            Boys PG 
          </button>
          
        </div>

        {/* Girls PG Dropdown */}
        <div
          className="relative"
        >
          <button className="flex items-center gap-1">
            Girls PG 
          </button>
          
        </div>

        
        
        <a href="#">Contact Us</a>
      </nav>
    </header>
  );
};

export default Header;
