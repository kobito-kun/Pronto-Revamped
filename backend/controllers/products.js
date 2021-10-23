const express = require("express");

const { Product } = require("../models/product");

module.exports.mainRoute = (req, res) => {
  try{
    Product.find({author: req.userId}, (err, result) => {
      if(err) return res.status(400).json(err);
      else return res.status(200).json(result);
    })
  }catch{
    return res.status(400).json({"message": "error"});
  }
}

module.exports.userRoute = (req, res) => {
  try{
    Product.find({author: req["params"]["id"]}, (err, result) => {
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

module.exports.deleteRoute = (req, res) => {
  try{
    Product.deleteOne({author: req.userId, '_id': req["params"]["id"]}, (err, callback) => {
      if(err) return res.status(400).json(err);
      else res.status(200).json(callback);
    })
  }catch{
    return res.status(400).json({"message": "error"});
  }
}

module.exports.makeRoute = (req, res) => {
  try{

  }catch{
    return res.status(400).json({"message": "error"});
  }
}