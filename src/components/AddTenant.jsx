import React, { useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddTenant = () => {
  const [tenant, setTenant] = useState({
    name: "",
    contactNo: "",
    guardianName: "",
    guardianContactNo: "",
    admissionDate: "",
    workPlace: "",
    aadhaarNo: "",
    building: "",
    roomNo: "",
    roomType: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTenant({ ...tenant, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formattedDate = tenant.admissionDate
      ? new Date(tenant.admissionDate).toISOString().split("T")[0]
      : "";

    const formattedTenant = {
    //  id: 0,
      name: tenant.name,
      contactNo: tenant.contactNo,
      guardianName: tenant.guardianName,
      guardianContactNo: tenant.guardianContactNo,
      admissionDate: formattedDate,
      workPlace: tenant.workPlace,
      aadhaarNo: tenant.aadhaarNo,
      building: tenant.building,
      roomNo: tenant.roomNo,
      roomType: tenant.roomType,
    };

    try {
      const response = await axios.post(
        "https://pg-website-backend.onrender.com/api/tenants",
        formattedTenant,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Tenant added:", response.data);
      alert("Tenant added successfully!");

      setTenant({
        name: "",
        contactNo: "",
        guardianName: "",
        guardianContactNo: "",
        admissionDate: "",
        workPlace: "",
        aadhaarNo: "",
        building: "",
        roomNo: "",
        roomType: "",
      });
    } catch (err) {
      console.error("Error adding tenant:", err.response?.data || err.message);
      alert(
        "Failed to add tenant. Server says: " +
          (err.response?.data?.error || "Unknown error")
      );
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-6 p-4 shadow-lg rounded-lg bg-[#DFD0B8] text-[#222831]">
      <h2 className="text-2xl font-bold mb-4">Add Tenant</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
        {[
          { label: "Name", name: "name" },
          { label: "Contact Number", name: "contactNo" },
          { label: "Guardian Name", name: "guardianName" },
          { label: "Guardian Contact Number", name: "guardianContactNo" },
          { label: "Workplace", name: "workPlace" },
          { label: "Aadhaar Number", name: "aadhaarNo" },
          { label: "Building", name: "building" },
          { label: "Room Number", name: "roomNo" },
          { label: "Room Type", name: "roomType" },
        ].map(({ label, name }) => (
          <div key={name}>
            <label className="block mb-1 font-medium">{label}</label>
            <input
              type="text"
              name={name}
              value={tenant[name]}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 rounded border border-[#948979] focus:outline-none"
            />
          </div>
        ))}

        {/* Admission Date using DatePicker */}
        <div>
          <label className="block mb-1 font-medium">Admission Date</label>
          <DatePicker
            selected={tenant.admissionDate ? new Date(tenant.admissionDate) : null}
            onChange={(date) =>
              setTenant({
                ...tenant,
                admissionDate: date,
              })
            }
            dateFormat="dd-MM-yyyy"
            placeholderText="dd-mm-yyyy"
            className="w-full px-3 py-2 rounded border border-[#948979] focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className="mt-4 bg-[#222831] text-white py-2 px-4 rounded hover:bg-[#393E46]"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddTenant;
