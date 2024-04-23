const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TestSchema = new Schema(
  {
    username: String,
    contactNumber: Number,
    age: String,
    gender: String,
    tests: [
      {
        testName: String,
        testDate: Date,
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("test", TestSchema);
