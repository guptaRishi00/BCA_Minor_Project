import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Service from "./pages/Service.jsx";
import { ThemeProvider } from "@material-tailwind/react";
import Employee from "./pages/Employee.jsx";
import { TestContextProvider } from "./context/testContext.jsx";
import SignupForm from "./components/SignupForm.jsx";
import LoginForm from "./components/LoginForm.jsx";
import { AuthContextProvider } from "./context/AuthContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/service",
    element: <Service />,
  },
  {
    path: "/employee",
    element: <Employee />,
  },
  {
    path: "/signup",
    element: <SignupForm />,
  },
  {
    path: "/login",
    element: <LoginForm />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <TestContextProvider>
        <RouterProvider router={router}>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </RouterProvider>
      </TestContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
