const express = require("express");
const app = express();

require("dotenv").config();

//DB-Connetion
require("./app/startup/db")();

//routes
require("./app/startup/routes")(app);

//handling errors
require("./app/startup/log")();

app.get("/", (req, res) => {
  res.send({ message: "Invoice Backend Running" });
});

app.listen(process.env.PORT || 3001, () =>
  console.log("Listening to port ", process.env.PORT || 3001)
);
