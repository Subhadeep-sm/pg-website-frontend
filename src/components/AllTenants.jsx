import React, { useEffect, useState } from "react";
import axios from "axios";

const AllTenants = () => {
  const [tenants, setTenants] = useState([]);
  const [expandedId, setExpandedId] = useState(null);
  const [editingTenant, setEditingTenant] = useState(null);
  const [editFormData, setEditFormData] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  const fetchTenants = async () => {
    try {
      const response = await axios.get("https://pg-website-backend.onrender.com/api/tenants");
      setTenants(response.data);
    } catch (err) {
      console.error("Error fetching tenants:", err);
    }
  };

  useEffect(() => {
    fetchTenants();
  }, []);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
    setEditingTenant(null);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://pg-website-backend.onrender.com/api/tenants/${id}`);
      fetchTenants();
    } catch (err) {
      console.error("Error deleting tenant:", err);
    }
  };

  const handleUpdateTenant = async (id) => {
    try {
      await axios.put(`https://pg-website-backend.onrender.com/api/tenants/${id}`, editFormData);
      setEditingTenant(null);
      fetchTenants();
    } catch (err) {
      console.error("Error updating tenant:", err);
    }
  };

  const filteredTenants = tenants.filter((tenant) => {
    const lowerSearch = searchTerm.toLowerCase();
    return (
      tenant.name.toLowerCase().includes(lowerSearch) ||
      tenant.contactNo.toLowerCase().includes(lowerSearch) ||
      tenant.guardianName.toLowerCase().includes(lowerSearch)
    );
  });

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6 text-center text-[#295061]">All Tenants</h2>

      {/* Search */}
      <div className="mb-4 max-w-md mx-auto">
        <input
          type="text"
          placeholder="Search by name, contact, or guardian..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-3 py-1.5 border border-[#86ccda] rounded-md focus:outline-none focus:ring-2 focus:ring-[#295061]"
        />
      </div>

      {/* Tenant List */}
      <div className="grid gap-3">
        {filteredTenants.map((tenant) => (
          <div
            key={tenant.id}
            className="bg-[#f0f9fb] p-3 rounded-xl shadow-md border border-[#86ccda] cursor-pointer"
            onClick={() => toggleExpand(tenant.id)}
          >
            {/* Header */}
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold text-[#152b37]">{tenant.name}</h3>
                <p className="text-sm text-gray-600 mt-0.5">
                  📱 {tenant.contactNo} &nbsp;|&nbsp; 🏢 {tenant.building}
                </p>
              </div>

              <div className="space-x-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setEditingTenant(tenant);
                    setEditFormData({ ...tenant });
                  }}
                  className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600 text-sm"
                >
                  Edit
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(tenant.id);
                  }}
                  className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 text-sm"
                >
                  Delete
                </button>
              </div>
            </div>

            {/* Expanded Details */}
            {expandedId === tenant.id && (
              <div className="mt-3 text-[#152b37] space-y-1 text-sm">
                <p><strong>Guardian Name:</strong> {tenant.guardianName}</p>
                <p><strong>Guardian Contact:</strong> {tenant.guardianContactNo}</p>
                <p><strong>Admission Date:</strong> {tenant.admissionDate}</p>
                <p><strong>Work Place:</strong> {tenant.workPlace}</p>
                <p><strong>Aadhaar No:</strong> {tenant.aadhaarNo}</p>
                <p><strong>Room No:</strong> {tenant.roomNo}</p>
                <p><strong>Room Type:</strong> {tenant.roomType}</p>

                {/* Edit form */}
                {editingTenant?.id === tenant.id && (
                  <div className="mt-4 border-t pt-3 space-y-2">
                    <h4 className="text-base font-semibold text-[#295061]">Edit Tenant</h4>
                    {[
                      "name", "contactNo", "guardianName", "guardianContactNo",
                      "admissionDate", "workPlace", "aadhaarNo", "building", "roomNo", "roomType"
                    ].map((field) => (
                      <input
                        key={field}
                        type="text"
                        placeholder={field}
                        value={editFormData[field] || ""}
                        onChange={(e) =>
                          setEditFormData({ ...editFormData, [field]: e.target.value })
                        }
                        className="w-full px-3 py-1 border border-gray-300 rounded-md text-sm"
                      />
                    ))}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleUpdateTenant(tenant.id);
                      }}
                      className="bg-green-600 text-white px-4 py-1.5 rounded-md hover:bg-green-700"
                    >
                      Save Changes
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}

        {filteredTenants.length === 0 && (
          <p className="text-center text-[#152b37] font-medium">No tenants found.</p>
        )}
      </div>
    </div>
  );
};

export default AllTenants;
