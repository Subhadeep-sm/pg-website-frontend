import React, { useEffect, useState } from "react";
import room1 from "../assets/hero1.png";
import room2 from "../assets/hero2.png";
import room3 from "../assets/hero3.png";
import axios from "axios";

const BoysPG = () => {
  const [pgData, setPgData] = useState([]);
  const [buildingData, setBuildingData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch rent data
  useEffect(() => {
    const fetchPGData = async () => {
      try {
        const response = await axios.get("https://pg-website-backend.onrender.com/api/rent/all");
        setPgData(response.data);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch PG data");
      }
    };

    const fetchBuildings = async () => {
      try {
        const response = await axios.get("https://pg-website-backend.onrender.com/api/buildings");
        setBuildingData(response.data);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch building data");
      }
    };

    Promise.all([fetchPGData(), fetchBuildings()]).finally(() => {
      setLoading(false);
    });
  }, []);

  const rooms = [
    {
      id: 1,
      type: "Single Sharing",
      image: room1,
      price: "₹10,000/month",
      features: ["A Cozy private single room equipped with all essential amenities for a peaceful and comfortable living experience"],
    },
    {
      id: 2,
      type: "Double Sharing",
      image: room2,
      price: "₹7,000/month",
      features: ["Spacious and comfortable double sharing room with twin beds, individual storage, and a clean, well-lit environment."],
    },
    {
      id: 3,
      type: "Triple Sharing",
      image: room3,
      price: "₹5,000/month",
      features: ["Spacious triple-sharing room with individual beds, study areas, and ample storage for a comfortable and budget-friendly stay."],
    },
  ];

  if (loading) {
    return (
      <div className="text-center text-4xl text-gray-700 min-h-screen flex justify-center items-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="text-gray-800 mt-[10vh]">
      {/* Intro */}
      <section className="bg-gradient-to-r from-[#f2f2f2] to-[#f2f2f2] text-center py-16 px-6">
        <h1 className="text-5xl font-bold mb-4 text-[#222831]">Boys PG Accommodations</h1>
        <p className="text-lg text-[#444]">Choose the best Boys PG in Saltlake to experience the real luxary and Royal form of living</p>
      </section>

      {/* Room Types */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-3xl font-semibold text-center text-[#635b4f] mb-10">Room Types</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {rooms.map((room, index) => (
            <div
              key={index}
              className="bg-[#faf0e6] rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <img src={room.image} alt={room.type} className="w-full h-48 object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{room.type}</h3>
                <p className="text-sm text-[#faf0e6]-700 font-semibold mb-4">
                  {pgData[index] ? `₹${pgData[index].lowRent} - ₹${pgData[index].highRent}` : "Price not available"}
                </p>
                <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
                  {room.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Buildings Section (Dynamically Loaded) */}
      <section className="py-12 px-6 bg-[#fff]">
        <h2 className="text-3xl font-semibold text-center text-[#635b4f] mb-10">Available Buildings</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {buildingData.length === 0 ? (
            <p className="text-center col-span-3 text-gray-500">No buildings available.</p>
          ) : (
            buildingData.map((building, index) => (
              <div
                key={building.id || index}
                className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-transform hover:scale-105 duration-300"
              >
                <img src={room} alt={building.name} className="w-full h-48 object-cover" />
                <div className="p-4 bg-[#faf0e6] text-center">
                  <h3 className="text-xl font-bold">{building.name}</h3>
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* WhatsApp Button */}
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

export default BoysPG;
