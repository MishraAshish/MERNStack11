//Functions : Javascript is functional programming language and functions are the first class member citizens.

//Named Functions
function NewFunc(params) {
    //open and closed bracket represent the scope of a function and function definition
    //functions must return something, if not returning anything then JS returns (undefined) in place

    return params;  
}

//NewFunc()
//NewFunc()
//NewFunc()

var GlobalCount = 0;
//IIFE - Immediately Invocable Function Expression
(function IIEFF(count){
    GlobalCount = count;
    console.log(GlobalCount);
})(100) //this function will execute for once only - used for singleton pattern

//IIEFF(1) // we'll not get any reference
console.log(GlobalCount);

//function expression - its basically a variable that holds function definition
var myVarFunc = function (params) {
    //
};

// constuctor function - used to create class like structure in js

function User(fName, lName) {
    this.fName = fName,
    this.lName = lName,
    this.getUserName = function(){
        return this.fName + this.lName
    }
}

var userObj =  new User("Malav","Doshi")
console.log(userObj.getUserName());


//nested functions 
function A(params) {
    var a;
    //console.log(c) //can't access as accessibility is from top to bottom
    function B(params) {
        console.log(a)
        function C(params) {
            var c = ""
            console.log(a)
        }
    }    
}
