const db = require("../models");

module.exports = function(app){

   app.post("/api/addProduct", function(req, res){
       let newProduct = {
           name: req.body.name,
           description: req.body.description,
           imgLink: req.body.imgLink,
           price: req.body.price
       }

       db.Product.create(newProduct).then(function(product){
          res.json(product);
       })
   }) 

}