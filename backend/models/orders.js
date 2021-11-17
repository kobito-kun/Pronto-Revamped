const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  total: Number,
  product: String,
  address: String,
  paid: Boolean,
  email: String,
  quantity: Number,
  creator: String,
  date: {
    type: Date,
    default: Date.now
  },
});

module.exports.Order = mongoose.model("Order", orderSchema);