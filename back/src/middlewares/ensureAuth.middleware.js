require("dotenv").config();
const jwt = require("jsonwebtoken");

const ensureAuthMiddleware = (req, res, next) => {
  let token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      message: "Invalid or unsent token",
    });
  }

  token = token.split(" ")[1];

  jwt.verify(token, process.env.SECRET_KEY, (error, decoded) => {
    if (error) {
      return res.status(401).json({
        message: "Invalid token",
      });
    }

    res.locals.userId = decoded.sub;
    return next();
  });
};

module.exports = ensureAuthMiddleware;
