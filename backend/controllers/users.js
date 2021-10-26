const express = require("express");

const { User } = require('../models/users');

module.exports.signUp = (req, res) => {
 try{
  const { username, password, email } = req["body"];
  User.findOne({username: username}, (err, result) => {
    if(err) return res.status(400).json(err);
    else if(result) return res.status(400).json({"message": "already exists"});
    else {
      const newUser = new User({
        username: username,
        password: password,
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