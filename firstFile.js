//console.log("Hello World - Javascript!!")

//console.log("Hello World - Javascript!!") --> terminal node <filename>

//functions
function getStudentName(name) {
    console.log(name)
    //return "Mei"
}

//getStudentName("Malav")
//console.log(getStudentName("Jason"))

//create a function to do the sum of 4 numbers passed in parameter

function sum(a,b,c,d) {
    console.log(d)
    return a+b+c+d;
    //return a+b+c+(d!= undefined? d : 0) //NaN - Not a Number
}

console.log(sum(1,2,3)) //no - 1 , yes - 7