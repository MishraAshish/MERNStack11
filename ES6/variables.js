//ES5 - released in 2009 and works on ecmascript base standards also called plain javascript, vanila javascript
//ES6 - released in 2015 and support ecmascript 6 standards to give us advance features closer to class based progm lang

//ES5 - var : functional scope hoisted variable
//ES6 - let and const : block scoped variables or lexical variables

//1. var is a functional scope, let and const are block scope (lexical scope) and doesn't support hoisting

// function name(params) {
//     var someName = "Some Name";
// }

var someName = "Some Name 2";
let newVar_1 = "Let Lexical"
const newVarConst_2 = "Const Lexical";

{
    var someName = "Some Name 2";
    let newVar = "Let Lexical"
    const newVarConst = "Const Lexical";
    //console.log(newVarConst);
    //console.log(newVar);
}
//console.log(someName);
//console.log(newVar); //can't be accessed outside of lexical scope/block scope/ {}

//2. we can declare and assign var multple times, however let can be declared only once and can be assigned multiple times
// whereas const needs to be defined and declared at the same time and can't be reassigned again

// var x = 99;
// console.log(x)

// let x_let = 990;
// console.log(x_let)

// x = 100;
// console.log(x)

// x_let = 991;
// console.log(x_let)


// var x = 101;
// console.log(x)

//let x_let = 991; //redeclaration is not allowed in let and const

//For const we need to assign the value as soon as we declare and reassignment is not allowed

const y_const = 89;
//console.log(y_const)

//y_const = 90; //TypeError: Assignment to constant variable. 
//console.log(y_const)

//const y_const = 89; //redeclaration is also not allowed

let my_let;

my_let = "MyLet";
//console.log(my_let)

//const my_const; //const declarations must be initialized
//my_const = "5202" 

const User = {
    name : "Some User",
    age : "unlimited"
} 

//User = {} //direct assignment to const is not possible
User.name = "New Name" //we can update value to a constant reference

//console.log(User)

//console.log(k) // let doesn't support hoisting
//let k = 0;

//3. Problem with functional scope variable can be solved by lexical scoped variable 
var index = undefined;
// for (index = 0; index < 5; index++) {    
//     setTimeout(function () {
//         console.log(`index value is ${index}`) //0,1,2,3,4 - with each of 1 second delay
//     }, 1000)
// }
// console.log(index) // 4, 0, 5

// for (var j = 0; j < 5; j++) {    
//     (function (jiife) {
//         setTimeout(function () {
//             console.log(`j value is ${jiife}`) //0,1,2,3,4 - with each of 1 second delay
//         }, 1000)  
//     })(j) 
// }
// console.log(j)



for (let i = 0; i < 5 ; i++) {
    setTimeout(function () {
        console.log(`index value is ${i}`) //0,1,2,3,4 - with each of 1 second delay
    }, 2000)
}
console.log(i) //trying to access i outside of block {}