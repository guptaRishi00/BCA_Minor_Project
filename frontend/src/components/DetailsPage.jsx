import React, { useEffect, useState, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { Typography, Spinner, Button } from "@material-tailwind/react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useReactToPrint } from "react-to-print";

function DetailsPage() {
  const { id } = useParams();
  const [test, setTest] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { employee } = useAuthContext();
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const url = `http://localhost:3000/laboratory/${id}`;
  useEffect(() => {
    const fetchTest = async () => {
      try {
        const response = await fetch(url, {
          headers: {
            Authorization: `Bearer ${employee.token}`,
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch test details");
        }
        const json = await response.json();
        setTest(json);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchTest();
  }, [employee]);

  console.log(test);

  // Render the test details if data is successfully fetched
  return (
    <div className="container mx-auto p-6">
      <div className="container mx-auto p-6">
        <Typography
          variant="h4"
          color="blue-gray"
          className="mb-4 flex items-center justify-between"
        >
          Test Details
          <div className=" flex items-center gap-5">
            <Button
              className="shadow-none hover:shadow-none"
              onClick={handlePrint}
            >
              Print
            </Button>
            <Link to="/employee">
              <Button className="shadow-none hover:shadow-none">Back</Button>
            </Link>
          </div>
        </Typography>
        {test ? (
          <div className="border p-4 rounded-lg shadow-sm" ref={componentRef}>
            <Typography
              variant="h6"
              color="blue-gray"
              className="mb-2 flex items-center justify-between"
            >
              {test.username}
            </Typography>
            <Typography variant="body1" className="mb-1">
              <strong>Contact Number:</strong> {test.contactNumber}
            </Typography>
            <Typography variant="body1" className="mb-1">
              <strong>Age:</strong> {test.age}
            </Typography>
            <Typography variant="body1" className="mb-1">
              <strong>Gender:</strong> {test.gender}
            </Typography>
            <Typography variant="body1" className="mb-1">
              <strong>Test:</strong> {test.tests}
            </Typography>
            <Typography variant="body1" className="mb-1">
              <strong>Price:</strong> 2000
            </Typography>
          </div>
        ) : (
          <Typography variant="body1">Test details not found</Typography>
        )}
      </div>
    </div>
  );
}

export default DetailsPage;
