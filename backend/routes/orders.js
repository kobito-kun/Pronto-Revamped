const express = require("express");
const router = express.Router();

const { 
  createOrder, allOrders,
} = require("../controllers/orders");

const { auth } = require("../middleware/auth")

router.post("/create", createOrder);
router.get("/all", auth, allOrders);

module.exports.orderRoutes = router;