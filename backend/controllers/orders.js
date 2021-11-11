const express = require("express");

const { Order } = require("../models/orders");
const { Product } = require("../models/product");

module.exports.createOrder = (req, res) => {
  // try{

    const { product, address, email, quantity } = req["body"];

    Product.findOne({_id: product}, (err, result) => {
      if(err) return res.status(400).json({'message': "error"});
      if(!result) return res.status(400).json({'message': "error"});
      else{
        const newOrder = new Order({
          total: result["price"] * quantity,
          product: product,
          address: address,
          paid: false,
          email: email,
          quantity: quantity,
        })
        newOrder.save();
        return res.status(200).json(newOrder);
      }
    })


  // }catch{
  //   return res.status(400).json({"message": "error"});
  // }
}