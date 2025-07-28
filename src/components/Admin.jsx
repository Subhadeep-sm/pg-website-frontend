import React, { useState } from "react";

const Admin = ({ user, handleLogout }) => {
  const [active, setActive] = useState("Home");

  const sections = ["Home", "Facilities", "Boys PG", "Girls PG", "Contact Us"];

  return (
    <div className="flex min-h-screen bg-[#DFD0B8] mt-[10vh]">
      {/* Sidebar */}
      <aside className="w-64 bg-[#393E46] text-[#DFD0B8] p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>

          {/* User Info */}
          {user && (
            <div className="flex items-center mb-8 space-x-3">
              {user.photoURL && (
                <img
                  src={user.photoURL}
                  alt="Profile"
                  className="w-12 h-12 rounded-full border-2 border-[#DFD0B8]"
                />
              )}
              <div>
                <p className="font-semibold">{user.displayName || "Admin"}</p>
                <p className="text-sm text-[#948979]">{user.email}</p>
              </div>
            </div>
          )}

          {/* Navigation */}
          <ul className="space-y-4">
            {sections.map((section) => (
              <li
                key={section}
                className={`cursor-pointer px-4 py-2 rounded-lg transition ${
                  active === section
                    ? "bg-[#948979] text-[#222831]"
                    : "hover:bg-[#222831] hover:text-[#DFD0B8]"
                }`}
                onClick={() => setActive(section)}
              >
                {section}
              </li>
            ))}
          </ul>
        </div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="mt-8 bg-[#222831] text-white px-4 py-2 rounded hover:bg-[#948979] transition"
        >
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        <h1 className="text-3xl font-semibold text-[#222831]">{active}</h1>
        <div className="mt-6 text-[#393E46] text-lg">
          <p>
            This is the <strong>{active}</strong> section content placeholder.
          </p>
          <p className="mt-2 italic text-sm text-[#948979]">
            (Backend integration needed to make this functional)
          </p>
        </div>
      </main>
    </div>
  );
};

export default Admin;
