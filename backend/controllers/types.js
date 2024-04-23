const zod = require("zod");

const testSchema = zod.object({
  testName: zod.string(),
  testDate: zod.string(),
});
const createTest = zod.object({
  username: zod.string(),
  contactNumber: zod.string().max(11), // Change to string and max length 10
  age: zod.string(),
  gender: zod.string(),
  tests: zod.array(testSchema),
});

const signin = zod.object({
  username: zod.string().min(1, { message: "This field is required" }),
  password: zod.string(),
});

module.exports = {
  createTest,
  signin,
};
