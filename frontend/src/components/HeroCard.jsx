import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
export default function HeroCard() {
  return (
    <>
      <Card className="w-96">
        <CardBody className="flex flex-col gap-4">
          <Input label="Email" size="lg" />
          <Input label="Password" size="lg" />
          <div className="-ml-2.5">
            <Checkbox label="Remember Me" />
          </div>
        </CardBody>
        <CardFooter className="pt-0 ">
          <Link to="/employee">
            <Button
              variant="filled"
              fullWidth
              className="shadow-none bg-blue-500 hover:shadow-none"
            >
              Employee Log In
            </Button>
          </Link>
          <Typography variant="small" className="mt-6 flex justify-center">
            Don&apos;t have an account?
            <Typography
              as="a"
              href="#signup"
              variant="small"
              color="blue-gray"
              className="ml-1 font-bold"
            >
              Contact Help Center
            </Typography>
          </Typography>
        </CardFooter>
      </Card>
    </>
  );
}
