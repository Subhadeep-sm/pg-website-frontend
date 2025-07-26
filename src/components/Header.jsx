import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
// Import the logo - adjust the path based on your file structure
import royalPgLogo from "../assets/royal-pg-logo.png"; // Rename your file to remove spaces

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img 
            src={royalPgLogo} 
            alt="Royal PG Logo" 
            className="h-8 md:h-12 lg:h-16 w-auto"
          />
          <div className="text-3xl font-bold text-black">
  <span>Royal</span> PG
</div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium items-center">
          <Link to="/" className="hover:text-[#948979]-500 transition-colors">Home</Link>
          <Link to="/facilities" className="hover:text-[#948979]-500 transition-colors">Facilities</Link>
          <Link to="/BoysPg" className="hover:text-[#948979]-500 transition-colors">Boys PG</Link>
          <Link to="/GirlsPg" className="hover:text-[#948979]-500 transition-colors">Girls PG</Link>
          <Link to="/contact" className="hover:text-[#948979]-500 transition-colors">Contact Us</Link>
          <Link to="/admin" className="hover:text-[#948979]-500 transition-colors">Admin Login</Link>
        </nav>

        {/* Hamburger Icon */}
        <button onClick={toggleMenu} className="md:hidden z-50">
          {menuOpen ? <X size={28} className="text-white"/> : <Menu size={28} />}
        </button>

        {/* Mobile Sidebar */}
        <div className={`fixed top-0 right-0 h-full w-[70%] sm:w-[60%] md:hidden bg-[#393E46] text-white p-6 transition-transform duration-300 ease-in-out z-40 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          
          <div className="mt-10 space-y-6 text-lg font-medium">
            <hr className="border-gray-500 my-4" />
          </div>

          {/* Sidebar Links */}
          <div className="mt-10 space-y-6 text-lg font-medium flex flex-col">
            <Link to="/" onClick={toggleMenu} className="hover:text-[#948979]-400 transition-colors">Home</Link>
            <Link to="/facilities" onClick={toggleMenu} className="hover:text-[#948979]-400 transition-colors">Facilities</Link>
            <Link to="/BoysPg" onClick={toggleMenu} className="hover:text-[#948979]-400 transition-colors">Boys PG</Link>
            <Link to="/GirlsPg" onClick={toggleMenu} className="hover:text-[#948979]-400 transition-colors">Girls PG</Link>
            <Link to="/contact" onClick={toggleMenu} className="hover:text-[#948979]-400 transition-colors">Contact Us</Link>
            <Link to="/admin" onClick={toggleMenu} className="hover:text-[#948979]-400 transition-colors">Admin Login</Link>
          </div>
        </div>

        {/* Overlay for mobile menu */}
        {menuOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden" 
            onClick={toggleMenu}
          ></div>
        )}
      </div>
    </header>
  );
};

export default Header;