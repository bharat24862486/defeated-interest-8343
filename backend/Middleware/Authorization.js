const jwt = require("jsonwebtoken");
const authorization = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    if (decoded.userRole === "admin") {
      next();
    } else {
      res
        .status(401)
        .send({ msg: "You are not authorised to do this action!!", ok: false });
    }
  } else {
    res
      .status(401)
      .send({ msg: "You are not authorised to do this action!!", ok: false });
  }
};

module.exports = { authorization };
