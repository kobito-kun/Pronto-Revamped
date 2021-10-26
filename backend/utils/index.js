const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv/config")

module.exports.generateAccessToken = (object) => {
  return jwt.sign(object, process.env.JWT_TOKEN, { expiresIn: '365d' });
}

module.exports.generateHashPassword = async (password) => {
  let hashed;
  await bcrypt.hash(password, 10).then(hash => {
    console.log(hash)
    hashed = hash;
    return hash
  }).catch(err => {
    console.error(err.message);
  });
  return hashed
}

module.exports.checkHashPassword = async (password, hash) => {
  let hashed;
  await bcrypt.compare(password, hash).then(res => {
    hashed = res;
    return res;
  }).catch(err => {
    console.error(err.message);
  })
  return hashed;
}