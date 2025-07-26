import React, { useEffect,useState} from "react";
import room from "../assets/room.jpg";
import axios from "axios";


  const BoysPG = () => {
  const buildings = [
    {
      name: "Sunrise Residency",
      image: room,
    },
    {
      name: "Maple Heights",
      image: room,
    },
    {
      name: "Green Valley PG",
      image: room,
    },
  ];

  const rooms = [
    {
      id: 1,
      type: "Single Sharing",
      image: room,
      price: "₹10,000/month",
      features: ["Attached Bathroom", "Wi-Fi", "AC", "1 Bed"],
    },
    {
      id: 2,
      type: "Double Sharing",
      image: room,
      price: "₹7,000/month",
      features: ["2 Beds", "Common Bathroom", "Wi-Fi"],
    },
    {
      id: 3,
      type: "Triple Sharing",
      image: room,
      price: "₹5,000/month",
      features: ["3 Beds", "Shared Washroom", "Fan", "Wi-Fi"],
    },
  ];
const [pgData, setPgData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPGData = async () => {
  try {
    const response = await axios.get("https://pg-website-backend.onrender.com/api/rent/all");
    console.log("Fetched PG data:", response.data); 
    setPgData(response.data); 
    
    
  } catch (err) {
    console.error(err);
    setError("Failed to fetch PG data");
  } finally {
    setLoading(false);
  }
};

    fetchPGData();
  }, []);

  
//   useEffect(() => {
//   console.log("Updated pgData:", pgData);
// }, [pgData]);

  if (loading) {
    return <div className="text-center text-4xl text-gray-700 min-h-screen p-50">

      Loading...
      </div>;
  }
  return (
    <div className="text-gray-800">
      {/* Intro */}
      <section className="bg-gradient-to-r from-[#f2f2f2]-50 to-[#f2f2f2]-100 text-center py-16 px-6">
        <h1 className="text-4xl font-bold mb-4 text-[#222831]-800">Boys PG Accommodations</h1>
        <p className="text-lg text-[#fff0db]-700">Find safe, clean, and Royal Boys PGs near you.</p>
      </section>

      

      {/* Room Types */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-3xl font-semibold text-center text-[#635b4f]-700 mb-10">Room Types</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {rooms.map((room, index) => (
            <div
              key={index}
              className="bg-[#faf0e6] rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <img src={room.image} alt={room.type} className="w-full h-48 object-cover" />
              <div className="p-5" >
                <h3 className="text-xl font-bold text-gray-800 mb-2">{room.type}</h3>
                <p className="text-sm text-red-700 font-semibold mb-4">{pgData[index] ? `₹${pgData[index].lowRent} - ₹${pgData[index].highRent}` : "Price not available"}</p>
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
      {/* Buildings */}
      <section className="py-12 px-6 bg-[#fff]">
        <h2 className="text-3xl font-semibold text-center text-[#635b4f]-600 mb-10">Available Buildings</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {buildings.map((building, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-transform hover:scale-105 duration-300"
            >
              <img src={building.image} alt={building.name} className="w-full h-48 object-cover" />
              <div className="p-4 bg-[#faf0e6]-50 text-center">
                <h3 className="text-xl font-bold">{building.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BoysPG;
