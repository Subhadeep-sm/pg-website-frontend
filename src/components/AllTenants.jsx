import React, { useEffect, useState } from "react";
import axios from "axios";

const AllTenants = () => {
  const [tenants, setTenants] = useState([]);
  const [expandedId, setExpandedId] = useState(null);
  const [editingTenant, setEditingTenant] = useState(null);
  const [editFormData, setEditFormData] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchTenants = async () => {
    try {
      setLoading(true);
      const response = await axios.get("https://pg-website-backend.onrender.com/api/tenants");
      setTenants(response.data);
    } catch (err) {
      console.error("Error fetching tenants:", err);
    } finally {
      setLoading(false);
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

      <div className="mb-4 max-w-md mx-auto">
        <input
          type="text"
          placeholder="Search by name, contact, or guardian..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-3 py-1.5 border border-[#222831] rounded-md focus:outline-none focus:ring-2 focus:ring-[#295061]"
        />
      </div>

      {loading ? (
        <div className="flex justify-center py-10">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#295061]"></div>
        </div>
      ) : (
        <div className="grid gap-1">
          {filteredTenants.map((tenant) => (
            <div
              key={tenant.id}
              className="bg-[#DFD0B8]  px-3 py-2.5 rounded-xl shadow-md border border-[#393E46] cursor-pointer"
              onClick={(e) => {
                if (!editingTenant || editingTenant?.id !== tenant.id) {
                  toggleExpand(tenant.id);
                }
              }}
            >
              {/* Header with vertical centering */}
              <div className="flex justify-between items-center ">
                <div className="flex flex-col lg:flex-row justify-center w-[60%]">
                  <h3 className="text-lg font-semibold text-[#152b37] flex-[50%]">{tenant.name}</h3>
                  <p className="text-sm text-gray-600 flex-[50%] ">
                    📱 {tenant.contactNo} &nbsp;|&nbsp; 🏢 {tenant.building}
                  </p>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setExpandedId(tenant.id);
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

              {/* Expanded Info Section */}
              {expandedId === tenant.id && (
                <>
                  {(!editingTenant || editingTenant.id !== tenant.id) && (
                    <div className="mt-3 text-[#152b37] space-y-1 text-sm">
                      <p><strong>Guardian Name:</strong> {tenant.guardianName}</p>
                      <p><strong>Guardian Contact:</strong> {tenant.guardianContactNo}</p>
                      <p><strong>Admission Date:</strong> {tenant.admissionDate}</p>
                      <p><strong>Work Place:</strong> {tenant.workPlace}</p>
                      <p><strong>Aadhaar No:</strong> {tenant.aadhaarNo}</p>
                      <p><strong>Room No:</strong> {tenant.roomNo}</p>
                      <p><strong>Room Type:</strong> {tenant.roomType}</p>
                    </div>
                  )}

                  {editingTenant?.id === tenant.id && (
                    <div className="mt-4 border-t pt-4">
                      <h4 className="text-base font-semibold text-[#295061] mb-3">Edit Tenant</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          { label: "Name", key: "name" },
                          { label: "Contact No", key: "contactNo" },
                          { label: "Guardian Name", key: "guardianName" },
                          { label: "Guardian Contact", key: "guardianContactNo" },
                          { label: "Admission Date", key: "admissionDate", type: "date" },
                          { label: "Work Place", key: "workPlace" },
                          { label: "Aadhaar No", key: "aadhaarNo" },
                          { label: "Building", key: "building" },
                          { label: "Room No", key: "roomNo" },
                          { label: "Room Type", key: "roomType" },
                        ].map(({ label, key, type = "text" }) => (
                          <div key={key}>
                            <label className="block text-sm font-medium text-[#152b37] mb-1">{label}</label>
                            <input
                              type={type}
                              value={editFormData[key] || ""}
                              onChange={(e) =>
                                setEditFormData({ ...editFormData, [key]: e.target.value })
                              }
                              className="w-full px-3 py-1.5 border border-gray-300 rounded-md text-sm"
                            />
                          </div>
                        ))}
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleUpdateTenant(tenant.id);
                        }}
                        className="mt-4 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
                      >
                        Save Changes
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          ))}

          {filteredTenants.length === 0 && (
            <p className="text-center text-[#152b37] font-medium">No tenants found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default AllTenants;
