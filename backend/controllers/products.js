const express = require("express");

const { Product } = require("../models/product");
const { User } = require("../models/users");

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
    User.findOne({username: req["params"]["id"]}, (err, result) => {
      if(err) return res.status(400).json(err);
      else if(result){
        Product.find({author: result["_id"]}, (err, result) => {
          if(err) return res.status(400).json(err);
          else return res.status(200).json(result);
        })
      }else return res.status(400).json({"message": "error"});
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
    const { title, description, image, price } = req["body"];
    const newProduct = new Product({
      title: title,
      description: description,
      author: req.userId,
      image: image,
      price: price
    });
    newProduct.save();
    return res.status(200).json(newProduct);
  }catch{
    return res.status(400).json({"message": "error"});
  }
}

module.exports.editRoute = (req, res) => {
  try{
    const { title, description, image, price } = req["body"];
    Product.find({author: req.userId, '_id': req["params"]["id"]}, (err, result) => {
      if(err) return res.status(400).json({"message": "error"});
      else {
        result["title"] = title;
        result["description"] = description;
        result["image"] = image;
        result["price"] = price;
        result.save();
        return res.status(200).json({"message": "success"});
      }
    });
  }catch{
    return res.status(400).json({"message": "error"});
  }
}

module.exports.randomRoute = (req, res) => {
  try{
    Product.aggregate([{$sample: {size: 10}}], (err, result) => {
      if(err) return res.status(400).json({"message": "error"});
      else return res.status(200).json(result);
    });
  }catch{
    return res.status(400).json({"message": "error"});
  }
}