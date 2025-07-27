import React, { useState, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import Admin from "./Admin";

const AuthenticatedAdmin = () => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false); // 👈 New loading state
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        navigate("/admin-dashboard");
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleEmailLogin = async () => {
    setLoading(true); // Start loading
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/admin-dashboard");
    } catch (err) {
      console.error("Login error:", err);
      setError(err.message);
    } finally {
      setLoading(false); // Stop loading after request
    }
  };

  const handleLogout = () => {
    signOut(auth);
    setUser(null);
  };

  if (user) {
    return <Admin user={user} handleLogout={handleLogout} />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#e0dfdc] px-4">
      <div className="bg-[#fdebd0] rounded-xl shadow-lg w-full max-w-md p-8 text-center">
        <h2 className="text-3xl font-bold text-[#5c4b3c] mb-6">Admin Login</h2>

        {error && <p className="text-red-600 text-sm mb-4">{error}</p>}

        <div className="mb-4 text-left">
          <label className="text-sm text-[#5c4b3c] font-semibold">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 mt-1 border rounded bg-[#8e806a] text-white font-semibold placeholder-white focus:outline-none"
          />
        </div>

        <div className="mb-2 text-left">
          <label className="text-sm text-[#5c4b3c] font-semibold">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 mt-1 border rounded bg-[#8e806a] text-white font-semibold placeholder-white focus:outline-none pr-16"
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-white font-medium"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        <button
          onClick={handleEmailLogin}
          className={`mt-5 w-full font-semibold px-6 py-2 rounded transition mb-4 ${
            loading
              ? "bg-[#8e806a] text-white cursor-not-allowed opacity-70"
              : "bg-[#8e806a] text-white hover:bg-[#7d6e5a]"
          }`}
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </div>
    </div>
  );
};

export default AuthenticatedAdmin;
