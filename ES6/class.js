//classes :  classes with syntax similar to java, .net 
//  -- are special type of functions in javascript that give us desired behaviour

// class SomeName {
//     constructor(){

//     }
//     someMethods(){

//     }
// }

class Vaccination 
{
    constructor(name, date, place) {
        this.name = name;
        this.date = date;
        this.place = place;
    }

    getSchedule () {
        return {
            name : this.name,
            place : this.place
        }
    }

    calculateArea = (a,b)=>a*b
}

let firstDose = new Vaccination("RCL-First ","18th August", "In some hospital")

console.log(firstDose.getSchedule())
console.log(firstDose.calculateArea(5,5))

//create a class to calculate area of anything