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
import logo from "../assets/logo.svg";
import { useLogin } from "../hooks/useLogin";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

export default function SignupForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();
  const navigate = useNavigate();
  const { employee } = useAuthContext();

  const handleClick = async (e) => {
    await login(username, password);
  };

  return (
    <div className="flex flex-col items-center mt-20 gap-10">
      <Link to="/">
        <div className="flex items-center gap-2 ">
          <img src={logo} alt="logo" className="h-8" />
          <p className="text-blue-500 font-semibold">LabXpert</p>
        </div>
      </Link>

      <Card className="w-96 ">
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
            onClick={handleClick}
          >
            Employee Login
          </Button>

          <Typography variant="small" className="mt-6 flex justify-center">
            Don't have an account?
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
    </div>
  );
}
