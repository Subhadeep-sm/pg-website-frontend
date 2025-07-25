import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // install: npm i lucide-react

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl font-bold text-black">
          <span className="underline decoration-4 decoration-orange-500 decoration-double">Royal</span> PG
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium items-center">
          <Link to="/">Home</Link>
          <Link to="/facilities">Facilities</Link>
          <Link to="/BoysPg">Boys PG</Link>
          <Link to="/GirlsPg">Girls PG</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/admin"> Admin Login</Link>
        </nav>

        {/* Hamburger Icon */}
        <button onClick={toggleMenu} className="md:hidden z-50">
          {menuOpen ? <X size={28} className="text-white"/> : <Menu size={28} />}
        </button>

        {/* Sidebar */}
        <div className={`fixed top-0 right-0 h-full w-[70%] sm:w-[60%] md:hidden bg-[#393E46] text-white p-6 transition-transform duration-300 ease-in-out z-40 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          {/* Close button */}
          {/* <div className="flex justify-end ">
            <button onClick={toggleMenu}><X size={28} /></button>
          </div> */}

          <div className="mt-10 space-y-6 text-lg font-medium">
            
            <hr className="border-gray-500 my-4" />

          
          </div>
          {/* Sidebar Links */}
          <div className="mt-10 space-y-6 text-lg font-medium flex flex-col">
            <Link to="/" onClick={toggleMenu} className="hover:text-orange-400">Home</Link>
            <Link to="/facilities" onClick={toggleMenu} className="hover:text-orange-400">Facilities</Link>
            <Link to="/BoysPg" onClick={toggleMenu} className="hover:text-orange-400">Boys PG</Link>
            <Link to="/GirlsPg" onClick={toggleMenu} className="hover:text-orange-400">Girls PG</Link>
            <Link to="/contact" onClick={toggleMenu} className="hover:text-orange-400">Contact Us</Link>
            <Link to="/admin-login" onClick={toggleMenu} className="hover:text-orange-400">Admin login</Link>

          </div>
          

        </div>
      </div>
    </header>
  );
};

export default Header;
