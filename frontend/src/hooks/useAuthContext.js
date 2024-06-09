import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw Error("UserAuth Context must be used in an AuthContext Provider");
  }
  return context;
};
