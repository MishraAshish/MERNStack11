//import { User } from "./module"; //ES6

//const { GetUserInfo } = require("./module")
var module = require("./module") //importing from module file

var { User2 } = require("./module")

console.log(module.User.GetUserInfo())
console.log(module.User2.GetUserInfo())

console.log(User2.GetUserInfo())