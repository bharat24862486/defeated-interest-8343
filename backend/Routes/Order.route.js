const express = require("express");
const { OrderModel } = require("../Models/Order.model");
const { DateTime } = require("../Function/DateTime");
const orderRouter = express.Router();

// ORDER GET REQUEST
orderRouter.get("/", async (req, res) => {
  try {
    const orderData = await OrderModel.find();
    res.status(200).send({ orderData, ok: true });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

// ORDER GET REQUEST
orderRouter.get("/:id", async (req, res) => {
  try {
    const orderData = await OrderModel.find({ userId: req.params.id });
    res.status(200).send({ orderData, ok: true });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

//   ORDER POST REQUEST
orderRouter.post("/add/:id", async (req, res) => {
  try {
    // const { title, category, price, image,userId } = req.body;
    const userId = req.params.id;
    const cartArr = req.body;
    const orderArr = cartArr.map((item) => {
      return {
        title: item.title,
        category: item.category,
        price: item.price,
        image: item.image,
        userId,
        dateTime: DateTime(),
      };
    });
    const orderData = await OrderModel.insertMany(orderArr);
    // await orderData.save();
    res.status(200).send({ msg: "History Added!!", orderData, ok: true });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

module.exports = { orderRouter };
