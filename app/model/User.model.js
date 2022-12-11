const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const schema = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  role: {
    type: String,
    enum: ["Admin", "User"],
  },
  password: {
    type: String,
  },
  phone: {
    type: String,
  },
  address: {
    type: String,
  },
});

schema.methods.generateToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      name: this.name,
      email: this.email,
      role: this.role,
    },
    "Secret"
    // { expiresIn: "1d" }
  );
};

module.exports.User = mongoose.model("User", schema);
