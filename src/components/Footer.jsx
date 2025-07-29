import React from "react";
import { FaPhone, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import royalPgLogo from "../assets/royal-pg-logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#2a2722] text-white relative z-10 border-t border-[#295061]">
      
      {/* Info Section */}
      <div className="bg-[#2a2722] text-[#fff] py-10 px-6 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        
        {/* Logo and Name */}
        <div>
          <div className="flex justify-center items-center gap-3 mb-3">
            <img 
              src={royalPgLogo} 
              alt="Royal PG Logo" 
              className="h-18 md:h-20 lg:h-26 w-auto drop-shadow-md drop-shadow-amber-50"
            />
            {/* <h1 className="text-3xl font-bold">
              <span className="text-[#fff]">ROYAL</span>
              <span className="text-[#fff]"> PG</span>
            </h1> */}
          </div>
        </div>

        {/* Contact Info */}
        <div className="items-center justify-center">
          <h3 className="text-xl font-semibold mb-4 text-center">Contact Us</h3>
          <p className="mb-2 flex items-center gap-2 text-center justify-center">
            <FaMapMarkerAlt /> Rose Apartments, Sector V, Bidhannagar,
          </p>
          <p className="mb-2 pl-6 text-center justify-center">Kolkata, West Bengal 700102</p>
          <p className="mb-2 flex items-center gap-2 text-center justify-center">
            <FaPhone /> 9088432555
          </p>
          <p className="mb-2 flex items-center gap-2 text-center justify-center">
            <FaPhone /> 9038227687
          </p>
          <p className="mb-2 flex items-center gap-2 text-center justify-center">
            <FaPhone /> 9830974784
          </p>
        
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-center justify-center">Useful Links</h3>
          <ul className="space-y-2 text-center justify-center">
            <Link to="/facilities"><li>» Facilities</li></Link>
            <Link to="/BoysPg"><li>» Boys PG</li></Link>
            <Link to="/GirlsPg"><li>» Girls PG</li></Link>
            <Link to="/contact"><li>» Contact us</li></Link>
          </ul>
        </div>
      </div>
      
      {/* Footer Bottom */}
      <div className="bg-[#2a2722] text-[#fff] text-center py-4 px-7 text-sm">
        <div className="w-[80vw] mx-auto border-t border-[#444] mb-4"></div>
        <div className="flex flex-col gap-2">
          <p>© 2025 Royal PG. All rights reserved.</p>
          <p className="text-xs text-gray-400">Made with ❤️ by SSD Solutions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;