import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleResetPassword = async () => {
    setError("");
    setMessage("");

    if (!email) {
      setError("Please enter your email address.");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Password reset email sent! Check your inbox.");
    } catch (err) {
      if (err.code === "auth/user-not-found") {
        setError("No user found with this email.");
      } else if (err.code === "auth/invalid-email") {
        setError("Please enter a valid email address.");
      } else {
        setError(err.message);
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F5F5] px-4">
      <div className="bg-[#DFD0B8] rounded-xl shadow-2xl w-full max-w-md p-8 text-center">
        <h2 className="text-3xl font-bold text-[#222831] mb-6">
          Reset Password
        </h2>

        {message && <p className="text-green-600 mb-4">{message}</p>}
        {error && <p className="text-red-600 mb-4">{error}</p>}

        <div className="mb-4 text-left">
          <label className="text-sm text-gray-700 font-semibold">Email Address</label>
          <input
            type="email"
            placeholder="Enter your registered email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 mt-1 border border-black rounded-lg bg-transparent text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#222831]"
          />
        </div>

        <button
          onClick={handleResetPassword}
          className="w-full bg-[#222831] text-white font-semibold px-6 py-2 rounded-lg hover:bg-[#393E46] transition mb-4"
        >
          Send Reset Link
        </button>

        <p
          onClick={() => navigate("/admin")}
          className="text-black text-sm cursor-pointer hover:underline"
        >
          Back to Login
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
