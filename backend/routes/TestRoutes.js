const express = require("express");
const { getAllTest, postATest } = require("../controllers/testControllers");
const router = express.Router();

//GET All Test
router.get("/", getAllTest);

//POST A Test
router.post("/", postATest);

module.exports = router;
