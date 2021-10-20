const express = require("express");
const router = express.Router();

const {
  mainRoute,
  oneRoute,
} = require("../controllers/products");

router.get("/", mainRoute);
router.get("/:id", oneRoute);

module.exports.productRoutes = router;