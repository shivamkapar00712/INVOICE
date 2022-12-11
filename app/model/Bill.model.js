const mongoose = require("mongoose");

const schema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
  },
  product: {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
    },
    name: {
      type: String,
    },
    price: {
      type: Number,
    },
    quantity: {
      type: Number,
    },
    gst: {
      type: Number,
    },
    discount: {
      type: Number,
    },
    total: {
      type: Number,
    },
  },
});

module.exports.Bill = mongoose.model("Bill", schema);
