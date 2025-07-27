import React, { useState, useEffect } from "react";
import {
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../firebase";
import Admin from "./Admin";

const AuthenticatedAdmin = () => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
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

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate("/admin-dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleEmailLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/admin-dashboard");
    } catch (err) {
      setError(err.message);
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br bg-gray-200 px-4">
      <div className="bg-[#DFD0B8] bg-opacity-10 backdrop-blur-lg rounded-2xl shadow-xl w-full max-w-md p-8 text-center transition-transform transform hover:scale-105">
        <h2 className="text-3xl font-bold text-[#222831] mb-6">Admin Login</h2>

        {error && <p className="text-red-400 text-sm mb-4">{error}</p>}

        <div className="mb-4 text-left">
          <label className="text-sm text-[#393E46] font-semibold">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 mt-1 border border-gray-400 rounded-lg bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#222831]"
          />
        </div>

        <div className="mb-2 text-left">
          <label className="text-sm text-[#393E46] font-semibold">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 mt-1 border border-gray-400 rounded-lg bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#222831]"
          />
        </div>

        <p
          onClick={() => navigate("/forgot-password")}
          className="text-sm text-[#393E46] cursor-pointer mb-4 hover:underline text-right"
        >
          Forgot password?
        </p>

        <button
          onClick={handleEmailLogin}
          className="w-full bg-[#948979] text-gray-900 font-semibold px-6 py-2 rounded-lg hover:bg-yellow-600 transition mb-4"
        >
          Login
        </button>

        <div className="mt-4">
          <p className="text-sm text-gray-200 mb-2">Or</p>
          <button
            onClick={handleGoogleSignIn}
            className="w-full bg-red-700 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition"
          >
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthenticatedAdmin;
