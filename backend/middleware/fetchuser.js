const jwt = require("jsonwebtoken");

const JWT_SECRET = "Thisi$Huzef@";

const fetchuser = (req, res, next) => {
  // get the user from jwt token and add id to request object
  const token = req.header("auth-token");
  if (!token) {
    res.status(401).json({ error: "Please authenticate using valid token" });
  }
  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user;

    next();
  } catch (error) {
    res.status(401).json({ error: "Please authenticate using valid token" });
  }
};

module.exports = fetchuser;
