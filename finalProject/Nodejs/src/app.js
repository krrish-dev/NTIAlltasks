require("dotenv").config();
require("../db/connect");
const cors = require("cors");
const usersRoutes = require("../routes/users.routes");
const productRoutes = require("../routes/product.routes");
const express = require("express");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));
app.use("/users", usersRoutes);
app.use("/products", productRoutes);

module.exports = app;