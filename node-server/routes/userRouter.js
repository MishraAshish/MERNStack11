let express = require("express");
let router = express.Router();
let UserDataModel = require("../dataModel/UserDataModel");


router.post("/api/signinup",(req, res)=>{

    UserDataModel.findOne({userName : req.body.userName},(err, userData)=>{

        if(err){
            console.log(err)
            res.send("Error in fetching user!!")
        } else if(userData){ //get one user means its already present so return as it is userInfo - signin
            res.send(userData);
        }else {//this is the new user so we need to create mongodb object and save it - signup

            let userDataModelObj = new UserDataModel(req.body);

            userDataModelObj.save((errr, newUser)=>{ //signup
                //newUser will containe _id from mongodb created by default
                if (errr) {
                    console.log("errr ", errr);
                    res.send("Error Occured while creating user entry")
                } else {
                    console.log("newUser ", newUser);
                    res.send(newUser)
                }
            })

        }

    })
})