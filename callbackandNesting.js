// callback functions are the functions that we can pass as parameter to another function 
// the best part is call back function not just hold the definition, but also keep hold the scope

// function NewFunction(callBackFunc, param1, param2) { }


function Print(param) {
    console.log("Things that we print - " + param)
}

function Add(printFunc, a, b) {
    var sum = a + b;
    printFunc(sum) // using callback function
}

Add(Print, 5, 6)

// function Click(signin, userName, authKey) {
    
//     signin(userName, authKey) // using callback function
// }
// Click(Print, 5, 6)


//Create a function to print user details like - UserName, Age, SessionAttending - PrintUser
//Use the print function as callback to print a getstudent and a getemployee


// nested functions do hold the scope of outerfunctions variables or properties 
//javascript currying
var e = 15; //global scope 

function sum1(a){

  return function sum2(b){

    return function sum3(c){
      // outer functions scope
      return function sum4(d){
        // local scope
        return a + b + c + d + e;
      }
    }
  }
}

var myVal =  sum1(1)(2)(3)(4); //chain execution of function
console.log(myVal)

var sum2 = sum1(10);
var sum3 = sum2(10);
var sum4 = sum3(10);
var result = sum4(10);
console.log(result)
