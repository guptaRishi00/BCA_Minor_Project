const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TestSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    contactNumber: {
      type: Number,
      required: true,
    },
    age: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    tests: {
      type: String,
      required: true,
    },
    price: {
      type: String,
    },
    employee_id: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Test", TestSchema);
