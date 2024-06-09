const { createTest } = require("./types");
const Test = require("../models/testSchema");

//Get All The Tests
const getAllTest = async (req, res) => {
  const employee_id = req.employee._id;
  const test = await Test.find({ employee_id }).sort({ createdAt: -1 });

  if (!test) {
    res.status(403).json({ message: "Something went Wrong" });
  }

  res.status(200).json(test);
};

//GET A Single Test
const getTestById = async (req, res) => {
  const { id } = req.params;

  try {
    // Find the test by ID
    const test = await Test.findById(id);

    // If the test is not found, send a 404 response
    if (!test) {
      return res.status(404).json({ message: "Test not found" });
    }

    // Send the found test as a response
    res.status(200).json(test);
  } catch (error) {
    // If there's an error (e.g., invalid ID format), send a 500 response
    res.status(500).json({ message: error.message });
  }
};

//POST A Test
const postATest = async (req, res) => {
  const employee_id = req.employee._id;
  const username = req.body.username;
  const contactNumber = req.body.contactNumber;
  const age = req.body.age;
  const gender = req.body.gender;
  const tests = req.body.tests;
  const amount = req.body.amount;

  const test = await Test.create({
    username: username,
    contactNumber: contactNumber,
    age: age,
    gender: gender,
    tests: tests,
    amount: amount,
    employee_id: employee_id,
  });

  res.status(200).json(test);
};

module.exports = {
  getAllTest,
  postATest,
  getTestById,
};
