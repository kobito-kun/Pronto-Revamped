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

module.exports.login = (req, res) => {
  try{
    const { email, password } = req["body"];
    User.findOne({email: email}, async (err, result) => {
      if(err) return res.status(400).json(err);
      else if(result){
        if(await checkHashPassword(password, result["password"])){
          return res.status(200).json({
            token: generateAccessToken({id: result["_id"]})
          })
        }else{
          return res.status(400).json({"message": "invalid credentials"})
        }
      }
    })
  }catch{
    return res.status(400).json({"message": "error"});
  }
}