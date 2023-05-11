const express = require("express");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { CartModel } = require("../Models/Cart.model");
const cartRouter = express.Router();
// CART GET REQUEST
cartRouter.get("/:id", async (req, res) => {
  try {
    const cartData = await CartModel.find({ userId: req.params.id });
    res.status(200).send({ cartData, ok: true });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

// CART POST REQUEST
cartRouter.post("/add", async (req, res) => {
  try {
    const token = req.headers.authorization;
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const userId = decoded.userId;
    const { title, category, brand, price, discount, rating, image, quantity } =
      req.body;
    const payload = {
      title,
      category,
      brand,
      price,
      discount,
      rating,
      image,
      quantity,
      userId,
    };
    const cartData = CartModel(payload);
    await cartData.save();
    res.status(200).send({ msg: "Product Added to Cart!!", ok: true });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

// CART DELETE REQUEST
cartRouter.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await CartModel.findByIdAndDelete({ _id: id });
    res.status(200).send({ msg: "Product Deleted from Cart!!", ok: true });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

cartRouter.patch("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await CartModel.findByIdAndUpdate({ _id: id }, req.body);
    res.status(200).send({ msg: "Product Updated from Cart!!", ok: true });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

cartRouter.delete("/deleteAll", async (req, res) => {
  try {
    const token = req.headers.authorization;
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    // const userId = decoded.userId;
    await CartModel.deleteMany({ userId: decoded.userId });
    res.status(200).send({ msg: "All cart item deleted!!", ok: true });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

module.exports = { cartRouter };
