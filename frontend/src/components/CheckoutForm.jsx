import React, { useState } from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useTestContext } from "../hooks/useTestContext";

function CheckoutForm() {
  const { test, dispatch } = useTestContext();
  const [username, setName] = useState("");
  const [contactNumber, setNumber] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [tests, setTest] = useState("");
  const [price, setprice] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    const details = { username, contactNumber, age, gender, tests, price };
    const detailsString = JSON.stringify(details);

    try {
      const response = await fetch("http://localhost:3000/laboratory/", {
        method: "POST",
        body: detailsString,
        headers: {
          "Content-Type": "application/json",
          "Content-Length": detailsString.length.toString(), // Add Content-Length header
        },
      });

      if (!response.ok) {
        const json = await response.json();
        setError(json.error);
      } else {
        const json = await response.json();
        console.log("new detail added", json);
        dispatch({ type: "CREATE_TEST", payload: json });
      }
    } catch (err) {
      console.error("Failed to submit form", err);
    }
  };

  return (
    <div className="flex justify-center">
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Patient's Details
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Nice to meet you! Enter your details to register.
        </Typography>
        <form
          onSubmit={handleSubmit}
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        >
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Patient's Name
            </Typography>
            <Input
              size="lg"
              placeholder="Name"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={(e) => setName(e.target.value)}
              value={username}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Patient's Number
            </Typography>
            <Input
              size="lg"
              placeholder="Phone Number"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={(e) => setNumber(e.target.value)}
              value={contactNumber}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Age
            </Typography>
            <Input
              size="lg"
              placeholder="Age"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={(e) => setAge(e.target.value)}
              value={age}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Gender
            </Typography>
            <Input
              size="lg"
              placeholder="Gender"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={(e) => setGender(e.target.value)}
              value={gender}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Patient's test
            </Typography>
            <Input
              size="lg"
              placeholder="Test"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={(e) => setTest(e.target.value)}
              value={tests}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              price
            </Typography>
            <Input
              size="lg"
              placeholder="price"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={(e) => setprice(e.target.value)}
              value={price}
            />
          </div>
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree to the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-gray-900"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button type="submit" className="mt-6" fullWidth>
            Proceed
          </Button>
          {error && <Typography color="red">{error}</Typography>}
        </form>
      </Card>
    </div>
  );
}

export default CheckoutForm;
