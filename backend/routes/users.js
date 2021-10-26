const express = require("express");
const router = express.Router();

const { auth } = require("../middleware/auth");

const {
  signUp,
} = require("../controllers/users");

router.post("/signup", signUp);

module.exports.userRoutes = router;