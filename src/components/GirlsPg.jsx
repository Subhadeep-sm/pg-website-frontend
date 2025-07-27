import React from "react";

const GirlsPG = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-white to-neutral-100">
      <div className="text-center p-8 bg-white rounded-xl shadow-lg max-w-md animate-fadeIn">
        <h1 className="text-4xl font-bold text-pink-600 mb-4">Girls PG</h1>
        <p className="text-xl text-gray-700 mb-6">We're working on it!</p>
        <p className="text-md text-gray-500">This page is coming soon. Stay tuned for updates.</p>
      </div>
      {/* WhatsApp Floating Button */}
          <a
            href="https://wa.me/919088432555"
            className="fixed bottom-6 right-6 bg-[#005b23] hover:bg-[#1db954] text-white px-5 py-2 rounded-full shadow-lg flex items-center gap-2 z-50 transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
              alt="WhatsApp"
              className="w-5 h-5"
            />
            <b>WhatsApp us</b>
          </a>
    </div>
    
  );
};

export default GirlsPG;
