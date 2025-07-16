const jwt = require("jsonwebtoken");
module.exports = function(req, res, next) {
  const token = req.headers["authorization"];
  console.log("token",token)
  if (!token) return res.status(401).send("Unauthorized");
  try {
    jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);
    next();
  } catch(err) {
    console.log("ERR",err)
    res.status(403).send("Forbidden");
  }
};
