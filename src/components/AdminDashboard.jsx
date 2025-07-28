import React, { useState } from "react"; // ✅ Add useState
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import Header from "./Header";
import Footer from "./Footer";
import {
  FaUserPlus,
  FaUsers,
  FaBuilding,
  FaDownload,
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
    route: "/manage-buildings",
  },
];

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [downloading, setDownloading] = useState(false); // ✅ Loader state

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/admin");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const handleDownload = async () => {
    try {
      setDownloading(true); // ✅ Start loader
      const response = await fetch(
        "https://pg-website-backend.onrender.com/api/tenants/download",
        {
          method: "GET",
          headers: {
            "Content-Type":
              "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
          },
        }
      );

      if (!response.ok) throw new Error("Failed to download file");

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "tenants-data.xlsx";
      document.body.appendChild(a);
      a.click();
      a.remove();
    } catch (error) {
      console.error("Download error:", error);
      alert("Failed to download file");
    } finally {
      setDownloading(false); 
    }
  };

  return (
    <>
      <Header />
      <div className="mb-10 p-4 mt-[15vh]">
        <div className="flex max-w-7xl mx-auto items-center justify-between mb-6 bg-[#DFD0B8] p-4 rounded-lg shadow-md">
          <div>
            <h1 className="text-xl font-bold text-[#2f2804] md:text-2xl">
              Welcome, Admin...
            </h1>
          </div>
          <div>
            <button
              onClick={handleLogout}
              className="bg-[#393E46] hover:bg-[#ff8080] hover:text-[#222831] text-white font-semibold py-2 px-4 rounded"
            >
              <MdLogout className="inline mr-1" /> Logout
            </button>
          </div>
        </div>

        <div className="p-6 shadow-md rounded-2xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto bg-[#DFD0B8]">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4 h-[18vh] rounded-xl shadow-md cursor-pointer transition hover:scale-105 bg-[#393E46] text-white"
              onClick={() => navigate(card.route)}
            >
              <div>{card.icon}</div>
              <div>
                <h2 className="font-bold text-lg">{card.title}</h2>
                <p className="text-sm">{card.description}</p>
              </div>
            </div>
          ))}

          {/* ✅ Download Card with loader */}
          <div
            className={`flex items-center gap-4 p-4 h-[18vh] rounded-xl shadow-md transition hover:scale-105 bg-[#393E46] text-white ${
              downloading ? "cursor-not-allowed opacity-60" : "cursor-pointer"
            }`}
            onClick={!downloading ? handleDownload : undefined}
          >
            <div>
              {downloading ? (
                <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-white"></div>
              ) : (
                <FaDownload size={28} />
              )}
            </div>
            <div>
              <h2 className="font-bold text-lg">Download Data</h2>
              <p className="text-sm">Download tenants data in Excel format</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdminDashboard;
