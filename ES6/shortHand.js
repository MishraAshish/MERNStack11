// If my key value (that i am reading from any variable) are same then instead of having both of them we can have only one

let cat = "Miaow", // if we put comma we don't need to use let again and it will continue as let till semicolon ;
dog = "Woof",
bird = "Chrip",
lion = "roar";

let AnimalSounds = {
     cat : cat,
     dog : dog,
     bird : bird,
     lion : lion
}

//console.log(AnimalSounds)

// if key of object and the value it refers to in the variable both are same then we use one of them
// let AnimalSoundsES6 = {
//     cat,
//     dog,
//     bird,
//     lion
// }
let AnimalSoundsES6 = {cat,dog,bird,lion} // this makes it short hand

//console.log(AnimalSoundsES6)

//console.log("Animal Sounds Stored in application are " + AnimalSoundsES6) //[object object]
//console.log(`Animal Sounds Stored ${AnimalSoundsES6}`) //[object object]

console.log("Animal Sounds Stored in application are " + JSON.stringify(AnimalSoundsES6)) //older way

//console.log in ES6 can directly stringfy if you put comma
console.log("Animal Sounds Stored in application are ", AnimalSoundsES6)