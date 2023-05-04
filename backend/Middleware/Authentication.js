const jwt = require("jsonwebtoken");
const fs = require("fs");

const authentication = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    const blackListToken = JSON.parse(
      fs.readFileSync("./blacklisted.json", "utf-8")
    );
    if (blackListToken.includes(token)) {
      res.status(400).send({ msg: "Plese Login!!", ok: false });
    } else {
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      if (decoded) {
        req.body.userId = decoded.userId;
        req.body.userRole = decoded.userRole;
        next();
      } else {
        res.status(400).send({ msg: "Please Login!!", ok: false });
      }
    }
  } else {
    res.status(400).send({ msg: "Please Login!!", ok: false });
  }
};

module.exports = { authentication };
