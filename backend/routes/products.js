const express = require("express");
const router = express.Router();

const { auth } = require("../middleware/auth");

const {
  mainRoute,
  oneRoute,
  deleteRoute,
  userRoute,
} = require("../controllers/products");

router.get("/one/:id", oneRoute);
router.get("/user/:id", userRoute);
router.get("/", auth, mainRoute);
router.delete("/:id", auth, deleteRoute);

module.exports.productRoutes = router;
