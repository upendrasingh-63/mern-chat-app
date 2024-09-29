import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login({ username, password });
  };

  return (
    <div className="flex flex-col min-w-96 justify-center items-center mx-auto">
      <div className="w-full p-6 rounded-lg shadow-lg bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl fond-semibold text-blue-300 text-center">
          Login
          <span className="text-3xl font-bold text-blue-500"> ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter your username"
              className="input input-bordered w-full max-w-xs"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full max-w-xs"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex mt-2 justify-between">
            <a href="#" className="text-base text-blue-500 hover:text-blue-800">
              Forgot Password?
            </a>
          </div>

          {/* add code of href for don't have and account */}
          <div className="flex justify-between">
            <Link
              to="/signup"
              className="text-base text-blue-500 hover:text-blue-800 hover:underline"
            >
              Don't have an account?
            </Link>
          </div>
          <button
            className="btn btn-block btn-sm mt-2 text-white"
            disabled={loading}
          >
            {loading ? (
              <span className="loading loading-spinner"></span>
            ) : (
              <span>Login</span>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};
