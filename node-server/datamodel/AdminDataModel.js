//This datamodel will make us connect to mongodb and also allows us to create an object relational mapping
// this way event hough we are into nosql db but we'll be creating a definite space for our documents
// document - a json object that contains a key values
let mongoose = require("mongoose"),
//importing moongoose class to create connection, schema, collection and returning model

mongooseSchema = mongoose.Schema; //getting the schema class to use for creating our document (collection)
//connection
//schema
//model with collection name
//export - mongoose data model object
//creates db with name mernstack8 or opens a connection if already present
mongoose.connect("mongodb://127.0.0.1/mernstack11");

let AdminUserDocSchema = new mongooseSchema({
    name : {type: String, required: true},
    age : Number,
    session : String,
    address : String,
    expertise : String
},
{
    versionKey: false //if we want to put it true just dont write it, and it maintains versions of mongodb doc data
})

//this is going to be the collection name and will get plularised
let adminUserModel = mongoose.model("adminuser", AdminUserDocSchema)

module.exports = adminUserModel;