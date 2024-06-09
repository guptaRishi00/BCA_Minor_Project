import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

function HistoryCard({ name, number, age, gender, id }) {
  const handleDetail = () => {};
  return (
    <Card className="mt-6 w-full mx-auto">
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {name}
        </Typography>
        <div className=" flex gap-10">
          <Typography variant="h6" className="">
            Number: {number},
          </Typography>
          <Typography variant="h6" className="">
            Age:{age}
          </Typography>
          <Typography variant="h6" className="">
            Gender:{gender}
          </Typography>
        </div>
      </CardBody>
      <CardFooter className="pt-0">
        <a href="#" className="inline-block">
          <Link to={`/details/${id}`}>
            <Button
              size="sm"
              variant="text"
              className="flex items-center gap-2"
              onClick={handleDetail}
            >
              Details
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Button>
          </Link>
        </a>
      </CardFooter>
    </Card>
  );
}

export default HistoryCard;
