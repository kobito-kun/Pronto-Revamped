const express = require("express");
const router = express.Router();

const { auth } = require("../middleware/auth");

const {
  signUp,
  login
} = require("../controllers/users");

router.post("/signup", signUp);
router.post("/login", login);

module.exports.userRoutes = router;