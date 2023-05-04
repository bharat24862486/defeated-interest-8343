const express = require("express");
const jwt = require('jsonwebtoken')
require('dotenv').config()
const { CartModel } = require("../Models/Cart.model");
const cartRouter = express.Router();
// CART GET REQUEST
cartRouter.get("/cart", async (req, res) => {
  try {
    const token = req.headers.authorization;
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const userId = decoded.userId;
    const cartData = await CartModel.find({ userId });
    res.status(200).send({ cartData, ok: true });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

// CART POST REQUEST
cartRouter.post("/addcart", async (req, res) => {
  try {
    const token = req.headers.authorization;
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const userId = decoded.userId;
    const { title, category, brand, price, discount, rating, image } = req.body;
    const payload = {
      title,
      category,
      brand,
      price,
      discount,
      rating,
      image,
      userId,
    };
    const cartData = CartModel(payload);
    await cartData.save();
    res.status(200).send({ msg: "Product Added to Cart!!", ok: true });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

module.exports = { cartRouter };
