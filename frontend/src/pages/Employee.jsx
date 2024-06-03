import React from "react";
import CheckoutForm from "../components/CheckoutForm";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

function Employee() {
  return (
    <>
      <div className="flex justify-center my-10">
        <Link to="/">
          <div className="flex items-center gap-2">
            <img src={logo} alt="logo" className="h-8" />
            <p className="text-blue-500 font-semibold">LabXpert</p>
          </div>
        </Link>
      </div>

      <CheckoutForm />
    </>
  );
}

export default Employee;
