const express = require("express");
const {
  getAllTest,
  postATest,
  getTestById,
} = require("../controllers/testControllers");
const router = express.Router();
const requireAuth = require("../middlewares/requireAuth");

router.use(requireAuth);

//GET All Test
router.get("/", getAllTest);

//GET A Single Test
router.get("/details/:id", getTestById);

//POST A Test
router.post("/", postATest);

module.exports = router;
