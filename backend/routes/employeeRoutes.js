const express = require("express");
const { empSingin, empLogin } = require("../controllers/employeesController");
const router = express.Router();

router.post("/signup", empSingin);
router.post("/login", empLogin);

module.exports = router;
