import React, { useEffect, useState } from "react";
import axios from "axios";

const BuildingWiseData = () => {
  const [buildings, setBuildings] = useState([]);
  const [selectedBuilding, setSelectedBuilding] = useState("");
  const [tenants, setTenants] = useState([]);
  const [expandedTenantId, setExpandedTenantId] = useState(null);
  const [editingTenantId, setEditingTenantId] = useState(null);
  const [editData, setEditData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get("https://pg-website-backend.onrender.com/api/buildings")
      .then((res) => setBuildings(res.data))
      .catch((err) => console.error("Error fetching buildings:", err));
  }, []);

  const handleBuildingChange = (e) => {
    const buildingName = e.target.value;
    setSelectedBuilding(buildingName);
    setTenants([]);
    setEditingTenantId(null);
    setExpandedTenantId(null);
    if (!buildingName) return;

    setLoading(true);
    axios
      .get(
        `https://pg-website-backend.onrender.com/api/tenants/by-building/${encodeURIComponent(
          buildingName
        )}`
      )
      .then((res) => setTenants(res.data))
      .catch((err) => console.error("Error fetching tenants:", err))
      .finally(() => setLoading(false));
  };

  const handleEdit = (tenant) => {
    setEditingTenantId(tenant.id);
    setEditData({ ...tenant });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = (id) => {
    axios
      .put(
        `https://pg-website-backend.onrender.com/api/tenants/${id}`,
        editData
      )
      .then(() => {
        const updated = tenants.map((t) => (t.id === id ? editData : t));
        setTenants(updated);
        setEditingTenantId(null);
      })
      .catch((err) => console.error("Update failed:", err));
  };

  const handleDelete = (id) => {
    if (!window.confirm("Are you sure you want to delete this tenant?")) return;
    axios
      .delete(`https://pg-website-backend.onrender.com/api/tenants/${id}`)
      .then(() => {
        const updated = tenants.filter((t) => t.id !== id);
        setTenants(updated);
      })
      .catch((err) => console.error("Delete failed:", err));
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Building‑wise Data</h2>

      <select
        onChange={handleBuildingChange}
        value={selectedBuilding}
        className="p-3 border rounded-lg shadow mb-6"
      >
        <option value="">Select a Building</option>
        {buildings.map((b) => (
          <option key={b.id} value={b.name}>
            {b.name}
          </option>
        ))}
      </select>

      {loading ? (
        <p>Loading tenants...</p>
      ) : tenants.length > 0 ? (
        <div className="space-y-4">
          {tenants.map((tenant) => (
            <div
              key={tenant.id}
              className="bg-[#FFF1DC] px-3 py-2 rounded-xl shadow-md border border-[#393E46]"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() =>
                  setExpandedTenantId(
                    expandedTenantId === tenant.id ? null : tenant.id
                  )
                }
              >
                <div className="flex justify-center w-[60%]">
                  <h3 className="text-lg font-semibold text-[#152B37] w-[50%]">
                    {tenant.name}
                  </h3>
                  <p className="text-sm text-gray-700 mt-1 items-center w-[50%]">
                    <span className="text-pink-600 mr-1 ">📞</span>
                    {tenant.contactNo} &nbsp;|&nbsp;
                    <span className="text-green-700 ml-1">🏠</span>
                    {tenant.building}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleEdit(tenant);
                    }}
                    className="bg-yellow-600 text-white px-3 py-1 rounded hover:bg-yellow-700"
                  >
                    Edit
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(tenant.id);
                    }}
                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                </div>
              </div>

              {expandedTenantId === tenant.id && (
                <div className="mt-4">
                  {editingTenantId === tenant.id ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-6 text-sm text-[#152B37] font-medium">
                      {[
                        { label: "Name", name: "name" },
                        { label: "Contact No", name: "contactNo" },
                        { label: "Guardian Name", name: "guardianName" },
                        { label: "Guardian Contact", name: "guardianContactNo" },
                        { label: "Aadhaar No", name: "aadhaarNo" },
                        { label: "Room No", name: "roomNo" },
                        { label: "Room Type", name: "roomType" },
                        {
                          label: "Admission Date",
                          name: "admissionDate",
                          type: "date",
                        },
                        { label: "Work Place", name: "workPlace" },
                        { label: "Building", name: "building" },
                      ].map((field) => (
                        <div key={field.name}>
                          <label>{field.label}</label>
                          <input
                            type={field.type || "text"}
                            name={field.name}
                            value={editData[field.name] || ""}
                            onChange={handleChange}
                            className="w-full border p-2 rounded"
                          />
                        </div>
                      ))}
                      <div className="col-span-2 mt-4">
                        <button
                          onClick={() => handleSave(tenant.id)}
                          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                        >
                          Save Changes
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-1 gap-x-8 text-sm text-[#152B37] font-medium">
                      <p>
                        <strong>Room:</strong> {tenant.roomNo}
                      </p>
                      <p>
                        <strong>Room Type:</strong> {tenant.roomType}
                      </p>
                      <p>
                        <strong>Guardian Name:</strong> {tenant.guardianName}
                      </p>
                      <p>
                        <strong>Guardian Contact:</strong> {tenant.guardianContactNo}
                      </p>
                      <p>
                        <strong>Aadhaar:</strong> {tenant.aadhaarNo}
                      </p>
                      <p>
                        <strong>Admission Date:</strong> {tenant.admissionDate}
                      </p>
                      <p>
                        <strong>Work Place:</strong> {tenant.workPlace}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        selectedBuilding && <p>No tenants found for this building.</p>
      )}
    </div>
  );
};

export default BuildingWiseData;