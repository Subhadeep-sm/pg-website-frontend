import React from "react";
import { FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom"; // <- Import for internal navigation

const Footer = () => {
  return (
    <footer className="bg-[#2a2722] text-white relative z-10 border-t border-[#295061]">

      {/* Info Section */}
      <div className="bg-[#2a2722] text-[#fff] py-10 px-6 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        
        {/* Logo and Name */}
        <div>
          <h1 className="text-3xl font-bold mb-3">
            <span className="text-[#fff]">ROYAL</span>
            <span className="text-[#fff]"> PG</span>
            <div className="w-16 h-1 bg-[#fff] mt-2 rounded"></div>
          </h1>
          <p className="text-sm text-[#fff]">Premium comfort and safety for all.</p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="mb-2 flex items-center gap-2">
            <FaMapMarkerAlt /> Rose Apartments, Sector V, Bidhannagar,
          </p>
          <p className="mb-2 pl-6">Kolkata, West Bengal 700102</p>
          <p className="mb-2 flex items-center gap-2">
            <FaPhone /> 9088432555
          </p>
          <p className="mb-2 flex items-center gap-2">
            <FaPhone /> 9038227687
          </p>
          <p className="mb-2 flex items-center gap-2">
            <FaPhone /> 9830974784
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Useful Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:underline">» Home</Link>
            </li>
            <li>
              <Link to="/facilities" className="hover:underline">» Facilities</Link>
            </li>
            <li>
              <Link to="/BoysPg" className="hover:underline">» Boys PG</Link>
            </li>
            <li>
              <Link to="/GirlsPg" className="hover:underline">» Girls PG</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">» Contact Us</Link>
            </li>
            <li>
              <Link to="/admin" className="hover:underline">» Admin Login</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-[#2a2722] text-[#fff] text-center py-4 px-7 text-sm">
        <div className="w-[80vw] mx-auto border-t border-[#fff] mb-4"></div>
        © 2025 Royal PG. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
