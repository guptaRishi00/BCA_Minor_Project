const { createTest } = require("./types");
const Test = require("../models/testSchema");

//Get All The Tests
const getAllTest = async (req, res) => {
  const test = await Test.find({});

  if (!test) {
    res.status(403).json({ message: "Something went Wrong" });
  }

  res.status(200).json(test);
};

//POST A Test
const postATest = async (req, res) => {
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
  });

  res.status(200).json(test);
};

module.exports = {
  getAllTest,
  postATest,
};
