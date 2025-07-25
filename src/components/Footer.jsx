import React from "react";
import { FaPhone, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

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

          <p className="text-sm text-[#fff] mt-50">hi</p>
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
            <li>» Home</li>
            <li>» About Us</li>
            <li>» Our PG</li>
            <li>» Facilities</li>
            <li>» Gallery</li>
            <li>» Blog</li>
          </ul>
        </div>
      </div>
      
      

      {/* Footer Bottom */}
      <div className="bg-[#2a2722] text-[#fff] text-center py-4 px-7  text-sm">
        <div className="w-[80vw] mx-auto border-t border-[#2a2722] mb-4"></div>
        © 2025 Royal PG. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;
