import { useState, useEffect } from "react";
import axios from "axios";

const ChangeRent = () => {
  const [rents, setRents] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRents();
  }, []);

  const fetchRents = async () => {
    try {
      setLoading(true);
      const res = await axios.get("https://frail-bambie-soumyaghosh-0d1c4401.koyeb.app/api/rent/all");
      setRents(res.data);
    } catch (err) {
      console.error(err);
      setError("Failed to load rent data");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (index, field, value) => {
    const updated = [...rents];
    updated[index][field] = value;
    setRents(updated);
  };

  const updateRent = async (roomType, lowRent, highRent) => {
    try {
      await axios.put(`https://frail-bambie-soumyaghosh-0d1c4401.koyeb.app/api/rent/${roomType}`, {
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
    <div className="max-w-6xl mx-auto py-15 px-4 mt-[10vh]">
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">Change Rent</h2>

      {error && <p className="text-red-600 text-center mb-4">{error}</p>}

      {loading ? (
        <div className="flex justify-center py-16">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-[#222831]"></div>
        </div>
      ) : (
        <div className="flex flex-wrap justify-center gap-6">
          {rents.map((rent, index) => (
            <div
              key={rent.id}
              className="w-full sm:w-[48%] lg:w-[30%] bg-[#DFD0B8] border border-gray-200 rounded-xl shadow-md p-5 flex flex-col gap-4"
            >
              <div>
                <p className="text-2xl font-bold text-gray-700">{rent.roomType}</p>
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
                className="bg-[#222831] text-white px-4 py-2 rounded-md hover:bg-[#393E46] transition self-start"
              >
                Save
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ChangeRent;
