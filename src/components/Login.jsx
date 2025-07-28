import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        navigate("/admin");
    };

    return (
        <div className="flex items-center justify-center h-screen bg-[#f2f2f2] mt-[15vh]">
            <form
                onSubmit={handleLogin}
                className="bg-[#fff0db] text-gray-800 p-8 rounded-2xl shadow-xl w-96"
            >
                <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>

                <label className="block mb-2 bg-[#fff0db]">Email</label>
                <input
                    type="email"
                    required
                    placeholder="admin@example.com"
                    className="mt-1 w-full px-4 py-2 border border-black rounded-md  placeholder-white  focus:outline-none focus:ring-2 focus:ring-black font-bold bg-[#948979] text-white"
                />

                <label className="block mb-2">Password</label>
                <input
                    type="password"
                    required
                    placeholder="********"
                    className="mt-1 w-full px-4 py-2 border border-black rounded-md  placeholder-white  focus:outline-none focus:ring-2 focus:ring-black font-bold bg-[#948979] text-white"
                />

                <div className="flex items-center justify-between mb-6 mt-3">
                
                
                <div className="text-right ">
                    <button
                        type="button"
                        onClick={() => navigate("/forgot-password")}
                        className="text-sm text-[#948979] hover:underline"
                    >
                        Forgot password
                    </button>
                </div>
                </div>


                <button
                    type="submit"
                    className="w-full bg-[#948979] hover:bg-[#f2f2f2] hover:text-[#222831] text-[#222831] font-semibold py-2 rounded"
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
