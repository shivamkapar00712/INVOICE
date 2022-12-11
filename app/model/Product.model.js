const mongoose = require("mongoose");

const schema = mongoose.Schema({
  name: {
    type: String,
  },
  buyPrice: {
    type: Number,
  },
  gst: {
    type: Number,
  },
  profit: {
    type: Number,
  },
  finalPrice: {
    type: Number,
  },
});

module.exports.Product = mongoose.model("Product", schema);
