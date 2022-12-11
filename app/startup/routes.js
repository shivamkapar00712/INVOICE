const inventory = require("../routes/inventory.routes");
const user = require("../routes/user.routes");
const cors = require("cors");
const express = require("express");
module.exports = function (app) {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());
  app.use("/api/inventory", inventory);
  app.use("/api/user", user);
};
