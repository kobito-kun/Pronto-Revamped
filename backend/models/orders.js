const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  total: Number,
  products: String,
  address: String,
  paid: Boolean,
  email: String,
  date: {
    type: Date,
    default: Date.now
  },
});

module.exports.Order = mongoose.model("Order", orderSchema);