//Special kind of Collection Created in ES6 to set iterables even with non primitive key's unlike other collections(json)
//Allows us to use a lot of methods to get, set, delete and do other operations without much pain
//remembers insertion order so the fetch is always easy compared to any other collection

//[{key : "value"}]
let myMap = new Map();

let keyString = 'a string', keyObj = {}, keyFunc = function() {}, keyNum = 2000;

myMap.set(keyString, "A string value associated to string key");
myMap.set(keyObj, "This contains key as an object")
myMap.set(keyFunc, "This contains key as an function")
myMap.set(keyNum, "This contains key as an number")

//console.log(myMap)
//console.log(myMap.get('a string')) 
//console.log(myMap.get({}))
//console.log(myMap.get(function() {}))
//console.log(myMap.get(keyObj))

myMap.delete(keyNum)
// console.log(myMap)
// console.log(myMap.entries())

// 90% of the cases keys would be string, alphanumenric or numeric


//when we need a iterable/collection with unique values
//Set : this maintains a set of unique collection with additional properties and methods like map

let StudentSet = new Set(["Mike", "Mei", "Malav", "Mueen","Joon","Danny","Jasmine","Jason","Xiayoi","Mei"])

console.log(StudentSet.add("Mike"))

console.log(StudentSet.add("Malav"))
console.log(StudentSet.values())

//console.log(StudentSet.clear())

StudentSet.add({"name":"Malav"})

console.log(StudentSet.values())
