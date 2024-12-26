const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const SellRoute = require("../Route/SellRoute");

//middlware
app.use(express.json());

app.use("/api", SellRoute);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`connect to db  & listening on port ` + process.env.PORT);
    });
  })
  .catch((err) => {
    console.log("Connectiong is fail and  " + err);
  });
