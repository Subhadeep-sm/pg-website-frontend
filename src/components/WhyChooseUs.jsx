import React from "react";
import room1 from "../assets/room.jpg"; // use actual image paths
import room2 from "../assets/room.jpg";
import room3 from "../assets/room.jpg";
import room4 from "../assets/room.jpg";

const WhyChooseUs = () => {
  return (
    <section className="bg-gray-100 px-6 py-16 text-gray-800">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                
    
                {/* IMAGE GRID WITH CENTER CIRCLE */}
    <div className="flex-1 relative grid grid-cols-2 grid-rows-2 gap-4">
      {/* Top Left Pic */}
      <img src={room1} alt="Room 1" className="rounded-lg shadow" />
      
      {/* Top Right Pic */}
      <img src={room2} alt="Room 2" className="rounded-lg shadow" />
      
      {/* Bottom Left Pic */}
      <img src={room3} alt="Room 3" className="rounded-lg shadow" />
      
      {/* Bottom Right Pic */}
      <img src={room4} alt="Room 4" className="rounded-lg shadow" />
    
      {/* Center Circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="w-36 h-36 bg-black text-white flex items-center justify-center text-center text-lg font-bold rounded-full shadow-lg">
          Why <br /> Choose <br /> Us
        </div>
      </div>
    </div>


    {/* FEATURES LIST */}
                <div className="flex-1 space-y-4">
                  <div className="bg-white p-4 rounded shadow-md">
                    <strong>Prime Location</strong> – Near top educational institutes & IT hub
                  </div>
                  <div className="bg-white p-4 rounded shadow-md">
                    <strong>Tasty & Healthy Meals</strong> – Daily home-cooked Veg and Non-Veg food
                  </div>
                  <div className="bg-white p-4 rounded shadow-md">
                    <strong>Safe & Secure Stay</strong> – 24/7 security & CCTV surveillance
                  </div>
                  <div className="bg-white p-4 rounded shadow-md">
                    <strong>Daily Cleaning </strong> – Hygiene is our top priority
                  </div>
                  <div className="bg-white p-4 rounded shadow-md">
                    <strong>Self Laundry </strong> – Each floor with washing machine
                  </div>
                  <div className="bg-white p-4 rounded shadow-md">
                    <strong>WiFi Available </strong> – 24/7 high-speed internet service
                  </div>
                  <div className="bg-white p-4 rounded shadow-md">
                    <strong>Affordable Pricing</strong> – Rooms starting at 6000 only
                  </div>
                </div>
    
              </div>
            </div>
          </section>
  );
};

export default WhyChooseUs;
