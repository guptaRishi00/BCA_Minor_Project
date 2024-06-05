const zod = require("zod");

const testSchema = zod.object({
  testName: zod.string(),
  testDate: zod.string(),
});
const createTest = zod.object({
  username: zod.string(),
  contactNumber: zod.string(),
  age: zod.string(),
  gender: zod.string(),
});

const signin = zod.object({
  username: zod.string(),
  password: zod.string(),
});

module.exports = {
  createTest,
  signin,
};
