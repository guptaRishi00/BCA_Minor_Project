import { Button } from "@material-tailwind/react";
import React from "react";
import { useLogout } from "../hooks/useLogout";
import { useNavigate } from "react-router-dom";

function LogoutButton() {
  const navigate = useNavigate();
  const { logout } = useLogout();

  const handleClick = () => {
    logout();
    navigate("/");
  };

  return (
    <Button onClick={handleClick} className="shadow-none hover:shadow-none">
      Logout
    </Button>
  );
}

export default LogoutButton;
