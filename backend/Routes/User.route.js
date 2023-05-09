const express = require("express");
const fs = require("fs");
const { UserModel } = require("../Models/User.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userRouter = express.Router();

// Create User
userRouter.post("/register", async (req, res) => {
  try {
    const { name, email, gender, age, city, role, avatar, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (user) {
      res.status(200).send({ msg: "User Already Registered!" });
    } else {
      bcrypt.hash(password, 5, async (err, hash) => {
        const user = UserModel({
          name,
          email,
          gender,
          age,
          city,
          role,
          avatar,
          password: hash,
        });
        await user.save();
        res.status(200).send({ msg: "New User Registered!!", ok: true });
      });
    }
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

// Login User
userRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (user) {
      bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
          const token = jwt.sign(
            { userId: user._id, userRole: user.role },
            process.env.SECRET_KEY
          );
          res.status(200).send({
            msg: "Login Successful!!",
            token: token,
            ok: true,
            userName: user.name,
            userId  : user.userId,
          });
        } else {
          res.status(200).send({ msg: "Wrong Credential!!" });
        }
      });
    }
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

// User Logout
userRouter.get("/logout", async (req, res) => {
  try {
    const token = req.headers.authorization;
    if (token) {
      const blackList = JSON.parse(
        fs.readFileSync("./blacklisted.json", "utf-8")
      );
      blackList.push(token);
      fs.writeFileSync("./blacklisted.json", JSON.stringify(blackList));
      res.status(200).send({ msg: "Logout Successuful!!", ok: true });
    } else {
      res.status(400).send({ msg: "Please Login!!" });
    }
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

module.exports = { userRouter };
