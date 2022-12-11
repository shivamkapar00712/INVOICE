const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const schema = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
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

schema.methods.generateToken = () => {
  return jwt.sign({ _id: this._id }, "Secret");
};

module.exports.User = mongoose.model("User", schema);
