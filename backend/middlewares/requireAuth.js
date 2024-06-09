const jwt = require("jsonwebtoken");
const Employee = require("../models/employeeSchema");

const requireAuth = async (req, res, next) => {
  // verify authentication
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(400).json({ error: "Authorization Token Required" });
  }

  const token = authorization.split(" ")[1];

  try {
    const { _id } = jwt.verify(token, process.env.SECRET);
    req.employee = await Employee.findOne({ _id }).select("_id");
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: "Requested is Not Authorized" });
  }
};

module.exports = requireAuth;
