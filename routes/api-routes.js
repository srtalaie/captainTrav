const db = require("../models");

const nodemailer = require('nodemailer');
let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // upgrade later with STARTTLS
    auth: {
      user: "strevlabs@gmail.com",
      pass: "M57rin*g"
    }
  });

module.exports = function(app){

    //Mail
    app.post("/api/sendEmail", function(req, res){
        let message = {
            from: 'strevlabs@gmail.com',
            to: req.body.userEmail,
            subject: `${req.body.userName} is interested in ${req.body.name}`,
            text: `Hi. I would like to request a quote for ${req.body.name} /n ${req.body.text}`,
            html: `<p>Hi. I would like to request a quote for ${req.body.name}</p><p>Additional message: ${req.body.text}</p>`
        }
        console.log(message)
        transporter.sendMail(message, function(err){
                if(err) throw err;
                console.log('message sent');
        })
    })

   //route = /api/addProduct to add a new product
   app.post("/api/addProduct", function(req, res){
       let newProduct = {
           name: req.body.name,
           description: req.body.description,
           category: req.body.category,
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

   app.get("/api/getProduct/:id", function(req, res){
       db.Product.find({ _id: req.params.id })
       .then(product => res.json(product))
       .catch(err => res.status(422).json(err))
   });

    app.get("/api/getProductbyCategory/:category", function(req, res){
       db.Product.find({ category: req.params.category })
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