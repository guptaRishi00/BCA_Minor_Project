import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Typography, Spinner } from "@material-tailwind/react";

function DetailsPage() {
  const { id } = useParams();
  const [test, setTest] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTest = async () => {
      try {
        const response = await fetch(`http://localhost:3000/details/${id}`);
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
  }, [id]);

  console.log(test);

  // Render the test details if data is successfully fetched
  return <div className="container mx-auto p-6">detailspage</div>;
}

export default DetailsPage;
