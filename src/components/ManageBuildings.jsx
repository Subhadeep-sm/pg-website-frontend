import { useState, useEffect } from "react";
import axios from "axios";
import { Trash } from "lucide-react";

const ManageBuildings = () => {
  const [buildings, setBuildings] = useState([]);
  const [newBuilding, setNewBuilding] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true); // Loader state

  useEffect(() => {
    fetchBuildings();
  }, []);

  const fetchBuildings = async () => {
    try {
      setLoading(true); // Start loader
      const res = await axios.get("https://pg-website-backend.onrender.com/api/buildings");
      setBuildings(res.data);
    } catch (err) {
      console.error(err);
      setError("Failed to load buildings");
    } finally {
      setLoading(false); // Stop loader
    }
  };

  const addBuilding = async () => {
    try {
      await axios.post("https://pg-website-backend.onrender.com/api/buildings", {
        name: newBuilding,
      });
      setNewBuilding("");
      fetchBuildings();
    } catch (err) {
      console.error(err);
      setError("Failed to add building");
    }
  };

  const deleteBuilding = async (id) => {
    try {
      await axios.delete(`https://pg-website-backend.onrender.com/api/buildings/${id}`);
      fetchBuildings();
    } catch (err) {
      console.error(err);
      setError("Failed to delete building");
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-10 px-4 bg-white min-h-screen mt-[0.8vh]">
      <h2 className="text-4xl font-bold text-center mb-10 text-[#222831]">Manage Buildings</h2>

      {/* Add form */}
      <div className="flex max-w-xl mx-auto gap-2 mb-8">
        <input
          type="text"
          value={newBuilding}
          onChange={(e) => setNewBuilding(e.target.value)}
          placeholder="Enter new building name"
          className="flex-1 px-4 py-2 border border-[#948979] rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#948979] bg-white text-[#393E46]"
        />
        <button
          onClick={addBuilding}
          className="bg-[#222831] text-white px-6 py-2 rounded-lg hover:bg-[#393E46] transition"
        >
          Add
        </button>
      </div>

      {error && <p className="text-red-500 text-center mb-4">{error}</p>}

      {/* Loader */}
      {loading ? (
        <div className="flex justify-center py-16">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-[#222831]"></div>
        </div>
      ) : (
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {buildings.map((building) => (
            <div
              key={building.id}
              className="bg-[#DFD0B8] rounded-2xl shadow-xl overflow-hidden transform transition hover:scale-105"
            >
              {/* Background Image */}
              <div
                className="h-66 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://cdn-icons-png.flaticon.com/512/24/24914.png')`,
                }}
              ></div>

              {/* Content */}
              <div className="p-5 flex items-center justify-between bg-[#71685b]">
                <h3 className="text-xl font-semibold text-[#fff]">{building.name}</h3>
                <button
                  onClick={() => deleteBuilding(building.id)}
                  className="text-red-100 hover:text-red-300 transition"
                >
                  <Trash size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ManageBuildings;
