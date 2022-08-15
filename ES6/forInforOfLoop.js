// for in loop - iterates over the property value

//for in loop  
let person = {fname:"John", lname:"Doe", age:25, address : {}}; 

for (const key in person) {
    //console.log(`key - ${key}`)
    if (Object.hasOwnProperty.call(person, key)) {
        const element = person[key];
        //console.log(element)
    }
}


//console.log("Other Example") 

let arr = [3,5,7];
//arr[3] = 9 , arr.push(9)

arr.foo = 10;
arr.bar = "BAZ";

//console.log(arr);
//let i = 0;
for (const num in arr) {
    //if (arr.hasOwnProperty(num)) { //check to avoid breaks
        const element = arr[num];
        //console.log(element);
        //i++;
        //console.log(i);
    //}
}


//for of loop : iterates over the property names, more recommended for array of numbers or string instead of objects

console.log("For Of Loop") 

let cars = ['BMW', 'Volvo', 'Mini']; 
cars.new = ["Toyota"] //string key would not be read 
//cars[3] = ["Toyota"]

for (const car of cars) {
    console.log(" "+ car)
}

//console.log("For Of another example")
var arr2 = [3, 5, 7];
arr2.hello = 20;
//arr2[3] = 21;

console.log(arr2); 

for (let value of arr2) {
    console.log(value); 
    // logs “3”, “5”, “7” 
}
