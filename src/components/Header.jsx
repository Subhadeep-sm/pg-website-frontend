import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import royalPgLogo from "../assets/royal-pg-logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => setMenuOpen(!menuOpen);


  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        
        setShowHeader(false);
      } else {
        
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`bg-white shadow-md fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
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
          <Link to="/" className="hover:text-[#948979]">Home</Link>
          <Link to="/facilities" className="hover:text-[#948979]">Facilities</Link>
          <Link to="/BoysPg" className="hover:text-[#948979]">Boys PG</Link>
          <Link to="/GirlsPg" className="hover:text-[#948979]">Girls PG</Link>
          <Link to="/contact" className="hover:text-[#948979]">Contact Us</Link>
          <Link to="/admin" className="hover:text-[#948979] bg-[#fff0db] border-1 rounded-2xl p-1.5">Admin Dashboard</Link>
        </nav>

        {/* Hamburger Icon */}
<button onClick={toggleMenu} className="md:hidden z-[60]">
  {menuOpen ? <X size={28} className="text-black" /> : <Menu size={28} />}
</button>
</div>

{/* Sidebar (Slide from Top) */}
<div
  className={`fixed top-0 left-0 w-full bg-[#464b53] text-white z-50 transition-transform duration-300 ease-in-out transform ${
    menuOpen ? "translate-y-16" : "-translate-y-full"
  }`}
>
  <div className=" space-y-6 text-lg font-medium flex flex-col p-6">
    <Link to="/" onClick={toggleMenu} className="hover:text-[#948979]">Home</Link>
    <Link to="/facilities" onClick={toggleMenu} className="hover:text-[#948979]">Facilities</Link>
    <Link to="/BoysPg" onClick={toggleMenu} className="hover:text-[#948979]">Boys PG</Link>
    <Link to="/GirlsPg" onClick={toggleMenu} className="hover:text-[#948979]">Girls PG</Link>
    <Link to="/contact" onClick={toggleMenu} className="hover:text-[#948979]">Contact Us</Link>
    <Link to="/admin" onClick={toggleMenu} className="hover:text-[#948979]">Admin Login</Link>
  </div>
</div>

{/* Overlay */}
{menuOpen && (
  <div
    className="fixed inset-0 bg-black opacity-20 z-40 md:hidden"
    onClick={toggleMenu}
  />
)}

    </header>
  );
};

export default Header;
