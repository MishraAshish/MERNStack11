// Objects : the basic building block of js can be recognised as memory space to hold values in key/value
// we can create object - {} or using the Object class

// Object as a class
var User = {
    name : "Mike",
    age : 22,
    session : "MERNStack",
    
    getUserName : function () {
        return this.name;
    }
}

console.log(User.getUserName())

//inheritance 
//1. by using the new keyword
// we should avoid this for as instead of making to separate objects it copies the same memory location to child

// var student = new Object(User);
// student.address = "Somewhere on earth";
// student.getAddress = function () {
//     return this.address;
// }
// console.log(student.age)
// console.log(student.getAddress())
// console.log(User)


//2. by using the Object.create method
// this creates two different entities and child points to parent when property not available but parent is not updated

var student = Object.create(User);

student.name = "Jason";
student.address = "Somewhere on earth";
student.getAddress = function () {
    return this.address;
}

student.getUserName = function (params) { //overriding the method/functions
    return "Sir "+this.name 
}

//console.log(student.age)
//console.log(student.getAddress())
console.log(student.getUserName())
console.log(User.getUserName)