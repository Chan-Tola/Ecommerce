const expres = require("express");
const route = expres.Router();
const {
  productController,
  productControllerWithID,
  updateController,
} = require("../controller/Product/productControll.js");

// all api
route.get("/", productController);
//single api
route.get("/:id", productControllerWithID);

// post route
route.post("/", updateController);

module.exports = route;
