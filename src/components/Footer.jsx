import React from "react";
import { FaPhone, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#948979] text-white relative z-10 border-t border-[#295061]">
      

      {/* Info Section */}
      <div className="bg-[#948979] text-[#152b37] py-10 px-6 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        {/* Logo and Name */}
        <div>
          <h1 className="text-3xl font-bold mb-3">
            <span className="text-[#fff]">ROYAL</span>
            <span className="text-[#fff]"> PG</span>
            
            <div className="w-16 h-1 bg-[#b7e1ea] mt-2 rounded"></div>
          </h1>

          <p className="text-sm text-[#295061] mt-50">hi</p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="mb-2 flex items-center gap-2">
            <FaMapMarkerAlt /> House No 1-2, Joshi Vas, Ambli - Bopal Rd,
          </p>
          <p className="mb-2 pl-6">Ambli, Ahmedabad, Gujarat 380058</p>
          <p className="mb-2 flex items-center gap-2">
            <FaPhone /> 8972225520
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
      <div className="bg-[#f0f9fb] text-[#152b37] text-center py-4 px-7  text-sm">
        <div className="w-[80vw] mx-auto border-t border-[#295061] mb-4"></div>
        © 2025 Royal PG. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;
