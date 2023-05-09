const mongoose = require("mongoose");

const cartSchema = mongoose.Schema(
  {
    title: { type: String, require: true },
    category: { type: String, require: true },
    brand : { type : String , require : true },
    price: { type: Number, require: true },
    discount: { type: Number, require: true },
    rating: { type: Number, require: true },
    quantity: { type : Number , require : true , default:1 },
    image: [{ img: { type: String, require: true } }],
    userId : { type : String , require : true },
    userName : { type : String , require : true },
  },
  { versionKey: false }
);

const CartModel = mongoose.model("healthcare_cart", cartSchema);

module.exports = { CartModel };
