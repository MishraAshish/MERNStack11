//spread operator : spreads the array in conservational manner, we also use it for the shallow copy of objet arrays

let arrayOFCities = ["Rome", "New York", "New Delhi", "London"];

//console.log(arrayOFCities[0])
//console.log(arrayOFCities[1])

//console.log(...arrayOFCities) //spread operator

//spread operator is used to combine two objects and preserve the immutability of each object
let User = {
    name : "Mike",
    age : 22
}

// Object.assign(target, source)
let User3 = {
    ...User, address : "new street on earth"
}

//console.log(User3)
User.cities = "Its my way of coding"
//console.log(User3)
//console.log(User)


function Sum(a = 0, b = 0, c = 0) {
    console.log(this.name)
    return a+b+c
}

let aarayNum = [550, 600, 990, 100]

console.log(Sum(...aarayNum))

//console.log("using apply " + Sum.apply(null, aarayNum))
console.log("using apply " + Sum.apply(User3, aarayNum))

let Accounts ={
    accountHolderName : "Tohney",
    balance : "$6000",
    address : {
        address1 : "address1",
        address2 : "address2"
    }
}

//let PurhaseOrder = {Accounts,  DeliveryAddress : "address3"};
let PurhaseOrder = {...Accounts,  deliveryAddress : "address3"};
//console.log(PurhaseOrder)

Accounts.accountHolderName = "Toan";
//console.log(PurhaseOrder)



// Rest Parameters- it is actaully the parameters that we receive in any function in the form of array, it will always be the last param

// function LargeSum(a = 0, b =0, c=0, ...numbers) { //..numbers is rest parameters
//     console.log( ...numbers)   
// }

// LargeSum(1,2,3,[9,7,8,7,6])


function LargeSum(...numbers) { //now this function can take any number of params
    let sum = 0;

    sum = numbers.reduce(function(prevVal, currVal, currIndex, array) {
        console.log(prevVal, currVal)//

        return prevVal + currVal //this will be the previous value in params
    }, 0)

    return sum;
}

let nums = [300, 600, 900];
console.log(LargeSum(...nums));

//let newNums = [3242,32423,23423,32423,23423,434234,32423,423423423,423,423,4234,23423,423,423,423,423];
//console.log(LargeSum(...newNums));


//Questions :
//Spread Operator - 
//create a list of vaccines and print
//create doctor object and print his qualifications and other details using spread
//create a vaccine object with details like - name, no of doses required, price etc and merge it with nearest doctor object using spread


//Rest Parameter - 
//create a function which accepts start and end of number and generates a array of that size, [100....150]
//then use this array to pass as spread operator into a function named largesum
//in largesum we should accept the array in rest parameter (...arrayOfNums), and then add the numbers
