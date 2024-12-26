const Product = require("../../models/ProductModule");

//controll multiple api
const productController = (req, res) => {
  res.send("Welcome to product Controller");
};

//controll single api
const productControllerWithID = (req, res) => {
  const id = req.params.id;
  res.send("ID get from params: " + id);
  res.send("this is in teh product controller");
};

//controll update api
const updateController = async (req, res) => {
  const { name, price, description, category } = req.body;
  try {
    const products = await Product.create({
      name,
      price,
      description,
      category,
    });
    res.status(200).json(products);
  } catch (error){
    res.status(500).json({error:error.message})
  }
};

exports.productController = productController;
exports.productControllerWithID = productControllerWithID;
exports.updateController = updateController;
