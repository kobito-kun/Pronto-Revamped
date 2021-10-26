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

const { User } = require("./models/users");

app.use("/products", productRoutes);
app.use("/users", userRoutes);

app.get("/testing", (req, res) => {
  User.deleteMany({}, (err, results) => {
    return res.json(results);
  })
})

mongoose.connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true}, () => console.log("Database Connected"));
app.listen(port, () => console.log("Server online at port: " + port));