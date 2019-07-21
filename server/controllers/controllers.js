const mongoose = require("mongoose");
const Product = mongoose.model("Product");


module.exports = {
    getAll: (req, res)  => {
        Product.find({}, (err, productsinDB) => {
            if(err) {
                console.log(err);
                res.json({message: "Error", error: err});
            }
            else {
                res.json({message: "success", products: productsinDB});
            }
        });
     
    },

    getOne: (req, res)  => {
        Product.findById({_id: req.params.id}, (err, productsinDB) => {
            if(err) {
                console.log(err);
                res.json({message: "Error", error: err});
            }
            else {
                res.json({message: "success", products: productsinDB});
            }
        });
     
    },


    create: (req, res) => {
        var user = new Product(req.body);
        user.save((err, productsinDB) =>{
            if(err) {
                console.log(err);
                res.json({message: "Error", error: err});
            }
            else {
                res.json({message: "success", products: productsinDB});
            }
        });
 
    },

    // create: (req, res) => {
    //     Task.create(req.body)
    //         .then(data => res.json(data))
    //         .catch(err => res.json(err));
        
    
    // },



    update: (req, res) => {
        Product.findByIdAndUpdate({_id: req.params.id}, req.body, {runValidators:true, context:'query'}, (err, productsinDB) => {        
                if(err) {
                    console.log(err);
                    res.json({message: "error", error:err});
                } 
                else { 
                    res.json({message: "Success", products :productsinDB});
                }
                })
              },
            
    delete: (req, res) => {
        Product.findByIdAndDelete({_id: req.params.id}, (err) => {
            if(err) {
                console.log(err);
                res.json({message: "error", error:err});
            } 
            else { 
                res.json({message: "Success"});
            }
        })
    }

}


    
 




