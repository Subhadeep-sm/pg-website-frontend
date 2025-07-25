import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        navigate("/admin");
    };

    return (
        <div className="flex items-center justify-center h-screen bg-[#DFD0B8]">
            <form
                onSubmit={handleLogin}
                className="bg-[#393E46] text-[#DFD0B8] p-8 rounded-2xl shadow-xl w-96"
            >
                <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>

                <label className="block mb-2">Email</label>
                <input
                    type="email"
                    required
                    placeholder="admin@example.com"
                    className="w-full px-4 py-2 rounded bg-[#222831] text-[#DFD0B8] mb-4 focus:outline-none"
                />

                <label className="block mb-2">Password</label>
                <input
                    type="password"
                    required
                    placeholder="********"
                    className="w-full px-4 py-2 rounded bg-[#222831] text-[#DFD0B8] mb-2 focus:outline-none"
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
                    className="w-full bg-[#948979] hover:bg-[#DFD0B8] hover:text-[#222831] text-[#222831] font-semibold py-2 rounded"
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
