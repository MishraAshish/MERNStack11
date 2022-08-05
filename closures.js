// OOP's fundamentals -
//1. Inheritance - constructor function in es5 and then classes in es6, prototype is the only way
//2. Encapsulation - data hiding can be done through closures, with the help of access modifiers
//3. Polymorphism - Overriding (it supports in function as well in classes) and OverLoading (doesnot support overloading)
//4. Abstraction - Not required in js

// Closures : A phenomenon when we have two nested functions and the parent function returns child one, at the time of return
// child function only return some required properties and others are kep private.

function Parent(name, age, cell) {
    var Name = name;
    var Age = age;
    var Mobile = cell; // public
    var AccountType = "Saving"; 
    var Balance = "$1000"; //private
    var password = "asdhkasjdhkas645464asd54a"; // private

    //here we decide what to send outside and what to keep private
    function Child(accountNumber, showBalance ,IsAdmin) {
        
        if (showBalance) {
            return {
                Name: Name,
                Balance : Balance
            }    
        } else {
                return {
                //Name: Name,
                Name, //key and the variable name to which we refer are same then we can use short-hand of es6
                Age ,
                Mobile ,
                accountNumber,
                AccountType            
            }    
        }
    }

    return Child;
}

var childFunc = Parent("Xiayoi",21,265623)//retuns child function

var childObj = childFunc(12345, true)

console.log(childObj)

