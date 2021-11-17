const express = require("express");

const { User } = require('../models/users');
const { generateHashPassword, checkHashPassword, generateAccessToken } = require("../utils");

module.exports.signUp = async (req, res) => {
 try{
  const { username, password, email } = req["body"];
  User.findOne({username: username}, async (err, result) => {
    if(err) return res.status(400).json(err);
    else if(result) return res.status(400).json({"message": "already exists"});
    else {
      const hashedPassword = await generateHashPassword(password);
      const newUser = new User({
        username: username,
        password: hashedPassword,
        email: email
      });
      newUser.save();
      return res.status(200).json(newUser);
    }
  });
 }catch{
   return res.status(400).json({"message": "error"});
 } 
}

module.exports.exists = async (req, res) => {
  try{
    const { username } = req["params"];
    User.findOne({username: username}, async (err, result) => {
      if(err) return res.status(400).json({"message": "error"});
      else if(!result) return res.status(200).json({"message": false});
      else return res.status(200).json({"message": true})
    })
  }catch{
    return res.status(400).json({"message": "error"});
  }
}

module.exports.userInfo = (req, res) => {
  try{
    User.findOne({_id: req.userId})
  }catch{
    return res.status(400).json({"message": "error"});
  }
}

module.exports.deleteUser = (req, res) => {
  try{
    User.deleteOne({_id: req.userId}, (err, callback) => {
      if(err) return res.status(400).json(err);
      else return res.status(200).json({"message": "success", "callback": callback});
    })
  }catch{
    return res.status(400).json({"message": "error"});
  }
}

module.exports.updateUser = (req, res) => {
  try{
    const { username, email, password } = req["body"];
    User.findOne({_id: req.userId}, async (err, result) => {
      if(err) return res.status(400).json(err);
      else {
        result.username = username;
        result.email = email;
        result.password = await generateHashPassword(password);
        result.save();
        return res.status(200).json({"message": "success"});
      }
    })
  }catch{
    return res.status(400).json({"message": "error"});
  }
}

module.exports.login = (req, res) => {
  try{
    const { email, password } = req["body"];
    User.findOne({email: email}, async (err, result) => {
      if(!result) return res.status(403).json({"message": "invalid credentials"});
      if(err) return res.status(403).json(err);
      else if(result){
        if(await checkHashPassword(password, result["password"])){
          return res.status(200).json({
            token: generateAccessToken({id: result["_id"]})
          })
        }else{
          return res.status(403).json({"message": "invalid credentials"})
        }
      }
    })
  }catch{
    return res.status(400).json({"message": "error"});
  }
}