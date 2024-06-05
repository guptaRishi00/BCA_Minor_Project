import { createContext, useReducer } from "react";

export const TestContext = createContext();

export const testsReducer = (state, action) => {
  switch (action.type) {
    case "SET_TEST":
      return {
        test: action.payload,
      };
    case "CREATE_TEST":
      return {
        tests: {
          test: [action.payload, ...state.test],
        },
      };

    default:
      return {
        test: state,
      };
  }
};

export const TestContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(testsReducer, {
    test: null,
  });

  return (
    <TestContext.Provider value={{ ...state, dispatch }}>
      {children}
    </TestContext.Provider>
  );
};
