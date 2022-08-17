// Destructuring is a way to reduce the numbers of variable initializations in our code
//a way to assign data without tracing from object to object and without intializing multiple variables

// let userDetails = ["John",17,"somewhere on earth"]
// let myName = userDetails[0]
// let myage = userDetails[1]
// let myadd = userDetails[2]

// console.log(myName, myadd, myage)

//1. Array Destructuring

//a. declaration reduction

//let [myName, myage, myadd, interests] = ["Doe",20,"somewhere on california", "Javascript"]
//console.log(myName, myadd, myage, interests)

//b. do defaulting of variables

//let [myName = "Default Name", myage = 101, myadd = "US", interests = "Not Interseted"] = ["Malav", 20];
//console.log(myName, myage, myadd, interests)

//c. assign subset of array's as rest parameter

//let [a, b, ...f] = [3.14, 9.81, 3,4,5,6,7,8,9,10]
//console.log(a, b, f)

//d.  swapping of variables

//let [var1, var2] = ["value1", "value2"];
//[var1, var2] = [var2, var1]
//console.log(var1, var2)

//2. Object Destructuring

let User = {
    name : "Jason",
    address : {
        addres1 : "Somewhere on earth",
        addres2 : "Somewhere in US"
    },
    session : "ES6"
}
//let Product = {User, Product: {}, ShippingAddress : {}, PaymentDetails : {}, Coupon : {}}

//let session = User["session"];
//let addres1 = User.address.addres1;

let {session, address:{addres1, shippingAddress = "My door steps" }} = User;
console.log(session, addres1, shippingAddress);

//console.log(User);

//question :

let StudentTest = {
    firstname : "Put your name",
    address : " ??",
    sessionTopics : {
        covered1 : "CoreJS",
        covered2 : "OOJS"
    }
}

//print firstname and sessionTopics, 
//along with that also create a lastname and covered3 as "ES6", without making any change in StudentTest