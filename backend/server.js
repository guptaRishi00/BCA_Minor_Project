const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const labTest = require("./routes/TestRoutes");
const employees = require("./routes/employeeRoutes");
const cors = require("cors");

// Use cors middleware
app.use(cors());
app.use(express.json());
app.use("/laboratory/", labTest);
app.use("/employees/", employees);

mongoose
  .connect(process.env.MONGO_URI)
  .then((data) => {
    console.log(`MongoDB Connected to connection:${data.connection.name}`);
    app.listen(process.env.PORT, () => {
      console.log(
        `Server started and running on localhost:${process.env.PORT}`
      );
    });
  })
  .catch((error) => {
    console.log(`Error:${error.message}`);
  });
