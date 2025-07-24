import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import {
  FaBed,
  FaUtensils,
  FaLock,
  FaBath,
  FaBlender,
  FaBroom,
  FaTint,
  FaWater,
  FaWifi,
  FaParking,
  FaVideo, // ✅ Make sure this is included
} from "react-icons/fa";
import {
  MdOutlineCleaningServices,
  MdTableRestaurant,
} from "react-icons/md";
import { TbToolsKitchen2 } from "react-icons/tb";
// import { FaVideo } from "react-icons/fa";
import { BsCupHot } from "react-icons/bs";

const facilitiesData = [
  { icon: <FaBed size={40} />, title: "1,2,3 Sharing Rooms, Personal Bed" },
  { icon: <TbToolsKitchen2 size={40} />, title: "Home-cooked Veg & Non-Veg Food" },
  { icon: <BsCupHot size={40} />, title: "Breakfast & Dinner Included" },
  { icon: <FaLock size={40} />, title: "Personal Cupboards with Locks" },
  { icon: <MdTableRestaurant size={40} />, title: "Personal Study Table" },
  { icon: <FaBath size={40} />, title: "Common Bathroom" },
  { icon: <FaBlender size={40} />, title: "Refrigerator" },
  { icon: <MdOutlineCleaningServices size={40} />, title: "Washing Machine" },
  { icon: <FaBroom size={40} />, title: "Weekly Housekeeping" },
  { icon: <FaTint size={40} />, title: "Purified Drinking Water" },
  { icon: <FaWater size={40} />, title: "24/7 Water Supply" },
  { icon: <FaWifi size={40} />, title: "High-Speed Wi-Fi Facility" },
  { icon: <FaVideo size={40} />, title: "CCTV Surveillance" },
  { icon: <FaParking size={40} />, title: "Two-Wheeler Parking" },
];



const Facilities = () => {
  return (
    <>
      <Header />
      <div className="bg-[#fff0db] min-h-screen p-6">
        <h2 className="text-center text-3xl font-bold mb-4 text-[#152b37]">Facilities</h2>
        <p className="text-center text-[#295061] mb-10">
          Enjoy top-notch amenities designed for comfort and convenience.
        </p>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl mx-auto mb-10">
          {facilitiesData.map((facility, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-[#d9f1f4] p-6 flex flex-col items-center text-center hover:shadow-md hover:scale-[1.02] transition-all duration-200"
            >
              <div className="text-[#948979] mb-4">{facility.icon}</div>
              <p className="text-[#948979] font-medium text-sm">{facility.title}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Facilities;
