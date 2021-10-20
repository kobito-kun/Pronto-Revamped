const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

const { productRoutes } = require("./routes/products");

app.use("/products", productRoutes);

mongoose.connect("mmongodb://127.0.0.1:27017/pronto", {useNewUrlParser: true, useUnifiedTopology: true}, () => console.log("Database Connected"));
app.listen(port, () => console.log("Server online at port: " + port));