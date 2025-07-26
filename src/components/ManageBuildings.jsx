import { useState, useEffect } from "react";
import axios from "axios";
import { Trash } from "lucide-react";

const ManageBuildings = () => {
  const [buildings, setBuildings] = useState([]);
  const [newBuilding, setNewBuilding] = useState("");
  const [error, setError] = useState("");

  // Fetch buildings on load
  useEffect(() => {
    fetchBuildings();
  }, []);

  const fetchBuildings = async () => {
    try {
      const res = await axios.get("https://pg-website-backend.onrender.com/api/buildings");
      setBuildings(res.data);
    } catch (err) {
      console.error(err);
      setError("Failed to load buildings");
    }
  };

  const addBuilding = async () => {
    try {
      await axios.post("https://pg-website-backend.onrender.com/api/buildings", {
        name: newBuilding,
      });
      setNewBuilding("");
      fetchBuildings(); // refresh
    } catch (err) {
      console.error(err);
      setError("Failed to add building");
    }
  };

  const deleteBuilding = async (id) => {
    try {
      await axios.delete(`https://pg-website-backend.onrender.com/api/buildings/${id}`);
      fetchBuildings(); // refresh
    } catch (err) {
      console.error(err);
      setError("Failed to delete building");
    }
  };

  return (
    <div className="max-w-xl mx-auto py-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Manage Buildings</h2>

      <div className="flex mb-6 gap-2">
        <input
          type="text"
          value={newBuilding}
          onChange={(e) => setNewBuilding(e.target.value)}
          placeholder="Enter new building name"
          className="flex-1 px-3 py-2 border border-gray-300 rounded-md"
        />
        <button
          onClick={addBuilding}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Add
        </button>
      </div>

      {error && <p className="text-red-600 mb-3">{error}</p>}

      <ul className="space-y-2">
        {buildings.length === 0 ? (
          <li className="text-gray-500 text-center">No buildings found.</li>
        ) : (
          buildings.map((building) => (
            <li
              key={building.id}
              className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded"
            >
              <span>{building.name}</span>
              <button
                onClick={() => deleteBuilding(building.id)}
                className="text-red-600 hover:text-red-800"
              >
                <Trash size={18} />
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default ManageBuildings;
