const express = require("express");
const router = express.Router();

const { 
  createOrder,
} = require("../controllers/orders");

router.post("/create", createOrder);

module.exports.orderRoutes = router;