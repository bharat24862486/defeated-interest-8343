const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: { type: String, require: true },
    email: { type: String, require: true },
    gender: { type: String, enum: ["male", "female"], require: true },
    age: { type: Number, require: true },
    city: { type: String, require: true },
    role: { type: String , enum: ["admin", "user"], default: "user",require: true },
    avatar : { type : String , require : true },
    password: { type: String, require: true },
  },
  { versionKey: false }
);

const UserModel = mongoose.model("healthcare_user", userSchema);

module.exports = { UserModel };
