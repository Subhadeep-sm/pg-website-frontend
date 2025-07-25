import React from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Normally, you'd send OTP/email; here we redirect
    navigate("/reset-password");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-[#DFD0B8]">
      <form
        onSubmit={handleSubmit}
        className="bg-[#393E46] text-[#DFD0B8] p-8 rounded-2xl shadow-xl w-96"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Forgot Password</h2>
        <p className="mb-6 text-sm text-center text-[#948979]">
          Enter your registered email to reset your password.
        </p>
        <input
          type="email"
          required
          placeholder="you@example.com"
          className="w-full px-4 py-2 rounded bg-[#222831] text-[#DFD0B8] mb-4 focus:outline-none"
        />
        <button
          type="submit"
          className="w-full bg-[#948979] hover:bg-[#DFD0B8] hover:text-[#222831] text-[#222831] font-semibold py-2 rounded"
        >
          Continue
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
