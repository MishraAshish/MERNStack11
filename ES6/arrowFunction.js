// Also termed as fat arrow function, Are introduced in ES6 to give two basic advantages
//1. Shorter way of writing a function like lambda expression (fat)=arrow> ()=>
//2. To help resolving problem with this (context) and replacing bind upto some extent

// function add(a,b) {
//     return a+b
// }

// let add = (a, b)=> {
//     //any conditional operation should be put here inside definition {}
//     return a+b
// }

//a shorter syntax
let add = (a, b)=> a+b; //if no conditions present then just use a single line statement
//console.log(add(5,6))

//resolving the issue with context (this)

let StudentTest = {
    firstname : "Joon",

    getUserName : function () {

        console.log(this.firstname)

        //that - to copy the context
        //bind - to supply the context later
        // setTimeout(function () {
        //     console.log(this.firstname)
        // }, 2000)

        //if we use arrow function in callback of timeout, then it copies the context of immediate parent function
        setTimeout(() => {
            console.log(this.firstname)
        }, 2000)
    }
}

StudentTest.getUserName()