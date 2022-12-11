const mongoose = require("mongoose");
const { DB_URI } = process.env;
module.exports = function () {
  mongoose
    .connect(DB_URI)
    .then(() => console.log("Succesfully Connected with database"))
    .catch((err) => console.log({ error: err.message }));
};
