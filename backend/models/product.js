const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  title: String,
  description: String,
  author: String,
  image: String,
  price: Number,
  date: {
    type: Date,
    default: Date.now
  },
});

module.exports.Product = mongoose.model("Product", productSchema);