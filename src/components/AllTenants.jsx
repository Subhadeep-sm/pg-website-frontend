import React, { useEffect, useState } from 'react';

const AllTenants = () => {
  const [tenants, setTenants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('https://pg-website-backend.onrender.com/api/tenants')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch tenants');
        return res.json();
      })
      .then((data) => {
        setTenants(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center mt-10">Loading tenants...</div>;
  if (error) return <div className="text-center mt-10 text-red-600">Error: {error}</div>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">All Tenants</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded shadow-md">
          <thead>
            <tr className="bg-[#295061] text-white">
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Contact</th>
              <th className="py-2 px-4">Guardian</th>
              <th className="py-2 px-4">Guardian Contact</th>
              <th className="py-2 px-4">Admission Date</th>
              <th className="py-2 px-4">Workplace</th>
              <th className="py-2 px-4">Aadhaar</th>
              <th className="py-2 px-4">Building</th>
              <th className="py-2 px-4">Room No</th>
              <th className="py-2 px-4">Room Type</th>
            </tr>
          </thead>
          <tbody>
            {tenants.map((tenant, index) => (
              <tr key={index} className="text-center border-b hover:bg-[#f0f9fb]">
                <td className="py-2 px-4">{tenant.name}</td>
                <td className="py-2 px-4">{tenant.contactNo}</td>
                <td className="py-2 px-4">{tenant.guardianName}</td>
                <td className="py-2 px-4">{tenant.guardianContactNo}</td>
                <td className="py-2 px-4">{tenant.admissionDate}</td>
                <td className="py-2 px-4">{tenant.workPlace}</td>
                <td className="py-2 px-4">{tenant.aadhaarNo}</td>
                <td className="py-2 px-4">{tenant.building}</td>
                <td className="py-2 px-4">{tenant.roomNo}</td>
                <td className="py-2 px-4">{tenant.roomType}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllTenants;
