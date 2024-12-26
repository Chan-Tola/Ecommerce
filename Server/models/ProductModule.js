const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productShcema = new Schema({
  images: [
    {
      url: { type: String, required: true },
      publicId: { type: String, required: true }, // For image management (e.g., Cloudinary)
    },
  ],
  name: {
    type: String,
    trim: true,
    required: [true, "Product Name is required"],
  },
  description: {
    type: String,
    trim: true,
    required: [true, "Product Name is required"],
  },
  price: {
    type: Number,
    trim: true,
    required: [true, "Product Name is required"],
  },
  category: {
    type: String,
    trim: true,
    required: [true, "Product category is required"],
    enum: [true, "Clothing"], // Example categories
  },
});

module.exports = mongoose.model("Product", productShcema);
