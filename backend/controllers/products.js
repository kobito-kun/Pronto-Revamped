const express = require("express");

const { Product } = require("../models/product");

module.exports.mainRoute = (req, res) => {
  try{
    Product.find({}, (err, result) => {
      if(err) return res.status(400).json(err);
      else return res.status(200).json(result);
    })
  }catch{
    return res.status(400).json({"message": "error"});
  }
}

module.exports.oneRoute = (req, res) => {
  try{
    Product.find({_id: req["params"]["id"]}, (err, result) => {
      if(err) return res.status(400).json(err);
      else return res.status(200).json(result);
    })
  }catch{
    return res.status(400).json({"message": "error"});
  }
}