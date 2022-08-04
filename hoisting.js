// Hoisting : A phenomenon when we are able to get the values in variables or functions even before they are decalred
// this also gives a compilation behaviour to javascript, so this creates a snapshot of all the vars and functions
// variables default value - undefined (variable hositing)
// functions dafault value - function definition (functional hoisting)

PrintSomething("Jasmine"); // function gets hoisted with its definition
console.log(typeof PrintSomething)
console.log(typeof someOtherNAme)

var someOtherNAme = undefined; //
var someNAme = undefined; //default value hoisted - as undefined

var User = {
    Name : "Joon",
    Age : 20
}

console.log(printData)
//printData(User) //


someNAme = "someName";

// Named function
function PrintSomething(params) {
    console.log("Name is " + params)
}


// function expression
var printData =  function(params) {    
    console.log("Some Data ", params)
    return "Test";
}

printData(User)



someOtherNAme = "someOtherName"