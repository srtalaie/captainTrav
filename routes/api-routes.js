const db = require("../models");

module.exports = function(app){

   //route = /api/addProduct to add a new product
   app.post("/api/addProduct", function(req, res){
       let newProduct = {
           name: req.body.name,
           description: req.body.description,
           imgLink: req.body.imgLink,
           price: req.body.price
       }

       db.Product.create(newProduct)
       .then((product) => res.json(product))
       .catch(err => res.status(422).json(err))
   });
   
   //route = /api/getAllProduct to get all products
   app.get("/api/getAllProduct", function(req, res){
       db.Product.find({})
       .then(products => res.json(products))
       .catch(err => res.status(422).json(err))
   });

   //route = /api/updateProduct/:id to find a product and update by _id
    app.put("/api/updateProduct/:id", function(req, res){
        db.Product.findByIdAndUpdate({_id: req.params.id}, req.body)
        .then(product => res.json(product))
        .catch(err => res.status(422).json(err))
    });

   //route = /api/deleteProduct/:id to find a product and delete it by _id
   app.delete("/api/deleteProduct/:id", function(req, res){
       db.Product.findByIdAndDelete({_id: req.params.id})
       .then(product => res.json(product))
       .catch(err => res.status(422).json(err))
   });
}