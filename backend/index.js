const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
require("dotenv/config")

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({'extended': true}));

const { productRoutes } = require("./routes/products");
const { userRoutes } = require("./routes/users");
const { orderRoutes } = require("./routes/orders");

app.use("/products", productRoutes);
app.use("/users", userRoutes);
app.use("/orders", orderRoutes);

const {Order} = require("./models/orders");
const {Product} = require("./models/product");
const {User} = require("./models/users");

app.get("/testing", async (resq, res) => {
  // const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  // return res.send(String(ip))

  Product.deleteMany({}, (err, results) => {
    return res.json(results);
  })
})

mongoose.connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true}, () => console.log("Database Connected"));
app.listen(port, () => console.log("Server online at port: " + port));