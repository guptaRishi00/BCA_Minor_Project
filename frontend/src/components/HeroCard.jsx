import React, { useState } from "react";
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
import { useAuthContext } from "../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";

export default function HeroCard() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { employee } = useAuthContext();
  const navigate = useNavigate();

  const handleNavigation = () => {
    if (employee) {
      navigate("/employee");
    }
    if (!employee) {
      navigate("/login");
    }
  };

  return (
    <>
      <Card className="w-96">
        <CardBody className="flex flex-col gap-4">
          <Input
            label="Email"
            size="lg"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          <Input
            type="password"
            label="Password"
            size="lg"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <div className="-ml-2.5">
            <Checkbox label="Remember Me" />
          </div>
        </CardBody>
        <CardFooter className="pt-0 ">
          <Button
            variant="filled"
            fullWidth
            className="shadow-none bg-blue-500 hover:shadow-none"
            onClick={handleNavigation}
          >
            Employee Log In
          </Button>

          <Typography variant="small" className="mt-6 flex justify-center">
            Don&apos;t have an account?
            <Typography
              as="a"
              href="#signup"
              variant="small"
              color="blue-gray"
              className="ml-1 font-bold"
            >
              <Link to="/signup">Signup</Link>
            </Typography>
          </Typography>
        </CardFooter>
      </Card>
    </>
  );
}
