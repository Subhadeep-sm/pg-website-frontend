import React from "react";
import primeLocation from "../assets/prime-location.jpg";
import cleanRoom from "../assets/clean-room.jpg";
import homeCookedFood from "../assets/food.png";
import wifiImage from "../assets/wifi-service.png";

const WhyChooseUs = () => {
  return (
    <section className="bg-[#fff0db] px-6 py-16 text-[#222831]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* IMAGE GRID WITH CENTER CIRCLE */}
          <div className="flex-1 relative grid grid-cols-2 grid-rows-2 gap-4">
            <img src={primeLocation} alt="Prime Location - Near Educational Institutes" className="rounded-lg shadow-lg" />
            <img src={cleanRoom} alt="Clean and Hygienic Rooms" className="rounded-lg shadow-lg" />
            <img src={homeCookedFood} alt="Home Cooked Healthy Meals" className="rounded-lg shadow-lg" />
            <img src={wifiImage} alt="High Speed WiFi Service" className="rounded-lg shadow-lg" />
            
            {/* Center Circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="w-36 h-36 bg-[#948979] text-white flex items-center justify-center text-center text-lg font-bold rounded-full shadow-xl">
                Why <br /> Choose <br /> Us
              </div>
            </div>
          </div>

          {/* FEATURES LIST */}
          <div className="flex-1 space-y-4 text-white">
            <div className="bg-[#948979] p-4 rounded shadow-md text-white">
              <strong>Prime Location</strong> – Near top educational institutes & IT hub
            </div>
            <div className="bg-[#948979] p-4 rounded shadow-md">
              <strong>Tasty & Healthy Meals</strong> – Daily home-cooked Veg and Non-Veg food
            </div>
            <div className="bg-[#948979] p-4 rounded shadow-md">
              <strong>Safe & Secure Stay</strong> – 24/7 security & CCTV surveillance
            </div>
            <div className="bg-[#948979] p-4 rounded shadow-md">
              <strong>Daily Cleaning</strong> – Hygiene is our top priority
            </div>
            <div className="bg-[#948979] p-4 rounded shadow-md">
              <strong>Self Laundry</strong> – Each floor with washing machine
            </div>
            <div className="bg-[#948979] p-4 rounded shadow-md">
              <strong>WiFi Available</strong> – 24/7 high-speed internet service
            </div>
            <div className="bg-[#948979] p-4 rounded shadow-md">
              <strong>Affordable Pricing</strong> – Rooms starting at ₹6000 only
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;