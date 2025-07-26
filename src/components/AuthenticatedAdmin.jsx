import React, { useState, useEffect } from "react";
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { auth, provider } from "../firebase";
import Admin from "./Admin";

const AuthenticatedAdmin = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (err) {
      console.error("Login failed", err);
    }
  };

  const handleLogout = () => {
    signOut(auth);
  };

  if (user) {
    return (
      <div className="relative">
        <button
          onClick={handleLogout}
          className="absolute top-4 right-4 bg-[#222831] text-white px-4 py-1 rounded hover:bg-[#393E46]"
        >
          Logout
        </button>
        <Admin />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#DFD0B8] px-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-8 text-center">
        <h2 className="text-3xl font-bold text-[#222831] mb-6">Sign in to Admin Panel</h2>
        <button
          onClick={handleGoogleSignIn}
          className="bg-[#222831] text-white px-6 py-2 rounded-lg hover:bg-[#393E46] transition"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default AuthenticatedAdmin;
