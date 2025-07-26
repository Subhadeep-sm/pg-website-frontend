import React, { useEffect, useState } from "react";
import axios from "axios";

const BuildingWiseData = () => {
  const [buildings, setBuildings] = useState([]);
  const [selectedBuilding, setSelectedBuilding] = useState("");
  const [tenants, setTenants] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get("https://pg-website-backend.onrender.com/api/buildings")
      .then((res) => {
         
        setBuildings(res.data);
      })
      .catch((err) => console.error("Error fetching buildings:", err));
  }, []);

  const handleBuildingChange = (e) => {
    const buildingName = e.target.value;
    setSelectedBuilding(buildingName);
    setTenants([]);
    if (!buildingName) return;

    setLoading(true);
    axios
      .get(
        `https://pg-website-backend.onrender.com/api/tenants/by-building/${encodeURIComponent(buildingName)}`
      )
      .then((res) => {
        setTenants(res.data);
      })
      .catch((err) => console.error("Error fetching tenants:", err))
      .finally(() => setLoading(false));
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Building‑wise Data</h2>

      {/* Dropdown */}
      <select
        onChange={handleBuildingChange}
        value={selectedBuilding}
        className="p-3 border rounded-lg shadow mb-6"
      >
        <option value="">Select a Building</option>
        {buildings.length > 0 ? (
          buildings.map((b) => (
            <option key={b.id} value={b.name}>
              {b.name}
            </option>
          ))
        ) : (
          <option disabled>No buildings found</option>
        )}
      </select>

      {/* Tenant Table */}
      {loading ? (
        <p>Loading tenants...</p>
      ) : tenants.length > 0 ? (
        <div className="overflow-x-auto">
         <table className="table-auto w-full border-collapse shadow-lg bg-white text-sm">
  <thead>
    <tr className="bg-[#DFD0B8] text-left">
      <th className="border px-4 py-2">Name</th>
      <th className="border px-4 py-2">Room</th>
      <th className="border px-4 py-2">Contact</th>
      <th className="border px-4 py-2">Guardian Name</th>
      <th className="border px-4 py-2">Guardian Contact No</th>
      <th className="border px-4 py-2">Aadhaar</th>
      <th className="border px-4 py-2">Admission Date</th>
      <th className="border px-4 py-2">Work Place</th>
      <th className="border px-4 py-2">Room Type</th>
    </tr>
  </thead>
  <tbody>
    {tenants.map((tenant) => (
      <tr key={tenant.id} className="hover:bg-gray-100">
        <td className="border px-4 py-2">{tenant.name}</td>
        <td className="border px-4 py-2">{tenant.roomNo}</td>
        <td className="border px-4 py-2">{tenant.contactNo}</td>
        <td className="border px-4 py-2">{tenant.guardianName}</td>
        <td className="border px-4 py-2">{tenant.guardianContactNo}</td>
        <td className="border px-4 py-2">{tenant.aadhaarNo}</td>
        <td className="border px-4 py-2">{tenant.admissionDate}</td>
        <td className="border px-4 py-2">{tenant.workPlace}</td>
        <td className="border px-4 py-2">{tenant.roomType}</td>
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
