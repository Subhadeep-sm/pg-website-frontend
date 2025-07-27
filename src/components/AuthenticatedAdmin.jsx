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
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/admin-dashboard");
    } catch (err) {
      console.error("Login error:", err);

      // Friendly error messages
      switch (err.code) {
        case "auth/invalid-credential":
        case "auth/user-not-found":
        case "auth/wrong-password":
          setError("Wrong email or password.");
          break;
        case "auth/too-many-requests":
          setError("Too many attempts. Please try again later.");
          break;
        case "auth/invalid-email":
          setError("Invalid email address.");
          break;
        default:
          setError("Login failed. Please try again.");
          break;
      }
    } finally {
      setLoading(false);
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
    <div className="min-h-screen bg-[#e0dfdc] px-4">
      {/* Page Heading */}
      <div className="text-center pt-16">
        <h1 className="text-5xl font-bold text-[#222831]">Admin Login</h1>
      </div>

      {/* Login Form */}
      <div className="flex justify-center items-center mt-6 p-10">
        <div className="bg-[#fdebd0] rounded-xl shadow-lg w-full max-w-md p-8 text-center">
          {error && <p className="text-red-600 text-sm mb-4">{error}</p>}

          {/* Email Field */}
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

          {/* Password Field with Toggle */}
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

          {/* Login Button with Loader */}
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
    </div>
  );
};

export default AuthenticatedAdmin;
