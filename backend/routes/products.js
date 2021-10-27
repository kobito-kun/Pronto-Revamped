const express = require("express");
const router = express.Router();

const { auth } = require("../middleware/auth");

const {
  mainRoute,
  oneRoute,
  deleteRoute,
  userRoute,
  makeRoute,
  editRoute,
  randomRoute,
} = require("../controllers/products");

router.get("/one/:id", oneRoute);
router.get("/user/:id", userRoute);
router.get("/random", randomRoute);
router.get("/all", auth, mainRoute);
router.put("/edit/:id", auth, editRoute);
router.post("/make", auth, makeRoute);
router.delete("/:id", auth, deleteRoute);

module.exports.productRoutes = router;
