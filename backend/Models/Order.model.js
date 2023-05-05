const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    title: { type: String, require: true },
    category: { type: String, require: true },
    price: { type: Number, require: true },
    image: [{ img: { type: String, require: true } }],
    userId : { type : String , require : true },
    dateTime : { type :String , require :true }
  },
  { versionKey: false }
);

const OrderModel = mongoose.model("healthcare_order", orderSchema);

module.exports = { OrderModel };
