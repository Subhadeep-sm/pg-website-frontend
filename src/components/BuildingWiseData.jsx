import React, { useEffect, useState } from "react";
import axios from "axios";

const BuildingWiseData = () => {
  const [buildings, setBuildings] = useState([]);
  const [selectedBuilding, setSelectedBuilding] = useState("");
  const [tenants, setTenants] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch all tenants and extract unique buildings
  useEffect(() => {
    axios
      .get("https://pg-website-backend.onrender.com/api/tenants")
      .then((res) => {
        const uniqueBuildings = [
          ...new Set(res.data.map((tenant) => tenant.building).filter(Boolean))
        ];
        setBuildings(uniqueBuildings);
      })
      .catch((err) => console.error("Error fetching tenants for buildings:", err));
  }, []);

  // Handle building selection and fetch tenants
  const handleBuildingChange = (e) => {
    const buildingName = e.target.value;
    setSelectedBuilding(buildingName);
    setTenants([]);
    if (!buildingName) return;

    setLoading(true);
    axios
      .get(
        `https://pg-website-backend.onrender.com/api/tenants/by-building/${buildingName}`
      )
      .then((res) => setTenants(res.data))
      .catch((err) => console.error("Error fetching tenants:", err))
      .finally(() => setLoading(false));
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">
        Building-wise Data
      </h2>

      {/* Dropdown */}
      <select
        onChange={handleBuildingChange}
        value={selectedBuilding}
        className="p-3 border rounded-lg shadow mb-6"
      >
        <option value="">Select a Building</option>
        {buildings.length > 0 ? (
          buildings.map((building, index) => (
            <option key={index} value={building}>
              {building}
            </option>
          ))
        ) : (
          <option disabled>No buildings found</option>
        )}
      </select>

      {/* Tenants Table */}
      {loading ? (
        <p>Loading tenants...</p>
      ) : tenants.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse shadow-lg bg-white">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="border px-4 py-2">Name</th>
                <th className="border px-4 py-2">Room</th>
                <th className="border px-4 py-2">Rent</th>
                <th className="border px-4 py-2">Contact</th>
              </tr>
            </thead>
            <tbody>
              {tenants.map((tenant) => (
                <tr key={tenant.id} className="hover:bg-gray-100">
                  <td className="border px-4 py-2">{tenant.name}</td>
                  <td className="border px-4 py-2">{tenant.roomNo}</td>
                  <td className="border px-4 py-2">{tenant.rent}</td>
                  <td className="border px-4 py-2">{tenant.contactNo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        selectedBuilding && <p>No tenants found for this building.</p>
      )}
    </div>
  );
};

export default BuildingWiseData;
