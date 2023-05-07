const express = require("express");
const jwt = require("jsonwebtoken");
const { ProductModel } = require("../Models/Prodcut.model");
const { authorization } = require("../Middleware/Authorization");
const productRouter = express.Router();

// PRODUCT GET REQUEST
productRouter.get("/", async (req, res) => {
  const token = req.headers.authorization;
  const decoded = jwt.verify(token, process.env.SECRET_KEY);
  // console.log(decoded);
  try {
    const { title, brand, category, page } = req.query;
    const query = {};
    if (title) {
      query.title = { $regex: title, $options: "i" };
    }
    if (brand) {
      query.brand = brand;
    }
    if (page) {
      pagination = (page - 1) * 2;
    } else {
      pagination = 0;
    }
    if (category) {
      query.category = category;
    }
    const product = await ProductModel.find(query).skip(pagination).limit(6);
    res
      .status(200)
      .send({ msg: "All Healthcare Products!!", product, ok: true });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

// AUTHORIZATION MIDDLEWARE
productRouter.use(authorization);

// PRODUCT POST REQUEST
productRouter.post("/create", async (req, res) => {
  try {
    const product = ProductModel(req.body);
    await product.save();
    res.status(200).send({ msg: "Product Created!!", ok: true });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

// PRODUCT UPDATE REQUEST
productRouter.patch("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await ProductModel.findByIdAndUpdate({ _id: id }, req.body);
    res.status(200).send({ msg: "Product Updated!!", ok: true });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

// PRODUCT DELETE REQUEST
productRouter.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await ProductModel.findByIdAndDelete({ _id: id });
    res.status(200).send({ msg: "Product Deleted!!", ok: true });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

module.exports = { productRouter };
