const mongoose = require("mongoose");
const { DB_URI } = process.env;
module.exports = async function () {
  try {
    await mongoose.connect(DB_URI);
    return console.log("Succesfully Connected with database");
  } catch (err) {
    return console.log({ error: err.message });
  }
};
