import React from "react";
import { GenderCheckBox } from "./GenderCheckBox";

export const SignUp = () => {
  return (
    <div className="flex flex-col min-w-96 justify-center items-center mx-auto">
      <div className="w-full p-6 rounded-lg shadow-lg bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl fond-semibold text-blue-300 text-center">
          SignUp
          <span className="text-3xl font-bold text-blue-500"> ChatApp</span>
        </h1>
        <form action="">
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="John  Doe"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="password"
              placeholder="johndoe"
              className="input input-bordered w-full max-w-xs"
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
            />
          </div>

          <GenderCheckBox />

          <div className="flex mt-2 justify-between">
            <a
              href="#"
              className="text-base text-blue-500 hover:text-blue-800 hover:underline"
            >
              Already have an account?
            </a>
          </div>
          <button className="btn btn-block btn-sm mt-2 text-white">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
