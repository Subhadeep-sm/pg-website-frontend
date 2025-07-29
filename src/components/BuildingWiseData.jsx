import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const BuildingWiseData = () => {
  const [buildings, setBuildings] = useState([]);
  const [selectedBuilding, setSelectedBuilding] = useState("");
  const [tenants, setTenants] = useState([]);
  const [expandedTenantId, setExpandedTenantId] = useState(null);
  const [editingTenantId, setEditingTenantId] = useState(null);
  const [editData, setEditData] = useState({});
  const [loading, setLoading] = useState(false);
  const [deletingTenantId, setDeletingTenantId] = useState(null);
  const [savingTenantId, setSavingTenantId] = useState(null);

  useEffect(() => {
    axios
      .get("https://frail-bambie-soumyaghosh-0d1c4401.koyeb.app/api/buildings")
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
        `https://frail-bambie-soumyaghosh-0d1c4401.koyeb.app/api/tenants/by-building/${encodeURIComponent(
          buildingName
        )}`
      )
      .then((res) => setTenants(res.data))
      .catch((err) => console.error("Error fetching tenants:", err))
      .finally(() => setLoading(false));
  };

  const handleEdit = (tenant) => {
    setExpandedTenantId(tenant.id);
    setEditingTenantId(tenant.id);
    setEditData({ ...tenant });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = (id) => {
    setSavingTenantId(id);
    axios
      .put(`https://frail-bambie-soumyaghosh-0d1c4401.koyeb.app/api/tenants/${id}`, editData)
      .then(() => {
        const updated = tenants.map((t) => (t.id === id ? editData : t));
        setTenants(updated);
        setEditingTenantId(null);
        toast.success("Tenant updated successfully");
      })
      .catch((err) => {
        console.error("Update failed:", err);
        toast.error("Failed to update tenant");
      })
      .finally(() => setSavingTenantId(null));
  };

  const handleDelete = (id) => {
    if (!window.confirm("Are you sure you want to delete this tenant?")) return;
    setDeletingTenantId(id);
    axios
      .delete(`https://frail-bambie-soumyaghosh-0d1c4401.koyeb.app/api/tenants/${id}`)
      .then(() => {
        const updated = tenants.filter((t) => t.id !== id);
        setTenants(updated);
        toast.success("Tenant deleted");
      })
      .catch((err) => {
        console.error("Delete failed:", err);
        toast.error("Failed to delete tenant");
      })
      .finally(() => setDeletingTenantId(null));
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen mt-[15vh]">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Building​-wise Data</h2>

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
                onClick={() => {
                  if (editingTenantId === tenant.id) return;
                  setExpandedTenantId(
                    expandedTenantId === tenant.id ? null : tenant.id
                  );
                }}
              >
                <div className="flex flex-col md:flex-row  w-full md:w-[60%] ">
                  <h3 className="text-lg font-semibold text-[#152B37] w-[50%]">
                    {tenant.name}
                  </h3>
                  <p className="text-xs/tight lg:text-xs/loose text-gray-700 font-bold ">
                    {tenant.contactNo} | {tenant.building} ({tenant.roomNo})
                  </p>
                </div>
                <div className="flex gap-2 z-10">
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
                    disabled={deletingTenantId === tenant.id}
                    className={`text-white px-3 py-1 rounded flex items-center gap-2 ${
                      deletingTenantId === tenant.id
                        ? "bg-red-400 cursor-not-allowed"
                        : "bg-red-600 hover:bg-red-700"
                    }`}
                  >
                    {deletingTenantId === tenant.id ? (
                      <>
                        <svg
                          className="animate-spin h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z"
                          ></path>
                        </svg>
                        Deleting...
                      </>
                    ) : (
                      "Delete"
                    )}
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
                          disabled={savingTenantId === tenant.id}
                          className={`px-4 py-2 rounded text-white flex items-center gap-2 ${
                            savingTenantId === tenant.id
                              ? "bg-green-400 cursor-not-allowed"
                              : "bg-green-600 hover:bg-green-700"
                          }`}
                        >
                          {savingTenantId === tenant.id ? (
                            <>
                              <svg
                                className="animate-spin h-4 w-4 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <circle
                                  className="opacity-25"
                                  cx="12"
                                  cy="12"
                                  r="10"
                                  stroke="currentColor"
                                  strokeWidth="4"
                                ></circle>
                                <path
                                  className="opacity-75"
                                  fill="currentColor"
                                  d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z"
                                ></path>
                              </svg>
                              Saving...
                            </>
                          ) : (
                            "Save Changes"
                          )}
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
