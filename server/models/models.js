const mongoose = require("mongoose");


const ProductSchema = new mongoose.Schema({
 
  name:  { type: String, required: [true, "name must be provided."], minlength: [4, "Name must be at least 4 characters long."]}, 
  price:  { type: Number, required: [true, "price must be provided."]}, 
  img:  { type: String, required: [true, "img url must be provided."]}, 
  }, 
  {timestamps: true});


mongoose.model('Product', ProductSchema); 