//Overloading : Same name functions perform different behaviour

// Over-Writing is present in javascript no overloading concept, the last defined function always called


CalcArea() // Last One - Jason***

function CalcArea(param) {
    console.log("Area Of Circle "+ 3.14*param*param)    
}

function CalcArea(param) {
    console.log("Area Of Circle "+ 3.14*param*param)    
}

CalcArea(5) // First

function CalcArea(a, b) {
    console.log("Area Of Rectangle "+ a*b)    
}

// var CalcArea = function CalcArea(a, b) { 
//     console.log("Area Of Rectangle "+ a*b)    
// }

CalcArea(5,5) // Second one - rectangle

function CalcArea() {
    console.log("What actually you are trying to calculate! Please elaborate!!")    
}

CalcArea(5,6,5) // First One - 