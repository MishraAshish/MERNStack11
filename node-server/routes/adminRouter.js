let express = require("express");

let router = express.Router({})//case sensitive configurations
let adminUserModel = require("../datamodel/AdminDataModel");


//we'll pass data in query string and later on with post like : req.body
router.get("/api/save",(req, res)=>{
    //req.query : will contain the data like we mentioned in mongoose.schema
    // name : {type: String, required: true},
    // age : Number,
    // session : String,
    // address : String
    console.log(req.query);
    
    let adminUserObj = new adminUserModel(req.query)

    //this is now able to interact with mongodb to save data and the object contains all the functions and return callback
    adminUserObj.save((err, data)=>{
        if(err){
            console.log("we got the error!!", err)
            res.send("we got the error!!")
        }else{
            console.log("Admin is saved successfully!! ")
            res.send(data)
        }
    })

    //res.send("Hello from router");
})

module.exports = router;