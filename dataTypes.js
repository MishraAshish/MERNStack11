//datatype for different set of values 
//basic types - 
//primitive-types : string, number, boolean, undefined, null
//non-primitive type : Object

//undefined, null, string, number, boolean, object

console.log(strName) //undefined - valid data type
console.log(typeof strName)

var strName = "Joon";
console.log(strName);
console.log(typeof strName) //string


strName = 10000;
console.log(strName); //number
console.log(typeof strName)


strName = 10000.52;
console.log(strName); //number
console.log(typeof strName)

strName = {name : "Mueen", age :"26"}
console.log(strName); //object
console.log(typeof strName)

strName = true //1==0
console.log(strName); //boolean
console.log(typeof strName)

strName = null
console.log(strName); //Object
console.log(typeof strName)



//symbol data introduced in ES6
var mySym = Symbol("New Value");
console.log("Symbol ", mySym);
console.log("TypeOf Symbol ", typeof mySym);