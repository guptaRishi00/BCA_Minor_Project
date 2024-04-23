const { signin } = require("./types");
const Employee = require("../models/employeeSchema");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id: _id }, process.env.SECRET, { expiresIn: "3d" });
};

//Signup
const empSingin = async (req, res) => {
  const createPayload = req.body;
  const parsedPayload = signin.safeParse(createPayload);

  if (!parsedPayload.success) {
    res.status(411).json({ message: "You Sent Wrong Inputs" });
    return;
  }

  try {
    const employee = await Employee.signup(
      createPayload.username,
      createPayload.password
    );

    //create a token
    const token = createToken(employee._id);
    res.status(200).json({ employee, token });
  } catch (error) {
    res.status(403).json({ error: error.message });
  }
};

//Login
const empLogin = async (req, res) => {
  const createPayload = req.body;
  const parsedPayload = signin.safeParse(createPayload);

  if (!parsedPayload.success) {
    res.status(411).json({ message: "You Sent Wrong Inputs" });
    return;
  }

  try {
    const employee = await Employee.login(
      createPayload.username,
      createPayload.password
    );

    //create a token
    const token = createToken(employee._id);
    res.status(200).json({ employee, token });
  } catch (error) {
    res.status(403).json({ error: error.message });
  }
};

module.exports = {
  empSingin,
  empLogin,
};
