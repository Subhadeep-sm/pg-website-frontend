import { useState, useEffect } from "react";
import axios from "axios";

const ChangeRent = () => {
  const [rents, setRents] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchRents();
  }, []);

  const fetchRents = async () => {
    try {
      const res = await axios.get("https://pg-website-backend.onrender.com/api/rent/all");
      setRents(res.data);
    } catch (err) {
      console.error(err);
      setError("Failed to load rent data");
    }
  };

  const handleChange = (index, field, value) => {
    const updated = [...rents];
    updated[index][field] = value;
    setRents(updated);
  };

  const updateRent = async (roomType, lowRent, highRent) => {
    try {
      await axios.put(`https://pg-website-backend.onrender.com/api/rent/${roomType}`, {
        roomType,
        lowRent: Number(lowRent),
        highRent: Number(highRent),
      });
      alert("Rent updated successfully!");
    } catch (err) {
      console.error(err);
      alert("Failed to update rent.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">Change Rent</h2>

      {error && <p className="text-red-600 text-center mb-4">{error}</p>}

      <div className="space-y-4">
        {rents.map((rent, index) => (
          <div
            key={rent.id}
            className="bg-white border border-gray-200 rounded-xl shadow-md p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >
            <div className="flex-1">
              <p className="text-lg font-medium text-gray-700">{rent.roomType}</p>
              <div className="flex gap-3 mt-2">
                <input
                  type="number"
                  value={rent.lowRent}
                  onChange={(e) => handleChange(index, "lowRent", e.target.value)}
                  className="w-24 px-3 py-2 border rounded-md"
                  placeholder="Low Rent"
                />
                <input
                  type="number"
                  value={rent.highRent}
                  onChange={(e) => handleChange(index, "highRent", e.target.value)}
                  className="w-24 px-3 py-2 border rounded-md"
                  placeholder="High Rent"
                />
              </div>
            </div>
            <button
              onClick={() => updateRent(rent.roomType, rent.lowRent, rent.highRent)}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Save
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChangeRent;
