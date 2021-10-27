const express = require("express");

const { Order } = require("../models/orders");
const { Product } = require("../models/product");

module.exports.createOrder = (req, res) => {
  try{

    // Product Model
    // [Title--Qty...]

    const { products, address, email } = req["body"];
    
    let productsArray = [];
    let total = 0;

    products.forEach(item => {
      const SplitArray = item.split("--");
      Product.find({title: SplitArray[0]}, (err, result) => {
        total += result["price"] * SplitArray[1];
      })
    });

    const newOrder = new Order({
      total: total,
      products: JSON.stringify(products),
      address: address,
      paid: false,
      email: email
    })

    newOrder.save();
    return res.status(200).json(newOrder);
  }catch{
    return res.status(400).json({"message": "error"});
  }
}