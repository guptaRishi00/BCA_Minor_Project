import React from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="sticky top-0 z-10 bg-white py-5 px-6 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <img src={logo} alt="logo" className="h-8" />
        <p className="text-blue-500 font-semibold">LabXpert</p>
      </div>
      <div className="flex items-center gap-10">
        <Link
          to="/"
          className="text-gray-600 hover:text-blue-500 transition duration-300"
        >
          / Home
        </Link>
        <Link
          to="/"
          className="text-gray-600 hover:text-blue-500 transition duration-300"
        >
          / Services
        </Link>
        <Link
          to="/"
          className="text-gray-600 hover:text-blue-500 transition duration-300"
        >
          / About us
        </Link>
        <Link
          to="/"
          className="text-gray-600 hover:text-blue-500 transition duration-300"
        >
          / Find Doctor
        </Link>
      </div>

      <button className="bg-blue-500 px-5 py-2 rounded-3xl text-white">
        Employee Login
      </button>
    </div>
  );
}

export default Navbar;
