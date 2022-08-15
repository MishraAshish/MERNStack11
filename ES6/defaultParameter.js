// default params - are the parameter values that we set as default at the time of function definition

function Sum(a = 5, b = 0) {
    //s = 0;
    //a && b ? s=a+b : 0 
    //return s;
    
    return a + b
}

//console.log(Sum(null, 1))
//console.log(Sum(undefined, 1))

console.log(Sum(1))