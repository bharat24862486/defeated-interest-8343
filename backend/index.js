const express = require("express");
const cors = require("cors");
const { connection } = require("./Config/db");
const { userRouter } = require("./Routes/User.route");
const { productRouter } = require("./Routes/Product.route");
const { authentication } = require("./Middleware/Authentication");
const { cartRouter } = require("./Routes/Cart.route");
const { orderRouter } = require("./Routes/Order.route");
const app = express();
app.use(express.json());
app.use(cors());
app.use("/user", userRouter);
// app.use(authentication);
app.use("/product", productRouter);
app.use(authentication);
app.use("/cart", cartRouter);
app.use("/order", orderRouter);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Connected to Database!!");
    console.log(`Server running on port ${process.env.PORT} !!`);
  } catch (error) {
    console.log(error);
    console.log("Please Check you connection!!");
  }
});
