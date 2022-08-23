let myFile =  require("../assessment");

let fs = require("fs");
let os = require("os");
let http = require("http");

let path = require("path");
const { dirname } = require("path");
const EventEmitter = require("events");
//const { Console } = require("console");

//__dirname

console.log(__dirname);
console.log(__filename);

os.hostname()
os.cpus()

// fs.readFile(dirname+"\nodebasics.js", (err, data)=>{
//     console.log(err);
//     console.log(data);
// })


//EventEmitter.on("start",(err, data)=>{console.log("do something on start");})
//EventEmitter.on("end",(err, data)=>{console.log("do something on start");})

//REPL - read evaluate print and loop

//ctrl+c - twice to break loop

// for (let i = 0; i < 100000; i++) {
//     console.log(i);
// }

//On a restaurant
// Malav - 5mins
// Mueen - 10mins
// Mikes - 15mins

// waiter -> 1 :- 5mins with cook + 10mins wait with cook + 15mins wait cook = 30 mins (Legacy)
 
// waiter -> 2 :- (5mins + 10 mins + 15mins) send it to cook + (once all are done) = 15 mins (JS)