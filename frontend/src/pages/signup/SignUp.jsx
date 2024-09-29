import { React, useState } from "react";
import { GenderCheckBox } from "./GenderCheckBox";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup.js";

export const SignUp = () => {
  //we need to on input coming from signup

  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const handleGenderChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const { loading, signup } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(inputs); // this function will handel input submits
  };

  return (
    <div className="flex flex-col min-w-96 justify-center items-center mx-auto">
      <div className="w-full p-6 rounded-lg shadow-lg bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl fond-semibold text-blue-300 text-center">
          SignUp
          <span className="text-3xl font-bold text-blue-500"> ChatApp</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="John  Doe"
              className="input input-bordered w-full max-w-xs"
              value={inputs.fullName} //prop for fullName
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="johndoe"
              className="input input-bordered w-full max-w-xs"
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="input input-bordered w-full max-w-xs"
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm password"
              className="input input-bordered w-full max-w-xs"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          </div>

          <GenderCheckBox
            onCheckboxChange={handleGenderChange}
            selectGender={inputs.gender}
          />

          <div className="flex mt-2 justify-between">
            <Link
              to="/login"
              className="text-base text-blue-500 hover:text-blue-800 hover:underline"
            >
              Already have an account?
            </Link>
          </div>
          <button
            className="btn btn-block btn-sm mt-2 text-white"
            disabled={loading}
          >
            {loading ? (
              <span className="loading loading-spinner"></span>
            ) : (
              <span>Sign Up</span>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};
