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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TestContextProvider>
      <RouterProvider router={router}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </RouterProvider>
    </TestContextProvider>
  </React.StrictMode>
);
