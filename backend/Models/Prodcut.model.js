const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    title: { type: String, require: true },
    category: { type: String, require: true },
    brand : { type : String , require : true },
    price: { type: Number, require: true },
    discount: { type: Number, require: true },
    rating: { type: Number, require: true },
    image: [{ img: { type: String, require: true } }],
    userId : { type : String , require : true },
  },
  { versionKey: false }
);

const ProductModel = mongoose.model("healthcare_product", productSchema);

module.exports = { ProductModel };
