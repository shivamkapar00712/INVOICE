const jwt = require("jsonwebtoken");
const { User } = require("../model/User.model");
// const { JWT_SECRET } = process.env;

module.exports = async (req, res, next) => {
  try {
    if (!req.header("Authorization")) throw new Error("Please login first");
    const token = req.header("Authorization");
    console.log(req.header("Authorization"));
    const id = jwt.verify(token, "Secret");
    // const user = await User.findById(id);
    req.user = {
      _id: id._id,
    };
    console.log(req.user);
    next();
  } catch (ex) {
    res.status(401).send(ex.message);
  }
};
