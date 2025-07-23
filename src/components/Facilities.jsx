import React from "react";
import {
  FaBed,
  FaUtensils,
  FaLock,
  FaBath,
  FaCouch,
  FaGasPump,
  FaTint,
  FaWater,
  FaBroom,
  FaBlender,
} from "react-icons/fa";
import { GiElevator } from "react-icons/gi";
import { MdOutlineKitchen, MdOutlineCleaningServices } from "react-icons/md";
import Header from "./Header";

const facilitiesData = [
  { icon: <FaBed size={40} />, title: "1,2,3 Sharing Rooms (AC / Non-AC), Personal Bed" },
  { icon: <FaUtensils size={40} />, title: "Breakfast, Lunch & Dinner" },
  { icon: <FaLock size={40} />, title: "Cupboards With Locks" },
  { icon: <FaBath size={40} />, title: "Attached / Common Bathroom" },
  { icon: <FaBed size={40} />, title: "1,2,3 Sharing Rooms (AC / Non-AC), Personal Bed" },
  { icon: <FaUtensils size={40} />, title: "Breakfast, Lunch & Dinner" },
  { icon: <FaLock size={40} />, title: "Cupboards With Locks" },
  { icon: <FaBath size={40} />, title: "Attached / Common Bathroom" },
  { icon: <GiElevator size={40} />, title: "Lift Facility" },
  { icon: <FaBlender size={40} />, title: "Refrigerator" },
  { icon: <MdOutlineCleaningServices size={40} />, title: "Washing Machine" },
  { icon: <FaCouch size={40} />, title: "Sofa/Dining Table with Chair" },
  { icon: <MdOutlineKitchen size={40} />, title: "Gas Burner and Kitchen Facilities" },
  { icon: <FaTint size={40} />, title: "Purified Drinking Water" },
  { icon: <FaWater size={40} />, title: "24/7 Water Supply" },
  { icon: <FaBroom size={40} />, title: "Daily Housekeeping" },
];

const Facilities = () => {
  return (
    <>
      <Header />
      <div className="bg-[#f0f9fb] min-h-screen p-6">
        <h2 className="text-center text-3xl font-bold mb-4 text-[#152b37]">Facilities</h2>
        <p className="text-center text-[#295061] mb-10">
          Enjoy top-notch amenities designed for comfort and convenience.
        </p>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl mx-auto">
          {facilitiesData.map((facility, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-[#d9f1f4] p-6 flex flex-col items-center text-center hover:shadow-md hover:scale-[1.02] transition-all duration-200"
            >
              <div className="text-[#295061] mb-4">{facility.icon}</div>
              <p className="text-[#152b37] font-medium text-sm">{facility.title}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Facilities;
