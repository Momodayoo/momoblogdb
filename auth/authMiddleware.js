const jwt = require("jsonwebtoken");

function verifyToken(req, res, next) {
  let token = req.header("Authorization");
  if (!token) return res.status(401).json({ error: "Access denied" });

  try {
    // remove bearer keyword from token
    const tokenString = token.split(" ");
    if (tokenString.length === 2) {
      console.log("tokenString[1]: ", tokenString[1]);
      token = tokenString[1];
    }
    console.log("token: ", token);
    console.log("process.env.JWT_KEY: ", process.env.JWT_KEY);
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    next();
  } catch (error) {
    res.status(401).json({ error: "Invalid token" });
  }
}

module.exports = verifyToken;
