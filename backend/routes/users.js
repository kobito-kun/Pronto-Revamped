const express = require("express");
const router = express.Router();

const { auth } = require("../middleware/auth");

const {
  signUp,
  login,
  deleteUser,
  updateUser,
  exists,
} = require("../controllers/users");

router.post("/signup", signUp);
router.post("/login", login);
router.delete("/delete", auth, deleteUser);
router.put("/update", auth, updateUser);
router.get("/:username", exists);

module.exports.userRoutes = router;