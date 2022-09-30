let express = require("express");
let router = express.Router({}),
CartDataModel = require("../dataModel/cartDataModel");

//cart api's
router.post("/api/saveUserCart",(req, res)=>{

    CartDataModel.findOne({userid: req.body.userid},(err, cartDbObj) => {
        if (err){
            console.log("got an error!", err);            
            res.send("error while fetching cart!");
        }

        if (!cartDbObj) { //checks for null cart of given user
          console.log("No cartitems Present, Adding / Inserting!"); 
          let cartObj = new CartDataModel(req.body);
          cartObj.save((err, data, next)=>{        
            if (err) {
                res.send("Error Occurred"+ err);
            }      
            res.json(data);
          });
        }else{ //update the cart for given user
          console.log("CartItems Present, Replacing / Updating!");
          cartDbObj.cart = req.body.cart;//replacing db cart with cart that user has sent from cartcomponent page
          
          cartDbObj.save((err, data, next)=>{        
            if (err) {
                res.send("Error Occurred"+ err);
            }    
            setTimeout(()=>{
                res.json(data);
            },3000)  
            
          });
        }
  });

});

router.post("/api/getUserCart",(req, res)=>{
    CartDataModel.findOne({userid: req.body.userid},(err, cart) => {         
        if (err) {
            res.send("Error Occurred"+ err);
        }      
        res.json(cart);
      });
});

module.exports = router;

//in future need to put this datamodel in user itself, so that we can have best use of mongodb