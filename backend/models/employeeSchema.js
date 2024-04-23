const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

//Static Signup
employeeSchema.statics.signup = async function (username, password) {
  if (!username || !password) {
    throw Error("All Fields Must Be Filled");
  }

  const exists = await this.findOne({ username });
  if (exists) {
    throw Error("Email Already In Use");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ username, password: hash });

  return user;
};

//Static Login
employeeSchema.statics.login = async function (username, password) {
  if (!username || !password) {
    throw Error("All Fields Must Be Filled");
  }

  const employee = await this.findOne({ username });
  if (!employee) {
    throw Error("Incorrect Email ");
  }

  const match = await bcrypt.compare(password, employee.password);

  if (!match) {
    throw Error("Incorrect Password");
  }

  return employee;
};

module.exports = mongoose.model("employee", employeeSchema);
