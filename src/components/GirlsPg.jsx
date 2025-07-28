import React from "react";

const GirlsPG = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br bg-[#f3f1ec] px-4 mt-[10vh]">
      {/* Page Heading */}
      <div className="text-center pt-16">
        <h1 className="text-5xl font-bold text-[#222831]">Girls PG</h1>

      </div>

      {/* Coming Soon Message */}
      <div className="flex items-center justify-center h-[calc(100vh-120px)]">
        <div className="text-center p-10 rounded-xl shadow-lg bg-[#fdebd0] animate-fadeIn">
          <p className="text-5xl font-bold text-[#5c4b3c]">Coming Soon !!!</p>
        </div>
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
