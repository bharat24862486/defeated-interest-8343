const express = require("express");
const { connection } = require("./Config/db");
const { userRouter } = require("./Routes/User.route");
const { productRouter } = require("./Routes/Product.route");
const { authentication } = require('./Middleware/Authentication');
const { cartRouter } = require('./Routes/Cart.route');
const app = express();
app.use(express.json());

app.use("/user", userRouter);
app.use(authentication)
app.use("/product", productRouter);
app.use('/',cartRouter);

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
