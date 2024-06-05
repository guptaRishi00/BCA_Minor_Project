import { TestContext } from "../context/testContext";

import { useContext } from "react";

export const useTestContext = () => {
  const context = useContext(TestContext);

  if (!context) {
    throw Error("useTestContext Must be used inside context provider");
  }

  return context;
};
