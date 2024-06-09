import React, { useEffect, useState } from "react";
import CheckoutForm from "../components/CheckoutForm";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { Typography } from "@material-tailwind/react";
import HistoryCard from "../components/HistoryCard";
import { useTestContext } from "../hooks/useTestContext";
import LogoutButton from "../components/LogoutButton";
import { useAuthContext } from "../hooks/useAuthContext";

function Employee() {
  const { test, dispatch } = useTestContext();
  const { employee } = useAuthContext();

  useEffect(() => {
    const fetchDetails = async () => {
      const response = await fetch("http://localhost:3000/laboratory", {
        headers: {
          Authorization: `Bearer ${employee.token}`,
        },
      });
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_TEST", payload: json });
      }
    };

    if (employee) {
      fetchDetails();
    }
  }, [dispatch, employee]);

  return (
    <>
      <div className="flex justify-around items-center shadow-sm py-5">
        <Link to="/">
          <div className="flex items-center gap-2">
            <img src={logo} alt="logo" className="h-8" />
            <p className="text-blue-500 font-semibold">LabXpert</p>
          </div>
        </Link>
        <div className="flex gap-5 items-center">
          <span>{employee?.employee?.username}</span>
          <LogoutButton />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-evenly mx-auto gap-10 p-8">
        <div className="flex flex-col gap-6">
          <Typography variant="h4" color="blue-gray" className="-mb-3">
            History
          </Typography>
          {test?.map((detail) => (
            <HistoryCard
              id={detail._id}
              name={detail.username}
              number={detail.contactNumber}
              age={detail.age}
              gender={detail.gender}
            />
          ))}
        </div>
        <div className="w-full lg:w-1/3">
          <CheckoutForm />
        </div>
      </div>
    </>
  );
}

export default Employee;
