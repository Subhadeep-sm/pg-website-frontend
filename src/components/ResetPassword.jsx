import React from "react";

const ResetPassword = () => {
  const handleReset = (e) => {
    e.preventDefault();
    alert("Password changed successfully (UI only).");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-[#DFD0B8]">
      <form
        onSubmit={handleReset}
        className="bg-[#393E46] text-[#DFD0B8] p-8 rounded-2xl shadow-xl w-96"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Reset Password</h2>
        <p className="mb-6 text-sm text-center text-[#948979]">
          Enter your new password.
        </p>

        <input
          type="password"
          required
          placeholder="New password"
          className="w-full px-4 py-2 rounded bg-[#222831] text-[#DFD0B8] mb-4 focus:outline-none"
        />

        <input
          type="password"
          required
          placeholder="Confirm password"
          className="w-full px-4 py-2 rounded bg-[#222831] text-[#DFD0B8] mb-4 focus:outline-none"
        />

        <button
          type="submit"
          className="w-full bg-[#948979] hover:bg-[#DFD0B8] hover:text-[#222831] text-[#222831] font-semibold py-2 rounded"
        >
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
