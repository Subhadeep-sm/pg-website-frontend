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
        const response = await axios.get("https://frail-bambie-soumyaghosh-0d1c4401.koyeb.app/api/rent/all");
        setPgData(response.data);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch PG data");
      }
    };

    const fetchBuildings = async () => {
      try {
        const response = await axios.get("https://frail-bambie-soumyaghosh-0d1c4401.koyeb.app/api/buildings");
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
        <p className="text-lg text-[#444]">Choose the best Boys PG in Salt Lake to experience the real luxury and royal form of living</p>
      </section>

      {/* Room Types */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-3xl font-semibold text-center text-[#635b4f] mb-10">Available Rooms</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {rooms.map((room, index) => (
            <div
              key={index}
              className="bg-[#faf0e6] rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <img src={room.image} alt={room.type} className="w-full h-48 object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{room.type}</h3>
                <p className="text-sm text-[#faf0e6]-700 font-bold mb-4">
                  {pgData[index] ? `₹${pgData[index].lowRent} - ₹${pgData[index].highRent}` : "Price not available"}
                </p>
                <ul className="text-sm text-gray-600 space-y-1  list-inside">
                  {room.features.map((feature, i) => (
                    <li key={i}><b>{feature}</b></li>
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
                className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-transform hover:scale-105 duration-300 bg-gray-500"
              >
                <img
                 src="data:image/png;base64,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"
                  alt={building.name} className="w-full h-48 object-cover" />
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
