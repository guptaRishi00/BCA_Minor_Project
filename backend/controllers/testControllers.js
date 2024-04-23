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
  const createPayload = req.body;
  const parsedPayload = createTest.safeParse(createPayload);

  if (!parsedPayload.success) {
    res.status(411).json({ message: "You Sent Wrong Inputs" });
    return;
  }

  const test = await Test.create({
    username: createPayload.username,
    contactNumber: createPayload.contactNumber,
    age: createPayload.age,
    gender: createPayload.gender,
    tests: createPayload.tests,
  });

  res.status(200).json(test);
};

module.exports = {
  getAllTest,
  postATest,
};
