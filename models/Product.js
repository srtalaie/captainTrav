let mongoose = require("mongoose");

let Schema =  mongoose.Schema;

//Create article schema
let ProductSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    imgLink: [{
        type: String,
        required: true
    }],
    price: {
        type: mongoose.Decimal128,
        required: true
    }
});

let Product = mongoose.model("Product", ProductSchema);
module.exports = Product;