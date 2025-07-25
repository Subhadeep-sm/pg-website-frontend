import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import {
  FaUserPlus,
  FaUsers,
  FaBuilding,
  FaMoneyBillAlt,
  FaKey,
  FaDownload 
} from "react-icons/fa";

import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { PiPlusMinusFill } from "react-icons/pi";
import { MdLogout } from "react-icons/md";



const cards = [
  {
    title: "Add Tenant",
    description: "Register a new tenant into the system",
    icon: <FaUserPlus size={28} />,
    bgColor: "bg-[#DFD0B8] text-[#222831]",
    route: "/add-tenant",
  },
  {
    title: "All Tenants",
    description: "View and manage all registered tenants",
    icon: <FaUsers size={28} />,
    bgColor: "bg-[#948979] text-white",
    route: "/all-tenants",
  },
  {
    title: "Building-wise Data",
    description: "See data categorized by building blocks",
    icon: <FaBuilding size={28} />,
    bgColor: "bg-[#393E46] text-white",
    route: "/building-data",
  },
//   {
//     title: "Download Data",
//     description: "Download tenants data in Excel format",
//     icon: <FaMoneyBillAlt size={28} />,
//     bgColor: "bg-[#222831] text-white",
//     route: "/change-rent",
//   },
  {
    title: "Change Rent",
    description: "Update rent details for rooms or buildings",
    icon: <RiMoneyRupeeCircleFill size={28} />,
    bgColor: "bg-[#222831] text-white",
    route: "/change-rent",
  },
  {
    title: "Add/Delete Buildings",
    description: "Manage building records in the system",
    icon: <PiPlusMinusFill size={28} />,
    bgColor: "bg-[#222831] text-white",
    route: "/change-rent",
  },
//   {
//     title: "Reset Password",
//     description: "Reset your admin or user account password",
//     icon: <FaKey size={28} />,
//     bgColor: "bg-[#DFD0B8] text-[#222831]",
//     route: "/reset-password",
//   },
];

const AdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
    <div className="mb-10 p-6 mt-5">
        <div className="flex max-w-7xl mx-auto items-center justify-between mb-6 bg-[#DFD0B8] p-4 rounded-lg shadow-md">
            <div>
<h1 className="text-xl font-bold text-left  text-[#2f2804] md:text-2xl">
        Welcome, Admin...
      </h1>
            </div>
      <div>
<button
            // onClick={() => navigate("/admin")}
            className="bg-[#393E46] hover:bg-[#ff8080] hover:text-[#222831] text-[#fff] font-semibold py-2 px-4 rounded">
                <MdLogout className="inline"/> Logout
                </button>
      </div>
        
      </div>

      <div className="p-8 shadow-md rounded-2xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto bg-[#DFD0B8]">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`flex items-center gap-4 p-5 h-[20vh] rounded-xl shadow-md cursor-pointer transition hover:scale-[1.03] bg-[#393E46] text-white`}
            onClick={() => navigate(card.route)}
          >
            <div className="">{card.icon}</div>
            <div>
              <h2 className="font-bold text-lg">{card.title}</h2>
              <p className="text-sm">{card.description}</p>
            </div>
          </div>
        ))}
        <div
            // key={index}
            className={`flex items-center gap-4 p-5 h-[20vh] rounded-xl shadow-md cursor-pointer transition hover:scale-[1.03] bg-[#393E46] text-white`}
            // onClick={() => navigate(card.route)}
          >
            <div className=""><FaDownload size={28} /></div>
            <div>
              <h2 className="font-bold text-lg">Download Data</h2>
              <p className="text-sm">Download tenants data in Excel format</p>
            </div>
          </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default AdminDashboard;
