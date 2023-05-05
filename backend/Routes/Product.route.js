const express = require("express");
const { ProductModel } = require("../Models/Prodcut.model");
const { authorization } = require("../Middleware/Authorization");
const productRouter = express.Router();

// PRODUCT GET REQUEST
productRouter.get("/", async (req, res) => {
  try {
    const query = req.query;
    const product = await ProductModel.find(query);
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
