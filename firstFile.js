//console.log("Hello World - Javascript!!")

//console.log("Hello World - Javascript!!") --> terminal node <filename>

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

//undefined, null, string, number, boolean, object

//functions
function getStudentName(name) {
    console.log(name)
    //return "Mei"
}

//getStudentName("Malav")
//console.log(getStudentName("Jason"))