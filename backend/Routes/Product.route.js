const express = require("express");
const { ProductModel } = require("../Models/Prodcut.model");
const { authorization } = require("../Middleware/Authorization");
const { authentication } = require("../Middleware/Authentication");
const productRouter = express.Router();

// Count Products
productRouter.get("/product_count", async (req, res) => {
  try {
    const product = await ProductModel.find();
    res.status(200).send({ msg: "All Products!!", product, ok: true });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});
// Count Products

// PRODUCT GET REQUEST
productRouter.get("/", async (req, res) => {
  const { title, brand, category, page, rating, price, sort, discount } =
    req.query;

  let pagination = (page - 1) * 6;
  try {
    const query = {};
    if (title) {
      query.title = { $regex: title, $options: "i" };
    }
    if (brand) {
      query.brand = brand;
    }
    if (category) {
      query.category = category;
    }
    if (rating) {
      query.rating = { $gte: rating };
    }
    if (discount) {
      query.discount = { $gte: discount };
    }
    if (price) {
      query.price = { $gte: price };
    }
    if (sort) {
      const product = await ProductModel.find(query)
        .skip(pagination)
        .limit(6)
        .sort({ price: sort });
      res
        .status(200)
        .send({ msg: "All Healthcare Products!!", product, ok: true });
    } else {
      const product = await ProductModel.find(query).skip(pagination).limit(6);
      res
        .status(200)
        .send({ msg: "All Healthcare Products!!", product, ok: true });
    }
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

productRouter.get("/single_product/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await ProductModel.findById({ _id: id });
    res.status(200).send({ msg: "Single Product!!", product, ok: true });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

productRouter.use(authentication);

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
